# Vjudge

:::warning
此文档已过时，仅作留存使用，请前往 FAQS 查看使用指南。
:::

## Codeforces

由于 vjudge 更新了反爬虫机制，Codeforces RemoteJudge 需要一些特殊手段才能正常工作。  
详情请 [阅读源码](https://github.com/hydro-dev/Hydro/blob/master/packages/vjudge/src/providers/codeforces.ts)

安装插件后创建名为 codeforces 的域，进入数据库 `db.domain.updateOne({_id:'codeforces'},{$set:{mount:'codeforces'}});`  

在 codeforces 的域设置中，将 `allowedLangs` 如下配置：

```
codeforces,codeforces.43,codeforces.52,codeforces.50,codeforces.54,codeforces.59,codeforces.61,codeforces.65,codeforces.9,codeforces.28,codeforces.32,codeforces.12,codeforces.60,codeforces.36,codeforces.48,codeforces.19,codeforces.3,codeforces.4,codeforces.51,codeforces.13,codeforces.6,codeforces.7,codeforces.31,codeforces.40,codeforces.41,codeforces.67,codeforces.49,codeforces.20,codeforces.34,codeforces.55
```

在 vjudge 表中插入如下条目：

```js
{type:'codeforces', handle:'<codeforces login handle>', password:'<codeforces login password>'}
```

将如下配置添加至 langs 设置末尾：

```yaml
codeforces:
  execute: none
  display: Codeforces
  domain:
  - codeforces # Allow domain 'codeforces' to use these languages
codeforces.43:
  highlight: cpp astyle-c
  monaco: cpp
  display: GNU GCC C11 5.1.0
  comment: //
codeforces.52:
  highlight: cpp astyle-c
  monaco: cpp
  display: Clang++17 Diagnostics
  comment: //
codeforces.50:
  highlight: cpp astyle-c
  monaco: cpp
  display: GNU G++14 6.4.0
  comment: //
codeforces.54:
  highlight: cpp astyle-c
  monaco: cpp
  display: GNU G++17 7.3.0
  comment: //
codeforces.59:
  highlight: cpp astyle-c
  monaco: cpp
  display: Microsoft Visual C++ 2017
  comment: //
codeforces.61:
  highlight: cpp astyle-c
  monaco: cpp
  display: GNU G++17 9.2.0 (64 bit, msys 2)
  comment: //
codeforces.65:
  highlight: cpp astyle-cs
  monaco: csharp
  display: C# 8, .NET Core 3.1
  comment: //
codeforces.9:
  highlight: cpp astyle-cs
  monaco: csharp
  display: C# Mono 6.8
  comment: //
codeforces.28:
  highlight: d
  monaco: plain
  display: D DMD32 v2.091.0
  comment: //
codeforces.32:
  highlight: go
  display: Go 1.15.6
  comment: //
codeforces.12:
  highlight: haskell
  display: Haskell GHC 8.10.1
  comment: --
codeforces.60:
  highlight: java astyle-java
  monaco: java
  display: Java 11.0.6
  comment: //
codeforces.36:
  highlight: java astyle-java
  monaco: java
  display: Java 1.8.0_241
  comment: //
codeforces.48:
  highlight: kotlin
  display: Kotlin 1.4.0
  comment: //
codeforces.19:
  highlight: ocaml
  monaco: plain
  display: OCaml 4.02.1
  comment: ['(*','*)']
codeforces.3:
  highlight: pascal
  display: Delphi 7
  comment: //
codeforces.4:
  highlight: pascal
  display: Free Pascal 3.0.2
  comment: //
codeforces.51:
  highlight: pascal
  display: PascalABC.NET 3.4.2
  comment: //
codeforces.13:
  highlight: perl
  display: Perl 5.20.1
  comment: '#'
codeforces.6:
  highlight: php
  display: PHP 7.2.13
  comment: //
codeforces.7:
  highlight: python
  display: Python 2.7.18
  comment: '#'
codeforces.31:
  highlight: python
  display: Python 3.9.1
  comment: '#'
codeforces.40:
  highlight: python
  display: PyPy 2.7 (7.3.0)
  comment: '#'
codeforces.41:
  highlight: python
  display: PyPy 3.7 (7.3.0)
  comment: '#'
codeforces.67:
  highlight: ruby
  display: Ruby 3.0.0
  comment: '#'
codeforces.49:
  highlight: rust
  display: Rust 1.49.0
  comment: //
codeforces.20:
  highlight: scala
  display: Scala 2.12.8
  comment: //
codeforces.34:
  highlight: javascript
  display: JavaScript V8 4.8.0
  comment: //
codeforces.55:
  highlight: javascript
  display: Node.js 12.6.3
  comment: //
```

之后再重启 Hydro 即可。
