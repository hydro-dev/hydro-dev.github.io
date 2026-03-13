import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';
import { stopwords as mandarinStopwords } from "@orama/stopwords/mandarin";

export const revalidate = false;

const mandarinTokenizer = createTokenizer({
    language: 'mandarin',
    stopWords: mandarinStopwords,
});

export const { staticGET: GET } = createFromSource(source, {
    localeMap: {
        cn: {
            tokenizer: mandarinTokenizer,
            components: {
                tokenizer: mandarinTokenizer,
            },
            search: {
                threshold: 1.5,
                tolerance: 2,
            },
        },
        en: {
            language: 'english',
        },
    },
});
