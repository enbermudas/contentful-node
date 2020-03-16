import dotenv from 'dotenv';

dotenv.config();

export const {
  NODE_ENV,
  HOST,
  PORT,
  LOG_LEVEL,
  CONTENTFUL_MANAGEMENT_URL,
  CONTENTFUL_DELIVERY_URL,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_ENVIRONMENT,
  CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  CONTENTFUL_DELIVERY_ACCESS_TOKEN,
  CONTENTFUL_PREVIEW_ACCESS_TOKEN,
} = process.env;
