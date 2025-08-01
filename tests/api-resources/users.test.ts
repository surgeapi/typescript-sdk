// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Surge from 'surge';

const client = new Surge({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('retrieve', async () => {
    const responsePromise = client.users.retrieve('usr_01j9dwavghe1ttppewekjjkfrx');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('update: only required params', async () => {
    const responsePromise = client.users.update('usr_01j9dwavghe1ttppewekjjkfrx', { first_name: 'Brian' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('update: required and optional params', async () => {
    const response = await client.users.update('usr_01j9dwavghe1ttppewekjjkfrx', {
      first_name: 'Brian',
      last_name: "O'Conner",
      metadata: { email: 'boconner@toretti.family', user_id: 1234 },
      photo_url: 'https://toretti.family/people/brian.jpg',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('createToken', async () => {
    const responsePromise = client.users.createToken('usr_01jymgdfrpec2asc5m0z3a6fr9', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
