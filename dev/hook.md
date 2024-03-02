# 使用 TypeScript 编写插件

请注意：在阅读本节之前，请确认您已阅读【使用 TypeScript 编写插件】一节并已完成了插件的创建。

## 示例

```ts
import { Context, Time } from 'hydrooj';

export async function apply(ctx: Context) {
    // handler 表示路由事件
    // after 表示在主逻辑完成后运行，同时支持 before, before-operation, 参照 【插件编写】 章节 【请求流程】
    // RecordDetail 为需要捕获的路由名
    // #get 表示仅捕获 GET 请求，若无此后缀表示捕获该路由的所有请求
    ctx.on('handler/after/RecordDetail#get', (h) => { // handler 系列钩子的一参数为对应的 Handler 实例
        if (h.rdoc._id.getTimestamp() < new Date(Date.now() - Time.day)) {
            h.rdoc.code = '';
        }
    });
}
```
