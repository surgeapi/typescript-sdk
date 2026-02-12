# Changelog

## 0.36.1 (2026-02-12)

Full Changelog: [v0.36.0...v0.36.1](https://github.com/surgeapi/typescript-sdk/compare/v0.36.0...v0.36.1)

### Chores

* **internal:** avoid type checking errors with ts-reset ([8d3ef5d](https://github.com/surgeapi/typescript-sdk/commit/8d3ef5dfb1dabb33e94b38ab30aff38bf5cb7b0c))

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
