# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AttachmentParams</a></code>
- <code><a href="./src/resources/accounts.ts">AccountBlastsResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountCampaignsResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountContactsResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountMessagesResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountPhoneNumbersResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountRetrieveStatusResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountUsersResponse</a></code>

Methods:

- <code title="post /accounts">client.accounts.<a href="./src/resources/accounts.ts">create</a>({ ...params }) -> AccountResponse</code>
- <code title="patch /accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">update</a>(id, { ...params }) -> AccountResponse</code>
- <code title="post /accounts/{account_id}/blasts">client.accounts.<a href="./src/resources/accounts.ts">blasts</a>(accountID, { ...params }) -> AccountBlastsResponse</code>
- <code title="post /accounts/{account_id}/campaigns">client.accounts.<a href="./src/resources/accounts.ts">campaigns</a>(accountID, { ...params }) -> AccountCampaignsResponse</code>
- <code title="post /accounts/{account_id}/contacts">client.accounts.<a href="./src/resources/accounts.ts">contacts</a>(accountID, { ...params }) -> AccountContactsResponse</code>
- <code title="post /accounts/{account_id}/messages">client.accounts.<a href="./src/resources/accounts.ts">messages</a>(accountID, { ...params }) -> AccountMessagesResponse</code>
- <code title="post /accounts/{account_id}/phone_numbers">client.accounts.<a href="./src/resources/accounts.ts">phoneNumbers</a>(accountID, { ...params }) -> AccountPhoneNumbersResponse</code>
- <code title="get /accounts/{account_id}/status">client.accounts.<a href="./src/resources/accounts.ts">retrieveStatus</a>(accountID, { ...params }) -> AccountRetrieveStatusResponse</code>
- <code title="post /accounts/{account_id}/users">client.accounts.<a href="./src/resources/accounts.ts">users</a>(accountID, { ...params }) -> AccountUsersResponse</code>

# Contacts

Types:

- <code><a href="./src/resources/contacts.ts">ContactRetrieveResponse</a></code>
- <code><a href="./src/resources/contacts.ts">ContactUpdateResponse</a></code>

Methods:

- <code title="get /contacts/{id}">client.contacts.<a href="./src/resources/contacts.ts">retrieve</a>(id) -> ContactRetrieveResponse</code>
- <code title="patch /contacts/{id}">client.contacts.<a href="./src/resources/contacts.ts">update</a>(id, { ...params }) -> ContactUpdateResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserCreateTokenResponse</a></code>

Methods:

- <code title="get /users/{id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(id) -> UserRetrieveResponse</code>
- <code title="patch /users/{id}">client.users.<a href="./src/resources/users.ts">update</a>(id, { ...params }) -> UserUpdateResponse</code>
- <code title="post /users/{user_id}/tokens">client.users.<a href="./src/resources/users.ts">createToken</a>(userID, { ...params }) -> UserCreateTokenResponse</code>

# Verifications

Types:

- <code><a href="./src/resources/verifications.ts">Verification</a></code>
- <code><a href="./src/resources/verifications.ts">VerificationCheckResponse</a></code>

Methods:

- <code title="post /verifications">client.verifications.<a href="./src/resources/verifications.ts">create</a>({ ...params }) -> Verification</code>
- <code title="post /verifications/{id}/checks">client.verifications.<a href="./src/resources/verifications.ts">check</a>(id, { ...params }) -> VerificationCheckResponse</code>
