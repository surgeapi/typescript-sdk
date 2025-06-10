# Reference

## Accounts

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">create</a>({ ...params }) -> Surge.AccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new Account within the calling Platform.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.create({
    name: "D\u00B7T Precision Auto Shop",
    time_zone: "America/Los_Angeles",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Surge.CreateAccountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounts.<a href="/src/api/resources/accounts/client/Client.ts">update</a>(id, { ...params }) -> Surge.AccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an Account

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounts.update("acct_01jpqjvfg9enpt7pyxd60pcmxj", {
    name: "D\u00B7T Precision Auto Shop",
    time_zone: "America/Los_Angeles",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` —

</dd>
</dl>

<dl>
<dd>

**request:** `Surge.UpdateAccountRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Blasts

<details><summary><code>client.blasts.<a href="/src/api/resources/blasts/client/Client.ts">send</a>(accountId, { ...params }) -> Surge.BlastResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends a Blast.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.blasts.send("acct_01j9a43avnfqzbjfch6pygv1td", {
    attachments: [
        {
            url: "https://example.com/image.jpg",
        },
    ],
    body: "Join us for our grand opening!",
    contacts: ["ctc_01j9dy8mdzfn3r0e8x1tbdrdrf"],
    name: "Grand Opening Announcement",
    segments: ["seg_01j9dy8mdzfn3r0e8x1tbdrdrf"],
    send_at: "2024-02-01T15:00:00Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**accountId:** `string` — The account for which the blast should be sent.

</dd>
</dl>

<dl>
<dd>

**request:** `Surge.BlastRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Blasts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Contacts

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">create</a>(accountId, { ...params }) -> Surge.ContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new Contact object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.create("acct_01j9a43avnfqzbjfch6pygv1td", {
    email: "dom@toretto.family",
    first_name: "Dominic",
    last_name: "Toretto",
    metadata: {
        car: "1970 Dodge Charger R/T",
    },
    phone_number: "+18015551234",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**accountId:** `string` — The account for which the contact should be created.

</dd>
</dl>

<dl>
<dd>

**request:** `Surge.ContactRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">getContact</a>(id) -> Surge.ContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a Contact object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.getContact("ctc_01j9dy8mdzfn3r0e8x1tbdrdrf");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` —

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">update</a>(id, { ...params }) -> Surge.ContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the specified contact by setting the values of the parameters passed. Any parameters not provided will be left unchanged.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.update("ctc_01j9dy8mdzfn3r0e8x1tbdrdrf", {
    email: "dom@toretto.family",
    first_name: "Dominic",
    last_name: "Toretto",
    metadata: {
        car: "1970 Dodge Charger R/T",
    },
    phone_number: "+18015551234",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` —

</dd>
</dl>

<dl>
<dd>

**request:** `Surge.ContactRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Messages

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">send</a>(accountId, { ...params }) -> Surge.MessageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sends a Message.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.send("acct_01j9a43avnfqzbjfch6pygv1td", {
    attachments: [
        {
            url: "https://toretto.family/coronas.gif",
        },
    ],
    body: "Thought you could leave without saying goodbye?",
    conversation: {
        contact: {
            first_name: "Dominic",
            last_name: "Toretto",
            phone_number: "+18015551234",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**accountId:** `string` — The account for which the message should be sent.

</dd>
</dl>

<dl>
<dd>

**request:** `Surge.MessageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PhoneNumbers

<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">create</a>(accountId, { ...params }) -> Surge.PhoneNumber</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new phone number for the account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.create("acct_01j9a43avnfqzbjfch6pygv1td", {
    area_code: "801",
    type: "local",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**accountId:** `string` — The account for which the phone number should be created.

</dd>
</dl>

<dl>
<dd>

**request:** `Surge.CreatePhoneNumberRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Users

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">create</a>(accountId, { ...params }) -> Surge.UserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new User object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.create("acct_01j9a43avnfqzbjfch6pygv1td", {
    first_name: "Brian",
    last_name: "O'Conner",
    metadata: {
        email: "boconner@toretti.family",
        user_id: 1234,
    },
    photo_url: "https://toretti.family/people/brian.jpg",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**accountId:** `string` — The account for which the user should be created.

</dd>
</dl>

<dl>
<dd>

**request:** `Surge.UserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.users.<a href="/src/api/resources/users/client/Client.ts">getUser</a>(id) -> Surge.UserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves a User object.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.users.getUser("usr_01j9dwavghe1ttppewekjjkfrx");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` —

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Verifications

<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">create</a>({ ...params }) -> Surge.Verification</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new Verification and sends the code to the given phone number.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifications.create({
    phone_number: "+18015551234",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Surge.VerificationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Verifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.verifications.<a href="/src/api/resources/verifications/client/Client.ts">check</a>(id, { ...params }) -> Surge.VerificationCheckOkResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Checks the code against a verification.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.verifications.check("vfn_01jayh15c2f2xamftg0xpyq1nj", {
    code: "123456",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` —

</dd>
</dl>

<dl>
<dd>

**request:** `Surge.VerificationCheckRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Verifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
