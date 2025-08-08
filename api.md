# Shared

Types:

- <code><a href="./src/resources/shared.ts">AttachmentParams</a></code>
- <code><a href="./src/resources/shared.ts">Contact</a></code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountCreateResponse</a></code>

Methods:

- <code title="post /accounts">client.accounts.<a href="./src/resources/accounts.ts">create</a>({ ...params }) -> AccountCreateResponse</code>

# Blasts

Types:

- <code><a href="./src/resources/blasts.ts">BlastCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/blasts">client.blasts.<a href="./src/resources/blasts.ts">create</a>(accountID, { ...params }) -> BlastCreateResponse</code>

# Campaigns

# Contacts

Types:

- <code><a href="./src/resources/contacts.ts">ContactCreateResponse</a></code>
- <code><a href="./src/resources/contacts.ts">ContactRetrieveResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/contacts">client.contacts.<a href="./src/resources/contacts.ts">create</a>(accountID, { ...params }) -> ContactCreateResponse</code>
- <code title="get /contacts/{id}">client.contacts.<a href="./src/resources/contacts.ts">retrieve</a>(id) -> ContactRetrieveResponse</code>

# Messages

Types:

- <code><a href="./src/resources/messages.ts">MessageCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/messages">client.messages.<a href="./src/resources/messages.ts">create</a>(accountID, { ...params }) -> MessageCreateResponse</code>

# PhoneNumbers

# Users

Types:

- <code><a href="./src/resources/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/users">client.users.<a href="./src/resources/users.ts">create</a>(accountID, { ...params }) -> UserCreateResponse</code>
- <code title="get /users/{id}">client.users.<a href="./src/resources/users.ts">retrieve</a>(id) -> UserRetrieveResponse</code>

# Verifications

Types:

- <code><a href="./src/resources/verifications.ts">Verification</a></code>
- <code><a href="./src/resources/verifications.ts">VerificationCheckResponse</a></code>

Methods:

- <code title="post /verifications">client.verifications.<a href="./src/resources/verifications.ts">create</a>({ ...params }) -> Verification</code>
- <code title="post /verifications/{id}/checks">client.verifications.<a href="./src/resources/verifications.ts">check</a>(id, { ...params }) -> VerificationCheckResponse</code>
