// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PhoneNumbers extends APIResource {
  /**
   * List all phone numbers for an account with cursor-based pagination.
   *
   * @example
   * ```ts
   * const phoneNumbers = await client.phoneNumbers.list(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   * );
   * ```
   */
  list(
    accountID: string,
    query: PhoneNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PhoneNumberListResponse> {
    return this._client.get(path`/accounts/${accountID}/phone_numbers`, { query, ...options });
  }

  /**
   * Purchase a new phone number for the account. You can specify search criteria or
   * let the system select a random number.
   *
   * @example
   * ```ts
   * const phoneNumber = await client.phoneNumbers.purchase(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   * );
   * ```
   */
  purchase(
    accountID: string,
    body: PhoneNumberPurchaseParams,
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
  type: 'local' | 'short_code' | 'toll_free';
}

/**
 * A paginated list of phone numbers
 */
export interface PhoneNumberListResponse {
  /**
   * The list of phone numbers
   */
  data: Array<PhoneNumber>;

  /**
   * Cursor-based pagination information
   */
  pagination: PhoneNumberListResponse.Pagination;
}

export namespace PhoneNumberListResponse {
  /**
   * Cursor-based pagination information
   */
  export interface Pagination {
    /**
     * Cursor for the next page of results. Null if there is no next page.
     */
    next_cursor?: string | null;

    /**
     * Cursor for the previous page of results. Null if there is no previous page.
     */
    previous_cursor?: string | null;
  }
}

export interface PhoneNumberListParams {
  /**
   * Cursor for forward pagination. Use the next_cursor from a previous response.
   */
  after?: string;

  /**
   * Cursor for backward pagination. Use the previous_cursor from a previous
   * response.
   */
  before?: string;
}

export interface PhoneNumberPurchaseParams {
  /**
   * The desired area code for this phone number. If provided without type, the type
   * will be inferred.
   */
  area_code?: string;

  /**
   * Latitude to search for nearby phone numbers. Must be used with longitude. If
   * provided without type, type will be inferred as 'local'.
   */
  latitude?: number;

  /**
   * Longitude to search for nearby phone numbers. Must be used with latitude. If
   * provided without type, type will be inferred as 'local'.
   */
  longitude?: number;

  /**
   * Whether the phone number is local or toll-free. Can be omitted if area_code or
   * latitude/longitude are provided.
   */
  type?: 'local' | 'toll_free';
}

export declare namespace PhoneNumbers {
  export {
    type PhoneNumber as PhoneNumber,
    type PhoneNumberListResponse as PhoneNumberListResponse,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberPurchaseParams as PhoneNumberPurchaseParams,
  };
}
