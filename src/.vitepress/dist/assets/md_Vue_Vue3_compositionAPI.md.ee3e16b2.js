import { _ as n, c as s, o as a, a as t } from './app.f8375116.js';
const m =
    '{"title":"composition API","description":"","frontmatter":{},"headers":[{"level":2,"title":"ref","slug":"ref"},{"level":2,"title":"reactive","slug":"reactive"},{"level":2,"title":"toRefs","slug":"torefs"},{"level":2,"title":"\u751F\u547D\u5468\u671F\u51FD\u6570","slug":"\u751F\u547D\u5468\u671F\u51FD\u6570"}],"relativePath":"md/Vue/Vue3/compositionAPI.md","lastUpdated":1638340958387}',
  p = {},
  o = t(
    `<h1 id="composition-api" tabindex="-1"><code>composition API</code> <a class="header-anchor" href="#composition-api" aria-hidden="true">#</a></h1><h2 id="ref" tabindex="-1"><code>ref</code> <a class="header-anchor" href="#ref" aria-hidden="true">#</a></h2><p>\u5C06\u57FA\u672C\u7C7B\u578B\u7684\u6570\u636E\u8F6C\u6362\u4E3A\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u901A\u8FC7<code>.value</code>\u66F4\u65B0\u503C</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8C03\u7528\u6B64\u65B9\u6CD5\u5B8C\u6210 count \u7684\u9012\u589E</span>
    <span class="token keyword">const</span> <span class="token function-variable function">addCount</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">.</span>value<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">,</span>
      addCount<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="reactive" tabindex="-1"><code>reactive</code> <a class="header-anchor" href="#reactive" aria-hidden="true">#</a></h2><p>\u5C06\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\u8F6C\u6362\u4E3A\u54CD\u5E94\u5F0F\u5BF9\u8C61</p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token generic-function"><span class="token function">reactive</span><span class="token generic class-name"><span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;mao&#39;</span><span class="token punctuation">,</span>
      age<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8C03\u7528\u6B64\u65B9\u6CD5\u5B8C\u6210 age \u7684\u9012\u589E</span>
    <span class="token keyword">const</span> <span class="token function-variable function">addAge</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      person<span class="token punctuation">.</span>age<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      person<span class="token punctuation">,</span>
      addAge<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="torefs" tabindex="-1"><code>toRefs</code> <a class="header-anchor" href="#torefs" aria-hidden="true">#</a></h2><p>\u5728<code>reactive</code>\u7684\u5B9E\u73B0\u4E2D\uFF0C\u5F53\u6211\u4EEC\u5C1D\u8BD5\u7ED3\u6784<code>person</code>\u5BF9\u8C61\uFF0C\u53EA\u8FD4\u56DE\u4ED6\u4EEC\u7684\u6210\u5458\u4F9B\u6A21\u677F\u4F7F\u7528\u65F6\uFF0C\u53D1\u73B0\u5E76\u4E0D\u80FD\u54CD\u5E94\uFF0C\u662F\u56E0\u4E3A<code>person</code>\u4E3A\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u800C\u5B83\u7684\u6210\u5458\u662F\u666E\u901A\u7C7B\u578B\u5B57\u6BB5\uFF0C\u5E76\u4E0D\u662F\u54CD\u5E94\u5F0F\u5BF9\u8C61\uFF0C\u9700\u8981<strong>\u901A\u8FC7<code>toRefs</code>\u65B9\u6CD5\u5C06\u5B83\u7684\u6210\u5458\u4E5F\u8FDB\u884C\u8F6C\u6362</strong></p><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token generic-function"><span class="token function">reactive</span><span class="token generic class-name"><span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">&#39;mao&#39;</span><span class="token punctuation">,</span>
      age<span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8C03\u7528\u6B64\u65B9\u6CD5\u5B8C\u6210 age \u7684\u9012\u589E</span>
    <span class="token keyword">const</span> <span class="token function-variable function">addAge</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      person<span class="token punctuation">.</span>age<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// \u8F6C\u6362\u54CD\u5E94\u5F0F\u5BF9\u8C61\u6210\u5458</span>
    <span class="token keyword">const</span> personDec <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>personDec<span class="token punctuation">,</span>
      addAge<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u751F\u547D\u5468\u671F\u51FD\u6570" tabindex="-1">\u751F\u547D\u5468\u671F\u51FD\u6570 <a class="header-anchor" href="#\u751F\u547D\u5468\u671F\u51FD\u6570" aria-hidden="true">#</a></h2><p>\u63D0\u4F9B\u94A9\u5B50\u51FD\u6570\u65B9\u4FBF\u5728 <code>setup</code> \u51FD\u6570\u4E2D\u4F7F\u7528</p><ul><li>\u65E0 <code>beforeCreate</code> \u548C <code>created</code>\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u5728<code>setup</code>\u4E4B\u524D\u548C\u4E4B\u540E\u8FD0\u884C\uFF0C\u53EF\u4EE5\u5728<code>setup</code>\u4E2D\u5B9E\u73B0</li><li>\u5176\u4ED6\u94A9\u5B50\u51FD\u6570\u548C\u751F\u547D\u5468\u671F\u51FD\u6570\u76F8\u540C\uFF0C\u53EA\u662F\u5728\u540D\u79F0\u4E0A\u52A0\u4E0A\u4E86<code>on</code>\uFF1A<code>onMounted</code></li></ul>`,
    13
  ),
  e = [o];
function c(u, l, i, k, r, d) {
  return a(), s('div', null, e);
}
var g = n(p, [['render', c]]);
export { m as __pageData, g as default };
