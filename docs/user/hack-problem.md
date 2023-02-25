# 为题目配置hack

为一道题目配置hack很简单，需要分别配置 `checker`（检查程序是否正确） 和 `validator`（检查样例是否合法）。
有关于这部分的内容请参照testlib配置。
下面，我们以 [A+B problem](https://hydro.ac/d/system_test/p/15) 为例，进行hack配置。

首先，创建一道题目，正常上传样例。
如果无误，那么评测设置的页面中yaml应该和这样类似。

```yaml
type: default
subtasks:
  - score: 100
    id: 1
    type: sum
    cases:
      - input: 1.in
        output: 1.out
```

然后配置checker:

:::tip
温馨提示，testlib对格式的要求很严格（精确到字符）
:::

```cpp
#include "testlib.h"
int main(int argc, char** argv) {
    registerTestlibCmd(argc, argv);
    int a = inf.readLong();
    inf.readSpace();
    int b = inf.readLong();
    int ans = ouf.readLong();
    inf.readEof();
    ouf.readEof();
    if (a + b == ans)
        quitf(_ok, "ok"); // 这代表你的代码运行正确
    else
        quitf(_wa, "wa"); // 这代表你的代码运行错误
    return 0;
}
```

以及validator：

```cpp
#include "testlib.h"
int main() {
    registerValidation();
    int a = inf.readLong();
    inf.readSpace();
    int b = inf.readLong();
    inf.readEof();
    // 不需要返回什么，只需要按照样例读入一遍，检查有没有超范围就行
    // 因为如果格式错误会直接返回
    return 0;
}
```

在config.yaml里加上

```yaml
type: default
time: 1s
memory: 256m
checker_type: testlib
checker: checker.cc
validator: validator.cc
subtasks:
  - score: 97
    id: 1
    cases:
      - input: 1.in
        output: 1.out
  - score: 3
    id: 2
    cases:
      - input: 1.in
        output: 1.out
      # hack会自动附加到这里
```

然后就可以正常使用hack了，在他人递交的代码处会有一个hack按钮，你只需要给入输入，当你的hack成功后，它会自动被加到 `subtask #2` 里面，并对通过的所有用户进行评测。
