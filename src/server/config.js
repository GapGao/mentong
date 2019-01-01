import 'moment/locale/zh-cn';
import _ from 'lodash';
import fs from 'fs';

// default environment to `development`
const env = process.env.NODE_ENV || 'development';

console.log(`Using ${env} environment...`);

const devConfig = {
  env: 'development',
  port: 3001,
  expired: 3,
  inviteSecret: 'dabinggejiushidiao',
  mysql: {
    host: 'localhost',
    db: 'mentong',
    sessionDb: 'moka_session',
    user: 'root',
    password: '',
  },
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: 6379,
  },
};

let configs = {
};

if (env === 'development') {
  configs = devConfig;
} else if (env === 'production') {
  configs = {
    env: 'production',
    port: process.env.PORT,
    expired: 3,
    inviteSecret: 'dabinggejiushidiao',
    mysql: {
      host: process.env.SQL_HOST_NAME,
      db: process.env.SQL_DB,
      sessionDb: process.env.SESSION_DB,
      user: process.env.SQL_USER_NAME,
      password: process.env.SQL_PW,
    },
    redis: {
      host: process.env.REDIS_HOST || 'localhost',
      port: 6379,
    },
  };
}

export default configs;
