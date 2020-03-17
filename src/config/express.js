import express from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import methodOverride from 'method-override';
import morgan from 'morgan';
import { NODE_ENV } from 'config/env';
import routes from 'router';

const app = express();

const morganFormat = NODE_ENV === 'development' ? 'dev' : 'combined';

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

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());
app.use(helmet());
app.use('/api', routes);

export default app;
