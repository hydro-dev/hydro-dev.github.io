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
                        '/about/'
                    ],
                }
            ],
            '/install/': [
                {
                    title: '部署',
                    collapsable: false,
                    children: [
                        '/install/',
                        '/install/auto',
                        '/install/common',
                        '/install/init',
                        '/install/enhance',
                        '/install/cli',
                        '/install/backup'
                    ],
                }
            ],
            '/docs/': [
                {
                    title: '用户文档',
                    collapsable: false,
                    children: [
                        '/docs/'
                    ],
                },
                {
                    title: '站点管理员文档',
                    collapsable: false,
                    children: [
                        '/docs/admin',
                        '/docs/system-settings',
                        '/docs/user-import',
                        '/docs/cdn',
                    ]
                },
                {
                    title: '域管理员文档',
                    collapsable: false,
                    children: [
                        '/docs/domain',
                        '/docs/problem',
                        '/docs/training',
                        '/docs/homework',
                        '/docs/discuss',
                        '/docs/contest',
                        '/docs/dashboard'
                    ]
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
                        '/dev/typescript'
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
                        '/plugins/recaptcha'
                    ],
                }
            ]
        },
    },
    evergreen: !!context.isProd,
})