# 排障指南

进入服务器控制台，使用 `pm2 ls` 查看当前运行的进程列表。  
在正常情况下，应当有四个进程在运行，分别是 `hydrooj`、`hydro-sandbox`、`mongodb` 和 `caddy`。  
若进程缺失，请 `pm2 stop all` 后 `pm2 del all` 再重新运行安装脚本。

检查各个进程是否已经启动（ status 为 online 且 uptime 至少一分钟）

如果 caddy 无法启动，通常是端口被占用或 `~/.hydro/Caddyfile` 配置错误，可尝试 `cd ~/.hydro && caddy run` 查看详情。  
如果 hydro-sandbox 无法启动，通常是权限不足 / 内核版本过低，使用 `pm2 logs hydro-sandbox --lines 100` 查看详情。
如果 hydrooj 无法启动 / 启动后没有正常运行，请看下方章节。

## hydrooj

`pm2 stop hydrooj` 关闭后直接使用 `hydrooj` 参数可让 Hydro 在前台运行，便于查看日志。 

1. 尝试更新到最新版本，检查是否能正常使用。  
2. `cp ~/.hydro/addon.json ~/.hydro/addon.json.bak` 备份插件列表。  
3. `hydrooj addon list` 查看插件列表，并使用 `hydrooj addon remove 名称` 禁用所有非官方提供的插件（即不含 `@hydrooj/` 前缀的插件）  
4. 重启检查是否正常运行。  
5. 否则按顺序尝试加载刚刚禁用的插件，检查是否出现异常，联系对应插件提供方解决。  

## 前端异常

指前端页面无法加载（持续转圈或是左下角黄色 / 红色错误提示）

1. 使用 `Ctrl+Shift+Delete` 清除浏览器缓存再试。  
2. 更新 chrome 浏览器至最新版尝试。  
3. 同上，尝试禁用第三方插件。  
3. 如果问题仍未解决，打开 F12 开发者控制台，转到 `Console` (控制台) 标签页，查看是否有报错信息。  
4. 打开 `Network` (网络) 标签页，查看是否有请求失败的情况。  
5. 加群反馈，附上上述截图。