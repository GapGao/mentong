import superagent from 'superagent-bluebird-promise';

export function getQrcodeTokenUrl () {
  return superagent
  .get('/api/token');
};

export function isTokenLogin (token) {
  return superagent
  .get(`/api/isTokenLogin/${token}`);
}

export function updateMengongSetting (mentongId, setting = {}) {
  return superagent
  .put(`/api/mentong/${mentongId}/setting`)
  .send(setting);
}

export function openMentong (mentongId) {
  return superagent
  .post(`/api/mentong/${mentongId}/open`);
}

export function closeMentong (mentongId) {
  return superagent
  .post(`/api/mentong/${mentongId}/close`);
}

export function getMentongStatus(mentongId) {
  return superagent
  .get(`/api/mentong/${mentongId}/status`);
}
