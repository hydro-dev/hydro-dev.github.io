# 高阶

仅推荐有一定基础的用户阅读该部分内容。

## 测评精度

The following issues can be considered to improve consistency in judging.

Disable CPU frequency scaling and Intel “Turbo Boost” to prevent fluctuations in CPU power.

Disable address-space randomization to make programs with memory addressing bugs give more reproducible results. To do that, you can add the following line to `/etc/sysctl.conf`:

```
kernel.randomize_va_space=0
```

Then run `sudo sysctl -p` to directly activate this setting.
