// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as Shared from './shared';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Messages extends APIResource {
  /**
   * Creates and enqueues a new message to be sent.
   *
   * Messages are always sent asynchronously. When you hit this endpoint, the message
   * will be created within Surge's system and enqueued for sending, and then the id
   * for the new message will be returned. When the message is actually sent, a
   * `message.sent` webhook event will be triggered and sent to any webhook endpoints
   * that you have subscribed to this event type. Then a `message.delivered` webhook
   * event will be triggered when the carrier sends us a delivery receipt.
   *
   * By default all messages will be sent immediately. If you would like to schedule
   * sending for some time up to 60 days in the future, you can do that by providing
   * a value for the `send_at` field. This should be formatted as an ISO8601 datetime
   * like `2028-10-14T18:06:00Z`.
   *
   * You must include either a `body` or `attachments` field (or both) in the request
   * body. The `body` field should contain the text of the message you want to send,
   * and the `attachments` field should be an array of objects with a `url` field
   * pointing to the file you want to attach. Surge will download these files and
   * send them as attachments in the message.
   *
   * You can provide either a `conversation` object or a `to` field to specify the
   * intended recipient of the message, but an error will be returned if both fields
   * are provided. Similarly the `from` field cannot be used together with the
   * `conversation` field, and `conversation.phone_number` should be specified
   * instead.
   *
   * @example
   * ```ts
   * const message = await client.messages.create(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   *   {
   *     conversation: {
   *       contact: { phone_number: '+18015551234' },
   *     },
   *   },
   * );
   * ```
   */
  create(accountID: string, body: MessageCreateParams, options?: RequestOptions): APIPromise<Message> {
    return this._client.post(path`/accounts/${accountID}/messages`, { body, ...options });
  }
}

/**
 * A Message is a communication sent to a Contact.
 */
export interface Message {
  /**
   * Unique identifier for the object.
   */
  id?: string;

  attachments?: Array<Message.Attachment>;

  /**
   * The message body.
   */
  body?: string;

  /**
   * A conversation with a Contact
   */
  conversation?: Message.Conversation;
}

export namespace Message {
  /**
   * An Attachment is a file that can be sent with a message.
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

    /**
     * This is the phone number tied to the Surge account.
     */
    phone_number?: Conversation.PhoneNumber;
  }

  export namespace Conversation {
    /**
     * This is the phone number tied to the Surge account.
     */
    export interface PhoneNumber {
      /**
       * Unique identifier for the phone number
       */
      id: string;

      /**
       * The canonical format of the phone number.
       */
      number: string;

      /**
       * Whether the phone number is local, toll-free, or short code
       */
      type: 'local' | 'toll_free' | 'short_code' | 'demo';
    }
  }
}

/**
 * Payload for creating a message. Either an attachment or the body must be given.
 * You can specify the recipient either using the 'conversation' parameter or the
 * 'to'/'from' parameters, but not both.
 */
export type MessageParams = MessageParams.MessageParamsWithConversation | MessageParams.SimpleMessageParams;

export namespace MessageParams {
  /**
   * Create a message while including parameters for the conversation in which the
   * message should be sent.
   */
  export interface MessageParamsWithConversation {
    /**
     * Params for selecting or creating a new conversation. Either the id or the
     * Contact must be given.
     */
    conversation: MessageParamsWithConversation.Conversation;

    attachments?: Array<Shared.AttachmentParams>;

    /**
     * The message body.
     */
    body?: string;

    /**
     * An optional datetime for scheduling message up to a couple of months in the
     * future.
     */
    send_at?: string;
  }

  export namespace MessageParamsWithConversation {
    /**
     * Params for selecting or creating a new conversation. Either the id or the
     * Contact must be given.
     */
    export interface Conversation {
      /**
       * Parameters for creating a contact
       */
      contact: Shared.ContactParams;

      /**
       * The phone number from which to send the message. This can be either the phone
       * number in E.164 format or a Surge phone number id.
       */
      phone_number?: string;
    }
  }

  /**
   * Create a basic message by specifying just the to/from phone numbers.
   */
  export interface SimpleMessageParams {
    /**
     * The recipient's phone number in E.164 format. Cannot be used together with
     * 'conversation'.
     */
    to: string;

    attachments?: Array<Shared.AttachmentParams>;

    /**
     * The message body.
     */
    body?: string;

    /**
     * The sender's phone number in E.164 format or phone number ID. If omitted, uses
     * the account's default phone number. Cannot be used together with 'conversation'.
     */
    from?: string;

    /**
     * An optional datetime for scheduling message up to a couple of months in the
     * future.
     */
    send_at?: string;
  }
}

export type MessageCreateParams =
  | MessageCreateParams.MessageParamsWithConversation
  | MessageCreateParams.SimpleMessageParams;

export declare namespace MessageCreateParams {
  export interface MessageParamsWithConversation {
    /**
     * Params for selecting or creating a new conversation. Either the id or the
     * Contact must be given.
     */
    conversation: MessageParamsWithConversation.Conversation;

    attachments?: Array<Shared.AttachmentParams>;

    /**
     * The message body.
     */
    body?: string;

    /**
     * An optional datetime for scheduling message up to a couple of months in the
     * future.
     */
    send_at?: string;
  }

  export namespace MessageParamsWithConversation {
    /**
     * Params for selecting or creating a new conversation. Either the id or the
     * Contact must be given.
     */
    export interface Conversation {
      /**
       * Parameters for creating a contact
       */
      contact: Shared.ContactParams;

      /**
       * The phone number from which to send the message. This can be either the phone
       * number in E.164 format or a Surge phone number id.
       */
      phone_number?: string;
    }
  }

  export interface SimpleMessageParams {
    /**
     * The recipient's phone number in E.164 format. Cannot be used together with
     * 'conversation'.
     */
    to: string;

    attachments?: Array<Shared.AttachmentParams>;

    /**
     * The message body.
     */
    body?: string;

    /**
     * The sender's phone number in E.164 format or phone number ID. If omitted, uses
     * the account's default phone number. Cannot be used together with 'conversation'.
     */
    from?: string;

    /**
     * An optional datetime for scheduling message up to a couple of months in the
     * future.
     */
    send_at?: string;
  }
}

export declare namespace Messages {
  export {
    type Message as Message,
    type MessageParams as MessageParams,
    type MessageCreateParams as MessageCreateParams,
  };
}
