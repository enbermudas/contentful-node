import express from 'express';

const router = express.Router();

router.get('/status', (req, res) => {
  res.send({ status: 'online' });
});

export default router;
