# 数据库备份和恢复

## 备份

为了保证数据安全，请定期备份。  

若您使用自动脚本安装，可使用 `hydrooj backup` 快捷备份数据。

可使用 MongoDB 自带的 [mongodump](https://docs.mongodb.com/database-tools/mongodump/) 进行数据库备份。并将 `/data/file` 文件夹备份即可。  

对于数据库，请**请不要在数据库运行时直接拷贝数据库文件夹**。请每次备份后检查生成的备份文件的大小和内容，确保备份成功。  
请不要把备份数据和 Hydro 系统放在同一台机器上，这样数据丢失的风险仍然较高。  

## 恢复备份

若您使用自动脚本安装，可使用 `hydrooj restore <备份文件路径>` 恢复之前备份的数据。

使用 MongoDB 自带的 [mongorestore](https://docs.mongodb.com/database-tools/mongorestore/) 导入备份的数据库文件，并还原 `/data/file` 目录文件。  
如果只是想不同机器之间迁移部署，只需要在**停止 Hydro 和 MongoDB MinIO 服务后**将相关文件夹（通常为 `/data/db` 与 `/data/file` 与 `/root/.hydro/config.json` ）复制即可。


#一个简单实例
下面是一个在ubuntu20.04云服务器上备份与恢复的例子
首先执行
sudo -i # 切换到超级用户
hydrooj backup # 执行备份操作
备份结束后输出
Database backup saved at /root/backup-2022-03-17T03-04.zip
自己记住这个备份文件的路径

恢复时执行如下命令
sudo -i # 切换到超级用户
hydrooj restore /root/backup-2022-03-17T03-04.zip

保险起见恢复之后可以用下面的命令重启服务器
sudo -i # 切换到超级用户
pm2 restart hydrooj
