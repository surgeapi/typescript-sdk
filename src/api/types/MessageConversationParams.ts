/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Splitit from "../index";

/**
 * Params for selecting or creating a new conversation. Either the id or the Contact must be given.
 */
export interface MessageConversationParams {
    contact?: Splitit.MessageConversationContactParams;
    /** Unique identifier for the object. */
    id?: string;
}
