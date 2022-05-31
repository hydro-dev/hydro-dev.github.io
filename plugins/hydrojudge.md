# hydrojudge

## 准备

在配置评测机之前，请确认您的站点已经可以访问并正常登录/注册。

您应该预先下载您所要支持的语言的编译器，若您在配置完评测机后 升级/重新安装 了编译器，您需要重新启动沙箱。

前往 [criyle/go-judge](https://github.com/criyle/go-judge/releases) 下载 executorserver。

| 系统版本   | 文件名               |
| ---------- | -------------------- |
| Windows 7+ | executorserver.exe   |
| Linux 4.4+ | executorserver-amd64 |
| MacOS ?+   | executorserver-macos |

Executorserver 需要在后台**以 root 权限**运行并监听 `127.0.0.1:5050` 。
可使用 pm2 进行管理。

:::tip
如果您是 vj4 用户，请使用“作为独立进程”配置（设置处需设成 `type: vj4`）。
:::

## 安装

### 作为附加组件

:::tip
由于用附加组件安装的评测机与 Hydro 必须在同一台服务器上，每一个 Hydro 实例最多只能有一台评测机由附加组件安装。
:::

在安装 Hydro 的机器上运行下面的指令安装 `@hydrooj/hydrojudge`：

```sh
yarn global add @hydrooj/hydrojudge
hydrooj addon add @hydrooj/hydrojudge
```

重启 Hydro 后 hydrojudge 即可正常运行。

### 作为独立进程

:::tip
该方法可以帮助您在任意服务器上部署评测机。
:::

首先需要创建一个有 PRIV_JUDGE 权限的账户，具体方法参照 [此处](/docs/cli/#创建评测账号)。（在部署 Hydro 的服务器上运行）  
（vj4 用户需参照 [vj4 的方法](https://github.com/vijos/vj4#judging) 创建账户）

然后在运行评测机的服务器上安装 hydrojudge 插件：

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
```

设置完之后，使用下面的指令即可开始运行（可以使用 pm2 管理）：

```sh
hydrojudge
```

## 更新

HydroJudge 会发布不定期更新。您可以使用 `yarn global upgrade-interactive --latest` 来检测并进行更新。

## 关闭

### 作为附加组件

在 系统设置>hydrojudge 中有一栏 Disable builtin judge，将它勾上，然后重启 Hydro 即可。

### 作为独立进程

根据开启的方法关闭即可。

## 卸载

关闭后运行下面指令即可。

```sh
yarn global remove @hydrooj/hydrojudge
hydrooj addon remove @hydrooj/hydrojudge
```

## 评测设置

### 作为附加组件

在 系统设置>hydrojudge 修改对应的参数，然后重启 Hydro 和 hydrojudge 即可。

### 作为独立进程

如果有需要修改单题测试点数量上限等设置，可以在 `~/.config/hydro/judge.yaml` 的末尾添加下列内容：

```yaml
testcases_max: 100 # 单题最多测试点数量
total_time_limit: 120 # 单题最大总测试时长
parallelism: 2 # 单评测机评测进程数量
# 更多可选配置均可添加在此处，格式与前面的三排类似
```

在 [此处](https://github.com/hydro-dev/Hydro/blob/9c0afa38e3e6fa886ab9e9237847893fa6714392/packages/hydrojudge/src/config.ts#L12) 的设置均可添加到此处。

## 修改编译选项/添加新语言支持

对于已安装内置评测机的用户（无论内置评测机是否启动），在 控制面板>系统设置 中修改 judge.langs 配置项即可；对于没有安装内置评测机的用户，需要在 `~/.config/hydro/langs.yaml` 中配置。

按照 [此处](https://github.com/hydro-dev/Hydro/blob/71bb2f0b517be8f6966f97f835f2521f179b3d84/packages/hydrooj/setting.yaml#L12) 格式即可。

如果您添加了新的语言，您还需要前往 控制面板>系统设置 中修改 Language Highlight ID 与 Monaco language modes。  
分别表示选择对应的语言后的高亮设置（基于 PrismJS）和 Monaco 编辑器语法规则设置。

修改完后重启 Hydro 和 hydrojudge 即可。

## 测试数据格式

参照 [测试数据格式](/docs/user/problem/#测试数据格式) 配置。

## 调整沙箱空间大小

:::warning
如果不调整沙箱的空间大小，当您的评测使用文件 IO 且输入输出文件较大时可能会引发错误。
:::

:::tip
可以在服务器上运行下面的代码找到 hydro-sandbox 的运行目录：
```sh
pm2 info hydro-sandbox | grep "exec cwd"
```
:::

将 [mount.yaml](https://github.com/criyle/go-judge/blob/master/mount.yaml) 下载并放置在 sandbox 的运行目录下。然后修改第 64 行和第 68 行的 `size` 和 `nr_inodes` 的大小至您想要的大小，保存后重启 sandbox 即可完成更改。

## C/C++ 彩色编译错误信息

1. 确认您安装了支持彩色输出的编译器；
2. 在系统设置中，将 C/C++ 编译命令后加上 `-fdiagnostics-color=always`

例：

```yml
c:
  compile: /usr/bin/gcc -O2 -Wall -std=c99 -o ${name} foo.c -lm -fdiagnostics-color=always
```

## 开大程序运行栈空间

在很多时候系统默认为程序提供的栈空间并不能满足我们的需求，此时我们需要手动为用户程序提供更大的栈空间。

修改 pm2 中 hydro-sandbox 的启动参数为 `ulimit -s unlimited && /path-to/sandbox` 即可：

:::tip
您需要将 `/path-to/sandbox` 更换为您机器上 sandbox 的绝对路径。
:::

```sh
pm2 del hydro-sandbox
pm2 start "ulimit -s unlimited && /path-to/sandbox" --name hydro-sandbox
```

## 提高测评精度

禁用 CPU 频率缩放与 Intel 睿频加速技术，防止 CPU 频率波动。

禁用内存地址空间随机化，以使得存在内存寻址错误的代码能够得到更多可重复的结果，可以通过在 `/etc/sysctl.conf` 中添加下面这行并运行 `sudo sysctl -p` 实现：

```plain
kernel.randomize_va_space = 0
```
