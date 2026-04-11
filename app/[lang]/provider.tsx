'use client';

import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';

const SearchDialog = dynamic(() => import('@/components/search'), {
  ssr: false,
});

export function Provider({
  children,
  i18n,
}: {
  children: ReactNode;
  i18n: Parameters<typeof RootProvider>[0]['i18n'];
}) {
  return (
    <RootProvider
      i18n={i18n}
      search={{ SearchDialog }}
    >
      {children}
    </RootProvider>
  );
}
