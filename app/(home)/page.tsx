"use client";

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Rocket, Zap, Box, Shield, Puzzle, Github, ArrowRight, Star, ExternalLink, Wrench, Pencil, User } from 'lucide-react';
import FeatureCard from './FeatureCard';

const contributors = ['undefined-moe', 'pandadtdyy', 'wuxianucw', 'criyle', 'Macesuted', 'guke1024', 'FrexCheat'];

const BraceIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1" />
    <path d="M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
  </svg>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function HomePage() {
  return (<>
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(255,105,180,0.1),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-fd-background" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <Image
                src="/favicon.png"
                alt="Hydro Logo"
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-lg"
                priority
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Hydro Development Team
            </motion.h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-fd-muted-foreground mb-8 font-light"
          >
            专注信息学竞赛，提供一站式服务
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          <motion.div
            transition={{ duration: 0.3 }}
            className="group relative p-6 rounded-2xl border-2 border-fd-border bg-gradient-to-br from-white to-blue-50/50 dark:from-fd-card dark:to-blue-950/20 shadow-lg hover:shadow-2xl transition-shadow backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl transition-transform duration-500" />
            <div className="relative">
              <Link href="/docs/Hydro" className="block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl">
                    <BraceIcon className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-2xl font-bold">Hydro 在线测评系统</h3>
                </div>
                <p className="text-fd-muted-foreground mb-4">
                  现代 OJ 系统
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">高性能</span>
                  <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">可扩展</span>
                  <span className="px-3 py-1 text-sm bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full">多语言</span>
                  <span className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">易安装</span>
                  <span className="px-3 py-1 text-sm bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full">多题库</span>
                </div>
              </Link>
              <a
                href="https://github.com/hydro-dev/Hydro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-fd-muted-foreground hover:text-fd-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">hydro-dev/Hydro</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          <motion.div
            transition={{ duration: 0.3 }}
            className="group relative p-6 rounded-2xl border-2 border-fd-border bg-gradient-to-br from-white to-purple-50/50 dark:from-fd-card dark:to-purple-950/20 shadow-lg hover:shadow-2xl transition-shadow backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl transition-transform duration-500" />
            <div className="relative">
              <Link href="/docs/Tools" className="block">
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative p-2.5 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl">
                    <Wrench className="w-5 h-5 text-purple-700" />
                  </div>
                  <h3 className="text-2xl font-bold">XCPC-Tools</h3>
                </div>
                <p className="text-fd-muted-foreground mb-4">现场赛工具包</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full">多平台</span>
                  <span className="px-3 py-1 text-sm bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full">实时监控</span>
                  <span className="px-3 py-1 text-sm bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 rounded-full">打印分发</span>
                  <span className="px-3 py-1 text-sm bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full">气球管理</span>
                  <span className="px-3 py-1 text-sm bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full">设备维护</span>
                </div>
              </Link>
              <a
                href="https://github.com/hydro-dev/xcpc-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-fd-muted-foreground hover:text-fd-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">hydro-dev/xcpc-tools</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
          <motion.div
            transition={{ duration: 0.3 }}
            className="group relative p-6 rounded-2xl border-2 border-fd-border bg-gradient-to-br from-white to-emerald-50/50 dark:from-fd-card dark:to-emerald-950/20 shadow-lg hover:shadow-2xl transition-shadow backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl transition-transform duration-500" />
            <a
              href="https://polyhedron.hydro.ac"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-xl">
                  <Pencil className="w-5 h-5 text-emerald-700" />
                </div>
                <h3 className="text-2xl font-bold">Polyhedron</h3>
              </div>
              <p className="text-fd-muted-foreground mb-4">
                一站式出题平台
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">题面编写</span>
                <span className="px-3 py-1 text-sm bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full">数据生成</span>
                <span className="px-3 py-1 text-sm bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full">代码验证</span>
                <span className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">版本管理</span>
                <span className="px-3 py-1 text-sm bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 rounded-full">多人协作</span>
              </div>
            </a>
          </motion.div>
          <motion.div
            transition={{ duration: 0.3 }}
            className="group relative p-6 rounded-2xl border-2 border-fd-border bg-gradient-to-br from-white to-orange-50/50 dark:from-fd-card dark:to-orange-950/20 shadow-lg hover:shadow-2xl transition-shadow backdrop-blur-sm"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-full blur-3xl transition-transform duration-500" />
            <a
              href="https://hydro.ac/wiki/about#contact"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-gradient-to-br from-orange-200 to-amber-200 rounded-xl">
                  <User className="w-5 h-5 text-orange-700" />
                </div>
                <h3 className="text-2xl font-bold">监考平台</h3>
              </div>
              <p className="text-fd-muted-foreground mb-4">
                联系我们以获得商业支持
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-sm bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">反作弊</span>
                <span className="px-3 py-1 text-sm bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full">防切屏</span>
                <span className="px-3 py-1 text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 rounded-full">实时音视频</span>
                <span className="px-3 py-1 text-sm bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">双机位录制</span>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">优势特性</h2>
          <p className="text-xl text-fd-muted-foreground">为什么选择 Hydro</p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <FeatureCard
            icon={<Rocket className="w-6 h-6 text-white" />}
            title="强大"
            subtitle="Battery included"
            description="比赛、训练、讨论、题解、作业等功能"
            iconBgGradient="bg-gradient-to-br from-red-500 to-orange-500"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          />
          <FeatureCard
            icon={<Zap className="w-6 h-6 text-white" />}
            title="性能"
            subtitle="Blazingly fast"
            description="沙箱复用，延迟计算，提高运行效率"
            iconBgGradient="bg-gradient-to-br from-yellow-500 to-orange-500"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          />
          <FeatureCard
            icon={<Shield className="w-6 h-6 text-blue-700" />}
            title="安全"
            subtitle="(Not only) memory safe"
            description="使用 Linux 容器技术隔离用户程序"
            iconBgGradient="bg-gradient-to-br from-blue-200 to-pink-200"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          />
          <FeatureCard
            icon={<Box className="w-6 h-6 text-white" />}
            title="便捷"
            subtitle="Easy setup"
            description="支持使用脚本一键搭建"
            iconBgGradient="bg-gradient-to-br from-green-500 to-teal-500"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          />
          <FeatureCard
            icon={<Puzzle className="w-6 h-6 text-white" />}
            title="扩展"
            subtitle="Plugin integration"
            description="可通过安装附加组件进行扩展"
            iconBgGradient="bg-gradient-to-br from-purple-300 to-pink-300"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          />
          <FeatureCard
            icon={<Github className="w-6 h-6 text-white" />}
            title="开源"
            subtitle="Open source"
            description="代码基于 AGPL 开源"
            iconBgGradient="bg-gradient-to-br from-gray-700 to-gray-900"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
        <p className="text-left mt-8 text-sm text-fd-muted-foreground/60">
          * Not written in rust
        </p>
      </div>
    </section>
    <section className="relative py-24 px-6 bg-fd-subtle/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">系统预览</h2>
          <p className="text-xl text-fd-muted-foreground">简洁、现代、强大的界面设计</p>
        </motion.div>
        <div className="relative overflow-hidden">
          <div className="flex gap-6 pb-4 animate-scroll">
            {[...[1, 2, 3], ...[1, 2, 3]].map((num, index) => (
              <div
                key={`${num}-${index}`}
                className="relative flex-shrink-0 w-[90vw] max-w-4xl aspect-video rounded-2xl overflow-hidden border-2 border-fd-border bg-fd-subtle"
              >
                <Image
                  src={`/images-hydro/pict${num}.png`}
                  alt={`Hydro Screenshot ${num}`}
                  fill
                  sizes="(max-width: 1280px) 90vw, 1024px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <style jsx global>{`
              @keyframes scroll {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll 30s linear infinite;
                will-change: transform;
                width: max-content;
              }
            `}</style>
        </div>
      </div>
    </section>
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-8">
            <Star className="w-6 h-6 text-red-500 fill-red-500" />
            <p className="text-xl text-fd-muted-foreground">
              Hydro 由开源社区驱动
            </p>
          </div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-6"
          >
            {contributors.map((username) => (
              <motion.a
                key={username}
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden bg-fd-subtle border-2 border-fd-border group-hover:border-fd-primary transition-all shadow-lg">
                  <Image
                    src={`https://github.com/${username}.png`}
                    alt={`Contributor ${username}`}
                    width={64}
                    height={64}
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-sm font-medium">
                  {username}
                </div>
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-fd-muted-foreground mt-12"
          >
            我们的一些活跃贡献者
          </motion.p>
        </motion.div>
      </div>
    </section>
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 text-gray-800 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              准备好开始了吗？
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl mb-8 opacity-90"
            >
              加入我们，一起打造更好的在线评测系统
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                href="/docs/Hydro"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-pink-500 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                查看文档
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://github.com/hydro-dev/Hydro"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-800 text-gray-800 rounded-full font-semibold text-lg hover:bg-gray-800 hover:text-white transition-all"
              >
                <Github className="w-5 h-5" />
                Star on GitHub
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  </>);
}
