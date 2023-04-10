# [`vuepress`](https://v2.vuepress.vuejs.org/zh/)
虽然`vitepress`比`vuepress`先进不少，但是`vuepress`还是有他存在的价值：为`vue2`组件库书写文档。

## 页面
默认情况`vuepress`会自动读取`docs`文件夹下的`md`文件生成路由：[页面](https://v2.vuepress.vuejs.org/zh/guide/page.html)

每个页面都可以配置一个`fomatter`，类似于站点配置，可以覆盖掉默认的[fomatter](https://v2.vuepress.vuejs.org/zh/reference/frontmatter.html)、也可以覆盖默认主题的[formatter](https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html)

默认主题下首页`fomatter`模板：
```yaml
---
home: true
heroImage: /images/logo.png
heroText: 大也科技通用组件库
tagline: 自定义组件、指令、混入
actionText: 快速上手 →
actionLink: /md/guide/
features:
- title: vue2
  details: 主要技术栈为vue2，沉淀已有项目组件。
- title: 扩展
  details: 为依赖于其他组件库的组件，增加其功能；更多选用指令与混入可选。
- title: 示例
  details: 为组件增加示例，尽量达到易用目的。
footer: 大也科技
---
```

## `.vuepress`：如何构建文档的配置

`config.js`，配置如何构建文档：

1. 主要[配置](https://v2.vuepress.vuejs.org/zh/reference/config.html)

```js
module.exports = {
    title: 'Vue2 组件库',
    head: [
        ['link', { rel: 'icon', href: './images/logo.png' }]
    ],
    description: 'vue2组件库'
}
```

2. [配置主题](https://v2.vuepress.vuejs.org/zh/reference/config.html)

```js
module.exports = {
    themeConfig: {
        logo: '/images/logo.png',
        repo:'http://git.gxucreate.com:8091/gxdaye/web/infrastructure/elements',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        lastUpdated: 'Last Updated',
        smoothScroll: true
    }
}
```

3. 使用主题配置，配置页面中的导航栏和侧边栏

```js
module.exports = {
    themeConfig: {
        nav: [
            { text: '指南', link: '/md/guide/' },
        ],
        // 使用 侧边栏对象 不同页面路径下使用不同的侧边栏
        // 使用 侧边栏数组 所有页面使用同样的侧边栏
        sidebar:{
            '/md/guide': 'auto',
            '/md/components-common/':[
                ['', '介绍'],
                {
                    title: '组件',
                    collapsable: false,
                    children: [
                        ['count-to', 'count-to'],
                        ['marquee', 'marquee']
                    ]
                }
            ],
        }
    }
}
```
