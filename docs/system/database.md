# 数据库备份和恢复

## 备份

为了保证数据安全，请定期备份。  
可使用 MongoDB 自带的 [mongodump](https://docs.mongodb.com/database-tools/mongodump/) 进行数据库备份。并将 `/data/file` 文件夹备份即可。  
对于数据库，请不要使用复制数据库数据文件的方法。请每次备份后检查生成的备份文件的大小和内容，确保备份成功。  
请不要把备份数据和 Hydro 系统放在同一台机器上，这样数据丢失的风险仍然较高。  

## 恢复备份

使用 MongoDB 自带的 [mongorestore](https://docs.mongodb.com/database-tools/mongorestore/) 导入备份的数据库文件，并还原 `/data/file` 目录文件。  
如果只是想不同机器之间迁移部署，只需要在**停止 Hydro 和 MongoDB MinIO 服务后**将相关文件夹（通常为 `/data/db` 与 `/data/file` 与 `/root/.hydro/config.json` ）复制即可。
