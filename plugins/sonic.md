# Sonic

## 安装

### 安装 Rust

使用 `curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh` 命令安装 Rust。

### 安装 [sonic-server](https://github.com/valeriansaliou/sonic)

使用 root 用户执行如下命令：

```bash
apt install build-essential clang libclang-dev libc6-dev g++ llvm-dev
cargo install sonic-server
```

### 安装 sonic 插件

使用 HydroOJ 安装用户执行如下命令：

```bash
yarn global add @hydrooj/sonic
hydrooj addon add @hydrooj/sonic
```

## 启动

在 `/root/.sonic/config.cfg`（没有的自行建立，也可以换成其他的你喜欢的路径）按照 [配置示例](https://github.com/valeriansaliou/sonic/blob/master/config.cfg) 编写配置文件。

使用 `sonic -c /root/.sonic/config.cfg` 启动 sonic-server。

注意：启动的 sonic 会在终端会话结束后关闭，请自行研究使用 systemctl 等以服务方式启动 sonic-server。

## 配置

进入 HydroOJ 控制面板，配置 sonic 后端地址（使用配置示例的，不需改动）。

重启 Hydro，在控制面板脚本管理中运行重建题目索引，参数留空即可。  

至此，搜索功能应当可以正常使用。

## FAQ

### sonic-server 安装报错

请使用 [USTC Crates 源](https://mirrors.ustc.edu.cn/help/crates.io-index.html)。

### 安装后题目搜索不正常

请更新到 HydroOJ 最新版本后，再运行重建题目索引。
