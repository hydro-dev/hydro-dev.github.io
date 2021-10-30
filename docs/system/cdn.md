# 使用内容分发网络

缓存设置可以参考以下设置

| 类型     | 内容                | 缓存行为 |
| -------- | ------------------- | -------- |
| 全部文件 | 全部文件            | 遵循源站 |
| 文件后缀 | jpg,js,html,png,css | 缓存一天 |

同时设置添加回源HTTP请求头

| 头部参数      | 头部取值                              |
| ------------- | ------------------------------------- |
| X-Forward-For | 用户来源IP（腾讯云中为 `$client_ip`） |

且您应当修改系统设置中的`server.xff`值为`X-Forwarded-For`，该设置是为了能够让系统正确获取到用户的IP地址

您也可以选择只有静态文件使用CDN，只需在控制面板中将 cdn_prefix 设置项修改为 CDN 域名。（如 `https://cdn.hydro.ac/` ）。  



:::tip
您可以使用 `https://cdn.jsdelivr.net/npm/@hydrooj/ui-default@[version]/public/` 作为 CDN 地址。  
（请替换 `[version]` 为您本地安装的 `ui-default` 插件版本）  
不过由于在中国大陆访问 jsdelivr 的速度较慢，该 CDN 仅能帮助服务器减少一定的网络压力。  
:::
