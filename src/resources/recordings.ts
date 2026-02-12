// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Recordings extends APIResource {
  /**
   * Redirects to a signed URL where the recording audio file can be downloaded. URL
   * is short-lived, so redirect should be followed immediately.
   *
   * @example
   * ```ts
   * const response = await client.recordings.getFile(
   *   'rec_01kfyc9dgdec1avkgs7tng8htg',
   * );
   * ```
   */
  getFile(recordingID: string, options?: RequestOptions): APIPromise<RecordingGetFileResponse> {
    return this._client.get(path`/recordings/${recordingID}/file`, options);
  }
}

/**
 * An error response
 */
export interface RecordingGetFileResponse {
  /**
   * An error response
   */
  error: Shared.Error;
}

export declare namespace Recordings {
  export { type RecordingGetFileResponse as RecordingGetFileResponse };
}
