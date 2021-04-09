# 介绍

为什么使用 Hydro？

- 安全：使用 cgroup 进行隔离，杜绝卡评测；
- 高效：Hydro 使用了沙箱复用技术，拥有极高的评测效率；
- 扩展：Hydro 支持安装额外模块进行扩展；
- 强大：配合 Judge 模块（或 HydroJudge 独立评测机），可支持 spj，交互题，提交答案题，文件IO 等多种特性；
- 简便：提供了多种迁移脚本，可从 Vijos 等快速升级至 Hydro；
- 自定：所有权限节点均可自由设置；
- 社区：Hydro 正在持续维护中；

## 功能对比

此处对比了 Hydro 与其他主流 OJ 系统的功能。（只进行在不修改源代码情况下的对比）  

```
+：支持
=：部分支持
?: 未知
-：不支持
```

|         功能          |      Hydro      |   HustOJ    |  SYZOJ   |   QDUOJ    |  Vijos   |
| :-------------------: | :-------------: | :---------: | :------: | :--------: | :------: |
|         安装          |    一键脚本     |  一键脚本   | 手动搭建 |   docker   |  docker  |
|        数据库         |     MongoDB     |    MySQL    | MariaDB  |  Postgres  | MongoDB  |
|     测试数据存储      |  本地/S3 [^1]   |    本地     |   本地   |    本地    |  数据库  |
|       多评测机        |        +        |      =      |    +     |     +      |    +     |
|     测试数据同步      |    按需抓取     |  全量同步   | 全量同步 |  全量同步  | 按需抓取 |
|         比赛          |   ACM/OI/IOI    | ACM/OI [^2] | ACM/IOI  | ACM/OI/IOI |  ACM/OI  |
|       作业功能        |        +        |      +      |    -     |     -      |    -     |
| 修改编译命令/添加语言 |        +        |      -      |    -     |     -      |    +     |
|       权限系统        |        +        |      +      |    -     |     -      |    +     |
|    训练计划(题单)     |        +        |      -      |    -     |     -      |    +     |
|         团队          |     + [^3]      |      -      |    -     |     -      |    +     |
|         Hack          |        -        |      +      |    -     |     -      |    -     |
|     SpecialJudge      |     + [^4]      |      +      |    +     |     =      |    -     |
|        Subtask        |        +        |      +      |    +     |     -      |    -     |
|        交互题         |        +        |      ?      |    +     |     -      |    -     |
|       题目导入        | fps/syzoj/qduoj |     fps     |  syzoj   |    fps     |    -     |
|       后端语言        |     NodeJS      |     PHP     |  NodeJS  |   Python   |  Python  |
|       前端框架        |      React      |  BootStrap  |    ?     |    Vue     |  React   |

[^1]: S3 指所有兼容 Amazon S3 协议的服务，包括腾讯COS，阿里OSS 等。  
[^2]: 切换比赛模式仅能通过修改设置全局更改。  
[^3]: 通过域功能，允许用户创建域并在域内拥有管理员权限。域之间仅共享账号数据。  
[^4]: 支持所有主流 SPJ 格式。  

## 截图

![img](https://img-kysic-1258722770.file.myqcloud.com/d809e8940ed760213db53d4ab018ab78/cac1fb769c20c.png)
![img](https://img-kysic-1258722770.file.myqcloud.com/16da058b22dacc9cb173f43001d59ac6/754b27554352c.png)
![img](https://img-kysic-1258722770.file.myqcloud.com/e2f843260324924ccf35f48579bcf7c6/c9929a5c07519.png)
![img](https://img-kysic-1258722770.file.myqcloud.com/5731d0c9b0872f3514467cb9bd9af3dd/c41e401d395dc.png)
![img](https://img-kysic-1258722770.file.myqcloud.com/16da058b22dacc9cb173f43001d59ac6/754b27554352c.png)

## 现在开始

点击 [部署](/install/) ，开始部署您的 OJ 吧！
