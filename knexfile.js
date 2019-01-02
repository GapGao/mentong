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
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      database: 'mentong',
      user: 'root',
      password: 'gaoboai1314',
    },
  },
};
