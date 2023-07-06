# @rocket.chat/web-ui-registration

## 1.0.0

### Minor Changes

- 4b5a87c88: fix: Handle login services errors

### Patch Changes

- e14ec5081: Added and Improved Custom Fields form to Registration Flow
- ae39f9108: ✅ Added a new email validation in the Registration Form
- ebbb60816: fix: Login Terms custom content
  The custom layout Login Terms did not had any effect on the login screen, so it was changed to get the proper setting effect
- 6938bcd1a: fix: Manually approved user registration flow
  The new user gets redirected to the login page with a toast message saying:

  > Before you can login, your account must be manually activated by an administrator.

- Updated dependencies [e14ec5081]
  - @rocket.chat/ui-contexts@1.0.0
