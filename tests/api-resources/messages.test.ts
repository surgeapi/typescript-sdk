// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Surge from '@surgeapi/node';

const client = new Surge({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource messages', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('create: only required params', async () => {
    const responsePromise = client.messages.create('acct_01j9a43avnfqzbjfch6pygv1td', { conversation: {} });
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
    const response = await client.messages.create('acct_01j9a43avnfqzbjfch6pygv1td', {
      conversation: {
        id: 'cnv_01j9e0dgmdfkj86c877ws0znae',
        contact: {
          id: 'ctc_01j9dy8mdzfn3r0e8x1tbdrdrf',
          first_name: 'Dominic',
          last_name: 'Toretto',
          phone_number: '+18015551234',
        },
      },
      attachments: [{ url: 'https://toretto.family/coronas.gif' }],
      body: 'Thought you could leave without saying goodbye?',
    });
  });
});
