# 域管理员文档

## 简介

域，可以理解为 OJ 中的 OJ。  
用户有权限为自己创建多个域。（取决于用户组设定，需要 PRIV_CREATE_DOMAIN 权限）。
同一 Hydro 实例上的多个域间完全独立，仅用户信息相通（您在一个 Hydro 实例上注册账户后，在该实例的所有域中均有效）。  

## 创建域

登录账号后，在“我的”选项卡中找到“我的域”，并点击“创建域”，填入以下信息：

- ID： 每个域有一个唯一的 ID，将会在域 URL 中体现。**创建后无法修改。**
- 名称： 域的名字，创建后可以更改。
- 公告： 域主页上显示的公告，创建后可以更改。
- avatar： 域头像，与用户头像同理，可以使用 `gravatar:email` 或 `qq:id` 或 `github:name` 的格式添加。将会在“我的域”界面内显示。

创建域后，您将在此域中拥有管理员权限，可以在域内进行添加题目/创建比赛等操作。

## 访问控制

**未登录用户将默认使用 `guest` 权限，登录用户将默认使用 `default` 权限。**  
所以将一个用户的权限设为 `default` 和将用户移出该域是等价的。

## 创建题目

### 直接创建

填入标题，标签，内容，选择是否需要隐藏，修改题目 ID。  
可以通过右侧的分类栏快速添加一些标签。

:::tip
题目 ID 不能全为数字。若留空则使用自动分配的数字题号。
:::

### 从 Hydro 导入

您可以从其他 Hydro 实例中将符合以下条件的题目导入：

- 您创建的；
- 或您在域内拥有 PERM_READ_TESTDATA（下载测试数据） 权限的；

进入源站上的题目界面，点击右侧的“发送题目”，在弹出的对话框中填入接收站的地址，格式为： `<接收域 ID>@<所在 OJ 网址>`。如： `hydro@https://hydro.org.cn/` 代表将题目发送到 `https://hydro.org.cn/` 站下的 `hydro` 域。

然后进入目标域，选择“从 Hydro 导入”，即可在列表中找到发送的题目，点击“提交”即可完成导入。

:::tip
题目传输可能需要一段时间，这将表现为页面加载缓慢，请不要反复点击，防止导入多次。  
接收到的题目在一周后会自动从接收列表中删除。  
:::

:::warning
在完成接收题目前请勿将源站上的对应题目删除。
:::

### 从 SYZOJ 导入

在“导入自”一栏中填入要导入的题目的 URL（源站必须基于原版 SYZOJ/SYZOJ-ng 搭建），然后点击“导入”键即可。  
题目除测试数据以外的部分会直接导入，测试数据将会异步导入（取决于网络状况，这可能需要一段时间，请耐心等待）。  

### 从 FPS 文件导入

见插件 [fps-importer](/plugins/fps-importer/)。

### 从 QDUOJ 导入

见插件 import-qduoj
<!-- TODO -->

## 测试数据格式

### 自动模式

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

测试数据将被自动识别，并使用 1s 256mb 的限制。

### 使用配置文件

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
```

[Special Judge样例数据包下载](https://undefined.moe/hydro/testdata_spj_example.zip)

## 创建比赛

若您想要创建比赛，您可以在“比赛”选项卡中点击“创建一个比赛”按钮，并填写：

- 规则；
- 标题；
- 开始日期，时间；
- 持续时间；
- 题目： 此比赛包含的题目的 **ID**，若有多个则用逗号分隔；
- 内容： 该比赛的详细介绍；
- 是否 Rated： 该比赛是否会改变参加选手的 RP。

设置完后可点击“创建”按钮创建比赛。

## 创建作业

若您想要创建作业，您可以在“作业”选项卡中点击“创建作业”按钮，并填写：

- 标题；
- 开始日期、时间；
- 结束日期、时间；
- 最长延期；
- 延期递交扣分规则；
- 题目：此作业包含的题目的 **ID**，若有多个则用逗号分隔；
- 内容：该作业的详细介绍。

之后点击“创建”按钮进行创建。

## 初始化讨论节点

您可以在“管理域”选项卡中点击“初始化讨论节点”按钮初始化讨论节点。
