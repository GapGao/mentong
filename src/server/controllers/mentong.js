import qr from 'qr-image';
import httpErrors from '../httpErrors';
import {
  getQrcodeTokenUrlHelper,
  getMentongHelper,
  updateMengongSettingHelper,
  openMentongHelper,
  closeMentongHelper,
} from '../services/mentong';
import { getMentongStatusHelper } from '../clients';

export async function getQrcodeTokenUrl(req, res, next) {
  try {
    const { token, url } = await getQrcodeTokenUrlHelper(req.session.user.id);
    return res.status(200).json({ token, url });
  } catch (e) {
    next(e);
  }
}

export async function getQrcode(req, res, next) {
  try {
    const { url } = req.query;
    const qrcode = qr.image(url, { type: 'png' });
    res.setHeader('Content-type', 'image/png');
    return qrcode.pipe(res);
  } catch (e) {
    next(e);
  }
}

export async function isTokenLogin(req, res, next) {
  try {
    const { token } = req.params;
    const { user } = req.session;
    const { mentong, mentongSetting } = await getMentongHelper({ token, userId: user.id });
    return res.status(200).json({ isLogin: !!mentong, mentong, mentongSetting });
  } catch (e) {
    next(e);
  }
}

export async function updateMentongSetting(req, res, next) {
  try {
    const { user } = req.session;
    const { mentongId } = req.params;
    const setting = req.body;
    await updateMengongSettingHelper({ mentongId, setting, userId: user.id });
    return res.status(200).send();
  } catch (e) {
    next(e);
  }
}

export async function openMentong(req, res, next) {
  try {
    const { user } = req.session;
    const { mentongId } = req.params;
    const result = await openMentongHelper({ mentongId, userId: user.id });
    if (result) {
      return res.status(200).send({ message: '启动成功' });
    } else {
      return next(new httpErrors.BadRequestError('启动失败'));
    }
  } catch (e) {
    next(e);
  }
}

export async function closeMentong(req, res, next) {
  try {
    const { user } = req.session;
    const { mentongId } = req.params;
    await closeMentongHelper({ mentongId, userId: user.id });
    return res.status(200).send();
  } catch (e) {
    next(e);
  }
}

export function getMentongStatus(req, res, next) {
  try {
    const { user } = req.session;
    const { mentongId } = req.params;
    const status = getMentongStatusHelper(user.id, mentongId);
    return res.status(200).send({ status });
  } catch (e) {
    next(e);
  }
}
