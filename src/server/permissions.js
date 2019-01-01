import {
  getMentongHelper,
} from './services/mentong';

import {
  getMentongStatusHelper,
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

export function checkForApi(req, res, next) {
  if (checkLogin(req)) {
    return next();
  }

  next(new httpErrors.ForbiddenError('需要登录才能操作'));
}

export async function renderPage(req, res, next) {
  const { user } = req.session;
  const { mentong = {}, mentongSetting } = await getMentongHelper({ userId: user.id, isCurrent: true });
  const status = getMentongStatusHelper(user.id, mentong.id);
  mentong.status = status;
  res.render('main', { data: { user, mentong, mentongSetting } });
}
