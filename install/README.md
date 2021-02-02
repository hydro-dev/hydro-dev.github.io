# 自动安装

:::tip
自动安装脚本将会在您的机器上安装 MongoDB、MinIO、NodeJS。如果您的机器上已经安装过上述软件，无法保证脚本一定能成功运行。此时建议采用 [常规安装](/install/common.html)。  
若您希望在另外位置运行 MongoDB、S3 服务，您也应该使用 [常规安装](/install/common.html)。
:::

## 运行脚本

请选择适合您的服务器系统的自动安装脚本。**您不应该在中途关闭脚本或是多次运行脚本**，这可能会带来不可预料的后果。

```sh
curl -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-1604.sh | bash # ubuntu 16.04
curl -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-1804.sh | bash # ubuntu 18.04
curl -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-2004.sh | bash # ubuntu 20.04
# 下方脚本未测试有效性，请尽量避免使用
curl -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/centos-7.sh | bash # centos 7
```

如果您需要更改数据目录等设置，可以将自动安装脚本下载到本地并编辑后再运行。

默认的数据目录在 `/data/db` 与 `/data/file` 下，Hydro将会监听8888端口，将会使用pm2管理进程。

## 使用 pm2 守护程序

- 重启Hydro： `pm2 restart hydrooj`
- 重启数据库：`pm2 restart mongodb`
- 重启沙箱：`pm2 restart sandbox`
- 设置开机自启：`pm2 save && pm2 startup`

完成后请前往 [初始化](/install/init.html)。