// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Surge from '@surgeapi/node';

const client = new Surge({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource audiences', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.audiences.create('acct_01j9a43avnfqzbjfch6pygv1td', {
      name: 'The Family',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.audiences.create('acct_01j9a43avnfqzbjfch6pygv1td', { name: 'The Family' });
  });

  // Mock server tests are disabled
  test.skip('addContact: only required params', async () => {
    const responsePromise = client.audiences.addContact('aud_01j9a43avnfqzbjfch6pygv1td', {
      id: 'ctc_01j9dy8mdzfn3r0e8x1tbdrdrf',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('addContact: required and optional params', async () => {
    const response = await client.audiences.addContact('aud_01j9a43avnfqzbjfch6pygv1td', {
      id: 'ctc_01j9dy8mdzfn3r0e8x1tbdrdrf',
    });
  });

  // Mock server tests are disabled
  test.skip('listContacts', async () => {
    const responsePromise = client.audiences.listContacts('aud_01j9a43avnfqzbjfch6pygv1td');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listContacts: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.audiences.listContacts(
        'aud_01j9a43avnfqzbjfch6pygv1td',
        { after: 'after', before: 'before' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Surge.NotFoundError);
  });
});
