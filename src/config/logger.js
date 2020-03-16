import { createLogger, format, transports } from 'winston';
import { NODE_ENV, LOG_LEVEL } from './env';

const formatParams = info => {
  const { timestamp, level, message, ...args } = info;
  const ts = timestamp.slice(0, 19).replace('T', ' ');

  return `${ts} ${level}: ${message} ${
    Object.keys(args).length ? JSON.stringify(args, '', '') : ''
  }`;
};

const developmentFormat = format.combine(
  format.colorize(),
  format.timestamp(),
  format.align(),
  format.printf(formatParams),
);

const productionFormat = format.combine(
  format.timestamp(),
  format.align(),
  format.printf(formatParams),
);

let configuration;

if (NODE_ENV !== 'production') {
  configuration = createLogger({
    level: LOG_LEVEL,
    format: developmentFormat,
    transports: [new transports.Console()],
  });
} else {
  configuration = createLogger({
    level: LOG_LEVEL,
    format: productionFormat,
    transports: [
      new transports.File({ filename: 'error.log', level: 'error' }),
      new transports.File({ filename: 'combined.log' }),
    ],
  });
}

const logger = configuration;

module.exports = logger;
