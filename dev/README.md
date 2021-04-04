# 开发环境部署

## MongoDB、S3、NodeJS

请参考 [常规部署](/install/common.html) 完成 MongoDB、S3、NodeJS 的部署。

## 部署本地仓库

克隆 Hydro 至本地并初始化。  

```sh
yarn # 安装依赖
yarn build # 编译核心文件
yarn build:ui # 编译用户界面
```

## 启动

:::warn
若启用某些插件但没有正确配置可能导致部分功能工作异常。  
在您不了解某个插件的用法时，建议不要启用该插件。
:::

```sh
npx hydrooj # 以常规模式启动，使用 hydrooj addon 启用的插件列表
# 可使用 yarn global add npx 安装 npx 工具。
yarn start # 以常规模式启动，加载所有插件
yarn debug # 以调试模式启动，加载所有插件
```

[更多启动参数](/install/common.html#运行hydro)

## 更新

需要更新的时候进入对应仓库文件夹执行 `git pull`，然后重新 `yarn && yarn build && yarn build:ui` 即可。

## 开发

在本地仓库中修改代码时，可以在仓库根目录后台运行 `yarn build:watch`。  
这会实时编译您修改的文件，相比于 `yarn build` 可以节省更多时间。  
对于 ui 同理，您可以使用 `yarn build:ui:watch` 。

:::tip
推荐在本地另开命令行运行上面的指令，这样你可以实时获取一些调试信息。
:::
