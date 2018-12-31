function checkLogin(req) {
  return true;
  // return false;
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
  const error = new Error();
  error.status = 403;
  error.message = '需要登录才能操作';
  next(error);
}

export function renderPage(req, res, next) {
  res.render('main');
}