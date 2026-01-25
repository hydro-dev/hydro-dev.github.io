import './global.css';
import 'katex/dist/katex.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <title>Hydro Docs</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#ffeded" />
        <meta name="description" content="Hydro 文档" />
        <meta name="keywords" content="Hydro, 文档, 教程, 指南, HydroOJ, OJ, Online Judge, 在线评测" />
        <meta name="og:title" content="Hydro Docs" />
        <meta name="og:site_name" content="Hydro Docs" />
        <meta name="og:locale" content="zh_CN" />
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          search={{
            options: {
              type: 'static',
            },
          }}
        >
          {children}
        </RootProvider>
        <script defer src="https://analytics.hydro.ac/script.js" data-website-id="1c3d0070-645b-4b54-b4c8-b7c286daf471"></script>
      </body>
    </html>
  );
}
