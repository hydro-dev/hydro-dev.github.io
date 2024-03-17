# 数据库备份和恢复

## 进入数据库

:::warn
**非常不推荐直接操作数据库！**

1. 当你改动一个字段的时候，可能与其相关的部分忘记修改，改完觉得好像没什么问题，过段时间发现了一些异常，根本不会想到是你这次改数据库导致的，之后又不会修。
2. 直接修改数据库后，可能没有通知主程序，缓存仍然存在，表现为修改不生效。
3. 直接操作数据库的权限过大，若操作失误带来的影响通常是灾难性的。
:::

在绝大部分情况下均不需要/不可以直接操作数据库。若确需要，可使用 `hydrooj db` 命令打开数据库 shell，也可以从 `~/.hydro/config.json` 查找数据库 connection string 并使用外部工具进行连接。

注：MongoDB 的用户是附加在特定数据库中的，使用外部工具连接请确保使用了正确的 `authSource` 选项。

## 快速备份与恢复

为了保证数据安全，请定期备份。  

若您使用自动脚本安装，可使用 `hydrooj backup` 快捷备份数据，备份完成后会在当前目录生成备份压缩包文件，您可使用 `hydrooj restore <备份文件路径>` 恢复之前备份的数据。

## 手动备份

可使用 MongoDB 自带的 [mongodump](https://docs.mongodb.com/database-tools/mongodump/) 进行数据库备份。并将 `/data/file` 文件夹备份即可。  

对于数据库，请**请不要在数据库运行时直接拷贝数据库文件夹**。请每次备份后检查生成的备份文件的大小和内容，确保备份成功。  
请不要把备份数据和 Hydro 系统放在同一台机器上，这样数据丢失的风险仍然较高。  

## 手动恢复备份

使用 MongoDB 自带的 [mongorestore](https://docs.mongodb.com/database-tools/mongorestore/) 导入备份的数据库文件，并还原 `/data/file` 目录文件。  
如果只是想不同机器之间迁移部署，只需要在**停止 Hydro 和 MongoDB 服务后**将相关文件夹（通常为 `/data/db` 与 `/data/file` 与 `/root/.hydro/config.json` ）复制即可。
