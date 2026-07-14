// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PhoneNumbers extends APIResource {
  /**
   * Retrieves a PhoneNumber object.
   *
   * @example
   * ```ts
   * const phoneNumber = await client.phoneNumbers.retrieve(
   *   'pn_01jsjwe4d9fx3tpymgtg958d9w',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PhoneNumber> {
    return this._client.get(path`/phone_numbers/${id}`, options);
  }

  /**
   * Updates a phone number's details.
   *
   * @example
   * ```ts
   * const phoneNumber = await client.phoneNumbers.update(
   *   'pn_01jsjwe4d9fx3tpymgtg958d9w',
   * );
   * ```
   */
  update(id: string, body: PhoneNumberUpdateParams, options?: RequestOptions): APIPromise<PhoneNumber> {
    return this._client.patch(path`/phone_numbers/${id}`, { body, ...options });
  }

  /**
   * List all phone numbers for an account with cursor-based pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const phoneNumber of client.phoneNumbers.list(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    accountID: string,
    query: PhoneNumberListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PhoneNumbersCursor, PhoneNumber> {
    return this._client.getAPIList(path`/accounts/${accountID}/phone_numbers`, Cursor<PhoneNumber>, {
      query,
      ...options,
    });
  }

  /**
   * Browse purchasable phone numbers from Surge inventory before buying.
   *
   * Pagination cursors are always null for now.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const phoneNumberListAvailableNumbersResponse of client.phoneNumbers.listAvailableNumbers(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   *   { type: 'local' },
   * )) {
   *   // ...
   * }
   * ```
   */
  listAvailableNumbers(
    accountID: string,
    query: PhoneNumberListAvailableNumbersParams,
    options?: RequestOptions,
  ): PagePromise<PhoneNumberListAvailableNumbersResponsesCursor, PhoneNumberListAvailableNumbersResponse> {
    return this._client.getAPIList(
      path`/accounts/${accountID}/available_phone_numbers`,
      Cursor<PhoneNumberListAvailableNumbersResponse>,
      { query, ...options },
    );
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

  /**
   * Releases a phone number from the account.
   *
   * @example
   * ```ts
   * const phoneNumber = await client.phoneNumbers.release(
   *   'pn_01j9a43avnfqzbjfch6pygv1td',
   * );
   * ```
   */
  release(id: string, options?: RequestOptions): APIPromise<PhoneNumber> {
    return this._client.delete(path`/phone_numbers/${id}`, options);
  }
}

export type PhoneNumbersCursor = Cursor<PhoneNumber>;

export type PhoneNumberListAvailableNumbersResponsesCursor = Cursor<PhoneNumberListAvailableNumbersResponse>;

/**
 * A phone number that can be used to send and receive messages and calls
 */
export interface PhoneNumber {
  /**
   * Unique identifier for the phone number
   */
  id: string;

  /**
   * Campaign attachment details for a domestic local phone number
   */
  campaign: PhoneNumber.Campaign | null;

  /**
   * @deprecated Use `campaign.id` instead.
   */
  campaign_id: string | null;

  /**
   * A human-readable name for the phone number
   */
  name: string | null;

  /**
   * The phone number in E.164 format
   */
  number: string;

  /**
   * Whether the phone number is local, toll-free, or short code
   */
  type: 'local' | 'short_code' | 'toll_free';
}

export namespace PhoneNumber {
  /**
   * Campaign attachment details for a domestic local phone number
   */
  export interface Campaign {
    /**
     * The unique identifier of the campaign this phone number is attached to
     */
    id: string;

    /**
     * The current campaign attachment status for this phone number.
     */
    attachment_status: 'attached' | 'attachment_pending' | 'detached' | 'detachment_pending';
  }
}

/**
 * A phone number available for purchase from Surge inventory
 */
export interface PhoneNumberListAvailableNumbersResponse {
  /**
   * ISO country code for the phone number
   */
  country: 'US' | 'CA';

  /**
   * The phone number in E.164 format
   */
  number: string;

  /**
   * Whether the phone number is local or toll-free
   */
  type: 'local' | 'toll_free';
}

export interface PhoneNumberUpdateParams {
  /**
   * Campaign ID to attach this number to (`cpn_...`).
   */
  campaign_id?: string;

  /**
   * A human-readable name for the phone number.
   */
  name?: string;
}

export interface PhoneNumberListParams extends CursorParams {}

export interface PhoneNumberListAvailableNumbersParams extends CursorParams {
  /**
   * Whether to search for local or toll-free numbers.
   */
  type: 'local' | 'toll_free';

  /**
   * Filter by 3-digit area code.
   */
  area_code?: string;

  /**
   * ISO country code to search in.
   */
  country?: 'US' | 'CA';
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
   * A human-readable name for the phone number. If not provided, defaults to the
   * formatted phone number.
   */
  name?: string;

  /**
   * Whether the phone number is local or toll-free. Can be omitted if area_code or
   * latitude/longitude are provided.
   */
  type?: 'local' | 'toll_free';
}

export declare namespace PhoneNumbers {
  export {
    type PhoneNumber as PhoneNumber,
    type PhoneNumberListAvailableNumbersResponse as PhoneNumberListAvailableNumbersResponse,
    type PhoneNumbersCursor as PhoneNumbersCursor,
    type PhoneNumberListAvailableNumbersResponsesCursor as PhoneNumberListAvailableNumbersResponsesCursor,
    type PhoneNumberUpdateParams as PhoneNumberUpdateParams,
    type PhoneNumberListParams as PhoneNumberListParams,
    type PhoneNumberListAvailableNumbersParams as PhoneNumberListAvailableNumbersParams,
    type PhoneNumberPurchaseParams as PhoneNumberPurchaseParams,
  };
}
