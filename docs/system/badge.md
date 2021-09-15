# 自定义用户标签

进入 MongoDB，执行下面的操作即可（根据具体情况替换尖括号中的部分）：

```sh
use hydro
db.user.update({"_id": <用户 UID>}, {$set: {"badge": "<标签内容>#<背景颜色（HEX）>#<文字颜色（HEX）>"}})
```
