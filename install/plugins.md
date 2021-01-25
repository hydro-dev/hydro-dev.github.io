# 插件

Hydro支持使用插件扩展自身所支持的功能。

> 插件对站点的所有内容具有完全的访问权限，请不要启用来历不明的插件。

## 附加组件列表

Hydro官方目前提供了以下附加组件：

| ID                         | 描述                           |
| -------------------------- | ------------------------------ |
| @hydrooj/better-search     | 使用 jieba 优化题目搜索        |
| @hydrooj/ui-default        | Hydro的默认用户界面            |
| @hydrooj/geoip             | GeoIP 支持，用于显示用户登录地 |
| @hydrooj/fps-importer      | 支持导入fps格式的题目          |
| @hydrooj/login-with-github | 允许用户使用Github登录         |
| @hydrooj/login-with-google | 允许用户使用Google登录         |
| @hydrooj/login-with-osu    | 允许用户使用Osu登录            |
| @hydrooj/login-with-qq     | 允许用户使用QQ登录             |
| @hydrooj/migrate-vijos     | 从vijos4的自动升级工具         |
| @hydrooj/hydrojudge        | 评测组件                       |
| @hydrooj/import-qduoj      | 导入qduoj导出的文件            |

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

## 评测机

> 如果您使用意见安装脚本，评测机已被自动安装，可以跳过此步。

在配置评测机之前，请确认您的站点已经可以访问并正常登录/注册。

您应该预先下载您所要支持的语言的编译器，若您在配置完评测机后 升级/重新安装 了编译器，您需要重新启动评测机。

前往 [criyle/go-judge](https://github.com/criyle/go-judge/actions) 下载 executorserver。

| 系统版本   | 文件名               |
| ---------- | -------------------- |
| Windows 7+ | executorserver.exe   |
| Linux 4.4+ | executorserver-amd64 |
| MacOS ?+   | executorserver-macos |

Executorserver需要在后台**以root权限**运行并监听 `127.0.0.1:5050` 。  
可使用 pm2 进行管理。

## 作为附加组件安装

安装 `@hydrooj/hydrojudge`。

```sh
yarn global add @hydrooj/hydrojudge
hydrooj addon add @hydrooj/hydrojudge
```

启动 Hydro
打开 **控制面板>系统设置** 找到 HydroJudge.Langs 设置项。  
在这里配置所需要的编程语言。（请确保已经安装所需的编译器/解释器）  
配置文件采用 yaml 语法。
保存，并于 **控制面板>系统概览** 中重载 Hydro。

## 作为独立进程安装

在 Hydro 中创建一个有 PRIV_JUDGE 权限的账户。  

```sh
hydrooj cli user create -2 judge@hydro.local judge 123456 # uid mail username password
hydrooj cli user setJudge -2
```

剩余部分参照 [HydroJudge说明](//github.com/hydro-dev/HydroJudge)。