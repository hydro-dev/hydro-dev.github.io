# 初始化

安装完成后请先重启 bash。（关闭终端重新打开或是重新连接 ssh）  
请尝试通过 `http://服务器ip:8888/` 访问 Hydro 并注册一个账号。  
若您无法访问，请检查服务器防火墙/安全组是否放行了 8888 端口。  

注册账号后，请在右上角下拉菜单找到个人信息页，在个人信息页用户名后有显示用户的 UID。  
在终端以 root 用户运行以下命令将用户设置为管理员：  

<CodeGroup>
<CodeGroupItem title="常规部署" active>

```sh
hydrooj cli user setSuperAdmin UID
```

</CodeGroupItem>
<CodeGroupItem title="开发者模式">

```sh
# 请在 Hydro 的安装文件夹内运行该命令
npx hydrooj cli user setSuperAdmin UID
```

</CodeGroupItem>
</CodeGroup>

之后刷新页面，您应当能在导航栏看到控制面板入口。  
进入控制面板，右侧进入系统设置，填写如下内容：  

- Server Name: 您的 OJ 的名称。  
- Server BaseURL: 网站完整的 URL，需要以 `/` 结尾。（重要，务必正确填写）  
- Server Port: Hydro 监听的端口。
- IP Header: 若使用反向代理（含 Cloudflare 等 CDN 服务），请设置为其 IP Header（通常为 `x-forwarded-for` 或 `x-real-ip`，小写）。在不使用反向代理的情况下请勿配置该项，否则用户将可以伪造 IP 。
- Default display language: 网站默认语言。  

:::tip
建议您完整浏览所有设置项并按需配置。（不知道是啥的别改，出问题了自行解决）
:::
