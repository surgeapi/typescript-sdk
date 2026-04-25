# Changelog

## 0.42.1 (2026-04-25)

Full Changelog: [v0.42.0...v0.42.1](https://github.com/surgeapi/typescript-sdk/compare/v0.42.0...v0.42.1)

### Chores

* **formatter:** run prettier and eslint separately ([c840d0e](https://github.com/surgeapi/typescript-sdk/commit/c840d0eeb98ce1744afb7236c2fa1367e7ab0cd0))
* **internal:** more robust bootstrap script ([0be5930](https://github.com/surgeapi/typescript-sdk/commit/0be59301e72f405d1ab022fdfb774ee5ec6c734a))

## 0.42.0 (2026-04-22)

Full Changelog: [v0.41.0...v0.42.0](https://github.com/surgeapi/typescript-sdk/compare/v0.41.0...v0.42.0)

### Features

* **api:** add endpoint to get attachment file ([6636b33](https://github.com/surgeapi/typescript-sdk/commit/6636b337325ccc874349d45049f7bef9a04ca0cc))
* **api:** add message to link.followed events ([6a69ef9](https://github.com/surgeapi/typescript-sdk/commit/6a69ef98173cd025bca7d6293a590619d06b5f8b))
* **api:** add name to phone numbers ([4e31910](https://github.com/surgeapi/typescript-sdk/commit/4e3191045c222c0600f026fd39eaa8eeec8995a2))


### Chores

* **internal:** codegen related update ([b4a2fc6](https://github.com/surgeapi/typescript-sdk/commit/b4a2fc67e8e364fe4ea807c9cc9953740cc27783))

## 0.41.0 (2026-04-06)

Full Changelog: [v0.40.0...v0.41.0](https://github.com/surgeapi/typescript-sdk/compare/v0.40.0...v0.41.0)

### Features

* **api:** create an audience ([ec27aee](https://github.com/surgeapi/typescript-sdk/commit/ec27aeec7a95fcd535c45b71a2dd9a1384540aa1))
* **api:** require terms_and_conditions_url for campaigns ([9e7e811](https://github.com/surgeapi/typescript-sdk/commit/9e7e811997f6e1ec4a6e87d7d9953760d22199e4))
* **api:** update a campaign ([21ad3e3](https://github.com/surgeapi/typescript-sdk/commit/21ad3e32faa05f20bd8b15e99008bc20387d999f))

## 0.40.0 (2026-04-01)

Full Changelog: [v0.39.0...v0.40.0](https://github.com/surgeapi/typescript-sdk/compare/v0.39.0...v0.40.0)

### Features

* **api:** add a contact to an audience ([9aa9979](https://github.com/surgeapi/typescript-sdk/commit/9aa9979c931cc38b1ac917d418d6bfa3d5ccc426))
* **api:** allow canadian organizations ([9680a6f](https://github.com/surgeapi/typescript-sdk/commit/9680a6f3517734b513703bdadf289db224172009))
* **api:** list contacts in audiences ([fe50e54](https://github.com/surgeapi/typescript-sdk/commit/fe50e548db4d6681bbb2f5711ac4e90f2b78d07d))


### Bug Fixes

* **internal:** gitignore generated `oidc` dir ([276cf14](https://github.com/surgeapi/typescript-sdk/commit/276cf14ed715525045283c9b737086ade6264623))


### Chores

* **ci:** skip lint on metadata-only changes ([d43afd6](https://github.com/surgeapi/typescript-sdk/commit/d43afd6c4a684879216bf8b26fb44d939e60480a))


### Documentation

* **api:** allow Canadian mobile number ([ea34fbd](https://github.com/surgeapi/typescript-sdk/commit/ea34fbd82bfd043e743b8a86c08a92c41a1a3361))

## 0.39.0 (2026-03-24)

Full Changelog: [v0.38.0...v0.39.0](https://github.com/surgeapi/typescript-sdk/compare/v0.38.0...v0.39.0)

### Features

* **api:** get and list recordings endpoints ([357cbef](https://github.com/surgeapi/typescript-sdk/commit/357cbefe4821349983257205dedab826e2cb4880))
* **api:** list users endpoint ([5484dbd](https://github.com/surgeapi/typescript-sdk/commit/5484dbd74b032c8c52a79e73844b65270b96171d))


### Chores

* **internal:** tweak CI branches ([4e141ca](https://github.com/surgeapi/typescript-sdk/commit/4e141ca416de88f46a14b771f69e73981105eebc))
* **internal:** update gitignore ([1eaa77f](https://github.com/surgeapi/typescript-sdk/commit/1eaa77f4de561203d4dea2fb0a234722156814a2))

## 0.38.0 (2026-03-11)

Full Changelog: [v0.37.0...v0.38.0](https://github.com/surgeapi/typescript-sdk/compare/v0.37.0...v0.38.0)

### Features

* **api:** add campaign ID to phone numbers ([fbfc91d](https://github.com/surgeapi/typescript-sdk/commit/fbfc91d3d13ae995cb9025591933501297317d84))
* **api:** add phoneNumberAttachedToCampaign webhook ([b0acec3](https://github.com/surgeapi/typescript-sdk/commit/b0acec3da486b2bfc41e1d9d2340e01e714cdffb))
* **api:** remove 'pending' campaign status ([7a012af](https://github.com/surgeapi/typescript-sdk/commit/7a012af21ca07505670c50b7cad77f5cbdc526df))
* **api:** rename segments to audiences ([a1836b2](https://github.com/surgeapi/typescript-sdk/commit/a1836b2a54ab2fdf5566c05c0abf8d2e00f63acf))


### Bug Fixes

* **client:** preserve URL params already embedded in path ([8b03bf0](https://github.com/surgeapi/typescript-sdk/commit/8b03bf0b7a96bfc42f27b52b0b696d8bbc2ee314))
* **docs/contributing:** correct pnpm link command ([771f9f9](https://github.com/surgeapi/typescript-sdk/commit/771f9f9f2f30e2dc7d7a62029ad735cdc94af4a2))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([f3db35b](https://github.com/surgeapi/typescript-sdk/commit/f3db35b00dfe0a4ed4b8c8e7fd995987d056dcea))
* **internal:** codegen related update ([8f11247](https://github.com/surgeapi/typescript-sdk/commit/8f11247eb199aaf9a3764463d76250bc6396fa67))
* **internal:** move stringifyQuery implementation to internal function ([ce28ec8](https://github.com/surgeapi/typescript-sdk/commit/ce28ec8d95ce007228d9a2f671ed3536283d455b))
* **internal:** update dependencies to address dependabot vulnerabilities ([8b57ad8](https://github.com/surgeapi/typescript-sdk/commit/8b57ad83298ca6a9fce1e33472219543ac3a88e8))
* **internal:** upgrade pnpm version ([05df2dd](https://github.com/surgeapi/typescript-sdk/commit/05df2dd4362224e0fbc52ede6727e97662ca982c))
* **tests:** update webhook tests ([da5a323](https://github.com/surgeapi/typescript-sdk/commit/da5a323a139ef929c927bc8e41efcc73a5943577))

## 0.37.0 (2026-02-22)

Full Changelog: [v0.36.0...v0.37.0](https://github.com/surgeapi/typescript-sdk/compare/v0.36.0...v0.37.0)

### Features

* **api:** add list campaigns endpoint ([5614fc8](https://github.com/surgeapi/typescript-sdk/commit/5614fc87eba67997a5df1e594700036449868304))
* **api:** add metadata to message webhooks ([cde02dd](https://github.com/surgeapi/typescript-sdk/commit/cde02ddaff2ad62f2aebfb7a83103af7a03cf398))
* **api:** delete recording endpoint ([09fabb7](https://github.com/surgeapi/typescript-sdk/commit/09fabb73e4a9184b59204b8fa7061fff65323e44))
* **api:** make attachment type an enum ([9919c39](https://github.com/surgeapi/typescript-sdk/commit/9919c392aeba8b09f97bbd881ffdedca64915431))


### Chores

* **internal/client:** fix form-urlencoded requests ([b37d281](https://github.com/surgeapi/typescript-sdk/commit/b37d28146f2085d9c2af7355a1ab76ba23d961cc))
* **internal:** avoid type checking errors with ts-reset ([8d3ef5d](https://github.com/surgeapi/typescript-sdk/commit/8d3ef5dfb1dabb33e94b38ab30aff38bf5cb7b0c))
* **internal:** remove mock server code ([596fb1b](https://github.com/surgeapi/typescript-sdk/commit/596fb1b08188ce719f2e2cff56ba06f071579036))
* **test:** update skip reason message ([1a1aaa7](https://github.com/surgeapi/typescript-sdk/commit/1a1aaa7d08065ecc730cb442417f635f670313ff))
* update mock server docs ([414877f](https://github.com/surgeapi/typescript-sdk/commit/414877f94341e4ea0ac1518079aa9e2a693bb41c))

## 0.36.0 (2026-02-12)

Full Changelog: [v0.35.0...v0.36.0](https://github.com/surgeapi/typescript-sdk/compare/v0.35.0...v0.36.0)

### Features

* **api:** add campaign.status field ([2c369b7](https://github.com/surgeapi/typescript-sdk/commit/2c369b7fb0c4365bb26eb2175e7a4ecebe05bfaf))
* **api:** add get campaign endpoint ([270553a](https://github.com/surgeapi/typescript-sdk/commit/270553acba25ae2059aff69a145f639a8f7847fe))
* **api:** add recording.completed webhook ([c4f2338](https://github.com/surgeapi/typescript-sdk/commit/c4f2338a62f36133389eda7b61109c8d5e7bed74))
* **api:** add voicemail.received webhook ([a72f1e7](https://github.com/surgeapi/typescript-sdk/commit/a72f1e78a624efbf0308452ef8e1bf3da6535edb))
* **api:** get recording file ([32de38d](https://github.com/surgeapi/typescript-sdk/commit/32de38daf5d207805acf1986e069c37f69c87d04))


### Bug Fixes

* **api:** make message.blast_id nullable ([1487aa6](https://github.com/surgeapi/typescript-sdk/commit/1487aa6f142b03e21c6b0e1e2e3ef6dcba6c70ef))
* **client:** avoid removing abort listener too early ([8305e3e](https://github.com/surgeapi/typescript-sdk/commit/8305e3e57be0e60753031505fc0c1aba60215e4f))


### Chores

* **client:** restructure abort controller binding ([47ef386](https://github.com/surgeapi/typescript-sdk/commit/47ef386b42eec12f97ad1df09d81eb7f24b9a4f5))
* **internal:** fix pagination internals not accepting option promises ([4fa1a59](https://github.com/surgeapi/typescript-sdk/commit/4fa1a5903594cb7d14cfb0653d45f604fe133741))
* **internal:** upgrade pnpm ([5547521](https://github.com/surgeapi/typescript-sdk/commit/5547521a4a824fc589945ba67d6b06a35daa654f))

## 0.35.0 (2026-02-04)

Full Changelog: [v0.34.0...v0.35.0](https://github.com/surgeapi/typescript-sdk/compare/v0.34.0...v0.35.0)

### Features

* **api:** add list contacts endpoint ([b1735b2](https://github.com/surgeapi/typescript-sdk/commit/b1735b242628f7ebd72a7cad8b92d54109909210))
* **api:** add list messages endpoint ([0d27a84](https://github.com/surgeapi/typescript-sdk/commit/0d27a848d8a1ed194066ff6e25ceaf2860116e2a))
* **api:** add list phone numbers endpoint ([df05cbb](https://github.com/surgeapi/typescript-sdk/commit/df05cbbfd67681d87ccc9eb0ade1a06fee692808))
* **sdk:** add deprecation messages ([e0404d1](https://github.com/surgeapi/typescript-sdk/commit/e0404d1c701998c3840a7eafb275f7088d32a23c))
* **sdks:** set up pagination ([afb53cc](https://github.com/surgeapi/typescript-sdk/commit/afb53cc8b298418f355ac9c4ef26b91c1b8ba308))


### Bug Fixes

* **api:** make message body nullable ([3909f09](https://github.com/surgeapi/typescript-sdk/commit/3909f09fdb4a8c2cf0ca4da4862d274281e585af))
* **client:** avoid memory leak with abort signals ([24a434f](https://github.com/surgeapi/typescript-sdk/commit/24a434faaec0abd5326462ace9bc2d38e7c694cb))


### Chores

* **client:** do not parse responses with empty content-length ([64dce72](https://github.com/surgeapi/typescript-sdk/commit/64dce72ec3009a6580dc6cd5f24b8ce46420b4fa))

## 0.34.0 (2026-01-26)

Full Changelog: [v0.33.0...v0.34.0](https://github.com/surgeapi/typescript-sdk/compare/v0.33.0...v0.34.0)

### Features

* **api:** api update ([e8a05ca](https://github.com/surgeapi/typescript-sdk/commit/e8a05ca5310c79c0c1ceb00790f839067db8c3eb))
* **api:** api update ([830808e](https://github.com/surgeapi/typescript-sdk/commit/830808e0bc681b298194b30af7b181c58d97cba9))
* **api:** api update ([b3b428f](https://github.com/surgeapi/typescript-sdk/commit/b3b428f0cd7db5bfbb1076079484a453c8ee08a4))


### Chores

* **ci:** upgrade `actions/github-script` ([b37d1d3](https://github.com/surgeapi/typescript-sdk/commit/b37d1d35b3321e6997247aff060d540c93057426))

## 0.33.0 (2026-01-18)

Full Changelog: [v0.32.0...v0.33.0](https://github.com/surgeapi/typescript-sdk/compare/v0.32.0...v0.33.0)

### Features

* **api:** api update ([aa56fe8](https://github.com/surgeapi/typescript-sdk/commit/aa56fe8d5a99e1cb6cfb9376edef3f5ec757011b))

## 0.32.0 (2026-01-18)

Full Changelog: [v0.31.0...v0.32.0](https://github.com/surgeapi/typescript-sdk/compare/v0.31.0...v0.32.0)

### Features

* **api:** api update ([930eb14](https://github.com/surgeapi/typescript-sdk/commit/930eb14d21292eb58a143c3b41deaf5812705679))


### Chores

* **internal:** update `actions/checkout` version ([d98256c](https://github.com/surgeapi/typescript-sdk/commit/d98256cdad1038111d1e3131a23f4da16515d743))
* **internal:** update lock file ([0f650cb](https://github.com/surgeapi/typescript-sdk/commit/0f650cb964a888ce12ed9f1be7a200dae04fa39d))
* **internal:** upgrade brace-expansion and @babel/helpers ([9ef97a4](https://github.com/surgeapi/typescript-sdk/commit/9ef97a4e89f11d90649b49ac927202920c0fbc0a))

## 0.31.0 (2026-01-15)

Full Changelog: [v0.30.0...v0.31.0](https://github.com/surgeapi/typescript-sdk/compare/v0.30.0...v0.31.0)

### Features

* **api:** add delete user endpoint ([b565f99](https://github.com/surgeapi/typescript-sdk/commit/b565f99de604c7717beadd72ef4b25f0029825a6))


### Bug Fixes

* **publish:** remove extraneous npm copy from package ([65ff1d9](https://github.com/surgeapi/typescript-sdk/commit/65ff1d9f13f2115727f7a301495e9173af5afe47))


### Chores

* **internal:** upgrade babel, qs, js-yaml ([266e661](https://github.com/surgeapi/typescript-sdk/commit/266e66175df664bf3be1ddd6d52399229588b961))

## 0.30.0 (2026-01-09)

Full Changelog: [v0.29.0...v0.30.0](https://github.com/surgeapi/typescript-sdk/compare/v0.29.0...v0.30.0)

### Features

* **api:** add archive account endpoint ([5a64f17](https://github.com/surgeapi/typescript-sdk/commit/5a64f17e4a45321bfd5a323c74e8e282d1261573))


### Chores

* break long lines in snippets into multiline ([380fc6a](https://github.com/surgeapi/typescript-sdk/commit/380fc6aad1b8f7db7a33f69d2f3b3f1c67a8d660))
* **internal:** codegen related update ([2ce62f4](https://github.com/surgeapi/typescript-sdk/commit/2ce62f495b4dc205f1b88fc28c1f884a4abaaec3))

## 0.29.0 (2025-12-23)

Full Changelog: [v0.28.0...v0.29.0](https://github.com/surgeapi/typescript-sdk/compare/v0.28.0...v0.29.0)

### Features

* **workflow:** use different package manager ([5f68e64](https://github.com/surgeapi/typescript-sdk/commit/5f68e643a888ec7680ba92ed550b6ac27728eec6))

## 0.28.0 (2025-12-17)

Full Changelog: [v0.27.1...v0.28.0](https://github.com/surgeapi/typescript-sdk/compare/v0.27.1...v0.28.0)

### Features

* **api:** add retrieve message endpoint ([c509ca6](https://github.com/surgeapi/typescript-sdk/commit/c509ca64d1dbe90b77312d44623ff04271390fad))


### Bug Fixes

* **mcp:** correct code tool API endpoint ([b5f1f18](https://github.com/surgeapi/typescript-sdk/commit/b5f1f18d508eeba43f8320918d205909894ac234))
* **mcp:** return correct lines on typescript errors ([2a149b9](https://github.com/surgeapi/typescript-sdk/commit/2a149b9b1cc8f3e0f04880ff8b12f86788e06c58))


### Chores

* **client:** fix logger property type ([780b54f](https://github.com/surgeapi/typescript-sdk/commit/780b54f68c402549e9a771277b1fe3ba14793074))
* **internal:** codegen related update ([feee4b6](https://github.com/surgeapi/typescript-sdk/commit/feee4b6fd34bebab13f6fced79a7073580c1a8ed))
* **internal:** codegen related update ([b4a9266](https://github.com/surgeapi/typescript-sdk/commit/b4a926644b207faa30ab8f81bc5c9800b5013571))
* **internal:** upgrade eslint ([de3f7eb](https://github.com/surgeapi/typescript-sdk/commit/de3f7eb8f293bd33299bc38a42abe8e4e061f880))

## 0.27.1 (2025-10-31)

Full Changelog: [v0.27.0...v0.27.1](https://github.com/surgeapi/typescript-sdk/compare/v0.27.0...v0.27.1)

### Features

* **api:** create externally registered campaigns ([fd962d4](https://github.com/surgeapi/typescript-sdk/commit/fd962d4c7e49290a10ff956efd808540bdacd76b))


### Documentation

* **api:** add context around organization contacts ([cf40475](https://github.com/surgeapi/typescript-sdk/commit/cf40475f7d9e807089a17a8547e33c9f2c997e3d))

## 0.27.0 (2025-10-09)

Full Changelog: [v0.26.0...v0.27.0](https://github.com/surgeapi/typescript-sdk/compare/v0.26.0...v0.27.0)

### Features

* **api:** api update ([12d6ae1](https://github.com/surgeapi/typescript-sdk/commit/12d6ae116628648f44df995f4a0fe4a88fb47635))
* **api:** api update ([53ca4fb](https://github.com/surgeapi/typescript-sdk/commit/53ca4fb3b629265c944516a4ef54ada27f7ca64b))
* **api:** manual updates ([49e252f](https://github.com/surgeapi/typescript-sdk/commit/49e252f18c4c47f052325de3457e1cec0b2ebd61))
* **api:** manual updates ([ff885fa](https://github.com/surgeapi/typescript-sdk/commit/ff885fa37e95d0deafdcdd2c1e9e80e85477a73e))
* **types:** remove explicit params types ([557aa64](https://github.com/surgeapi/typescript-sdk/commit/557aa64c801d6103efd9d36397b2116fd63c03b6))
* **types:** try removing account_update_params type ([c21ea33](https://github.com/surgeapi/typescript-sdk/commit/c21ea334ba422d0f046ad90fdbb7fd737de97f4a))


### Performance Improvements

* faster formatting ([bf00bd7](https://github.com/surgeapi/typescript-sdk/commit/bf00bd7a1de871e3cd3824b94a41811d1e7823c9))


### Chores

* do not install brew dependencies in ./scripts/bootstrap by default ([e5f116c](https://github.com/surgeapi/typescript-sdk/commit/e5f116cabb94c3e655aca55f40d15d8455d60803))
* improve example values ([b85cbf9](https://github.com/surgeapi/typescript-sdk/commit/b85cbf908d007db5413a1df25fe4610a9a67865e))
* **internal:** codegen related update ([81c2192](https://github.com/surgeapi/typescript-sdk/commit/81c2192405955abbc132a11bb7a86ec772bbbbab))
* **internal:** fix incremental formatting in some cases ([d73967e](https://github.com/surgeapi/typescript-sdk/commit/d73967e111d16dcd83e043f4a66658499fd0b86a))
* **internal:** ignore .eslintcache ([b5aca9a](https://github.com/surgeapi/typescript-sdk/commit/b5aca9ab8b85174aac4c3332adc50f732e51550b))
* **internal:** remove .eslintcache ([3559ae4](https://github.com/surgeapi/typescript-sdk/commit/3559ae40a56380ea7ac1cf46015580c9a476c881))
* **internal:** remove deprecated `compilerOptions.baseUrl` from tsconfig.json ([0af53d1](https://github.com/surgeapi/typescript-sdk/commit/0af53d128bd8c50cdaecb2a7f57b61e96e237d10))
* **internal:** use npm pack for build uploads ([61de5a4](https://github.com/surgeapi/typescript-sdk/commit/61de5a44384fac5eb9a65e9278a2b86d7c9eec8f))
* **jsdoc:** fix [@link](https://github.com/link) annotations to refer only to parts of the package‘s public interface ([e7a5bbf](https://github.com/surgeapi/typescript-sdk/commit/e7a5bbfe8adfe640f5f2c94064fda715b371b714))

## 0.26.0 (2025-09-12)

Full Changelog: [v0.0.1-alpha.0...v0.26.0](https://github.com/surgeapi/typescript-sdk/compare/v0.0.1-alpha.0...v0.26.0)

### Chores

* sync repo ([f4d49ce](https://github.com/surgeapi/typescript-sdk/commit/f4d49ce470eeef1fb420e363ffb894fc73ed8fdb))
* update SDK settings ([32c30ab](https://github.com/surgeapi/typescript-sdk/commit/32c30ab991fb75a9054501b900ad1b75193854b2))
* update SDK settings ([3632f1d](https://github.com/surgeapi/typescript-sdk/commit/3632f1de55b5f2adf8f4cde8d8baa09577489200))
