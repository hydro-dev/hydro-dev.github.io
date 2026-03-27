---
title: 现场赛指南
---

## 外榜

对于 XCPC 赛制，安装 `@hydrooj/scoreboard-xcpcio` 插件后，您可以在设置中找到 scoreboard-xcpcio.publish 选项，配置外榜的自动推送。  

domainId 和 contestId 指向您希望导出外榜的比赛， publishToken 填写任意随机字符串（防止他人覆盖），publishPath 为外榜的路径，支持字母+数字。  
publishEndpoint 填写 `https://scoreboard.hydrooj.com/_publish`，设置完成后重启服务器，对应比赛的外榜会同步到 `https://scoreboard.hydrooj.com/设置的publishPath` （需要保证赛时服务器网络连接畅通）。

## 滚榜

安装 `@hydrooj/onsite-toolkit` 插件后，您能在赛后导出比赛的 cdp 包，下载并解压，打开 [https://resolver.hydrooj.com](https://resolver.hydrooj.com) ，选择解压后的 ndjson 文件所在的目录，在选项中关闭 JudgingQueue，关闭校徽显示，打开用户头像显示即可开始滚榜。  
快捷键：

- 鼠标左键/方向右/方向下/空格：步进
- `R`：重开
- `A`：自动
- `[` / `]`：调速
- `Ctrl + 方向右`：快进

## 选手机，气球，打印

参照 [XCPC-Tools](../../Tools)
