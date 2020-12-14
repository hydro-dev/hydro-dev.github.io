const path = require('path');

module.exports = context => ({
    title: 'Hydro',
    head: [
        ['link', { rel: 'icon', href: `/hydro.png` }],
        ['meta', { name: 'theme-color', content: '#ffeded' }],
        ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-CX4XJ0H0TE' }],
        ['script', {}, "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-CX4XJ0H0TE');"]
    ],
    plugins: [
        ['@vuepress/back-to-top'],
        ['@vuepress/active-header-links'],
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
            { text: '主页', link: '/' },
            { text: '指南', link: '/guide/' },
            { text: 'GitHub', link: 'https://github.com/hydro-dev/Hydro' }
        ],
        sidebarDepth: 2,
        lastUpdated: '上次更新',
        docsRepo: 'hydro-dev/hydro-dev.github.io',
        docsBranch: 'docs',
        editLinks: true,
        editLinkText: '文档有锅？点我修复',
        displayAllHeaders: true,
        smoothScroll: true,
        sidebar: {
            '/guide/': [
                {
                    title: '指南',
                    collapsable: false,
                    children: [
                        '/guide/about-hydro',
                        '/guide/',
                        '/guide/enhance',
                        '/guide/judge',
                        '/guide/cli',
                        '/guide/PERM_PRIV',
                        '/guide/testdata',
                        '/guide/backup',
                        '/guide/cdn',
                        '/guide/contest',
                        '/guide/user-import',
                        '/guide/frontend-modify',
                        '/guide/compiler-options'
                    ],
                }
            ],
            'plugins': [
                {
                    title: '插件',
                    collapsable: false,
                    children: [
                        '/plugins/',
                        '/plugins/javascript',
                        '/plugins/typescript'
                    ],
                }
            ]
        },
    },
    evergreen: !!context.isProd,
})