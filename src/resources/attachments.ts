// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Attachments extends APIResource {
  /**
   * Redirects to a signed URL where the attachment file can be downloaded. URL is
   * short-lived, so redirect should be followed immediately.
   *
   * @example
   * ```ts
   * const response = await client.attachments.getFile(
   *   'att_01kfyc9dgdec1avkgs7tng8htg',
   * );
   * ```
   */
  getFile(attachmentID: string, options?: RequestOptions): APIPromise<AttachmentGetFileResponse> {
    return this._client.get(path`/attachments/${attachmentID}/file`, options);
  }
}

/**
 * An error response
 */
export interface AttachmentGetFileResponse {
  /**
   * An error response
   */
  error: Shared.Error;
}

export declare namespace Attachments {
  export {
    type AttachmentGetFileResponse as AttachmentGetFileResponse
  };
}
