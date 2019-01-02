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
    user: 'root',
    password: '',
  },
  redis: {
    host: 'localhost',
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
    port: 80,
    expired: 3,
    inviteSecret: 'dabinggejiushidiao',
    mysql: {
      host: 'localhost',
      db: 'mentong',
      user: 'root',
      password: 'gaoboai1314',
    },
    redis: {
      host: 'localhost',
      port: 6379,
    },
  };
}

export default configs;
