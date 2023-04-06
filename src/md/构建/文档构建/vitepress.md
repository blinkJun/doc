# 使用 `vitepress` 创建组件库文档
先根据文档安装环境，启动默认的文档服务。

- [最新文档](https://vitepress.dev/)
- [中文文档](https://vitejs.cn/vitepress/)

## tips
- `0.20.1` 版本不支持中文文件夹解析，开发服务可打开，生产打包会报错

## 页面
基本和`vuepress`基本一样，点击查看[`vuepress`页面](./vuepress.md#页面)

或者查看：
- [路由](https://vitepress.dev/guide/routing)
- [formatter](https://vitepress.dev/guide/frontmatter)
- [theme-formatter](https://vitepress.dev/reference/frontmatter-config#default-theme-only)

默认主题下首页`fomatter`模板：
```yaml
---
layout: home
title: Blink 的个人空间
titleTemplate: web前后端学习记录、总结

hero:
  name: Blink 的个人空间
  text: web前后端学习记录、总结
  tagline: Front End Doc, NodeJs Doc.
  actions:
    - theme: brand
      text: 查看学习文档 →
      link: /md/HTML/基本概念
    - theme: alt
      text: View on GitHub
      link: https://github.com/blinkJun/doc

features:
  - title: 'vitepress + github actions'
    details: 使用 vitepress 文档、github actions 自动构建.
  - title: 前端学习
    details: 包含前端大部分需要的知识个人总结和教程
  - title: NodeJs后端学习
    details: 包含NodeJs学习过程中的个人总结和教程.
  - title: 其它相关知识学习
    details: 其它相关知识学习记录.
---
```

## `.vitepress`：如何构建文档的配置

`config.ts`，配置如何构建文档：

1. 主要[配置](https://vitepress.dev/reference/site-config)

```ts
export default {
  title: 'Blink Docs',
  description: 'Blink 的学习文档',
  base: '/doc/',
  head: [['link', { rel: 'icon', href: '/doc/images/logo.png' }]],
}
```

2. [配置主题](https://vitepress.dev/reference/default-theme-config)

```ts
export default {
  themeConfig:{
    logo: '/images/logo.png',
    logoSmall: '/images/logo.png',
    editLink: {
      pattern: 'https://github.com/blinkJun/doc/edit/master/src/:path',
      text: 'Edit this page on GitHub',
    },
    docsBranch: 'master',
    socialLinks: [{ icon: 'github', link: 'https://github.com/blinkJun/doc' }],
    footer: {
      copyright: 'Copyright © 2023-present Blink',
    },
  }
}
```

3. 使用主题配置，配置页面中的导航栏和侧边栏：[sidebar](https://vitepress.dev/reference/default-theme-sidebar)

```ts
export default {
    themeConfig: {
        nav: [
            { text: '指南', link: '/md/guide/' },
        ],
        // 使用 侧边栏数组 所有页面使用同样的侧边栏
        sidebar:[
          {
            text: 'Section Title A',
            items: [
              { text: 'Item A', link: '/item-a' },
              { text: 'Item B', link: '/item-b' },
            ]
          },
        ],
        // 使用 侧边栏对象 不同页面路径下使用不同的侧边栏
        sidebar:{
          '/guide/': [
            {
              text: 'Guide',
              items: [
                { text: 'Index', link: '/guide/' },
                { text: 'One', link: '/guide/one' },
                { text: 'Two', link: '/guide/two' }
              ]
            }
          ],
        }
    }
}
```
