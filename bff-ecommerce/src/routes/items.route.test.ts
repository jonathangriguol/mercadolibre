import request from 'supertest';
import app from '../app.ts';

/**
 * I could add more complexity using fake data (mocks) in order to
 * improve Services or API tests
 */
describe('Test the items endpoints', () => {

    /**
   * Just a success handled test case
   */
  test('It should respond to the GET method with status 200 when search query is provided', async () => {
    const response = await request(app).get('/api/items?search=some-text');
    expect(response.statusCode).toBe(200);
  });

  /**
   * Just a error handled test case
   */
  test('It should respond with status 400 when search query is not provided', async () => {
    const response = await request(app).get('/api/items');
    expect(response.statusCode).toBe(400);
    expect(response.body).toEqual({ message: "Falta el parámetro de búsqueda <search>" });
    
  });

});