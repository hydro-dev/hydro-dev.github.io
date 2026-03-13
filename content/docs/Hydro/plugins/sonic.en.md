---
title: Sonic
---

## Installation

### Install [sonic-server](https://github.com/valeriansaliou/sonic)

Run the following command as root:

```bash
nix-env -iA nixpkgs.sonic-server
```

### Install the sonic plugin

Run the following commands as root:

```bash
yarn global add @hydrooj/sonic
hydrooj addon add @hydrooj/sonic
```

## Start

In `/root/.sonic/config.cfg` (create it if it does not exist, or use any other path you prefer), write the configuration according to the example below.

Configuration example:

```toml
# Sonic
# Fast, lightweight and schema-less search backend
# Configuration file
# Example: https://github.com/valeriansaliou/sonic/blob/master/config.cfg


[server]

log_level = "error"


[channel]

inet = "127.0.0.1:1491" # listens on localhost by default
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

Run the following commands:
```
pm2 start sonic -- -c /root/.sonic/config.cfg
pm2 save
```

## Configuration

### Backend address configuration

Go to the HydroOJ control panel and configure the sonic backend address.

If you copied the sample configuration directly, configure as follows:

- host: `127.0.0.1`
- port: `1491`
- auth: `SecretPassword`

After modification, restart HydroOJ.

### Restart HydroOJ

Run command `pm2 restart hydrooj`.

### Rebuild problem index

Go to the HydroOJ control panel, find Rebuild Problem Index in Script Management, click Run, and leave parameters empty.

At this point, search should work properly.

## FAQ

### Problem search does not work correctly after installation

Please update HydroOJ to the latest version, then run Rebuild Problem Index again.
