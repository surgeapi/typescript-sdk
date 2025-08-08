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
  create(
    accountID: string,
    body: ContactCreateParams,
    options?: RequestOptions,
  ): APIPromise<ContactCreateResponse> {
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
  retrieve(id: string, options?: RequestOptions): APIPromise<ContactRetrieveResponse> {
    return this._client.get(path`/contacts/${id}`, options);
  }
}

/**
 * Response schema for single contact
 */
export interface ContactCreateResponse {
  /**
   * Unique identifier for the object.
   */
  id?: string;

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
   * Additional metadata about the contact.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The contact's phone number in E.164 format.
   */
  phone_number?: string;
}

/**
 * Response schema for single contact
 */
export interface ContactRetrieveResponse {
  /**
   * Unique identifier for the object.
   */
  id?: string;

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
   * Additional metadata about the contact.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The contact's phone number in E.164 format.
   */
  phone_number?: string;
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
   * Additional metadata about the contact.
   */
  metadata?: { [key: string]: unknown };
}

export declare namespace Contacts {
  export {
    type ContactCreateResponse as ContactCreateResponse,
    type ContactRetrieveResponse as ContactRetrieveResponse,
    type ContactCreateParams as ContactCreateParams,
  };
}
