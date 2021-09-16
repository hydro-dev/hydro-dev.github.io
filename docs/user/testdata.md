# 测试数据格式

## 自动模式

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

## 使用配置文件

:::tip
推荐您在线编辑题目配置（点击 Create File，输入文件名 `config.yaml`），将检查配置有效性。
:::

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
