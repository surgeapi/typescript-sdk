// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
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
  create(
    accountID: string,
    body: BlastCreateParams,
    options?: RequestOptions,
  ): APIPromise<BlastCreateResponse> {
    return this._client.post(path`/accounts/${accountID}/blasts`, { body, ...options });
  }
}

/**
 * Response schema for single blast
 */
export interface BlastCreateResponse {
  /**
   * Unique identifier for the object.
   */
  id?: string;

  attachments?: Array<BlastCreateResponse.Attachment>;

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

export namespace BlastCreateResponse {
  export interface Attachment {
    /**
     * The URL of the attachment.
     */
    url?: string;
  }
}

export interface BlastCreateParams {
  attachments?: Array<Shared.AttachmentParams>;

  /**
   * The message body.
   */
  body?: string;

  /**
   * List of contact IDs to send the blast to.
   */
  contacts?: Array<string>;

  /**
   * Optional name for the blast.
   */
  name?: string;

  /**
   * List of segment IDs to send the blast to.
   */
  segments?: Array<string>;

  /**
   * When to send the blast. If not provided, sends immediately.
   */
  send_at?: string;
}

export declare namespace Blasts {
  export { type BlastCreateResponse as BlastCreateResponse, type BlastCreateParams as BlastCreateParams };
}
