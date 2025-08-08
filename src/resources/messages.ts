// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Sends a Message.
   *
   * @example
   * ```ts
   * const message = await client.messages.create(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   *   { conversation: {} },
   * );
   * ```
   */
  create(
    accountID: string,
    body: MessageCreateParams,
    options?: RequestOptions,
  ): APIPromise<MessageCreateResponse> {
    return this._client.post(path`/accounts/${accountID}/messages`, { body, ...options });
  }
}

/**
 * Response schema for single message
 */
export interface MessageCreateResponse {
  /**
   * Unique identifier for the object.
   */
  id?: string;

  attachments?: Array<MessageCreateResponse.Attachment>;

  /**
   * The message body.
   */
  body?: string;

  /**
   * A conversation with a Contact
   */
  conversation?: MessageCreateResponse.Conversation;
}

export namespace MessageCreateResponse {
  /**
   * Response schema for single attachment
   */
  export interface Attachment {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * The type of attachment.
     */
    type?: string;

    /**
     * The URL of the attachment.
     */
    url?: string;
  }

  /**
   * A conversation with a Contact
   */
  export interface Conversation {
    /**
     * Unique identifier for the object.
     */
    id: string;

    /**
     * A contact who has consented to receive messages
     */
    contact: Shared.Contact;
  }
}

export interface MessageCreateParams {
  /**
   * Params for selecting or creating a new conversation. Either the id or the
   * Contact must be given.
   */
  conversation: MessageCreateParams.Conversation;

  attachments?: Array<Shared.AttachmentParams>;

  /**
   * The message body.
   */
  body?: string;
}

export namespace MessageCreateParams {
  /**
   * Params for selecting or creating a new conversation. Either the id or the
   * Contact must be given.
   */
  export interface Conversation {
    /**
     * Unique identifier for the object.
     */
    id?: string;

    /**
     * Params for selecting or creating a new contact for sending a message. Either the
     * id or the phone number must be given.
     */
    contact?: Conversation.Contact;
  }

  export namespace Conversation {
    /**
     * Params for selecting or creating a new contact for sending a message. Either the
     * id or the phone number must be given.
     */
    export interface Contact {
      /**
       * The unique identifier for an existing contact.
       */
      id?: string;

      /**
       * The contact's first name in case a new contact is created.
       */
      first_name?: string;

      /**
       * The message's last name in case a new contact is created.
       */
      last_name?: string;

      /**
       * The contact's phone number in E.164 format.
       */
      phone_number?: string;
    }
  }
}

export declare namespace Messages {
  export {
    type MessageCreateResponse as MessageCreateResponse,
    type MessageCreateParams as MessageCreateParams,
  };
}
