// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Contacts extends APIResource {
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
  update(id: string, body: ContactUpdateParams, options?: RequestOptions): APIPromise<ContactUpdateResponse> {
    return this._client.patch(path`/contacts/${id}`, { body, ...options });
  }
}

/**
 * A contact who has consented to receive messages
 */
export interface ContactRetrieveResponse {
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
 * A contact who has consented to receive messages
 */
export interface ContactUpdateResponse {
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
  export {
    type ContactRetrieveResponse as ContactRetrieveResponse,
    type ContactUpdateResponse as ContactUpdateResponse,
    type ContactUpdateParams as ContactUpdateParams,
  };
}
