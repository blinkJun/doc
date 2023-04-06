# 使用 [`vitepress`](https://vitejs.cn/vitepress/) 创建组件库文档
先根据文档安装环境，启动默认的文档服务

## tips
- `0.20.1` 版本不支持中文文件夹解析，开发服务可打开，生产打包会报错

## 进行一些基础配置

1. 配置主页：`index.md`

```yaml
---
home: true
heroImage: /images/logo.png
heroAlt: Blink Elements
heroText: Blink Elements
tagline: UI组件库
actionText: Get Started
actionLink: /md/guide/
features:
  - title: Simplicity First
    details: Minimal setup with markdown-centered project structure helps you focus on writing.
  - title: Vue-Powered
    details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
  - title: Performant
    details: VitePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2019-present LJ
---
```

2. 在文档根目录下创建`.vitepress`文件夹，对主题进行基本配置
```typescript
import {mdPlugin} from './config/plugins'
import {HeadConfig} from 'vitepress'


export default {
  title: 'Blink-Elements',
  description: 'Just playing around.',
  markdown:{
    config:mdPlugin
  },
  head:[
    [
      'link',
      {
        rel: 'icon',
        href: '/images/logo.png',
      },
    ],
  ] as HeadConfig[],
  themeConfig: {
    repo: 'blink-elements',
    logo: '/images/logo.png',
    nav: [
      { text: '指南', link: '/md/guide/',activeMatch: '^/guide/' },
      { text: '组件', link: '/md/components/',activeMatch: '^/components/' }
    ],
    sidebar:{
      '/md/guide/':[
        {
          text: '指南',
          children: [
            {
              text: 'index',
              link: '/md/guide/'
            },
            {
              text: 'button',
              link: '/md/guide/button'
            },
          ]
        }
      ],
      '/md/components/':[
        {
          text: '组件',
          children: [
            {
              text: 'index',
              link: '/md/components/'
            },
            {
              text: 'button',
              link: '/md/components/button'
            },
          ]
        }
      ]
    }
  },
}
```
更多配置查阅[`vitepress`](https://vitejs.cn/vitepress/)
