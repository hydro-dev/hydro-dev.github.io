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

## 如何修改网站图标？

使用 `hydrooj addon create` 创建一个插件，这会自动创建 `/root/addon` 目录。  
进入 `/root/addon/public` 目录，将您的站点图标放置于该文件夹下。  
您需要将以下文件放在该目录中（适配不同浏览器）：

- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon-96x96.png`
- `favicon.ico` (32x32)
- `android-chrome-192x192.png`
- `apple-touch-icon-180x180.png`

分辨率应尽可能对应，但不强制要求。以上图片将在浏览器标签页图片上显示。  
您还需要将以下文件放在该目录：

- `nav_logo_dark.png`
- `nav_logo_dark_2x.png`

以上图片将在页面左上角 logo 显示。
之后前往系统设置，找到 `nav_logo_dark` 和 `nav_logo_dark_2x` 设置项，分别改为 `/nav_logo_dark.png` 和 `/nav_logo_dark_2x.png` ，重启 Hydro 即可应用更改。

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
