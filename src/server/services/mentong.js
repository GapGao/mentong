import superagent from 'superagent-bluebird-promise';
import qr from 'qr-image';
import { Client } from '../client';
import { createMentong } from '../clients';
import httpErrors from '../httpErrors';
import {
  getQrcodeTokenUrl,
  tokenOrigin,
  agentType,
  deviceName,
  ptid,
  surl,
  getActionAuthUrl,
  userAgent,
  contentType,
  host,
  authCookieKey,
  deviceIdKey,
  isTokenLoginUrl,
  qrCodeTimeout,
  loginCode,
  origin,
} from '../constant';

async function getActionAuth (authCookie, deviceId) {
  if (!authCookie || !deviceId) {
    throw httpErrors.BadRequestError('登录失败，原因未知，请联系管理员调查修复');
  }
  const ServerCookie = [
    `QC005=${deviceId}`,
    `P00001=${authCookie}`,
  ];
  const res = await superagent
  .get(getActionAuthUrl)
  .set('User-Agent', userAgent)
  .set('Content-Type', contentType)
  .set('Cookie', ServerCookie.join(';'))
  .set('Host', host)
  .set('Referer', origin);
  if (res.status === 200) {
    const cookies = res.header['set-cookie'];
    const actionAuth = cookies[0].split(';')[0];
    // 入库 登录成功
    // 返回mentongId等
    return actionAuth;
  } else {
    throw httpErrors.BadRequestError('登录失败，原因未知，请联系管理员调查修复');
  }
}

function calcAndSaveCookies (res) {
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
    throw httpErrors.BadRequestError('登录失败，原因未知，请联系管理员调查修复');
  }
  return { authCookie, deviceId };
}

export async function mentongLoginHelper (token, time) {
  if (!time) {
    time = 0;
  }
  const res = await superagent
  .post(isTokenLoginUrl)
  .set('User-Agent', userAgent)
  .set('Content-Type', contentType)
  .set('Origin', 'http://www.pps.tv')
  .send({
    agenttype: agentType,
    ptid,
    token: token,
  });
  if (res.status === 200) {
    const result = JSON.parse(res.text);
    if (result.msg === '找不到用户登录信息，可能手机端尚未确认' || result.msg === '手机端已扫描但未确认') {
      if (time < qrCodeTimeout) {
        setTimeout(() => {
          mentongLoginHelper(token, ++time);
        }, 1000);
      }
    } else {
      if (result.code === loginCode) {
        const body = res.body;
        const { authCookie, deviceId } = calcAndSaveCookies(res);
        const actionAuth = await getActionAuth(authCookie, deviceId);
        // 存好门童数据 返回 门童id
        await createMentong(
          1,
          1,
          {
            roomId: 214354,
            mentongId: 1,
            deviceId,
            authCookie,
            actionAuth,
            setting: {
              roomId: '',
              welcome: {
                prefix: '',
                postfix: '',
              },
              thanks: {
                prefix: '',
                postfix: '',
              },
              delayedSending: {
                msg: '',
                minutes: 1,
              },
            }
        });
      }
    }
  } else {
    throw httpErrors.BadRequestError('登录失败，原因未知，请联系管理员调查修复');
  }
}

export async function getQrcodeHelper () {
  const res = await superagent
  .post(getQrcodeTokenUrl)
  .set('User-Agent', userAgent)
  .set('Content-Type', contentType)
  .set('Origin', tokenOrigin)
  .send({
    agenttype: agentType,
    device_name: deviceName,
    ptid,
    surl,
  });

  if (res.status === 200) {
    const result = JSON.parse(res.text);
    const url = result.data.url;
    const token = result.data.token;
    const qrcode = qr.image(url, { type: 'png' });
    mentongLoginHelper(token);
    return qrcode;
  } else {
    throw httpErrors.BadRequestError('登录失败，原因未知，请联系管理员调查修复');
  }
}
