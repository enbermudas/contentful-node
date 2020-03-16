import request from '../../src/utils/request';

describe('Request', () => {
  test('it should return data when correct endpoint is provided', async () => {
    const response = await request.get('entries?content_type=category');
    expect(typeof response.data).toBe('object');
    expect(response.data).toHaveProperty('items');
    expect(response.status).toEqual(200);
  });
});
