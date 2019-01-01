import superagent from 'superagent-bluebird-promise';

export function login (account, password) {
  return superagent
  .post('/login')
  .send({ account, password });
}

export function logout () {
  return superagent
  .post('/logout');
}

export function register (account, password, confirmPassword, inviteCode) {
  return superagent
  .post('/register')
  .send({ account, password, confirmPassword, inviteCode });
}
