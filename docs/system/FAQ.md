# 常见问题

## 如何关闭用户注册？

用户注册由 Guest 用户（uid为0）的 PRIV_REGISTER_USER 权限控制，使用 `hydrooj cli user setPriv 0 0` 关闭即可。
