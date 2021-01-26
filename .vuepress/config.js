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
            { text: '关于', link: '/about/' },
            { text: '部署', link: '/install/' },
            { text: '文档', link: '/docs/' },
            { text: '开发', link: '/dev/' },
            { text: '插件', link: '/plugins/' },
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
            '/about/': [
                {
                    title: '开始',
                    collapsable: false,
                    children: [
                        '/about/',
                        '/about/start'
                    ],
                }
            ],
            '/install/': [
                {
                    title: '部署',
                    collapsable: false,
                    children: [
                        '/install/',
                        '/install/common',
                        '/install/init',
                        '/install/enhance',
                        '/install/cli',
                        '/install/user-import',
                        '/install/compiler-options',
                        '/install/backup',
                        '/install/cdn'
                    ],
                }
            ],
            '/docs/': [
                {
                    title: '文档',
                    collapsable: false,
                    children: [
                        '/docs/',
                        '/docs/testdata',
                        '/docs/contest'
                    ],
                }
            ],
            '/dev/': [
                {
                    title: '开发',
                    collapsable: false,
                    children: [
                        '/dev/',
                        '/dev/PERM_PRIV',
                        '/dev/frontend-modify'
                    ],
                }
            ],
            '/plugins/': [
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