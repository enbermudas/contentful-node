import express from 'express';
import categoryRoutes from 'modules/category/routes';

const router = express.Router();

router.get('/status', (req, res) => {
  res.send({ status: 'online' });
});

router.use('/category', categoryRoutes);

export default router;
