// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Creates a new User object.
   *
   * @example
   * ```ts
   * const user = await client.users.create(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   *   { first_name: 'Brian' },
   * );
   * ```
   */
  create(
    accountID: string,
    body: UserCreateParams,
    options?: RequestOptions,
  ): APIPromise<UserCreateResponse> {
    return this._client.post(path`/accounts/${accountID}/users`, { body, ...options });
  }

  /**
   * Retrieves a User object.
   *
   * @example
   * ```ts
   * const user = await client.users.retrieve(
   *   'usr_01j9dwavghe1ttppewekjjkfrx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/users/${id}`, options);
  }
}

/**
 * Response schema for single user
 */
export interface UserCreateResponse {
  /**
   * Unique identifier for the object.
   */
  id?: string;

  /**
   * The user's first name.
   */
  first_name?: string;

  /**
   * The user's last name.
   */
  last_name?: string;

  /**
   * Set of key-value pairs that will be stored with the user.
   */
  metadata?: unknown;

  /**
   * URL of a photo to be used as the user's avatar.
   */
  photo_url?: string;
}

/**
 * Response schema for single user
 */
export interface UserRetrieveResponse {
  /**
   * Unique identifier for the object.
   */
  id?: string;

  /**
   * The user's first name.
   */
  first_name?: string;

  /**
   * The user's last name.
   */
  last_name?: string;

  /**
   * Set of key-value pairs that will be stored with the user.
   */
  metadata?: unknown;

  /**
   * URL of a photo to be used as the user's avatar.
   */
  photo_url?: string;
}

export interface UserCreateParams {
  /**
   * The user's first name.
   */
  first_name: string;

  /**
   * The user's last name.
   */
  last_name?: string;

  /**
   * Set of key-value pairs that will be stored with the user.
   */
  metadata?: unknown;

  /**
   * URL of a photo to be used as the user's avatar.
   */
  photo_url?: string;
}

export declare namespace Users {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserCreateParams as UserCreateParams,
  };
}
