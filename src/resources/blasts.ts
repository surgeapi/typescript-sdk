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
   * const response = await client.blasts.blasts(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   * );
   * ```
   */
  blasts(
    accountID: string,
    body: BlastBlastsParams,
    options?: RequestOptions,
  ): APIPromise<BlastBlastsResponse> {
    return this._client.post(path`/accounts/${accountID}/blasts`, { body, ...options });
  }
}

/**
 * Response schema for single blast
 */
export interface BlastBlastsResponse {
  /**
   * Unique identifier for the object.
   */
  id?: string;

  attachments?: Array<BlastBlastsResponse.Attachment>;

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

export namespace BlastBlastsResponse {
  export interface Attachment {
    /**
     * The URL of the attachment.
     */
    url?: string;
  }
}

export interface BlastBlastsParams {
  attachments?: Array<BlastBlastsParams.Attachment>;

  /**
   * The message body.
   */
  body?: string;

  /**
   * @deprecated Deprecated. Use `to` instead.
   */
  contacts?: Array<string>;

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

export namespace BlastBlastsParams {
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
  export { type BlastBlastsResponse as BlastBlastsResponse, type BlastBlastsParams as BlastBlastsParams };
}
