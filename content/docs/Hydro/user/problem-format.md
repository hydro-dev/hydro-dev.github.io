---
title: Hydro Problem Format
---

为了便于系统间进行数据交换，Hydro 定义了一种基于 zip 的标准格式用于题目传输。压缩包内文件结构如下：

```
喵? tree
.
├── 任意文件名的文件夹
│   ├── problem.yaml
│   ├── problem_zh.md
│   ├── testdata
│   │   ├── config.yaml
│   │   ├── a1.in
│   │   ├── a1.out
│   │   ├── a2.in
│   │   ├── a2.out
│   │   ├── a3.in
│   │   └── a3.out
│   └── additional_file
│       ├── a.png
│       └── b.pdf
└── ...
```

其中 problem.yaml 内容如下：

```yaml
title: 题目名
tag:
- 标签1
- 标签2
pid: 题号（字母+数字）
```

problem_*.md 中为 markdown 格式的题面，语言代号支持完整形式（如 zh_CN），也支持短形式（如 zh）。若同时存在多个语言的题面，Hydro 将会自动识别并提供切换功能。

testdata 文件夹中存放所有测试数据文件，命名规则和配置文件格式请参照【测试数据格式】章节。

additional_file 中存储附加文件，通常用于存放图片，PDF 等文件。这些文件可以在题面中使用 file://文件名 的路径访问。
