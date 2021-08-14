const path = require('path');
const { config } = require("vuepress-theme-hope");

module.exports = context => config({
    title: 'Hydro',
    head: [
        ['link', { rel: 'icon', href: `/hydro.png` }],
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
                }
            ]
        }],
    ],
    themeConfig: {
        logo: '/favicon.ico',
        nav: [
            { text: '文档', link: '/docs/' },
            { text: '开发', link: '/dev/' },
            { text: '插件', link: '/plugins/' }
        ],
        pwa: {
            cacheHTML: false,
        },
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
                        '/docs/install/init',
                        '/docs/install/enhance',
                        '/docs/install/port-forwarding',
                        '/docs/install/cli',
                        '/docs/install/FAQ',
                    ],
                },
                {
                    title: '站点管理员文档',
                    collapsable: false,
                    children: [
                        '/docs/system/',
                        '/docs/system/settings',
                        '/docs/system/import-user',
                        '/docs/system/cdn',
                        '/docs/system/database',
                        '/docs/system/frontend-modify',
                        '/docs/system/enhance',
                        '/docs/system/domain-union',
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
                        '/dev/javascript',
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
                        '/plugins/migrate-vijos',
                        '/plugins/recaptcha',
                        '/plugins/sonic',
                        '/plugins/vjudge',
                    ],
                }
            ]
        },
    },
    evergreen: !!context.isProd,
})
