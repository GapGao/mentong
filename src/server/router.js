import express from 'express';
const router = express.Router();
import {
  renderPage,
  checkForPage,
  checkForApi,
} from './permissions';

import { 
  login,
  logout,
  register,
  getInviteCode,
} from './controllers/user';

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

// user
router.get('/login', (req, res) => res.render('login'));

router.post('/login', login);

router.post('/logout', logout);

router.post('/register', register);

router.get('/invite-code', getInviteCode);

// mentong
router.get('/', checkForPage, (req, res) => res.redirect('/mentong'))

router.get(['/mentong*', '/profile*'], checkForPage, renderPage);

router.get('/qrcode', checkForApi, getQrcode);

router.get('/api/token', checkForApi, getQrcodeTokenUrl);

router.get('/api/isTokenLogin/:token', checkForApi, isTokenLogin);

router.put('/api/mentong/:mentongId/setting', checkForApi, updateMentongSetting);

router.post('/api/mentong/:mentongId/open', checkForApi, openMentong);

router.post('/api/mentong/:mentongId/close', checkForApi, closeMentong);

router.get('/api/mentong/:mentongId/status', checkForApi, getMentongStatus);

router.put('/api/mentong/:mentongId/nickname', checkForApi, updateNickName);

export default router;
