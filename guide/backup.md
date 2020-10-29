# 数据备份和恢复

## 备份
为了保证数据安全，请定期备份。
Hydro 将所有数据存储于数据库中，可使用 mongodb 自带的 [mongodump](https://docs.mongodb.com/database-tools/mongodump/) 进行备份。  
对于数据库，请不要使用复制数据库数据文件的方法。请每次备份后检查生成的备份文件的大小和内容，确保备份成功。  
请不要把备份数据和 Hydro 系统放在同一台机器上，这样数据丢失的风险仍然较高。  

## 恢复备份
使用 mongodb 自带的 [mongorestore](https://docs.mongodb.com/database-tools/mongorestore/) 导入备份的数据。  
如果只是想不同机器之间迁移部署，只需要在停止 Hydro 和 mongodb 服务后将数据库文件夹（通常为`/data/db`）复制即可。  
