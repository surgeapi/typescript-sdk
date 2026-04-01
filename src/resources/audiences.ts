// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ContactsAPI from './contacts';
import { ContactsCursor } from './contacts';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Audiences extends APIResource {
  /**
   * Adds an existing contact to a manual audience.
   *
   * @example
   * ```ts
   * const contact = await client.audiences.addContact(
   *   'aud_01j9a43avnfqzbjfch6pygv1td',
   *   { id: 'ctc_01j9dy8mdzfn3r0e8x1tbdrdrf' },
   * );
   * ```
   */
  addContact(
    audienceID: string,
    body: AudienceAddContactParams,
    options?: RequestOptions,
  ): APIPromise<ContactsAPI.Contact> {
    return this._client.post(path`/audiences/${audienceID}/contacts`, { body, ...options });
  }

  /**
   * List all contacts in an audience with cursor-based pagination. The account is
   * inferred from the audience.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const contact of client.audiences.listContacts(
   *   'aud_01j9a43avnfqzbjfch6pygv1td',
   * )) {
   *   // ...
   * }
   * ```
   */
  listContacts(
    audienceID: string,
    query: AudienceListContactsParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ContactsCursor, ContactsAPI.Contact> {
    return this._client.getAPIList(path`/audiences/${audienceID}/contacts`, Cursor<ContactsAPI.Contact>, {
      query,
      ...options,
    });
  }
}

export interface AudienceAddContactParams {
  /**
   * The ID of the contact to add. The contact must belong to the same account as the
   * audience.
   */
  id: string;
}

export interface AudienceListContactsParams extends CursorParams {}

export declare namespace Audiences {
  export {
    type AudienceAddContactParams as AudienceAddContactParams,
    type AudienceListContactsParams as AudienceListContactsParams,
  };
}

export { type ContactsCursor };
