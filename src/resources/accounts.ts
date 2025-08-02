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
   * const account = await client.accounts.create({
   *   name: 'Account #2840 - DT Precision Auto',
   * });
   * ```
   */
  create(body: AccountCreateParams, options?: RequestOptions): APIPromise<Account> {
    return this._client.post('/accounts', { body, ...options });
  }

  /**
   * Updates an Account
   *
   * @example
   * ```ts
   * const account = await client.accounts.update(
   *   'acct_01jpqjvfg9enpt7pyxd60pcmxj',
   * );
   * ```
   */
  update(id: string, body: AccountUpdateParams, options?: RequestOptions): APIPromise<Account> {
    return this._client.patch(path`/accounts/${id}`, { body, ...options });
  }

  /**
   * Check an account's status and capabilities
   *
   * @example
   * ```ts
   * const accountStatus = await client.accounts.checkStatus(
   *   'acct_01jpqjvfg9enpt7pyxd60pcmxj',
   * );
   * ```
   */
  checkStatus(
    accountID: string,
    query: AccountCheckStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AccountStatus> {
    return this._client.get(path`/accounts/${accountID}/status`, { query, ...options });
  }
}

/**
 * Response containing account information
 */
export interface Account {
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
  organization: Organization;

  /**
   * This is the time zone in which the account is headquartered. This time zone may
   * be used for compliance with TCPA restrictions on when messages may be sent.
   */
  time_zone: string | null;
}

/**
 * Parameters for creating a new account
 */
export interface AccountParams {
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
   * Parameters describing the legal entity on whose behalf the account will be
   * operated.
   */
  organization?: OrganizationParams;

  /**
   * This is the time zone in which the account is headquartered. This time zone may
   * be used for compliance with TCPA restrictions on when messages may be sent.
   */
  time_zone?: string;
}

/**
 * Response containing account status information
 */
export interface AccountStatus {
  /**
   * An object where the fields are the capabilities passed in the `capabilities`
   * query param, as in `local_messaging`.
   */
  capabilities: { [key: string]: AccountStatus.Capabilities };
}

export namespace AccountStatus {
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

/**
 * Parameters for updating an account
 */
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
   * Parameters describing the legal entity on whose behalf the account will be
   * operated.
   */
  organization?: OrganizationParams;

  /**
   * The time zone for the account
   */
  time_zone?: string | null;
}

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

/**
 * Parameters describing the legal entity on whose behalf the account will be
 * operated.
 */
export interface OrganizationParams {
  /**
   * The address of the organization's headquarters.
   */
  address?: OrganizationParams.Address;

  /**
   * An object representing an individual who can be contacted if the carriers have
   * any questions about the business.
   */
  contact?: OrganizationParams.Contact | null;

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

export namespace OrganizationParams {
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
   * Parameters describing the legal entity on whose behalf the account will be
   * operated.
   */
  organization?: OrganizationParams;

  /**
   * This is the time zone in which the account is headquartered. This time zone may
   * be used for compliance with TCPA restrictions on when messages may be sent.
   */
  time_zone?: string;
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
   * Parameters describing the legal entity on whose behalf the account will be
   * operated.
   */
  organization?: OrganizationParams;

  /**
   * The time zone for the account
   */
  time_zone?: string | null;
}

export interface AccountCheckStatusParams {
  /**
   * capabilities about which to check the status
   */
  capabilities?: Array<'local_messaging'>;
}

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountParams as AccountParams,
    type AccountStatus as AccountStatus,
    type AccountUpdateParams as AccountUpdateParams,
    type Organization as Organization,
    type OrganizationParams as OrganizationParams,
    type AccountCreateParams as AccountCreateParams,
    type AccountCheckStatusParams as AccountCheckStatusParams,
  };
}
