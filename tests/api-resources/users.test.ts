// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Surge from '@surgeapi/node';

const client = new Surge({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('create: only required params', async () => {
    const responsePromise = client.users.create('acct_01j9a43avnfqzbjfch6pygv1td', { first_name: 'Brian' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('create: required and optional params', async () => {
    const response = await client.users.create('acct_01j9a43avnfqzbjfch6pygv1td', {
      first_name: 'Brian',
      last_name: "O'Conner",
      metadata: { email: 'boconner@toretti.family', user_id: 1234 },
      photo_url: 'https://toretti.family/people/brian.jpg',
    });
  });

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
});
