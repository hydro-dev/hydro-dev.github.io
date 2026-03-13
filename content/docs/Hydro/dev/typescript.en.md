---
title: Write Plugins with TypeScript
---

## Step0 Why use plugins?

If you have worked on other engineering projects, you often encounter the following pain points:

- If you modify frontend source code, you need to recompile and repack the frontend. Compilation usually consumes a lot of memory and time, and after compilation you need to restart services, while all cached user-side resources become invalid;  
- After modifying code, when trying to update the system, your own changes are overwritten by new versions and require manual merging (or changes are lost directly), greatly increasing maintenance costs;  
- A large number of modified branches in the third-party community cannot be directly combined/assembled as needed, or there are conflicts between features;  

Based on the pain points above, Hydro innovatively uses a plugin system and provides a complete development API set for developers. Developers can build features based on relatively stable APIs without paying too much attention to internal implementation details, split features into minimal units, allow users to combine them freely as needed, maintain consistency across versions, and benefit from hot reload to improve development efficiency.

This tutorial explains plugin development using a pastebin plugin as an example.

## Step1 Initialize project

Prerequisite: NodeJS>=22  

Use `hydrooj addon create` to quickly initialize a plugin under `/root/addon`, or run `yarn init` in an empty folder and fill in the relevant information as prompted.

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

## Optional: Write plugins on local machine

Sometimes we want to use a local IDE to develop plugins and upload them to the server (we also recommend this, because editor code completion can greatly simplify the development process). You can do the following:  

1. Install NodeJS and yarn on your local machine.
2. Follow Step 1 and use `yarn init` to create a project.
3. Open the plugin folder with VSCode.
4. Run `yarn add hydrooj -D` to install related development components.
5. Develop the plugin by following the instructions below.
6. Upload the local folder to the server and enable the uploaded plugin with `hydrooj addon add <absolute plugin path>`.

## Step2 Prepare to write components

Analysis: the pastebin component needs the following features:

- Interact with the database to store/retrieve corresponding documents.
- Provide the /paste/create route to create new documents.
- Provide /paste/show/:ID to view created documents.
- Authenticate by user ID, and allow documents to be set as private to prevent others from viewing.

In routes, all defined functions should be asynchronous. Supported functions are: prepare, get, post, post[Operation], cleanup  
The process is as follows:

```
First execute prepare(args) (if present)
args is the full set of incoming parameters (including QueryString, Body, Path),
Then execute prepare(args) (if present)
Check request type:

Is it GET?
  -> Execute get(args)
Is it POST?
  -> Execute post(args)
  -> Contains operation field?
       -> Execute post[Operation]

Execute cleanup()
```

If this.response.template specifies a template, it will be rendered; otherwise, the content in this.response.body is returned directly.

* Use underscores for the operation field in form submission, and camelCase for function names.

For example, `<input type="hidden" name="operation" value="confirm_delete">` corresponds to the `postConfirmDelete` function.

You should provide an `apply` function and mount it together with defined Handlers at `global.Hydro.handler[module name]`.
The `apply` function will be called during initialization.

# Step3 index.ts

```ts twoslash
// @noErrors
// @module: esnext
// @filename: index.ts
import {
    db, definePlugin, Handler, NotFoundError, randomstring, param, PermissionError, PRIV, Types,
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
    const pasteId = randomstring(16);
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
    // 使用 PasteCreateHandler 处理，访问该路由需要 PRIV.PRIV_USER_PROFILE 权限
    // 提示：路由匹配基于 path-to-regexp
    ctx.Route('paste_create', '/paste/create', PasteCreateHandler, PRIV.PRIV_USER_PROFILE);
    ctx.Route('paste_show', '/paste/show/:id', PasteShowHandler);
}

```

## Step4 template

Templates use nunjucks syntax and should be placed in the `templates/` folder.  
At the end of the request, the template is selected based on `response.template`, rendered with `response.body`, and written into `response.body`.  
If `response.template` is empty or `request.headers['accept'] == 'application/json'`, the rendering step is skipped.

## Step5 locale

Used to provide multilingual translations. The format is the same as Hydro's locale folder format.

## Step6 frontend

Write frontend code in the frontend folder. Files named `[a-zA-Z0-9_]+.page.tsx?` are automatically loaded as entry points.  
The paste feature does not require any additional JS-driven frontend interaction, so a minimal format example is provided below.

```tsx
import './foo.css'; // 如果有额外的样式
import { addPage, NamedPage, AutoloadPage } from '@hydrooj/ui-default';

addPage(new NamedPage(['problem_detail'], () => {
  console.log('仅在题目详情页面执行');
}));

addPage(new AutoloadPage('my_page_name', () => {
  console.log('在所有页面均会执行');
}));
```
