# 部署 Hydro

本页面将指导您部署 Hydro。  
这里提供了几套方案帮助您建立自己的站点，请选择适合您的方案并继续。  
搭建过程中如果遇到问题欢迎 [联系我们](/#联系我们) 提问。  

## 服务器选择

不同服务商提供的 CPU 主频不同，下方数据仅供参考。  
最低服务器配置： CPU: 1核 内存: 1G 硬盘: 20G。（约可允许 50 人同时使用）  
推荐服务器配置： CPU: 1核 内存: 2G 硬盘: 30G。（约可允许 150 人同时使用）  
**请尽量不要使用突发性能实例或共享型实例，这可能会导致评测时间计量不准确**

## 部署

### 自动安装脚本部署

:::warning
我们将会保证在用户网络良好的情况下自动安装脚本能够正常完成部署工作，我们不会帮助解决由用户网络造成的部署问题。  
自动安装脚本将会在您的机器上安装
[MongoDB](https://www.mongodb.com/try/download/community)、
[MinIO](https://min.io/download)、
[NodeJS](https://nodejs.org/en/download/)。
如果您的机器上已经安装过上述软件，建议您重置该系统或是参考安装脚本内容自行完成 Hydro 安装。  
**请不熟悉 Hydro 架构的用户使用自动安装脚本部署**，否则出现问题请用户自行解决。
:::

**安装和安装后的所有操作均需要在 root 权限下进行！（`sudo su`）**。

Hydro 主进程可以在 Windows、MacOS、Linux（需要内核版本 4.4+）上运行，不支持 WSL。  
评测组件 [hydrojudge](https://hydro.js.org/plugins/hydrojudge/) 无法在非 Linux 系统上运行。

自动安装脚本目前支持 `Ubuntu 16.04`、`Ubuntu 18.04`、`Ubuntu 20.04`、`Arch Linux`。  
推荐使用 `Ubuntu 20.04`。  
如果需要在其他操作系统上安装 Hydro，请尝试手动安装。

:::tip
由于自动安装脚本完成后网站将会监听 8888 端口，若您已安装宝塔面板或是其他占用 8888 端口的应用，请先卸载或将其切换至其他端口。  
**不建议您在生产环境使用宝塔面板。**  
如果安装过程中出现安装慢的情况，可以尝试更换国内源（如 [清华源](https://mirrors.tuna.tsinghua.edu.cn/)）。
:::

:::warning
**请注意！ 由于 Let's Encrypt 根证书更新，可能会出现证书校验失败的问题，请先使用 `apt-get upgrade openssl -y` 更新 `openssl` 版本后继续操作！若更新中出现弹框，全部按照默认选择回车确认即可**
:::

运行下面的脚本，等待几分钟即可：

```sh
LANG=zh bash <(curl https://hydro.ac/install.sh)
```

### 使用 Docker 安装

仅推荐熟悉 Docker 及 docker-compose 的用户使用。  
参照 https://github.com/hydro-dev/Hydro/blob/master/install/docker/README.md。

### 开发环境部署

参考 [开发环境部署](/dev/)。
