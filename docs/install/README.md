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
### 关于 CentOS
CentOS 8 [已于 2021-12-31 停止支持](https://www.centos.org/centos-linux-eol/)，Hydro 也不再对该系统提供兼容性测试。  
考虑到 CentOS 的内核过于老旧，我们推荐您切换到纯净的 Ubuntu20.04 系统来避免潜在的安全性问题。
:::

:::tip
兼容性说明：自动安装脚本将会在您的机器上安装 
[MongoDB](https://www.mongodb.com/try/download/community)、
[MinIO](https://min.io/download)、
[NodeJS](https://nodejs.org/en/download/)。
如果您的机器上已经安装过上述软件，建议您重置该系统或是参考安装脚本内容自行完成 Hydro 安装。  
同时，Hydro 需要以下端口： 8888, 9000, 5050, 27017，请确保这些端口空闲。  
**安装和安装后的所有操作均需要在 root 权限下进行！（`sudo su`）**。
**请不熟悉 Hydro 架构的用户务必使用自动安装脚本部署**。  
**非常不建议您在生产环境使用宝塔面板。**  
:::

:::tip
自动安装脚本目前支持除 CentOS 以外的大部分 x64 Linux 发行版。推荐使用 `Ubuntu 20.04`。  
:::

:::warning
**请注意！ 由于 Let's Encrypt 根证书更新，可能会出现证书校验失败的问题，请先使用 `apt-get upgrade openssl -y` 更新 `openssl` 版本后继续操作！若更新中出现弹框，全部按照默认选择回车确认即可**
:::

运行下面的脚本，等待几分钟即可：

```sh
LANG=zh bash <(curl https://hydro.ac/install.sh)
```

脚本默认使用的为清华大学镜像。  
安装完成后，请查看 [初始化](/docs/install/init)

### 开发环境部署

参考 [开发环境部署](/dev/)。
