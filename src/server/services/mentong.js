import superagent from 'superagent-bluebird-promise';
import log from '../log';
import db from '../db';
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
  userId,
  mentongId
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
    await db('mentongs')
      .update({
        action_auth: actionAuth,
      })
      .where('user_id', userId)
      .where('id', mentongId);

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

export async function mentongLoginHelper(token, userId, time) {
  if (!time) {
    time = 0;
  }
  console.log('正在检查是否被扫码');
  const res = await superagent
    .post(isTokenLoginUrl)
    .set('User-Agent', userAgent)
    .set('Content-Type', contentType)
    .set('Origin', isTokenLoginOrigin)
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
          mentongLoginHelper(token, userId, ++time);
        }, 1000);
      }
    } else {
      if (result.code === loginCode) {
        try {
          const {
            nickname,
            user_name,
            uid,
            phone,
            email
          } = JSON.parse(res.text).data.userinfo;
          const {
            authCookie,
            deviceId
          } = calcCookies(res);

          const [existMentong] = await db.select('id')
            .from('mentongs')
            .where('qiyi_uid', uid)
            .where('user_id', userId);

          await db('mentongs')
            .update({
              is_current: false,
            })
            .where('user_id', userId);

          if (existMentong) {
            await db('mentongs')
              .update({
                user_name,
                nick_name: nickname,
                phone,
                email,
                login_info: res.text,
                auth_cookie: authCookie,
                device_id: deviceId,
                is_current: true,
                login_at: new Date(),
                token,
              })
              .where('id', existMentong.id);
          } else {
            await db
              .insert({
                qiyi_uid: uid,
                user_id: userId,
                user_name,
                nick_name: nickname,
                phone,
                email,
                login_info: res.text,
                auth_cookie: authCookie,
                device_id: deviceId,
                is_current: true,
                login_at: new Date(),
                token,
              })
              .into('mentongs');
          }
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

export async function getQrcodeTokenUrlHelper(userId) {
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
    mentongLoginHelper(token, userId);
    return {
      token,
      url
    };
  }
  throw new httpErrors.BadRequestError('登录失败，原因未知，请联系管理员调查修复');
}

export async function getMentongHelper({
  mentongId,
  token,
  userId,
  isCurrent,
  withCookie = false
}) {
  let query = db
    .select(
      'id', 'nick_name as nickName',
      'user_name as userName', 'status',
      'login_at as loginAt', 'is_current as isCurrent',
      'room_id as roomId',
      'welcome', 'welcome_level', 'thanks', 'follow', 'designated', 'delayed_sending as delayedSending',
    )
    .from('mentongs')
    .orderBy('updated_at', 'desc');
  if (withCookie) {
    query = query.select('auth_cookie as authCookie', 'action_auth as actionAuth', 'device_id as deviceId');
  }

  if (mentongId) {
    query = query.where('id', mentongId);
  }

  if (token) {
    query = query.where('token', token);
  }

  if (userId) {
    query = query.where('user_id', userId);
  }

  if (typeof isCurrent !== 'undefined') {
    query = query.where('is_current', isCurrent);
  }

  const [row] = await query;

  if (!row) {
    return {};
  }

  const mentong = {
    id: row.id,
    nickName: row.nickName,
    userName: row.userName,
    isCurrent: row.isCurrent,
    loginAt: row.loginAt,
  };

  if (withCookie) {
    mentong.authCookie = row.authCookie;
    mentong.actionAuth = row.actionAuth;
    mentong.deviceId = row.deviceId;
  };

  const mentongSetting = {
    roomId: row.roomId,
    welcomeLevel: row.welcome_level,
    welcome: JSON.parse(row.welcome),
    thanks: JSON.parse(row.thanks),
    follow: JSON.parse(row.follow),
    designated: JSON.parse(row.designated),
    delayedSending: JSON.parse(row.delayedSending),
  };

  return {
    mentong,
    mentongSetting
  };
}

export async function updateMengongSettingHelper({
  mentongId,
  setting = {},
  userId,
}) {
  const [mentong] = await db
    .select('id')
    .from('mentongs')
    .where('id', mentongId)
    .where('user_id', userId);

  if (!mentong) {
    throw new httpErrors.BadRequestError('门童不存在');
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

  await db('mentongs')
    .update({
      room_id: roomId,
      welcome: JSON.stringify(welcome),
      thanks: JSON.stringify(thanks),
      follow: JSON.stringify(follow),
      delayed_sending: JSON.stringify(delayedSending),
      designated: JSON.stringify(designated),
      welcome_level: welcomeLevel,
    })
    .where('id', mentong.id);
}

export async function openMentongHelper({
  mentongId,
  userId
}) {
  const {
    mentong,
    mentongSetting
  } = await getMentongHelper({
    mentongId,
    userId,
    withCookie: true
  });

  if (!mentong) {
    throw new httpErrors.BadRequestError('门童不存在');
  }

  return await createMentong(
    userId,
    mentongId, {
      ...mentongSetting,
      deviceId: mentong.deviceId,
      authCookie: mentong.authCookie,
      actionAuth: mentong.actionAuth,
    }
  );
}

export async function closeMentongHelper({
  mentongId,
  userId
}) {
  const {
    mentong
  } = await getMentongHelper({
    mentongId,
    userId,
    withCookie: true
  });

  if (!mentong) {
    throw new httpErrors.BadRequestError('门童不存在');
  }

  await removeMentong(userId, mentongId)
}

export async function updateNickNameHelper(userId, mentongId, nickName) {
  const {
    mentong
  } = await getMentongHelper({
    mentongId,
    userId,
    withCookie: true
  });
  const actionAuth = await getAndSaveActionAuth({
    authCookie: mentong.authCookie,
    deviceId: mentong.deviceId,
    userId,
    mentongId
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
      await db('mentongs')
        .update({
          nick_name: nickName
        })
        .where('user_id', userId)
        .where('id', mentongId);
    } else {
      throw new httpErrors.BadRequestError(msg);
    }
  } else {
    throw new httpErrors.BadRequestError('修改昵称失败');
  }
}