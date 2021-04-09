# 进阶配置

## 更新系统

Hydro 系统会不定期发布更新。您可以使用 `yarn global upgrade-interactive --latest` 来检测并进行更新。

## 反向代理

在前面我们指定让 Hydro 直接监听固定端口，但是当您的服务器上需要同时运行多个 Web 服务时可能会发生端口冲突。  
此时可以使用 Nginx, HaProxy, Caddy 等工具进行反向代理，[此处](https://github.com/hydro-dev/Hydro/tree/master/examples) 提供了一些配置样例。

:::warning
若您使用 Nginx，请注意配置 WebSocket 协议的反向代理。
:::
