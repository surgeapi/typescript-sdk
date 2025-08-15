// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * An error response
 */
export interface Error {
  /**
   * A human-readable error message.
   */
  message: string;

  /**
   * A unique error code.
   */
  type: string;

  /**
   * Additional details about the error.
   */
  detail?: { [key: string]: unknown };
}
