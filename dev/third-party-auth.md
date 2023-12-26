# 接入第三方账号系统

Hydro 支持接入第三方的账号系统，并且有以下内置模块可用：

- @hydrooj/login-with-github
- @hydrooj/login-with-google

## 对接其他平台

在阅读本节之前，请确保你已阅读 【插件开发】 章节。

以 Github 登录为例：

```ts
import {
    Context, ForbiddenError, Handler, superagent, SystemModel,
    TokenModel, UserFacingError, ValidationError,
} from 'hydrooj';

declare module 'hydrooj' {
    interface SystemKeys {
        'login-with-github.id': string;
        'login-with-github.secret': string;
        'login-with-github.endpoint': string;
    }
}

// 当用户点击 【使用 XX 登录】 按钮时，此函数会被执行
async function get(this: Handler) {
    // 从系统设置中获取基础设置，并储存状态信息（完成登录逻辑后应该跳转到哪一页）
    const [appid, [state]] = await Promise.all([
        SystemModel.get('login-with-github.id'),
        TokenModel.add(TokenModel.TYPE_OAUTH, 600, { redirect: this.request.referer }),
    ]);
    this.response.redirect = `https://github.com/login/oauth/authorize?client_id=${appid}&state=${state}&scope=read:user,user:email`;
}

// 当用户在三方系统中完成授权，需要重定向到 /oauth/xxx/callback，这时所有返回的参数作为 callback 的一参数传入。
async function callback({ state, code }) {
    // 获取系统设置和之前的状态。
    const [[appid, secret, endpoint, url], s] = await Promise.all([
        SystemModel.getMany([
            'login-with-github.id',
            'login-with-github.secret',
            'login-with-github.endpoint',
            'server.url',
        ]),
        TokenModel.get(state, TokenModel.TYPE_OAUTH),
    ]);
    if (!s) throw new ValidationError('token');
    // 使用从 url 中返回的 token 请求第三方的 API，获取用户信息，作为函数返回。
    // 在 OAuth 协议中，需要使用 state 和 code 换取 access_token 再调用 API，这在不同系统中可能设计不同。
    // 系统会根据返回的用户信息自动查找已有用户或是创建新用户。
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
    const userInfo = await superagent.get(`${endpoint ? `${endpoint}/api` : 'https://api.github.com'}/user`)
        .set('User-Agent', 'Hydro-OAuth')
        .set('Accept', 'application/vnd.github.v3+json')
        .set('Authorization', `token ${t}`);
    const ret = {
        _id: `${userInfo.body.id}@github.local`,
        email: userInfo.body.email,
        bio: userInfo.body.bio,
        // 提供多个用户名，若需创建用户则从前往后尝试，直到用户名可用
        uname: [userInfo.body.name, userInfo.body.login].filter((i) => i),
        avatar: `github:${userInfo.body.login}`,
    };
    await TokenModel.del(s._id, TokenModel.TYPE_OAUTH);
    if (!ret.email) throw new ForbiddenError("You don't have a verified email.");
    return ret;
}

// 注册此模块。
export function apply(ctx: Context) {
    ctx.provideModule('oauth', 'github', {
        text: 'Login with Github',
        callback,
        get,
    });
    ctx.i18n.load('zh', {
        'Login With Github': '使用 Github 登录',
    });
}
```
