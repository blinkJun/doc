# [`markdown-it`](https://github.com/markdown-it/markdown-it)

解析`markdown`格式的数据为`html`。

## 使用方式

```js
var md = require('markdown-it')();
var result = md.render('# markdown-it rulezz!');
```

## 使用`prismjs`自定义语法高亮

与`highlightjs`比较、`prismjs`高亮的代码更准确，更加细粒度

1. 安装

```bash
npm i prismjs --save-dev
```

2. 使用

```js
import Prism from 'prismjs';

const code = `var data = 1;`;

const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
```

引入后，默认加载这几种种语言：`markup`, `css`, `clike` and `javascript`

可以使用`loadLanguages`加载更多语言：

```js
import loadLanguages from 'prismjs/components/';

loadLanguages(['haml']);

const code = `= ['hi', 'there', 'reader!'].join " "`;

const html = Prism.highlight(code, Prism.languages.haml, 'haml');
```

点击查看[支持的语言](https://prismjs.com/#supported-languages)，若不确定是否支持某一种语言，可以进行如下判断，尝试加载：

```js
// 为输出的命令行文本添加样式
import chalk from 'chalk';

function tryLoadLanguages(lang){
  // 尝试加载
  if (!prism.languages[lang]) {
    try {
      loadLanguages([lang]);
    }catch (e) {
      console.warn(chalk.yellow(`Syntax highlight for language "${lang}" is not supported.`));
    }
  }
}
```

3. 对一些常用的语言缩写进行匹配

```js
function formatLang(lang){
  if(!lang){
    return 'text'
  }

  lang = lang.toLowerCase();

  if (lang === 'vue' || lang === 'html') {
    lang = 'markup';
  }
  if (lang === 'md') {
    lang = 'markdown';
  }
  if (lang === 'ts') {
    lang = 'typescript';
  }
  if (lang === 'py') {
    lang = 'python';
  }

  return lang
}
```

4. 为高亮的代码包裹代码块元素

```js
// 将文本解析为html格式
import escapeHtml from 'escape-html'
function wrap(code,lang){
  if (lang === 'text') {
    code = escapeHtml(code);
  }
  // 若是vue项目，加上v-pre可以跳过该元素的解析
  return `<pre v-pre><code>${code}</code></pre>`;
}
```

5. 得到解析代码：

```js
export default function highlight(code,lang){
  const lang = formatLang(lang)

  tryLoadLanguages(lang)

  if (prism.languages[lang]) {
    const highlightCode = prism.highlight(str, prism.languages[lang], lang);
    return wrap(highlightCode, lang);
  }

  return wrap(code, lang);
}
```

6. 在`markdown-it`生成实例时，配置高亮：

```js
var md = require('markdown-it')({
  highlight:highlight
});
var result = md.render('# markdown-it rulezz!');
```

## [markdown-it-container](https://github.com/markdown-it/markdown-it-container) ：自定义容器

1. 安装自定义容器插件

```bash
npm install markdown-it-container --save
```

2. 在`markdown`文档中如此使用：

```md
:::demo 加载状态，增加`loading`参数可设置

components-fl/button/normal

:::
```

3. 在`markdown-it`实例中配置：

```js
var md = require('markdown-it')();
md.use(require('markdown-it-container'), 'demo', {

  validate: function(params) {
    return !!params.trim().match(/^demo\s*(.*)$/);
  },

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
    if (tokens[idx].nesting === 1) {

      // demo后的说明文案
      const description = m && m.length > 1 ? m[1] : ''
      // 容器内的内容
      const sourceFileToken = tokens[idx + 2]
      const sourceFile = sourceFileToken.children?.[0].content ?? ''

      // 根据内容进行更多操作...

      // 返回一个html元素标签
      return '<demo>'
    } else {
      // 关闭标签
      return '</demo>\n';
    }
  }
});
```
