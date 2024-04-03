---
home: true
heroImage: /favicon.png
heroText: Hydro
tagline: 高性能在线测评系统
actions:
  - text: 介绍 💡
    link: /docs/
    type: primary
  - text: 部署指南
    link: /docs/install/
features:
- title: 安全
  details: 使用 cgroup 隔离用户程序
- title: 便捷
  details: 支持使用脚本一键搭建
- title: 强大
  details: 提供了比赛 训练 讨论 题解 作业等功能，并可通过安装附加组件进行扩展
- title: 快速
  details: 沙箱复用，延迟计算，提高运行效率
footer: AGPL3.0 Licensed | Copyright © 2021-present Undefined
---

![LICENSE](https://img.shields.io/github/license/hydro-dev/Hydro)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/hydro-dev/hydro/build.yml?branch=master)
![hydrooj](https://img.shields.io/npm/dm/hydrooj)
![npm](https://img.shields.io/npm/v/hydrooj?label=hydrooj)
![node-current](https://img.shields.io/node/v/hydrooj)
![GitHub contributors](https://img.shields.io/github/contributors/hydro-dev/Hydro)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/hydro-dev/Hydro)

Hydro 是一个高效的信息学在线测评系统。特点：易于部署（且提供安装脚本），轻量，功能强大且易于扩展。  

[Github 仓库](https://github.com/hydro-dev/Hydro)

欢迎 star 本项目，这是对开发者的鼓励。  
项目的开发与维护需要资金，欢迎进行捐助。  
Hydro 提供收费的功能定制服务，如您需要可与我们联系。  
相关文档若说明的不够详细，请提交 Pull Request 或联系开发组说明。  
Bug 和功能建议请在 [Issues](https://github.com/hydro-dev/Hydro/issues) 提出。

[在 Gitpod 打开已配置完成的测试环境](https://gitpod.io/#https://github.com/hydro-dev/Hydro)

[Hydro Online Judge](https://hydro.ac/)

## 联系我们

Email [i@undefined.moe](mailto:i@undefined.moe)  
Telegram [@undefinedmoe](https://t.me/undefinedmoe)  
Hydro 用户群：1085853538  

注1：Hydro 为开源框架，任何人均能够在遵守协议的情况下使用这套框架。  
版权申诉相关问题请联系对应网站管理者，（通常为其 UID=2 的用户），与开发者无关。

注2：加入用户群请先阅读[《提问的智慧》](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md)。  
同时群内可能存在部分令您感到不适或感到冒犯的内容。若对此有顾虑**请勿加群**。

## 开源许可

本项目中的 examples/ install/ packages/ui-default/ 下的内容仅采用 AGPL-3.0 进行授权。
项目其余部分使用双重许可：

1. 您可以在遵守 AGPL-3.0 许可证和下述附加条款章节的前提下免费使用这些代码：  
2. 如确需闭源，您也可以联系我们购买其他授权。

## 附加条款

基于 AGPL3 协议第七条，您在使用本项目时，需要遵守以下额外条款：

1. 不可移除本项目的版权声明与作者/来源署名；（[AGPL3 7(b)](LICENSE#L356)）
2. 当重分发经修改后的本软件时，需要在软件名或版本号中采用可识别的方式进行注明；（[AGPL3 7(c)](LICENSE#L360)）
3. 除非得到许可，不得以宣传为目的使用作者姓名；（[AGPL3 7(d)](LICENSE#364)）

即：  
在您部署 Hydro 时，需要保留底部的 `Powered by Hydro` 字样，其中的 `Hydro` 字样需指向 `hydro.js.org/本仓库/fork` 之一的链接。  
若您对源码做出修改/扩展，同样需要以 AGPL-3.0-or-later 开源，您可以以 `Powered by Hydro, Modified by xxx` 格式在页脚注明。  
此限制对以下模块仍然有效：  

- Hydro 插件；
- 包括但不限于使用 http 协议与 Hydro 进行交互的组件；

若您需要对这些模块闭源处理，请考虑联系我们以购买许可。  
鉴于 Mirai 处的 [不和谐事件](https://github.com/mamoe/mirai/issues/850) 对此项目做如下声明：

- 项目开源不代表开发者有义务为您提供服务。
- 在提问前请先阅读《提问的智慧》。
- 若有必要，开发者有权对您停止任何技术支持。
- 开发组会 **尽可能** 保证用户可以进行平滑升级，但无法保证不在新版本引入影响使用的漏洞，且内部实现可能会在不发布任何通知的情况下进行重命名/修改/删除。  

如果您对以上条目感到不适，建议您停止使用本项目。

## 鸣谢

排名不分先后，按照链接字典序。

- [Github](https://github.com/) 为 Hydro 提供了代码托管与自动构建。
- [criyle](https://github.com/criyle) 提供评测沙箱实现。
- [Vijos](https://github.com/vijos/vj4) 为 Hydro 提供了UI框架。
