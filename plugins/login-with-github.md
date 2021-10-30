# 使用 Github 登录

安装 login-with-github 插件后，您还需要来自 Github 的 Client ID 和 Client Secret。如果您已经拥有这些，请直接转到“配置”部分。  

## 申请 Github 应用

1.打开 Github，登录账号后点击右上角的头像 -> Settings -> Developer settings 进入开发者设置。  
2.点击“Register a new application”按钮。  
3.填写有关信息，“Application name”为应用名，可以随意填写，“Homepage URL”请填写您的 OJ 的首页，“Callback URL”请填写您的 OJ 下的 /oauth/github/callback 目录，如下图。  
[![第三步图](https://z3.ax1x.com/2021/10/30/5zpYuR.png)](https://imgtu.com/i/5zpYuR)  
4.点击“Generate a new client secret”，即可生成 Client Secret。  

## 配置

安装插件后请先重启您的 Hydro OJ ，然后进入控制面板，在最下方的 login-with-github 设置进行配置。请将 Client ID 填入 Key，Client Secret 填入 Secret，然后再次重启 Hydro OJ，即可开始使用Github登录。
