import moment from 'moment';
import uid from 'uid';
import db from '../db';
import config from '../config';

export async function getUserHelper({ userId, account, password }) {
  let query =  db
  .select('id', 'account', 'password', 'expired_at as expiredAt')
  .from('users');

  if (userId) {
    query = query.where('id', userId)
  }

  if (account) {
    query = query.where('account', account)
  }

  if (password) {
    query = query.where('password', password)
  }

  const [user] = await query;
  return user;
}

export async function createUserHelper({ account, password }) {
  await db.insert({
    account,
    password,
    expired_at: moment().add(config.expired, 'day').toDate(),
  }).into('users');
}

export async function getInviteCodeHelper(inviteCode) {
  const [code] = await db
  .select('id', 'expired_at as expiredAt')
  .from('invite_codes')
  .where('code', inviteCode);

  return code;
}

export async function createInviteCodeHelper() {
  const code = uid();
  const expiredAt = moment().add(config.expired, 'day').toDate();

  await db.insert({
    code,
    expired_at: expiredAt,
  }).into('invite_codes');

  return code;
}

export async function deleteInviteCodeHelper({ codeId, code }) {
  let query = db.delete().from('invite_codes');
  if (codeId) {
    query = query.where('id', codeId);
  }

  if (code) {
    query = query.where('code', code);
  }

  await query;
}
