import superagent from 'superagent-bluebird-promise';

function check(e) {
  if (e.body && ['账号已过期', '需要登录才能操作'].includes(e.body.message)) {
    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  }
  throw e;
}

export function getQrcodeTokenUrl() {
  return superagent
  .get('/api/token')
  .catch(check);
};

export function isTokenLogin(token) {
  return superagent
  .get(`/api/isTokenLogin/${token}`)
  .catch(check);
}

export function updateMengongSetting(setting = {}) {
  return superagent
  .put(`/api/mentong/setting`)
  .send(setting)
  .catch(check);
}

export function openMentong() {
  return superagent
  .post(`/api/mentong/open`)
  .catch(check);
}

export function closeMentong() {
  return superagent
  .post(`/api/mentong/close`)
  .catch(check);
}

export function getMentongStatus() {
  return superagent
  .get(`/api/mentong/status`)
  .catch(check);
}

export function editNickName(nickName) {
  return superagent
  .put(`/api/mentong/nickname`)
  .send({ nickName })
  .catch(check);
}
