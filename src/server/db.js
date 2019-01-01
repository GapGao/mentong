/**
 * Connect to mysql instance.
 * Then initialize and export a connection pool.
 */

import _ from 'lodash';
import knex from 'knex';

import log from './log';
import config from './config';
import knexConfigs from '../../knexfile';

const knexConfig = _.merge(knexConfigs[config.env], config.mysql);

log.info(`Initialize mysql connection pool to ${knexConfig.connection.host}`);

const db = knex(knexConfig);

if (!db) {
  log.warn('Connection to mysql failed');
}

export default db;
