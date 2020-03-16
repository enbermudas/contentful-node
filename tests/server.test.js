import request from 'supertest';
import app from '../src/config/express';

const server = app.listen(3000);

afterAll(() => server.close());

describe('Server', () => {
  test('it should start the server', async () => {
    const res = await request(server).get('/api/status');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status');
  });
});
