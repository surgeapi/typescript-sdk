// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Surge from 'surge';

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
  test.skip('blasts', async () => {
    const responsePromise = client.accounts.blasts('acct_01j9a43avnfqzbjfch6pygv1td', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('campaigns: only required params', async () => {
    const responsePromise = client.accounts.campaigns('acct_01j9a43avnfqzbjfch6pygv1td', {
      consent_flow:
        'When customers bring in their car for service, they will fill out this web form for intake: https://fastauto.shop/bp108c In it they can choose to opt in to text message notifications. If they choose to opt in, we will send them notifications to let them know if our mechanics find issues and once the car is ready to go, as well as links to invoices and to leave us feedback.',
      description:
        'This phone number will send auto maintenance notifications to end users that have opted in. It will also be used for responding to customer inquiries and sending some marketing offers.',
      message_samples: [
        'You are now opted in to receive repair notifications from DT Precision Auto. Frequency varies. Msg&data rates apply. Reply STOP to opt out.',
        "You're lucky that hundred shot of NOS didn't blow the welds on the intake!",
        'Your car is ready to go. See your invoice here: https://l.fastauto.shop/s034ij',
      ],
      privacy_policy_url: 'https://fastauto.shop/sms-privacy',
      use_cases: ['account_notification', 'customer_care', 'marketing'],
      volume: 'high',
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
  test.skip('campaigns: required and optional params', async () => {
    const response = await client.accounts.campaigns('acct_01j9a43avnfqzbjfch6pygv1td', {
      consent_flow:
        'When customers bring in their car for service, they will fill out this web form for intake: https://fastauto.shop/bp108c In it they can choose to opt in to text message notifications. If they choose to opt in, we will send them notifications to let them know if our mechanics find issues and once the car is ready to go, as well as links to invoices and to leave us feedback.',
      description:
        'This phone number will send auto maintenance notifications to end users that have opted in. It will also be used for responding to customer inquiries and sending some marketing offers.',
      message_samples: [
        'You are now opted in to receive repair notifications from DT Precision Auto. Frequency varies. Msg&data rates apply. Reply STOP to opt out.',
        "You're lucky that hundred shot of NOS didn't blow the welds on the intake!",
        'Your car is ready to go. See your invoice here: https://l.fastauto.shop/s034ij',
      ],
      privacy_policy_url: 'https://fastauto.shop/sms-privacy',
      use_cases: ['account_notification', 'customer_care', 'marketing'],
      volume: 'high',
      includes: ['links', 'phone_numbers'],
      link_sample: 'https://l.fastauto.shop/s034ij',
      terms_and_conditions_url: 'https://fastauto.shop/terms-and-conditions',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('contacts: only required params', async () => {
    const responsePromise = client.accounts.contacts('acct_01j9a43avnfqzbjfch6pygv1td', {
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
  test.skip('contacts: required and optional params', async () => {
    const response = await client.accounts.contacts('acct_01j9a43avnfqzbjfch6pygv1td', {
      phone_number: '+18015551234',
      email: 'dom@toretto.family',
      first_name: 'Dominic',
      last_name: 'Toretto',
      metadata: { car: 'bar' },
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('messages: only required params', async () => {
    const responsePromise = client.accounts.messages('acct_01j9a43avnfqzbjfch6pygv1td', {
      conversation: { contact: {} },
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
  test.skip('messages: required and optional params', async () => {
    const response = await client.accounts.messages('acct_01j9a43avnfqzbjfch6pygv1td', {
      conversation: {
        contact: { first_name: 'Dominic', last_name: 'Toretto', phone_number: '+18015551234' },
        phone_number: '+18015556789',
      },
      attachments: [{ url: 'https://toretto.family/coronas.gif' }],
      body: 'body',
      send_at: '2019-12-27T18:11:19.117Z',
    });
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('phoneNumbers: only required params', async () => {
    const responsePromise = client.accounts.phoneNumbers('acct_01j9a43avnfqzbjfch6pygv1td', {
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

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('phoneNumbers: required and optional params', async () => {
    const response = await client.accounts.phoneNumbers('acct_01j9a43avnfqzbjfch6pygv1td', {
      type: 'local',
      area_code: '801',
    });
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

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('users: only required params', async () => {
    const responsePromise = client.accounts.users('acct_01j9a43avnfqzbjfch6pygv1td', { first_name: 'Brian' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('users: required and optional params', async () => {
    const response = await client.accounts.users('acct_01j9a43avnfqzbjfch6pygv1td', {
      first_name: 'Brian',
      last_name: "O'Conner",
      metadata: { email: 'boconner@toretti.family', user_id: 1234 },
      photo_url: 'https://toretti.family/people/brian.jpg',
    });
  });
});
