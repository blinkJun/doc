import{_ as n,c as a,o as s,a as t}from"./app.952c636c.js";const h='{"title":"readline","description":"","frontmatter":{},"headers":[{"level":2,"title":"readline","slug":"readline"},{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"}],"relativePath":"md/cli/\u76F8\u5173\u6280\u672F/readline.md","lastUpdated":1648885436700}',e={},p=t(`<h2 id="readline" tabindex="-1"><a href="http://nodejs.cn/api/readline.html#readline_readline" target="_blank" rel="noopener noreferrer"><code>readline</code></a> <a class="header-anchor" href="#readline" aria-hidden="true">#</a></h2><p>\u9010\u884C\u8BFB\u53D6</p><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">const</span> readline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;readline&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u521B\u5EFA\u5B9E\u4F8B</span>
<span class="token keyword">const</span> rl <span class="token operator">=</span> readline<span class="token punctuation">.</span><span class="token function">createInterface</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u63A5\u5165\u547D\u4EE4\u884C\u8F93\u5165\u8F93\u51FA</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span>process<span class="token punctuation">.</span>stdin<span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span>process<span class="token punctuation">.</span>stdout
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u53D1\u8D77\u4EA4\u4E92</span>
rl<span class="token punctuation">.</span><span class="token function">question</span><span class="token punctuation">(</span><span class="token string">&#39;your name&#39;</span><span class="token punctuation">,</span><span class="token parameter">answer</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>answer<span class="token punctuation">)</span>
  <span class="token comment">// \u7ED3\u675F\u4EA4\u4E92</span>
  rl<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div>`,4),o=[p];function c(l,r,i,u,d,k){return s(),a("div",null,o)}var m=n(e,[["render",c]]);export{h as __pageData,m as default};
