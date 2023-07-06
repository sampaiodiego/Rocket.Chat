# @rocket.chat/meteor

## 6.3.0

### Minor Changes

- 60a7b5cfd: feat: Save deprecation usage on prometheus
- 56177021d: feat: access-marketplace permission
- db9e1f6ad: feat: Add Apps engine Thread Bridge
- 74aa6770: feat: Add custom OAuth setting to allow merging users to others from distinct services
- 47e7a3808: feat: Quick reactions on message toolbox
- c1e89b180: fix: spotlight doesnt update with new rooms
- 5e387a1b: Fix Toggle message box formatting toolbar on click
- 9ea8088f0: fix: respect useEmoji preference for messages
- 35aeeed1c: fix: Hide roomLeader padding
- 3109a764b: feat: _Enterprise_ Add support for different transporters to connect multiple monolith instances.

  To use that, you can use the `TRANSPORTER` env var adding "monolith+" to the transporter value. To use NATS for example, your env var should be:

  ```bash
  export TRANSPORTER="monolith+nats://localhost:4222"
  ```

- 6a474ff95: Refactored Omnichannel department pages to use best practices, also fixed existing bugs
- dbdf45b0: feat: Introduce contextualBar surface renderer for UiKit blocks
- cebe359d1: fix: Room history scrollbar position
- 5e429d9c7: feat: Add setting to synchronize LDAP info on OAuth logins
- 066cf25f6: Fixed invalid message draft issue.
- e116d8804: chore: Add `roomName` on Composer placeholder
- 7f78a2946: Fix dates translations
- c0fa56724: Introducing i18n to UiKit text renderers
- 40cebcc0f: ask for totp if the provided one is invalid
- 0645f42e1: Reintroduce an user preference to allow users to see all thread messages in the main channel
- 29556cbba: Added emoji popup trigger length of 3 characters.
- 3de664157: Fix message composer popup bug
- 6e2f78fee: Added ability to see attachments in the contact history message list
- 6bce20a39: fix: Message sent triggering thread subscriptions multiple times
- c0523e350: fix: Handle live subscription removal
- 8b2fed74f: fix: Hide `ComposerPopupUser` hints when composer is compact
- 7e00009dd: fix: Analytics page crash

### Patch Changes

- 0d00dba7f: Fixed Marketplace Release Info tab loading loop
- b03fcd9c1: fix: broken error messages on room.saveInfo & missing CF validations on omni/contact api
- 7832a40a6: refactor: Move units check outside of model for finds
- ea0bbba8a: fixed system messages for room role changes
- fef33034e: Fixed a problem where the setting `Show Agent Email` from Omnichannel was not being used by the back when returning agent's info
- 8ac07583: fix: Permission to start conference calls was not being considered
- 7d769b96e: fix: Importer crashes when sending the "active status" e-mail notification to users
- 222c8ec5b: feat: [ENTERPRISE] Add setting to control user merge on LDAP Background Sync
- c95cda43e: fix: getActiveLocalUserCount query always returning 0
- d33f4ebab: fix: OTR session closing after 10 seconds without warning
- e14ec5081: Added and Improved Custom Fields form to Registration Flow
- fa015f520: 🛠️ Fixed settings of code input type not wrapping text correctly
- 4187aed60: regression: asciiart slashcommands breaking client
- 2bdddc56: regression: `onLogin` hook not destructuring user prop
- afde60c0e: fix: Wrong IP usage on monolith TCP transporter configuration
- 347e20602: fix: Clicking uploaded file title replaces current tab
- c9279bfcd: fix: message deletion fails if has files attached on filesystem storage
- f38211af5: fix: self dm is not found with `im.messages`
- b837cb9f: Fixed a problem where disabled department agent's where still being activated when applicable business hours met.
- 0571d34cc: fix: Omnichannel contact table not being updated after add/edit/remove
- 734db1d8b: fix emoji being rendered as big on headers and other places than message text
- eecd9fc9: fix: Omnichannel Tags available to be used in the wrong department
- 0c34904b5: Fixed omnichannel contact form asynchronous validations
- 3e2d7008: fix: Avatar is reset in the UI when username is changed
- 9160c2111: fix: Room members list out of order
- 1687bfbe3: fix: Admins unable to create new users if new users require manual approval
- b31ccd4a9: chore: break down helpers.ts and create new files

  🔀 changed `handleAPIError` import in AppDetailsPage.tsx
  🔀 changed `apiCurlGetter` import in AppDetailsAPIs.tsx
  🔀 changed `formatPriceAndPurchaseType` import in AppStatusPriceDisplay.tsx

  ❌ deleted `apiCurlGetter, handleInstallError, handleAPIError, warnAppInstall, warnEnableDisableApp, warnStatusChange, formatPriceAndPurchaseType` and moved them to new files, from helpers.ts

  ✅ created apiCurlGetter.ts file
  ✅ created appErroredStatuses.ts file
  ✅ created formatPrice.ts file
  ✅ created formatPriceAndPurchaseType.ts file
  ✅ created formatPricingPlan.ts file
  ✅ created handleAPIError.ts file
  ✅ created handleInstallError.ts file
  ✅ created installApp.ts file
  ✅ created updateApp.ts file
  ✅ created warnAppInstal.ts file
  ✅ created warnEnableDisableApp.ts file
  ✅ created warnStatusChange.ts file

  🔀 changed `handleAPIError` import in useAppInstallationHandler.tsx
  🔀 changed `handleAPIError` import in useCategories.ts
  🔀 changed `handleAPIError` import in useOpenIncompatibleModal.tsx

- 93fff202: fixed `room-opened` event not dispatching when navigating cached rooms
- 29452946a: fix: `queuedForUser` endpoint not filtering by status
- 40d7f7955: fix(meteor): Scroll position is lost when loading older messages
- bc115050a: fixed a bug with autotranslation encoding text
- 6f3eeec00: fixed video message button disabled on iOS browsers
- 26db142b1: fix wrong %s translations
- cb5a0f854: fixed a bug where sometimes a room would not load part of its messages.
- 37d653a19: Avoid invalid time ranges when adding/editing a Business Hour
- a7098c840: Fixed Omnichannel making an excessive amount of requests to room.info
- 4fb0078ab: fix show badge for thread direct mentions
- ee5993625: fix: Dept w/o any BH config do not adhere to the default BH rules.
- ebbb60816: fix: Login Terms custom content
  The custom layout Login Terms did not had any effect on the login screen, so it was changed to get the proper setting effect
- 760c0231a: Fixed edit department page showing data from the previous department
- ae6b82515: Fixed and replaced HTML texts to markdown on Settings to display rich text
- 17024613c: fixes the Livechat CSP validation, which was incorrectly blocking access to the widget for all non whitelisted domains
- b57b2f142: refactor: Convert Omnichannel helper ee to ts
- 83e98dfd: bump meteor patch
- 9da856cc6: fix: Resume on-hold chat not working with max-chat's allowed per agent config
- 370ee7577: Re-added pagination to Department's agents list
- c8cdc5179: fix: unable to upload files in IOS Safari browsers
- 3e139f206: Fixed ENOTFOUND error in k8s deployments
- 0f22271ca: fixed an issue where the room history is lost when jumping to an older message that is not already loaded
- 3f5849576: chore: update room on `cleanRoomHistory` only if any message has been deleted
- 2bcc812fc: fix: Rocket.Chat.Apps using wrong id parameter to emit settings
- 0f0b8e17b: fix: hidden custom fields being required in some cases
- 505b292ba: test: add missing omnichannel contact-center tests
- c31f93ed: fix: newly added agent not following business hours
- 82194555e: fix: Editing a room in the admin menu breaks that room's integration
- 585c49f14: fix: Import progress page stuck at 0%
- f8cd53bc7: fix: Add missing awaits to .count() calls
- b837cb9f: Fixed logic around Default Business Hours where agents from disabled/archived departments where being omitted from processing at closing time
- f65781d00: fix: Direct message notification
- 9b899959b: Fixed Search Shortcut (ctrl + K) and keyboard navigation and selection
- 916c0dcaf: fix: [ENTERPRISE] Guest users can join more than maxRoomsPerGuest rooms
- 12d97e16c: feat: Allow Incoming Webhooks to override destination channel
- cb0a92e88: fix: Frontend crash if IndexedDB is not available, i.e. in Firefox private mode
- a685a592a: Fix seats counter including apps
- 451337860: fix: Imported messages are not displayed
  fix: Importer agent is added as a member of every imported room
- ef107614e: Fixed Canned Responses text editor having no contrast in dark mode.
- 0fb7d9070: fixed an error on mobile ios browser where if you started recording audio and denied permission, it would look like it is still recording
- ce99be6b: fix: Omnichannel queue not running for all queues
- fc6fb2375: fix: Custom OAuth settings are not visible
- 674f95cca: Avoid updating a user's livechat status on login when its status is set to offline
- 6fe38a48: Fixed different time formats at different places
- 8fcb3edb4: fix: Remove room from UI when another agent takes it
- 65dec9860: Fixed canned responses filter not updating the table as expected
- f23e4f6cd: Fixed Business Hours behavior so they now Take seconds in consideration to assess if BH is open/closed
- 059a92e87: Fix visitor's query when both email & phone number are empty
- 16dca466e: fix: "Discussions" filter is prioritized in admin "Rooms" page
- Updated dependencies [4b5a87c88]
- Updated dependencies [7832a40a6]
- Updated dependencies [e14ec5081]
- Updated dependencies [74aa6770]
- Updated dependencies [e006013e5]
- Updated dependencies [b837cb9f]
- Updated dependencies [eecd9fc9]
- Updated dependencies [ae39f9108]
- Updated dependencies [9ea8088f0]
- Updated dependencies [ee5993625]
- Updated dependencies [ebbb60816]
- Updated dependencies [6a474ff95]
- Updated dependencies [37c792161]
- Updated dependencies [9da856cc6]
- Updated dependencies [baaa38f7]
- Updated dependencies [dbdf45b0]
- Updated dependencies [0f0b8e17b]
- Updated dependencies [5e429d9c7]
- Updated dependencies [c31f93ed]
- Updated dependencies [6938bcd1a]
- Updated dependencies [b837cb9f]
- Updated dependencies [c0fa56724]
- Updated dependencies [40cebcc0f]
- Updated dependencies [916c0dcaf]
- Updated dependencies [12d97e16c]
- Updated dependencies [40cebcc0f]
- Updated dependencies [0645f42e1]
- Updated dependencies [cde253961]
- Updated dependencies [16dca466e]
  - @rocket.chat/web-ui-registration@1.0.0
  - @rocket.chat/model-typings@0.0.6
  - @rocket.chat/core-typings@6.3.0
  - @rocket.chat/rest-typings@6.3.0
  - @rocket.chat/ui-client@1.0.0
  - @rocket.chat/ui-contexts@1.0.0
  - @rocket.chat/api-client@0.1.0
  - @rocket.chat/gazzodown@1.0.0
  - @rocket.chat/agenda@0.0.2
  - @rocket.chat/core-services@0.1.0
  - @rocket.chat/fuselage-ui-kit@1.0.0
  - @rocket.chat/omnichannel-services@0.0.6
  - @rocket.chat/models@0.0.6
  - @rocket.chat/pdf-worker@0.0.6
  - @rocket.chat/presence@0.0.6
  - @rocket.chat/cron@0.0.2
  - @rocket.chat/ui-theming@0.0.1
  - @rocket.chat/ui-video-conf@1.0.0
  - @rocket.chat/instance-status@0.0.6

## 6.2.10

### Patch Changes

- 3795bb8b41: fix show badge for thread direct mentions
  - @rocket.chat/core-typings@6.2.10
  - @rocket.chat/rest-typings@6.2.10
  - @rocket.chat/omnichannel-services@0.0.5
  - @rocket.chat/pdf-worker@0.0.5
  - @rocket.chat/presence@0.0.5
  - @rocket.chat/api-client@0.0.5
  - @rocket.chat/core-services@0.0.5
  - @rocket.chat/gazzodown@0.0.1
  - @rocket.chat/model-typings@0.0.5
  - @rocket.chat/ui-contexts@0.0.5
  - @rocket.chat/models@0.0.5
  - @rocket.chat/ui-theming@0.0.1
  - @rocket.chat/fuselage-ui-kit@0.31.16
  - @rocket.chat/ui-client@0.0.1
  - @rocket.chat/ui-video-conf@0.0.1
  - @rocket.chat/web-ui-registration@0.0.1
  - @rocket.chat/instance-status@0.0.5

## 6.2.9

### Patch Changes

- 2f0f67f313: fixed `room-opened` event not dispatching when navigating cached rooms
- 1ffc60dfd6: fixed video message button disabled on iOS browsers
- 1ffc60dfd6: fixed an error on mobile ios browser where if you started recording audio and denied permission, it would look like it is still recording
  - @rocket.chat/core-typings@6.2.9
  - @rocket.chat/rest-typings@6.2.9
  - @rocket.chat/omnichannel-services@0.0.4
  - @rocket.chat/pdf-worker@0.0.4
  - @rocket.chat/presence@0.0.4
  - @rocket.chat/api-client@0.0.4
  - @rocket.chat/core-services@0.0.4
  - @rocket.chat/gazzodown@0.0.1
  - @rocket.chat/model-typings@0.0.4
  - @rocket.chat/ui-contexts@0.0.4
  - @rocket.chat/models@0.0.4
  - @rocket.chat/ui-theming@0.0.1
  - @rocket.chat/fuselage-ui-kit@0.31.16
  - @rocket.chat/ui-client@0.0.1
  - @rocket.chat/ui-video-conf@0.0.1
  - @rocket.chat/web-ui-registration@0.0.1
  - @rocket.chat/instance-status@0.0.4

## 6.2.7

### Patch Changes

- [#29596](https://github.com/RocketChat/Rocket.Chat/pull/29596) [`74983f5b46`](https://github.com/RocketChat/Rocket.Chat/commit/74983f5b46abacbde2afb0838681ef3c5023307d) Thanks [@rocketchat-github-ci](https://github.com/rocketchat-github-ci)! - fix: Wrong IP usage on monolith TCP transporter configuration

- [#29596](https://github.com/RocketChat/Rocket.Chat/pull/29596) [`929f457161`](https://github.com/RocketChat/Rocket.Chat/commit/929f45716141dcc4d49ad2afe8315492c9028f9c) Thanks [@rocketchat-github-ci](https://github.com/rocketchat-github-ci)! - Fixed ENOTFOUND error in k8s deployments

- Updated dependencies []:
  - @rocket.chat/core-typings@6.2.7
  - @rocket.chat/rest-typings@6.2.7
  - @rocket.chat/omnichannel-services@0.0.3
  - @rocket.chat/pdf-worker@0.0.3
  - @rocket.chat/presence@0.0.3
  - @rocket.chat/api-client@0.0.3
  - @rocket.chat/core-services@0.0.3
  - @rocket.chat/gazzodown@0.0.1
  - @rocket.chat/model-typings@0.0.3
  - @rocket.chat/ui-contexts@0.0.3
  - @rocket.chat/models@0.0.3
  - @rocket.chat/ui-theming@0.0.1
  - @rocket.chat/fuselage-ui-kit@0.31.16
  - @rocket.chat/ui-client@0.0.1
  - @rocket.chat/ui-video-conf@0.0.1
  - @rocket.chat/web-ui-registration@0.0.1
  - @rocket.chat/instance-status@0.0.3

## 6.2.6

### Patch Changes

- [#29545](https://github.com/RocketChat/Rocket.Chat/pull/29545) [`8ade880306`](https://github.com/RocketChat/Rocket.Chat/commit/8ade880306a2f4be6fb979c9db32a1ca5bdf4c1f) Thanks [@github-actions](https://github.com/apps/github-actions)! - fix: Frontend crash if IndexedDB is not available, i.e. in Firefox private mode

- Updated dependencies []:
  - @rocket.chat/core-typings@6.2.6
  - @rocket.chat/rest-typings@6.2.6
  - @rocket.chat/omnichannel-services@0.0.2
  - @rocket.chat/pdf-worker@0.0.2
  - @rocket.chat/presence@0.0.2
  - @rocket.chat/api-client@0.0.2
  - @rocket.chat/core-services@0.0.2
  - @rocket.chat/gazzodown@0.0.1
  - @rocket.chat/model-typings@0.0.2
  - @rocket.chat/ui-contexts@0.0.2
  - @rocket.chat/models@0.0.2
  - @rocket.chat/ui-theming@0.0.1
  - @rocket.chat/fuselage-ui-kit@0.31.16
  - @rocket.chat/ui-client@0.0.1
  - @rocket.chat/ui-video-conf@0.0.1
  - @rocket.chat/web-ui-registration@0.0.1
  - @rocket.chat/instance-status@0.0.2
