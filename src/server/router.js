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

router.get('/token', checkForApi, getQrcodeTokenUrl);

router.get('/isTokenLogin/:token', checkForApi, isTokenLogin);

router.get('/qrcode', checkForApi, getQrcode);

router.put('/mentong/:mentongId/setting', checkForApi, updateMentongSetting);

router.post('/mentong/:mentongId/open', checkForApi, openMentong);

router.post('/mentong/:mentongId/close', checkForApi, closeMentong);

router.get('/mentong/:mentongId/status', checkForApi, getMentongStatus);

export default router;
