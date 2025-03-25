/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as Surge from "../index";

export class ConflictError extends errors.SurgeError {
    constructor(body: Surge.VerificationCheckAlreadyVerifiedResponse) {
        super({
            message: "ConflictError",
            statusCode: 409,
            body: body,
        });
        Object.setPrototypeOf(this, ConflictError.prototype);
    }
}
