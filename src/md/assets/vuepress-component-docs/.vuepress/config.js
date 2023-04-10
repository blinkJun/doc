const base = process.env.npm_config_base
  ? `/${process.env.npm_config_base}`
  : '/';
const dest = process.env.npm_config_dest || '.vuepress/dist';
module.exports = {
  base,
  dest,
  title: '大也科技 Vue2 组件库',
  head: [['link', { rel: 'icon', href: './images/logo.png' }]],
  description: '大也科技内部vue2组件库',
  plugins: [require('./plugins/markdown-it')],
  themeConfig: {
    logo: '/images/logo.png',
    repo: 'http://git.gxucreate.com:8091/gxdaye/web/infrastructure/elements',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    nav: [
      { text: '指南', link: '/md/guide/' },
      { text: '通用组件', link: '/md/components-common/' },
      { text: 'ElementUI 扩展组件', link: '/md/components-fl/' },
      { text: '插件', link: '/md/plugins/' },
      { text: 'Mixins 混入', link: '/md/mixins/' },
    ],
    sidebar: {
      '/md/guide': 'auto',
      '/md/components-common/': [
        ['', '介绍'],
        {
          title: '组件',
          collapsable: false,
          children: [
            ['count-to', 'count-to'],
            ['marquee', 'marquee'],
          ],
        },
      ],
      '/md/components-fl/': [
        ['', '介绍'],
        {
          title: '组件',
          collapsable: false,
          children: [
            ['button', 'button'],
            ['checkbox', 'checkbox'],
            ['radio', 'radio'],
            ['select', 'select'],
            ['date-picker', 'date-picker'],
            ['daterange-picker', 'daterange-picker'],
            ['table-page', 'table-page'],
          ],
        },
      ],
      '/md/plugins/': [
        ['', '介绍'],
        {
          title: '插件',
          collapsable: false,
          children: [['dict', '字典模块']],
        },
      ],
      '/md/mixins/': [
        ['', '介绍'],
        {
          title: 'Mixins 混入',
          collapsable: false,
          children: [['page', '分页']],
        },
      ],
    },
    lastUpdated: 'Last Updated',
    smoothScroll: true,
  },
};
