---
title: 钩子机制
---
请注意：在阅读本节之前，请确认您已阅读[使用 TypeScript 编写插件 - 以剪贴板插件为例](./typescript)一节并已完成了插件的创建。本节将深入探讨如何在插件中使用钩子（Hook）机制来扩展或修改系统的核心行为。

钩子系统通过 `ctx.on` 和 `ctx.withHandlerClass` 两种方式注册和管理钩子，允许插件开发者在不修改核心代码的情况下，在特定事件发生时执行自定义逻辑。这使得插件能够灵活地与 OJ 进行交互。

## 1. `ctx.on`: 监听系统事件

`ctx.on` 用于监听 OJ 内部发出的各种事件。其中最常用的是 `handler` 系列钩子，它允许你在路由处理的不同阶段插入自定义逻辑。

### 1.1. `handler` 系列钩子详解

`handler` 系列钩子与[标准的处理请求流程](./typescript#step-21插件路由执行顺序和基础定义)紧密相关。

一个 `handler` 钩子的名称通常遵循以下模式：`handler/[before|before-operation|after]/[路由名]#[请求方法]`。

* **`before`**: 在路由处理器的 `prepare` 函数执行**之前**触发。
* **`before-operation`**: 在路由处理器的 `prepare` 函数执行**之后**，但在 `get` 或 `post` 函数（包括 `post[Operation]`）执行**之前**触发。
* **`after`**: 在路由处理器的 `get`, `post`, 或 `post[Operation]` 函数执行**之后**，但在 `cleanup` 函数执行**之前**触发。

**示例：拦截并修改路由请求结果**

以下示例展示了如何在 `RecordDetail` 路由的 `GET` 请求处理完成后，修改其返回的数据。

```ts
import { Context, Time } from 'hydrooj';

export async function apply(ctx: Context) {
    // 监听 'RecordDetail' 路由的 GET 请求在主逻辑处理完成后 (after) 触发的事件。
    // 钩子的第一个参数 `h` 是对应的 Handler 实例，可以通过它访问请求上下文和响应数据。
    ctx.on('handler/after/RecordDetail#get', (h) => { 
        // 假设 h.rdoc 包含了提交记录的信息，且我们不希望用户看到 24 小时以前的提交代码。
        if (h.rdoc._id.getTimestamp() < new Date(Date.now() - Time.day)) {
            h.rdoc.code = ''; // 清空代码字段
        }
    });
}
```

## 2. `ctx.withHandlerClass`: 扩展或修改处理器类

`ctx.withHandlerClass` 允许你获取并修改 HydroOJ 内部的 `Handler` 类。这对于想要在不重写整个处理器的情况下，向现有处理器添加新方法或覆盖其现有方法非常有用。

**示例：为 `HomeHandler` 添加公告获取方法**

以下示例展示了如何为 `HomeHandler` 类添加一个 `getAnnounce` 方法。

```ts
import { Context } from 'hydrooj';

// 这是一个自定义的异步函数，用于获取公告数据
async function getAnnounce(domainId: string, limit = 5) {
    // 这里可以实现从数据库或其他服务获取公告的逻辑
    // ... 实际获取公告的逻辑 ...
    const adocs: any[] = []; // 假设这里获取到了公告数据
    return adocs;
}

export async function apply(ctx: Context) {
    // 获取 HomeHandler 类，并通过回调函数对其进行修改。
    ctx.withHandlerClass('HomeHandler', (HomeHandler) => {
        // 将自定义的 getAnnounce 函数作为原型方法添加到 HomeHandler 中。
        // 这样，在 HomeHandler 的实例中就可以调用 h.getAnnounce()。
        HomeHandler.prototype.getAnnounce = getAnnounce;
    });
}
```
