// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

/**
 * Params for creating an attachment
 */
export interface AttachmentParams {
  /**
   * The URL of the attachment.
   */
  url: string;
}

/**
 * A contact who has consented to receive messages
 */
export interface Contact {
  /**
   * Unique identifier for the object.
   */
  id: string;

  /**
   * The contact's phone number in E.164 format.
   */
  phone_number: string;

  /**
   * The contact's first name.
   */
  first_name?: string;

  /**
   * The contact's last name.
   */
  last_name?: string;
}
