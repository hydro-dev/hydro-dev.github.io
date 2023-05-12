# 开发环境部署

如果您没有过 TypeScript 项目的开发经验，非常不建议自建开发环境。  
使用自动脚本安装也可以基于插件系统完成大部分的定制需求（参照左侧【使用 TypeScript 编写插件】章节）。  

您可以使用 [Gitpod](https://gitpod.io/#https://github.com/hydro-dev/Hydro) 快速打开配置完成的开发环境或是按照下方说明进行手动配置。（由于 Gitpod 的限制，hydrojudge 模块无法正常运行，若需要开发 hydrojudge 相关内容请自行部署）

## 安装依赖

- 系统要求：Hydro开发环境目前仅支持 Linux/Unix 系统，如您使用 Windows 请使用 WSL2 。
- MongoDB：Hydro 需要 [MongoDB](https://www.mongodb.com/try/download/community) 提供数据库服务。  
- NodeJS：请安装 NodeJS >=18 版本。（若使用 apt 请使用 nodesource 提供的源替代官方源） （推荐使用 nix ，可通过`. <(curl https://hydro.ac/nix.sh)` 快速安装）  
- yarn：安装 yarn 前请先完成 NodeJS 安装。 `npm install -g yarn`  

尽管这不是必须的，但文档多数区域使用了 `npx` 工具来调用工作区的程序。如果此命令不存在，你可以在 **Hydro 项目文件夹外**使用 `yarn global add npx` 安装它。

## 安装 Hydro

```sh
git clone https://github.com/hydro-dev/Hydro.git /root/Hydro --recursive # 下载至 /root/Hydro 文件夹
cd /root/Hydro # 进入工作目录
yarn # 安装依赖包
yarn build:ui:production # 编译前端
```

## 插件

开发环境部署完成后默认不启用任何插件。

所有官方插件均随源码仓库下载到安装文件夹的 `packages` 子文件夹下，可以通过下面的命令启用官方插件（以启用 `@hydrooj/ui-default` 为例）：

```sh
npx hydrooj addon add @hydrooj/ui-default
```

对于非官方插件，下载后通过下面的命令启用即可（以启用位置在 `/root/addon` 下的插件为例）：

```sh
npx hydrooj addon add /root/addon
```

## 启动 Hydro

支持如下启动参数：

- `--port=2333` 指定启动端口  
- `--debug` 启用开发模式  

您可以在后台运行 `yarn build:ui:dev`，这将对前端源码进行实时转译，并在 8000 端口启动 webpack-dev-server，可在反复修改时节省编译时间。  
您可以使用 `yarn debug --port=2333 --watch` 启动 Hydro，配合上述命令同时使用，您可以在 8000 端口访问到 Hydro 实例，且前端的任何更改将即时生效。（后端热重载可能存在 bug，部分模块修改后可能仍需重启才能生效）  

首次启动会要求您填写数据库连接信息。请根据您数据库的安装填写（若无密码则留空）  
请按照下文说明创建管理员账户即可正常使用。

## 更新

需要更新的时候进入对应仓库文件夹执行 `git pull`，然后重新 `yarn && yarn build:ui:production` 即可。
