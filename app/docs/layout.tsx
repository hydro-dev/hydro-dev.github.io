import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import type { ReactNode } from 'react';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions}
      sidebar={{
        tabs: false,
        banner: (
          <RootToggle
            options={[
              {
                title: 'Hydro',
                description: 'The Online Judge System',
                url: '/docs/Hydro',
              },
              {
                title: 'XCPC-Tools',
                description: 'Tools for on-site contests',
                url: '/docs/Tools',
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
