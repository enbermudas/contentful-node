import express from 'express';
import controller from './controller';

const router = express.Router();

router.use('/', controller.get);

export default router;
