---
title: 维护
---

## PM2

使用一键安装脚本安装的 Hydro 使用 PM2 对进程进行管理。

### 进程名称

可以通过下面的指令查看当前 PM2 正在管理的所有进程。

```sh
pm2 ls
```

一键安装脚本默认会创建下面几个进程：

- `hydrooj`： Hydro 主进程
- `hydro-sandbox`： Hydro 评测沙箱
- `mongodb`： MongoDB 数据库
- `caddy`： 反向代理

后文的指令中将用 `<name>` 替代此处的进程名称，用 `<id>` 替代进程 ID（进程 ID 可通过 `pm2 ls` 查看）。（尖括号同样需要替换）

### PM2 基本指令

```sh
pm2 ls # 查看进程列表
pm2 start <id> # 启动进程
pm2 stop <id> # 关闭进程
pm2 restart <id> # 重启进程
pm2 del <id> # 删除进程
pm2 log <id/name> --lines=100 # 查看该进程的后 100 行日志
pm2 attach <id> # 与进程交互
pm2 save # 保存对 PM2 进行的修改（在添加、修改、删除进程后需要执行该指令）
```

**在部分环境（常见于 lxc 容器或是精简版系统）下，服务器重启后 Hydro 可能不能正常自启动，这时可尝试使用下面命令，若还不行请使用 `pm2 resurrect` 手动载入进程列表。**

```
pm2 unstartup # 清除原来的服务
pm2 startup systemd -u root # 以 root 身份创建服务
```

**如果手动修改进程列表且已经覆盖掉保存的原列表，请使用 `pm2 stop all && pm2 del all` 清空所有进程之后重新运行安装脚本。原有数据不会丢失。**

Hydro 主进程同样支持多进程启动，但在中低端服务器（不超过4核）中没有必要使用多进程启动 Hydro，会降低性能且成倍提高内存占用。

```sh
pm2 start hydrooj -i <n> # 以 n 进程启动 Hydro 主进程
```

## 更新

Hydro 系统会不定期发布更新，可以使用下面的命令获取更新。

无特殊情况请 **不要更新PM2** ！此操作可能导致进程列表丢失！

```sh
yarn global upgrade-interactive --latest # 在交互式界面中选择想要更新的组件
pm2 restart hydrooj # 更新完后需重启 hydrooj
```

## 查看已安装版本

```
cd `yarn global dir` && yarn list --pattern hydrooj
```

## 清除缓存

```
yarn cache clean && nix-collect-garbage
```
