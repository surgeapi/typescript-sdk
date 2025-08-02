// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Surge from '@surgeapi/node';

const client = new Surge({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('send: only required params', async () => {
    const responsePromise = client.messages.send('acct_01j9a43avnfqzbjfch6pygv1td', {
      conversation: { contact: { phone_number: '+18015551234' } },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('send: required and optional params', async () => {
    const response = await client.messages.send('acct_01j9a43avnfqzbjfch6pygv1td', {
      conversation: {
        contact: {
          phone_number: '+18015551234',
          email: 'dev@stainless.com',
          first_name: 'Dominic',
          last_name: 'Toretto',
          metadata: { foo: 'string' },
        },
        phone_number: '+18015556789',
      },
      attachments: [{ url: 'https://toretto.family/coronas.gif' }],
      body: 'body',
      send_at: '2019-12-27T18:11:19.117Z',
    });
  });
});
