# 常见问题

## 使用安装脚本后忘记 MinIO 的 accessKey 和 secretKey 怎么办？

运行 `pm2 info minio`，在给出的信息中查找形如 `MINIO_ACCESS_KEY=<accessKey> MINIO_SECRET_KEY=<secretKey>` 的信息即可。

**在编辑系统设置时一些浏览器可能会自动填充 accessKey 和 secretKey，请务必注意。**

## 使用安装脚本后忘记 MongoDB 的账号密码怎么办？

可以在 `~/.hydro/config.json` 中找到 MongoDB 的账号与密码。
