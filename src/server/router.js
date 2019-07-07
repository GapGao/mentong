import express from 'express';
const router = express.Router();
import {
  renderPage,
} from './permissions';

import {
  getQrcodeTokenUrl,
  getQrcode,
  isTokenLogin,
  updateMentongSetting,
  openMentong,
  closeMentong,
  getMentongStatus,
  updateNickName,
} from './controllers/mentong';

// mentong
router.get('/', renderPage);

router.get('/qrcode', getQrcode);

router.get('/api/token', getQrcodeTokenUrl);

router.get('/api/isTokenLogin/:token', isTokenLogin);

router.put('/api/mentong/setting', updateMentongSetting);

router.post('/api/mentong/open', openMentong);

router.post('/api/mentong/close', closeMentong);

router.get('/api/mentong/status', getMentongStatus);

router.put('/api/mentong/nickname', updateNickName);

export default router;
