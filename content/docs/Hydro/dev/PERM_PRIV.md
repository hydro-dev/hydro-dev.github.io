---
title: 权限节点
---

Hydro 的权限使用位运算处理。  
例：若某用户具有 `PRIV_EDIT_SYSTEM` 与 `PRIV_SET_PERM` 权限，应设置为 `(1<<0)|(1<<1)` （即 3）

可以看 [代码](https://github.com/hydro-dev/Hydro/blob/master/packages/common/permission.ts) 中关于此部分的内容。

扩展阅读：[权限结构](../user/permission)
