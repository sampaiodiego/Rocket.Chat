# @rocket.chat/model-typings

## 0.0.6-rc.0

### Patch Changes

- 7832a40a6d: refactor: Move units check outside of model for finds
- b837cb9f2a: Fixed a problem where disabled department agent's where still being activated when applicable business hours met.
- ee5993625b: fix: Dept w/o any BH config do not adhere to the default BH rules.
- 9da856cc67: fix: Resume on-hold chat not working with max-chat's allowed per agent config
- 0f0b8e17bf: fix: hidden custom fields being required in some cases
- c31f93ed96: fix: newly added agent not following business hours
- b837cb9f2a: Fixed logic around Default Business Hours where agents from disabled/archived departments where being omitted from processing at closing time
- 916c0dcaf2: fix: [ENTERPRISE] Guest users can join more than maxRoomsPerGuest rooms
- 16dca466ea: fix: "Discussions" filter is prioritized in admin "Rooms" page
- Updated dependencies [e14ec50816]
- Updated dependencies [9da856cc67]
- Updated dependencies [12d97e16c2]
  - @rocket.chat/core-typings@6.3.0-rc.0

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
