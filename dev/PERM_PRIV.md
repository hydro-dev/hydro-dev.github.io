# 权限节点

Hydro 的权限使用位运算处理。  
例：若某用户具有 `PRIV_EDIT_SYSTEM` 与 `PRIV_SET_PERM` 权限，应设置为 `(1<<0)|(1<<1)` （即 3）

```js
export const PRIV = {
    PRIV_NONE: 0,
    PRIV_EDIT_SYSTEM: 1 << 0, // renamed from PRIV_SET_PRIV
    PRIV_SET_PERM: 1 << 1,
    PRIV_USER_PROFILE: 1 << 2,
    PRIV_REGISTER_USER: 1 << 3,
    PRIV_READ_PROBLEM_DATA: 1 << 4,
    PRIV_READ_PRETEST_DATA: 1 << 5, // deprecated
    PRIV_READ_PRETEST_DATA_SELF: 1 << 6, // deprecated
    PRIV_READ_RECORD_CODE: 1 << 7,
    PRIV_VIEW_HIDDEN_RECORD: 1 << 8,
    PRIV_JUDGE: 1 << 9, // (renamed)
    PRIV_CREATE_DOMAIN: 1 << 10,
    PRIV_VIEW_ALL_DOMAIN: 1 << 11,
    PRIV_MANAGE_ALL_DOMAIN: 1 << 12,
    PRIV_REJUDGE: 1 << 13,
    PRIV_VIEW_USER_SECRET: 1 << 14,
    PRIV_VIEW_JUDGE_STATISTICS: 1 << 15,
    PRIV_CREATE_FILE: 1 << 16,
    PRIV_UNLIMITED_QUOTA: 1 << 17,
    PRIV_DELETE_FILE: 1 << 18,
    PRIV_DELETE_FILE_SELF: 1 << 19,
    PRIV_ALL: -1,

    PRIV_DEFAULT: 0,
};
```