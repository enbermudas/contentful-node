import request from 'utils/request';

describe('Request', () => {
  it('Should return data when correct endpoint is provided', async () => {
    const response = await request.get('entries?content_type=category');
    expect(typeof response.data).toBe('object');
    expect(response.data).toHaveProperty('items');
    expect(response.status).toEqual(200);
  });
});
