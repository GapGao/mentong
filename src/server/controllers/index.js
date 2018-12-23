import superagent from 'superagent';
import qr from 'qr-image';
import { loginHelper } from '../services';
import { 
  getQrcodeTokenUrl,
  userAgent,
  contentType,
  tokenOrigin,
  agentType,
  deviceName,
  ptid,
  surl,
} from '../constant';

export function login(req, res, next) {
  try {
    superagent
      .post(getQrcodeTokenUrl)
      .set('User-Agent', userAgent)
      .set('Content-Type', contentType)
      .set('Origin', tokenOrigin)
      .send({
        agenttype: agentType,
        device_name: deviceName,
        ptid,
        surl,
      })
      .end((err, _res) => {
        if (_res.status === 200) {
          const result = JSON.parse(_res.text);
          const url = result.data.url;
          const token = result.data.token;
          const code = qr.image(url, { type: 'png' });
          res.setHeader('Content-type', 'image/png');
          code.pipe(res);
          loginHelper(token);
        } else {
          console.log(_res.text);
        }
      });
  } catch (e) {
    next(e);
  }
}
