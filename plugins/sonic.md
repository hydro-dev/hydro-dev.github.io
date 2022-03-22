# Sonic

## 安装

### 安装 [sonic-server](https://github.com/valeriansaliou/sonic)

使用 root 用户执行如下命令：

```bash
apt install rustc #安装 rust
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

在 `/path/to/config.cfg`（没有的自行建立，也可以换成其他的你喜欢的路径）按照以下配置示例写入配置。

配置示例：

```
# Sonic
# Fast, lightweight and schema-less search backend
# Configuration file
# Example: https://github.com/valeriansaliou/sonic/blob/master/config.cfg


[server]

log_level = "error"


[channel]

inet = "127.0.0.1:1491" # 默认监听本机
tcp_timeout = 300

auth_password = "SecretPassword"

[channel.search]

query_limit_default = 10
query_limit_maximum = 100
query_alternates_try = 4

suggest_limit_default = 5
suggest_limit_maximum = 20


[store]

[store.kv]

path = "/data/sonic/store/kv/"

retain_word_objects = 1000

[store.kv.pool]

inactive_after = 1800

[store.kv.database]

flush_after = 900

compress = true
parallelism = 2
max_files = 100
max_compactions = 1
max_flushes = 1
write_buffer = 16384
write_ahead_log = true

[store.fst]

path = "/data/sonic/store/fst/"

[store.fst.pool]

inactive_after = 300

[store.fst.graph]

consolidate_after = 180

max_size = 2048
max_words = 250000
```

执行如下命令：
```
pm2 start sonic -- -c /path/to/sonic.cfg
pm2 save
```

请将 `/path/to/config.cfg` 换成你喜欢的路径。

## 配置

### 后端地址配置

进入 HydroOJ 控制面板，配置 sonic 后端地址。

如果您直接复制配置示例，那么按照以下内容配置：

- host: `127.0.0.1`
- port: `1491`
- auth: `SecretPassword`

### 重启 HydroOJ

执行命令 `pm2 restart hydrooj`。

### 重建题目索引

进入 HydroOJ 控制面板，在脚本管理中找到重建题目索引，点击运行，参数留空即可。  

至此，搜索功能应当可以正常使用。

## FAQ

### sonic-server 安装报错

请使用 [USTC Crates 源](https://mirrors.ustc.edu.cn/help/crates.io-index.html)。

### sonic-server 安装时卡在 librocksdb

考虑换台性能强点的服务器。

### 安装后题目搜索不正常

请更新到 HydroOJ 最新版本后，再运行重建题目索引。
