// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Blasts extends APIResource {
  /**
   * Sends a Blast.
   *
   * @example
   * ```ts
   * const blast = await client.blasts.create(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   * );
   * ```
   */
  create(accountID: string, body: BlastCreateParams, options?: RequestOptions): APIPromise<Blast> {
    return this._client.post(path`/accounts/${accountID}/blasts`, { body, ...options });
  }
}

/**
 * A Blast is a message sent to multiple recipients at once.
 */
export interface Blast {
  /**
   * Unique identifier for the object.
   */
  id?: string;

  attachments?: Array<Blast.Attachment>;

  /**
   * The message body.
   */
  body?: string;

  /**
   * Optional name for the blast.
   */
  name?: string;

  /**
   * When the blast will be or was sent.
   */
  send_at?: string;
}

export namespace Blast {
  export interface Attachment {
    /**
     * The URL of the attachment.
     */
    url?: string;
  }
}

export interface BlastCreateParams {
  attachments?: Array<BlastCreateParams.Attachment>;

  /**
   * The message body.
   */
  body?: string;

  /**
   * @deprecated Deprecated. Use `to` instead.
   */
  contacts?: Array<string>;

  /**
   * The phone number from which to send the blast. This can be either the phone
   * number in E.164 format or a Surge phone number id. If not provided, the
   * account's default phone number is used.
   */
  from?: string;

  /**
   * Optional name for the blast.
   */
  name?: string;

  /**
   * @deprecated Deprecated. Use `to` instead.
   */
  segments?: Array<string>;

  /**
   * When to send the blast. If not provided, sends immediately.
   */
  send_at?: string;

  /**
   * List of recipients to whom the blast should be sent. This can be a combination
   * of contact IDs, segment IDs, and phone numbers.
   */
  to?: Array<string>;
}

export namespace BlastCreateParams {
  /**
   * Params for creating an attachment
   */
  export interface Attachment {
    /**
     * The URL of the attachment.
     */
    url: string;
  }
}

export declare namespace Blasts {
  export { type Blast as Blast, type BlastCreateParams as BlastCreateParams };
}
