# 测试数据格式

:::tip
Vijos 格式的测试数据在 Hydro 仍然可用，但不再推荐使用。
:::

## 自动模式

:::tip
在新版本的 hydrooj 中，您可以直接选择文件并上传。  
如果您真的有需要通过压缩包上传数据，您可以将压缩包命名为 `testdata.zip` 并上传，hydrooj 将会帮您解压并上传。
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

测试数据将被自动识别，并使用 1s 256mb 的限制。

## 使用配置文件

上传 `config.yaml` 文件即可，文件格式如下：

```yaml
# 题目类型，可以为 default(比对输入输出，包括spj), submit_answer（提交答案）, interactive（交互题）
type: default

# 全局时空限制（此处的限制优先级低于测试点的限制）不填则使用默认值
time: 1s
memory: 128m

# 输入输出文件名，需要标准IO则填null
filename: null

# 此部分设置当题目类型为default时生效
# 比较器类型，支持的值有 default, ccr, cena, hustoj, lemon, qduoj, syzoj, testlib
checker_type: default
# 比较器文件（当比较器类型不为default时填写）
# 文件路径（位于压缩包中的路径）  通过扩展名识别语言。C++用户请注意：扩展名应为 .cc 而非 .cpp
checker: chk.cc

# 此部分设置当题目类型为interactive时生效
# 交互器路径（位于压缩包中的路径）
interactor: interactor.cc

# Extra files 额外文件
# These files will be copied to the working directory 这些文件将被复制到工作目录。
# 提示：如果spj的编译需要其他文件（如testlib.h），请将其纳入judge_extra_files中。
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
```

[Special Judge样例数据包下载](https://undefined.moe/hydro/testdata_spj_example.zip)
