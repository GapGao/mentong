import moment from 'moment';
import db from './db';
import {
  getMentongHelper,
} from './services/mentong';

import {
  getMentongStatusHelper,
  clearMentong,
} from './clients';

import httpErrors from './httpErrors';

function checkLogin(req) {
  if (req.session && req.session.user) {
    return true;
  }
  return false;
}

export function checkForPage(req, res, next) {
  if (!checkLogin(req)) {
    // 跳转到猎头登录页或HR端登录页
    return res.redirect('/login');
  }
  next();
}

async function isExpired(userId) {
  const [user] = await db.select('expired_at as expiredAt')
  .from('users')
  .where('id', userId);

  if (moment(user.expiredAt).isBefore(moment())) {
    return true;
  }
  return false;
}

export async function checkForApi(req, res, next) {
  if (checkLogin(req)) {
    if (!await isExpired(req.session.user.id)) {
      return next();
    } else {
      clearMentong(req.session.userId);
      delete req.session.user;
      next(new httpErrors.ForbiddenError('账号已过期'));
    }
  } else {
    next(new httpErrors.ForbiddenError('需要登录才能操作'));
  }
}

export async function renderPage(req, res, next) {
  const { user } = req.session;
  const { mentong = {}, mentongSetting } = await getMentongHelper({ userId: user.id, isCurrent: true });
  const status = getMentongStatusHelper(user.id, mentong.id);
  mentong.status = status;
  res.render('main', { data: { user, mentong, mentongSetting } });
}
