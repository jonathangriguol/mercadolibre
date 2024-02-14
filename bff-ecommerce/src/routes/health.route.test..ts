import request from 'supertest';
import app from '../app.ts';

/**
 * I could add more complexity using fake data (mocks) in order to
 * improve Services or API tests
 */
describe('Test the Health endpoint', () => {

    /**
   * Just a success handled test case
   */
  test('It should respond to the GET method with status 200 when endpoint is called', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
  });

  test('should respond with status 500 when API is not running', async () => {
    // Suppose the API is not running on port 3000, then fail
    const response = await request('http://localhost:3000').get('/health');
    expect(response.statusCode).toBe(500);
  });

});