# 题目

## 创建题目

拥有 PERM_CREATE_PROBLEM 的用户均可以新建题目。  
请点击题库页面右下角的 `创建题目` 按钮。

:::tip
题目 ID 不能全为数字。若留空则使用自动分配的数字题号。
:::

详见 [laomai 编写的说明](./problem-create.md)

## 导入题目

### 从 Hydro 导入

上传 Hydro 导出的题目压缩包即可。

### 从 SYZOJ 导入

#### 下载

下载很简单，因为不需要其余步骤，只需要 clone 或下载安装包即可。

您可在下载 `Git` 命令的情况下使用 `git clone https://github.com/hydro-dev/loj-download` 在您选中的文件夹下 clone 源码。

或您有其他需求，可以选择 [此下载链接][https://github.com/hydro-dev/loj-download/archive/refs/heads/master.zip] ，下载源码压缩包。

若您使用 zip 下载，请您通过 `unzip` 命令手动解压（具体操作请您尝试百度）；若使用 `Git` 命令，`Git`会自动帮您解压到`/您选中的文件夹/loj-download` 目录下，即您可忽略此步骤。

#### 使用

由于 `js` 文件需要下载依赖，所以您不能立即运行。

请您在使用前回到命令行，并使用 `cd` 命令回到 `loj-download` 文件夹内，使用 `yarn` 命令下载所需依赖。

若提示您未安装 `yarn` 命令，请您使用 `npm install -g yarn` 安装 `yarn` 。

耐心等待依赖安装完成后，请您再次 `cd` 到 `/您选中的文件夹/loj-download/bin` 目录下，并执行以下命令：

```js
node loj-download.js https://您需要拷贝的题目的网址
```

执行完成后，请耐心等待题目拷贝完成。

若您第一次下载未完成，**请不要急于寻求帮助**，可能是运行或 web连接 问题，请先重复执行几次该命令。具体如下：

![多安装几次][https://blog.k1zxiaokeai.com/usr/uploads/2022/03/2785971967.png]

#### 导入

运行完成后，您可在 `/您选中的文件夹/downloads/题目来源网址/对应题号` 下找到对应网址所下载的题目。

![题目位置][https://blog.k1zxiaokeai.com/usr/uploads/2022/04/4242801667.png]

##### 压缩包导入（推荐）

`Hydro` 支持 `loj-download` 模式下导入题目的格式，所以您可直接按照以下步骤导入您下载的题目。

首先，请您回到 `/您选中的文件夹/downloads/题目来源网址` 目录下，里面应该会含有您在该网站下载的题目。

![题号][https://blog.k1zxiaokeai.com/usr/uploads/2022/04/381249278.png]

`Hydro` 的题目导入支持一个压缩包内含有多个题目。您需**返回上一级目录**，执行 `zip -r 你想要的标题.zip 您需要的目录/ 或多个目录/` 命令，将该文件夹或多个题目的文件夹压缩成 `.zip` 格式的压缩包。这里我拿来演示的题号是 2088 和 3，如下图：

![压缩包格式][https://blog.k1zxiaokeai.com/usr/uploads/2022/04/93428854.png]

我们可以看到，这里已经将两个题目的目录成功压缩到名为 `a.zip` 的压缩包中了。

接下来，您只需要将该压缩包直接使用 `从 Hydro 导入` 导入进您的题库即可。

*注：返回上一级目录是必要操作，否则会影响导入题目功能的正常读取。*

##### 普通导入

普通导入理解上会相对简单，但是步骤较多，操作复杂。

若要拷贝题面，请进入对应目录，选中 `problem_zh.md` 或 `problem_您需要的语言.md` 并打开，复制所有内容。

回到您的 OnlineJudge ，单击“新建题目”，粘贴您刚复制的内容，并根据需要在 `problem.yaml` 中拷贝您需要的题目标签，并按照“新建题目”中的关于标签的添加格式添加即可。

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
- 从附加文件引用 pdf 作为题面：`@[pdf](file://foo.pdf)` （该功能在部分环境可能不正常。请考虑使用 [hydro-pdf](https://github.com/Ri-moe/hydro-pdf) 插件。）
- 从附加文件引用 word 文档作为题面： `@[doc](file://foo.docx)` （依赖 onlyoffice 插件）
<!-- TODO -->

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

由于客观题的题面和测试数据配置均与其他题目不同，所以这里单独给出配置客观题的方法。

### 题面

题面需要以 yaml 格式给出。

```yaml
# 第 0 道题目
- desc: 这是一道普普通通的选择题
  choices: # 如果是选择题需要包含 choise 选项并列出题目的每一个选项的具体信息。
  - A. 1 + 1 = 1
  - B. 1 + 1 = 2
  - C. 1 + 1 = 3
# 第 1 道题目
- desc: 1 + 1 = ?
# 若不包含 choise 选项则该题为填空题
```

上面这个例子对应的题面为：

![img](./pictures/pict2.png)

### 测试数据

仅需要配置 config.yaml 即可，不需要上传其他文件。

```yaml
type: objective # 表明该题为客观题
outputs: # 列举出每一题的正确选项与对应的得分
  - [B. 1 + 1 = 2, 50]
  - ['2', 50]
```
