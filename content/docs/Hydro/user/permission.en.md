---
title: Permission System
---

Hydro's permission system uses a two-layer structure: Privilege (PRIV) and Permission (PERM).  
Permissions are represented internally with bit operations. Definitions and values can be found in the [source code](https://github.com/hydro-dev/Hydro/blob/master/packages/common/permission.ts).

## Privilege

Privilege refers to permissions a user has across the whole system, effective in all Domains, such as creating users, editing system settings, creating Domains, viewing Domains, etc.

Specifically, `PRIV.PRIV_USER_PROFILE` controls whether an account can log in as a normal account. Without this privilege, the account cannot log in (banned).

Common needs:

 - If you do not want regular users to upload files, disable `PRIV_CREATE_FILE` for the default role
 - If you need to disable site messages, disable `PRIV_SEND_MESSAGE`

## Permission

Permission refers to permissions a user has within a single Domain, such as creating problems/contests, posting/deleting discussions, etc.

If `PERM.PERM_VIEW` is disabled, that user cannot view this Domain.

## Roles

Usually we need to assign the same permissions to a specific group of users. With many users, this becomes chaotic and hard to manage, so we designed **roles** for batch operations and management.  
Roles are for Domain-level permissions (PERM). Three built-in roles are provided:

- guest (applies to non-logged-in users, including banned users)
- default (applies to all users without an assigned role, including users not joined to the Domain)
- root (has all permissions)

Normally, if you need special Domain permission control, you should create a new role (for example, member) and assign selected users to it.  
Removing a role assignment from a user in a Domain is equivalent to setting that user's role to default.  
If needed, you can also create other roles such as teacher or admin.  
Because there may be many users in the system (tens of thousands or even hundreds of thousands), only users whose role is not default are shown in the user list.

## Join Domain

### Hydro v5

See the explanation in the Domain section.

### Hydro v4

The process of joining a Domain is essentially the process where **a user self-serves their own role from default to another role (such as member)** through some method.  
So choosing guest or default as the role in a join-domain invitation link is meaningless.
