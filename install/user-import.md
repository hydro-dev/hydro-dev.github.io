# 导入用户

目前仅支持的 csv 格式导入, csv 文件既可以用文本编辑器创建，也可以用 Excel 等软件来辅助创建。  
要求 csv 文件不带头, 共三列: 邮箱，用户名，密码。不带头的意思是第一列不必写(用户名，密码这类词) 请保存为 UTF-8 编码的文件，否则中文可能会乱码。  

```csv
foo@undefined.moe,user1,password1
test@undefined.moe,user2,passwd2
```

这将创建两个用户，`user1` 密码为 `password1` , 邮箱 `foo@undefined.moe`；`user2` 密码为 `passwd2` ，邮箱 `test@undefined.moe`。  
