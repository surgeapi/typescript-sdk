/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Params for selecting or creating a new contact for sending a message. Either the id or the phone number must be given.
 */
export interface MessageConversationContactParams {
    /** The contact's first name in case a new contact is created. */
    first_name?: string;
    /** The message's last name in case a new contact is created. */
    last_name?: string;
    /** The contact's phone number in E.164 format. */
    phone_number?: string;
}
