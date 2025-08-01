// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Verifications extends APIResource {
  /**
   * Creates a new Verification and sends the code to the given phone number.
   *
   * @example
   * ```ts
   * const verification = await client.verifications.create({
   *   phone_number: '+18015551234',
   * });
   * ```
   */
  create(body: VerificationCreateParams, options?: RequestOptions): APIPromise<Verification> {
    return this._client.post('/verifications', { body, ...options });
  }

  /**
   * Checks the code against a verification.
   *
   * @example
   * ```ts
   * const response = await client.verifications.check(
   *   'vfn_01jayh15c2f2xamftg0xpyq1nj',
   *   { code: '123456' },
   * );
   * ```
   */
  check(
    id: string,
    body: VerificationCheckParams,
    options?: RequestOptions,
  ): APIPromise<VerificationCheckResponse> {
    return this._client.post(path`/verifications/${id}/checks`, { body, ...options });
  }
}

/**
 * A phone number verification
 */
export interface Verification {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * The number of times the code has been attempted.
   */
  attempt_count: number;

  /**
   * The phone number being verified. In E.164 format.
   */
  phone_number: string;

  /**
   * The current status of the verification.
   */
  status: 'pending' | 'verified' | 'exhausted' | 'expired';
}

/**
 * The response returned from checking a Verification code
 */
export interface VerificationCheckResponse {
  /**
   * The result of the code check.
   *
   * This result will affect the status code of the response:
   *
   * - ok: 200
   * - incorrect: 422
   * - exhausted: 422
   * - expired: 422
   * - already_verified: 409
   */
  result?: 'ok' | 'incorrect' | 'exhausted' | 'expired' | 'already_verified';

  /**
   * A phone number verification
   */
  verification?: Verification;
}

export interface VerificationCreateParams {
  /**
   * The phone number to be verified. In E.164 format.
   */
  phone_number: string;
}

export interface VerificationCheckParams {
  /**
   * The Verification code that was received.
   */
  code: string;
}

export declare namespace Verifications {
  export {
    type Verification as Verification,
    type VerificationCheckResponse as VerificationCheckResponse,
    type VerificationCreateParams as VerificationCreateParams,
    type VerificationCheckParams as VerificationCheckParams,
  };
}
