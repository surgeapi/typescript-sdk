// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ContactsAPI from './contacts';
import { ContactsCursor } from './contacts';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Audiences extends APIResource {
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

export interface AudienceListContactsParams extends CursorParams {}

export declare namespace Audiences {
  export { type AudienceListContactsParams as AudienceListContactsParams };
}

export { type ContactsCursor };
