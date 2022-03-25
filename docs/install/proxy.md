# 反向代理

:::warning
若使用反向代理，请注意将 Hydro 设置的 X-Host header 配置正确（参照下方样例配置）。  
X-Real-Host 配置错误会导致用户无法登录等问题。(CsrfTokenError)  
X-Real-Ip 配置错误会导致无法记录用户IP。

使用 `hydrooj cli system set server.xhost x-real-host` 指定自定义 Host header。
:::

Hydro 可以直接监听 80/443 端口以提供服务，但是当您的服务器上需要同时运行多个 Web 服务时可能会发生端口冲突。  
此时可以使用 Nginx, HaProxy, Caddy 等工具进行反向代理，[此处](https://github.com/hydro-dev/Hydro/tree/master/examples/reverse_proxy) 提供了一些配置样例。

Hydro 推荐您使用 [Caddy](https://caddyserver.com/)。以下为样例 Caddyfile。
提示：如果您的服务器位于国内，则需要进行备案后才能使用 80 和 443 端口。

```
hydro.ac {
  reverse_proxy http://localhost:8888 {
    header_up x-real-ip {remote_host}
    header_up x-real-host hydro.ac
  }
}
```

:::warning
若您使用 Nginx，请注意配置 WebSocket 协议的反向代理。
:::

## SSL配置

在 reverse_proxy 前加上 tls 和域名的证书(crt) 、密钥(pem)的路径。  
如果没有 SSL 证书，则在 tls 后方加上邮箱，Caddy会自动帮您申请证书，**申请 SSL证书前，请务必提前解析好域名记录(解析后最好等一会)**，否则 Caddy会申请并配置失败！  
以下为样例 Caddyfile  

```
hydro.ac {
  tls youremail@domain.com
  reverse_proxy http://localhost:8888 {
    header_up x-real-ip {remote_host}
    header_up x-real-host hydro.ac
  }
}
```



```
hydro.ac {
  tls /etc/ssl/hydro.ac.crt /etc/ssl/hydro.ac.pem
  reverse_proxy http://localhost:8888 {
    header_up x-real-ip {remote_host}
    header_up x-real-host hydro.ac
  }
}
```

