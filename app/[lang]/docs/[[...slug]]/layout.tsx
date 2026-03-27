import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { GithubInfo } from 'fumadocs-ui/components/github-info';
import { RootToggle } from '@/components/RootToggle';

const maps = {
  'Hydro': <GithubInfo owner="hydro-dev" repo="Hydro" />,
  'Tools': <GithubInfo owner="hydro-dev" repo="xcpc-tools" />,
};

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string; slug?: string[] }>;
}) {
  const { lang, slug } = await params;
  return (
    <DocsLayout
      tree={source.getPageTree(lang)}
      {...baseOptions(lang)}
      links={Object.keys(maps).find((key) => slug?.[0] === key) ? [
        {
          type: 'custom',
          children: maps[slug?.[0] as keyof typeof maps],
        },
      ] : []}
      sidebar={{
        tabs: false,
        banner: (
          <RootToggle
            options={[
              {
                title: 'Hydro',
                description: 'The Online Judge System',
                url: `/${lang}/docs/Hydro`,
              },
              {
                title: 'XCPC-Tools',
                description: 'Tools for on-site contests',
                url: `/${lang}/docs/Tools`,
              },
            ]}
          />
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
