# 插件

Hydro 支持使用插件扩展自身所支持的功能。

:::warning
插件对站点的所有内容具有完全的访问权限，请不要启用来历不明的插件。
:::

## 附加组件列表

Hydro 官方目前提供了以下附加组件：

| ID                         | 描述                           |
| -------------------------- | ------------------------------ |
| @hydrooj/better-search     | 使用 jieba 优化题目搜索        |
| @hydrooj/ui-default        | Hydro 的默认用户界面            |
| @hydrooj/geoip             | GeoIP 支持，用于显示用户登录地 |
| @hydrooj/fps-importer      | 支持导入 fps 格式的题目          |
| @hydrooj/login-with-github | 允许用户使用 Github 登录         |
| @hydrooj/login-with-google | 允许用户使用 Google 登录         |
| @hydrooj/login-with-osu    | 允许用户使用 Osu 登录            |
| @hydrooj/login-with-qq     | 允许用户使用 QQ 登录             |
| @hydrooj/migrate-vijos     | 从 vijos4 的自动升级工具         |
| @hydrooj/hydrojudge        | 评测组件                       |
| @hydrooj/import-qduoj      | 导入 qduoj 导出的文件            |

大部分插件的配置均可在安装后于 控制面板>系统设置 中找到。

## 安装

先全局安装所需模块，再向 hydrooj 注册即可。例：安装 @hydrooj/geoip

```
yarn global add @hydrooj/geoip
hydrooj addon add @hydrooj/geoip
```

## 卸载

```sh
yarn global remove @hydrooj/geoip
hydrooj addon remove @hydrooj/geoip
```

