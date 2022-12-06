# 导入用户

目前支持 csv 格式（用 `,` 分隔）或 Excel 格式（用 TAB 分隔） 导入用户数据, 数据既可以用文本编辑器创建，也可以用 Excel 等软件来辅助创建。  

每行最少三列，最多五列，分别为: 邮箱，用户名，密码，显示名，用户信息。（显示名和用户信息为可选）  
请使用 UTF-8 编码，否则中文可能会乱码。  

```csv
foo@undefined.moe,user1,password1
bar@undefined.moe,user2,password2,temp
test@undefined.moe,user3,passwd3,test,{"group":"class1","studentId":"123","school":"Hydro School"}
```

可以在粘贴后点击预览验证复制入的数据的有效性

这将创建三个用户：

- `user1` 密码为 `password1` , 邮箱 `foo@undefined.moe`；
- `user2` 密码为 `password2` ，邮箱 `bar@undefined.moe`，显示名为 `temp`；
- `user3` 密码为 `passwd3`，邮箱 `test@undefined.moe`，显示名为 `test`，学校为 `Hydro School`，学号为 `123`，该用户将会被分配至当前域的 `class1` 小组内；

:::warning
用户创建后无法删除，请谨慎操作
:::
