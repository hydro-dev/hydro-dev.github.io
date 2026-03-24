---
title: Write Plugins with TypeScript
---

## Why Use Plugins?

If you've worked on other large engineering projects, you likely face these common issues:

1. **Recompilation Delay**: Modifying frontend core code requires full recompilation and service restarts, invalidating user caches and wasting time.
2. **Maintenance Overhead**: Updating a modified core results in merge conflicts or overwritten changes.
3. **Fragmented Ecosystem**: Diverse community branches are often incompatible or difficult to combine.

Hydro's **Plugin System** addresses these by providing a stable, high-level API. Developers can build features as isolated, reusable units that remain consistent across updates and support hot-reloading for rapid development.

---

## Getting Started: A Pastebin Plugin

In this guide, we'll implement a simple pastebin service.

### 1. Initialize Your Project
Prerequisite: **Node.js >= 22**

Use the following command to bootstrap a plugin directory (e.g., in `/root/addon`):
```bash
# Using 'yarn init' as an example
mkdir hydro-pastebin && cd hydro-pastebin
yarn init
# Follow the prompts (e.g., @hydrooj/pastebin)
```

**Recommended Dev Workflow**: Use a local IDE (like VS Code) with code completion. Run `yarn add hydrooj -D` locally to enable TypeScript types for the Hydro API.

### 2. Component Design
Our pastebin requires the following:
- **Database Access**: To store and retrieve documents.
- **Routes**:
  - `GET /paste/create`: Show the creation form.
  - `POST /paste/create`: Submit a new paste.
  - `GET /paste/show/:id`: View a specific paste.
- **Access Control**: Users can set pastes to private.

### 3. Handler Lifecycle
Handlers process incoming requests. They support the following lifecycle methods (all must be `async`):
- `prepare(args)`: Runs first. Used for common parameter validation or pre-fetching data.
- `get(args)`: Handles GET requests.
- `post(args)`: Handles POST requests.
- `post[Operation](args)`: Triggered if a `POST` request includes an `operation` field in the body.
  - *Example*: `<input name="operation" value="delete_item">` maps to `postDeleteItem`.
- `cleanup()`: Runs after the response is sent.

**Rendering Logic**: If `this.response.template` is set, the template will be rendered. Otherwise, `this.response.body` is returned directly (typically as JSON).

### 4. Implementation (`index.ts`)

```ts twoslash
// @noErrors
// @module: esnext
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
        paste: Paste; // Define the database collection type
    }
}

// Model Logic
async function add(userId: number, content: string, isPrivate: boolean): Promise<string> {
    const pasteId = randomstring(16);
    const result = await coll.insertOne({
        _id: pasteId,
        owner: userId,
        content,
        isPrivate,
    });
    return result.insertedId;
}

async function get(pasteId: string): Promise<Paste> {
    return await coll.findOne({ _id: pasteId });
}

const pastebinModel = { add, get };
global.Hydro.model.pastebin = pastebinModel;

// Route Handlers
class PasteCreateHandler extends Handler {
    async get() {
        this.response.template = 'paste_create.html';
    }

    @param('content', Types.Content)
    @param('private', Types.Boolean)
    async post(domainId: string, content: string, isPrivate = false) {
        const id = await pastebinModel.add(this.user._id, content, !!isPrivate);
        this.response.redirect = this.url('paste_show', { id });
    }
}

class PasteShowHandler extends Handler {
    @param('id', Types.String)
    async get(domainId: string, id: string) {
        const doc = await pastebinModel.get(id);
        if (!doc) throw new NotFoundError(id);
        if (doc.isPrivate && this.user._id !== doc.owner) {
            throw new PermissionError();
        }
        this.response.body = { doc };
        this.response.template = 'paste_show.html';
    }
}

// Plugin Registration
export async function apply(ctx) {
    // Registers named routes for URL generation
    ctx.Route('paste_create', '/paste/create', PasteCreateHandler, PRIV.PRIV_USER_PROFILE);
    ctx.Route('paste_show', '/paste/show/:id', PasteShowHandler);
}
```

### 5. Frontend & UI
- **Templates**: Place `.html` files in the `templates/` directory. Use **Nunjucks** syntax.
- **Frontend Logic**: Place `.tsx` or `.page.ts` files in the `frontend/` folder. They are automatically bundled as entry points.

```tsx
// Example frontend/main.page.tsx
import { addPage, NamedPage } from '@hydrooj/ui-default';

addPage(new NamedPage(['problem_detail'], () => {
    console.log("This script only runs on problem detail pages.");
}));
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
