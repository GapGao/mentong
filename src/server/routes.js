import express from 'express';
const router = express.Router();
import { 
  login,
} from './controllers/user';

import {
  renderPage,
  checkForPage,
  checkForApi,
} from './permissions';

import {
  getQrcode,
} from './controllers/mentong';

/* GET home page. */
router.get('/login', (req, res) => res.render('login'));

router.get(['/', '/mentong*', '/profile*'], checkForPage, renderPage);

router.get('/api/qrcode', checkForApi, getQrcode);

export default router;
