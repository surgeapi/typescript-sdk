// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { Cursor, type CursorParams, PagePromise } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TollFreeCampaigns extends APIResource {
  /**
   * Creates a toll-free campaign and submits it for Surge review.
   */
  create(
    accountID: string,
    body: TollFreeCampaignCreateParams,
    options?: RequestOptions,
  ): APIPromise<TollFreeCampaign> {
    return this._client.post(path`/accounts/${accountID}/toll_free_campaigns`, { body, ...options });
  }

  /**
   * Retrieves a toll-free campaign object.
   */
  retrieve(campaignID: string, options?: RequestOptions): APIPromise<TollFreeCampaign> {
    return this._client.get(path`/toll_free_campaigns/${campaignID}`, options);
  }

  /**
   * Updates a toll-free campaign awaiting customer fixes and re-submits it for Surge
   * review. Returns 409 if the campaign is not in an updatable status.
   */
  update(
    campaignID: string,
    body: TollFreeCampaignUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TollFreeCampaign> {
    return this._client.patch(path`/toll_free_campaigns/${campaignID}`, { body, ...options });
  }

  /**
   * List all toll-free campaigns for an account with cursor-based pagination.
   */
  list(
    accountID: string,
    query: TollFreeCampaignListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TollFreeCampaignsCursor, TollFreeCampaign> {
    return this._client.getAPIList(
      path`/accounts/${accountID}/toll_free_campaigns`,
      Cursor<TollFreeCampaign>,
      { query, ...options },
    );
  }
}

export type TollFreeCampaignsCursor = Cursor<TollFreeCampaign>;

/**
 * A toll-free campaign registration for a phone number.
 */
export interface TollFreeCampaign {
  /**
   * The toll-free campaign ID
   */
  id: string;

  consent_flows: Array<TollFreeCampaignConsentFlow>;

  description: string | null;

  includes: Array<'age_gated'>;

  message_samples: Array<string>;

  /**
   * The toll-free phone number ID
   */
  phone_number_id: string;

  privacy_policy_url: string | null;

  /**
   * The current status of the toll-free campaign.
   */
  status: 'active' | 'canceled' | 'created' | 'in_review' | 'rejected';

  terms_and_conditions_url: string | null;

  use_cases: Array<
    | 'two_factor_authentication'
    | 'account_notification'
    | 'customer_care'
    | 'charity'
    | 'delivery_notification'
    | 'fraud_alert'
    | 'event'
    | 'higher_education'
    | 'k12_education'
    | 'marketing'
    | 'polling_voting'
    | 'political'
    | 'public_service_announcement'
    | 'security_alert'
  >;
}

/**
 * A consent flow returned on toll-free campaign responses.
 */
export type TollFreeCampaignConsentFlow =
  | TollFreeCampaignConsentFlow.UnionMember0
  | TollFreeCampaignConsentFlow.UnionMember1
  | TollFreeCampaignConsentFlow.UnionMember2
  | TollFreeCampaignConsentFlow.UnionMember3
  | TollFreeCampaignConsentFlow.Type;

export namespace TollFreeCampaignConsentFlow {
  export interface UnionMember0 {
    script: string;

    type: 'verbal';
  }

  export interface UnionMember1 {
    form_url: string;

    type: 'web_form';
  }

  export interface UnionMember2 {
    screenshot: UnionMember2.Screenshot;

    type: 'web_form';
  }

  export namespace UnionMember2 {
    export interface Screenshot {
      reason: 'behind_login' | 'under_construction' | 'other';

      reason_other?: string;
    }
  }

  export interface UnionMember3 {
    type: 'text';

    keywords?: Array<string>;
  }

  export interface Type {
    type: 'paper_form';
  }
}

export interface TollFreeCampaignCreateParams {
  consent_flows: Array<
    | TollFreeCampaignCreateParams.UnionMember0
    | TollFreeCampaignCreateParams.UnionMember1
    | TollFreeCampaignCreateParams.UnionMember2
    | TollFreeCampaignCreateParams.UnionMember3
  >;

  /**
   * An explanation of how the toll-free number will be used.
   */
  description: string;

  message_samples: Array<string>;

  /**
   * The toll-free phone number to register.
   */
  phone_number_id: string;

  privacy_policy_url: string;

  terms_and_conditions_url: string;

  use_cases: Array<
    | 'two_factor_authentication'
    | 'account_notification'
    | 'customer_care'
    | 'charity'
    | 'delivery_notification'
    | 'fraud_alert'
    | 'event'
    | 'higher_education'
    | 'k12_education'
    | 'marketing'
    | 'polling_voting'
    | 'political'
    | 'public_service_announcement'
    | 'security_alert'
  >;

  includes?: Array<'age_gated'>;
}

export namespace TollFreeCampaignCreateParams {
  export interface UnionMember0 {
    script: string;

    type: 'verbal';
  }

  export interface UnionMember1 {
    owner: 'brand' | 'platform';

    type: 'web_form';

    form_url?: string;

    screenshot?: UnionMember1.Screenshot;
  }

  export namespace UnionMember1 {
    export interface Screenshot {
      reason: 'behind_login' | 'under_construction' | 'other';

      urls: Array<string>;

      reason_other?: string;
    }
  }

  export interface UnionMember2 {
    file_urls: Array<string>;

    type: 'text';

    keywords?: Array<string>;
  }

  export interface UnionMember3 {
    file_urls: Array<string>;

    type: 'paper_form';
  }
}

export interface TollFreeCampaignUpdateParams {
  consent_flows?: Array<
    | TollFreeCampaignUpdateParams.UnionMember0
    | TollFreeCampaignUpdateParams.UnionMember1
    | TollFreeCampaignUpdateParams.UnionMember2
    | TollFreeCampaignUpdateParams.UnionMember3
  >;

  /**
   * An explanation of how the toll-free number will be used.
   */
  description?: string;

  includes?: Array<'age_gated'>;

  message_samples?: Array<string>;

  privacy_policy_url?: string;

  terms_and_conditions_url?: string;

  use_cases?: Array<
    | 'two_factor_authentication'
    | 'account_notification'
    | 'customer_care'
    | 'charity'
    | 'delivery_notification'
    | 'fraud_alert'
    | 'event'
    | 'higher_education'
    | 'k12_education'
    | 'marketing'
    | 'polling_voting'
    | 'political'
    | 'public_service_announcement'
    | 'security_alert'
  >;
}

export namespace TollFreeCampaignUpdateParams {
  export interface UnionMember0 {
    script: string;

    type: 'verbal';
  }

  export interface UnionMember1 {
    owner: 'brand' | 'platform';

    type: 'web_form';

    form_url?: string;

    screenshot?: UnionMember1.Screenshot;
  }

  export namespace UnionMember1 {
    export interface Screenshot {
      reason: 'behind_login' | 'under_construction' | 'other';

      urls: Array<string>;

      reason_other?: string;
    }
  }

  export interface UnionMember2 {
    file_urls: Array<string>;

    type: 'text';

    keywords?: Array<string>;
  }

  export interface UnionMember3 {
    file_urls: Array<string>;

    type: 'paper_form';
  }
}

export interface TollFreeCampaignListParams extends CursorParams {}

export declare namespace TollFreeCampaigns {
  export {
    type TollFreeCampaign as TollFreeCampaign,
    type TollFreeCampaignConsentFlow as TollFreeCampaignConsentFlow,
    type TollFreeCampaignsCursor as TollFreeCampaignsCursor,
    type TollFreeCampaignCreateParams as TollFreeCampaignCreateParams,
    type TollFreeCampaignUpdateParams as TollFreeCampaignUpdateParams,
    type TollFreeCampaignListParams as TollFreeCampaignListParams,
  };
}
