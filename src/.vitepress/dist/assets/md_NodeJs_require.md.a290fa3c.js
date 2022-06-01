import { _ as e, c as o, o as d, a as c } from './app.f8375116.js';
const m =
    '{"title":"require\u76F8\u5173","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u652F\u6301\u52A0\u8F7D\u7684\u6587\u4EF6\u7C7B\u578B","slug":"\u652F\u6301\u52A0\u8F7D\u7684\u6587\u4EF6\u7C7B\u578B"},{"level":2,"title":"require\u5982\u4F55\u67E5\u627E\u6A21\u5757","slug":"require\u5982\u4F55\u67E5\u627E\u6A21\u5757"},{"level":2,"title":"\u5982\u4F55\u4F7F\u7528 ESmodule \u8BED\u6CD5","slug":"\u5982\u4F55\u4F7F\u7528-esmodule-\u8BED\u6CD5"}],"relativePath":"md/NodeJs/require.md","lastUpdated":1638340958387}',
  a = {},
  i = c(
    `<h1 id="require\u76F8\u5173" tabindex="-1"><code>require</code>\u76F8\u5173 <a class="header-anchor" href="#require\u76F8\u5173" aria-hidden="true">#</a></h1><h2 id="\u652F\u6301\u52A0\u8F7D\u7684\u6587\u4EF6\u7C7B\u578B" tabindex="-1">\u652F\u6301\u52A0\u8F7D\u7684\u6587\u4EF6\u7C7B\u578B <a class="header-anchor" href="#\u652F\u6301\u52A0\u8F7D\u7684\u6587\u4EF6\u7C7B\u578B" aria-hidden="true">#</a></h2><ul><li><code>node</code> \uFF1A<code>c++</code>\u63D2\u4EF6\uFF0C\u4E0D\u5E38\u7528</li><li><code>js</code> \uFF1A\u9700\u8981\u5728\u6587\u4EF6\u5185\u5BFC\u51FA\u8D44\u6E90<code>module.exports</code></li><li><code>json</code>\uFF1A<code>json</code>\u6587\u4EF6\u683C\u5F0F</li></ul><p>\u975E\u4EE5\u4E0A\u683C\u5F0F\u7684\u6587\u4EF6\u4F1A\u88AB\u5F53\u6210<code>js</code>\u6587\u4EF6\u8BFB\u53D6</p><h2 id="require\u5982\u4F55\u67E5\u627E\u6A21\u5757" tabindex="-1"><code>require</code>\u5982\u4F55\u67E5\u627E\u6A21\u5757 <a class="header-anchor" href="#require\u5982\u4F55\u67E5\u627E\u6A21\u5757" aria-hidden="true">#</a></h2><ol><li>\u4F18\u5148\u52A0\u8F7D\u539F\u751F\u6A21\u5757</li><li>\u6309\u6587\u4EF6\u8DEF\u5F84\u67E5\u627E\u6587\u4EF6\u6A21\u5757\uFF0C\u65E0\u540E\u7F00\u540D\u5C1D\u8BD5\u5E26\u4E0A <code>.node</code>\u3001<code>.js</code>\u3001<code>.json</code>\u52A0\u8F7D</li><li>\u82E5\u662F\u6587\u4EF6\u76EE\u5F55\u5219\u68C0\u67E5\u76EE\u5F55\u4E0B\u7684<code>package.json</code>\u6587\u4EF6\u7684<code>main</code>\u83B7\u53D6\u6A21\u5757\uFF0C\u65E0\u6307\u5B9A\u6A21\u5757\u5219\u5C1D\u8BD5\u83B7\u53D6\u76EE\u5F55\u4E0B\u7684<code>index.node</code>\u3001<code>index.js</code> \u6587\u4EF6\uFF0C\u90FD\u6CA1\u6709\u5219\u62A5\u9519</li><li>\u4E0D\u662F\u6587\u4EF6\u8DEF\u5F84\u6A21\u5757\uFF0C\u5219\u4F1A\u4ECE<code>node_modules</code>\u4E2D\u67E5\u627E\uFF0C\u4E0D\u65AD\u5411\u5916\u5C42\u7236\u7EA7\u7684<code>node_modules</code>\u4E2D\u67E5\u627E\u6A21\u5757</li><li>\u6700\u540E\u4F1A\u67E5\u627E\u5168\u5C40\u76EE\u5F55\u4E0B\u7684\u6A21\u5757</li></ol><h2 id="\u5982\u4F55\u4F7F\u7528-esmodule-\u8BED\u6CD5" tabindex="-1">\u5982\u4F55\u4F7F\u7528 <code>ESmodule</code> \u8BED\u6CD5 <a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528-esmodule-\u8BED\u6CD5" aria-hidden="true">#</a></h2><ol><li>\u5C06<code>node</code>\u7248\u672C\u63D0\u9AD8\u5230 14 \u4EE5\u4E0A</li><li>\u5C06<code>js</code>\u6587\u4EF6\u540E\u7F00\u4FEE\u6539\u4E3A<code>mjs</code></li><li>\u5F15\u5165\u65F6\u5FC5\u987B\u586B\u5199\u540E\u7F00\u540D</li></ol><div class="language-javascript"><pre><code><span class="token keyword">import</span> index <span class="token keyword">from</span> <span class="token string">&#39;./index.mjs&#39;</span><span class="token punctuation">;</span>
</code></pre></div>`,
    9
  ),
  r = [i];
function s(l, n, t, u, p, h) {
  return d(), o('div', null, r);
}
var f = e(a, [['render', s]]);
export { m as __pageData, f as default };