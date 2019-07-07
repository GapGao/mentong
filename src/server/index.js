import debug from 'debug';
import http from 'http';
import createError from 'http-errors';
import express from 'express';
import compression from 'compression';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import log from './log';

import router from './router';
const app = express();

app.use(compression());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

// error handler
app.use(function(err, req, res, next) {
  if (!err.status) {
    log.error(err);
    err.status = 500;
    err.message = '服务器错误';
  }
  res.status(err.status).json({ message: err.message });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const port = normalizePort('3001');
app.set('port', port);
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
  case 'EACCES':
    console.error(bind + ' requires elevated privileges');
    process.exit(1);
    break;
  case 'EADDRINUSE':
    console.error(bind + ' is already in use');
    process.exit(1);
    break;
  default:
    throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('demo:server')('Listening on ' + bind);
}

module.exports = app;
