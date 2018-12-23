import express from 'express';
const router = express.Router();
import { login } from '../controllers';

/* GET home page. */
router.get('/', login);

export default router;
