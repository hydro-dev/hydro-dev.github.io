const path = require('path');
const { config } = require("vuepress-theme-hope");
const { setupForFile, transformAttributesToHTML } = require('remark-shiki-twoslash');

module.exports = context => config({
    title: 'Hydro',
    head: [
        ['link', { rel: 'icon', href: `/hydro.png` }],
        ['link', { rel: 'stylesheet', href: '/twoslash.css' }],
        ['meta', { name: 'theme-color', content: '#ffeded' }],
        ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-CX4XJ0H0TE' }],
        ['script', {}, "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-CX4XJ0H0TE');"]
    ],
    plugins: [
        '@vuepress/back-to-top',
        '@vuepress/active-header-links',
        'vuepress-plugin-nprogress',
        'vuepress-plugin-smooth-scroll',
        'vuepress-plugin-zooming',
        ['@vuepress/register-components', {
            components: [
                {
                    name: 'Terminal',
                    path: path.resolve(__dirname, 'components', 'Terminal.vue')
                },
            ]
        }],
    ],
    themeConfig: {
        logo: '/favicon.ico',
        nav: [
            { text: '文档', link: '/docs/' },
            { text: '常见问题解答', link: '/FAQ/' },
            { text: '常用教程', link: 'https://hydro.ac/d/faqs/p' },
            { text: '开发', link: '/dev/' },
            { text: '插件', link: '/plugins/' }
        ],
        pwa: false,
        feed: false,
        shouldPrefetch: false,
        sidebarDepth: 2,
        lastUpdated: '上次更新',
        hostname: 'https://hydro.js.org',
        repo: 'hydro-dev/Hydro',
        pageInfo: false,
        copyright: false,
        mdEnhance: {
            align: true,
            sup: true,
            sub: true,
            footnote: true,
            tex: true,
        },
        docsRepo: 'hydro-dev/hydro-dev.github.io',
        docsBranch: 'docs',
        editLinks: true,
        editLinkText: '文档有锅？点我修复',
        displayAllHeaders: true,
        smoothScroll: true,
        sidebar: {
            '/index': [
                { title: '常见问题', children: ['/FAQ/'], collapsable: false },
            ],
            '/docs/': [
                {
                    title: '总览',
                    collapsable: false,
                    children: [
                        '/docs/',
                    ],
                },
                {
                    title: '部署',
                    collapsable: false,
                    children: [
                        '/docs/install/',
                        '/docs/install/s3',
                        '/docs/install/proxy',
                        '/docs/install/compiler',
                    ],
                },
                {
                    title: '站点管理员文档',
                    collapsable: false,
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
                    title: '用户文档',
                    collapsable: false,
                    children: [
                        '/docs/user/',
                        '/docs/user/domain',
                        '/docs/user/problem',
                        '/docs/user/testdata',
                        '/docs/user/copy-problem',
                    ],
                },
            ],
            '/dev/': [
                {
                    title: '开发',
                    collapsable: false,
                    children: [
                        '/dev/',
                        '/dev/PERM_PRIV',
                        '/dev/typescript',
                        '/dev/frontend-modify',
                    ],
                }
            ],
            '/plugins/': [
                {
                    title: '插件',
                    collapsable: false,
                    children: [
                        '/plugins/',
                        '/plugins/fps-importer',
                        '/plugins/hydrojudge',
                        '/plugins/migrate',
                        '/plugins/elastic',
                        '/plugins/recaptcha',
                        '/plugins/sonic',
                        '/plugins/vjudge',
                    ],
                }
            ]
        },
    },
    markdown: {
        code: false,
        extendMarkdown: async md => {
            const { highlighters } = await setupForFile({ theme: "nord" });
            md.use((markdownit, options) => {
                markdownit.options.highlight = (code, lang) => {
                    code = code.replace(/\r?\n$/, "");
                    let attrs = '';
                    if (lang === 'ts') attrs = 'twoslash';
                    const res = transformAttributesToHTML(code, [lang, attrs].join(" "), highlighters, options);
                    return res;
                };
            })
        },
    },
    evergreen: !!context.isProd,
});
