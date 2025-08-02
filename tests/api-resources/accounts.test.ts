// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Surge from '@surgeapi/node';

const client = new Surge({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('create: only required params', async () => {
    const responsePromise = client.accounts.create({ name: 'Account #2840 - DT Precision Auto' });
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
    const response = await client.accounts.create({
      name: 'Account #2840 - DT Precision Auto',
      brand_name: 'DT Precision Auto',
      organization: {
        address: {
          country: 'US',
          line1: '2640 Huron St',
          line2: null,
          locality: 'Los Angeles',
          name: 'DT Precision Auto',
          postal_code: '90065',
          region: 'CA',
        },
        contact: {
          email: 'dom@dtprecisionauto.com',
          first_name: 'Dominic',
          last_name: 'Toretto',
          phone_number: '+13235556439',
          title: 'other',
          title_other: 'Owner',
        },
        country: 'US',
        email: 'dom@dtprecisionauto.com',
        identifier: '123456789',
        identifier_type: 'ein',
        industry: 'automotive',
        mobile_number: '+13235556439',
        regions_of_operation: ['usa_and_canada'],
        registered_name: 'DT Precision Auto LLC',
        stock_exchange: null,
        stock_symbol: null,
        type: 'llc',
        website: 'https://dtprecisionauto.com',
      },
      time_zone: 'America/Los_Angeles',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('update', async () => {
    const responsePromise = client.accounts.update('acct_01jpqjvfg9enpt7pyxd60pcmxj', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('retrieveStatus', async () => {
    const responsePromise = client.accounts.retrieveStatus('acct_01jpqjvfg9enpt7pyxd60pcmxj');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('retrieveStatus: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.retrieveStatus(
        'acct_01jpqjvfg9enpt7pyxd60pcmxj',
        { capabilities: ['local_messaging'] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Surge.NotFoundError);
  });
});
