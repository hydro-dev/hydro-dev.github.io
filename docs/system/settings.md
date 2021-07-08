# 系统设置

## url_prefix / server.url

系统的较多功能基于该配置项。请确保填写正确。应当为以 http/https 开头并以 / 结尾的可以访问到本实例的完整域名。

## SMTP

以 QQ 邮箱为例。

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
  compile: /usr/bin/gcc -O2 -Wall -std=c99 -o ${name} foo.c -lm -fdiagnostics-color=always
```

## File

以腾讯云COS 为例。

- Storage engine endPoint: `http://cos.<存储桶地域>.myqcloud.com` （或是 https）  
- Storage engine accessKey: 您的腾讯云 API 密钥的 SecretId  
- Storage engine secret: 您的腾讯云 API 密钥的 SecretKey  
- Storage engine bucket: <存储桶名称>  
- Storage engine region: Auto
- EndPoint for user: 给用户使用的 EndPoint，若填 `/fs/` 则表示由服务器转发
- EndPoint for judge: 给 judge 使用的 EndPoint，若填 `/fs/` 则表示由服务器转发
