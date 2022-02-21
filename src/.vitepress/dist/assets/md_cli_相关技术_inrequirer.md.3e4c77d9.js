import{_ as n,c as s,o as a,a as p}from"./app.dfde2fab.js";const h='{"title":"inquirer \u7684\u4F7F\u7528\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"inquirer \u7684\u4F7F\u7528\u65B9\u6CD5","slug":"inquirer-\u7684\u4F7F\u7528\u65B9\u6CD5"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"}],"relativePath":"md/cli/\u76F8\u5173\u6280\u672F/inrequirer.md","lastUpdated":1638340958403}',t={},e=p(`<h2 id="inquirer-\u7684\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a href="https://www.npmjs.com/package/inquirer" target="_blank" rel="noopener noreferrer">inquirer</a> \u7684\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#inquirer-\u7684\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u547D\u4EE4\u884C\u4EA4\u4E92</p><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-BASH"><pre><code><span class="token function">npm</span> i inquirer --save
</code></pre></div><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">const</span> inquirer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;inquirer&#39;</span><span class="token punctuation">)</span>
inquirer
  <span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// \u4EA4\u4E92\u7C7B\u578B</span>
      <span class="token comment">// input\uFF1A\u8F93\u5165\u6846</span>
      <span class="token comment">// confirm\uFF1A\u786E\u8BA4\u6846</span>
      <span class="token comment">// list\uFF1A\u9009\u62E9 choices \u5176\u4E2D\u4E00\u9879</span>
      <span class="token comment">// rawlist: \u4E0Elist\u76F8\u4F3C\uFF0C\u5C55\u793A\u6837\u5F0F\u4E0D\u540C</span>
      <span class="token comment">// expand\uFF1A\u63D0\u4F9B\u7B80\u5199\uFF0C\u5728 choices \u4E2D\u914D\u7F6E</span>
      <span class="token comment">// checkbox\uFF1A\u591A\u9009 choices</span>
      <span class="token comment">// password\uFF1A\u8F93\u5165\u5BC6\u7801</span>
      <span class="token comment">// editor\uFF1A\u521B\u5EFA\u7F13\u5B58\u6587\u4EF6\u63D0\u4F9B\u6587\u672C\u8F93\u5165\uFF0C\u83B7\u53D6\u5230\u6700\u7EC8\u8F93\u5165\u7ED3\u679C</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5B57\u6BB5\u540D\u79F0</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;userName&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u4EA4\u4E92\u95EE\u9898\uFF0C\u5BF9\u7528\u6237\u7684\u63D0\u793A</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">&#39;input your name&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u9ED8\u8BA4\u503C</span>
      <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&#39;no name&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// \u9A8C\u8BC1</span>
      <span class="token function-variable function">validate</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token operator">===</span><span class="token string">&#39;have name&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token comment">// \u5BF9\u7ED3\u679C\u5904\u7406\uFF0C\u5728validate\u4E4B\u524D</span>
      <span class="token function-variable function">filter</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> value<span class="token operator">+</span><span class="token string">&#39;!&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">choices</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token literal-property property">value</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7B2C\u4E8C\u4E2A\u4EA4\u4E92</span>
    <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;number&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">&#39;input your age&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">answers</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u83B7\u53D6\u5230\u7528\u6237\u7684\u8F93\u5165</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>answers<span class="token punctuation">.</span>userName<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>answers<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>isTtyError<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// Prompt couldn&#39;t be rendered in the current environment</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// Something else went wrong</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,6),o=[e];function c(r,l,u,i,k,m){return a(),s("div",null,o)}var y=n(t,[["render",c]]);export{h as __pageData,y as default};
