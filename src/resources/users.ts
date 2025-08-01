// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AccountsAPI from './accounts';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Retrieves a User object.
   *
   * @example
   * ```ts
   * const userResponse = await client.users.retrieve(
   *   'usr_01j9dwavghe1ttppewekjjkfrx',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<AccountsAPI.UserResponse> {
    return this._client.get(path`/users/${id}`, options);
  }

  /**
   * Updates an existing User object.
   *
   * @example
   * ```ts
   * const userResponse = await client.users.update(
   *   'usr_01j9dwavghe1ttppewekjjkfrx',
   *   { first_name: 'Brian' },
   * );
   * ```
   */
  update(id: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<AccountsAPI.UserResponse> {
    return this._client.patch(path`/users/${id}`, { body, ...options });
  }

  /**
   * Provides a mechanism for having Surge create a signed token for embeds instead
   * of signing with your own signing key.
   *
   * @example
   * ```ts
   * const response = await client.users.createToken(
   *   'usr_01jymgdfrpec2asc5m0z3a6fr9',
   * );
   * ```
   */
  createToken(
    userID: string,
    body: UserCreateTokenParams,
    options?: RequestOptions,
  ): APIPromise<UserCreateTokenResponse> {
    return this._client.post(path`/users/${userID}/tokens`, { body, ...options });
  }
}

/**
 * Response when token has been created successfully
 */
export interface UserCreateTokenResponse {
  /**
   * The created token.
   */
  token?: string;
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
   * Set of key-value pairs that will be stored with the user.
   */
  metadata?: unknown;

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
    type UserCreateTokenResponse as UserCreateTokenResponse,
    type UserUpdateParams as UserUpdateParams,
    type UserCreateTokenParams as UserCreateTokenParams,
  };
}
