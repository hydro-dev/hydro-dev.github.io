# 使用内容分发网络(CDN)

Hydro 目前仅支持对 Javascript 和 CSS 使用 CDN 加速，即 API 和动态加载的组件依然会从源主机请求。  
配置很简单，只需在控制面版中将 cdn_prefix 设置项修改为 CDN 域名即可。（如 `https://cdn.undefined.moe/` ）。
