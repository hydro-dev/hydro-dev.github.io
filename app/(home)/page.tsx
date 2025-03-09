import { GithubInfo } from 'fumadocs-ui/components/github-info';
import Link from 'next/link';
import Image from 'next/image';
import { ImageCarousel } from './images';
import { Rocket, Zap, Box, Shield, Puzzle, Github, MousePointer } from 'lucide-react';

const contributors = ['undefined-moe', 'pandadtdyy', 'wuxianucw', 'criyle', 'Macesuted', 'guke1024'];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col max-w-3xl mx-auto px-4 py-16 overflow-x-hidden">
      <div className="flex items-center gap-4 mb-6">
        <div className="relative w-12 h-12">
          <Image
            src="/favicon.png"
            alt="Hydro Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold">
          Hydro Development Team
        </h1>
      </div>
      <p className="text-fd-muted-foreground text-lg mb-8">
        专注信息学竞赛，提供一站式服务。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="group block p-6 rounded-lg border border-fd-border hover:shadow-lg transition-all">
          <Link
            href="/docs/Hydro"
            className="hover:border-fd-border-hover"
          >
            <h3 className="text-xl font-semibold mb-2">
              Hydro - 在线测评系统
            </h3>
            <p className="text-fd-muted-foreground">
              高性能、可扩展、多语言、跨平台、易安装、全题库。
            </p>
          </Link>
          <GithubInfo
            owner="hydro-dev"
            repo="Hydro"
          />
        </div>
        <div className="group block p-6 rounded-lg border border-fd-border hover:shadow-lg transition-all">
          <Link
            href="/docs/Tools"
            className="hover:border-fd-border-hover"
          >
            <h3 className="text-xl font-semibold mb-2">
              XCPC-Tools - 现场赛工具包
            </h3>
            <p className="text-fd-muted-foreground">
              多平台支持、赛事监控、打印分发、气球分发、设备管理，已于多场区域赛稳定运行
            </p>
          </Link>
          <GithubInfo
            owner="hydro-dev"
            repo="xcpc-tools"
          />
        </div>
      </div>
      <ImageCarousel />

      <div className="col-span-full flex flex-row items-start justify-center border-l border-t p-8 pb-2 text-center">
        <h2 className="bg-fd-primary text-fd-primary-foreground px-1 text-2xl font-semibold">优势特性</h2>
        <MousePointer className="w-6 h-6 -ml-1 mt-8" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <Rocket className="w-6 h-6" />
            <h3 className="text-xl font-semibold">强大</h3>
          </div>
          <p className="text-fd-muted-foreground">
            提供了比赛 训练 讨论 题解 作业等功能
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-6 h-6" />
            <h3 className="text-xl font-semibold">性能</h3>
          </div>
          <p className="text-fd-muted-foreground">
            沙箱复用，延迟计算，提高运行效率
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <Box className="w-6 h-6" />
            <h3 className="text-xl font-semibold">便捷</h3>
          </div>
          <p className="text-fd-muted-foreground">
            支持使用脚本一键搭建
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-6 h-6" />
            <h3 className="text-xl font-semibold">安全</h3>
          </div>
          <p className="text-fd-muted-foreground">
            使用 Linux 容器技术隔离用户程序
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <Puzzle className="w-6 h-6" />
            <h3 className="text-xl font-semibold">扩展</h3>
          </div>
          <p className="text-fd-muted-foreground">
            可通过安装附加组件进行扩展
          </p>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2 mb-2">
            <Github className="w-6 h-6" />
            <h3 className="text-xl font-semibold">开源</h3>
          </div>
          <p className="text-fd-muted-foreground">
            代码基于 AGPL 开源，可修改
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <p className="text-fd-muted-foreground text-lg mb-8">
          <span className="text-red-500">❤</span> Hydro 由开源社区驱动。
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {contributors.map((username) => (
            <div
              key={username}
              className="w-12 h-12 rounded-full overflow-hidden bg-fd-subtle relative group"
            >
              <Image
                src={`https://github.com/${username}.png`}
                alt={`Contributor ${username}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <p className="text-fd-muted-foreground">
          我们的一些活跃贡献者
        </p>
      </div>
    </main>
  );
}
