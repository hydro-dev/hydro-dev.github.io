import './global.css';
import 'katex/dist/katex.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

const analytics = `var _paq=window._paq=[['trackPageView'],['enableLinkTracking']];(function(){var u="//analytics.hydro.ac/";_paq.push(['setTrackerUrl',u+'mt']);_paq.push(['setSiteId','2']);var d=document,g=d.createElement('script'),s=d.getElementsByTagName('script')[0];g.async=true;g.src=u+'m.js';s.parentNode.insertBefore(g,s);})();`;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#ffeded" />
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
        <script dangerouslySetInnerHTML={{ __html: analytics }} />
      </body>
    </html>
  );
}
