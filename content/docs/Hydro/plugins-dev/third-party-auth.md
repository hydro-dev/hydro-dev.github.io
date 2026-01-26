---
title: 接入第三方登录
---

如果您想接入 Github 或者 Google，Hydro 已经提供了现成的插件。安装 [`@hydrooj/login-with-github`](https://www.npmjs.com/package/@hydrooj/login-with-github) 或者 [`@hydrooj/login-with-google`](https://www.npmjs.com/package/@hydrooj/login-with-google) 插件即可。

在阅读本节之前，请确认您已阅读[使用 TypeScript 编写插件 - 以剪贴板插件为例](./typescript)一节。本篇将引导您如何为 Hydro 系统添加一个第三方登录方式。

Hydro 的第三方登录机制主要通过 `ctx.provideModule('oauth', ...)` 来注册一个 Provider 实现。一个 Provider 包含两个核心函数：
1.  `get`: 用于将用户重定向至第三方授权页面。
2.  `callback`: 用户授权后，处理从第三方服务回调的请求，获取用户信息并返回给 Hydro 核心。

我们将以 `@hydrooj/login-with-github` 插件为例进行讲解。

## 1. 后端实现

### 1.1 类型与配置声明
首先，我们为插件所需的系统配置项声明 TypeScript 类型，以便在开发过程中获得更好的类型检查和代码提示。

```ts
import {
    Context, ForbiddenError, Handler, superagent, SystemModel,
    TokenModel, UserFacingError, ValidationError,
} from 'hydrooj';

declare module 'hydrooj' {
    // 此处定义了插件需要的系统设置项
    interface SystemKeys {
        'login-with-github.id': string;
        'login-with-github.secret': string;
        'login-with-github.endpoint': string;
    }
}
```

### 1.2 `get` 函数：发起登录请求
当用户点击“使用 GitHub 登录”按钮时，`get` 函数会被调用。它的主要任务是构建第三方授权 URL 并将用户重定向过去。

```ts
// 当用户点击“使用 XX 登录”按钮时，此函数会被执行
async function get(this: Handler) {
    // 1. 从系统设置中获取 GitHub App 的 Client ID
    // 2. 创建一个临时的 state token，用于后续校验，防止 CSRF 攻击，并储存重定向前的位置
    const [appid, [state]] = await Promise.all([
        SystemModel.get('login-with-github.id'),
        TokenModel.add(TokenModel.TYPE_OAUTH, 600, { redirect: this.request.referer }),
    ]);
    // 3. 将用户重定向至 GitHub 请求授权
    this.response.redirect = `https://github.com/login/oauth/authorize?client_id=${appid}&state=${state}&scope=read:user,user:email`;
}
```

### 1.3 `callback` 函数：处理授权回调
用户在 GitHub 完成授权后，会被重定向回 Hydro 的回调 URL（例如 `/oauth/github/callback`）。`callback` 函数负责处理这个请求。

函数的参数是回调 URL 中的 Query Parameters。它的核心任务是：
1.  验证 `state` 的有效性。
2.  使用 `code` 向 GitHub 换取 `access_token`。
3.  使用 `access_token` 获取用户信息。
4.  将用户信息处理成 Hydro 指定的格式并返回。系统会自动使用该信息登录、绑定或创建新用户。

```ts
// 当用户在三方系统中完成授权后，此函数会被调用
// 函数的参数包含了第三方回调 URL 中的所有查询参数
async function callback({ state, code }) {
    // 1. 获取系统设置和之前创建的 state token
    const [[appid, secret, endpoint, url], s] = await Promise.all([
        SystemModel.getMany([
            'login-with-github.id',
            'login-with-github.secret',
            'login-with-github.endpoint',
            'server.url',
        ]),
        TokenModel.get(state, TokenModel.TYPE_OAUTH),
    ]);
    if (!s) throw new ValidationError('token'); // 验证 state 有效性

    // 2. 使用 code 换取 access_token
    const res = await superagent.post(`${endpoint || 'https://github.com'}/login/oauth/access_token`)
        .send({
            client_id: appid,
            client_secret: secret,
            code,
            redirect_uri: `${url}oauth/github/callback`,
            state,
        })
        .set('accept', 'application/json');
    if (res.body.error) {
        throw new UserFacingError(
            res.body.error, res.body.error_description, res.body.error_uri,
        );
    }
    const t = res.body.access_token;

    // 3. 使用 access_token 获取用户信息
    const userInfo = await superagent.get(`${endpoint ? `${endpoint}/api` : 'https://api.github.com'}/user`)
        .set('User-Agent', 'Hydro-OAuth')
        .set('Accept', 'application/vnd.github.v3+json')
        .set('Authorization', `token ${t}`);

    // 4. 将用户信息格式化为 Hydro 可识别的格式
    const ret = {
        _id: `${userInfo.body.id}@github.local`, // 唯一标识符
        email: userInfo.body.email,
        bio: userInfo.body.bio,
        // 提供多个用户名，若需创建用户则从前往后尝试，直到用户名可用
        uname: [userInfo.body.name, userInfo.body.login].filter((i) => i),
        avatar: `github:${userInfo.body.login}`, // 使用 github 头像
    };
    await TokenModel.del(s._id, TokenModel.TYPE_OAUTH);
    if (!ret.email) throw new ForbiddenError("You don't have a verified email.");
    return ret; // 返回用户信息
}
```

### 1.4 `apply` 函数：注册模块
最后，在 `apply` 函数中，我们将 `get` 和 `callback` 函数注册到系统中。

```ts
// 注册此模块
export function apply(ctx: Context) {
    ctx.provideModule('oauth', 'github', {
        text: 'Login with Github', // 按钮上显示的文字
        callback,
        get,
    });
    // 为按钮文字提供多语言翻译
    ctx.i18n.load('zh', {
        'Login With Github': '使用 Github 登录',
    });
}
```

## 2. 前端展示
您不需要编写额外的前端代码。当您通过 `ctx.provideModule('oauth', ...)` 成功注册一个第三方登录 Provider 后，Hydro 的默认主题会自动在登录和注册页面生成对应的“使用 XXX 登录”按钮。