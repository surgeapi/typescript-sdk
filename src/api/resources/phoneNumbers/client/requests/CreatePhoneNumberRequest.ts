/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Surge from "../../../../index";

/**
 * @example
 *     {
 *         area_code: "801",
 *         type: "local"
 *     }
 */
export interface CreatePhoneNumberRequest {
    /** The desired area code for this phone number. */
    area_code?: string;
    /** Whether the phone number is local or toll-free */
    type: Surge.CreatePhoneNumberRequestType;
}
