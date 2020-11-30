# 部署

## 使用安装脚本（根据系统版本选择，使用root用户执行）

:::tip
此脚本仅安装Hydro核心，评测组件和依赖，不会创建管理员用户。请手动 [创建用户](#创建用户)。
:::tip

```sh
curl -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-1604.sh | bash # ubuntu 16.04
curl -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-1804.sh | bash # ubuntu 18.04
curl -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-2004.sh | bash # ubuntu 20.04
# 下方脚本未测试有效性，请尽量避免使用
curl -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/centos-7.sh | bash # centos 7
```

## 手动安装

Hydro 依赖于 MongoDB 与 NodeJS>=10.10，您应该先安装它们。 

:::tip
不建议在 Windows 下安装 Hydro。
:::

- 下载安装 MongoDB：[https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)  
- 使用 nvm 安装 NodeJS：[Linux](https://nvm.sh/) [Windows](https://github.com/coreybutler/nvm-windows)  
- 安装 yarn: `npm install yarn -g`  
- 使用 yarn 安装 Hydro：`yarn global add hydrooj @hydrooj/ui-default`  
- 启动 Hydro：`hydrooj`  

:::tip
单个Hydro实例需要约100MB的运行内存。（取决于安装的模块数量与大小）  
:::

Hydro 会自行初始化并监听 8888 端口（可使用 `--port=1234` 指定其他端口）。请用浏览器访问并进行相应配置。  

## 创建用户

数据库配置完成后使用hydrocli创建用户： 

```sh
# 使用HydroCli创建用户时，可不指定uid，若指定请使用负数值，否则可能会影响用户正常注册。
# 此方法返回一个数字，即为所创建用户的uid。
hydrooj cli user create admin@hydro.local root rootroot # email username password uid
# -1即为拥有所有权限
hydrooj cli user setPriv [uid] -1 # uid PRIV
```

之后的进阶配置可在 管理 面板进行。

## 启动参数

- `--port=8888` 指定启动端口  
- `--debug` 启用开发模式  
- `--ignorelock` 忽略lockfile（不建议）  
- `--ui=/path/to/ui` 使用指定文件夹下的UI  
- `--template=/path/to/template` 使用指定文件夹下的页面模板（不进行缓存）  
- `--public=/path/to/public` 使用指定文件夹的public目录  

## 升级Hydro

```sh
yarn global upgrade-interactive --latest
```

选中需要升级的组件即可。

## 附加组件

:::warning
附加组件对站点所有内容具有完全的访问权限。请不要安装来历不明的组件。  
:::

#### 安装附加组件：

先全局安装所需模块，再向 hydrooj 注册即可。例：安装 @hydrooj/geoip

```sh
yarn global add @hydrooj/geoip
hydrooj addon add @hydrooj/geoip
```

#### 附加组件列表

Hydro官方目前提供了以下附加组件：

| ID                         | 描述                           |
| -------------------------- | ------------------------------ |
| @hydrooj/better-search     | 使用 jieba 优化题目搜索        |
| @hydrooj/ui-default        | Hydro的默认用户界面            |
| @hydrooj/geoip             | GeoIP 支持，用于显示用户登录地 |
| @hydrooj/fps-importer      | 支持导入fps格式的题目          |
| @hydrooj/login-with-github | 允许用户使用Github登录         |
| @hydrooj/login-with-google | 允许用户使用Google登录         |
| @hydrooj/login-with-osu    | 允许用户使用Osu登录            |
| @hydrooj/login-with-qq     | 允许用户使用QQ登录             |
| @hydrooj/migrate-vijos     | 从vijos4的自动升级工具         |
| @hydrooj/hydrojudge        | 评测组件                       |

:::tip
大部分附加组件的配置都可以在 控制面板>系统设置 中找到。
评测组件需要额外配置。
详见 [配置评测机](judge.html)
:::

#### 卸载附加组件

```sh
yarn global remove @hydrooj/geoip
hydrooj addon remove @hydrooj/geoip
```

## 使用 pm2 守护程序  

```sh
yarn global add pm2 # 安装pm2
pm2 startup # 开机自启
pm2 start hydrooj # 启动 Hydro
pm2 save # 保存
```

## OAuth

Hydro 支持使用 Github 和 Google 等第三方登录。申请相应 API Key 填入系统设置。  

:::tip
由于众所周知的原因，需要设置 proxy 设置项。
目前支持http/https与socks代理。
:::
