# 初始化

## 创建全站管理员账户

全站管理员对 Hydro 享有全部的权限。出于安全考虑，您无法在网页端修改全站管理员。  
使用以下命令将用户设置为全站管理员：  
提示：uid 可在个人信息面板找到（通常系统搭建后注册的第一个用户 uid 为 2）  

```sh
hydrooj cli user setPriv uid -1
```

## 配置系统设置

请登录全站管理员账号，并点击导航栏的系统设置。在右侧进入系统设置，并正确填写以下内容：

- Server Name: 您的 OJ 的名称。  
- Server Workers Number: Hydro 的工作进程数，默认为 1（最稳定），不建议超过 CPU 核心数量。
- Server Hostname: 网站不带端口的域名。（如果域名本身不带端口则此项与 Server Host 相同）
- Server Host: 网站带端口的域名。
- Server BaseURL: 网站完整的 URL，需要以 `/` 结尾。  
- CDN Prefix: CDN 的目录路径，可以为 `//aaa.com/xxx`、`https://xxx/` 等合法 url，需要以 `/` 结尾。具体配置可参考 [使用内容分发网络](/docs/system/settings)。
- Server Port: 您的网站在服务器内部的端口。
- IP Header: 如果您的网站使用了反向代理（含 Cloudflare 等 CDN 服务），请设置为其的 IP Header（通常为 `x-forwarded-for` 或 `x-real-ip`，全部转为小写）。在不使用反向代理的情况下请勿配置该项，否则用户将可以伪造 IP 。
- Default display language: 网站默认语言。  

:::tip
建议您完整浏览所有设置项并按需配置。
:::

## 更新系统

Hydro 系统会不定期发布更新。您可以使用 `yarn global upgrade-interactive --latest` 来检测并进行更新。

---

到这里时 Hydro 的初始化已经结束，您已经可以在 Hydro 上进行大部分常规操作了。接下来您可以选择性阅读余下的部分，并完成剩下的非必要配置。
