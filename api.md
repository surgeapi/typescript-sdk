# Shared

Types:

- <code><a href="./src/resources/shared.ts">Error</a></code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts.ts">AccountStatus</a></code>
- <code><a href="./src/resources/accounts.ts">Organization</a></code>

Methods:

- <code title="post /accounts">client.accounts.<a href="./src/resources/accounts.ts">create</a>({ ...params }) -> Account</code>
- <code title="patch /accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">update</a>(id, { ...params }) -> Account</code>
- <code title="delete /accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">archive</a>(id) -> Account</code>
- <code title="get /accounts/{account_id}/status">client.accounts.<a href="./src/resources/accounts.ts">retrieveStatus</a>(accountID, { ...params }) -> AccountStatus</code>

# Blasts

Types:

- <code><a href="./src/resources/blasts.ts">Blast</a></code>

Methods:

- <code title="post /accounts/{account_id}/blasts">client.blasts.<a href="./src/resources/blasts.ts">create</a>(accountID, { ...params }) -> Blast</code>

# Campaigns

Types:

- <code><a href="./src/resources/campaigns.ts">Campaign</a></code>

Methods:

- <code title="post /accounts/{account_id}/campaigns">client.campaigns.<a href="./src/resources/campaigns.ts">create</a>(accountID, { ...params }) -> Campaign</code>

# Contacts

Types:

- <code><a href="./src/resources/contacts.ts">Contact</a></code>

Methods:

- <code title="post /accounts/{account_id}/contacts">client.contacts.<a href="./src/resources/contacts.ts">create</a>(accountID, { ...params }) -> Contact</code>
- <code title="get /contacts/{id}">client.contacts.<a href="./src/resources/contacts.ts">retrieve</a>(id) -> Contact</code>
- <code title="patch /contacts/{id}">client.contacts.<a href="./src/resources/contacts.ts">update</a>(id, { ...params }) -> Contact</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">Message</a></code>

Methods:

- <code title="post /accounts/{account_id}/messages">client.messages.<a href="./src/resources/messages.ts">create</a>(accountID, { ...params }) -> Message</code>
- <code title="get /messages/{id}">client.messages.<a href="./src/resources/messages.ts">retrieve</a>(id) -> Message</code>

# PhoneNumbers

Types:

- <code><a href="./src/resources/phone-numbers.ts">PhoneNumber</a></code>
- <code><a href="./src/resources/phone-numbers.ts">PhoneNumberListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/phone_numbers">client.phoneNumbers.<a href="./src/resources/phone-numbers.ts">list</a>(accountID, { ...params }) -> PhoneNumberListResponse</code>
- <code title="post /accounts/{account_id}/phone_numbers">client.phoneNumbers.<a href="./src/resources/phone-numbers.ts">purchase</a>(accountID, { ...params }) -> PhoneNumber</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserTokenResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/users">client.users.<a href="./src/resources/users.ts">create</a>(accountID, { ...params }) -> User</code>
- <code title="get /users/{id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(id) -> User</code>
- <code title="patch /users/{id}">client.users.<a href="./src/resources/users.ts">update</a>(id, { ...params }) -> User</code>
- <code title="delete /users/{id}">client.users.<a href="./src/resources/users.ts">delete</a>(id) -> User</code>
- <code title="post /users/{user_id}/tokens">client.users.<a href="./src/resources/users.ts">createToken</a>(userID, { ...params }) -> UserTokenResponse</code>

# Verifications

Types:

- <code><a href="./src/resources/verifications.ts">Verification</a></code>
- <code><a href="./src/resources/verifications.ts">VerificationCheck</a></code>

Methods:

- <code title="post /verifications">client.verifications.<a href="./src/resources/verifications.ts">create</a>({ ...params }) -> Verification</code>
- <code title="post /verifications/{id}/checks">client.verifications.<a href="./src/resources/verifications.ts">check</a>(id, { ...params }) -> VerificationCheck</code>

# Webhooks

Types:

- <code><a href="./src/resources/webhooks.ts">CallEndedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">CampaignApprovedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ContactOptedInWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ContactOptedOutWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">ConversationCreatedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">LinkFollowedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">MessageDeliveredWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">MessageFailedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">MessageReceivedWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">MessageSentWebhookEvent</a></code>
- <code><a href="./src/resources/webhooks.ts">UnwrapWebhookEvent</a></code>

Methods:

- <code>client.webhooks.<a href="./src/resources/webhooks.ts">unwrap</a>(body) -> void</code>
