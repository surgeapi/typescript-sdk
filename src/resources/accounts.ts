// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Accounts extends APIResource {
  /**
   * Creates a new Account within the calling Platform.
   *
   * @example
   * ```ts
   * const accountResponse = await client.accounts.create({
   *   name: 'Account #2840 - DT Precision Auto',
   * });
   * ```
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<AccountResponse> {
    return this._client.post('/accounts', { body, ...options });
  }

  /**
   * Updates an Account
   *
   * @example
   * ```ts
   * const accountResponse = await client.accounts.update(
   *   'acct_01jpqjvfg9enpt7pyxd60pcmxj',
   * );
   * ```
   */
  update(id: string, body: AccountUpdateParams, options?: RequestOptions): APIPromise<AccountResponse> {
    return this._client.patch(path`/accounts/${id}`, { body, ...options });
  }

  /**
   * Sends a Blast.
   *
   * @example
   * ```ts
   * const response = await client.accounts.blasts(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   * );
   * ```
   */
  blasts(
    accountID: string,
    body: AccountBlastsParams,
    options?: RequestOptions,
  ): APIPromise<AccountBlastsResponse> {
    return this._client.post(path`/accounts/${accountID}/blasts`, { body, ...options });
  }

  /**
   * Creates a campaign to register account to send text messages.
   *
   * @example
   * ```ts
   * const response = await client.accounts.campaigns(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   *   {
   *     consent_flow:
   *       'When customers bring in their car for service, they will fill out this web form for intake: https://fastauto.shop/bp108c In it they can choose to opt in to text message notifications. If they choose to opt in, we will send them notifications to let them know if our mechanics find issues and once the car is ready to go, as well as links to invoices and to leave us feedback.',
   *     description:
   *       'This phone number will send auto maintenance notifications to end users that have opted in. It will also be used for responding to customer inquiries and sending some marketing offers.',
   *     message_samples: [
   *       'You are now opted in to receive repair notifications from DT Precision Auto. Frequency varies. Msg&data rates apply. Reply STOP to opt out.',
   *       "You're lucky that hundred shot of NOS didn't blow the welds on the intake!",
   *       'Your car is ready to go. See your invoice here: https://l.fastauto.shop/s034ij',
   *     ],
   *     privacy_policy_url: 'https://fastauto.shop/sms-privacy',
   *     use_cases: [
   *       'account_notification',
   *       'customer_care',
   *       'marketing',
   *     ],
   *     volume: 'high',
   *   },
   * );
   * ```
   */
  campaigns(
    accountID: string,
    body: AccountCampaignsParams,
    options?: RequestOptions,
  ): APIPromise<AccountCampaignsResponse> {
    return this._client.post(path`/accounts/${accountID}/campaigns`, { body, ...options });
  }

  /**
   * Creates a new Contact object.
   *
   * @example
   * ```ts
   * const contactResponse = await client.accounts.contacts(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   *   { phone_number: '+18015551234' },
   * );
   * ```
   */
  contacts(
    accountID: string,
    body: AccountContactsParams,
    options?: RequestOptions,
  ): APIPromise<ContactResponse> {
    return this._client.post(path`/accounts/${accountID}/contacts`, { body, ...options });
  }

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
   * const response = await client.accounts.messages(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   *   { conversation: { contact: {} } },
   * );
   * ```
   */
  messages(
    accountID: string,
    body: AccountMessagesParams,
    options?: RequestOptions,
  ): APIPromise<AccountMessagesResponse> {
    return this._client.post(path`/accounts/${accountID}/messages`, { body, ...options });
  }

  /**
   * Create a new phone number for the account.
   *
   * @example
   * ```ts
   * const response = await client.accounts.phoneNumbers(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   *   { type: 'local' },
   * );
   * ```
   */
  phoneNumbers(
    accountID: string,
    body: AccountPhoneNumbersParams,
    options?: RequestOptions,
  ): APIPromise<AccountPhoneNumbersResponse> {
    return this._client.post(path`/accounts/${accountID}/phone_numbers`, { body, ...options });
  }

  /**
   * Check an account's status and capabilities
   *
   * @example
   * ```ts
   * const response = await client.accounts.retrieveStatus(
   *   'acct_01jpqjvfg9enpt7pyxd60pcmxj',
   * );
   * ```
   */
  retrieveStatus(
    accountID: string,
    query: AccountRetrieveStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountRetrieveStatusResponse> {
    return this._client.get(path`/accounts/${accountID}/status`, { query, ...options });
  }

  /**
   * Creates a new User object.
   *
   * @example
   * ```ts
   * const userResponse = await client.accounts.users(
   *   'acct_01j9a43avnfqzbjfch6pygv1td',
   *   { first_name: 'Brian' },
   * );
   * ```
   */
  users(accountID: string, body: AccountUsersParams, options?: RequestOptions): APIPromise<UserResponse> {
    return this._client.post(path`/accounts/${accountID}/users`, { body, ...options });
  }
}

/**
 * Response containing account information
 */
export interface AccountResponse {
  /**
   * The account ID
   */
  id: string;

  /**
   * The name by which the people this account communicates with know it. If not
   * provided, this will match the name field.
   */
  brand_name: string | null;

  /**
   * The name of the account that will be visible for your internal organizational
   * purposes. This will also be the default public-facing brand name unless you also
   * set a `brand_name`, but otherwise the account name will never be displayed
   * anywhere outside of Surge HQ, and may include your ID for the account or
   * anything else that may help you.
   */
  name: string;

  /**
   * The legal entity on whose behalf the account will be operated.
   */
  organization: AccountResponse.Organization;

  /**
   * This is the time zone in which the account is headquartered. This time zone may
   * be used for compliance with TCPA restrictions on when messages may be sent.
   */
  time_zone: string | null;
}

export namespace AccountResponse {
  /**
   * The legal entity on whose behalf the account will be operated.
   */
  export interface Organization {
    /**
     * The address of the organization's headquarters.
     */
    address: Organization.Address;

    /**
     * An object representing an individual who can be contacted if the carriers have
     * any questions about the business.
     */
    contact: Organization.Contact;

    /**
     * The two character ISO 3166 country code for the country in which the
     * organization is headquartered.
     */
    country: string | null;

    /**
     * For publicly traded companies, an email for a representative of the company to
     * whom a verification email will be sent. This must be an email on the same domain
     * as the company's website (e.g. with a website domain of
     * `https://dtprecisionauto.com`, the email must use the same
     * `@dtprecisionauto.com`)
     */
    email: string | null;

    /**
     * The value of the identifier whose type is specified in the identifier_type
     * field. Typically this will be an EIN, and can be formatted with or without the
     * hyphen.
     */
    identifier: string | null;

    /**
     * The type of identifier being provided for the organization. Support for more
     * values will be added in the future.
     */
    identifier_type: 'ein' | null;

    /**
     * The industry in which the organization operates.
     */
    industry:
      | 'agriculture'
      | 'automotive'
      | 'banking'
      | 'construction'
      | 'consumer'
      | 'education'
      | 'electronics'
      | 'energy'
      | 'engineering'
      | 'fast_moving_consumer_goods'
      | 'financial'
      | 'fintech'
      | 'food_and_beverage'
      | 'government'
      | 'healthcare'
      | 'hospitality'
      | 'insurance'
      | 'jewelry'
      | 'legal'
      | 'manufacturing'
      | 'media'
      | 'not_for_profit'
      | 'oil_and_gas'
      | 'online'
      | 'professional_services'
      | 'raw_materials'
      | 'real_estate'
      | 'religion'
      | 'retail'
      | 'technology'
      | 'telecommunications'
      | 'transportation'
      | 'travel'
      | null;

    /**
     * For sole proprietors, this must be a valid US mobile phone number to which a
     * verification text message will be sent. (E.164 format)
     */
    mobile_number: string | null;

    /**
     * An array of regions in which the organization operates.
     */
    regions_of_operation: Array<
      'africa' | 'asia' | 'australia' | 'europe' | 'latin_america' | 'usa_and_canada'
    > | null;

    /**
     * The legal name of the organization as registered with the IRS or other relevant
     * authorities. For some applications, this will be matched against government
     * records and should include all punctuation and everything else as well.
     */
    registered_name: string | null;

    /**
     * For publicly traded companies, this is the exchange on which the company's stock
     * is traded.
     */
    stock_exchange:
      | 'amex'
      | 'amx'
      | 'asx'
      | 'b3'
      | 'bme'
      | 'bse'
      | 'fra'
      | 'icex'
      | 'jpx'
      | 'jse'
      | 'krx'
      | 'lon'
      | 'nasdaq'
      | 'none'
      | 'nyse'
      | 'nse'
      | 'omx'
      | 'other'
      | 'sehk'
      | 'sgx'
      | 'sse'
      | 'sto'
      | 'swx'
      | 'szse'
      | 'tsx'
      | 'twse'
      | 'vse'
      | null;

    /**
     * For publicly traded companies, the ticker symbol for the company's stock
     */
    stock_symbol: string | null;

    /**
     * The type of organization
     */
    type:
      | 'co_op'
      | 'government'
      | 'llc'
      | 'non_profit'
      | 'partnership'
      | 'private_corporation'
      | 'public_corporation'
      | 'sole_proprietor'
      | null;

    /**
     * The URL of the website for this organization. The website should be publicly
     * available, clearly reflect the organization's purpose, and the URL should start
     * with `https://`
     */
    website: string | null;
  }

  export namespace Organization {
    /**
     * The address of the organization's headquarters.
     */
    export interface Address {
      /**
       * The two character ISO 3166 country code. If none is provided, the organization's
       * country code will be used.
       */
      country: string | null;

      /**
       * The first line of the address, typically the number and street name
       */
      line1: string | null;

      /**
       * The second line of the address if needed, typically an apartment or suite number
       */
      line2: string | null;

      /**
       * The city or locality
       */
      locality: string | null;

      /**
       * The name to which any mail should be addressed. If none is provided, this will
       * default to the organization's registered_name
       */
      name: string | null;

      /**
       * The postal code
       */
      postal_code: string | null;

      /**
       * The state or region
       */
      region: string | null;
    }

    /**
     * An object representing an individual who can be contacted if the carriers have
     * any questions about the business.
     */
    export interface Contact {
      /**
       * An email address at which the individual can be reached. Typically an email
       * using the same domain name as the website URL will be preferred (e.g. with a
       * website domain of `https://dtprecisionauto.com`, an email like
       * `dom@dtprecisionauto.com` will be preferred over one like
       * `dom@anothergarage.com` or `dom.toretto@gmail.com`)
       */
      email: string | null;

      /**
       * The first name (or given name) of the individual
       */
      first_name: string | null;

      /**
       * The last name (or family name) of the individual
       */
      last_name: string | null;

      /**
       * A phone number at which the individual can be reached (E.164 format)
       */
      phone_number: string | null;

      /**
       * The job title of the individual.
       */
      title: 'ceo' | 'cfo' | 'director' | 'gm' | 'vp' | 'general_counsel' | 'other' | null;

      /**
       * If `other` is provided for the `title` field, this field should be used to
       * provide the title of the individual
       */
      title_other: string | null;
    }
  }
}

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
 * POST body for creating a contact
 */
export interface ContactRequest {
  /**
   * The contact's phone number in E.164 format.
   */
  phone_number: string;

  /**
   * The contact's email address.
   */
  email?: string;

  /**
   * The contact's first name.
   */
  first_name?: string;

  /**
   * The contact's last name.
   */
  last_name?: string;

  /**
   * Additional metadata about the contact.
   */
  metadata?: { [key: string]: unknown };
}

/**
 * Response schema for single contact
 */
export interface ContactResponse {
  /**
   * Unique identifier for the object.
   */
  id?: string;

  /**
   * The contact's email address.
   */
  email?: string;

  /**
   * The contact's first name.
   */
  first_name?: string;

  /**
   * The contact's last name.
   */
  last_name?: string;

  /**
   * Additional metadata about the contact.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The contact's phone number in E.164 format.
   */
  phone_number?: string;
}

/**
 * POST body for creating a user
 */
export interface UserRequest {
  /**
   * The user's first name.
   */
  first_name: string;

  /**
   * The user's last name.
   */
  last_name?: string;

  /**
   * Set of key-value pairs that will be stored with the user.
   */
  metadata?: unknown;

  /**
   * URL of a photo to be used as the user's avatar.
   */
  photo_url?: string;
}

/**
 * Response schema for single user
 */
export interface UserResponse {
  /**
   * Unique identifier for the object.
   */
  id?: string;

  /**
   * The user's first name.
   */
  first_name?: string;

  /**
   * The user's last name.
   */
  last_name?: string;

  /**
   * Set of key-value pairs that will be stored with the user.
   */
  metadata?: unknown;

  /**
   * URL of a photo to be used as the user's avatar.
   */
  photo_url?: string;
}

/**
 * Response schema for single blast
 */
export interface AccountBlastsResponse {
  /**
   * Unique identifier for the object.
   */
  id?: string;

  attachments?: Array<AccountBlastsResponse.Attachment>;

  /**
   * The message body.
   */
  body?: string;

  /**
   * Optional name for the blast.
   */
  name?: string;

  /**
   * When the blast will be or was sent.
   */
  send_at?: string;
}

export namespace AccountBlastsResponse {
  export interface Attachment {
    /**
     * The URL of the attachment.
     */
    url?: string;
  }
}

/**
 * A campaign represents the context in which one or more of your phone numbers
 * communicates with your contacts. Consent and opt-outs are tied to the campaign.
 */
export interface AccountCampaignsResponse {
  /**
   * The campaign ID
   */
  id: string;

  /**
   * A string explaining the method through which end users will opt in to receive
   * messages from the brand. Typically this should include URLs for opt-in forms or
   * screenshots that might be helpful in explaining the flow to someone unfamiliar
   * with the organization's purpose.
   */
  consent_flow: string;

  /**
   * An explanation of the organization's purpose and how it will be using text
   * messaging to accomplish that purpose.
   */
  description: string;

  /**
   * A list of properties that this campaign should include. These properties can be
   * any of the following values:
   *
   * - `links` - whether the campaign might send links in messages
   * - `phone_numbers` - whether the campaign might send phone numbers in messages
   * - `age_gated` - whether the campaign contains age gated content (controlled
   *   substances or adult content)
   * - `direct_lending` - whether the campaign contains content related to direct
   *   lending or other loan arrangements
   */
  includes: Array<'links' | 'phone_numbers' | 'age_gated' | 'direct_lending'>;

  /**
   * An array of 2-5 strings with examples of the messages that will be sent from
   * this campaign. Typically the first sample should be a compliance message like
   * `You are now opted in to messages from {brand name}. Frequency varies. Msg&data rates apply. Reply STOP to opt out.`
   * These samples don't necessarily need to be the only templates that will be used
   * for the campaign, but they should reflect the purpose of the messages that will
   * be sent. Any variable content can be reflected by wrapping it in square brackets
   * like `[customer name]`.
   */
  message_samples: Array<string>;

  /**
   * The URL of the privacy policy for the brand in question. This may be a shared
   * privacy policy if it's the policy that is displayed to end users when they opt
   * in to messaging.
   */
  privacy_policy_url: string;

  /**
   * A list containing 1-5 types of messages that will be sent with this campaign.
   *
   * The following use cases are typically available to all brands:
   *
   * - `account_notification` - For sending reminders, alerts, and general
   *   account-related notifications like booking confirmations or appointment
   *   reminders.
   * - `customer_care` - For account support, troubleshooting, and general customer
   *   service communication.
   * - `delivery_notification` - For notifying customers about the status of product
   *   or service deliveries.
   * - `fraud_alert` - For warning customers about suspicious or potentially
   *   fraudulent activity.
   * - `higher_education` - For messaging related to colleges, universities, and
   *   school districts outside of K–12.
   * - `marketing` - For promotional or advertising messages intended to market
   *   products or services.
   * - `polling_voting` - For conducting surveys, polls, or voting-related messaging.
   * - `public_service_announcement` - For raising awareness about social issues or
   *   important public information.
   * - `security_alert` - For alerts related to potential security breaches or
   *   compromised systems requiring user action.
   * - `two_factor_authentication` - For sending one-time passwords or verification
   *   codes for login or password reset.
   *
   * For access to special use cases not shown here, reach out to support@surge.app.
   */
  use_cases: Array<
    | 'account_notification'
    | 'customer_care'
    | 'delivery_notification'
    | 'fraud_alert'
    | 'higher_education'
    | 'marketing'
    | 'polling_voting'
    | 'public_service_announcement'
    | 'security_alert'
    | 'two_factor_authentication'
  >;

  /**
   * This will be one of the following:
   *
   * - `low` - The campaign will be allowed to send up to 2000 SMS segments to
   *   T-Mobile customers each day. In this case your platform will be charged for
   *   the setup fee for a low volume number upon receipt of the API request.
   * - `high` - The campaign will be allowed to send up to 200k SMS segments to
   *   T-Mobile customers each day, depending on the trust score assigned by The
   *   Campaign Registry. Your platform will be charged for the setup fee for a high
   *   volume number upon receipt of the API request, and phone numbers will be
   *   charged as high volume numbers going forward.
   */
  volume: 'high' | 'low';

  /**
   * A sample link that might be sent by this campaign. If links from other domains
   * are sent through this campaign, they are much more likely to be filtered by the
   * carriers. If link shortening is enabled for the account, the link shortener URL
   * will be used instead of what is provided. Reach out to support if you would like
   * to disable automatic link shortening.
   */
  link_sample?: string;

  /**
   * The URL of the terms and conditions presented to end users when they opt in to
   * messaging. These terms and conditions may be shared among all of a platform's
   * customers if they're the terms that are presented to end users when they opt in
   * to messaging.
   */
  terms_and_conditions_url?: string;
}

/**
 * Response schema for single message
 */
export interface AccountMessagesResponse {
  /**
   * Unique identifier for the object.
   */
  id?: string;

  attachments?: Array<AccountMessagesResponse.Attachment>;

  /**
   * The message body.
   */
  body?: string;

  /**
   * A conversation with a Contact
   */
  conversation?: AccountMessagesResponse.Conversation;
}

export namespace AccountMessagesResponse {
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
    contact: Conversation.Contact;

    /**
     * This is the phone number tied to the Surge account.
     */
    phone_number?: Conversation.PhoneNumber;
  }

  export namespace Conversation {
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
 * A phone number that can be used to send and receive messages and calls
 */
export interface AccountPhoneNumbersResponse {
  /**
   * Unique identifier for the phone number
   */
  id: string;

  /**
   * The phone number in E.164 format
   */
  number: string;

  /**
   * Whether the phone number is local, toll-free, or short code
   */
  type: 'local' | 'toll_free';
}

/**
 * Response containing account status information
 */
export interface AccountRetrieveStatusResponse {
  /**
   * An object where the fields are the capabilities passed in the `capabilities`
   * query param, as in `local_messaging`.
   */
  capabilities: { [key: string]: AccountRetrieveStatusResponse.Capabilities };
}

export namespace AccountRetrieveStatusResponse {
  export interface Capabilities {
    /**
     * A list of errors that will need corrected before capability is available to
     * account.
     */
    errors: Array<Capabilities.Error>;

    /**
     * A list of missing fields that are required for the capability. Nested field
     * names are dot-delimited, as in `organization.address.region`.
     */
    fields_needed: Array<string>;

    /**
     * Whether the account is ready for the capability, has errors that need corrected,
     * or is incomplete and requires missing data. If account has both missing and
     * invalid fields, `error` will be preferred over `incomplete`.
     */
    status: 'error' | 'incomplete' | 'ready';
  }

  export namespace Capabilities {
    export interface Error {
      /**
       * A dot-delimited string representing the field that has an error, as in
       * `organization.contact.phone_number`.
       */
      field: string;

      /**
       * A human-readable string explaining the error.
       */
      message: string;

      /**
       * A slug for the error type
       */
      type: string;
    }
  }
}

export interface AccountCreateParams {
  /**
   * The name of the account that will be visible for your internal organizational
   * purposes. This will also be the default public-facing brand name unless you also
   * set a `brand_name`, but otherwise the account name will never be displayed
   * anywhere outside of Surge HQ, and may include your ID for the account or
   * anything else that may help you.
   */
  name: string;

  /**
   * The name by which the people this account communicates with know it. If not
   * provided, this will match the name field.
   */
  brand_name?: string | null;

  /**
   * The legal entity on whose behalf the account will be operated.
   */
  organization?: AccountCreateParams.Organization;

  /**
   * This is the time zone in which the account is headquartered. This time zone may
   * be used for compliance with TCPA restrictions on when messages may be sent.
   */
  time_zone?: string;
}

export namespace AccountCreateParams {
  /**
   * The legal entity on whose behalf the account will be operated.
   */
  export interface Organization {
    /**
     * The address of the organization's headquarters.
     */
    address?: Organization.Address;

    /**
     * An object representing an individual who can be contacted if the carriers have
     * any questions about the business.
     */
    contact?: Organization.Contact | null;

    /**
     * The two character ISO 3166 country code for the country in which the
     * organization is headquartered.
     */
    country?: string | null;

    /**
     * For publicly traded companies, an email for a representative of the company to
     * whom a verification email will be sent. This must be an email on the same domain
     * as the company's website (e.g. with a website domain of
     * `https://dtprecisionauto.com`, the email must use the same
     * `@dtprecisionauto.com`)
     */
    email?: string | null;

    /**
     * The value of the identifier whose type is specified in the identifier_type
     * field. Typically this will be an EIN, and can be formatted with or without the
     * hyphen.
     */
    identifier?: string | null;

    /**
     * The type of identifier being provided for the organization. Support for more
     * values will be added in the future.
     */
    identifier_type?: 'ein' | null;

    /**
     * The industry in which the organization operates.
     */
    industry?:
      | 'agriculture'
      | 'automotive'
      | 'banking'
      | 'construction'
      | 'consumer'
      | 'education'
      | 'electronics'
      | 'energy'
      | 'engineering'
      | 'fast_moving_consumer_goods'
      | 'financial'
      | 'fintech'
      | 'food_and_beverage'
      | 'government'
      | 'healthcare'
      | 'hospitality'
      | 'insurance'
      | 'jewelry'
      | 'legal'
      | 'manufacturing'
      | 'media'
      | 'not_for_profit'
      | 'oil_and_gas'
      | 'online'
      | 'professional_services'
      | 'raw_materials'
      | 'real_estate'
      | 'religion'
      | 'retail'
      | 'technology'
      | 'telecommunications'
      | 'transportation'
      | 'travel'
      | null;

    /**
     * For sole proprietors, this must be a valid US mobile phone number to which a
     * verification text message will be sent. (E.164 format)
     */
    mobile_number?: string | null;

    /**
     * An array of regions in which the organization operates.
     */
    regions_of_operation?: Array<
      'africa' | 'asia' | 'australia' | 'europe' | 'latin_america' | 'usa_and_canada'
    > | null;

    /**
     * The legal name of the organization as registered with the IRS or other relevant
     * authorities. For some applications, this will be matched against government
     * records and should include all punctuation and everything else as well.
     */
    registered_name?: string | null;

    /**
     * For publicly traded companies, this is the exchange on which the company's stock
     * is traded.
     */
    stock_exchange?:
      | 'amex'
      | 'amx'
      | 'asx'
      | 'b3'
      | 'bme'
      | 'bse'
      | 'fra'
      | 'icex'
      | 'jpx'
      | 'jse'
      | 'krx'
      | 'lon'
      | 'nasdaq'
      | 'none'
      | 'nyse'
      | 'nse'
      | 'omx'
      | 'other'
      | 'sehk'
      | 'sgx'
      | 'sse'
      | 'sto'
      | 'swx'
      | 'szse'
      | 'tsx'
      | 'twse'
      | 'vse'
      | null;

    /**
     * For publicly traded companies, the ticker symbol for the company's stock
     */
    stock_symbol?: string | null;

    /**
     * The type of organization
     */
    type?:
      | 'co_op'
      | 'government'
      | 'llc'
      | 'non_profit'
      | 'partnership'
      | 'private_corporation'
      | 'public_corporation'
      | 'sole_proprietor'
      | null;

    /**
     * The URL of the website for this organization. The website should be publicly
     * available, clearly reflect the organization's purpose, and the URL should start
     * with `https://`
     */
    website?: string | null;
  }

  export namespace Organization {
    /**
     * The address of the organization's headquarters.
     */
    export interface Address {
      /**
       * The two character ISO 3166 country code. If none is provided, the organization's
       * country code will be used.
       */
      country?: string | null;

      /**
       * The first line of the address, typically the number and street name
       */
      line1?: string | null;

      /**
       * The second line of the address if needed, typically an apartment or suite number
       */
      line2?: string | null;

      /**
       * The city or locality
       */
      locality?: string | null;

      /**
       * The name to which any mail should be addressed. If none is provided, this will
       * default to the organization's registered_name
       */
      name?: string | null;

      /**
       * The postal code
       */
      postal_code?: string | null;

      /**
       * The state or region
       */
      region?: string | null;
    }

    /**
     * An object representing an individual who can be contacted if the carriers have
     * any questions about the business.
     */
    export interface Contact {
      /**
       * An email address at which the individual can be reached. Typically an email
       * using the same domain name as the website URL will be preferred (e.g. with a
       * website domain of `https://dtprecisionauto.com`, an email like
       * `dom@dtprecisionauto.com` will be preferred over one like
       * `dom@anothergarage.com` or `dom.toretto@gmail.com`)
       */
      email?: string | null;

      /**
       * The first name (or given name) of the individual
       */
      first_name?: string | null;

      /**
       * The last name (or family name) of the individual
       */
      last_name?: string | null;

      /**
       * A phone number at which the individual can be reached (E.164 format)
       */
      phone_number?: string | null;

      /**
       * The job title of the individual.
       */
      title?: 'ceo' | 'cfo' | 'director' | 'gm' | 'vp' | 'general_counsel' | 'other' | null;

      /**
       * If `other` is provided for the `title` field, this field should be used to
       * provide the title of the individual
       */
      title_other?: string | null;
    }
  }
}

export interface AccountUpdateParams {
  /**
   * The name by which the people this account communicates with know it. If not
   * provided, this will match the name field.
   */
  brand_name?: string;

  /**
   * The name of the account that will be visible for your internal organizational
   * purposes. This will also be the default public-facing brand name unless you also
   * set a `brand_name`, but otherwise the account name will never be displayed
   * anywhere outside of Surge HQ, and may include your ID for the account or
   * anything else that may help you.
   */
  name?: string;

  /**
   * The legal entity on whose behalf the account will be operated.
   */
  organization?: AccountUpdateParams.Organization;

  /**
   * The time zone for the account
   */
  time_zone?: string | null;
}

export namespace AccountUpdateParams {
  /**
   * The legal entity on whose behalf the account will be operated.
   */
  export interface Organization {
    /**
     * The address of the organization's headquarters.
     */
    address?: Organization.Address;

    /**
     * An object representing an individual who can be contacted if the carriers have
     * any questions about the business.
     */
    contact?: Organization.Contact | null;

    /**
     * The two character ISO 3166 country code for the country in which the
     * organization is headquartered.
     */
    country?: string | null;

    /**
     * For publicly traded companies, an email for a representative of the company to
     * whom a verification email will be sent. This must be an email on the same domain
     * as the company's website (e.g. with a website domain of
     * `https://dtprecisionauto.com`, the email must use the same
     * `@dtprecisionauto.com`)
     */
    email?: string | null;

    /**
     * The value of the identifier whose type is specified in the identifier_type
     * field. Typically this will be an EIN, and can be formatted with or without the
     * hyphen.
     */
    identifier?: string | null;

    /**
     * The type of identifier being provided for the organization. Support for more
     * values will be added in the future.
     */
    identifier_type?: 'ein' | null;

    /**
     * The industry in which the organization operates.
     */
    industry?:
      | 'agriculture'
      | 'automotive'
      | 'banking'
      | 'construction'
      | 'consumer'
      | 'education'
      | 'electronics'
      | 'energy'
      | 'engineering'
      | 'fast_moving_consumer_goods'
      | 'financial'
      | 'fintech'
      | 'food_and_beverage'
      | 'government'
      | 'healthcare'
      | 'hospitality'
      | 'insurance'
      | 'jewelry'
      | 'legal'
      | 'manufacturing'
      | 'media'
      | 'not_for_profit'
      | 'oil_and_gas'
      | 'online'
      | 'professional_services'
      | 'raw_materials'
      | 'real_estate'
      | 'religion'
      | 'retail'
      | 'technology'
      | 'telecommunications'
      | 'transportation'
      | 'travel'
      | null;

    /**
     * For sole proprietors, this must be a valid US mobile phone number to which a
     * verification text message will be sent. (E.164 format)
     */
    mobile_number?: string | null;

    /**
     * An array of regions in which the organization operates.
     */
    regions_of_operation?: Array<
      'africa' | 'asia' | 'australia' | 'europe' | 'latin_america' | 'usa_and_canada'
    > | null;

    /**
     * The legal name of the organization as registered with the IRS or other relevant
     * authorities. For some applications, this will be matched against government
     * records and should include all punctuation and everything else as well.
     */
    registered_name?: string | null;

    /**
     * For publicly traded companies, this is the exchange on which the company's stock
     * is traded.
     */
    stock_exchange?:
      | 'amex'
      | 'amx'
      | 'asx'
      | 'b3'
      | 'bme'
      | 'bse'
      | 'fra'
      | 'icex'
      | 'jpx'
      | 'jse'
      | 'krx'
      | 'lon'
      | 'nasdaq'
      | 'none'
      | 'nyse'
      | 'nse'
      | 'omx'
      | 'other'
      | 'sehk'
      | 'sgx'
      | 'sse'
      | 'sto'
      | 'swx'
      | 'szse'
      | 'tsx'
      | 'twse'
      | 'vse'
      | null;

    /**
     * For publicly traded companies, the ticker symbol for the company's stock
     */
    stock_symbol?: string | null;

    /**
     * The type of organization
     */
    type?:
      | 'co_op'
      | 'government'
      | 'llc'
      | 'non_profit'
      | 'partnership'
      | 'private_corporation'
      | 'public_corporation'
      | 'sole_proprietor'
      | null;

    /**
     * The URL of the website for this organization. The website should be publicly
     * available, clearly reflect the organization's purpose, and the URL should start
     * with `https://`
     */
    website?: string | null;
  }

  export namespace Organization {
    /**
     * The address of the organization's headquarters.
     */
    export interface Address {
      /**
       * The two character ISO 3166 country code. If none is provided, the organization's
       * country code will be used.
       */
      country?: string | null;

      /**
       * The first line of the address, typically the number and street name
       */
      line1?: string | null;

      /**
       * The second line of the address if needed, typically an apartment or suite number
       */
      line2?: string | null;

      /**
       * The city or locality
       */
      locality?: string | null;

      /**
       * The name to which any mail should be addressed. If none is provided, this will
       * default to the organization's registered_name
       */
      name?: string | null;

      /**
       * The postal code
       */
      postal_code?: string | null;

      /**
       * The state or region
       */
      region?: string | null;
    }

    /**
     * An object representing an individual who can be contacted if the carriers have
     * any questions about the business.
     */
    export interface Contact {
      /**
       * An email address at which the individual can be reached. Typically an email
       * using the same domain name as the website URL will be preferred (e.g. with a
       * website domain of `https://dtprecisionauto.com`, an email like
       * `dom@dtprecisionauto.com` will be preferred over one like
       * `dom@anothergarage.com` or `dom.toretto@gmail.com`)
       */
      email?: string | null;

      /**
       * The first name (or given name) of the individual
       */
      first_name?: string | null;

      /**
       * The last name (or family name) of the individual
       */
      last_name?: string | null;

      /**
       * A phone number at which the individual can be reached (E.164 format)
       */
      phone_number?: string | null;

      /**
       * The job title of the individual.
       */
      title?: 'ceo' | 'cfo' | 'director' | 'gm' | 'vp' | 'general_counsel' | 'other' | null;

      /**
       * If `other` is provided for the `title` field, this field should be used to
       * provide the title of the individual
       */
      title_other?: string | null;
    }
  }
}

export interface AccountBlastsParams {
  attachments?: Array<AttachmentParams>;

  /**
   * The message body.
   */
  body?: string;

  /**
   * @deprecated Deprecated. Use `to` instead.
   */
  contacts?: Array<string>;

  /**
   * Optional name for the blast.
   */
  name?: string;

  /**
   * @deprecated Deprecated. Use `to` instead.
   */
  segments?: Array<string>;

  /**
   * When to send the blast. If not provided, sends immediately.
   */
  send_at?: string;

  /**
   * List of recipients to whom the blast should be sent. This can be a combination
   * of contact IDs, segment IDs, and phone numbers.
   */
  to?: Array<string>;
}

export interface AccountCampaignsParams {
  /**
   * A string explaining the method through which end users will opt in to receive
   * messages from the brand. Typically this should include URLs for opt-in forms or
   * screenshots that might be helpful in explaining the flow to someone unfamiliar
   * with the organization's purpose.
   */
  consent_flow: string;

  /**
   * An explanation of the organization's purpose and how it will be using text
   * messaging to accomplish that purpose.
   */
  description: string;

  /**
   * An array of 2-5 strings with examples of the messages that will be sent from
   * this campaign. Typically the first sample should be a compliance message like
   * `You are now opted in to messages from {brand name}. Frequency varies. Msg&data rates apply. Reply STOP to opt out.`
   * These samples don't necessarily need to be the only templates that will be used
   * for the campaign, but they should reflect the purpose of the messages that will
   * be sent. Any variable content can be reflected by wrapping it in square brackets
   * like `[customer name]`.
   */
  message_samples: Array<string>;

  /**
   * The URL of the privacy policy for the brand in question. This may be a shared
   * privacy policy if it's the policy that is displayed to end users when they opt
   * in to messaging.
   */
  privacy_policy_url: string;

  /**
   * A list containing 1-5 types of messages that will be sent with this campaign.
   *
   * The following use cases are typically available to all brands:
   *
   * - `account_notification` - For sending reminders, alerts, and general
   *   account-related notifications like booking confirmations or appointment
   *   reminders.
   * - `customer_care` - For account support, troubleshooting, and general customer
   *   service communication.
   * - `delivery_notification` - For notifying customers about the status of product
   *   or service deliveries.
   * - `fraud_alert` - For warning customers about suspicious or potentially
   *   fraudulent activity.
   * - `higher_education` - For messaging related to colleges, universities, and
   *   school districts outside of K–12.
   * - `marketing` - For promotional or advertising messages intended to market
   *   products or services.
   * - `polling_voting` - For conducting surveys, polls, or voting-related messaging.
   * - `public_service_announcement` - For raising awareness about social issues or
   *   important public information.
   * - `security_alert` - For alerts related to potential security breaches or
   *   compromised systems requiring user action.
   * - `two_factor_authentication` - For sending one-time passwords or verification
   *   codes for login or password reset.
   *
   * For access to special use cases not shown here, reach out to support@surge.app.
   */
  use_cases: Array<
    | 'account_notification'
    | 'customer_care'
    | 'delivery_notification'
    | 'fraud_alert'
    | 'higher_education'
    | 'marketing'
    | 'polling_voting'
    | 'public_service_announcement'
    | 'security_alert'
    | 'two_factor_authentication'
  >;

  /**
   * This will be one of the following:
   *
   * - `low` - The campaign will be allowed to send up to 2000 SMS segments to
   *   T-Mobile customers each day. In this case your platform will be charged for
   *   the setup fee for a low volume number upon receipt of the API request.
   * - `high` - The campaign will be allowed to send up to 200k SMS segments to
   *   T-Mobile customers each day, depending on the trust score assigned by The
   *   Campaign Registry. Your platform will be charged for the setup fee for a high
   *   volume number upon receipt of the API request, and phone numbers will be
   *   charged as high volume numbers going forward.
   */
  volume: 'high' | 'low';

  /**
   * A list of properties that this campaign should include. These properties can be
   * any of the following values:
   *
   * - `links` - whether the campaign might send links in messages
   * - `phone_numbers` - whether the campaign might send phone numbers in messages
   * - `age_gated` - whether the campaign contains age gated content (controlled
   *   substances or adult content)
   * - `direct_lending` - whether the campaign contains content related to direct
   *   lending or other loan arrangements
   */
  includes?: Array<'links' | 'phone_numbers' | 'age_gated' | 'direct_lending'>;

  /**
   * A sample link that might be sent by this campaign. If links from other domains
   * are sent through this campaign, they are much more likely to be filtered by the
   * carriers. If link shortening is enabled for the account, the link shortener URL
   * will be used instead of what is provided. Reach out to support if you would like
   * to disable automatic link shortening.
   */
  link_sample?: string;

  /**
   * The URL of the terms and conditions presented to end users when they opt in to
   * messaging. These terms and conditions may be shared among all of a platform's
   * customers if they're the terms that are presented to end users when they opt in
   * to messaging.
   */
  terms_and_conditions_url?: string;
}

export interface AccountContactsParams {
  /**
   * The contact's phone number in E.164 format.
   */
  phone_number: string;

  /**
   * The contact's email address.
   */
  email?: string;

  /**
   * The contact's first name.
   */
  first_name?: string;

  /**
   * The contact's last name.
   */
  last_name?: string;

  /**
   * Additional metadata about the contact.
   */
  metadata?: { [key: string]: unknown };
}

export type AccountMessagesParams = AccountMessagesParams.Variant0 | AccountMessagesParams.Variant1;

export declare namespace AccountMessagesParams {
  export interface Variant0 {
    /**
     * Params for selecting or creating a new conversation. Either the id or the
     * Contact must be given.
     */
    conversation: Variant0.Conversation;

    attachments?: Array<AttachmentParams>;

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

  export namespace Variant0 {
    /**
     * Params for selecting or creating a new conversation. Either the id or the
     * Contact must be given.
     */
    export interface Conversation {
      /**
       * Params for selecting or creating a new contact for sending a message. Either the
       * id or the phone number must be given.
       */
      contact: Conversation.Contact;

      /**
       * The phone number from which to send the message. This can be either the phone
       * number in E.164 format or a Surge phone number id.
       */
      phone_number?: string;
    }

    export namespace Conversation {
      /**
       * Params for selecting or creating a new contact for sending a message. Either the
       * id or the phone number must be given.
       */
      export interface Contact {
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

  export interface Variant1 {
    /**
     * The recipient's phone number in E.164 format. Cannot be used together with
     * 'conversation'.
     */
    to: string;

    attachments?: Array<AttachmentParams>;

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

export interface AccountPhoneNumbersParams {
  /**
   * Whether the phone number is local or toll-free
   */
  type: 'local' | 'toll_free';

  /**
   * The desired area code for this phone number.
   */
  area_code?: string;
}

export interface AccountRetrieveStatusParams {
  /**
   * capabilities about which to check the status
   */
  capabilities?: Array<'local_messaging'>;
}

export interface AccountUsersParams {
  /**
   * The user's first name.
   */
  first_name: string;

  /**
   * The user's last name.
   */
  last_name?: string;

  /**
   * Set of key-value pairs that will be stored with the user.
   */
  metadata?: unknown;

  /**
   * URL of a photo to be used as the user's avatar.
   */
  photo_url?: string;
}

export declare namespace Accounts {
  export {
    type AccountResponse as AccountResponse,
    type AttachmentParams as AttachmentParams,
    type ContactRequest as ContactRequest,
    type ContactResponse as ContactResponse,
    type UserRequest as UserRequest,
    type UserResponse as UserResponse,
    type AccountBlastsResponse as AccountBlastsResponse,
    type AccountCampaignsResponse as AccountCampaignsResponse,
    type AccountMessagesResponse as AccountMessagesResponse,
    type AccountPhoneNumbersResponse as AccountPhoneNumbersResponse,
    type AccountRetrieveStatusResponse as AccountRetrieveStatusResponse,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountBlastsParams as AccountBlastsParams,
    type AccountCampaignsParams as AccountCampaignsParams,
    type AccountContactsParams as AccountContactsParams,
    type AccountMessagesParams as AccountMessagesParams,
    type AccountPhoneNumbersParams as AccountPhoneNumbersParams,
    type AccountRetrieveStatusParams as AccountRetrieveStatusParams,
    type AccountUsersParams as AccountUsersParams,
  };
}
