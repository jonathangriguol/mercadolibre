import request from 'supertest';
import app from './app';

/**
 * Just a simple test to verify that accessing to the root path
 * an error will be returned
 */
describe('Test the unhandled root path', () => {
  test('It should respond to the GET method with status 404', async () => {
    const response = await request(app).get('/api');
    expect(response.statusCode).toBe(404);
  });
});