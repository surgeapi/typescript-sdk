// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Contacts extends APIResource {
  /**
   * Creates a new Contact object.
   *
   * @example
   * ```ts
   * const contact = await client.contacts.create(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   *   { phone_number: '+18015551234' },
   * );
   * ```
   */
  create(accountID: string, body: ContactCreateParams, options?: RequestOptions): APIPromise<Contact> {
    return this._client.post(path`/accounts/${accountID}/contacts`, { body, ...options });
  }

  /**
   * Retrieves a Contact object.
   *
   * @example
   * ```ts
   * const contact = await client.contacts.retrieve(
   *   'ctc_01j9dy8mdzfn3r0e8x1tbdrdrf',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Contact> {
    return this._client.get(path`/contacts/${id}`, options);
  }

  /**
   * Updates the specified contact by setting the values of the parameters passed.
   * Any parameters not provided will be left unchanged.
   *
   * @example
   * ```ts
   * const contact = await client.contacts.update(
   *   'ctc_01j9dy8mdzfn3r0e8x1tbdrdrf',
   *   { phone_number: '+18015551234' },
   * );
   * ```
   */
  update(id: string, body: ContactUpdateParams, options?: RequestOptions): APIPromise<Contact> {
    return this._client.patch(path`/contacts/${id}`, { body, ...options });
  }

  /**
   * List all contacts for an account with cursor-based pagination.
   *
   * @example
   * ```ts
   * const contacts = await client.contacts.list(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   * );
   * ```
   */
  list(
    accountID: string,
    query: ContactListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ContactListResponse> {
    return this._client.get(path`/accounts/${accountID}/contacts`, { query, ...options });
  }
}

/**
 * A contact who has consented to receive messages
 */
export interface Contact {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * The contact's phone number in E.164 format.
   */
  phone_number: string;

  /**
   * The contact's email address.
   */
  email?: string;

  /**
   * The contact's first name.
   */
  first_name?: string;

  /**
   * The contact's last name.
   */
  last_name?: string;

  /**
   * Set of key-value pairs that will be stored with the object.
   */
  metadata?: { [key: string]: string };
}

/**
 * A paginated list of contacts
 */
export interface ContactListResponse {
  /**
   * The list of contacts
   */
  data: Array<Contact>;

  /**
   * Cursor-based pagination information
   */
  pagination: ContactListResponse.Pagination;
}

export namespace ContactListResponse {
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

export interface ContactCreateParams {
  /**
   * The contact's phone number in E.164 format.
   */
  phone_number: string;

  /**
   * The contact's email address.
   */
  email?: string;

  /**
   * The contact's first name.
   */
  first_name?: string;

  /**
   * The contact's last name.
   */
  last_name?: string;

  /**
   * Set of key-value pairs that will be stored with the object.
   */
  metadata?: { [key: string]: string };
}

export interface ContactUpdateParams {
  /**
   * The contact's phone number in E.164 format.
   */
  phone_number: string;

  /**
   * The contact's email address.
   */
  email?: string;

  /**
   * The contact's first name.
   */
  first_name?: string;

  /**
   * The contact's last name.
   */
  last_name?: string;

  /**
   * Set of key-value pairs that will be stored with the object.
   */
  metadata?: { [key: string]: string };
}

export interface ContactListParams {
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

export declare namespace Contacts {
  export {
    type Contact as Contact,
    type ContactListResponse as ContactListResponse,
    type ContactCreateParams as ContactCreateParams,
    type ContactUpdateParams as ContactUpdateParams,
    type ContactListParams as ContactListParams,
  };
}
