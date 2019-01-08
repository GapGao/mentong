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

export function updateMengongSetting(mentongId, setting = {}) {
  return superagent
  .put(`/api/mentong/${mentongId}/setting`)
  .send(setting)
  .catch(check);
}

export function openMentong(mentongId) {
  return superagent
  .post(`/api/mentong/${mentongId}/open`)
  .catch(check);
}

export function closeMentong(mentongId) {
  return superagent
  .post(`/api/mentong/${mentongId}/close`)
  .catch(check);
}

export function getMentongStatus(mentongId) {
  return superagent
  .get(`/api/mentong/${mentongId}/status`)
  .catch(check);
}
