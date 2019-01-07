import moment from 'moment';
import config from '../config';
import httpErrors from '../httpErrors';
import {
  getUserHelper,
  getInviteCodeHelper,
  deleteInviteCodeHelper,
  createUserHelper,
  createInviteCodeHelper,
} from '../services/user';

import {
  clearMentong,
} from '../clients';

export async function login(req, res, next) {
  try {
    const { account, password } = req.body;

    if (!account || !password) {
      return next(new httpErrors.BadRequestError('用户名或密码错误'));
    }

    const user = await getUserHelper({ account, password });
    
    if (!user) {
      return next(new httpErrors.ForbiddenError('用户名或密码错误'));
    }

    if (moment(user.expiredAt).isBefore(moment())) {
      return next(new httpErrors.ForbiddenError('账号已过期'));
    }

    req.session.user = user;

    return res.status(200).send();
  } catch (e) {
    next(e);
  }
}

export async function logout(req, res, next) {
  try {
    if (req.session.user) {
      clearMentong(req.session.user.id);
    }
    req.session.user = null;
    res.clearCookie('connect.sid');

    return res.status(200).send();
  } catch (e) {
    next(e);
  }
}

export async function register(req, res, next) {
  try {
    const { account, password, confirmPassword, inviteCode } = req.body;
    if (!account || !password || !confirmPassword || !inviteCode) {
      return next(new httpErrors.BadRequestError('缺少参数'));
    }

    if (password !== confirmPassword) {
      return next(new httpErrors.BadRequestError('确认密码错误'));
    }

    const user = await getUserHelper({ account });

    if (user) {
      return next(new httpErrors.BadRequestError('用户已存在'));
    }

    const code = await getInviteCodeHelper(inviteCode);

    if (!code) {
      return next(new httpErrors.ForbiddenError('邀请码不正确，请联系管理员获取'));
    }

    if (moment(code.expiredAt).isBefore(moment())) {
      await deleteInviteCodeHelper({ codeId: code.id });
      return next(new httpErrors.ForbiddenError('邀请码已过期，请联系管理员获取'));
    }

    await createUserHelper({ account, password });

    await deleteInviteCodeHelper({ codeId: code.id });

    return res.status(200).send({ message: '注册成功' });
  } catch (e) {
    next(e);
  }
}

export async function getInviteCode(req, res, next) {
  try {
    const { secret } = req.query;

    if (secret !== config.inviteSecret) {
      return next(new httpErrors.BadRequestError('密码错误'));
    }

    const code = await createInviteCodeHelper();

    return res.status(200).send(code);
  } catch (e) {
    next(e);
  }
}
