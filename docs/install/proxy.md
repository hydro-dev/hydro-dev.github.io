# 反向代理 / SSL 配置

### 2022/10/27 后使用脚本安装的实例已自动配置 caddy 反向代理，请直接编辑位于 `~/.hydro/Caddyfile` 的配置文件！

:::warning
若使用反向代理，请注意将 Hydro 设置的 X-Host header 配置正确（参照下方样例配置）。  
X-Forwarded-Host 配置错误会导致用户无法登录等问题。(CsrfTokenError)  
X-Forwarded-For 配置错误会导致无法记录用户IP。

使用 `hydrooj cli system set server.xhost x-forwarded-host` 指定自定义 Host header。

若您使用 Nginx，请注意配置 WebSocket 协议的反向代理。
:::

Hydro 支持使用 Caddy, HaProxy 等工具进行反向代理，[此处](https://github.com/hydro-dev/Hydro/tree/master/examples/reverse_proxy) 提供了一些配置样例。

Hydro 推荐您使用 [Caddy](https://caddyserver.com/)。以下为样例 Caddyfile。
提示：如果您的服务器位于国内，则需要进行备案后才能使用 80 和 443 端口。

```
hydro.ac {
  reverse_proxy http://localhost:8888 {
    header_up x-forwarded-host hydro.ac
  }
}
```
