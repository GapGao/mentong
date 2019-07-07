import superagent from 'superagent-bluebird-promise';
import log from '../log';
import { readMentong, updateMentong } from '../db';
import {
  createMentong,
  removeMentong,
} from '../clients';
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
  isTokenLoginOrigin,
  qrCodeTimeout,
  loginCode,
  origin,
  saveInfoUrl,
} from '../constant';

export async function getAndSaveActionAuth({
  authCookie,
  deviceId,
}) {
  if (!authCookie || !deviceId) {
    return null;
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
    const cookies = res.header['set-cookie'][0].split('; ');
    let actionAuth = '';
    for (const cookie of cookies) {
      if (/^x_[a-z0-9_-]{5}/.test(cookie)) {
        actionAuth = cookie;
        break;
      }
    }
   
    updateMentong({ actionAuth });
    return actionAuth;
  }
  return null;
}

function calcCookies(res) {
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
    throw new httpErrors.BadRequestError('登录失败，原因未知，请联系管理员调查修复');
  }
  return {
    authCookie,
    deviceId
  };
}

export async function mentongLoginHelper(token, time) {
  if (!time) {
    time = 0;
  }
  log.info('正在检查是否被扫码');
  const res = await superagent
    .post(isTokenLoginUrl)
    .set('User-Agent', userAgent)
    .set('Content-Type', contentType)
    .set('Origin', isTokenLoginOrigin)
    .send({
      agenttype: agentType,
      ptid,
      token,
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
        try {
          const {
            nickname: nickName,
            user_name: userName,
          } = JSON.parse(res.text).data.userinfo;
          const {
            authCookie,
            deviceId
          } = calcCookies(res);

          updateMentong({ userName, nickName, loginInfo: res.text, authCookie, deviceId, loginAt: new Date(), token });
        } catch (e) {
          log.error(e, {
            message: '门童登录失败',
            res
          });
        }
      }
    }
  } else {
    throw new httpErrors.BadRequestError('登录失败，原因未知，请联系管理员调查修复');
  }
}

export async function getQrcodeTokenUrlHelper() {
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
    const token = result.data.token;
    const url = result.data.url;
    mentongLoginHelper(token);

    return { token, url };
  }
  throw new httpErrors.BadRequestError('登录失败，原因未知，请联系管理员调查修复');
}

export function getMentongHelper(withCookie = false, token) {
  const { roomId, nickName, userName, loginAt, authCookie, actionAuth, deviceId, welcomeLevel,
    welcome, thanks, follow, designated, delayedSending, token: mentongToken,
  } = readMentong();

  if (token && token !== mentongToken) {
    return {};
  }
  const mentong = {
    nickName,
    userName,
    loginAt,
  };

  if (withCookie) {
    mentong.authCookie = authCookie;
    mentong.actionAuth = actionAuth;
    mentong.deviceId = deviceId;
  };

  const mentongSetting = {
    roomId,
    welcomeLevel,
    welcome: welcome ? JSON.parse(welcome) : [],
    thanks: thanks ? JSON.parse(thanks) : [],
    follow: follow ? JSON.parse(follow) : [],
    designated: designated ? JSON.parse(designated) : [],
    delayedSending: delayedSending ? JSON.parse(delayedSending) : {},
  };

  return { mentong, mentongSetting };
}

export function updateMengongSettingHelper(setting) {
  if (!setting) {
    throw new httpErrors.BadRequestError('缺少参数');
  }
  const {
    roomId,
    welcome,
    welcomeLevel,
    thanks,
    follow,
    delayedSending,
    designated,
  } = setting;

  updateMentong({
    roomId,
    welcome: JSON.stringify(welcome),
    thanks: JSON.stringify(thanks),
    follow: JSON.stringify(follow),
    delayedSending: JSON.stringify(delayedSending),
    designated: JSON.stringify(designated),
    welcomeLevel: JSON.stringify(welcomeLevel),
  });
}

export async function openMentongHelper() {
  const {
    mentong,
    mentongSetting
  } = getMentongHelper(true);

  if (!mentong) {
    throw new httpErrors.BadRequestError('门童不存在');
  }

  return await createMentong({
    nickName: mentong.nickName,
    ...mentongSetting,
    deviceId: mentong.deviceId,
    authCookie: mentong.authCookie,
    actionAuth: mentong.actionAuth,
  });
}

export async function closeMentongHelper() {
  const { mentong } = getMentongHelper(true);

  if (!mentong) {
    throw new httpErrors.BadRequestError('门童不存在');
  }

  await removeMentong()
}

export async function updateNickNameHelper(nickName) {
  const { mentong } = getMentongHelper(true);
  const actionAuth = await getAndSaveActionAuth({
    authCookie: mentong.authCookie,
    deviceId: mentong.deviceId,
  })
  if (actionAuth) {
    mentong.actionAuth = actionAuth;
  }
  const ServerCookie = [
    `QC005=${mentong.deviceId}`,
    mentong.actionAuth,
    `P00001=${mentong.authCookie}`,
  ];

  const res = await superagent
    .post(saveInfoUrl)
    .set('Host', host)
    .set('Cookie', ServerCookie.join(';'))
    .set('User-Agent', userAgent)
    .set('Content-Type', contentType)
    .set('Origin', origin)
    .set('Referer', 'https://x.pps.tv/home/baseInfo')
    .send({
      name: nickName,
    });

  if (res.status === 200) {
    const {
      code,
      msg
    } = res.body || {};
    if (code === 200 && msg === 'SUCCESS') {
      updateMentong({ nickName });
    } else {
      throw new httpErrors.BadRequestError(msg);
    }
  } else {
    throw new httpErrors.BadRequestError('修改昵称失败');
  }
}