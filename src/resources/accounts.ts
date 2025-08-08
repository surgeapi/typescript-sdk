// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Accounts extends APIResource {
  /**
   * Creates a new Account within the calling Platform.
   *
   * @example
   * ```ts
   * const account = await client.accounts.create({
   *   name: 'D·T Precision Auto Shop',
   * });
   * ```
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<AccountCreateResponse> {
    return this._client.post('/accounts', { body, ...options });
  }
}

/**
 * Response containing account information
 */
export interface AccountCreateResponse {
  /**
   * The account ID
   */
  id: string;

  /**
   * The name of the account
   */
  name: string;

  /**
   * The phone number to forward calls to
   */
  call_forwarding_number?: string | null;

  /**
   * The time zone for the account
   */
  time_zone?: string | null;
}

export interface AccountCreateParams {
  /**
   * The name of the account
   */
  name: string;

  /**
   * The phone number to forward calls to
   */
  call_forwarding_number?: string;

  /**
   * The time zone for the account
   */
  time_zone?: string | null;
}

export declare namespace Accounts {
  export {
    type AccountCreateResponse as AccountCreateResponse,
    type AccountCreateParams as AccountCreateParams,
  };
}
