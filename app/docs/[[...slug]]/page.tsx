import { redirect } from 'next/navigation';
import { source } from '@/lib/source';

export default async function DocsRedirectPage(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await props.params;
  const path = slug?.length ? `/cn/docs/${slug.join('/')}` : '/cn/docs';
  redirect(path);
}

export async function generateStaticParams() {
  return source.generateParams()
    .filter((p) => p.lang === 'cn')
    .map(({ slug }) => ({ slug }));
}
