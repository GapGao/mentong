import qr from 'qr-image';
import httpErrors from '../httpErrors';
import {
  getQrcodeTokenUrlHelper,
  getMentongHelper,
  updateMengongSettingHelper,
  openMentongHelper,
  closeMentongHelper,
  updateNickNameHelper,
} from '../services/mentong';
import { getMentongStatusHelper } from '../clients';

export async function getQrcodeTokenUrl(req, res, next) {
  try {
    const { token, url } = await getQrcodeTokenUrlHelper();
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
    const { mentong, mentongSetting } = getMentongHelper(false, token);
    return res.status(200).json({ isLogin: !!mentong, mentong, mentongSetting });
  } catch (e) {
    next(e);
  }
}

export async function updateMentongSetting(req, res, next) {
  try {
    const setting = req.body;
    updateMengongSettingHelper(setting);
    return res.status(200).send();
  } catch (e) {
    next(e);
  }
}

export async function openMentong(req, res, next) {
  try {
    const result = await openMentongHelper();
    if (result) {
      return res.status(200).send({ message: '启动成功' });
    }
    next(new httpErrors.BadRequestError('启动失败'));
  } catch (e) {
    next(e);
  }
}

export async function closeMentong(req, res, next) {
  try {
    await closeMentongHelper();
    return res.status(200).send();
  } catch (e) {
    next(e);
  }
}

export function getMentongStatus(req, res, next) {
  try {
    const status = getMentongStatusHelper();
    return res.status(200).send({ status });
  } catch (e) {
    next(e);
  }
}

export async function updateNickName(req, res, next) {
  try {
    const { nickName } = req.body;
    await updateNickNameHelper(nickName);
    return res.status(200).send();
  } catch (e) {
    next(e);
  }
}