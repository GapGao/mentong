import { getQrcodeHelper } from '../services/mentong';

export async function getQrcode(req, res, next) {
  try {
    const qrcode = await getQrcodeHelper();
    res.setHeader('Content-type', 'image/png');
    qrcode.pipe(res);
  } catch (e) {
    next(e);
  }
}
