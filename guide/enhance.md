# 进阶配置

## SMTP 邮件配置

以QQ邮箱为例：找到 设置->账户，开启 `pop3/smtp` 服务

![img](https://img.undefined.moe:38443/images/2020/09/27/image.png)
![img](https://img.undefined.moe:38443/images/2020/09/27/imagecc5ff47b38c45417.png)

SMTP_USER: 12345678@qq.com 
SMTP_PASS: 提供的SMTP密码  
SMTP_HOST: smtp.mail.qq.com  
SMTP_PORT: 465/587 （请参照邮件服务商说明）  
SMTP_SECURE: 是否使用加密TLS连接（请参照邮件服务商说明）  
SMTP_FROM: 发送签名（提示：若不清楚请填写邮件地址，填错可能会导致邮件无法发送）  

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