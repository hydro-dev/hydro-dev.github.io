---
title: Permissions and Privileges
---

Hydro permissions are handled using bitwise operations.  
Example: if a user has both `PRIV_EDIT_SYSTEM` and `PRIV_SET_PERM` permissions, it should be set to `(1<<0)|(1<<1)` (that is, 3)

You can check the relevant section in the [source code](https://github.com/hydro-dev/Hydro/blob/master/packages/common/permission.ts).

Further reading: [Permission Structure](../user/permission)
