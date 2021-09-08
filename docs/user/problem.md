# 题目

## 创建题目

拥有 PERM_CREATE_PROBLEM 的用户均可以新建题目。  
请点击题库页面右下角的 `创建题目` 按钮。

:::tip
题目 ID 不能全为数字。若留空则使用自动分配的数字题号。
:::

## 导入题目

### 从 Hydro 导入

上传 Hydro 导出的题目压缩包即可。

### 从 SYZOJ 导入

在“导入自”一栏中填入要导入的题目的 URL（源站必须基于原版 SYZOJ/SYZOJ-NG 搭建），然后点击“导入”键即可。  
题目除测试数据以外的部分会直接导入，测试数据将会异步导入（取决于网络状况，这可能需要一段时间，请耐心等待）。  

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
推荐您在线编辑题目配置（点击 Create File，输入文件名 config.yaml），将检查配置有效性。

### 测试数据格式

#### 自动模式

:::tip
您可以直接选择文件（支持多选）上传或将文件拖拽至相应位置上传。  
若上传文件为 zip 格式，将会自动进行解压操作。
:::

对于一般的题目，您只需提供 `.in` 和 `.out/.ans` 文件，以下是一个例子。

```bash
喵? tree
.
├── a1.in
├── a1.out
├── a2.in
├── a2.out
├── a3.in
└── a3.out
```

测试数据将被自动识别，并使用 1S 256MB 的限制。

#### 使用配置文件

上传 `config.yaml` 文件即可，文件格式如下（下方所有样例均为可选项，若无说明则预填写的内容即为默认值）：

```yaml
# 题目类型，可以为 default(比对输出，含spj), submit_answer（提交答案）, interactive（交互题）
type: default

# 全局时空限制（此处的限制优先级低于测试点的限制）
time: 1s
memory: 128m

# 输入输出文件名（例：使用 foo.in 和 foo.out），若使用标准 IO 删除此配置项即可
filename: foo

# 此部分设置当题目类型为 default 时生效
# 比较器类型，支持的值有 default（直接比对，忽略行末空格和文件末换行）, ccr, cena, hustoj, lemon, qduoj, syzoj, testlib
checker_type: default
# 比较器文件（当比较器类型不为 default 时填写）
# 文件路径（位于压缩包中的路径）
# 将通过扩展名识别语言，与编译命令处一致。在默认配置下，C++ 扩展名应为 .cc 而非 .cpp
checker: chk.cc

# 此部分设置当题目类型为interactive时生效
# 交互器路径（位于压缩包中的路径）
interactor: interactor.cc

# Extra files 额外文件
# These files will be copied to the working directory 这些文件将被复制到工作目录。
# 提示：您无需手动上传 testlib.h。
user_extra_files:
  - extra_input.txt
judge_extra_files:
  - extra_file.txt

# Test Cases 测试数据列表
# If neither CASES or SUBTASKS are set(or config.yaml doesn't exist), judge will try to locate them automaticly.
# 如果 CASES 和 SUBTASKS 都没有设置或 config.yaml 不存在， 系统会自动尝试识别数据点。
# We support these names for auto mode: 自动识别支持以下命名方式：
# 1. [name(optional)][number].(in/out/ans)         RegExp: /^([a-zA-Z]*)([0-9]+).in$/
#   examples: 
#     - c1.in / c1.out
#     - 1.in / 1.out
#     - c1.in / c1.ans
# 2. input[number].txt / output[number].txt        RegExp: /^(input)([0-9]+).txt$/
#   - example: input1.txt / input2.txt
#
# The CASES option has higher priority than the SUBTASKS option!
# 在有 CASES 设置项时，不会读取 SUBTASKS 设置项！
score: 50     # 单个测试点分数
time: 1s      # 时间限制
memory: 256m  # 内存限制
cases:
  - input: abc.in
    output: def.out
  - input: ghi.in
    output: jkl.out
# 或使用Subtask项：
subtasks:
  - score: 30
    time: 1s
    memory: 64m
    cases:
      - input: a.in
        output: a.out
      - input: b.in
        output: b.out
  - score: 70
    time: 0.5s
    memory: 32m
    if: [0] # 可选，传入数组，表示仅在subtask0通过时此subtask才计分
    cases:
      - input: c.in
        output: c.out
      - input: d.in
        output: d.out

# 提交语言限制
# 列举出所有本题允许使用的语言对应的代码（需要和评测机 lang.yaml 内的语言代码相同）
langs:
  - c
  - cc
  - pas
```

可以在 [此题库](https://hydro.ac/d/system_test/) 中找到各种类型题目的配置示例。

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
