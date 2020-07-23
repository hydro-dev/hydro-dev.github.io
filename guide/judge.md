# 评测机配置

在配置评测机之前，请确认您的站点已经可以访问并正常登录/注册。

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

在 Hydro 中创建一个有 PRIV_JUDGE 权限的账户。（参见 [HydroCli](./cli)）
