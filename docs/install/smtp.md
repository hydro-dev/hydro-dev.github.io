# SMTP

以 QQ 邮箱为例。

- SMTP_USER: 12345678@qq.com  
- SMTP_PASS: 提供的 SMTP 密码  
- SMTP_HOST: smtp.qq.com  
- SMTP_PORT: 465/587 （请参照邮件服务商说明）  
- SMTP_SECURE: 是否使用加密 TLS 连接（请参照邮件服务商说明，使用 STARTTLS 的服务商无需勾选）  
- SMTP_FROM: 发送签名（提示：若不清楚请填写邮件地址，填错会导致邮件无法发送）

已知能够完整兼容的服务商有：

- QQ 邮箱
- 腾讯企业邮
- 网易 163 邮箱
- 飞书域名邮箱
- Zeptomail
- Zoho Mail
- Outlook
- Gmail
- 新浪邮箱

如果使用其他服务商且没有发现问题，欢迎向此列表 Pull Request。
