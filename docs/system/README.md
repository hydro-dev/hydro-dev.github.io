# 站点管理员指南

## 导入用户

目前仅支持的 csv 格式导入, csv 文件既可以用文本编辑器创建，也可以用 Excel 等软件来辅助创建。  

每行三列或四列，分别为: 邮箱，用户名，密码，显示名。（显示名为可选）  
请使用 UTF-8 编码，否则中文可能会乱码。  

```csv
foo@undefined.moe,user1,password1
bar@undefined.moe,user2,password2,temp
test@undefined.moe,user3,passwd3
```

这将创建三个用户：

- `user1` 密码为 `password1` , 邮箱 `foo@undefined.moe`；
- `user2` 密码为 `password2` ，邮箱 `bar@undefined.moe`，显示名为 `temp`；
- `user3` 密码为 `passwd3`，邮箱 `test@undefined.moe`；

## 使用内容分发网络(CDN)

只需在控制面版中将 cdn_prefix 设置项修改为 CDN 域名即可。（如 `https://cdn.undefined.moe/` ）。  

:::tip
您可以使用 `https://cdn.jsdelivr.net/npm/@hydrooj/ui-default@[version]/public/` 作为CDN地址。  
（请替换 `[version]` 为您本地安装的 `ui-default` 插件版本）
:::

## 数据备份和恢复

### 备份

为了保证数据安全，请定期备份。  
可使用 MongoDB 自带的 [mongodump](https://docs.mongodb.com/database-tools/mongodump/) 进行数据库备份。并将 `/data/file` 文件夹备份即可。  
对于数据库，请不要使用复制数据库数据文件的方法。请每次备份后检查生成的备份文件的大小和内容，确保备份成功。  
请不要把备份数据和 Hydro 系统放在同一台机器上，这样数据丢失的风险仍然较高。  

### 恢复备份

使用 MongoDB 自带的 [mongorestore](https://docs.mongodb.com/database-tools/mongorestore/) 导入备份的数据库文件，并还原 `/data/file` 目录文件。  
如果只是想不同机器之间迁移部署，只需要在**停止 Hydro 和 MongoDB MinIO 服务后**将相关文件夹（通常为 `/data/db` 与 `/data/file`）复制即可。
