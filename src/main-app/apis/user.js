import superagent from 'superagent-bluebird-promise';

export function login (account, password) {
  return superagent
  .post('/api/login')
  .send({ account, password })
}