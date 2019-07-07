import {
  getMentongHelper,
} from './services/mentong';

import {
  getMentongStatusHelper,
} from './clients';

export function renderPage(req, res, next) {
  const { mentong = {}, mentongSetting = {} } = getMentongHelper();
  const status = getMentongStatusHelper();
  mentong.status = status;

  res.render('main', { data: { mentong, mentongSetting } });
}
