# 常规部署

:::warning
不建议在 Windows 下安装 Hydro。  
CentOS 的内核版本过于老旧，可能会导致沙箱安全性问题。  
:::

这里将为您展示如何手动部署 Hydro。

## MongoDB

Hydro 需要 [MongoDB](https://www.mongodb.com/try/download/community) 提供数据库服务。

## S3

:::tip
如果您希望采用其他方式来提供S3服务（如 腾讯云COS、Amazon S3、wasabi 等），请跳过此步。
:::

:::warning
由于阿里云OSS 仅支持 Virtual hosted style，目前无法使用阿里云OSS 为 Hydro 提供存储服务。
:::

推荐使用 [MinIO](https://min.io) 在本机上为 Hydro 提供 S3 服务。

## NodeJS

建议使用 nvm 安装 NodeJS。

[Linux](https://nvm.sh/) [Windows](https://github.com/coreybutler/nvm-windows)

您也需要安装 yarn。

```sh
npm install -g yarn
```

## Hydro

在进行此步前，您应该确保已经完成上述步骤，然后可以运行下面的指令安装 Hydro。

```sh
npm install yarn -g
yarn global add hydrooj @hydrooj/ui-default
```

## 运行 Hydro

:::tip
请注意在您的服务器的防火墙/安全组中放通对应端口。
:::

您可以使用下面的指令运行 Hydro，Hydro 将会自行初始化并监听 8888 端口。

```sh
hydrooj
```

您也可以同时使用下面的附加参数。

- `--port=8888` 指定启动端口
- `--debug` 启用开发模式
- `--ignorelock` 忽略lockfile（不建议）
- `--ui=/path/to/ui` 使用指定文件夹下的 UI
- `--template=/path/to/template` 使用指定文件夹下的页面模板（不进行缓存）
- `--public=/path/to/public` 使用指定文件夹的 public 目录

## 使用 pm2 守护程序

```sh
yarn global add pm2 # 安装pm2
pm2 startup # 开机自启
pm2 start hydrooj # 启动 Hydro
pm2 save # 保存
```

更多 pm2 操作可参考[此处](/install/auto/#使用-pm2-守护程序)

完成后可以前往[初始化](/install/init/)。
