# 前端修改

此指南将教您修改前端文件。

如果您正在使用开发者模式，请直接修改 `packages/ui-default/templates` 下的文件。

如果您使用安装脚本部署：

请先使用 `hydrooj addon create` 创建一个本地插件（如果之前没有做过的话）。

如果您只希望修改页面翻译或是添加新语言：

- 修改翻译：在 [zh.yaml](https://github.com/hydro-dev/Hydro/blob/master/packages/ui-default/locales/zh.yaml) 内搜索您需要修改的翻译内容，并将 **其所在行而非整个文件** 修改后添加至 `~/addon/locales/zh.yaml` 。
- 添加语言：可参照 [zh.yaml](https://github.com/hydro-dev/Hydro/blob/master/packages/ui-default/locales/zh.yaml) 格式创建一个新文件。欢迎社区参与多国化翻译工作。

如果您希望修改页面模板：

通常的，在您访问的 url 前加上 `view-source:`（如 `view-source:https://hydro.ac` 即可查看页面源代码，在第二行的 `<html data-page="xxx">` 中 `data-page` 值即为页面名（首页例外，为 `main.html`）。
在 [默认 templates](https://github.com/hydro-dev/Hydro/tree/master/packages/ui-default/templates) 中找到对应文件，将其内容全部复制到 `~/addon/templates/` 文件夹下后进行修改即可。

## 修改自带题面

特别的，若您需要修改`ui-default`自带的英文题面，请直接修改`ui-default/templates/partials/problem_default.md`文件，按照上述步骤创建插件后，将刚才的.md文件复制一份到`~/addon/templates`目录下即可。**请注意，该.md文件存放在`ui-default/templates/partials`目录下，不在`ui-default/templates`目录下。**

以上所有更改均会在重启 Hydro 后生效。
