# 开发环境部署

## 安装依赖

:::warning
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

## 安装 Hydro

```sh
yarn global add npx # 安装 npx 工具
git clone https://github.com/hydro-dev/Hydro.git /root/Hydro --recursive # 下载至 /root/Hydro 文件夹
cd /root/Hydro # 进入工作目录
yarn install # 安装依赖包
yarn build # 编译后端
yarn build:ui:production # 编译前端
```

## 启动 Hydro

支持如下启动参数：

- `--port=8888` 指定启动端口  
- `--debug` 启用开发模式  
- `--ignorelock` 忽略 lockfile（不建议）  

您可以在后台运行 `yarn build:watch`，这将对后端源码进行实时转译，可在反复修改时节省编译时间。  
您可以在后台运行 `yarn build:ui:dev`，这将对前端源码进行实时转译，可在反复修改时节省编译时间。  
您可以使用 `yarn debug --port=2333` 启动 Hydro，配合上述两个命令同时使用，您可以在 2333 端口访问到 Hydro 实例，且前端的任何更改将即时生效。（更改后端代码后仍需要重启 Hydro 才能生效）  

首次启动会要求您填写数据库连接信息。请根据您数据库的安装填写（若无密码则留空）  
出现 `Storage init fail` 提示是正常现象。请按照下文说明创建管理员账户，在系统设置的 file 部分填写 S3 服务的连接信息后重启 Hydro 即可正常使用。

## 更新

需要更新的时候进入对应仓库文件夹执行 `git pull`，然后重新 `yarn install && yarn build && yarn build:ui:production` 即可。
