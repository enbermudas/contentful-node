import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import methodOverride from 'method-override';
import morgan from 'morgan';
import routes from '../router';
import { NODE_ENV } from './env';

const app = express();

let morganFormat = 'dev';
if (NODE_ENV === 'production') morganFormat = 'combined';

app.use(
  morgan(morganFormat, {
    skip: (req, res) => res.statusCode < 400,
    stream: process.stderr,
  }),
);

app.use(
  morgan(morganFormat, {
    skip: (req, res) => res.statusCode >= 400,
    stream: process.stdout,
  }),
);

app.use(compression());
app.use(cors());
app.use(helmet());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use('/api', routes);

module.exports = app;
