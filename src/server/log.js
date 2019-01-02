import bunyan from 'bunyan';
import path from 'path';
import moment from 'moment';

// to support logging err.context automatically
function makeLogger(log) {
  return function(...args) {
    if (args[0] instanceof Error) {
      const err = args[0];
      args = args.slice(1);
      return log({ err, ...err.context }, ...args);
    } else if (typeof args[0] === 'object' && args[0].err && args[0].err instanceof Error) {
      const fields = args[0];
      const err = fields.err;
      delete fields.err;
      args = args.slice(1);
      return log({ err, ...err.context, ...fields }, ...args);
    } else {
      return log(...args);
    }
  };
}

const child = bunyan.prototype.child;
bunyan.prototype.child = function(options, simple) {
  const newChild = child.apply(this, [options, simple]);
  newChild.info = makeLogger(newChild.info.bind(newChild)).bind(newChild);
  newChild.warn = makeLogger(newChild.warn.bind(newChild)).bind(newChild);
  newChild.error = makeLogger(newChild.error.bind(newChild)).bind(newChild);
  return newChild;
};

export function createLogger({ name, streams }) {
  const logger = bunyan.createLogger({
    name,
    serializers: {
      err: bunyan.stdSerializers.err,
    },
    streams,
  });

  logger.info = makeLogger(logger.info.bind(logger)).bind(logger);
  logger.warn = makeLogger(logger.warn.bind(logger)).bind(logger);
  logger.error = makeLogger(logger.error.bind(logger)).bind(logger);

  return logger;
}

const mentongLogger = createLogger({
  name: 'mentong',
  streams: [
    {
      level: 'debug',
      stream: process.stdout,
    },
    {
      type: 'rotating-file',
      level: 'info',
      path: path.join(__dirname, '../../../logs', `mentong-${moment().format("YYYY-MM-DD")}.log`),
      period: '1d',
      count: 7,
    },
    {
      type: 'rotating-file',
      level: 'error',
      path: path.join(__dirname, '../../../logs', `mentong-${moment().format("YYYY-MM-DD")}.log`),
      period: '1d',
      count: 7,
    }
  ],
});

export default mentongLogger;
