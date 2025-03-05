import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';
import { stopwords as mandarinStopwords } from "@orama/stopwords/mandarin";

export const revalidate = false;

const tokenizer = createTokenizer({
    stopWords: mandarinStopwords,
});
const search = {
    tokenizer,
    language: 'mandarin',
    components: {
        tokenizer,
    },
    search: {
        threshold: 0,
        tolerance: 0,
    },
}
export const { staticGET: GET } = createFromSource(source, undefined, {
    localeMap: {
        cn: search,
        en: search,
        mandarin: search,
        english: search,
    }
});
