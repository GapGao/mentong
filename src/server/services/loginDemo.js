/* eslint-disable */
/**
 * 这里只是在调研登录的方式
 * 并不是实际调用代码
 */
const superagent = require('superagent');
const cheerio = require('cheerio');
const qs = require('querystring');
const qr = require('qr-image');
const constant = require('./constant');
const client = require('./client');

// 账号密码登录
function login(req, res, next) {
  let deviceId;
  let authCookie;
  let actionAuth;
  const account = req.body.account;
  const passwd = req.body.passwd;
  const roomId = req.body.roomId;
  const userId = req.session.userId;
  superagent
  .post(constant.loginUrl)
  .set('User-Agent', constant.userAgent)
  .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
  .set('Host', 'passport.pps.tv')
  // .set('Referer', `https://www.pps.tv/iframe/loginreg?ver=1&pf=1&p=10&p1=101&p2=1016&agenttype=78&ptid=01010041010000000000`)
  .set('Origin', 'https://www.pps.tv')
  .send({
    email: '17310859199',
    passwd: '4fd72da4e3dbd5b67ab6d2feb236464b806b932a8159d681707e36dbf61476ce67e2941449af37a57cf34278e534ff4cc0de9b9bae828d3a1f768dc7aed056fa',
    agenttype: 78,
    __NEW: 1,
    checkExist: 1,
    // piccode: '',
    // lang: '',
    // ptid: '01010041010000000000',
    // verifyPhone: 1,
    // area_code: 86,
    // dfp: 'a0a8e555c89e264ceaa44aa332744b89ea538894740ad022b863de4a4b45884b21',
    // envinfo: 'eyJqbiI6Ik1vemlsbGEvNS4wIChNYWNpbnRvc2g7IEludGVsIE1hYyBPUyBYIDEwXzE0XzApIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83MS4wLjM1NzguOTggU2FmYXJpLzUzNy4zNiIsImNtIjoiemgtQ04iLCJndSI6MjQsInVmIjoyLCJqciI6WzE0NDAsOTAwXSwiZGkiOlsxNDQwLDc5OF0sInpwIjotNDgwLCJ1aCI6MSwic2giOjEsImhlIjoxLCJ6byI6MSwicnYiOiJ1bmtub3duIiwibngiOiJNYWNJbnRlbCIsIml3IjoidW5rbm93biIsInFtIjpbIkNocm9tZSBQREYgUGx1Z2luOjpQb3J0YWJsZSBEb2N1bWVudCBGb3JtYXQ6OmFwcGxpY2F0aW9uL3gtZ29vZ2xlLWNocm9tZS1wZGZ+cGRmIiwiQ2hyb21lIFBERiBWaWV3ZXI6Ojo6YXBwbGljYXRpb24vcGRmfnBkZiIsIk5hdGl2ZSBDbGllbnQ6Ojo6YXBwbGljYXRpb24veC1uYWNsfixhcHBsaWNhdGlvbi94LXBuYWNsfiIsIlNob2Nrd2F2ZSBGbGFzaDo6U2hvY2t3YXZlIEZsYXNoIDMyLjAgcjA6OmFwcGxpY2F0aW9uL3gtc2hvY2t3YXZlLWZsYXNofnN3ZixhcHBsaWNhdGlvbi9mdXR1cmVzcGxhc2h+c3BsIl0sIndyIjoiMTM1OGQzM2MzOTIyMjMxZmI3YTAwNDg1N2M5MmIyY2UiLCJ3ZyI6ImJhNjAwZTI0ZmUxN2E2Y2MwOThlODhjNTU0MmIxNzI3IiwiZmsiOmZhbHNlLCJyZyI6ZmFsc2UsInh5IjpmYWxzZSwiam0iOmZhbHNlLCJiYSI6ZmFsc2UsInRtIjpbMCxmYWxzZSxmYWxzZV0sImF1Ijp0cnVlLCJtaSI6ImNmYTJjMzA4LTkxMDQtMDFhZS1mMTVhLTgwNTA0NmIyZDYxMiIsImNsIjoiUENXRUIiLCJzdiI6IjEuMCIsImpnIjoiMWI1YjRjZTE3MjdlYjAzNGI0NGQ3MzcyYThhZGVjNGYiLCJmaCI6IjMyZGUydWZlejQwYjF5cXVsejZ6Mm5neiIsImlmbSI6W3RydWUsNDYwLDQyMCwiaHR0cHM6Ly94LnBwcy50di8iXSwiZXgiOiIiLCJwdiI6dHJ1ZX0='
  })
  .end((err, res) => {
    console.log(res)
    console.log(res.text)
    const cookies = res.header['set-cookie'];
    cookies.forEach((cookie) => {
      if (cookie.includes(constant.authCookieKey)) {
        authCookie = cookie.split('=')[1];
      }
      if (cookie.includes(constant.deviceIdKey)) {
        deviceId = cookie.split('=')[1];
      }
    })
    // 将cookie入库...
    const ServerCookie = [
      `QC005=${deviceId}`,
      `P00001=${authCookie}`,
    ];
    superagent
    .get(constant.getActionAuthUrl)
    .set('User-Agent', constant.userAgent)
    .set('Content-Type', constant.contentType)
    .set('Cookie', ServerCookie.join(';'))
    .set('Host', constant.host)
    .set('Referer', constant.origin)
    .end((err, res) => {
      const cookies = res.header['set-cookie'];
      actionAuth = cookies[1].split(';')[0];
      // 入库 登录成功
      // 返回mentongId
      clients[userId][mentongId] = new Client({
        roomId: roomId,
        deviceId: deviceId,
        authCookie: authCookie,
        actionAuth: actionAuth,
      });
      res.status(200);
    })
  });
}

// 短信登录的
function login2() {
  let deviceId;
  let authCookie;
  let actionAuth;
  // 拉取页面的
  superagent
  .get('https://www.pps.tv/iframe/smslogin?from_url=https%3A%2F%2Fx.pps.tv%2F%3Ffrom%3DbaiduPC&agenttype=78&ptid=01010041010000000000&pf=1&p=10&p1=101&p2=1016')
  .end((err, res) => {
    // const $ = cheerio.load(res.text);
    console.log('---------')
    console.log(res)
  })
  // 账号check的
  superagent
  .post('https://passport.pps.tv/apis/user/check_account.action')
  .send({
    __NEW: 1,
    account: '13131100850',
    agenttype: 78,
    area_code: 86,
    dfp: 'a0190f3113446f4886b2dcd863801515fb3298e6e002eb4cc6ec35394ba1f77896',
    lang: '',
    ptid: '01010041010000000000',
    qd_sc: '817532cb1769502f0100bbda9787cec1',
  })
  .end((err, res) => {
    console.log(res)
  });
  // 发短信的 24小时内验证码有限制
  superagent
  .post('https://passport.pps.tv/apis/phone/secure_send_cellphone_authcode.action')
  // .set('Cookie', 'P00004=.1545476111.a2ea4c6570; QC005=8c6e1083ae0c1100fe168eb95d3c34b4; QC007=DIRECT; QC006=pr2pf64ljo0vdts1yzvfwl9b; QC008=1545478729.1545478729.1545478729.1; nu=0; QC160=%7B%22u%22%3A%2217310859199%22%2C%22lang%22%3A%22%22%2C%22local%22%3A%7B%22name%22%3A%22%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%22%2C%22init%22%3A%22Z%22%2C%22rcode%22%3A48%2C%22acode%22%3A%2286%22%7D%2C%22type%22%3A%22p1%22%7D; Hm_lvt_9aa02205337aff47f8bbf0d441693828=1545479334; Hm_lpvt_9aa02205337aff47f8bbf0d441693828=1545479334; QC170=0; QC163=1; vfrm=baiduPC; x_4adb7=md5_jpzevx9y_1zu6KHD_jqmppgcs_96f44_2a434; QC010=163463551; __dfp=a0754d8ae271b24810b04c7befe0e6d9e1914939054c533fde56d621014f1a76f2@1545835276280@1544539276280')
  .set('User-Agent', constant.userAgent)
  .set('Content-Type', constant.contentType)
  .set('Host', 'passport.pps.tv')
  // .set('Referer', 'https://www.pps.tv/iframe/smslogin?from_url=https%3A%2F%2Fx.pps.tv%2F%3Ffrom%3DbaiduPC&agenttype=78&ptid=01010041010000000000&pf=1&p=10&p1=101&p2=1016')
  .set('Origin', 'https://www.pps.tv')
  .send({
    cellphoneNumber: '89d7b2d68b4067eb6494ca654b1f8968c2a95af384ea75696e9154a7504511f7c1c9d98c9d64322c96315afae52d6f21bf6e95e0d14d4a27bf5e05de7d47e768',
    agenttype: 78,
    __NEW: 1,
    requestType: 22,
    serviceId: 2,
    qd_sc: 'dc6f53c99653bb36681758da762038b2',
    ptid: '01010041010000000000',
    area_code: 86,
    dfp: 'a0754d8ae271b24810b04c7befe0e6d9e1914939054c533fde56d621014f1a76f2',
    lang: '',
  })
  .end((err, res) => {
   console.log(res)

  });
}

function login3 () {
  superagent
  .post(constant.getQrcodeTokenUrl)
  .set('User-Agent', constant.userAgent)
  .set('Content-Type', constant.contentType)
  .set('Origin', 'http://www.pps.tv')
  .send({
    agenttype: 78,
    device_name: '网页端',
    ptid: '01010041010000000000',
    surl: 1,
  })
  .end((err, res) => {
    if (res.status === 200) {
      const result = JSON.parse(res.text);
      const url = result.data.url;
      console.log(url)
      const svg_string = qr.imageSync('I love QR!', { type: 'svg' });
      superagent
      .post('https://passport.pps.tv/apis/qrcode/is_token_login.action')
      .set('User-Agent', constant.userAgent)
      .set('Content-Type', constant.contentType)
      .set('Origin', 'http://www.pps.tv')
      .send({
        agenttype: '78',
        ptid: '01010041010000000000',
        token: '01c84ba151ef676f',
      })
      .end((err, res) => {
        // const $ = cheerio.load(res.text);
        console.log('---------')
        console.log(res.text)
        // if (res.text.indexOf('找不到用户登录信息，可能手机端尚未确认') > -1) {
        //   setTimeout(() => {
        //     login3();
        //   }, 1000);
        // } else {
        //   console.log(res)
        // }
      })
    } else {
      console.log(res.text);
    }
  });
}

login3()
module.exports = {
  login: login,
}
