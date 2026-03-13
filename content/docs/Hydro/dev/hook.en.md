---
title: Write Plugins with TypeScript - Hooks
---

Please note: before reading this section, make sure you have read the "Write Plugins with TypeScript" section and completed plugin creation.

## Examples

```ts
import { Context, Time } from 'hydrooj';

export async function apply(ctx: Context) {
    // handler indicates route events
    // after means running after main logic completes; before and before-operation are also supported, see the "Plugin Development" chapter "Request Flow"
    // RecordDetail is the route name to capture
    // #get means capture GET requests only; without this suffix, all requests of this route are captured
    ctx.on('handler/after/RecordDetail#get', (h) => { // first parameter for handler-series hooks is the corresponding Handler instance
        // do not allow viewing submission records older than 24 hours
        if (h.rdoc._id.getTimestamp() < new Date(Date.now() - Time.day)) {
            h.rdoc.code = '';
        }
    });
}
```

```ts
import { Context } from 'hydrooj';

async function getAnnounce(domainId: string, limit = 5) {
    // get announcements...
    return adocs;
}

export async function apply(ctx: Context) {
    ctx.withHandlerClass('HomeHandler', (HomeHandler) => {
        // modify a method in HomeHandler (add announcements)
        HomeHandler.prototype.getAnnounce = getAnnounce;
    });
}
```
