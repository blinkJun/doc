import{_ as n,c as s,o as a,a as t}from"./app.dfde2fab.js";const f='{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"md/ECMAScript/new\u5177\u4F53\u8FC7\u7A0B.md","lastUpdated":1645408002757}',o={},p=t(`<div class="language-javascript"><pre><code>
<span class="token keyword">function</span> <span class="token function">myNew</span> <span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 1. \u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61</span>
    <span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token comment">// 2. \u5C06\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u6307\u9488\u6307\u5411\u6784\u9020\u51FD\u6570\u7684\u539F\u578B</span>
    obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> func<span class="token punctuation">.</span>prototype
    <span class="token comment">// 3. \u4EE5obj\u4E3Athis\u4E0A\u4E0B\u6587\u6267\u884C\u6784\u9020\u51FD\u6570</span>
    <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
    <span class="token comment">// 4. \u8FD4\u56DE\u6784\u9020\u5B8C\u6210\u7684\u5BF9\u8C61</span>
    <span class="token keyword">return</span> obj
<span class="token punctuation">}</span>
</code></pre></div><p>new\u7684\u539F\u7406\u662F\u4F7F\u7528\u6784\u9020\u65B9\u6CD5\u6784\u9020\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61 \u7ED3\u679C\u662F\uFF1A</p><ul><li>\u65B0\u5BF9\u8C61\u7684 <code>__proto__</code> \u6307\u5411\u6784\u9020\u5B83\u7684\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\uFF1A<code>func.prototype</code></li><li>\u6784\u9020\u7684\u8FC7\u7A0B <code>func</code>\u4F5C\u4E3A\u6784\u9020\u51FD\u6570\u88AB\u6267\u884C\uFF0C\u4E0A\u4E0B\u6587\u662F\u65B0\u5BF9\u8C61</li></ul>`,3),e=[p];function c(l,r,u,_,i,k){return a(),s("div",null,e)}var m=n(o,[["render",c]]);export{f as __pageData,m as default};
