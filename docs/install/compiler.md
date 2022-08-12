# 编译器

从 2022/8/12 开始，Hydro 为了避免宿主机环境变化对于评测的影响，对于 **此后新安装的实例** 默认使用 [nix]() 管理环境。  
如果你是在这之前安装的 Hydro，请使用 apt 安装编译器后使用 `pm2 restart hydro-sandbox` 重启沙箱，并忽略本章节。

以下是 nix 的简要操作说明：

## 安装新编译器

使用 `nix-env -iA nixpkgs.编译器名` 安装，后重启沙箱 `pm2 restart hydro-sandbox` 生效。

可以在 [Nixos Search](https://search.nixos.org/packages) 中搜索你需要的编译器。  
以下是常用编译器的示例：

```sh
nix-env -iA nixpkgs.busybox nixpkgs.bash nixpkgs.diffutils nixpkgs.unzip # 基础组件，已预装，不建议删除
nix-env -iA nixpkgs.gcc nixpkgs.fpc # C/C++ 和 Pascal，已预装，不建议删除
nix-env -iA nixpkgs.ghc # Haskell 
nix-env -iA nixpkgs.rustc # Rust
nix-env -iA nixpkgs.python2 # Python2
nix-env -iA nixpkgs.pythonPackages.numpy # Python2 Numpy 库
nix-env -iA nixpkgs.python3Minimal
nix-env -iA nixpkgs.python3Packages.numpy
nix-env -iA nixpkgs.php # PHP
nix-env -iA nixpkgs.go # Golang
nix-env -iA nixpkgs.nodejs # NodeJS
nix-env -iA nixpkgs.openjdk_headless # Java
nix-env -iA nixpkgs.ruby # Ruby
nix-env -iA nixpkgs.mono # C#
nix-env -iA nixpkgs.julia_17-bin # Julia
```

## 删除编译器

使用 `nix-env -q` 查看已安装的列表，后使用 `nix-env -e 编译器名` 删除。  
请注意不要误删 Hydro 基础组件，且操作完成后需要重启沙箱 `pm2 restart hydro-sandbox` 生效。
