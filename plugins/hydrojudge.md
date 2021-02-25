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

首先需要创建一个有 PRIV_JUDGE 权限的账户，具体方法参照 [此处](/install/cli.html#创建评测账号)（在部署网页端的服务器上进行）。

然后在运行评测机的服务器上执行下面的操作。

安装 hydrojudge 插件。

```sh
yarn global add @hydrooj/hydrojudge
```

创建目录 `~/.config/hydro`，在该目录下创建文件 `judge.yaml`，配置文件格式如下：

```yaml
hosts:
  localhost:
    type: hydro
    server_url: http://localhost:8888/ # Hydro 运行的网址
    uname: judge # 评测账号用户名
    password: abc123 # 评测账号密码
    detail: true # 默认为 true
# 以下为可选配置
testcases_max: 100 # 单题最多测试点数量
total_time_limit: 120 # 单题最大总测试时长
parallelism: 2 # 单评测机评测进程数量
# 更多可选配置均可添加在此处，格式与前面的三排类似
```

在 [此处](https://github.com/hydro-dev/Hydro/blob/9c0afa38e3e6fa886ab9e9237847893fa6714392/packages/hydrojudge/src/config.ts#L12) 的设置均可添加到可选配置处。

设置完之后，使用下面的指令即可开始运行（可以使用 pm2 管理）：

```sh
hydrojudge
```