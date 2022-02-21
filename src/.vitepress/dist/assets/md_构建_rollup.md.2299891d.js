import{_ as n,c as s,o as a,a as p}from"./app.dfde2fab.js";const y='{"title":"\u7C7B\u5E93\u7684\u6253\u5305\u5DE5\u5177 Rollup","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u914D\u7F6E\u6587\u4EF6 rollup.config.js","slug":"\u914D\u7F6E\u6587\u4EF6-rollup-config-js"},{"level":2,"title":"\u4F7F\u7528\u63D2\u4EF6","slug":"\u4F7F\u7528\u63D2\u4EF6"},{"level":2,"title":"external \u6392\u9664\u6A21\u5757\u6253\u5305","slug":"external-\u6392\u9664\u6A21\u5757\u6253\u5305"},{"level":2,"title":"\u5F00\u53D1\u63D2\u4EF6","slug":"\u5F00\u53D1\u63D2\u4EF6"}],"relativePath":"md/\u6784\u5EFA/rollup.md","lastUpdated":1638340958403}',t={},o=p(`<h1 id="\u7C7B\u5E93\u7684\u6253\u5305\u5DE5\u5177-rollup" tabindex="-1">\u7C7B\u5E93\u7684\u6253\u5305\u5DE5\u5177 <a href="https://rollupjs.org/guide/en/#overview" target="_blank" rel="noopener noreferrer"><code>Rollup</code></a> <a class="header-anchor" href="#\u7C7B\u5E93\u7684\u6253\u5305\u5DE5\u5177-rollup" aria-hidden="true">#</a></h1><h2 id="\u914D\u7F6E\u6587\u4EF6-rollup-config-js" tabindex="-1">\u914D\u7F6E\u6587\u4EF6 <code>rollup.config.js</code> <a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6-rollup-config-js" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span><span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span><span class="token string">&#39;dist/bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span><span class="token string">&#39;es&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F7F\u7528\uFF1A</p><div class="language-bash"><pre><code>npx rollup --config rollup.config.js
</code></pre></div><ul><li>\u8F93\u51FA <code>umd</code> \u683C\u5F0F\u6587\u4EF6\u5E76\u914D\u7F6E\u5168\u5C40\u53D8\u91CF\u3001\u6392\u9664\u4F9D\u8D56\u5305</li></ul><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span><span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;blinkComponents&#39;</span><span class="token punctuation">,</span> <span class="token comment">//\u5168\u5C40\u53D8\u91CF\u540D\u79F0</span>
    <span class="token literal-property property">file</span><span class="token operator">:</span><span class="token string">&#39;dist/bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">format</span><span class="token operator">:</span><span class="token string">&#39;umd&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">globals</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token string-property property">&#39;vue&#39;</span><span class="token operator">:</span><span class="token string">&#39;Vue&#39;</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;lodash-es&#39;</span><span class="token operator">:</span><span class="token string">&#39;_&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">exports</span><span class="token operator">:</span><span class="token string">&#39;named&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">external</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;lodash-es&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4F7F\u7528\u63D2\u4EF6" tabindex="-1">\u4F7F\u7528<a href="https://github.com/rollup/awesome" target="_blank" rel="noopener noreferrer">\u63D2\u4EF6</a> <a class="header-anchor" href="#\u4F7F\u7528\u63D2\u4EF6" aria-hidden="true">#</a></h2><ul><li>\u8BFB\u53D6<code>json</code>\u6587\u4EF6\u5185\u5BB9</li></ul><div class="language-javascript"><pre><code><span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-json&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u8BFB\u53D6<code>node</code>\u6A21\u5757\uFF1A</li></ul><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>nodeResolve<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@rollup/plugin-node-resolve&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token function">nodeResolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u538B\u7F29\u6DF7\u6DC6\u4EE3\u7801\uFF1A<code>rollup-plugin-terser</code></li></ul><div class="language-javascript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>terser<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-terser&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token function">terser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u5904\u7406 <code>vue</code> \u6587\u4EF6\u5185\u5BB9\uFF1A<a href="https://www.npmjs.com/package/rollup-plugin-vue" target="_blank" rel="noopener noreferrer">rollup-plugin-vue</a></li><li>\u5904\u7406 <code>css</code> \u5185\u5BB9\uFF1A<a href="https://www.npmjs.com/package/rollup-plugin-css-only" target="_blank" rel="noopener noreferrer">rollup-plugin-css-only</a></li><li>\u5904\u7406 <code>typescript</code>\uFF1A<a href="https://www.npmjs.com/package/rollup-plugin-typescript2" target="_blank" rel="noopener noreferrer">rollup-plugin-typescript2</a></li></ul><div class="language-javascript"><pre><code><span class="token keyword">import</span> vuePlugin <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-vue&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// \u9700\u8981\u589E\u52A0\u5BF9 style \u7684\u5904\u7406</span>
<span class="token keyword">import</span> cssPlugin <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-css-only&#39;</span>
<span class="token comment">// \u517C\u5BB9vue\u7684 typescript \u63D2\u4EF6\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u6839\u76EE\u5F55\u4E0B\u7684 tsconfig.json \u914D\u7F6E\u6587\u4EF6</span>
<span class="token keyword">import</span> tsPlugin <span class="token keyword">from</span> <span class="token string">&#39;rollup-plugin-typescript2&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token function">tsPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// \u8986\u76D6 tsconfig.json \u914D\u7F6E</span>
      <span class="token literal-property property">tsconfigOverride</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token comment">// \u8F93\u51FA\u58F0\u660E\u6587\u4EF6</span>
        <span class="token literal-property property">declaration</span><span class="token operator">:</span><span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">vuePlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">cssPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">output</span><span class="token operator">:</span><span class="token string">&#39;bundle.css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="external-\u6392\u9664\u6A21\u5757\u6253\u5305" tabindex="-1"><code>external</code> \u6392\u9664\u6A21\u5757\u6253\u5305 <a class="header-anchor" href="#external-\u6392\u9664\u6A21\u5757\u6253\u5305" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">external</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^vue</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span> <span class="token operator">||</span> deps<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token parameter">k</span><span class="token operator">=&gt;</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;^&#39;</span><span class="token punctuation">,</span>k<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5F00\u53D1\u63D2\u4EF6" tabindex="-1">\u5F00\u53D1\u63D2\u4EF6 <a class="header-anchor" href="#\u5F00\u53D1\u63D2\u4EF6" aria-hidden="true">#</a></h2><p>\u63D2\u4EF6\u662F\u4E00\u4E2A<strong>\u51FD\u6570</strong>\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A<code>options</code>\u5BF9\u8C61\uFF0C\u5728<code>options</code>\u4E0A\u5B9A\u4E49\u4E00\u7CFB\u5217<code>rollup</code>\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u5728\u5BF9\u5E94\u751F\u547D\u5468\u671F\u88AB\u8C03\u7528\u5E76\u4F20\u5165\u76F8\u5173\u53C2\u6570</p><div class="language-javascript"><pre><code><span class="token keyword">function</span> <span class="token function">plugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;plugin&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">buildStart</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">load</span><span class="token punctuation">(</span><span class="token parameter">id</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">transform</span><span class="token punctuation">(</span><span class="token parameter">code<span class="token punctuation">,</span>id</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">code</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">buildEnd</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,21),e=[o];function c(l,r,u,i,k,d){return a(),s("div",null,e)}var f=n(t,[["render",c]]);export{y as __pageData,f as default};
