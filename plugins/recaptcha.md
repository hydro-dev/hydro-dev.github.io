# recaptcha

:::tip
我们采用 reCAPTCHA v3 来检验注册者是否是人类，在注册过程中没有看见传统验证码属正常现象。
:::

前往 <https://www.google.com/recaptcha/admin/create> 创建 reCAPTCHA 密钥。  
reCAPTCHA 类型请选择“reCAPTCHA 第 3 版”。

创建成功后将客户端密钥和服务端密钥分别填入系统设置 recaptcha 栏下的 `key` 和 `secret` 中，重启 Hydro 后 reCAPTCHA 即可正常工作。
