// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Surge from '@surgeapi/node';

const client = new Surge({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.messages.create('acct_01j9a43avnfqzbjfch6pygv1td', {
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.messages.create('acct_01j9a43avnfqzbjfch6pygv1td', {
      conversation: {
        contact: {
          phone_number: '+18015551234',
          email: 'dom@toretto.family',
          first_name: 'Dominic',
          last_name: 'Toretto',
          metadata: { car: '1970 Dodge Charger R/T' },
        },
        phone_number: '+18015556789',
      },
      attachments: [{ url: 'https://toretto.family/coronas.gif' }],
      body: 'body',
      metadata: { foo: 'string' },
      send_at: '2019-12-27T18:11:19.117Z',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.messages.retrieve('msg_01j9e0m1m6fc38gsv2vkfqgzz2');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
