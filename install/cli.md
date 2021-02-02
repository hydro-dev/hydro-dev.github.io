# Hydro Cli

:::tip
在使用 cli 之前，请完成数据库配置。
:::

cli 用于访问一些暂未对 web 端开放的功能，以下是几个例子。

```sh
# 创建用户
hydrooj cli user create [mail] [uname] [password] [uid] (regip)
# 设置为超级管理员
hydrooj cli user setPriv [uid] -1
```

这里的权限可参照[此处](/dev/PERM_PRIV.html)设置。