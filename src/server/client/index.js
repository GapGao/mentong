import websocket from 'websocket';
import superagent from 'superagent';
import getSign from './iqiyiSign';
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
} from '../constant';

const WebSocketClient = websocket.client;
export default class Client {
  constructor({ roomId, deviceId, authCookie, actionAuth, dpf }) {
    this.roomId = roomId;
    this.deviceId = deviceId;
    this.authCookie = authCookie;
    this.actionAuth = actionAuth;
    this.dpf = dpf;

    this.messageQ = {};
    this.pointer = 1;
    this.client = new WebSocketClient();

    this.status = 0; // 0 close 1 open

    this.client.on('connectFailed', (error) => {
      this.status = 0;
      console.log('Connect Error: ' + error.toString());
    });
   
    this.client.on('connect', (connection) => {
      console.time('连接时间');
      console.log('WebSocket Client Connected');
      this.status = 1;
      this.connection = connection;
      this.connectionInit();
    });
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
    const authArray = Object.keys(auth).map((key) => `${key}=${auth[key]}`);
    this.client.connect(`${wsHost}?${authArray.join('&')}`);
  }

  connectionInit() {
    this.connection.on('error', (error) => {
      console.log("Connection Error: " + error.toString());
      this.status = 1;
    });

    this.connection.on('close', (data) =>  {
      this.status = 1;
      console.timeEnd('连接时间');
      console.log('Connection Closed');
    });

    this.connection.on('message', (message) => {
      if (message.utf8Data && message.utf8Data !== 'PINGREP') {
        try {
          const messageDate = JSON.parse(message.utf8Data);
          if (messageDate[0]) {
            const { msgType, op_userInfo = {} } = messageDate[0].ct || {};
            switch (msgType) {
            case msgTypes.enter: this.addMessageQ(op_userInfo.nick_name);break;
            }
          }
        } catch (e) {
          console.log(e);
        }
      }
    });

    this.pingpong();
    this.sendMessageQConsumer();
  }

  addMessageQ(nick_name) {
    if (nick_name) {
      this.messageQ[++this.pointer] = nick_name;
    }
  }

  sendMessage(nick_name) {
    if (!nick_name) {
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
    superagent
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
        // content: `欢迎 ${nick_name} 进入直播间`,
        content: '666',
        // dpf: this.dpf, // 此参数可以不传
      })
      .end((err, res) => {
        if (res.body.code === 200) {
          console.log('发送成功');
        } else if (res.code === 201 && res.body.msg === '发言有点频繁哦，稍后再发吧~') {
          this.addMessageQ(nick_name);
        }
      });
  }

  sendMessageQConsumer() {
    this.timer = setInterval(() => {
      const top = Object.keys(this.messageQ)[0];
      if (top) {
        this.sendMessage(this.messageQ[top]);
        delete this.messageQ[top];
      }
    }, 4000);
  }

  pingpong() {
    this.pingTimer = setInterval(() => {
      this.connection.sendUTF('PINGREQ');
    }, pingPongTime);
    this.pongTimer = setInterval(() => {
      this.connection.sendUTF('PINGREP');
    }, pingPongTime);
  }

  close() {
    clearInterval(this.timer);
    clearInterval(this.pingTimer);
    clearInterval(this.pongTimer);
    this.messageQ = {};
    this.client.abort();
    this.connection = null;
    this.client = null;
  }
}
