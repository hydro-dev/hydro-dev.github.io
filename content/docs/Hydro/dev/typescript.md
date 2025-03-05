---
title: 使用 TypeScript 编写插件
---

前置条件：NodeJS>=18  
此教程将以编写剪贴板插件为例进行说明。

## Step1 初始化项目

使用 `hydrooj addon create` 快速在 `/root/addon` 下初始化一个插件或是在一个空文件夹中运行 `yarn init` 并按照提示填写相关信息。

```sh
# 使用 yarn init 的样例
/workspace/hydro-plugin $ yarn init
yarn init v1.22.4
question name (hydro-plugin): @hydrooj/pastebin
question version (1.0.0): 0.0.1
question description: HydroOJ的剪贴板组件
question entry point (index.js): index.ts
question repository url: https://github.com/hydro-dev/pastebin.git
question author: undefined <i@undefined.moe>
question license (MIT): MIT
question private:
success Saved package.json
```

## 可选：在本机环境编写插件

有时我们希望使用本机的 IDE 编写插件上传到服务器（我们也推荐这么做，编辑器提供的代码补全可以很大程度简化开发流程），可以进行如下操作：  

1. 在本机安装 NodeJS 和 yarn 。
2. 参照步骤 1 使用 `yarn init` 创建一个项目。
3. 使用 VSCode 打开插件文件夹。
4. 使用 `yarn add hydrooj -D` 安装相关开发组件。
5. 参照下文进行插件开发工作
6. 将本地的文件夹上传至服务器，并使用 `hydrooj addon add 插件绝对路径` 启用上传的插件。

## Step2 准备编写组件

分析：剪贴板组件需要以下功能：

- 与数据库交互来存储/检索相应文档。
- 提供 /paste/create 路由以创建新文档。
- 提供 /paste/show/:ID 来查看已创建的文档。
- 根据用户ID进行鉴权，允许将文档设置为私密以防止他人查看。

在路由中定义所有的函数应均为异步函数，支持的函数有：prepare, get, post, post[Operation], cleanup  
具体流程如下：

```
先执行 prepare(args) （如果存在）
args 为传入的参数集合（包括 QueryString, Body, Path）中的全部参数，
再执行 prepare(args) （如果存在）
检查请求类型：

为 GET ？
  -> 执行 get(args)
为 POST ?
  -> 执行 post(args)
  -> 含有 operation 字段？
       -> 执行 post[Operation]

执行 cleanup()
```

如果在 this.response.template 指定模板则渲染，否则直接返回 this.response.body 中的内容。

* 在表单提交时的 operation 字段使用下划线，函数名使用驼峰命名。

如 `<input type="hidden" name="operation" value="confirm_delete">` 对应 `postConfirmDelete` 函数。

应当提供 `apply` 函数，并与定义的 Handler 一同挂载到 `global.Hydro.handler[模块名]` 位置。
`apply` 函数将在初始化阶段被调用。

# Step3 index.ts

```ts
// @noErrors
// @module: esnext
// @filename: index.ts
import {
    db, definePlugin, Handler, NotFoundError, param, PermissionError, PRIV, Types,
} from 'hydrooj';

const coll = db.collection('paste');

interface Paste {
    _id: string;
    owner: number;
    content: string;
    isPrivate: boolean;
}

declare module 'hydrooj' {
    interface Model {
        pastebin: typeof pastebinModel;
    }
    interface Collections {
        paste: Paste; // 声明数据表类型
    }
}

async function add(userId: number, content: string, isPrivate: boolean): Promise<string> {
    const pasteId = String.random(16); // Hydro 提供了此方法，创建一个长度为16的随机字符串
    // 使用 mongodb 为数据库驱动，相关操作参照其文档
    const result = await coll.insertOne({
        _id: pasteId,
        owner: userId,
        content,
        isPrivate,
    });
    return result.insertedId; // 返回插入的文档ID
}

async function get(pasteId: string): Promise<Paste> {
    return await coll.findOne({ _id: pasteId });
}

// 暴露这些接口，使得 cli 也能够正常调用这些函数；
const pastebinModel = { add, get };
global.Hydro.model.pastebin = pastebinModel;

// 创建新路由
class PasteCreateHandler extends Handler {
    // Get请求时触发该函数
    async get() {
        // 检查用户是否登录，此处为多余（因为底部注册路由时已声明所需权限）
        // 此方法适用于权限的动态检查
        // this.checkPriv(PRIV.PRIV_USER_PROFILE);
        this.response.template = 'paste_create.html'; // 返回此页面
    }

    // 使用 Types.Content 检查输入
    @param('content', Types.Content)
    @param('private', Types.Boolean)
    // 从用户提交的表单中取出content和private字段
    // domainId 为固定传入参数
    async post(domainId: string, content: string, isPrivate = false) {
        // 在HTML表单提交的多选框中，选中值为 'on'，未选中则为空，需要进行转换
        const pasteid = await pastebinModel.add(this.user._id, content, !!isPrivate);
        // 将用户重定向到创建完成的url
        this.response.redirect = this.url('paste_show', { id: pasteid });
        // 相应的，提供了 this.back() 方法用于将用户重定向至前一个地址（通常用于 Ajax 或是部分更新操作）
    }
}

class PasteShowHandler extends Handler {
    @param('id', Types.String)
    async get(domainId: string, id: string) {
        const doc = await pastebin.get(id);
        if (!doc) throw new NotFoundError(id);
        if (doc.isPrivate && this.user._id !== doc.owner) {
            throw new PermissionError();
        }
        this.response.body = { doc };
        this.response.template = 'paste_show.html';
    }

    @param('id', Types.String)
    async postDelete(domainId: string, id: string) {
        // 当提交表单并存在 operation 值为 delete 时执行。
        // 本例中未实现删除功能，仅作为说明。
    }
}

// Hydro会在服务初始化完成后调用该函数。
export async function apply() {
    // 注册一个名为 paste_create 的路由，匹配 '/paste/create'，
    // 使用PasteCreateHandler处理，访问改路由需要PRIV.PRIV_USER_PROFILE权限
    // 提示：路由匹配基于 path-to-regexp
    ctx.Route('paste_create', '/paste/create', PasteCreateHandler, PRIV.PRIV_USER_PROFILE);
    ctx.Route('paste_show', '/paste/show/:id', PasteShowHandler);
}

```

## Step4 template

模板采用 nunjucks 语法。放置于 `templates/` 文件夹下。  
会在请求结束时根据 `response.template` 的值选择模板，并使用 `response.body` 的值进行渲染，存入 `response.body` 中。  
若 `response.template` 为空或 `request.headers['accept'] == 'application/json'`，则跳过渲染步骤。

## Step5 locale

用于提供多国翻译。格式与 Hydro 的 locale 文件夹格式相同。
