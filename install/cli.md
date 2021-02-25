# Hydro Cli

:::tip
在使用 cli 之前，请完成数据库配置。
:::

cli 用于访问一些暂未对 web 端开放的功能，以下是几个例子。

## 创建用户

运行下面的命令创建用户。

```sh
hydrooj cli user create [mail] [uname] [password] [uid] (regip)
```

:::tip
使用 cli 创建完用户后您可以直接登录 Hydro。
:::

## 设置用户权限

如下面的命令可以将用户设置为全站管理员。

```sh
hydrooj cli user setPriv [uid] -1
```

更多的权限可参照 [此处](/dev/PERM_PRIV.html) 设置。

## 创建评测账号

先是创建一个账号。这里令评测账号的邮箱为 `judge@hydro.local`，用户名为 `judge`，密码为 `abc123`，uid 为 `-2`。可以根据个人需要调整。

```sh
hydrooj cli user create judge@hydro.local judge abc123 -2 # mail username password uid
```

然后给予该账号评测权限。

```sh
hydrooj cli user setJudge -2
```

完成后将配置的用户名及密码写入评测机配置文件，评测机即可连接到网页端。