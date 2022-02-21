import{_ as n,c as a,o as s,a as e}from"./app.dfde2fab.js";const m='{"title":"\u6A21\u5757\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B9E\u73B0\u65B9\u5F0F","slug":"\u5B9E\u73B0\u65B9\u5F0F"},{"level":3,"title":"\u4E00\u3001\u81EA\u6267\u884C\u51FD\u6570","slug":"\u4E00\u3001\u81EA\u6267\u884C\u51FD\u6570"},{"level":3,"title":"\u4E8C\u3001AMD\u89C4\u8303","slug":"\u4E8C\u3001amd\u89C4\u8303"},{"level":3,"title":"\u4E09\u3001CMD\u89C4\u8303","slug":"\u4E09\u3001cmd\u89C4\u8303"},{"level":3,"title":"\u56DB\u3001CommonJS\u89C4\u8303\uFF1ANodeJS","slug":"\u56DB\u3001commonjs\u89C4\u8303\uFF1Anodejs"},{"level":3,"title":"\u4E94\u3001ES Modules","slug":"\u4E94\u3001es-modules"},{"level":2,"title":"\u4EC0\u4E48\u662F UMD","slug":"\u4EC0\u4E48\u662F-umd"},{"level":2,"title":"\u6A21\u5757\u5316\u7684\u7BA1\u7406","slug":"\u6A21\u5757\u5316\u7684\u7BA1\u7406"}],"relativePath":"md/\u6784\u5EFA/\u6A21\u5757\u5316.md","lastUpdated":1638340958403}',p={},t=e(`<h1 id="\u6A21\u5757\u5316" tabindex="-1">\u6A21\u5757\u5316 <a class="header-anchor" href="#\u6A21\u5757\u5316" aria-hidden="true">#</a></h1><p>\u6A21\u5757\u5316\u4E3B\u8981\u662F\u7528\u6765\u62BD\u79BB\u516C\u5171\u4EE3\u7801\uFF0C\u9694\u79BB\u4F5C\u7528\u57DF\uFF0C\u907F\u514D\u53D8\u91CF\u51B2\u7A81\u7B49</p><h2 id="\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1">\u5B9E\u73B0\u65B9\u5F0F <a class="header-anchor" href="#\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a></h2><h3 id="\u4E00\u3001\u81EA\u6267\u884C\u51FD\u6570" tabindex="-1">\u4E00\u3001\u81EA\u6267\u884C\u51FD\u6570 <a class="header-anchor" href="#\u4E00\u3001\u81EA\u6267\u884C\u51FD\u6570" aria-hidden="true">#</a></h3><p>\u5728\u5355\u72EC\u7684\u51FD\u6570\u4E2D\u6267\u884C\u4EE3\u7801\uFF0C\u9694\u79BB\u4F5C\u7528\u57DF\uFF0C\u9632\u6B62\u53D8\u91CF\u6C61\u67D3\uFF1A</p><div class="language-javascript"><pre><code>  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u4E8C\u3001amd\u89C4\u8303" tabindex="-1">\u4E8C\u3001AMD\u89C4\u8303 <a class="header-anchor" href="#\u4E8C\u3001amd\u89C4\u8303" aria-hidden="true">#</a></h3><p>\u6D4F\u89C8\u5668\u7AEF\u6A21\u5757\u5316\uFF1Arequire.js</p><ul><li>\u63D0\u524D\u58F0\u660E\u4F9D\u8D56</li><li>\u5F02\u6B65\u52A0\u8F7D\u4F9D\u8D56\u6A21\u5757\uFF0C\u52A0\u8F7D\u5B8C\u6210\u540E\u89E6\u53D1\u56DE\u8C03</li></ul><p>\u5F15\u5165\uFF1A</p><div class="language-javascript"><pre><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span>moduleA<span class="token punctuation">,</span>moduleB<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">A</span><span class="token punctuation">,</span><span class="token constant">B</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token comment">//\u4F7F\u7528A\u3001B</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5B9A\u4E49\uFF1A</p><div class="language-javascript"><pre><code><span class="token comment">//\u65E0\u4F9D\u8D56</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> module
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//\u6709\u4F9D\u8D56</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span>moduleA<span class="token punctuation">,</span>moduleB<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token constant">A</span><span class="token punctuation">,</span><span class="token constant">B</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> module
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u4E09\u3001cmd\u89C4\u8303" tabindex="-1">\u4E09\u3001CMD\u89C4\u8303 <a class="header-anchor" href="#\u4E09\u3001cmd\u89C4\u8303" aria-hidden="true">#</a></h3><p>\u6D4F\u89C8\u5668\u7AEF\u6A21\u5757\u5316\uFF1Asea.js</p><ul><li>\u52A8\u6001\u5F15\u5165\u6A21\u5757</li><li>\u5F02\u6B65\u52A0\u8F7D\u4F9D\u8D56\u6A21\u5757\uFF0C\u52A0\u8F7D\u5B8C\u6210\u540E\u89E6\u53D1\u56DE\u8C03</li></ul><p>\u5F15\u5165\u3001\u5B9A\u4E49\uFF1A</p><div class="language-javascript"><pre><code><span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u540C\u6B65</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./a&#39;</span><span class="token punctuation">)</span>
  
  <span class="token comment">//\u5F02\u6B65</span>
  require<span class="token punctuation">.</span><span class="token function">async</span><span class="token punctuation">(</span><span class="token string">&#39;./b&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  	
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  
  <span class="token comment">//\u5B9A\u4E49</span>
  exports<span class="token punctuation">.</span>xxx <span class="token operator">=</span> value
  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> value
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u56DB\u3001commonjs\u89C4\u8303\uFF1Anodejs" tabindex="-1">\u56DB\u3001CommonJS\u89C4\u8303\uFF1ANodeJS <a class="header-anchor" href="#\u56DB\u3001commonjs\u89C4\u8303\uFF1Anodejs" aria-hidden="true">#</a></h3><p>\u6D4F\u89C8\u5668\u7AEF\u6A21\u5757\u5316\uFF1Awebpack\u3001browerfy</p><ul><li>node\uFF1A\u540C\u6B65\u52A0\u8F7D\uFF0C\u4EFB\u610F\u6587\u4EF6</li><li>\u6D4F\u89C8\u5668\uFF1A\u63D0\u524D\u7F16\u8BD1\u6253\u5305</li></ul><p>\u5F15\u5165\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">required</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5B9A\u4E49\uFF1A</p><div class="language-javascript"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> a 
exports<span class="token punctuation">.</span>a <span class="token operator">=</span> a
</code></pre></div><h3 id="\u4E94\u3001es-modules" tabindex="-1">\u4E94\u3001ES Modules <a class="header-anchor" href="#\u4E94\u3001es-modules" aria-hidden="true">#</a></h3><p>\u6D4F\u89C8\u5668\u7AEF\u6A21\u5757\u5316\uFF1Ababel</p><ul><li>\u6D4F\u89C8\u5668\u548C\u670D\u52A1\u7AEF\u9002\u7528</li><li>\u76EE\u524D\u9700\u8981\u5DE5\u5177\u5C06es6\u4EE3\u7801\u8F6C\u4E3Aes5</li><li>\u4F9D\u8D56\u9700\u8981\u63D0\u524D\u58F0\u660E</li></ul><p>\u5F15\u5165\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">import</span> a <span class="token keyword">from</span> <span class="token string">&#39;a&#39;</span>
</code></pre></div><p>\u5B9A\u4E49\uFF1A</p><div class="language-javascript"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> a <span class="token operator">=</span> b
</code></pre></div><h2 id="\u4EC0\u4E48\u662F-umd" tabindex="-1">\u4EC0\u4E48\u662F <code>UMD</code> <a class="header-anchor" href="#\u4EC0\u4E48\u662F-umd" aria-hidden="true">#</a></h2><p>\u6240\u8C13 <code>UMD (Universal Module Definition)</code>\uFF0C\u5C31\u662F\u4E00\u79CD<code>javascript</code>\u901A\u7528\u6A21\u5757\u5B9A\u4E49\u89C4\u8303\uFF0C\u8BA9\u4F60\u7684\u6A21\u5757\u80FD\u5728<code>javascript</code>\u6240\u6709\u8FD0\u884C\u73AF\u5883\u4E2D\u53D1\u6325\u4F5C\u7528\u3002</p><h2 id="\u6A21\u5757\u5316\u7684\u7BA1\u7406" tabindex="-1">\u6A21\u5757\u5316\u7684\u7BA1\u7406 <a class="header-anchor" href="#\u6A21\u5757\u5316\u7684\u7BA1\u7406" aria-hidden="true">#</a></h2><p>\u5F53\u6211\u4EEC\u7684\u516C\u5171\u6A21\u5757\u5728<strong>\u540C\u4E00\u4E2A\u9879\u76EE</strong>\u65F6\uFF0C\u53EF\u4EE5\u653E\u7F6E\u5728\u9879\u76EE\u4E2D\u81EA\u884C\u7BA1\u7406\uFF0C\u901A\u8FC7\u4E0A\u8FF0\u7684\u5B9E\u73B0\u65B9\u5F0F\u590D\u7528\uFF0C\u7B80\u5355\u6E05\u723D\u3002 \u4F46\u662F\u5F53\u6211\u4EEC\u7684\u6A21\u5757\u9700\u8981\u5728<strong>\u591A\u4E2A\u9879\u76EE</strong>\u4E2D\u91CD\u590D\u4F7F\u7528\u65F6\uFF0C\u5982\u4F55\u7EDF\u4E00\u7BA1\u7406\u8FD9\u4E9B\u6A21\u5757\u5C06\u662F\u4E2A\u590D\u6742\u7684\u95EE\u9898</p><ul><li>\u5C06\u516C\u5171\u6A21\u5757\u6253\u5305\u6210\u4E3A<code>umd</code>\u683C\u5F0F\uFF0C\u4F7F\u7528<code>script</code>\u6807\u7B7E\u5F15\u5165 <ul><li>\u9700\u8981\u5728\u4F7F\u7528\u7684\u9879\u76EE\u4E2D\u6DFB\u52A0<code>script</code>\u6807\u7B7E</li><li>\u4E0E<code>node</code>\u9879\u76EE\u4E2D\u7684<code>npm</code>\u6A21\u5757\u4E0D\u7EDF\u4E00</li><li>\u4E0D\u80FD\u81EA\u884C\u7BA1\u7406\u6B64\u6A21\u5757\uFF0C\u53EA\u80FD\u5F15\u5165</li></ul></li><li>\u6253\u9020\u79C1\u6709\u4ED3\u5E93\uFF0C\u5C06<code>package</code>\u7EDF\u4E00\u7BA1\u7406\u8D77\u6765 <ul><li>\u4E0E<code>npm</code>\u6A21\u5757\u7EDF\u4E00\u7BA1\u7406</li></ul></li></ul>`,37),o=[t];function c(l,u,i,r,d,k){return s(),a("div",null,o)}var v=n(p,[["render",c]]);export{m as __pageData,v as default};
