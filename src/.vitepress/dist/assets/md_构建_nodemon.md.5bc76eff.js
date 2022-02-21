import{_ as n,c as s,o,a}from"./app.dfde2fab.js";const g='{"title":"nodemon","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5982\u4F55\u4F7F\u7528","slug":"\u5982\u4F55\u4F7F\u7528"},{"level":2,"title":"typescript","slug":"typescript"}],"relativePath":"md/\u6784\u5EFA/nodemon.md","lastUpdated":1638868697115}',e={},t=a(`<h1 id="nodemon" tabindex="-1"><code>nodemon</code> <a class="header-anchor" href="#nodemon" aria-hidden="true">#</a></h1><p>\u68C0\u6D4B\u6587\u4EF6\u4FEE\u6539\uFF0C\u81EA\u52A8\u91CD\u542F\u5E94\u7528\uFF0C\u5E2E\u52A9\u5F00\u53D1\u57FA\u4E8E<code>node.js</code>\u7684\u9879\u76EE</p><h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1">\u5982\u4F55\u4F7F\u7528 <a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a></h2><ol><li>\u5B89\u88C5</li></ol><div class="language-bash"><pre><code><span class="token function">npm</span> i nodemon --save-dev
</code></pre></div><ol start="2"><li>\u4F7F\u7528\uFF1A\u76F4\u63A5\u66FF\u6362 <code>node</code> \u547D\u4EE4</li></ol><div class="language-bash"><pre><code><span class="token function">node</span> index.js
<span class="token comment"># =&gt;</span>
nodemon index.js
</code></pre></div><ol start="3"><li>\u4FEE\u6539\u914D\u7F6E</li></ol><p>\u57FA\u672C\u914D\u7F6E\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;restartable&quot;</span><span class="token operator">:</span><span class="token string">&quot;rs&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;verbose&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*.test.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fixtures/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;execMap&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;rb&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ruby&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;pde&quot;</span><span class="token operator">:</span> <span class="token string">&quot;processing --sketch={{pwd}} --run&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;watch&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./src/*&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;NODE_ENV&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;PORT&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3000&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ext&quot;</span><span class="token operator">:</span> <span class="token string">&quot;js json&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u914D\u7F6E\u8BF4\u660E\uFF1A</p><ul><li><code>restartable</code>\uFF1A\u8BBE\u7F6E\u91CD\u542F\u6A21\u5F0F\uFF0C\u9700\u8981\u624B\u52A8\u91CD\u542F\u65F6\u8F93\u5165<code>rs</code></li><li><code>verbose</code>\uFF1A\u8BBE\u7F6E\u65E5\u5FD7\u8F93\u51FA\u6A21\u5F0F\uFF0C\xB7\u4E3A\u8BE6\u7EC6\u6A21\u5F0F</li><li><code>watch</code>\uFF1A\u9700\u8981\u76D1\u542C\u7684\u6587\u4EF6</li><li><code>ignore</code>\uFF1A\u5FFD\u7565\u7684\u6587\u4EF6 \u9ED8\u8BA4\u5FFD\u7565\uFF1A<code>.git</code>, <code>node_modules</code>, <code>bower_components</code>, <code>.sass-cache</code></li><li><code>delay</code>\uFF1A\u8BBE\u7F6E\u5EF6\u8FDF\u65F6\u95F4</li><li><code>exec</code>\uFF1A\u6267\u884C\u7684\u547D\u4EE4</li><li><code>ext</code>\uFF1A\u6587\u4EF6\u540E\u7F00\u540D</li><li><code>execMap</code>\uFF1A\u8FD0\u884C\u670D\u52A1\u7684\u540E\u7F00\u540D\u548C\u5BF9\u5E94\u7684\u8FD0\u884C\u547D\u4EE4</li><li><code>env</code>\uFF1A\u8FD0\u884C\u73AF\u5883 <code>development</code> \u662F\u5F00\u53D1\u73AF\u5883\uFF0C<code>production</code> \u662F\u751F\u4EA7\u73AF\u5883\u3002<code>port</code> \u662F\u7AEF\u53E3\u53F7</li></ul><p>\u53EF\u5C06\u914D\u7F6E\u8F93\u51FA\u4E3A<code>nodemon.json</code>\u653E\u7F6E\u5728\u6839\u76EE\u5F55\uFF0C\u4E5F\u53EF\u4EE5\u5728<code>package.json</code>\u4E2D\u914D\u7F6E<code>nodemonConfig</code>\u5B57\u6BB5\u3002</p><h2 id="typescript" tabindex="-1"><code>typescript</code> <a class="header-anchor" href="#typescript" aria-hidden="true">#</a></h2><p>\u68C0\u6D4B<code>typescript</code>\u6587\u4EF6</p><ol><li>\u5B89\u88C5 <code>ts-node</code></li></ol><div class="language-bash"><pre><code><span class="token function">npm</span> i ts-node --save-dev
</code></pre></div><ol start="2"><li>\u5728\u914D\u7F6E\u4E2D\u7684<code>ext</code>\u4E2D\u6DFB\u52A0<code>ts</code>\u6587\u4EF6\u76D1\u68C0\u6D4B</li></ol><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;ext&quot;</span><span class="token operator">:</span> <span class="token string">&quot;js json ts&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li>\u68C0\u6D4B<code>ts</code>\u6587\u4EF6\uFF1A</li></ol><div class="language-bash"><pre><code>nodemon index.ts
</code></pre></div>`,21),p=[t];function c(l,d,r,i,u,k){return o(),s("div",null,p)}var h=n(e,[["render",c]]);export{g as __pageData,h as default};
