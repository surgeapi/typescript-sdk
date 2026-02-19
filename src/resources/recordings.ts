// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ContactsAPI from './contacts';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Recordings extends APIResource {
  /**
   * Deletes a recording. The recording file will be removed from storage
   * asynchronously.
   *
   * @example
   * ```ts
   * const recording = await client.recordings.delete(
   *   'rec_01kfyc9dgdec1avkgs7tng8htg',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<RecordingDeleteResponse> {
    return this._client.delete(path`/recordings/${id}`, options);
  }

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
 * A call recording
 */
export interface RecordingDeleteResponse {
  /**
   * The unique identifier for the recording
   */
  id: string;

  /**
   * The call that produced this recording
   */
  call: RecordingDeleteResponse.Call;

  /**
   * The duration of the recording in seconds
   */
  duration: number;
}

export namespace RecordingDeleteResponse {
  /**
   * The call that produced this recording
   */
  export interface Call {
    /**
     * The unique identifier for the call
     */
    id: string;

    /**
     * A contact who has consented to receive messages
     */
    contact: ContactsAPI.Contact;

    /**
     * The duration of the call in seconds
     */
    duration: number;

    /**
     * When the call was initiated
     */
    initiated_at: string;

    /**
     * The status of the call
     */
    status:
      | 'busy'
      | 'canceled'
      | 'completed'
      | 'failed'
      | 'in_progress'
      | 'missed'
      | 'no_answer'
      | 'queued'
      | 'ringing';
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
  export {
    type RecordingDeleteResponse as RecordingDeleteResponse,
    type RecordingGetFileResponse as RecordingGetFileResponse,
  };
}
