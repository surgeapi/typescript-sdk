// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Surge from '@surgeapi/node';

const client = new Surge({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tollFreeCampaigns', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.tollFreeCampaigns.create('acct_01j9a43avnfqzbjfch6pygv1td', {
      consent_flows: [{ script: 'xxxxxxxxxxxxxxxxxxxx', type: 'verbal' }],
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      message_samples: ['string'],
      phone_number_id: 'phone_number_id',
      privacy_policy_url: 'https://example.com',
      terms_and_conditions_url: 'https://example.com',
      use_cases: ['two_factor_authentication'],
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
    const response = await client.tollFreeCampaigns.create('acct_01j9a43avnfqzbjfch6pygv1td', {
      consent_flows: [{ script: 'xxxxxxxxxxxxxxxxxxxx', type: 'verbal' }],
      description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
      message_samples: ['string'],
      phone_number_id: 'phone_number_id',
      privacy_policy_url: 'https://example.com',
      terms_and_conditions_url: 'https://example.com',
      use_cases: ['two_factor_authentication'],
      includes: ['age_gated'],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.tollFreeCampaigns.retrieve('tfc_01j9a43avnfqzbjfch6pygv1td');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.tollFreeCampaigns.update('tfc_01j9a43avnfqzbjfch6pygv1td', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.tollFreeCampaigns.list('acct_01j9a43avnfqzbjfch6pygv1td');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.tollFreeCampaigns.list(
        'acct_01j9a43avnfqzbjfch6pygv1td',
        { after: 'after', before: 'before' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Surge.NotFoundError);
  });
});
