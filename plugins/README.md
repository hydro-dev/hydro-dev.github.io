# 插件

Hydro 支持使用插件扩展自身所支持的功能。

:::warning
插件对站点的所有内容具有完全的访问权限，请不要启用来历不明的插件。
:::

## 附加组件列表

Hydro 官方目前提供了以下附加组件：

| ID                         | 描述                          |
| -------------------------- | ----------------------------- |
| @hydrooj/fps-importer      | 导入 fps 格式的题目           |
| @hydrooj/geoip             | 显示用户登录地                |
| @hydrooj/hydrojudge        | 评测组件                      |
| @hydrooj/import-qduoj      | 导入 QDUOJ 导出的题库         |
| @hydrooj/login-with-github | 允许用户使用 GitHub 登录      |
| @hydrooj/login-with-google | 允许用户使用 Google 登录      |
| @hydrooj/migrate           | 从 vijos4/HustOJ/SYZOJ 升级 |
| @hydrooj/recaptcha         | 注册时启用 reCAPTCHA 验证码   |
| @hydrooj/ui-default        | Hydro 的默认用户界面          |
| @hydrooj/onlyoffice        | 显示 doc/docx 格式题目        |
| @hydrooj/sonic             | 基于 sonic 的题目搜索增强     |
| @hydrooj/elastic-search    | 基于 Elastic 的题目搜索增强   |
| @hydrooj/vjudge            | Codeforces/SPOJ/UOJ/POJ/Luogu |
| @hydrooj/prom-client       | 导出系统状态至 Prometheus     |

以下插件由社区提供：

| ID                                                 | 作者      | 描述                         |
| -------------------------------------------------- | --------- | ---------------------------- |
| [hydro-pdf-preview](//github.com/Ri-moe/hydro-pdf) | wuxianucw | 使用 PDF.js 在题面中插入 PDF |

大部分插件的配置均可在安装后于 控制面板>系统设置 中找到。

部分插件若安装后没有正确配置可能会影响系统正常使用！

## 安装

先全局安装所需模块，再向 hydrooj 注册即可。例：安装 @hydrooj/geoip

```sh
yarn global add @hydrooj/geoip
hydrooj addon add @hydrooj/geoip
```

或者，如果你正在安装一个其他途径获取的插件（自行创建等），请直接使用文件夹 **绝对路径**：
（文件夹路径即为 **包含 package.json** 的文件夹）

```sh
hydrooj addon add /root/xxx
```

请不要将插件与插件嵌套摆放，否则可能会导致一些不可预知的问题。

**安装完插件后需要重启 hydrooj 以使插件生效。**

## 查看已注册的插件列表

```sh
hydrooj addon list
```

## 更新

```sh
yarn global upgrade-interactive --latest
```

## 卸载

```sh
yarn global remove @hydrooj/geoip
hydrooj addon remove @hydrooj/geoip
```
