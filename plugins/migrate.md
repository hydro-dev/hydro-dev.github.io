# migrate

## 从 SYZOJ 升级

TODO

## 从 Vijos 升级

:::warning
迁移会删除当前 Hydro 的所有数据（含用户账户信息）并移入 vj4 的数据。  
请注意备份相关文件。
:::

请先完成 Hydro 的部署并完成对文件服务的配置(setting_file)。  
在迁移数据之前，请先停止正在运行的 vj4 服务，仅保留其数据库开启。  
请注意 Hydro 所在的数据库不应和源 vj4 数据库相同。  
若您使用 vj4-docker ，可更改 `docker-compose.yml` 将数据库映射至其他本机端口。

安装插件后，您应当能够在 控制面板>脚本管理 中找到名为 `migrateVijos` 的脚本。  
其参数格式如下：

```json
{"host":"localhost","port":27017,"name":"vj4","username":"","password":""}
```

- host: 数据库地址
- port: 数据库端口
- name: 数据库名
- username&password: 账号密码，若无则填写空字符串

:::tip
vj4-docker 中数据库名为 vj4，无账号密码。
:::

当脚本运行完成后，请重启 Hydro 实例，会自动完成之后的升级操作。
迁移后，请使用原 vj4 的管理员账号登录实例。

:::warning
若您的 vj4 是由 vj2 或 tyvj 升级而来，在迁移完成后请不要卸载该插件，否则可能导致部分用户无法登录。
:::
