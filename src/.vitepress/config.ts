export default {
  title: 'Blink Docs',
  description: 'Blink 的学习文档',
  base: '/doc/',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  themeConfig: {
    logo: '/images/logo.png',
    logoSmall: '/images/logo.png',
    editLink: {
      pattern: 'https://github.com/blinkJun/doc/edit/master/src/:path',
      text: 'Edit this page on GitHub',
    },
    docsBranch: 'master',
    nav: [{ text: '学习文档', link: '/md/HTML/基本概念' }],
    socialLinks: [{ icon: 'github', link: 'https://github.com/blinkJun/doc' }],
    sidebar: [
      {
        text: '学习文档',
        items: [
          {
            text: 'HTML',
            items: [
              {
                text: '基本概念',
                link: '/md/HTML/基本概念',
              },
            ],
          },
          {
            text: 'CSS',
            items: [
              {
                text: '基本概念',
                link: '/md/CSS/基本概念',
              },
            ],
          },
        ],
      },
    ],
  },
};
