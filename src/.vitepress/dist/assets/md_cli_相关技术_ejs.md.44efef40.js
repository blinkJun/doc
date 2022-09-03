import{_ as n,c as s,o as a,a as t}from"./app.952c636c.js";const h='{"title":"ejs \u7684\u4F7F\u7528\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"ejs \u7684\u4F7F\u7528\u65B9\u6CD5","slug":"ejs-\u7684\u4F7F\u7528\u65B9\u6CD5"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"},{"level":3,"title":"\u6807\u7B7E\u542B\u4E49","slug":"\u6807\u7B7E\u542B\u4E49"},{"level":3,"title":"\u5305\u542B\u529F\u80FD","slug":"\u5305\u542B\u529F\u80FD"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u5206\u9694\u7B26","slug":"\u81EA\u5B9A\u4E49\u5206\u9694\u7B26"},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6587\u4EF6\u52A0\u8F7D\u5668","slug":"\u81EA\u5B9A\u4E49\u6587\u4EF6\u52A0\u8F7D\u5668"}],"relativePath":"md/cli/\u76F8\u5173\u6280\u672F/ejs.md","lastUpdated":1648885436700}',e={},p=t(`<h2 id="ejs-\u7684\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a href="https://www.npmjs.com/package/ejs" target="_blank" rel="noopener noreferrer">ejs</a> \u7684\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#ejs-\u7684\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u6A21\u677F\u6E32\u67D3</p><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-BASH"><pre><code><span class="token function">npm</span> i ejs --save
</code></pre></div><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">const</span> ejs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u6A21\u677F\u5B57\u7B26\u4E32</span>
<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token string">&#39;&lt;h1&gt; &lt;%= user.name %&gt; &lt;/h1&gt;&#39;</span>
<span class="token comment">// \u76F8\u5173\u914D\u7F6E</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// \u4F20\u5165\u6570\u636E</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">user</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;blink&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u591A\u6B21\u4F7F\u7528</span>
<span class="token comment">// \u751F\u6210\u6A21\u677F\uFF0C\u4F20\u5165\u6570\u636E\u751F\u6210\u5185\u5BB9</span>
<span class="token keyword">let</span> template <span class="token operator">=</span> ejs<span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>html<span class="token punctuation">,</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u83B7\u5F97\u6570\u636E\u586B\u5145\u540E\u7684\u5185\u5BB9</span>
<span class="token keyword">const</span> compilerTemplate <span class="token operator">=</span> <span class="token function">template</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// \u4E00\u6B21\u6027\u4F7F\u7528</span>
<span class="token keyword">const</span> renderTemplate <span class="token operator">=</span> ejs<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>html<span class="token punctuation">,</span>data<span class="token punctuation">,</span>options<span class="token punctuation">)</span>

<span class="token comment">// \u5BF9\u6587\u4EF6\u5904\u7406 </span>
<span class="token comment">// \u8FD4\u56DEpromise</span>
<span class="token keyword">const</span> renderedFile <span class="token operator">=</span> ejs<span class="token punctuation">.</span><span class="token function">renderFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;template.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>data<span class="token punctuation">,</span>options<span class="token punctuation">)</span>
<span class="token comment">// \u56DE\u8C03\u51FD\u6570</span>
ejs<span class="token punctuation">.</span><span class="token function">renderFile</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;template.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>data<span class="token punctuation">,</span>options<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>file</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u6807\u7B7E\u542B\u4E49" tabindex="-1">\u6807\u7B7E\u542B\u4E49 <a class="header-anchor" href="#\u6807\u7B7E\u542B\u4E49" aria-hidden="true">#</a></h3><ul><li><code>&lt;% &#39;\u811A\u672C&#39;</code>\uFF1A\u8F93\u5165\u811A\u672C\u8BED\u53E5</li><li><code>&lt;%_ </code>\uFF1A\u5220\u9664\u6B64\u884C\u7F29\u8FDB\u7A7A\u683C</li><li><code>&lt;%= </code>\uFF1A\u8F93\u51FA\u6570\u636E\u5230\u6A21\u677F \u8F6C\u4E49</li><li><code>&lt;%- </code>\uFF1A\u8F93\u51FA\u6570\u636E\u5230\u6A21\u677F \u4E0D\u8F6C\u4E49</li><li><code>&lt;%# </code>\uFF1A\u6CE8\u91CA\uFF0C\u4E0D\u505A\u5904\u7406</li><li><code>&lt;%% </code>\uFF1A\u8F93\u51FA &#39;&lt;%&#39;</li><li><code>%&gt;</code>\uFF1A\u4E00\u822C\u7ED3\u675F\u6807\u7B7E</li><li><code>-%&gt;</code>\uFF1A\u5220\u9664\u7D27\u968F\u5176\u540E\u7684\u6362\u884C\u7B26</li><li><code>_%&gt;</code>\uFF1A\u5220\u9664\u7D27\u968F\u5176\u540E\u7684\u7A7A\u683C\u7B26</li></ul><div class="language-html"><pre><code><span class="token comment">&lt;!-- js\u811A\u672C --&gt;</span>
<span class="token comment">&lt;!-- \u5224\u65AD\u8BED\u53E5 --&gt;</span>
&lt;% if(user){ %&gt;
  <span class="token comment">&lt;!-- \u5FAA\u73AF --&gt;</span>
  &lt;% for(let i = 0; i&lt;10; i++){ %&gt;
    <span class="token comment">&lt;!-- \u5220\u9664\u7F29\u8FDB --&gt;</span>
    &lt;%_ %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>&lt;%= user.name %&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  &lt;% } %&gt;
&lt;% } %&gt;
</code></pre></div><h3 id="\u5305\u542B\u529F\u80FD" tabindex="-1">\u5305\u542B\u529F\u80FD <a class="header-anchor" href="#\u5305\u542B\u529F\u80FD" aria-hidden="true">#</a></h3><p>\u4F20\u5165\u53E6\u4E00\u4E2A\u6A21\u677F</p><div class="language-html"><pre><code>&lt;%- include(&#39;./header.html&#39;,{user}) -%&gt;
</code></pre></div><h3 id="\u81EA\u5B9A\u4E49\u5206\u9694\u7B26" tabindex="-1">\u81EA\u5B9A\u4E49\u5206\u9694\u7B26 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5206\u9694\u7B26" aria-hidden="true">#</a></h3><p>\u4FEE\u6539\u5206\u9694\u7B26</p><div class="language-javascript"><pre><code>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5C06 % \u4FEE\u6539\u4E3A ?</span>
  <span class="token literal-property property">delimiter</span><span class="token operator">:</span><span class="token string">&#39;?&#39;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="\u81EA\u5B9A\u4E49\u6587\u4EF6\u52A0\u8F7D\u5668" tabindex="-1">\u81EA\u5B9A\u4E49\u6587\u4EF6\u52A0\u8F7D\u5668 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u6587\u4EF6\u52A0\u8F7D\u5668" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code>ejs<span class="token punctuation">.</span><span class="token function-variable function">fileLoader</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">filePath</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// \u53EF\u4EE5\u8FD4\u56DE\u65B0\u7684\u5185\u5BB9\u4F5C\u4E3A\u65B0\u6A21\u677F</span>
<span class="token punctuation">}</span>
</code></pre></div>`,17),o=[p];function c(l,i,r,u,k,d){return a(),s("div",null,o)}var g=n(e,[["render",c]]);export{h as __pageData,g as default};
