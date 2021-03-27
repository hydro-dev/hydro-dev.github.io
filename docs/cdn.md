# 使用内容分发网络(CDN)

## 仅对资源文件进行 cdn 加速

配置很简单，只需在控制面版中将 cdn_prefix 设置项修改为 CDN 域名即可。（如 `https://cdn.undefined.moe/` ）。  
提示：您可以使用 `https://cdn.jsdelivr.net/npm/@hydrooj/ui-default@[version]/public/` 作为CDN地址。  
（请替换 `[version]` 为您本地安装的 `ui-default` 插件版本）

## 全站 cdn 加速

将 cdn 的上游服务器链接到 Hydro 并修改 server.url 即可。
