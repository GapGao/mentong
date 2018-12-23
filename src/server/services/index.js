import superagent from 'superagent';
import { Client } from '../client';
import clients from '../clients';
import {
  getActionAuthUrl,
  userAgent,
  contentType,
  host,
  authCookieKey,
  deviceIdKey,
  isTokenLoginUrl,
  qrCodeTimeout,
  loginCode,
} from '../constant';

function getActionAuthAndCreateClient (authCookie, deviceId) {
  const ServerCookie = [
    `QC005=${deviceId}`,
    `P00001=${authCookie}`,
  ];
  superagent
    .get(getActionAuthUrl)
    .set('User-Agent', userAgent)
    .set('Content-Type', contentType)
    .set('Cookie', ServerCookie.join(';'))
    .set('Host', host)
    .set('Referer', origin)
    .end((err, res) => {
      const cookies = res.header['set-cookie'];
      const actionAuth = cookies[0].split(';')[0];
      // 入库 登录成功
      // 返回mentongId
      clients[1] = clients[1] || {};
      clients[1][2] = new Client({
        roomId: 212054,
        deviceId,
        authCookie,
        actionAuth,
      });
    });
}

function saveCookies (res, cb) {
  let authCookie;
  let deviceId;
  const cookies = res.header['set-cookie'];
  cookies.forEach((cookie) => {
    if (cookie.includes(authCookieKey)) {
      authCookie = cookie.split(';')[0].split('=')[1];
    }
    if (cookie.includes(deviceIdKey)) {
      deviceId = cookie.split(';')[0].split('=')[1];
    }
  });
  if (!authCookie || !deviceId) {
    return;
  }
  cb(authCookie, deviceId);
}

export function loginHelper (token, time) {
  if (!time) {
    time = 0;
  }
  superagent
    .post(isTokenLoginUrl)
    .set('User-Agent', userAgent)
    .set('Content-Type', contentType)
    .set('Origin', 'http://www.pps.tv')
    .send({
      agenttype: '78',
      ptid: '01010041010000000000',
      token: token,
    })
    .end((err, res) => {
      if (res.status === 200) {
        const result = JSON.parse(res.text);
        if (result.msg === '找不到用户登录信息，可能手机端尚未确认' || result.msg === '手机端已扫描但未确认') {
          if (time < qrCodeTimeout) {
            setTimeout(() => {
              loginHelper(token, ++time);
            }, 1000);
          }
        } else {
          if (result.code === loginCode) {
            saveCookies(res, getActionAuthAndCreateClient);
          }
        }
      } else {
        console.log(res.text);
      }
    });
}
