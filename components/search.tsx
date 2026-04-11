'use client';

import {
  SearchDialog,
  SearchDialogClose,
  SearchDialogContent,
  SearchDialogFooter,
  SearchDialogHeader,
  SearchDialogIcon,
  SearchDialogInput,
  SearchDialogList,
  SearchDialogOverlay,
} from 'fumadocs-ui/components/dialog/search';
import { useDocsSearch } from 'fumadocs-core/search/client';
import { useI18n } from 'fumadocs-ui/contexts/i18n';
import { create } from '@orama/orama';
import { createTokenizer } from '@orama/tokenizers/mandarin';

const mandarinTokenizer = createTokenizer();

function initOrama(locale?: string) {
  const schema = {
    content: 'string',
    page_id: 'string',
    type: 'string',
    breadcrumbs: 'string[]',
    tags: 'enum[]',
    url: 'string',
    embeddings: 'vector[512]',
  } as Record<string, 'string' | 'string[]' | 'enum[]' | `vector[${number}]`>;

  if (locale === 'zh') {
    return create({
      schema,
      components: { tokenizer: mandarinTokenizer },
    });
  }
  return create({
    schema,
    language: 'english',
  });
}

export default function CustomSearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { locale } = useI18n();
  const { search, setSearch, query } = useDocsSearch({
    type: 'static',
    locale,
    initOrama,
  });

  return (
    <SearchDialog
      search={search}
      onSearchChange={setSearch}
      isLoading={query.isLoading}
      open={open}
      onOpenChange={onOpenChange}
    >
      <SearchDialogOverlay />
      <SearchDialogContent>
        <SearchDialogHeader>
          <SearchDialogIcon />
          <SearchDialogInput />
          <SearchDialogClose />
        </SearchDialogHeader>
        <SearchDialogList
          items={query.data !== 'empty' ? query.data : null}
        />
      </SearchDialogContent>
      <SearchDialogFooter />
    </SearchDialog>
  );
}
