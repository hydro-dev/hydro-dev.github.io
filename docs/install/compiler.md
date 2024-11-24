# 编译器

从 2022/8/12 开始，Hydro 为了避免宿主机环境变化对于评测的影响，对于 **此后新安装的实例** 默认使用 [nix]() 管理环境。  
如果你是在这之前安装的 Hydro，请使用 apt 安装编译器后使用 `pm2 restart hydro-sandbox` 重启沙箱，并忽略本章节。

以下是 nix 的简要操作说明：

使用 `nix-env -iA nixpkgs.编译器名` 安装新编译器，后重启沙箱 `pm2 restart hydro-sandbox` 生效。

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

使用 `nix-env -q` 查看已安装的列表，后使用 `nix-env -e 编译器名` 即可删除对应的编译器。  
请注意不要误删 Hydro 基础组件，且操作完成后需要重启沙箱 `pm2 restart hydro-sandbox` 生效。

## 进阶

如果你需要更加复杂的编译环境配置，我们建议使用编写单独的 nix 文件。

```nix
{ 
  system ? builtins.currentSystem,
  pkgs ? import <nixpkgs> { system = system; }
}:

pkgs.buildEnv {
  name = "hydrojudge-rootfs";
  paths = with pkgs; [
    coreutils bash diffutils nix zip unzip gcc
    # 上方包是评测所需要的，请勿删除，
    # 在下方列出你所需要的包，查找方式同上文：
    fpc python3 rustc
  ];
  ignoreCollisions = true;
  pathsToLink = [ "/" ];
  # 导出一些基本信息和部分编译器所需的 /etc/passwd
  postBuild = ''
    mkdir $out/buildInfo
    echo 'root:x:0:0:root:/root:/bin/bash' >$out/etc/passwd
    date >$out/buildInfo/timestamp
  '';
}
```

复制以上文件，保存为 `default.nix` ，使用 `nix-build` 进行构建。  
构建后会产生一个 `result` 文件夹，记住该文件夹所在的路径。  
打开 `~/.hydro/mount.yaml` 将其中 `/root/.nix-profile` 替换为编译出的 `result` 文件夹（切换到新的环境）  
之后保存并重启沙箱。  

:::tip
有的时候会因为权限问题无法执行`echo 'root:x:0:0:root:/root:/bin/bash' >$out/etc/passwd`，可以先删去该行，然后等待build结束后手动写入。
:::

后续若需更改环境配置，仅需要修改 `default.nix` 文件之后 `nix-build` 重新构建，再重启沙箱即可生效。  
构建过程中的缓存文件可以使用 `nix-collect-garbage` 进行清理。  

更详细的 nix 语言介绍，请参照 [Nix Guide](https://nixos.org/guides/nix-language.html) 和
[Nix Manual](https://nixos.org/manual/nix/stable/language/index.html)。
