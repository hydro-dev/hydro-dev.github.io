# 题目

## 创建题目

拥有 PERM_CREATE_PROBLEM 的用户均可以新建题目。  
请点击题库页面右下角的 `创建题目` 按钮。

:::tip
题目 ID 不能全为数字。若留空则使用自动分配的数字题号。
:::

详见下方题面编辑部分，以及 [laomai 编写的说明](./problem-create.md)

## 导入题目

### 从 Hydro 导入

上传 Hydro 导出的题目压缩包即可。

如果您的压缩包较大无法上传我们也提供cli导入方法：

```
hydrooj cli problem import <domainId> <file/path> # 将 <file(压缩文件)/path(解压后的文件夹)> 的Hydro格式题目包导入至 <domainId> 域中。
```

### 从 SYZOJ 导入

Hydro 提供了一个小工具 [loj-download](https://github.com/hydro-dev/loj-download)，可从基于原版 SYZOJ/SYZOJ-NG 搭建的源站下载到符合Hydro格式的题目压缩包。  
工具使用方法请前往使用教程查看，自行摸索并确保在网络通畅的环境下使用。

### 从 FPS 文件导入

见插件 [fps-importer](/plugins/fps-importer/)。

### 从 QDUOJ 导入

见插件 import-qduoj。
<!-- TODO -->

## 编辑

### 题面

题面使用 Markdown 语法，并进行了部分扩展。  

支持对样例数据分组显示：

<pre><code>```input1
1 2
```

```output1
3
```</code></pre>

后接的数字为测试点编号，将自动合并，并左右分栏显示。

支持从附加文件引用资源。（您可以先创建题目，上传相关文件后再编辑该题目）

- 附加文件下载链接： `[file](file://input.in)`
- 从附加文件引用一张图片： `![img](file://foo.jpg)`
- 从附加文件引用 pdf 作为题面：`@[pdf](file://foo.pdf)` （部分情况下若无法使用，请尝试 `@[pdf](file://foo.pdf?noDisposition=1)` ） 
- 从附加文件引用 word 文档作为题面： `@[doc](file://foo.docx)` （依赖 onlyoffice 插件）
<!-- TODO -->

:::tip
如果您在使用外部的存储服务，部分服务商可能会强制发送 `Content-Disposition` 导致文件直接被下载而非预览。详询对应服务商。

- https://cloud.tencent.com/document/product/436/96243
- https://help.aliyun.com/zh/oss/user-guide/how-to-ensure-an-object-is-previewed-when-you-access-the-object
:::

题面支持合并表格：

```markdown
| 1   | 1   | 3   | 4   | 5   |
| --- | --- | --- | --- | --- |
| 1   | 1   | 2   | 2   | 6   |
| 1   | 1   | 2   | 2   | 7   |
| 1   | 4   | 3   | 5   | 5   |
```

将被渲染为：

![img](./pictures/pict1.png)

支持内嵌 HTML：（用来对付部分 Markdown 搞不定的东西）

```markdown
<span bgcolor="red">foo</span>
```

### 标签

可点击右侧分类面板快速添加标签，也可以用英文半角逗号分隔多个标签。

## 文件

您可以在题目右侧“文件”面板上传测试数据和附加文件。（支持拖拽文件至相应位置进行上传）  
[测试数据格式](/docs/user/testdata)。

## 客观题

### 题面

```yaml
1. 填空题

1+1 = {{ input(1) }}

2. 选择题

{{ select(2) }}
- 1+1=2
- 1+1=3
- 1+1=4

3. 多选题

{{ multiselect(3) }}
- A
- B
- C
```

### 测试数据

仅需要配置 config.yaml 即可，不需要上传其他文件。

```yaml
type: objective # 表明该题为客观题
answers: # 列举出每一题的正确选项与对应的得分
  '1': ['2', 50] # 填空题/选择题，单答案
  '2': # 填空题/选择题，多答案，不同答案对应不同分数，注意空格缩进
    'A': 30 # 也可以使用相同分数，即同时存在多个正确答案
    'B': 10
  '3': [['A', 'B'], 20] # 多选题答案为数组，有部分分
```
