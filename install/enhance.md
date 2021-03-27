# 进阶配置

## 更新系统

Hydro 系统会不定期发布更新。您可以使用 `yarn global upgrade-interactive --latest` 来检测并进行更新。

## 反向代理

在前面我们指定让 Hydro 直接监听固定端口，但是当您的服务器上需要同时运行多个 Web 服务时可能会发生端口冲突。  
此时可以使用 Nginx 等反向代理软件反向代理 Hydro 到 80，443 等常用端口，关于反向代理软件的具体使用方法请自行百度，具体配置文件可参考 [此处](https://github.com/hydro-dev/Hydro/tree/master/examples)。

