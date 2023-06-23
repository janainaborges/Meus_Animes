import { api } from "../../services/api"; // Replace './your-module' with the correct path to your module file

describe('API Tests', () => {
  test('should have correct base URL', () => {
    expect(api.defaults.baseURL).toEqual('https://kitsu.io/api/edge');
  });

  test('should have correct headers', () => {
    expect(api.defaults.headers['Content-type']).toEqual('application/json');
  });

  // Add more test cases as needed
});
