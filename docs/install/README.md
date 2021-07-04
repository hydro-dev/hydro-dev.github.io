# 部署 Hydro

本页面将指导您部署 Hydro。 请根据您的实际情况选择。

- [我不了解 Linux，我希望能够快速完成搭建，并且我不在意服务器的位置](#使用域功能快速起步)  
- [我会基本的 Linux 操作，希望将其部署在本地服务器或自己的云服务器上](#快捷部署)  
- [我熟悉 Linux 操作并希望修改部分源代码/添加功能](#开发者模式)  
- 我有其他需求希望 Hydro 开发组有偿协助解决 [<联系我们>](/#联系我们)  

这里提供了几套方案帮助您建立自己的站点，请选择适合您的方案并继续。  
搭建过程中如果遇到问题欢迎 [联系我们](/#联系我们) 提问。  

## 使用域功能快速起步

您可以在 [Hydro 官方站](https://hydro.org.cn/) 上建立您的域。  
注册用户后，在右上角下拉菜单找到 “我的域”，选择 “创建域” 即可。  
创建域后，您可以在“管理域”一栏中更改角色与权限组等。  

## 快捷部署

- [我还没有选购服务器，并希望获得相关推荐](#服务器选择)  
- [我已购买云服务器或是准备好了本地服务器](#使用服务器搭建)  

## 服务器选择

不同服务商提供的 CPU 主频不同，下方数据仅供参考。  

最低服务器配置： CPU: 1核 内存: 1G 硬盘: 20G。（约可允许50人同时使用）  
推荐服务器配置： CPU: 1核 内存: 2G 硬盘: 30G。（约可允许150人同时使用）  
**请不要使用突发性能实例或共享型实例，这会导致评测时间计量极不准确。**  

## 使用服务器搭建

将引导您使用自动安装脚本安装 Hydro。  
下方所有操作均要求您使用 root 用户进行。  

:::tip
Hydro 与宝塔面板不兼容。若您已安装，请先卸载。  
自动安装脚本将会在您的机器上安装 MongoDB、MinIO、NodeJS。如果您的机器上已经安装过上述软件，建议您重置该系统或是进行 [常规安装](/install/common.html)。  
:::

```sh
wget https://s3.undefined.moe/public/install -O install && chmod +x install && ./install
```

- [安装已完成，未发生错误](#初始化)  
- 安装过程中出现了错误 [<联系我们>](/#联系我们)  

## 开发者模式

**安装依赖**

:::warning
不建议在 Windows 下安装 Hydro。  
CentOS 的内核版本过于老旧，可能会导致沙箱安全性问题。  
:::

- MongoDB：Hydro 需要 [MongoDB](https://www.mongodb.com/try/download/community) 提供数据库服务。  
- S3：可使用 [MinIO](https://min.io) 提供 S3 服务。  
- NodeJS：请安装 NodeJS >=14 版本。（勿使用 apt 安装 nodejs） （推荐使用 [nvm](https://nvm.sh/)）  
- yarn：安装 yarn 前请先完成 NodeJS 安装。 `npm install -g yarn`  

:::tip
腾讯COS、Amazon S3、wasabi 等也可提供 S3 服务。  
暂不支持阿里OSS。
:::

**安装Hydro**

```sh
yarn global add npx # 安装 npx 工具
git clone https://github.com/hydro-dev/Hydro.git /root/Hydro --recursive # 下载至 /root/Hydro 文件夹
cd /root/Hydro # 进入工作目录
yarn install # 安装依赖包
yarn build # 编译后端
yarn build:ui:production # 编译前端
```

**开发者模式指南**

支持如下启动参数：

- `--port=8888` 指定启动端口  
- `--debug` 启用开发模式  
- `--ignorelock` 忽略lockfile（不建议）  

您可以在后台运行 `yarn build:watch`，这将对后端源码进行实时转译，可在反复修改时节省编译时间。  
您可以在后台运行 `yarn build:ui:dev`，这将对前端源码进行实时转译，可在反复修改时节省编译时间。  
您可以使用 `yarn debug --port=2333` 启动 Hydro，配合上述两个命令同时使用，您可以在 8000 端口访问到 Hydro 实例，且前端的任何更改将即时生效。（更改后端代码后仍需要重启 Hydro 才能生效）  

首次启动会要求您填写数据库连接信息。请根据您数据库的安装填写（若无密码则留空）  
出现 `Storage init fail` 提示是正常现象。请按照下文说明创建管理员账户，在系统设置的 file 部分填写 S3 服务的连接信息后重启 Hydro 即可正常使用。

## 初始化

安装完成后请先重启 bash。（若您不会操作也可以重启服务器）  
请尝试通过 `http://服务器ip:8888/` 访问 Hydro 并注册一个账号。  
若您无法访问，请检查服务器防火墙/安全组是否放行了 8888 端口。  

注册账号后，请在右上角下拉菜单找到个人信息，记住页面所显示的 UID。  
在终端以 root 用户运行以下命令将用户设置为管理员：  

<CodeGroup>
<CodeGroupItem title="常规部署" active>

```sh
hydrooj cli user setSuperAdmin UID
```

</CodeGroupItem>
<CodeGroupItem title="开发者模式">

```sh
# 请在 Hydro 的安装文件夹内运行该命令
npx hydrooj cli user setSuperAdmin UID
```

</CodeGroupItem>
</CodeGroup>

之后刷新页面，您应当能在导航栏看到控制面板入口。  
进入控制面板，右侧进入系统设置，填写如下内容：  

- Server Name: 您的 OJ 的名称。  
- Server BaseURL: 网站完整的 URL，需要以 `/` 结尾。（重要，务必正确填写）  
- Server Port: Hydro 监听的端口。
- IP Header: 若使用反向代理（含 Cloudflare 等 CDN 服务），请设置为其 IP Header（通常为 `x-forwarded-for` 或 `x-real-ip`，小写）。在不使用反向代理的情况下请勿配置该项，否则用户将可以伪造 IP 。
- Default display language: 网站默认语言。  

:::tip
建议您完整浏览所有设置项并按需配置。（不知道是啥的别改，出问题了自行解决）
:::

Hydro 系统会不定期发布更新。

<CodeGroup>
<CodeGroupItem title="常规部署" active>

```sh
yarn global upgrade-interactive --latest
```

</CodeGroupItem>
<CodeGroupItem title="开发者模式">

```sh
# 请在 Hydro 的安装文件夹内运行该命令
git pull # 拉取更新
yarn build # 编译后端
yarn build:ui:production # 编译前端
```

</CodeGroupItem>
</CodeGroup>
