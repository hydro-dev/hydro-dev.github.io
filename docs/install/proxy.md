# 反向代理 / SSL 配置

### 2022/10/27 后使用脚本安装的实例已自动配置 Caddy 反向代理，请直接编辑位于 `~/.hydro/Caddyfile` 的配置文件！

:::warning
若使用反向代理，请注意系统设置中的 server.xff 和 server.xhost 设置项需要填写正确（小写），分别对应反向代理所添加的标头名（通常为 x-forwarded-for 和 x-forwarded-host，部分反代工具会使用 x-real-ip 替代 x-forwarded-for）。  
server.xhost 设置项配置错误会导致用户无法登录等问题。(CsrfTokenError)  
server.xff 设置项配置错误会导致无法记录用户IP。

除一键安装脚本在安装 Caddy 后会自动配置设置项，其他工具请在使用工具前先配置好系统设置！否则将造成用户无法登录、无法记录用户IP等问题。

若您使用 Nginx，请注意配置 WebSocket 协议的反向代理，否则会导致评测状态无法自动刷新，在线 IDE 无法正常使用等问题。
:::

Hydro 支持使用 Caddy, HaProxy 等工具进行反向代理，[此处](https://github.com/hydro-dev/Hydro/tree/master/examples/reverse_proxy) 提供了一些配置样例。

Hydro 推荐您使用 [Caddy](https://caddyserver.com/)。以下为样例 Caddyfile。
提示：如果您的服务器位于国内，则需要进行备案后才能使用 80 和 443 端口。

```
hydro.ac {
  log {
    output file /data/access.log {
      roll_size 1gb
      roll_keep_for 72h
    }
    format json
  }
  root * /root/.hydro/static
  @static {
    file {
      try_files {path}
    }
  }
  handle @static {
    file_server
  }
  handle {
    reverse_proxy http://127.0.0.1:8888
  }
}
```
