// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Campaigns extends APIResource {
  /**
   * Creates a campaign to register account to send text messages.
   *
   * @example
   * ```ts
   * const campaign = await client.campaigns.create(
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
  create(accountID: string, body: CampaignCreateParams, options?: RequestOptions): APIPromise<Campaign> {
    return this._client.post(path`/accounts/${accountID}/campaigns`, { body, ...options });
  }
}

/**
 * A campaign represents the context in which one or more of your phone numbers
 * communicates with your contacts. Consent and opt-outs are tied to the campaign.
 */
export interface Campaign {
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
 * Parameters for creating a new campaign
 */
export interface CampaignParams {
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

export interface CampaignCreateParams {
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

export declare namespace Campaigns {
  export {
    type Campaign as Campaign,
    type CampaignParams as CampaignParams,
    type CampaignCreateParams as CampaignCreateParams,
  };
}
