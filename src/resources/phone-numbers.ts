// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PhoneNumbers extends APIResource {
  /**
   * Create a new phone number for the account.
   *
   * @example
   * ```ts
   * const phoneNumber = await client.phoneNumbers.create(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   *   { type: 'local' },
   * );
   * ```
   */
  create(
    accountID: string,
    body: PhoneNumberCreateParams,
    options?: RequestOptions,
  ): APIPromise<PhoneNumber> {
    return this._client.post(path`/accounts/${accountID}/phone_numbers`, { body, ...options });
  }
}

/**
 * A phone number that can be used to send and receive messages and calls
 */
export interface PhoneNumber {
  /**
   * Unique identifier for the phone number
   */
  id: string;

  /**
   * The phone number in E.164 format
   */
  number: string;

  /**
   * Whether the phone number is local, toll-free, or short code
   */
  type: 'local' | 'toll_free';
}

export interface PhoneNumberCreateParams {
  /**
   * Whether the phone number is local or toll-free
   */
  type: 'local' | 'toll_free';

  /**
   * The desired area code for this phone number.
   */
  area_code?: string;
}

export declare namespace PhoneNumbers {
  export { type PhoneNumber as PhoneNumber, type PhoneNumberCreateParams as PhoneNumberCreateParams };
}
