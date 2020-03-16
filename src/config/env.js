import dotenv from 'dotenv';

dotenv.config();

export const { NODE_ENV } = process.env;
export const { HOST } = process.env;
export const { PORT } = process.env;
export const { LOG_LEVEL } = process.env;
