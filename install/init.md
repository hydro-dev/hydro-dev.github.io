# 初始化

## 连接数据库

:::tip
如果您在前面使用自动安装脚本部署了 Hydro，则数据库已被自动连接。
:::

第一次进入您的网站时您会看到数据库初始化界面，填写您部署的 MongoDB 的信息即可。

## 创建全站管理员账户

全站管理员对 Hydro 享有全部的权限。出于安全考虑，您无法在网页端修改全站管理员。  
请参考 [Hydro cli](/install/cli/) 创建全站管理员账户，或是修改已有用户为全站管理员。

## 登陆网站后

以全站管理员身份登陆后，您需要进入 控制面板>系统设置 以进行一些配置。一般来说您需要配置下面的每一项。

- setting_file： S3 配置，可参考 [S3 配置方法](/docs/system-settings/#远程-s3)。  
- SMTP 设置： 邮件发送配置，可参考 [SMTP](/docs/system-settings/#smtp)。  
- 服务器设置：  
  - Server Name: 您的 OJ 的名称。  
  - Server Workers Number: Hydro 的工作进程数，默认为 1（最稳定），不建议超过 CPU 核心数量。
  - Server Hostname: 网站不带端口的域名。（如果域名本身不带端口则此项与 Server Host 相同）
  - Server Host: 网站带端口的域名。
  - Server BaseURL: 网站完整的 URL，需要以 `/` 结尾。  
  - CDN Prefix: CDN 的目录路径，可以为 `//aaa.com/xxx`、`/xxx/`、`https://xxx/` 甚至 `./xxx/`，需要以 `/` 结尾。具体配置可参考 [使用内容分发网络](/docs/cdn/)。
  - Server Port: 您的网站在服务器内部的端口。
  - IP Header: 如果您的网站使用了反向代理（含 Cloudflare 等 CDN 服务），请设置为其的 IP Header（通常为 `x-forwarded-for` 或 `x-real-ip`，全部转为小写）。在不使用反向代理的情况下请勿配置该项，否则用户将可以伪造 IP 。
  - Default display language: 网站默认语言。  

## 评测机

:::tip
如果您使用了自动安装脚本，则内置评测机已被自动安装。（您可能仍需根据需求安装相应的编译器）
:::

关于评测机的部署请参照 [hydrojudge 说明](/plugins/hydrojudge/)。

---

到这里时 Hydro 的初始化已经结束，您已经可以在 Hydro 上进行大部分常规操作了。接下来您可以选择性阅读余下的部分，并完成剩下的非必要配置。
