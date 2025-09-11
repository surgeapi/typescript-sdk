// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as ContactsAPI from './contacts';
import * as PhoneNumbersAPI from './phone-numbers';
import { Webhook } from 'standardwebhooks';

export class Webhooks extends APIResource {
  unwrap(
    body: string,
    { headers, key }: { headers: Record<string, string>; key?: string },
  ): UnwrapWebhookEvent {
    if (headers !== undefined) {
      const keyStr: string | null = key === undefined ? this._client.webhookSigningSecret : key;
      if (keyStr === null) throw new Error('Webhook key must not be null in order to unwrap');
      const wh = new Webhook(keyStr);
      wh.verify(body, headers);
    }
    return JSON.parse(body) as UnwrapWebhookEvent;
  }
}

/**
 * The `call.ended` event is delivered whenever a call is completed between a Surge
 * number you own and another phone number.
 */
export interface CallEndedWebhookEvent {
  /**
   * The ID of the account in which this event occurred
   */
  account_id: string;

  /**
   * The data associated with the event
   */
  data: CallEndedWebhookEvent.Data;

  /**
   * The type of the event. Always `call.ended` for this event.
   */
  type: 'call.ended';
}

export namespace CallEndedWebhookEvent {
  /**
   * The data associated with the event
   */
  export interface Data {
    /**
     * The unique identifier for the call
     */
    id: string;

    /**
     * A contact who has consented to receive messages
     */
    contact: ContactsAPI.Contact;

    /**
     * The duration of the call in seconds
     */
    duration: number;

    /**
     * When the call was initiated
     */
    initiated_at: string;

    /**
     * The status of the call
     */
    status:
      | 'busy'
      | 'canceled'
      | 'completed'
      | 'failed'
      | 'in_progress'
      | 'missed'
      | 'no_answer'
      | 'queued'
      | 'ringing';
  }
}

/**
 * The `campaign.approved` event is delivered whenever a campaign is approved by
 * all of the US carriers and able to start sending text messages.
 */
export interface CampaignApprovedWebhookEvent {
  /**
   * The ID of the account in which this event occurred
   */
  account_id: string;

  /**
   * The data associated with the event
   */
  data: CampaignApprovedWebhookEvent.Data;

  /**
   * The type of the event. Always `campaign.approved` for this event.
   */
  type: 'campaign.approved';
}

export namespace CampaignApprovedWebhookEvent {
  /**
   * The data associated with the event
   */
  export interface Data {
    /**
     * The unique identifier for the campaign
     */
    id: string;

    /**
     * The status of the campaign. Will always be `active` for this event.
     */
    status: 'active';
  }
}

/**
 * The `conversation.created` event is delivered whenever a new conversation is
 * started with a contact. This could be when either the contact sends a message to
 * your Surge number or when you create a conversation, whether by sending an
 * initial message to the contact or by manually creating the conversation using
 * the API.
 */
export interface ConversationCreatedWebhookEvent {
  /**
   * The ID of the account in which this event occurred
   */
  account_id: string;

  /**
   * The data associated with the event
   */
  data: ConversationCreatedWebhookEvent.Data;

  /**
   * The type of the event. Always `conversation.created` for this event.
   */
  type: 'conversation.created';
}

export namespace ConversationCreatedWebhookEvent {
  /**
   * The data associated with the event
   */
  export interface Data {
    /**
     * The unique identifier for the conversation
     */
    id: string;

    /**
     * A contact who has consented to receive messages
     */
    contact: ContactsAPI.Contact;

    /**
     * A phone number that can be used to send and receive messages and calls
     */
    phone_number: PhoneNumbersAPI.PhoneNumber;
  }
}

/**
 * The `message.delivered` event is delivered whenever a message sent from a Surge
 * number is successfully delivered to the recipient. When the message is sent from
 * a short code or toll-free number, this means that the message arrived on the
 * recipient's device. When sent from a local number, this means that the message
 * was successfully handed off to the recipient's mobile carrier, but does not
 * guarantee that it arrived on the recipient's device.
 */
export interface MessageDeliveredWebhookEvent {
  /**
   * The ID of the account in which this event occurred
   */
  account_id: string;

  /**
   * The data associated with the event
   */
  data: MessageDeliveredWebhookEvent.Data;

  /**
   * The type of the event. Always `message.delivered` for this event.
   */
  type: 'message.delivered';
}

export namespace MessageDeliveredWebhookEvent {
  /**
   * The data associated with the event
   */
  export interface Data {
    /**
     * The unique identifier for the message
     */
    id: string;

    /**
     * The content of the message
     */
    body: string;

    /**
     * The conversation this message belongs to
     */
    conversation: Data.Conversation;

    /**
     * When the message was delivered
     */
    delivered_at: string;

    /**
     * Attachments included with the message
     */
    attachments?: Array<Data.Attachment>;
  }

  export namespace Data {
    /**
     * The conversation this message belongs to
     */
    export interface Conversation {
      /**
       * The unique identifier for the conversation
       */
      id: string;

      /**
       * A contact who has consented to receive messages
       */
      contact: ContactsAPI.Contact;

      /**
       * A phone number that can be used to send and receive messages and calls
       */
      phone_number: PhoneNumbersAPI.PhoneNumber;
    }

    export interface Attachment {
      /**
       * The unique identifier for the attachment
       */
      id: string;

      /**
       * The type of attachment
       */
      type: 'file' | 'image' | 'link' | 'video';

      /**
       * The URL where the attachment can be downloaded
       */
      url: string;
    }
  }
}

/**
 * The `message.failed` event is delivered whenever a message sent from your Surge
 * number fails to be delivered.
 */
export interface MessageFailedWebhookEvent {
  /**
   * The ID of the account in which this event occurred
   */
  account_id: string;

  /**
   * The data associated with the event
   */
  data: MessageFailedWebhookEvent.Data;

  /**
   * The type of the event. Always `message.failed` for this event.
   */
  type: 'message.failed';
}

export namespace MessageFailedWebhookEvent {
  /**
   * The data associated with the event
   */
  export interface Data {
    /**
     * The unique identifier for the message
     */
    id: string;

    /**
     * The content of the message
     */
    body: string;

    /**
     * The conversation this message belongs to
     */
    conversation: Data.Conversation;

    /**
     * When the message failed
     */
    failed_at: string;

    /**
     * The reason the message failed to be delivered
     */
    failure_reason: string;

    /**
     * Attachments included with the message
     */
    attachments?: Array<Data.Attachment>;
  }

  export namespace Data {
    /**
     * The conversation this message belongs to
     */
    export interface Conversation {
      /**
       * The unique identifier for the conversation
       */
      id: string;

      /**
       * A contact who has consented to receive messages
       */
      contact: ContactsAPI.Contact;

      /**
       * A phone number that can be used to send and receive messages and calls
       */
      phone_number: PhoneNumbersAPI.PhoneNumber;
    }

    export interface Attachment {
      /**
       * The unique identifier for the attachment
       */
      id: string;

      /**
       * The type of attachment
       */
      type: 'file' | 'image' | 'link' | 'video';

      /**
       * The URL to download the attachment
       */
      url: string;
    }
  }
}

/**
 * The `message.received` event is delivered whenever a message is received at a
 * Surge number from a contact.
 */
export interface MessageReceivedWebhookEvent {
  /**
   * The ID of the account in which this event occurred
   */
  account_id: string;

  /**
   * The data associated with the event
   */
  data: MessageReceivedWebhookEvent.Data;

  /**
   * The type of the event. Always `message.received` for this event.
   */
  type: 'message.received';
}

export namespace MessageReceivedWebhookEvent {
  /**
   * The data associated with the event
   */
  export interface Data {
    /**
     * The unique identifier for the message
     */
    id: string;

    /**
     * The content of the message
     */
    body: string;

    /**
     * The conversation this message belongs to
     */
    conversation: Data.Conversation;

    /**
     * When the message was received
     */
    received_at: string;

    /**
     * Attachments included with the message
     */
    attachments?: Array<Data.Attachment>;
  }

  export namespace Data {
    /**
     * The conversation this message belongs to
     */
    export interface Conversation {
      /**
       * The unique identifier for the conversation
       */
      id: string;

      /**
       * A contact who has consented to receive messages
       */
      contact: ContactsAPI.Contact;

      /**
       * A phone number that can be used to send and receive messages and calls
       */
      phone_number: PhoneNumbersAPI.PhoneNumber;
    }

    export interface Attachment {
      /**
       * The unique identifier for the attachment
       */
      id: string;

      /**
       * The type of attachment
       */
      type: 'file' | 'image' | 'link' | 'video';

      /**
       * The URL to download the attachment
       */
      url: string;
    }
  }
}

/**
 * The `message.sent` event is delivered whenever a message is sent from a Surge
 * number to a contact.
 */
export interface MessageSentWebhookEvent {
  /**
   * The ID of the account in which this event occurred
   */
  account_id: string;

  /**
   * The data associated with the event
   */
  data: MessageSentWebhookEvent.Data;

  /**
   * The type of the event. Always `message.sent` for this event.
   */
  type: 'message.sent';
}

export namespace MessageSentWebhookEvent {
  /**
   * The data associated with the event
   */
  export interface Data {
    /**
     * The unique identifier for the message
     */
    id: string;

    /**
     * The content of the message
     */
    body: string;

    /**
     * The conversation this message belongs to
     */
    conversation: Data.Conversation;

    /**
     * When the message was sent
     */
    sent_at: string;

    /**
     * Attachments included with the message
     */
    attachments?: Array<Data.Attachment>;
  }

  export namespace Data {
    /**
     * The conversation this message belongs to
     */
    export interface Conversation {
      /**
       * The unique identifier for the conversation
       */
      id: string;

      /**
       * A contact who has consented to receive messages
       */
      contact: ContactsAPI.Contact;

      /**
       * A phone number that can be used to send and receive messages and calls
       */
      phone_number: PhoneNumbersAPI.PhoneNumber;
    }

    export interface Attachment {
      /**
       * The unique identifier for the attachment
       */
      id: string;

      /**
       * The type of attachment
       */
      type: 'file' | 'image' | 'link' | 'video';

      /**
       * The URL to download the attachment
       */
      url: string;
    }
  }
}

/**
 * The `call.ended` event is delivered whenever a call is completed between a Surge
 * number you own and another phone number.
 */
export type UnwrapWebhookEvent =
  | CallEndedWebhookEvent
  | CampaignApprovedWebhookEvent
  | ConversationCreatedWebhookEvent
  | MessageDeliveredWebhookEvent
  | MessageFailedWebhookEvent
  | MessageReceivedWebhookEvent
  | MessageSentWebhookEvent;

export declare namespace Webhooks {
  export {
    type CallEndedWebhookEvent as CallEndedWebhookEvent,
    type CampaignApprovedWebhookEvent as CampaignApprovedWebhookEvent,
    type ConversationCreatedWebhookEvent as ConversationCreatedWebhookEvent,
    type MessageDeliveredWebhookEvent as MessageDeliveredWebhookEvent,
    type MessageFailedWebhookEvent as MessageFailedWebhookEvent,
    type MessageReceivedWebhookEvent as MessageReceivedWebhookEvent,
    type MessageSentWebhookEvent as MessageSentWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };
}
