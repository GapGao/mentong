/**
 * Connect to mysql instance.
 * Then initialize and export a connection pool.
 */

import _ from 'lodash';
import knex from 'knex';
import assert from 'assert';

import log from './log';
import config from './config';
import knexConfigs from '../../knexfile';

const knexConfig = _.merge(knexConfigs[config.env], config.mysql);

log.info(`Initialize mysql connection pool to ${knexConfig.connection.host}`);

if (config.env === 'production') {
  assert(knexConfig.connection.host, 'No mysql host provided!');
  assert(knexConfig.connection.database, 'No mysql database provided!');
  assert(knexConfig.connection.user, 'No mysql user provided!');
  assert(knexConfig.connection.password, 'No mysql password provided!');
}

const db = knex(knexConfig);

if (!db) {
  log.warn('Connection to mysql failed');
}

export default db;
