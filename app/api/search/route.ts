import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';
import { stopwords as mandarinStopwords } from "@orama/stopwords/mandarin";

export const revalidate = false;

const tokenizer = createTokenizer({
    language: 'mandarin',
    stopWords: mandarinStopwords,
});

const search = {
    tokenizer,
    components: {
        tokenizer,
    },
    search: {
        threshold: 1.5,
        tolerance: 2,
        boost: {
            title: 2,
            content: 1,
        },
    },
    insertOptions: {
        batchSize: 100,
        async: true,
    },
};

export const { staticGET: GET } = createFromSource(source, undefined, search);
