// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
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
  create(accountID: string, body: ContactCreateParams, options?: RequestOptions): APIPromise<Shared.Contact> {
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
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.Contact> {
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
  update(id: string, body: ContactUpdateParams, options?: RequestOptions): APIPromise<Shared.Contact> {
    return this._client.patch(path`/contacts/${id}`, { body, ...options });
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

export declare namespace Contacts {
  export { type ContactCreateParams as ContactCreateParams, type ContactUpdateParams as ContactUpdateParams };
}
