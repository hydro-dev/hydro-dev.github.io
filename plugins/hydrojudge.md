# hydrojudge

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

:::tip
如果您是 vj4 用户，请参照 [作为独立进程安装](/plugins/hydrojudge.html#作为独立进程安装) 一节配置（设置处需设成 `type: vj4`）。
:::

## 作为附加组件

### 安装

安装 `@hydrooj/hydrojudge`。

```sh
yarn global add @hydrooj/hydrojudge
hydrooj addon add @hydrooj/hydrojudge
```

重启 Hydro 后 HydroJudge 即可正常运行。

### 关闭

在 系统设置>hydrojudge 中有一栏 Disable builtin judge，将它勾上，然后重启 Hydro 即可。

### 卸载

```sh
yarn global remove @hydrooj/hydrojudge
hydrooj addon remove @hydrooj/hydrojudge
```

## 作为独立进程

首先需要创建一个有 PRIV_JUDGE 权限的账户，具体方法参照 [此处](/install/cli.html#创建评测账号)（在部署网页端的服务器上进行）  
（vj4 用户需参照 [vj4 的方法](https://github.com/vijos/vj4#judging) 创建账户）。

然后在运行评测机的服务器上执行下面的操作。

安装 hydrojudge 插件。

```sh
yarn global add @hydrooj/hydrojudge
```

创建目录 `~/.config/hydro`，在该目录下创建文件 `judge.yaml`，配置文件格式如下：

```yaml
hosts:
  localhost:
    type: hydro # vj4 用户请在此处填写 vj4
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

## 更新

HydroJudge 会发布不定期更新。您可以使用 `yarn global upgrade-interactive --latest` 来检测并进行更新。

## 修改编译选项/添加新语言支持

首先需要修改编译指令配置文件。

对于内置评测机，在 控制面板>系统设置 中修改 judge.langs 配置项即可。  
对于独立评测机，修改 `~/.config/hydro/langs.yaml` 文件即可。  
格式按照 [此处](https://github.com/hydro-dev/Hydro/blob/d33401c4e99ad3f125500a77637e9f486cb24c0b/packages/hydrojudge/setting.yaml#L41) 写就可以了。

如果您添加了新的语言，您还需要前往 控制面板>系统设置 中修改 Language Highlight ID 与 Monaco language modes。  
分别表示选择对应的语言后的高亮设置和 Monaco 编辑器设置。