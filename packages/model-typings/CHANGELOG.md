# @rocket.chat/model-typings

## 0.0.6

### Patch Changes

- 7832a40a6: refactor: Move units check outside of model for finds
- b837cb9f: Fixed a problem where disabled department agent's where still being activated when applicable business hours met.
- ee5993625: fix: Dept w/o any BH config do not adhere to the default BH rules.
- 9da856cc6: fix: Resume on-hold chat not working with max-chat's allowed per agent config
- 0f0b8e17b: fix: hidden custom fields being required in some cases
- c31f93ed: fix: newly added agent not following business hours
- b837cb9f: Fixed logic around Default Business Hours where agents from disabled/archived departments where being omitted from processing at closing time
- 916c0dcaf: fix: [ENTERPRISE] Guest users can join more than maxRoomsPerGuest rooms
- 16dca466e: fix: "Discussions" filter is prioritized in admin "Rooms" page
- Updated dependencies [e14ec5081]
- Updated dependencies [9da856cc6]
- Updated dependencies [12d97e16c]
  - @rocket.chat/core-typings@6.3.0

## 0.0.5

### Patch Changes

- @rocket.chat/core-typings@6.2.10

## 0.0.4

### Patch Changes

- @rocket.chat/core-typings@6.2.9

## 0.0.3

### Patch Changes

- Updated dependencies []:
  - @rocket.chat/core-typings@6.2.7

## 0.0.2

### Patch Changes

- Updated dependencies []:
  - @rocket.chat/core-typings@6.2.6
