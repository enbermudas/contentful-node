import request from 'supertest';
import server from 'src';

afterAll(() => server.close());

describe('Server', () => {
  it('Should return the api status json', async () => {
    const res = await request(server).get('/api/status');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status');
  });

  it('Should return a 404 error', async () => {
    const res = await request(server).get('/api/this-does-not-exists');

    expect(res.statusCode).toEqual(404);
  });
});
