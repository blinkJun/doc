export default {
  title: 'Blink Docs',
  description: 'Blink 的学习文档',
  base: '/doc/',
  head: [['link', { rel: 'icon', href: '/doc/images/logo.png' }]],
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
        {
          text: '字体',
          link: '/md/CSS/字体',
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
              link: '/md/Vue/Vue2/相关概念和原理',
            },
            {
              text: 'Vuex',
              link: '/md/Vue/Vue2/Vuex',
            },
          ],
        },
        {
          text: 'Vue3',
          collapsed: true,
          items: [
            {
              text: '相关概念和原理',
              link: '/md/Vue/Vue3/相关概念和原理',
            },
            {
              text: '纯函数和副作用函数',
              link: '/md/Vue/Vue3/纯函数和副作用函数',
            },
          ],
        },
        {
          text: '组件之间通信的4种方法',
          link: '/md/Vue/组件之间通信的4种方法',
        },
        {
          text: '组件库的创建',
          link: '/md/Vue/组件库的创建',
        },
        {
          text: '组件库文档的创建',
          link: '/md/Vue/组件库文档的创建',
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
              link: '/md/Git/gitlab/gitlab-runner',
            },
          ],
        },
      ],
    },
    {
      text: '构建',
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
              text: 'vuepress',
              link: '/md/构建/文档构建/vuepress',
            },
            {
              text: 'vitepress',
              link: '/md/构建/文档构建/vitepress',
            },
          ],
        },
      ],
    },
    {
      text: '性能',
      collapsed: true,
      items: [
        {
          text: '前端性能优化',
          link: '/md/性能/前端性能优化',
        },
        {
          text: '分析工具',
          link: '/md/性能/分析工具',
        },
      ],
    },
    {
      text: 'NodeJs',
      collapsed: true,
      items: [
        {
          text: 'npm与package-json',
          link: '/md/NodeJs/npm与package-json',
        },
        {
          text: '模块-require',
          link: '/md/NodeJs/模块-require',
        },
        {
          text: '全局变量',
          link: '/md/NodeJs/全局变量',
        },
        {
          text: 'nodemon',
          link: '/md/NodeJs/nodemon',
        },
        {
          text: 'url',
          link: '/md/NodeJs/url',
        },
        {
          text: 'http',
          link: '/md/NodeJs/http',
        },
        {
          text: '文件操作-fs',
          link: '/md/NodeJs/文件操作-fs',
        },
        {
          text: '进程-process',
          link: '/md/NodeJs/进程-process',
        },
        {
          text: '流-stream',
          link: '/md/NodeJs/流-stream',
        },
        {
          text: '压缩-zlib',
          link: '/md/NodeJs/压缩-zlib',
        },
        {
          text: '加密-crypto',
          link: '/md/NodeJs/加密-crypto',
        },
        {
          text: 'Date和时区',
          link: '/md/NodeJs/Date和时区',
        },
        {
          text: 'socket',
          link: '/md/NodeJs/socket',
        },
        {
          text: 'pm2',
          link: '/md/NodeJs/pm2',
        },
        {
          text: '爬虫',
          link: '/md/NodeJs/爬虫',
        },
      ],
    },
    {
      text: '服务器',
      collapsed: true,
      items: [
        {
          text: '业务分层',
          link: '/md/服务器/业务分层',
        },
        {
          text: '登录方式',
          link: '/md/服务器/登录方式',
        },
        {
          text: '免密登录远程服务器',
          link: '/md/服务器/免密登录远程服务器',
        },
        {
          text: 'docker',
          link: '/md/服务器/docker',
        },
        {
          text: 'nginx',
          link: '/md/服务器/nginx',
        },
      ],
    },
    {
      text: '数据库',
      collapsed: true,
      items: [
        {
          text: 'mysql',
          link: '/md/数据库/mysql',
        },
      ],
    },
    {
      text: '其他',
      collapsed: true,
      items: [
        {
          text: '正则表达式',
          link: '/md/其他/正则表达式',
        },
        {
          text: '时间匹配-cron表达式',
          link: '/md/其他/cron表达式',
        },
        {
          text: '文件匹配-glob',
          link: '/md/其他/glob',
        },
        {
          text: '地图概念',
          link: '/md/其他/地图概念',
        },
        {
          text: '命名方式',
          link: '/md/其他/命名方式',
        },
      ],
    },
    {
      text: '脚手架',
      collapsed: true,
      items: [
        {
          text: '脚手架介绍',
          link: '/md/cli/脚手架介绍',
        },
        {
          text: '基础架构',
          link: '/md/cli/基础架构',
        },
        {
          text: '相关模块',
          collapsed: true,
          items: [
            {
              text: 'cli-spinner',
              link: '/md/cli/相关模块/cli-spinner',
            },
            {
              text: 'commander',
              link: '/md/cli/相关模块/commander',
            },
            {
              text: 'ejs',
              link: '/md/cli/相关模块/ejs',
            },
            {
              text: 'import-local',
              link: '/md/cli/相关模块/import-local',
            },
            {
              text: 'inrequirer',
              link: '/md/cli/相关模块/inrequirer',
            },
            {
              text: 'kebab-case',
              link: '/md/cli/相关模块/kebab-case',
            },
            {
              text: 'npminstall',
              link: '/md/cli/相关模块/npminstall',
            },
            {
              text: 'readline',
              link: '/md/cli/相关模块/readline',
            },
            {
              text: 'yargs',
              link: '/md/cli/相关模块/yargs',
            },
          ],
        },
        {
          text: '命令架构',
          collapsed: true,
          items: [
            {
              text: '初始化项目',
              link: '/md/cli/命令架构/初始化项目',
            },
          ],
        },
      ],
    },
    {
      text: '混合开发',
      collapsed: true,
      items: [
        {
          text: '交互原理和准备内容',
          link: '/md/混合开发/交互原理和准备内容',
        },
      ],
    },
    {
      text: '业务实现',
      collapsed: true,
      items: [
        {
          text: '表格下载',
          link: '/md/业务实现/表格下载',
        },
        {
          text: '打印页面中的元素',
          link: '/md/业务实现/打印页面中的元素',
        },
        {
          text: '天地图',
          link: '/md/业务实现/天地图',
        },
        {
          text: '文件上传',
          link: '/md/业务实现/文件上传',
        },
        {
          text: '登录',
          collapsed: true,
          items: [
            {
              text: '主要逻辑',
              link: '/md/业务实现/登录/主要逻辑',
            },
            {
              text: 'vue2-element-demo',
              link: '/md/业务实现/登录/vue2-element',
            },
          ],
        },
      ],
    },
    {
      text: 'VSCode',
      collapsed: true,
      items: [
        {
          text: '代码片段',
          link: '/md/VSCode/代码片段',
        },
      ],
    },
  ];
}
