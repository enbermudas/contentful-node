import request from 'utils/request';
import logger from 'config/logger';

const get = async (req, res, next) => {
  try {
    const response = await request.get('entries?content_type=category');
    return res.json(response.data);
  } catch (error) {
    logger.error(error.response.data.message);
    return next(error);
  }
};

module.exports = {
  get,
};
