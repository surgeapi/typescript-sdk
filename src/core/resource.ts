// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Surge } from '../client';

export abstract class APIResource {
  protected _client: Surge;

  constructor(client: Surge) {
    this._client = client;
  }
}
