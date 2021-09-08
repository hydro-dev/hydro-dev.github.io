# 导入用户

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

:::warn
用户创建后无法删除，请谨慎操作
:::
