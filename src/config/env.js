import dotenv from 'dotenv';

dotenv.config();

export const {
  CONTENTFUL_SPACE,
  CONTENTFUL_ACCESS_TOKEN,
  NODE_ENV,
  HOST,
  PORT,
  LOG_LEVEL,
} = process.env;
