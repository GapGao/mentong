/* eslint-env node */

/**
 * Let babel takes over require and compiles on the fly
 * Enable es6 with knexfile and migrations
 */
require('babel-register');
if (!global._babelPolyfill) {
  require('babel-polyfill');
}

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'mentong',
      user: 'root',
      password: '',
      sessionDb: 'mentong_session',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.SQL_HOST_NAME,
      database: process.env.SQL_DB,
      user: process.env.SQL_USER_NAME,
      password: process.env.SQL_PW,
      sessionDb: process.env.SESSION_DB,
    },
  },
};
