export default {
  title: 'Blink Docs',
  description: 'Blink 的学习文档',
  base: '/doc/',
  head: [['link', { rel: 'icon', href: '/doc/images/logo.png' }]],
  themeConfig: {
    search: {
      provider: 'local',
    },
    logo: '/images/logo.png',
    logoSmall: '/images/logo.png',
    editLink: {
      pattern: 'https://github.com/blinkJun/doc/edit/master/src/:path',
      text: 'Edit this page on GitHub',
    },
    docsBranch: 'master',
    nav: [
      { text: '学习文档', link: '/md/HTML/基本概念' },
      { text: '工具类库', link: 'https://blinkjun.github.io/utils/' },
      { text: 'Vue3组件库', link: 'https://blinkjun.github.io/elements/' },
      { text: '脚手架工具', link: 'https://github.com/blinkJun/cli' },
    ],
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
        {
          text: '常用描述标签',
          link: '/md/HTML/常用描述标签',
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
          text: '常见问题',
          link: '/md/CSS/常见问题',
        },
        {
          text: '样式实现',
          link: '/md/CSS/样式实现',
        },
        {
          text: '字体',
          link: '/md/CSS/字体',
        },
        {
          text: '选择器',
          link: '/md/CSS/选择器',
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
        {
          text: '纯函数和副作用函数',
          link: '/md/ECMAScript/纯函数和副作用函数',
        },
        {
          text: '数据流',
          link: '/md/ECMAScript/数据流',
        },
        {
          text: '设计模式',
          link: '/md/ECMAScript/设计模式',
        },
        {
          text: 'WebGL',
          link: '/md/ECMAScript/WebGL',
        },
      ],
    },
    {
      text: 'Vue',
      collapsed: true,
      items: [
        {
          text: 'Vue2相关概念和原理',
          link: '/md/Vue/Vue2相关概念和原理',
        },
        {
          text: 'Vue3相关概念和原理',
          link: '/md/Vue/Vue3相关概念和原理',
        },
        {
          text: '组件库的设计',
          link: '/md/Vue/组件库的设计',
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
          text: 'WebSocket',
          link: '/md/网络/WebSocket',
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
      text: '算法',
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
        {
          text: '并发',
          link: '/md/常考算法/并发',
        },
      ],
    },
    {
      text: 'Git',
      collapsed: true,
      items: [
        {
          text: '常用操作',
          link: '/md/Git/常用操作',
        },
        {
          text: '分支管理',
          link: '/md/Git/分支管理',
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
              text: '命名规范',
              link: '/md/构建/代码规范/命名规范',
            },
            {
              text: '代码风格',
              link: '/md/构建/代码规范/代码风格',
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
              text: 'prettier',
              link: '/md/构建/代码规范/prettier',
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
              text: 'markdown-it',
              link: '/md/构建/文档构建/markdown-it',
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
      text: '脚手架',
      collapsed: true,
      items: [
        {
          text: '脚手架介绍',
          link: '/md/CLI/脚手架介绍',
        },
        {
          text: '基础架构',
          link: '/md/CLI/基础架构',
        },
        {
          text: '相关模块',
          collapsed: true,
          items: [
            {
              text: 'CLI-spinner',
              link: '/md/CLI/相关模块/cli-spinner',
            },
            {
              text: 'commander',
              link: '/md/CLI/相关模块/commander',
            },
            {
              text: 'ejs',
              link: '/md/CLI/相关模块/ejs',
            },
            {
              text: 'import-local',
              link: '/md/CLI/相关模块/import-local',
            },
            {
              text: 'inrequirer',
              link: '/md/CLI/相关模块/inrequirer',
            },
            {
              text: 'kebab-case',
              link: '/md/CLI/相关模块/kebab-case',
            },
            {
              text: 'npminstall',
              link: '/md/CLI/相关模块/npminstall',
            },
            {
              text: 'readline',
              link: '/md/CLI/相关模块/readline',
            },
            {
              text: 'yargs',
              link: '/md/CLI/相关模块/yargs',
            },
          ],
        },
        {
          text: '命令架构',
          collapsed: true,
          items: [
            {
              text: '初始化项目',
              link: '/md/CLI/命令架构/初始化项目',
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
      text: 'GIS',
      collapsed: true,
      items: [
        {
          text: '地图概念',
          link: '/md/GIS/地图概念',
        },
        {
          text: 'openlayers',
          link: '/md/GIS/openlayers',
        },
        {
          text: '离线地图',
          link: '/md/GIS/离线地图',
        },
      ],
    },
    {
      text: '2D',
      collapsed: true,
      items: [
        {
          text: 'fabric',
          link: '/md/2D/fabric',
        },
        {
          text: 'AntV X6',
          link: '/md/2D/AntV X6',
        },
      ],
    },
    {
      text: '富文本',
      collapsed: true,
      items: [
        {
          text: '富文本',
          link: '/md/富文本/富文本.md',
        },
      ],
    },
    {
      text: '样式实现',
      collapsed: true,
      items: [
        {
          text: '可拖拽更改盒模型大小',
          link: '/md/样式实现/可拖拽更改盒模型大小',
        },
        {
          text: '自动高度适应比例列表',
          link: '/md/样式实现/自动高度适应比例列表',
        },
        {
          text: '自适应高度输入框',
          link: '/md/样式实现/自适应高度输入框',
        },
        {
          text: '毛玻璃',
          link: '/md/样式实现/毛玻璃',
        },
        {
          text: '卡片翻转',
          link: '/md/样式实现/卡片翻转',
        },
        {
          text: '方格透明背景',
          link: '/md/样式实现/方格透明背景',
        },
        {
          text: '星系环绕',
          link: '/md/样式实现/星系环绕',
        },
        {
          text: '其它',
          link: '/md/样式实现/其它',
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
          text: '文件上传',
          link: '/md/业务实现/文件上传',
        },
        {
          text: '文件上传-切片',
          link: '/md/业务实现/文件上传-切片',
        },
        {
          text: '文件上传-ali-oss',
          link: '/md/业务实现/文件上传-ali-oss',
        },
        {
          text: '抽奖转盘',
          link: '/md/业务实现/抽奖转盘',
        },
        {
          text: '输入框模板',
          link: '/md/业务实现/输入框模板',
        },
        {
          text: '小程序',
          collapsed: true,
          items: [
            {
              text: '更新提示',
              link: '/md/业务实现/小程序/更新提示',
            },
            {
              text: '根据环境配置BaseUrl',
              link: '/md/业务实现/小程序/根据环境配置BaseUrl',
            },
            {
              text: '封装接口请求函数',
              link: '/md/业务实现/小程序/封装接口请求函数',
            },
            {
              text: '生成二维码',
              link: '/md/业务实现/小程序/生成二维码',
            },
            {
              text: '绘制海报',
              link: '/md/业务实现/小程序/绘制海报',
            },
            {
              text: '查看文件',
              link: '/md/业务实现/小程序/查看文件',
            },
            {
              text: '位置权限处理',
              link: '/md/业务实现/小程序/位置权限处理',
            },
          ],
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
      ],
    },
  ];
}
