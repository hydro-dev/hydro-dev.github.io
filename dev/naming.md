# 命名规则

## 变量命名规则

在 Hydro 中的大部分变量有固定命名规则：

- pdoc: 题目
- tdoc: 比赛/作业/训练
- rdoc: 提交记录
- ddoc: 讨论
- drdoc: 讨论的回复
- drrdoc: 讨论的二级回复
- mdoc: 站内信息
- psdoc: 题目的提交状态
- tsdoc: 比赛/作业的提交状态
...

以及它们的变种：

- pdocs: 包含若干题目的数组
- pdict: 键为题目 id，题目详情为值的对象
...

更多细节可在 packages/hydrooj/src/interface.ts 中找到。

## 函数命名规则

- `get()` 获取内容，返回对应值或 null
- `getList()` 获取内容，返回 dict 类对象
- `getMulti()` 获取数据库查询的指针
- `edit()` 更新内容

