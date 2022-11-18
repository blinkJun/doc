# 使用[`jsdoc`](http://shouce.jb51.net/jsdoc/index.html)为工具类库创建文档

## 安装

```bash
npm install jsdoc -save-dev
```

## 基本使用

- 对单个`js`文件进行转换：

```bash
jsdoc a.js b.js
```

- 配置 `jsdoc.json` 文件，根据配置进行生成

```bash
jsdoc -c jsdoc.json
```

## [配置文件：`conf.json` ](http://shouce.jb51.net/jsdoc/about-configuring-jsdoc.html)

常用配置：
```json
{
  "source": {
    "include": [ "src/" ],
    "exclude": [ "src/libs" ]
  },
  "opts": {
    "template": "templates/default",
    "encoding": "utf8",
    "destination": "./docs/",
    "recurse": true,
    "verbose": false
  }
}
```

- `source` 表示传递给 JSDOC 的文件
- `source.include` 表示 JSDOC 需要扫描哪些文件
- `source.exclude` 表示 JSDOC 需要排除哪些文件
- `opts` 表示传递给 JSDOC 的选项
- `opts.template` 生成文档的模板，默认是 templates/default
- `opts.encoding` 读取文件的编码，默认是 utf8
- `opts.destination` 生成文档的路径，默认是 ./out/
- `opts.recurse` 运行时是否递归子目录
- `opts.verbose` 运行时是否输出详细信息，默认是 false

## [注释](http://shouce.jb51.net/jsdoc/tags.html)

```js
/**
* @author j
* @description list 数据结构 转换成 树结构
* @param {Array} data 需要转换的数据
* @param {String} id 节点 id
* @param {String} pid 父级节点 id
* @param {String} child 子树为节点对象的某个属性值
* @param {Object} labels 需要新增的字段名集合 { label: 'category_name' }
* @return {Array}
*
* @example
* formatListToTree({data: [{id:1}, {id: 2}, {id: 3, pid: 1}]})
* =>
* [ { id: 1, children: [ {id: 3, pid: 1} ] }, { id: 2 } ]
*/

function formatListToTree({
  data = [],
  id = "id",
  pid = "pid",
  child = "children",
  labels = null
}) {
...
```
常见的 JavaScript 块级注释，必须以 `/**` 开头，不然会被忽略掉。

- `@author` 该类/方法的作者。
- `@class` 表示这是一个类。
- `@function/@method` 表示这是一个函数/方法(这是同义词)。
-` @private` 表示该类/方法是私有的，JSDOC 不会为其生成文档。
- `@name` 该类/方法的名字。
- `@description` 该类/方法的描述。
- `@param` 该类/方法的参数，可重复定义。
- `@return` 该类/方法的返回类型。
- `@link` 创建超链接，生成文档时可以为其链接到其他部分。
- `@example` 创建例子。

## 分类

通常情况下`jsdoc`会自动的识别`class`、全局`function`，但是我们也需要他是按什么规则识别的

- `classes` 分类

  使用 `@class` 标签标识类名，此类将会被归类到`classes`

- `modules` 分类

  在 `js` 文件中首行标识此文件模块类型，如：
    ```js
    /** @module Type */
    ```
  此模块将会被归类到 `modules`

- `global` 分类

  常规函数将会被归类到`global`

## 主题
可在`github`上搜索：`jsdoc theme` 得到合适的主题

推荐使用：[`clean-jsdoc-theme`](https://github.com/ankitskvmdam/clean-jsdoc-theme)

> 注意，主题版本应该和`jsdoc`的版本相匹配
