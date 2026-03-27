---
title: Write Plugins with TypeScript - Hooks
---

## Using Hooks in Plugins

Hooks allow you to intercept and modify system behavior at specific points in the execution flow.

### Handler Hooks
You can listen for events on specific routes using the following syntax:
`handler/<timing>/<RouteName>#<Method>`

- **Timing**: `before`, `before-operation`, `after`.
- **RouteName**: The internal name of the route (e.g., `RecordDetail`).
- **Method**: (Optional) `get` or `post`. If omitted, all methods are captured.

**Example: Restricting Code Visibility**
This hook prevents users from viewing submission code if the record is more than 24 hours old.

```ts
import { Context, Time } from 'hydrooj';

export async function apply(ctx: Context) {
    // Intercept the RecordDetail route after the main logic completes
    ctx.on('handler/after/RecordDetail#get', (h) => {
        // 'h' is the Handler instance. We can access the record data via h.rdoc.
        const oneDayAgo = new Date(Date.now() - Time.day);
        if (h.rdoc._id.getTimestamp() < oneDayAgo) {
            h.rdoc.code = 'Access Expired';
        }
    });
}
```

### Injecting Methods into Handlers
If you need to replace or extend a method in an existing Handler class, use `withHandlerClass`.

**Example: Overriding Homepage Announcements**
```ts
import { Context } from 'hydrooj';

async function customGetAnnounce(domainId: string, limit = 5) {
    // Custom logic to fetch announcements...
    return []; 
}

export async function apply(ctx: Context) {
    // Wait for HomeHandler to be registered, then modify its prototype
    ctx.withHandlerClass('HomeHandler', (HomeHandler) => {
        HomeHandler.prototype.getAnnounce = customGetAnnounce;
    });
}
```

