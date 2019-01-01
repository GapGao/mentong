import superagent from 'superagent-bluebird-promise';

export function getQrcodeTokenUrl () {
  return superagent
  .get('/token');
};

export function isTokenLogin (token) {
  return superagent
  .get(`/isTokenLogin/${token}`);
}

export function updateMengongSetting (mentongId, setting = {}) {
  return superagent
  .put(`/mentong/${mentongId}/setting`)
  .send(setting);
}

export function openMentong (mentongId) {
  return superagent
  .post(`/mentong/${mentongId}/open`);
}

export function closeMentong (mentongId) {
  return superagent
  .post(`/mentong/${mentongId}/close`);
}

export function getMentongStatus(mentongId) {
  return superagent
  .get(`/mentong/${mentongId}/status`);
}
