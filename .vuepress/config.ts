import { defineUserConfig } from 'vuepress';
import { hopeTheme } from 'vuepress-theme-hope';
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
    title: 'Hydro',
    head: [
        ['link', { rel: 'icon', href: `/hydro.png` }],
        ['link', { rel: 'stylesheet', href: '/twoslash.css' }],
        ['meta', { name: 'theme-color', content: '#ffeded' }],
        ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-CX4XJ0H0TE' }],
        ['script', {}, "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-CX4XJ0H0TE');"]
    ],
    plugins: [
        shikiPlugin({
            theme: "nord",
        }),
        searchProPlugin({
            indexContent: true,
            customFields: [],
            locales: {
                '/': {
                    cancel: "取消",
                    placeholder: "搜索",
                    search: "搜索",
                    searching: "搜索中",
                    select: "选择",
                    navigate: "切换",
                    exit: "关闭",
                    history: "搜索历史",
                    emptyHistory: "无搜索历史",
                    emptyResult: "没有找到结果",
                    loading: "正在加载搜索索引...",
                },
            }
        }),
    ],
    theme: hopeTheme({
        logo: '/favicon.ico',
        navbar: [
            { text: '文档', link: '/docs/' },
            { text: '常见问题解答', link: '/FAQ/' },
            { text: '常用教程', link: 'https://hydro.ac/d/faqs/p' },
            { text: '开发', link: '/dev/' },
            { text: '插件', link: '/plugins/' }
        ],
        plugins: {
            activeHeaderLinks: true,
            prismjs: false,
            copyright: false,
            copyCode: {},
            mdEnhance: {
                align: true,
                sup: true,
                sub: true,
                footnote: true,
                katex: true,
            },
        },
        hostname: 'https://hydro.js.org',
        repo: 'hydro-dev/Hydro',
        pageInfo: false,
        docsRepo: 'hydro-dev/hydro-dev.github.io',
        docsBranch: 'docs',
        editLink: true,
        sidebar: {
            '/index': [
                { text: '常见问题', children: ['/FAQ/'] },
            ],
            '/docs/': [
                {
                    text: '总览',
                    children: [
                        '/docs/',
                    ],
                },
                {
                    text: '部署',
                    children: [
                        '/docs/install/',
                        '/docs/install/s3',
                        '/docs/install/proxy',
                        '/docs/install/compiler',
                    ],
                },
                {
                    text: '站点管理员文档',
                    children: [
                        '/docs/system/maintain',
                        '/docs/system/cli',
                        '/docs/system/import-user',
                        '/docs/system/cdn',
                        '/docs/system/database',
                        '/docs/system/frontend-modify',
                        '/docs/system/FAQ',
                    ]
                },
                {
                    text: '用户文档',
                    children: [
                        '/docs/user/',
                        '/docs/user/domain',
                        '/docs/user/problem',
                        '/docs/user/testdata',
                        '/docs/user/problem-format',
                        '/docs/user/copy-problem',
                    ],
                },
            ],
            '/dev/': [
                {
                    text: '开发',
                    children: [
                        '/dev/',
                        '/dev/PERM_PRIV',
                        '/dev/typescript',
                        '/dev/hook',
                        '/dev/frontend-modify',
                    ],
                }
            ],
            '/plugins/': [
                {
                    text: '插件',
                    children: [
                        '/plugins/',
                        '/plugins/fps-importer',
                        '/plugins/hydrojudge',
                        '/plugins/migrate',
                        '/plugins/elastic',
                        '/plugins/recaptcha',
                        '/plugins/sonic',
                        '/plugins/vjudge',
                        '/plugins/geoip',
                    ],
                }
            ]
        },
    }),
});
