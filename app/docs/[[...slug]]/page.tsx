import { redirect } from 'next/navigation';
import { source } from '@/lib/source';

export default async function DocsRedirectPage(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await props.params;
  const path = slug?.length ? `/zh/docs/${slug.join('/')}` : '/zh/docs';
  redirect(path);
}

export async function generateStaticParams() {
  return source.generateParams()
    .filter((p) => p.lang === 'zh')
    .map(({ slug }) => ({ slug }));
}
