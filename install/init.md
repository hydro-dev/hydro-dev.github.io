# 初始化

## 反向代理

您可以直接让 Hydro 监听 80 端口，但是我们仍推荐您使用反向代理。

具体配置可参考 [此处](https://github.com/hydro-dev/Hydro/tree/master/examples)。

---

:::tip
如果您在前面使用自动安装脚本部署了 Hydro，则您可以跳过下面的初始化部分。
:::

## 连接数据库

第一次进入您的网站时您会看到数据库初始化界面，填写您部署的 MongoDB 的信息即可。

## 创建全站管理员账户

全站管理员对 Hydro 享有全部的权限。出于安全考虑，您无法在网页端修改全站管理员。

请参考 [Hydro cli](/install/cli/) 创建全站管理员账户，或是修改已有用户为全站管理员。

## 登陆网站后

以全站管理员身份登陆后，您需要进入 控制面板>系统设置 以进行一些配置，我们已经对一些必须要进行配置的内容做上了记号。

setting_file： S3 配置，可参考 [S3 配置方法](/install/enhance/s3)。（必须要配置）  
SMTP 设置： 邮件发送配置，可参考 [SMTP](控制面板>系统设置)。  
服务器设置：  
&nbsp;&nbsp;&nbsp;&nbsp;Server Name: 您的 OJ 的名称。  
&nbsp;&nbsp;&nbsp;&nbsp;Server Workers Number: Hydro 前端的进程数。推荐设置到 CPU 核心数或是核心数 -1。
&nbsp;&nbsp;&nbsp;&nbsp;Server Hostname: 网站不带端口的域名。  
&nbsp;&nbsp;&nbsp;&nbsp;Server Host: 网站带端口的域名。（如果有）  
&nbsp;&nbsp;&nbsp;&nbsp;Server BaseURL: 网站完整的 URL，需要以 `/` 结尾。（会影响到注册邮件里展示的域名，建议配置）  
&nbsp;&nbsp;&nbsp;&nbsp;CDN Prefix: CDN URL 的前缀。可参考 [使用内容分发网络](/install/cdn.html)。  
&nbsp;&nbsp;&nbsp;&nbsp;Server Post: 您的网站在服务器上的端口。  
&nbsp;&nbsp;&nbsp;&nbsp;IP Header: 如果您需要跟踪用户登录 IP，则需要设置为 `x-forwarded-for`。  
&nbsp;&nbsp;&nbsp;&nbsp;Default display language: 网站默认语言。  
Session 设置： 关于 Session 到期时间等内容的配置，一般不需要更改。

---

到这里时 Hydro 的初始化已经结束，您已经可以在 Hydro 上进行大部分常规操作了。接下来您可以选择性阅读余下的部分，已完成剩下的非必要配置。