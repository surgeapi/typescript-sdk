// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Surge from '@surgeapi/node';

const client = new Surge({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource campaigns', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.campaigns.create('acct_01j9a43avnfqzbjfch6pygv1td', {
      params: {
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
      },
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
    const response = await client.campaigns.create('acct_01j9a43avnfqzbjfch6pygv1td', {
      params: {
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
      },
    });
  });
});
