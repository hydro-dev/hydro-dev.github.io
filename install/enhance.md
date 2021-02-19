# 进阶配置

## 更新系统

Hydro 系统会不定期发布更新。您可以使用 `yarn global upgrade-interactive --latest` 来检测并进行更新。

## SMTP

以 QQ邮箱 为例：找到 设置->账户，开启 `pop3/smtp` 服务

![img](https://img-kysic-1258722770.file.myqcloud.com/e49581ec5a3ed05d06cf406c081cf661/3042294c80fda.png)
![img](https://img-kysic-1258722770.file.myqcloud.com/388b385fe648bf77935f8a4a086e976a/a2b2802a9802f.png)

- SMTP_USER: 12345678@qq.com  
- SMTP_PASS: 提供的 SMTP 密码  
- SMTP_HOST: smtp.mail.qq.com  
- SMTP_PORT: 465/587 （请参照邮件服务商说明）  
- SMTP_SECURE: 是否使用加密 TLS 连接（请参照邮件服务商说明）  
- SMTP_FROM: 发送签名（提示：若不清楚请填写邮件地址，填错可能会导致邮件无法发送）

## c/c++ 彩色编译错误信息

1. 确认您安装了支持彩色输出的编译器；
2. 在系统设置中，将 c/c++ 编译命令后加上 `-fdiagnostics-color=always`

例：

```yml
c:
    type: compiler
    compile: /usr/bin/gcc -O2 -Wall -std=c99 -o ${name} foo.c -lm -fdiagnostics-color=always
    code_file: foo.c
    execute: ${dir}/${name}
```

## S3

### 本地 MinIO

您只需要将 MinIO 的 endpoint、accessKey、secretKey 填入即可，剩余部分在大部分情况下均可保留默认值。

### 远程 S3

:::tip
这里以腾讯云 COS 为例，其他与之类似。
:::

您需要进入您的 COS 存储桶设置页，并记录存储桶名称（下图为 `kysic-oj-1258722770`）和所属地域（下图为 `ap-guangzhou`）。

![img](https://img-kysic-1258722770.file.myqcloud.com/f48d555379e48c400d68e4dcf2e4964a/734373bb6bf8b.png)

然后回到 Hydro 设置页。

![img](https://img-kysic-1258722770.file.myqcloud.com/c482632b11639a890831f8c67f37dd9d/10b2bc5a51c0c.png)

- Storage engine endPoint: http://cos.<存储桶地域>.myqcloud.com （或是 https）  
- Storage engine accessKey: 您的腾讯云 API 密钥的 SecretId  
- Storage engine secret: 您的腾讯云 API 密钥的 SecretKey  
- Storage engine bucket: <存储桶名称>  
- Storage engine region: Auto