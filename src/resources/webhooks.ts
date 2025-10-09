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
   * The timestamp when this event occurred, in ISO8601 format
   */
  timestamp: string;

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
   * The timestamp when this event occurred, in ISO8601 format
   */
  timestamp: string;

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

export interface ContactOptedInWebhookEvent {
  /**
   * The ID of the account in which this event occurred
   */
  account_id: string;

  /**
   * The data associated with the event
   */
  data: ContactOptedInWebhookEvent.Data;

  /**
   * The timestamp when this event occurred, in ISO8601 format
   */
  timestamp: string;

  /**
   * The type of the event. Always `contact.opted_in` for this event.
   */
  type: 'contact.opted_in';
}

export namespace ContactOptedInWebhookEvent {
  /**
   * The data associated with the event
   */
  export interface Data {
    /**
     * The unique identifier for the contact
     */
    id: string;
  }
}

export interface ContactOptedOutWebhookEvent {
  /**
   * The ID of the account in which this event occurred
   */
  account_id: string;

  /**
   * The data associated with the event
   */
  data: ContactOptedOutWebhookEvent.Data;

  /**
   * The timestamp when this event occurred, in ISO8601 format
   */
  timestamp: string;

  /**
   * The type of the event. Always `contact.opted_out` for this event.
   */
  type: 'contact.opted_out';
}

export namespace ContactOptedOutWebhookEvent {
  /**
   * The data associated with the event
   */
  export interface Data {
    /**
     * The unique identifier for the contact
     */
    id: string;
  }
}

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
   * The timestamp when this event occurred, in ISO8601 format
   */
  timestamp: string;

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
   * The timestamp when this event occurred, in ISO8601 format
   */
  timestamp: string;

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
   * The timestamp when this event occurred, in ISO8601 format
   */
  timestamp: string;

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
   * The timestamp when this event occurred, in ISO8601 format
   */
  timestamp: string;

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
   * The timestamp when this event occurred, in ISO8601 format
   */
  timestamp: string;

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

export type UnwrapWebhookEvent =
  | CallEndedWebhookEvent
  | CampaignApprovedWebhookEvent
  | ContactOptedInWebhookEvent
  | ContactOptedOutWebhookEvent
  | ConversationCreatedWebhookEvent
  | MessageDeliveredWebhookEvent
  | MessageFailedWebhookEvent
  | MessageReceivedWebhookEvent
  | MessageSentWebhookEvent;

export declare namespace Webhooks {
  export {
    type CallEndedWebhookEvent as CallEndedWebhookEvent,
    type CampaignApprovedWebhookEvent as CampaignApprovedWebhookEvent,
    type ContactOptedInWebhookEvent as ContactOptedInWebhookEvent,
    type ContactOptedOutWebhookEvent as ContactOptedOutWebhookEvent,
    type ConversationCreatedWebhookEvent as ConversationCreatedWebhookEvent,
    type MessageDeliveredWebhookEvent as MessageDeliveredWebhookEvent,
    type MessageFailedWebhookEvent as MessageFailedWebhookEvent,
    type MessageReceivedWebhookEvent as MessageReceivedWebhookEvent,
    type MessageSentWebhookEvent as MessageSentWebhookEvent,
    type UnwrapWebhookEvent as UnwrapWebhookEvent,
  };
}
