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
  create(accountID: string, body: UserCreateParams, options?: RequestOptions): APIPromise<User> {
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
   * Provides a mechanism for having Surge create a signed token for embeds instead
   * of signing with your own signing key.
   *
   * @example
   * ```ts
   * const userTokenResponse = await client.users.createToken(
   *   'usr_01jymgdfrpec2asc5m0z3a6fr9',
   * );
   * ```
   */
  createToken(
    userID: string,
    body: UserCreateTokenParams,
    options?: RequestOptions,
  ): APIPromise<UserTokenResponse> {
    return this._client.post(path`/users/${userID}/tokens`, { body, ...options });
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
 * Response when token has been created successfully
 */
export interface UserTokenResponse {
  /**
   * The created token.
   */
  token?: string;
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

export interface UserCreateTokenParams {
  /**
   * For how many seconds the token should be accepted. Defaults to 15 minutes.
   */
  duration_seconds?: number;
}

export declare namespace Users {
  export {
    type User as User,
    type UserTokenResponse as UserTokenResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserCreateTokenParams as UserCreateTokenParams,
  };
}
