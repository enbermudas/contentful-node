import request from 'utils/request';

const get = async (req, res, next) => {
  try {
    const response = await request.get('entries?content_type=category');
    return res.json(response.data);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  get,
};
