# 权限系统

Hydro 的权限系统使用双层结构，分别为 Privilege (PRIV) 和 Permission (PERM)。  
权限在系统内部使用位运算表示，具体的定义与数值可以查看 [源代码](https://github.com/hydro-dev/Hydro/blob/master/packages/hydrooj/src/model/builtin.ts) 。

## Privilege

Privilege 是用户在整套系统内拥有的权限，在所有域均生效。如创建用户，编辑系统设置，创建域，查看域等等。

特别地，`PRIV.PRIV_USER_PROFILE` 控制一个账号是否能够作为普通账号登录。若不具有此权限，该账号将无法登录（被封禁）。

常见需求：若不想让普通用户上传文件 可以关闭default角色的 `PRIV_CREATE_FILE` 权限

## Permission

Permission 是用户在单个域内拥有的权限，如创建题目/比赛，发布/删除讨论等等。

如果 `PERM.PERM_VIEW` 被禁用，则该用户无法查看此域。

## 角色

通常我们需要给特定的一组用户分配相同的权限。在用户量较多的时候这会非常混乱难以管理，为此我们设计了【角色】，便于批量操作与管理。  
角色是针对域内权限（PERM）的。在系统内置了三个角色：

- guest （对未登录用户生效，含已封禁用户）
- default （对所有未指定角色的用户生效，包括未加入域的用户）
- root （拥有所有权限）

通常情况下，如果需要对域做特殊的权限控制，应当新建一个用户组（例如 member）并将选定用户加入该用户组。  
将角色移出域和将用户的角色设置为 default 是等价的。  
若有需要，您也可以创建 teacher, admin 等其他角色。  
考虑到系统中的用户可能非常多（数万甚至数十万），在用户列表中仅会显示权限不为 default 的用户。

## 加入域

加入域的过程实际上是 **用户通过某种方式自助将自己的权限组由 default 变更到另一权限组（如member）** 的过程。  
因此在入域申请链接的权限组中选择 guest 和 default 是没有意义的。

