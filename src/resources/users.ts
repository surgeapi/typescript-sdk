// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
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
  retrieve(id: string, options?: RequestOptions): APIPromise<User> {
    return this._client.get(path`/users/${id}`, options);
  }

  /**
   * Updates an existing User object.
   *
   * @example
   * ```ts
   * const user = await client.users.update(
   *   'usr_01j9dwavghe1ttppewekjjkfrx',
   *   { first_name: 'Brian' },
   * );
   * ```
   */
  update(id: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<User> {
    return this._client.patch(path`/users/${id}`, { body, ...options });
  }

  /**
   * Creates a new User object.
   *
   * @example
   * ```ts
   * const user = await client.users.users(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   *   { first_name: 'Brian' },
   * );
   * ```
   */
  users(accountID: string, body: UserUsersParams, options?: RequestOptions): APIPromise<User> {
    return this._client.post(path`/accounts/${accountID}/users`, { body, ...options });
  }
}

/**
 * A user of the app
 */
export interface User {
  /**
   * The user's first name.
   */
  first_name: string;

  /**
   * Unique identifier for the object.
   */
  id?: string;

  /**
   * The user's last name.
   */
  last_name?: string;

  /**
   * Set of key-value pairs that will be stored with the object.
   */
  metadata?: { [key: string]: string };

  /**
   * URL of a photo to be used as the user's avatar.
   */
  photo_url?: string;
}

/**
 * POST body for creating a user
 */
export interface UserParams {
  /**
   * The user's first name.
   */
  first_name: string;

  /**
   * The user's last name.
   */
  last_name?: string;

  /**
   * Set of key-value pairs that will be stored with the object.
   */
  metadata?: { [key: string]: string };

  /**
   * URL of a photo to be used as the user's avatar.
   */
  photo_url?: string;
}

export interface UserUpdateParams {
  /**
   * The user's first name.
   */
  first_name: string;

  /**
   * The user's last name.
   */
  last_name?: string;

  /**
   * Set of key-value pairs that will be stored with the object.
   */
  metadata?: { [key: string]: string };

  /**
   * URL of a photo to be used as the user's avatar.
   */
  photo_url?: string;
}

export interface UserUsersParams {
  /**
   * The user's first name.
   */
  first_name: string;

  /**
   * The user's last name.
   */
  last_name?: string;

  /**
   * Set of key-value pairs that will be stored with the object.
   */
  metadata?: { [key: string]: string };

  /**
   * URL of a photo to be used as the user's avatar.
   */
  photo_url?: string;
}

export declare namespace Users {
  export {
    type User as User,
    type UserParams as UserParams,
    type UserUpdateParams as UserUpdateParams,
    type UserUsersParams as UserUsersParams,
  };
}
