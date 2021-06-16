# 常见问题

## 如何重启 Hydro？

```bash
pm2 restart hydrooj
```

## Hydro 的文件存放在何处？

数据库存储于 `/data/db`  
测试数据等文件存储于 `/data/file`

## 如何关闭用户注册？

用户注册由 Guest 用户（uid为0）的 PRIV_REGISTER_USER 权限控制，使用 `hydrooj cli user setPriv 0 0` 关闭即可。

## 如何重置数据？

:::warning
此操作会删除所有用户/题目/比赛等数据。请谨慎操作！
:::

此工具仅对使用一键安装脚本的用户有效。  

运行 [此处](https://github.com/hydro-dev/Hydro/blob/master/install/reset.sh) 脚本即可。

## 如何像 SYZOJ 一样在首页显示用户排名？

在系统设置中找到 `hydrooj` 分类中的首页设置，其格式如下：

```yaml
contest: 5 # 显示最近五场比赛
homework: 10 # 显示最近十个作业
training: 10 # 显示最新的十个训练
discussion: 20 # 显示最新的二十个讨论
ranking: 50 # 显示排名前五十的用户
```

您可按需更改，显示顺序与配置中的排列顺序相同。
