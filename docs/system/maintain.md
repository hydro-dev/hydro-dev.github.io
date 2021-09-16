# 维护

## 更新

Hydro 系统会不定期发布更新。

<CodeGroup>
<CodeGroupItem title="常规部署" active>

```sh
yarn global upgrade-interactive --latest
pm2 restart hydrooj # 更新完后需重启 hydrooj
```

</CodeGroupItem>
<CodeGroupItem title="开发者模式">

```sh
# 请在 Hydro 的安装文件夹内运行该命令
git pull # 拉取更新
yarn build # 编译后端
yarn build:ui:production # 编译前端
```

</CodeGroupItem>
</CodeGroup>

## 日志

<CodeGroup>
<CodeGroupItem title="常规部署" active>

```sh
pm2 log hydrooj
```

</CodeGroupItem>
<CodeGroupItem title="开发者模式">

控制台运行时可看到日志。

</CodeGroupItem>
</CodeGroup>