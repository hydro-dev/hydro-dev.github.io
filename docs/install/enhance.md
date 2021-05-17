# 进阶配置

## 反向代理

:::warning
若使用反向代理，请注意将 Hydro 设置的 X-Host header 配置正确（参照下方样例配置）。  
X-Real-Host 配置错误会导致用户无法登录等问题。  
X-Real-Ip 配置错误会导致无法记录用户IP。
:::

在前面我们指定让 Hydro 直接监听固定端口，但是当您的服务器上需要同时运行多个 Web 服务时可能会发生端口冲突。  
此时可以使用 Nginx, HaProxy, Caddy 等工具进行反向代理，[此处](https://github.com/hydro-dev/Hydro/tree/master/examples) 提供了一些配置样例。

:::warning
若您使用 Nginx，请注意配置 WebSocket 协议的反向代理。
:::
