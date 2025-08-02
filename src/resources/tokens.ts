// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tokens extends APIResource {
  /**
   * Provides a mechanism for having Surge create a signed token for embeds instead
   * of signing with your own signing key.
   *
   * @example
   * ```ts
   * const tokenResponse = await client.tokens.createToken(
   *   'usr_01jymgdfrpec2asc5m0z3a6fr9',
   * );
   * ```
   */
  createToken(
    userID: string,
    body: TokenCreateTokenParams,
    options?: RequestOptions,
  ): APIPromise<TokenResponse> {
    return this._client.post(path`/users/${userID}/tokens`, { body, ...options });
  }
}

/**
 * A request to create a token
 */
export interface TokenParams {
  /**
   * For how many seconds the token should be accepted. Defaults to 15 minutes.
   */
  duration_seconds?: number;
}

/**
 * Response when token has been created successfully
 */
export interface TokenResponse {
  /**
   * The created token.
   */
  token?: string;
}

export interface TokenCreateTokenParams {
  /**
   * For how many seconds the token should be accepted. Defaults to 15 minutes.
   */
  duration_seconds?: number;
}

export declare namespace Tokens {
  export {
    type TokenParams as TokenParams,
    type TokenResponse as TokenResponse,
    type TokenCreateTokenParams as TokenCreateTokenParams,
  };
}
