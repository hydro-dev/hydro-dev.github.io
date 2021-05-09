# 自动安装

使用自动安装脚本安装 Hydro。

:::warn
本教程中的所有操作均要求您使用 root 用户进行。
:::

:::tip
自动安装脚本将会在您的机器上安装 MongoDB、MinIO、NodeJS。如果您的机器上已经安装过上述软件，无法保证脚本一定能成功运行。此时建议采用 [常规安装](/install/common.html)。  
**建议您在不保证自己可以手动安装成功的情况下采用自动脚本安装。**  
若您希望在另外位置运行 MongoDB、S3 服务，您也应该使用 [常规安装](/install/common.html)。  
部分情况下脚本安装后可能会出现 `node: command not found` 的问题，可通过向 `~/.bashrc` 文件末尾添加以下内容并重启bash来解决：

```sh
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

:::

## 运行脚本

:::warning
Hydro 不推荐您使用宝塔面板。这可能导致自动安装脚本无法正常使用。请尽可能使用纯净的系统并保证：

- 8888 9000 27017 端口空闲  
- /data/file /data/db 目录为空
- 没有使用除 nvm 之外的工具安装过 NodeJS，没有安装过 MongoDB

:::

如果脚本运行过程中报错，欢迎 [联系我们](/#%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC) 报告该错误。

```sh
# 推荐使用新版安装工具（请切换到 root 用户运行）：
wget https://s3.undefined.moe/public/install -O install && chmod +x install && ./install

# 若新版工具无法正常使用，请从下方选择您对应系统的安装工具：
curl -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-1604.sh | bash # ubuntu 16.04
curl -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-1804.sh | bash # ubuntu 18.04
curl -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-2004.sh | bash # ubuntu 20.04
```

:::tip
请注意在您的服务器的防火墙/安全组中放通对应端口。安装后的操作均需要使用 root 用户执行。
<!-- TODO: 教程链接 -->
:::

默认的数据目录在 `/data/db` 与 `/data/file` 下，Hydro 将会监听 8888 端口，将会使用 pm2 管理进程。  
至此，如果一切正常，您应当可以正常访问 http://服务器ip:8888/ 。  
这时请重启 bash 来完成后面的操作。  

完成后请前往 [初始化](/docs/install/init.html)。
