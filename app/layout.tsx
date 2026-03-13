import '@/app/global.css';
import 'katex/dist/katex.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh" className={inter.className} suppressHydrationWarning>
      <head>
        <title>Hydro Docs</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#ffeded" />
        <meta name="og:title" content="Hydro Docs" />
        <meta name="og:site_name" content="Hydro Docs" />
      </head>
      <body className="flex flex-col min-h-screen">
        {children}
        <script
          defer
          src="https://analytics.hydro.ac/script.js"
          data-website-id="1c3d0070-645b-4b54-b4c8-b7c286daf471"
        />
      </body>
    </html>
  );
}
