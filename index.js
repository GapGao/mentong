/* eslint-env node */
require('babel-register')();
require('babel-polyfill');
global._mageProcess = 'mage'; // Make a mark so that we can tell this is the main process, rather than say periodic task runner.
require('./src/server');