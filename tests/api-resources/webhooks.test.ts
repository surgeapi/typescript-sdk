// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Webhook } from 'standardwebhooks';

import Surge from '@surgeapi/node';

const client = new Surge({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  test.skip('unwrap', async () => {
    const key = 'whsec_c2VjcmV0Cg==';
    const payload =
      '{"account_id":"acct_01japd271aeatb7txrzr2xj8sg","data":{"id":"call_01jjnn7s0zfx5tdcsxjfy93et2","contact":{"id":"ctc_01ja88cboqffhswjx8zbak3ykk","phone_number":"+18015551234","email":"dom@toretto.family","first_name":"Dominic","last_name":"Toretto","metadata":{"car":"1970 Dodge Charger R/T"}},"duration":184,"initiated_at":"2025-03-31T21:01:37Z","status":"completed"},"timestamp":"2024-10-21T23:29:41Z","type":"call.ended"}';
    const msgID = '1';
    const timestamp = new Date();
    const wh = new Webhook(key);
    const signature = wh.sign(msgID, timestamp, payload);
    const headers: Record<string, string> = {
      'webhook-signature': signature,
      'webhook-id': msgID,
      'webhook-timestamp': String(Math.floor(timestamp.getTime() / 1000)),
    };
    client.webhooks.unwrap(payload, { headers, key });
    expect(() => {
      const wrongKey = 'whsec_aaaaaaaaaa==';
      client.webhooks.unwrap(payload, { headers, key: wrongKey });
    }).toThrow('No matching signature found');
    expect(() => {
      const badSig = wh.sign(msgID, timestamp, 'some other payload');
      client.webhooks.unwrap(payload, { headers: { ...headers, 'webhook-signature': badSig }, key });
    }).toThrow('No matching signature found');
    expect(() => {
      client.webhooks.unwrap(payload, { headers: { ...headers, 'webhook-timestamp': '5' }, key });
    }).toThrow('Message timestamp too old');
    expect(() => {
      client.webhooks.unwrap(payload, { headers: { ...headers, 'webhook-id': 'wrong' }, key });
    }).toThrow('No matching signature found');
  });
});
