---
title: SMTP
---

Take QQ Mail as an example.

- SMTP_USER: 12345678@qq.com  
- SMTP_PASS: provided SMTP password  
- SMTP_HOST: smtp.qq.com  
- SMTP_PORT: 465/587 (refer to your mail service provider documentation)  
- SMTP_SECURE: whether to use an encrypted TLS connection (refer to your mail service provider documentation; providers that use STARTTLS do not need this checked)  
- SMTP_FROM: sender signature (Tip: if unsure, fill in your email address; incorrect value will cause email sending failure)

Known fully compatible providers include:

- QQ Mail
- Tencent Exmail
- NetEase 163 Mail
- Feishu Domain Mail
- Zeptomail
- Zoho Mail
- Outlook
- Gmail
- Sina Mail

If you use other providers and find no issues, welcome to submit a Pull Request to this list.
