import websocket from 'websocket';
import superagent from 'superagent-bluebird-promise';
import getSign from './iqiyiSign';
import { removeMentong } from '../clients';
import log from '../log';
import { getAndSaveActionAuth } from '../services/mentong';
import {
  sdkVersion,
  wsHost,
  msgTypes,
  sendMsgUrl,
  userAgent,
  contentType,
  referer,
  host,
  pingPongTime,
  origin,
  PING_MSG,
} from '../constant';

const WebSocketClient = websocket.client;
export default class Client {
  constructor({ userId, mentongId, roomId, deviceId, authCookie, actionAuth, welcome, thanks, follow, delayedSending, dpf, callback = () => {} }) {
    this.userId = userId;
    this.mentongId = mentongId;
    this.roomId = roomId;
    this.deviceId = deviceId;
    this.authCookie = authCookie;
    this.actionAuth = actionAuth;
    this.welcome = welcome || [];
    this.thanks = thanks || [];
    this.follow = follow || [];
    this.delayedSending = delayedSending || { msgs: [], minutes: 1 };
    this.callback = callback;
    this.dpf = dpf;

    this.messageQ = {};
    this.timeoutEntities = {};
    this.intervalEntities = {};

    this.pointer = 1;
    this.client = new WebSocketClient();

    this.status = false;

    const auth = {
      v: sdkVersion,
      p: 1,
      n: 1,
      r: this.roomId,
      d: this.deviceId,
      at: this.authCookie ? 2 : 3,
      ak: this.authCookie ? this.authCookie: this.deviceId,
      ag: 1
    };
    auth.sg = getSign(auth); // 签名
    // wsHost 有别的服务器 尝试连接失败后 换 2

    this.client.on('connect', (connection) => {
      this.status = true;
      this.callback(true);
      log.info(`${this.roomId}已连接`, { roomId: this.roomId, mentongId: this.mentongId, userId: this.userId });
      this.connection = connection;
      this.connectionInit();
    });
    
    this.client.on('connectFailed', (error) => {
      this.status = false;
      this.callback(false);
      removeMentong(this.userId, this.mentongId);
      log.error(error, { message: 'connectFailed', roomId: this.roomId, mentongId: this.mentongId, userId: this.userId });
    });

    const authArray = Object.keys(auth).map((key) => `${key}=${auth[key]}`);
    this.client.connect(`${wsHost}?${authArray.join('&')}`);
  }

  connectionInit() {
    this.connection.on('error', (error) => {
      this.status = false;
      this.callback(false);
      removeMentong(this.userId, this.mentongId);
      log.error(error, { message: 'ConnectionError', roomId: this.roomId, mentongId: this.mentongId, userId: this.userId });
    });

    this.connection.on('close', (data) =>  {
      this.status = false;
      this.callback(false);
      removeMentong(this.userId, this.mentongId);
      log.info(`${this.roomId}已关闭`, { roomId: this.roomId, mentongId: this.mentongId, userId: this.userId });
    });

    this.connection.on('message', this.watch.bind(this));
    this.addTimer('interval', 'pingpongTimer', this.pingpong, pingPongTime);
    this.addTimer('interval', 'sendMessageQConsumeTimer', this.sendMessageQConsumer, 4000);
    this.initDelayedSending();
    // 6小时自动清除
    this.addTimer('timeout', 'stopTimer', () => removeMentong(this.userId, this.mentongId), 6 * 60 * 60 * 1000);

    // 获取操作权限
    this.getActionAuth();
    this.addTimer('interval', 'actionAuthTimer', this.getActionAuth, 60 * 60 * 1000);

  }

  getActionAuth() {
    getAndSaveActionAuth({ authCookie: this.authCookie, deviceId: this.deviceId, userId: this.userId, mentongId: this.mentongId})
    .then((actionAuth) => {
      if (actionAuth) {
        this.actionAuth = actionAuth;
      }
    });
  }

  watch(message) {
    if (message.utf8Data && message.utf8Data !== 'PINGREP') {
      try {
        const messageData = JSON.parse(message.utf8Data);
        if (messageData[0]) {
          const { msgType, op_userInfo = {}, op_info = {} } = messageData[0].ct || {};
          switch (msgType) {
            case msgTypes.enter: this.checkAndFormatAndAddMessageQ(this.welcome, op_userInfo.nick_name);break;
            case msgTypes.gift: this.checkAndFormatAndAddMessageQ(this.thanks, op_userInfo.nick_name);break;
            case msgTypes.follow: op_info.type === 'create' && this.checkAndFormatAndAddMessageQ(this.follow, op_userInfo.nick_name);break;
          }
        }
      } catch (e) {
        log.error(e, { roomId: this.roomId, mentongId: this.mentongId, userId: this.userId });
      }
    }
  }

  addTimer(type, name, func, time) {
    if (type === 'timeout') {
      this.timeoutEntities[name] = setTimeout(func.bind(this), time);
    }

    if (type === 'interval') {
      this.intervalEntities[name] = setInterval(func.bind(this), time);
    }
  }

  clearTimer() {
    Object.values(this.timeoutEntities).forEach((timer) => {
      clearTimeout(timer);
    });

    Object.values(this.intervalEntities).forEach((timer) => {
      clearInterval(timer);
    });
  }

  checkAndFormatAndAddMessageQ(setting, nick_name) {
    if (!setting.length) {
      return;
    }
    const { prefix = '', postfix = '' } = setting[Math.floor(Math.random() * setting.length)] || {};
    if (!nick_name || (!prefix && !postfix)) {
      return;
    }
    this.addMessageQ(`${prefix}${nick_name}${postfix}`);
  }

  initDelayedSending() {
    let { msgs = [], minutes } = this.delayedSending;
    msgs = msgs.filter(({msg}) => msg);
    if (!msgs.length) {
      return;
    }
    this.addTimer('interval', 'delayedSendingTimer', () => {
      const { msg } = (msgs[Math.floor(Math.random() * msgs.length)] || {});
      this.addMessageQ(msg);
    }, (Number(minutes) || 1) * 60 * 1000);
  }

  addMessageQ(message) {
    if (message) {
      this.messageQ[++this.pointer] = message;
    }
  }

  async sendMessage(message) {
    if (!message) {
      return;
    }
    // cookie 模拟登陆获取
    const ServerCookie = [
      `QC005=${this.deviceId}`, // d deviceId
      this.actionAuth, // 没此值能发送成功但打不到公屏上
      `P00001=${this.authCookie}`, // 很重要关于登录的 ak authCookie
      // 'Hm_lvt_0f5556da646371aeac76715b71f140dd=1544539276,1545461303',
      // 'QC007=DIRECT',
      // 'QC006=fwqelljgcptgn3emhkj78om8',
      // 'QC008=1545461316.1545461316.1545461316.1',
      // 'QC010=156133368',
      // 'nu=0',
      // 'P00004=.1545461330.ed95f24eb7',
      // 'P00003=1408895958',
      // 'P00010=1408895958',
      // 'P01010=1545494400',
      // 'P00007=9cXoAcgDAouOMVihGZ90cbXvjFB4IWwedy9T53uuKjZm2Ne6oKv8m2ciZIwTNLMkl2kNb4',
      // 'P00PRU=1408895958',
      // 'P00002=%7B%22uid%22%3A%221408895958%22%2C%22pru%22%3A1408895958%2C%22user_name%22%3A%2217310859199%22%2C%22nickname%22%3A%22%5Cu504f%5Cu7231%5Cu725b%5Cu8f70%5Cu8f70%22%2C%22pnickname%22%3A%22%5Cu504f%5Cu7231%5Cu725b%5Cu8f70%5Cu8f70%22%2C%22type%22%3A11%2C%22email%22%3A%22%22%7D',
      // 'P000email=17310859199',
      // 'QC160=%7B%22u%22%3A%2217310859199%22%2C%22lang%22%3A%22%22%2C%22local%22%3A%7B%22name%22%3A%22%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%22%2C%22init%22%3A%22Z%22%2C%22rcode%22%3A48%2C%22acode%22%3A%2286%22%7D%2C%22type%22%3A%22p1%22%7D',
      // 'QX00003=1408895958',
      // 'checkInDialogShow=1',
      // 'Hm_lpvt_0f5556da646371aeac76715b71f140dd=1545462826',
      // '__dfp=a0754d8ae271b24810b04c7befe0e6d9e1914939054c533fde56d621014f1a76f2@1545835276280@1544539276280',
    ];
    const res = await superagent
      .post(sendMsgUrl)
      .set('User-Agent', userAgent)
      .set('Content-Type', contentType)
      .set('Cookie', ServerCookie.join(';'))
      .set('Host', host)
      .set('Referer', `${referer}/${this.roomId}`)
      .set('Origin', origin)
      .send({
        room_id: this.roomId,
        type: 1,
        content: message,
        // dpf: this.dpf, // 此参数可以不传
      });
    if (res.status === 200) {
      if (res.body.code === 200) {
        return log.info(`发送成功:${message}`, { body: res.body, roomId: this.roomId, mentongId: this.mentongId, userId: this.userId });
      } else if (res.code === 201 && res.body.msg === '发言有点频繁哦，稍后再发吧~') {
        return this.addMessageQ(message);
      }
    }
    log.info('消息发送失败', { body: res.body, roomId: this.roomId, mentongId: this.mentongId, userId: this.userId });
  }

  sendMessageQConsumer() {
    const top = Object.keys(this.messageQ)[0];
    if (top) {
      this.sendMessage(this.messageQ[top]);
      delete this.messageQ[top];
    }
  }

  pingpong() {
    this.connection.sendUTF(PING_MSG);
  }

  close() {
    this.clearTimer();
    this.messageQ = {};
    this.client.abort();
    log.info('连接关闭', { roomId: this.roomId, mentongId: this.mentongId, userId: this.userId });
    this.connection = null;
    this.client = null;
  }
}
