# 前端修改

此指南将教您修改前端文件。

如果您正在使用开发者模式，请直接修改 `packages/ui-default/templates` 下的文件。

如果您使用安装脚本部署：

请先使用 `hydrooj addon create` 创建一个本地插件（如果之前没有做过的话）。

## 修改页面翻译或是添加新语言：

- 修改翻译：在 [zh.yaml](https://github.com/hydro-dev/Hydro/blob/master/packages/ui-default/locales/zh.yaml) 内搜索您需要修改的翻译内容，并将 **其所在行而非整个文件** 修改后添加至 `~/addon/locales/zh.yaml` 。
- 添加语言：可参照 [zh.yaml](https://github.com/hydro-dev/Hydro/blob/master/packages/ui-default/locales/zh.yaml) 格式创建一个新文件。欢迎社区参与多国化翻译工作。

## 修改页面模板：

通常的，在您访问的 url 前加上 `view-source:`（如 `view-source:https://hydro.ac` 即可查看页面源代码，在第二行的 `<html data-page="xxx">` 中 `data-page` 值即为页面名（首页例外，为 `main.html`）。
在 [默认 templates](https://github.com/hydro-dev/Hydro/tree/master/packages/ui-default/templates) 中找到对应文件，将**文件的全部内容** 复制到 `~/addon/templates/` 文件夹下后进行修改即可。

特别的，创建题目时的默认模板位于 `partials/problem_default.md`，创建训练计划时的默认模板位于 `partials/training_default.json`，修改方式同上。

以上所有更改均会在重启 Hydro 后生效。

例子:
可以用find命令来查找文件位置,比如想知道题面模板在本机的具体位置可以执行
```bash
sudo -i # 切换到root用户
find / -name "problem_default.md"
```
如果在ubuntu20.04的机器上搜索到的结果可能为(前提是采用默认脚本自动安装)
```bash
/usr/local/share/.cache/yarn/v6/npm-@hydrooj-ui-default-4.34.11-e897f101a977e45b2c799192010758372237b77e-integrity/node_modules/@hydrooj/ui-default/templates/partials/problem_default.md
/usr/local/share/.cache/yarn/v6/npm-@hydrooj-ui-default-4.34.6-80003c4d53f3306a7223eca2fb40d75a86148cce-integrity/node_modules/@hydrooj/ui-default/templates/partials/problem_default.md
/usr/local/share/.config/yarn/global/node_modules/@hydrooj/ui-default/templates/partials/problem_default.md
```
最后一行就是我们要修改的模板文件,修改它的内容并保存.再执行
```bash
pm2 restart hydrooj  #重启hydrooj
pm2 logs hydrooj --lines 100 # 查看启动日志,如果提示worker  Server started,就说明重启成功
```bash

现在创建题目,会发现题目的默认模板就是修改后的内容

