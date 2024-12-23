/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Contacts } from "./api/resources/contacts/client/Client";
import { Messages } from "./api/resources/messages/client/Client";
import { Users } from "./api/resources/users/client/Client";
import { Verifications } from "./api/resources/verifications/client/Client";

export declare namespace SplititClient {
    interface Options {
        environment?: core.Supplier<environments.SplititEnvironment | string>;
        token: core.Supplier<core.BearerToken>;
        /** Override the Surge-Account header */
        surgeAccount?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the Surge-Account header */
        surgeAccount?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class SplititClient {
    constructor(protected readonly _options: SplititClient.Options) {}

    protected _contacts: Contacts | undefined;

    public get contacts(): Contacts {
        return (this._contacts ??= new Contacts(this._options));
    }

    protected _messages: Messages | undefined;

    public get messages(): Messages {
        return (this._messages ??= new Messages(this._options));
    }

    protected _users: Users | undefined;

    public get users(): Users {
        return (this._users ??= new Users(this._options));
    }

    protected _verifications: Verifications | undefined;

    public get verifications(): Verifications {
        return (this._verifications ??= new Verifications(this._options));
    }
}
