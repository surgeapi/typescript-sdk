// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Surge from '@surgeapi/node';

const client = new Surge({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource phoneNumbers', () => {
  // Prism doesn't support callbacks yet
  test.skip('purchase: only required params', async () => {
    const responsePromise = client.phoneNumbers.purchase('acct_01j9a43avnfqzbjfch6pygv1td', {
      type: 'local',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support callbacks yet
  test.skip('purchase: required and optional params', async () => {
    const response = await client.phoneNumbers.purchase('acct_01j9a43avnfqzbjfch6pygv1td', {
      type: 'local',
      area_code: '801',
    });
  });
});
