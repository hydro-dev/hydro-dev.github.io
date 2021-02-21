# hydrojudge

:::tip
如果您使用一键安装脚本，评测机已经以附加组件的形式安装，可以跳过此步。
:::

## 准备

在配置评测机之前，请确认您的站点已经可以访问并正常登录/注册。

您应该预先下载您所要支持的语言的编译器，若您在配置完评测机后 升级/重新安装 了编译器，您需要重新启动评测机。

前往 [criyle/go-judge](https://github.com/criyle/go-judge/actions) 下载 executorserver。

| 系统版本   | 文件名               |
| ---------- | -------------------- |
| Windows 7+ | executorserver.exe   |
| Linux 4.4+ | executorserver-amd64 |
| MacOS ?+   | executorserver-macos |

Executorserver 需要在后台**以 root 权限**运行并监听 `127.0.0.1:5050` 。
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

剩余部分参照 [HydroJudge 说明](https://github.com/hydro-dev/HydroJudge)。