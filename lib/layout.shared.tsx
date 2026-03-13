import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { i18n } from '@/lib/i18n';
import { defineI18nUI } from 'fumadocs-ui/i18n';
import Image from 'next/image';

export const i18nUI = defineI18nUI(i18n, {
  translations: {
    cn: {
      displayName: '中文',
      toc: '目录',
      search: '搜索文档',
      lastUpdate: '最后更新于',
      searchNoResult: '没有结果',
      previousPage: '上一页',
      nextPage: '下一页',
      chooseLanguage: '选择语言',
    },
    en: {
      displayName: 'English',
    },
  },
});

export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: (
        <>
          <Image
            width="24"
            height="24"
            src="https://hydro.ac/favicon.svg"
            alt="Logo"
          />
          Hydro
        </>
      ),
      url: `/${locale}`,
    },
  };
}
