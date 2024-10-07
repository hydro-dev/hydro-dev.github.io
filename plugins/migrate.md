# migrate

## 从 HUSTOJ 升级

:::note
如果您使用的是原版的 HUSTOJ，建议按如下步骤操作：

1. 检查并修正所有不合法数据 （日期不合法/邮箱不符合要求/开始时间比结束时间晚等等）
2. 推荐创建服务器快照。
3. 直接在安装 HUSTOJ 的机器上运行安装脚本，安装脚本会提示导入数据。
4. 检查所有数据是否正常，若一切正常，则结束
5. 若不正常，使用 `pm2 stop all && systemctl start nginx` 启动回 HUSTOJ 重新修正数据
6. `rm -rf /data ~/.hydro` 之后重新运行安装脚本，回到步骤 3
:::

:::warning
迁移会删除当前 Hydro 的所有数据（含用户账户信息）并移入 HUSTOJ 的数据。  
请注意备份相关文件。
:::

请先完成 Hydro 的部署并完成对文件服务的配置(setting_file)。
在迁移数据之前，请先停止正在运行的 HUSTOJ 服务，仅保留其数据库开启。
请注意 Hydro 所在的数据库不应和源 HUSTOJ 数据库相同。

安装插件后，您应当能够在 控制面板>脚本管理 中找到名为 `migrateHustoj` 的脚本。
其参数格式如下：

```json
{"host":"localhost","port":3306,"name":"jol","username":"","password":"","domainId":"system","contestType":"","dataDir":"","uploadDir":""}
```

- host: 数据库地址
- port: 数据库端口
- name: 数据库名，一般为 `jol`
- username&password: 账号密码，若无则填写空字符串
- domainId: 迁入的域，默认为 `system`
- contestType: `oi` 或者 `acm`，视情况而定
- dataDir: HUSTOJ 中 data 文件夹的位置（这里存储着题目数据等关键信息，需要手动处理）
- uploadDir: HUSTOJ 中 上传文件的位置（这里存储着上传的图片和文件等信息，默认已指定 `/home/judge/src/web/upload/` ，如果此路径与您路径相同，请不要填写此项）

当脚本运行完成后，请重启 Hydro 实例，会自动完成之后的升级操作。
迁移后，请使用原 HUSTOJ 的管理员账号登录实例。


## 从 SYZOJ 升级

SYZOJ 与 HUSTOJ 迁移方法类似，迁移脚本应运行名为 `migrateSyzoj` 的脚本外，SYZOJ无需 `contestType` 参数。
其参数格式如下：

```json
{"host":"localhost","port":3306,"name":"syzoj","username":"","password":"","domainId":"system","dataDir":""}
```

- host: 数据库地址
- port: 数据库端口
- name: 数据库名，一般为 `syzoj`
- username&password: 账号密码，若无则填写空字符串
- domainId: 迁入的域，默认为 `system`
- dataDir: SYZOJ 中 data 文件夹的位置（这里存储着题目数据等关键信息，需要手动处理）

由于SYZOJ脚本会将原站所有数据迁移，所以运行耗时较长。
当脚本运行完成后，请重启 Hydro 实例，会自动完成之后的升级操作。
迁移后，请使用原 SYZOJ 的管理员账号登录实例。

## 从 UniversalOJ 升级

UniversalOJ （常称作UOJ社区版）与前两者迁移方法类似，迁移脚本应运行名为 `migrateUniversalOJ` 的脚本。

由于其升级过程较为麻烦，安装脚本已提供自动升级服务，如您需要可运行安装脚本一键迁移，手动迁移请在开发群中提问。

由于UniversalOJ脚本会将原站所有数据迁移，所以运行耗时较长。
当脚本运行完成后，请重启 Hydro 实例，会自动完成之后的升级操作。
迁移后，请使用原 UniversalOJ 的管理员账号登录实例。

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
