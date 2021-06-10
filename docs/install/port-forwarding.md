# 端口映射

:::tip
如果您希望让外网访问 Hydro，但是服务器没有外网ip，那么您可能需要这篇教程。  
本文将引导您将内外的 Hydro 对外网开放。您可以选择以下方案中的一种。
:::

## ngrok

ngrok 是一款操作简单的软件，可以把内网的web服务映射到外网。

大部分的 ngrok 服务是免费的。例如：[ngrok.cc](https://www.ngrok.cc/)

:::tip
ngrok 的缺点：

- 速度比较慢
- 数据并不保密，ngrok 服务提供者有能力监听 OJ 的通讯。
:::

虽然有这几个缺点，ngrok 仍然不失为一个好的选择。具体的配置，请参见 [ngrok.cc](https://www.ngrok.cc/) 网站。

## ssh转发

这个方案需要您有一台 VPS，且 VPS 需要拥有外网 IP。

首先，您需要在本地机器通过 `ssh-keygen` 来生成一个您的密钥：

```bash
ssh-keygen -t rsa
```

一直按 `enter` 键，然后您将会在 `~/.ssh/id_rsa.pub` 取得您的公钥。  
![生成公钥](https://i.loli.net/2018/10/19/5bc992e392705.png)

然后登录您的VPS，把上面的公钥扔进`~/.ssh/authorized_keys`，如下图所示：  
![VPS](https://i.loli.net/2018/10/19/5bc992e3ad19b.png)

现在，您在本地机器上使用如下命令，应该可以免密码登录VPS：  

```sh
ssh <VPS_user>@<VPS_ip>  
```  

如果不能登录，您可能对上面过程的理解存在偏差。  
接下来，在本地机器上安装 autossh，它是稳定的 ssh 连接工具：  

```sh
apt install autossh
```

最后运行下面的指令，将本地的 80 端口映射到 VPS 的 80 端口：  

```sh
autossh -M 5698 -NfR <VPS的ip>:80:<本地机器的ip>:80 <VPS用户名>@<VPS的ip>  

# 例如：
# autossh -M 5698 -NfR 23.23.23.23:80:127.0.0.1:80 blue@23.23.23.23
# 5698 是监听端口，用于测试 ssh 连接是否稳定。如果您运行了多个 autossh，请保证它们的监听端口不同。
```

访问 VPS 的 IP，您应该可以看到 Hydro 了。  
如果您有域名，请添加一条 A 记录，指向 VPS 的 IP，然后就能用域名访问了。
