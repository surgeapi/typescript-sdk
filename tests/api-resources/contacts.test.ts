// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Surge from '@surgeapi/node';

const client = new Surge({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contacts', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('create: only required params', async () => {
    const responsePromise = client.contacts.create('acct_01j9a43avnfqzbjfch6pygv1td', {
      phone_number: '+18015551234',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.contacts.create('acct_01j9a43avnfqzbjfch6pygv1td', {
      phone_number: '+18015551234',
      email: 'dom@toretto.family',
      first_name: 'Dominic',
      last_name: 'Toretto',
      metadata: { car: '1970 Dodge Charger R/T' },
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('retrieve', async () => {
    const responsePromise = client.contacts.retrieve('ctc_01j9dy8mdzfn3r0e8x1tbdrdrf');
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
    const responsePromise = client.contacts.update('ctc_01j9dy8mdzfn3r0e8x1tbdrdrf', {
      phone_number: '+18015551234',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.contacts.update('ctc_01j9dy8mdzfn3r0e8x1tbdrdrf', {
      phone_number: '+18015551234',
      email: 'dom@toretto.family',
      first_name: 'Dominic',
      last_name: 'Toretto',
      metadata: { car: '1970 Dodge Charger R/T' },
    });
  });
});
