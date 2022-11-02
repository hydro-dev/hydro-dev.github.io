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

:::warning
用户创建后无法删除，请谨慎操作
:::

## 批量将中文名转换为拼音的脚本
这个脚本用学生姓名的拼音当作账户和密码，并且伪造假的邮箱。适合用户比较多的时候批量导入。
当然这有个问题就是学生忘记密码可能不太容易找回，需要管理员重置。仅供参考。姓名和密码都是
学生姓名的拼音，邮箱是拼音全拼 + @163.com。

安装必要的 python 库：
```
pip install pandas
pip install xpinyin
```
然后执行一下脚本：
```
import pandas as pd
from xpinyin import Pinyin

def py(name):
    p = Pinyin()
    return p.get_pinyin(name, "")

df = pd.read_excel("students.xlsx", header=0, sheet_name=0)

df['py'] = df['姓名'].apply(py)
df['username'] = df['py']
df['password'] = df['py']
df['email'] = df['py'] + "@163.com"

writer = pd.ExcelWriter('students-oj.xlsx')
df.to_excel(writer)
writer.save()
```

> 注意 `students.xlsx` 应该与执行的 python 脚本目录相同，并且学生姓名所在的列叫做`姓名`。

`students-oj.xlsx` 是结果所在的文件，自动生成到 Python 文件的同目录。