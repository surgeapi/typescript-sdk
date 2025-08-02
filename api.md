# Shared

Types:

- <code><a href="./src/resources/shared.ts">AttachmentParams</a></code>
- <code><a href="./src/resources/shared.ts">Contact</a></code>
- <code><a href="./src/resources/shared.ts">ContactParams</a></code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts.ts">AccountParams</a></code>
- <code><a href="./src/resources/accounts.ts">AccountStatus</a></code>
- <code><a href="./src/resources/accounts.ts">AccountUpdateParams</a></code>
- <code><a href="./src/resources/accounts.ts">Organization</a></code>
- <code><a href="./src/resources/accounts.ts">OrganizationParams</a></code>

Methods:

- <code title="post /accounts">client.accounts.<a href="./src/resources/accounts.ts">create</a>({ ...params }) -> Account</code>
- <code title="patch /accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">update</a>(id, { ...params }) -> Account</code>
- <code title="get /accounts/{account_id}/status">client.accounts.<a href="./src/resources/accounts.ts">checkStatus</a>(accountID, { ...params }) -> AccountStatus</code>

# Blasts

Types:

- <code><a href="./src/resources/blasts.ts">Blast</a></code>
- <code><a href="./src/resources/blasts.ts">BlastParams</a></code>

Methods:

- <code title="post /accounts/{account_id}/blasts">client.blasts.<a href="./src/resources/blasts.ts">blasts</a>(accountID, { ...params }) -> Blast</code>

# Campaigns

Types:

- <code><a href="./src/resources/campaigns.ts">Campaign</a></code>
- <code><a href="./src/resources/campaigns.ts">CampaignParams</a></code>

Methods:

- <code title="post /accounts/{account_id}/campaigns">client.campaigns.<a href="./src/resources/campaigns.ts">campaigns</a>(accountID, { ...params }) -> Campaign</code>

# Contacts

Methods:

- <code title="post /accounts/{account_id}/contacts">client.contacts.<a href="./src/resources/contacts.ts">create</a>(accountID, { ...params }) -> Contact</code>
- <code title="get /contacts/{id}">client.contacts.<a href="./src/resources/contacts.ts">retrieve</a>(id) -> Contact</code>
- <code title="patch /contacts/{id}">client.contacts.<a href="./src/resources/contacts.ts">update</a>(id, { ...params }) -> Contact</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">Message</a></code>
- <code><a href="./src/resources/messages.ts">MessageParams</a></code>

Methods:

- <code title="post /accounts/{account_id}/messages">client.messages.<a href="./src/resources/messages.ts">send</a>(accountID, { ...params }) -> Message</code>

# PhoneNumbers

Types:

- <code><a href="./src/resources/phone-numbers.ts">PhoneNumber</a></code>
- <code><a href="./src/resources/phone-numbers.ts">PhoneNumberPurchaseParams</a></code>

Methods:

- <code title="post /accounts/{account_id}/phone_numbers">client.phoneNumbers.<a href="./src/resources/phone-numbers.ts">purchase</a>(accountID, { ...params }) -> PhoneNumber</code>

# Tokens

Types:

- <code><a href="./src/resources/tokens.ts">TokenParams</a></code>
- <code><a href="./src/resources/tokens.ts">TokenResponse</a></code>

Methods:

- <code title="post /users/{user_id}/tokens">client.tokens.<a href="./src/resources/tokens.ts">createToken</a>(userID, { ...params }) -> TokenResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserParams</a></code>

Methods:

- <code title="get /users/{id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(id) -> User</code>
- <code title="patch /users/{id}">client.users.<a href="./src/resources/users.ts">update</a>(id, { ...params }) -> User</code>
- <code title="post /accounts/{account_id}/users">client.users.<a href="./src/resources/users.ts">users</a>(accountID, { ...params }) -> User</code>

# Verifications

Types:

- <code><a href="./src/resources/verifications.ts">Verification</a></code>
- <code><a href="./src/resources/verifications.ts">VerificationParams</a></code>
- <code><a href="./src/resources/verifications.ts">VerificationCheckResponse</a></code>

Methods:

- <code title="post /verifications">client.verifications.<a href="./src/resources/verifications.ts">create</a>({ ...params }) -> Verification</code>
- <code title="post /verifications/{id}/checks">client.verifications.<a href="./src/resources/verifications.ts">check</a>(id, { ...params }) -> VerificationCheckResponse</code>
