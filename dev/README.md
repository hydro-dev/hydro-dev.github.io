# 开发环境部署

## MongoDB、S3、NodeJS

请参考[常规部署](/common.html)完成 MongoDB、S3、NodeJS 的部署。

## 部署本地仓库

克隆[Hydro](https://github.com/hydro-dev/Hydro)和[ui-default](https://github.com/hydro-dev/ui-default)到本地。  
然后分别进入两个仓库，执行初始化

```sh
yarn
yarn build
```

## 启动

进入 Hydro 的本地仓库文件夹。

```sh
yarn debug --ui=/path/to/ui-default
```

[更多启动参数](/install/common.html#运行hydro)

这样你就可以访问到您的测试环境了。

## 更新

需要更新的时候进入对应仓库文件夹执行 `git pull` 即可。

## 开发

在本地仓库中修改代码时，可以在仓库根目录后台运行 `yarn build:watch`。  
这会实时编译您修改的文件，相比于 `yarn build` 可以节省更多时间。  

:::tip
推荐在本地另开命令行运行上面的指令，这样你可以实时获取一些调试信息。
:::