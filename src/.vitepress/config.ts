export default {
  title: 'Blink Docs',
  description: 'Blink 的学习文档',
  base: '/doc/',
  head: [['link', { rel: 'icon', href: './images/logo.png' }]],
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
    footer: {
      copyright: 'Copyright © 2023-present Blink',
    },
    sidebar: [
      {
        text: '学习文档',
        items: doc(),
      },
    ],
  },
};

function doc() {
  return [
    {
      text: 'HTML',
      items: [
        {
          text: '基本概念',
          link: '/md/HTML/基本概念',
        },
        {
          text: 'SEO',
          link: '/md/HTML/SEO',
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
        {
          text: '常见问题和实现',
          link: '/md/CSS/常见问题和实现',
        },
      ],
    },
    {
      text: 'ECMAScript',
      items: [
        {
          text: 'ES规范',
          link: '/md/ECMAScript/ES规范',
        },
        {
          text: '类型',
          link: '/md/ECMAScript/类型',
        },
        {
          text: '关键概念',
          link: '/md/ECMAScript/关键概念',
        },
        {
          text: '面向对象',
          link: '/md/ECMAScript/面向对象',
        },
        {
          text: '函数',
          link: '/md/ECMAScript/函数',
        },
        {
          text: '继承',
          link: '/md/ECMAScript/继承',
        },
        {
          text: 'typescript',
          link: '/md/ECMAScript/typescript',
        },
      ],
    },
    {
      text: 'Vue',
      collapsed: true,
      items: [
        {
          text: 'Vue2',
          collapsed: true,
          items: [
            {
              text: '相关概念和原理',
              link: '/md/vue/vue2/相关概念和原理',
            },
            {
              text: 'Vuex',
              link: '/md/vue/vue2/Vuex',
            },
          ],
        },
        {
          text: 'Vue3',
          collapsed: true,
          items: [
            {
              text: '与Vue2比较',
              link: '/md/vue/vue3/与Vue2比较',
            },
            {
              text: '相关概念和原理',
              link: '/md/vue/vue3/相关概念和原理',
            },
            {
              text: 'compositionAPI',
              link: '/md/vue/vue3/compositionAPI',
            },
            {
              text: '纯函数和副作用函数',
              link: '/md/vue/vue3/纯函数和副作用函数',
            },
          ],
        },
        {
          text: '组件之间通信的4种方法',
          link: '/md/vue/vue2/组件之间通信的4种方法',
        },
      ],
    },
    {
      text: '浏览器设备',
      collapsed: true,
      items: [
        {
          text: '相关概念',
          link: '/md/浏览器设备/相关概念',
        },
        {
          text: '储存',
          link: '/md/浏览器设备/储存',
        },
        {
          text: '跨域',
          link: '/md/浏览器设备/跨域',
        },
        {
          text: '事件循环',
          link: '/md/浏览器设备/事件循环',
        },
        {
          text: '关键渲染路径',
          link: '/md/浏览器设备/关键渲染路径',
        },
        {
          text: 'GC（垃圾回收机制）',
          link: '/md/浏览器设备/GC（垃圾回收机制）',
        },
        {
          text: '小程序',
          link: '/md/浏览器设备/小程序',
        },
      ],
    },
    {
      text: '网络',
      collapsed: true,
      items: [
        {
          text: '网络基础',
          link: '/md/网络/网络基础',
        },
        {
          text: 'HTTP基础',
          link: '/md/网络/HTTP基础',
        },
        {
          text: 'HTTP版本',
          link: '/md/网络/HTTP版本',
        },
        {
          text: 'HTTPS',
          link: '/md/网络/HTTPS',
        },
        {
          text: 'GraphQL和RestfulAPI',
          link: '/md/网络/GraphQL和RestfulAPI',
        },
        {
          text: 'web的攻击技术',
          link: '/md/网络/web的攻击技术',
        },
      ],
    },
    {
      text: '常考算法',
      collapsed: true,
      items: [
        {
          text: 'Vue2响应式',
          link: '/md/常考算法/Vue2响应式',
        },
        {
          text: 'Proxy响应式',
          link: '/md/常考算法/Proxy响应式',
        },
        {
          text: '防抖和节流',
          link: '/md/常考算法/防抖和节流',
        },
        {
          text: '深复制',
          link: '/md/常考算法/深复制',
        },
        {
          text: '数组相关',
          link: '/md/常考算法/数组相关',
        },
        {
          text: '树的遍历',
          link: '/md/常考算法/树的遍历',
        },
        {
          text: 'apply',
          link: '/md/常考算法/apply',
        },
        {
          text: '发布订阅',
          link: '/md/常考算法/发布订阅',
        },
      ],
    },
    {
      text: 'Git',
      collapsed: true,
      items: [
        {
          text: 'git-flow',
          link: '/md/Git/git-flow',
        },
        {
          text: 'mono-repo和multi-repo',
          link: '/md/Git/mono-repo和multi-repo',
        },
        {
          text: 'Gitlab',
          collapsed: true,
          items: [
            {
              text: 'gitlab-runner',
              link: '/md/Git/Gitlab/gitlab-runner',
            },
          ],
        },
      ],
    },
    {
      text: '模块化构建',
      collapsed: true,
      items: [
        {
          text: '模块化',
          link: '/md/构建/模块化',
        },
        {
          text: 'rollup',
          link: '/md/构建/rollup',
        },
        {
          text: 'webpack',
          link: '/md/构建/webpack',
        },
        {
          text: 'vite',
          link: '/md/构建/vite',
        },
        {
          text: '包管理-lerna',
          link: '/md/构建/包管理-lerna/Lerna简介',
        },
        {
          text: '包管理-pnpm',
          link: '/md/构建/包管理-pnpm/简介',
        },
        {
          text: '代码规范',
          collapsed: true,
          items: [
            {
              text: '项目结构规范',
              link: '/md/构建/代码规范/项目结构规范',
            },
            {
              text: 'editor-config',
              link: '/md/构建/代码规范/editor-config',
            },
            {
              text: 'ESLint',
              link: '/md/构建/代码规范/ESLint',
            },
            {
              text: 'jsconfig',
              link: '/md/构建/代码规范/jsconfig',
            },
          ],
        },
        {
          text: '提交规范',
          collapsed: true,
          items: [
            {
              text: 'lint-staged',
              link: '/md/构建/提交规范/lint-staged',
            },
            {
              text: 'commitlint',
              link: '/md/构建/提交规范/commitlint',
            },
            {
              text: 'pretty-quick',
              link: '/md/构建/提交规范/pretty-quick',
            },
            {
              text: 'husky',
              link: '/md/构建/提交规范/husky',
            },
            {
              text: 'commitizen',
              link: '/md/构建/提交规范/commitizen',
            },
          ],
        },
        {
          text: '私有模块仓库',
          collapsed: true,
          items: [
            {
              text: 'verdaccio',
              link: '/md/构建/私有模块仓库/verdaccio',
            },
          ],
        },
        {
          text: '持续集成',
          collapsed: true,
          items: [
            {
              text: 'gitlab-runner',
              link: '/md/构建/持续集成/gitlab-runner',
            },
            {
              text: 'jekens',
              link: '/md/构建/持续集成/jekens',
            },
          ],
        },
        {
          text: '文档构建',
          collapsed: true,
          items: [
            {
              text: 'jsdoc',
              link: '/md/构建/文档构建/jsdoc',
            },
            {
              text: 'vitepress',
              link: '/md/构建/文档构建/vitepress',
            },
          ],
        },
      ],
    },
  ];
}
