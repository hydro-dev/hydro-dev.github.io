---
title: 升级指南
---

`yarn global upgrade-interactive --latest` 然后按空格选中除 pm2 之外的所有包更新，回车确认。
然后 `pm2 restart hydrooj` 重启服务。
重启后 `pm2 logs hydrooj --lines 100` 没有看到报错并看到了 `Server started` 则一切正常。

Hydro 的所有历史版本，都可以无损升级到最新版本。如果老系统更新有疑问，随时加官方群咨询群主。

以下是升级过程中可能遇到的问题：

## 移除 nvm

在很早的版本中，Hydro 使用 nvm 管理 nodejs 环境，我们已经弃用这种结构，如果你的系统中有 nvm，可以 `rm -rf ~/.nvm` 移除；  
检查是否已经安装 nix 环境，如果没有的话请先使用 `. <(curl https://hydro.ac/nix.sh)` 安装 nix。  
使用 nix 重新安装 nodejs 环境： `nix-env -iA nixpkgs.nodejs nixpkgs.yarn nixpkgs.pm2`

## NodeJS >= xx required 报错如何处理？

先看上方 nvm 段落。

```bash
nix-channel --update
nix-env -iA nixpkgs.nodejs nixpkgs.yarn nixpkgs.pm2
# 继续升级操作
yarn global upgrade-interactive --latest
pm2 restart hydrooj --update-env
```

## Your sandbox version is tooooooo low!

```bash
nix-channel --update
nix-env -e hydro.sandbox && nix-env -iA nixpkgs.go-judge && ln -sf $(which go-judge) /usr/bin/hydro-sandbox
pm2 restart hydro-sandbox --update-env
```
