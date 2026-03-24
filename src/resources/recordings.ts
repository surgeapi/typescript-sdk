// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ContactsAPI from './contacts';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Recordings extends APIResource {
  /**
   * Retrieves a Recording object.
   *
   * @example
   * ```ts
   * const recording = await client.recordings.retrieve(
   *   'rec_01kfyc9dgdec1avkgs7tng8htg',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<RecordingRetrieveResponse> {
    return this._client.get(path`/recordings/${id}`, options);
  }

  /**
   * List all recordings for an account with cursor-based pagination.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const recordingListResponse of client.recordings.list(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    accountID: string,
    query: RecordingListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<RecordingListResponsesCursor, RecordingListResponse> {
    return this._client.getAPIList(path`/accounts/${accountID}/recordings`, Cursor<RecordingListResponse>, {
      query,
      ...options,
    });
  }

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

export type RecordingListResponsesCursor = Cursor<RecordingListResponse>;

/**
 * A call recording
 */
export interface RecordingRetrieveResponse {
  /**
   * The unique identifier for the recording
   */
  id: string;

  /**
   * The call that produced this recording
   */
  call: RecordingRetrieveResponse.Call;

  /**
   * The duration of the recording in seconds
   */
  duration: number;
}

export namespace RecordingRetrieveResponse {
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
 * A call recording
 */
export interface RecordingListResponse {
  /**
   * The unique identifier for the recording
   */
  id: string;

  /**
   * The call that produced this recording
   */
  call: RecordingListResponse.Call;

  /**
   * The duration of the recording in seconds
   */
  duration: number;
}

export namespace RecordingListResponse {
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

export interface RecordingListParams extends CursorParams {}

export declare namespace Recordings {
  export {
    type RecordingRetrieveResponse as RecordingRetrieveResponse,
    type RecordingListResponse as RecordingListResponse,
    type RecordingDeleteResponse as RecordingDeleteResponse,
    type RecordingGetFileResponse as RecordingGetFileResponse,
    type RecordingListResponsesCursor as RecordingListResponsesCursor,
    type RecordingListParams as RecordingListParams,
  };
}
