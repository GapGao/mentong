import 'moment/locale/zh-cn';
import _ from 'lodash';
import fs from 'fs';

// default environment to `development`
const env = process.env.NODE_ENV || 'development';

console.log(`Using ${env} environment...`);

const devConfig = {
  env: 'development',
  port: 7007,
  domain: 'http://localhost:7007',
  mageBaseUrl: 'http://localhost:3000',
  createUrl: 'http://localhost:3000/users',
  loginUrl: 'http://localhost:3000/login',
  registerKey: 'justfordev',
  sentry: {
    dsn: null,
  },
  mysql: {
    host: 'localhost',
    db: 'moka_dev',
    sessionDb: 'moka_session',
    user: 'root',
    password: '',
  },
};

try {
  fs.accessSync(`${__dirname}/local.js`);
  _.merge(devConfig, require('./local').config); // eslint-disable-line import/no-unresolved
} catch (err) {
  // Do nothing
}

const stagingConfig = _.merge(_.cloneDeep(devConfig), {
  mysql: {
    host: 'rdsp43gp1361vlfvk2e8.mysql.rds.aliyuncs.com',
    user: 'moka_staging02',
    password: 'Moka2015',
  },
});

let configs = {};

if (env === 'development') {
  configs = devConfig;
} else if (env === 'staging003') {
  configs = _.merge(stagingConfig, {
    env: 'production',
    port: process.env.PORT,
    domain: 'http://test-csm.mokahr.com',
    mageBaseUrl: 'https://staging003.mokahr.com',
    createUrl: 'https://staging003.mokahr.com/users',
    loginUrl: 'https://staging003.mokahr.com/login',
    registerKey: 'Moka*Backstage',
    mysql: {
      host: process.env.SQL_HOST_NAME,
      db: process.env.SQL_DB,
      sessionDb: process.env.SESSION_DB,
      user: process.env.SQL_USER_NAME,
      password: process.env.SQL_PW,
    },
  });
} else if (env === 'staging11') {
  configs = _.merge(stagingConfig, {
    port: process.env.PORT,
    mageBaseUrl: 'https://staging011.mokahr.com',
    createUrl: 'https://staging011.mokahr.com/users',
    loginUrl: 'https://staging011.mokahr.com/login',
    registerKey: 'Moka*Backstage',
    mysql: {
      db: 'moka_staging11',
      sessionDb: 'moka_session11',
    },
  });
} else if (env === 'staging2') {
  const number = env.match(/\d/)[0];
  configs = _.merge(stagingConfig, {
    mageBaseUrl: `https://staging00${number}.mokahr.com`,
    createUrl: `https://staging00${number}.mokahr.com/users`,
    loginUrl: `https://staging00${number}.mokahr.com/login`,
    mysql: {
      db: 'moka_production_new',
      sessionDb: `moka_session${number}`,
    },
  });
} else if (env.indexOf('staging') > -1) {
  const number = env.match(/\d/)[0];
  configs = _.merge(stagingConfig, {
    mageBaseUrl: `https://staging00${number}.mokahr.com`,
    createUrl: `https://staging00${number}.mokahr.com/users`,
    loginUrl: `https://staging00${number}.mokahr.com/login`,
    mysql: {
      db: `moka_staging${number}`,
      sessionDb: `moka_session${number}`,
    },
  });
} else if (env === 'production') {
  configs = {
    env: 'production',
    port: process.env.PORT,
    domain: 'https://ash.mokahr.com',
    mageBaseUrl: 'https://app.mokahr.com',
    createUrl: 'https://app.mokahr.com/users',
    loginUrl: 'https://app.mokahr.com/login',
    registerKey: 'kRQuLvfQ5G',
    sentry: {
      dsn: 'https://02fa3f58c45a43a9879ae4aa6af00ae2:7f8df3c1ebb646f19c3f1d4beda92a98@dev-sentry.mokahr.com/8',
    },
    mysql: {
      host: process.env.SQL_HOST_NAME,
      db: process.env.SQL_DB,
      sessionDb: process.env.SESSION_DB,
      user: process.env.SQL_USER_NAME,
      password: process.env.SQL_PW,
    },
  };
}

/**
 * [staging db]
 * For staging tests
 */
// configs.mysql = {
//   host: 'rdsp43gp1361vlfvk2e8.mysql.rds.aliyuncs.com',
//   db: 'moka_staging',
//   sessionDb: 'moka_session',
//   user: 'moka',
//   password: 'Moka2015',
// };


export default configs;
