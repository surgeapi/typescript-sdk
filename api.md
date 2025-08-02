# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountStatus</a></code>
- <code><a href="./src/resources/accounts.ts">AccountCreateResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountUpdateResponse</a></code>

Methods:

- <code title="post /accounts">client.accounts.<a href="./src/resources/accounts.ts">create</a>({ ...params }) -> AccountCreateResponse</code>
- <code title="patch /accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">update</a>(id, { ...params }) -> AccountUpdateResponse</code>
- <code title="get /accounts/{account_id}/status">client.accounts.<a href="./src/resources/accounts.ts">checkStatus</a>(accountID, { ...params }) -> AccountStatus</code>

# Blasts

Types:

- <code><a href="./src/resources/blasts.ts">BlastBlastsResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/blasts">client.blasts.<a href="./src/resources/blasts.ts">blasts</a>(accountID, { ...params }) -> BlastBlastsResponse</code>

# Campaigns

Types:

- <code><a href="./src/resources/campaigns.ts">Campaign</a></code>

Methods:

- <code title="post /accounts/{account_id}/campaigns">client.campaigns.<a href="./src/resources/campaigns.ts">campaigns</a>(accountID, { ...params }) -> Campaign</code>

# Contacts

Types:

- <code><a href="./src/resources/contacts.ts">Contact</a></code>
- <code><a href="./src/resources/contacts.ts">ContactCreateResponse</a></code>
- <code><a href="./src/resources/contacts.ts">ContactRetrieveResponse</a></code>
- <code><a href="./src/resources/contacts.ts">ContactUpdateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/contacts">client.contacts.<a href="./src/resources/contacts.ts">create</a>(accountID, { ...params }) -> ContactCreateResponse</code>
- <code title="get /contacts/{id}">client.contacts.<a href="./src/resources/contacts.ts">retrieve</a>(id) -> ContactRetrieveResponse</code>
- <code title="patch /contacts/{id}">client.contacts.<a href="./src/resources/contacts.ts">update</a>(id, { ...params }) -> ContactUpdateResponse</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">MessageSendResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/messages">client.messages.<a href="./src/resources/messages.ts">send</a>(accountID, { ...params }) -> MessageSendResponse</code>

# PhoneNumbers

Types:

- <code><a href="./src/resources/phone-numbers.ts">PhoneNumber</a></code>

Methods:

- <code title="post /accounts/{account_id}/phone_numbers">client.phoneNumbers.<a href="./src/resources/phone-numbers.ts">create</a>(accountID, { ...params }) -> PhoneNumber</code>

# Tokens

Types:

- <code><a href="./src/resources/tokens.ts">TokenCreateTokenResponse</a></code>

Methods:

- <code title="post /users/{user_id}/tokens">client.tokens.<a href="./src/resources/tokens.ts">createToken</a>(userID, { ...params }) -> TokenCreateTokenResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserUsersResponse</a></code>

Methods:

- <code title="get /users/{id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(id) -> UserRetrieveResponse</code>
- <code title="patch /users/{id}">client.users.<a href="./src/resources/users.ts">update</a>(id, { ...params }) -> UserUpdateResponse</code>
- <code title="post /accounts/{account_id}/users">client.users.<a href="./src/resources/users.ts">users</a>(accountID, { ...params }) -> UserUsersResponse</code>

# Verifications

Types:

- <code><a href="./src/resources/verifications.ts">Verification</a></code>
- <code><a href="./src/resources/verifications.ts">VerificationCheckResponse</a></code>

Methods:

- <code title="post /verifications">client.verifications.<a href="./src/resources/verifications.ts">create</a>({ ...params }) -> Verification</code>
- <code title="post /verifications/{id}/checks">client.verifications.<a href="./src/resources/verifications.ts">check</a>(id, { ...params }) -> VerificationCheckResponse</code>
