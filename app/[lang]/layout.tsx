import type { ReactNode } from 'react';
import { i18nUI } from '@/lib/layout.shared';
import { i18n } from '@/lib/i18n';
import { Provider } from './provider';

export default async function LangLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: ReactNode;
}) {
  const { lang } = await params;

  return (
    <Provider i18n={i18nUI.provider(lang)}>
      {children}
    </Provider>
  );
}

export function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}
