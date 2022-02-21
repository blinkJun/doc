import{_ as n,c as a,o as e,a as s}from"./app.dfde2fab.js";const h='{"title":"git-cz","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u76F4\u63A5\u4F7F\u7528","slug":"\u76F4\u63A5\u4F7F\u7528"},{"level":2,"title":"Commitizen \u9002\u914D\u5668","slug":"commitizen-\u9002\u914D\u5668"}],"relativePath":"md/\u6784\u5EFA/\u63D0\u4EA4\u89C4\u8303/commitizen.md","lastUpdated":1638340958403}',o={},t=s(`<h1 id="git-cz" tabindex="-1"><a href="https://www.npmjs.com/package/git-cz" target="_blank" rel="noopener noreferrer"><code>git-cz</code></a> <a class="header-anchor" href="#git-cz" aria-hidden="true">#</a></h1><p>\u6309\u6B65\u9AA4\u5B8C\u6210\u4E00\u6B21\u89C4\u8303\u7684\u4EE3\u7801\u63D0\u4EA4</p><h2 id="\u76F4\u63A5\u4F7F\u7528" tabindex="-1">\u76F4\u63A5\u4F7F\u7528 <a class="header-anchor" href="#\u76F4\u63A5\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code>npx git-cz
</code></pre></div><p>\u6216\u8005\u5728<code>package.json</code>\u4E2D\u914D\u7F6E<code>scripts</code>\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;commit&quot;</span><span class="token operator">:</span><span class="token string">&quot;npx git-cz&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F7F\u7528\uFF1A<code>npm run commit</code></p><ul><li>type\uFF0C\u63D0\u4EA4\u7C7B\u578B\uFF1A <ul><li>feat\uFF1A \u65B0\u589E\u4E00\u4E2A\u529F\u80FD</li><li>fix: \u4FEE\u590Dbug</li><li>docs: \u4EC5\u4EC5\u4FEE\u6539\u4E86\u6587\u6863\uFF0C\u6BD4\u5982README, CHANGELOG, CONTRIBUTE\u7B49\u7B49</li><li>style: \u4EC5\u4EC5\u4FEE\u6539\u4E86\u7A7A\u683C\u3001\u683C\u5F0F\u7F29\u8FDB\u7B49\u7B49\uFF0C\u4E0D\u6539\u53D8\u4EE3\u7801\u903B\u8F91</li><li>refactor: \u4EE3\u7801\u91CD\u6784\uFF0C\u6CA1\u6709\u52A0\u65B0\u529F\u80FD\u6216\u8005\u4FEE\u590Dbug</li><li>perf: \u4F18\u5316\u76F8\u5173\uFF0C\u6BD4\u5982\u63D0\u5347\u6027\u80FD\u3001\u4F53\u9A8C</li><li>test: \u6D4B\u8BD5\u7528\u4F8B\uFF0C\u5305\u62EC\u589E\u52A0\u7F3A\u5931\u7528\u4F8B\u6216\u8005\u4FEE\u6B63\u6D4B\u8BD5\u7528\u4F8B</li></ul></li><li>scope\uFF0C\u6240\u5C5E\u6A21\u5757\uFF0C\u53EF\u5FFD\u7565</li><li>subject\uFF0C\u7B80\u77ED\u63CF\u8FF0</li><li>body\uFF0C\u8BE6\u7EC6\u63CF\u8FF0</li></ul><h2 id="commitizen-\u9002\u914D\u5668" tabindex="-1"><code>Commitizen</code> \u9002\u914D\u5668 <a class="header-anchor" href="#commitizen-\u9002\u914D\u5668" aria-hidden="true">#</a></h2><p>\u5982\u679C\u9700\u8981\u5728\u9879\u76EE\u4E2D\u4F7F\u7528<code>commitizen</code>\u751F\u6210\u7B26\u5408<code>AngularJS</code>\u89C4\u8303\u7684\u63D0\u4EA4\u8BF4\u660E\uFF0C\u521D\u59CB\u5316<code>cz-conventional-changelog</code>\u9002\u914D\u5668\uFF1A</p><div class="language-bash"><pre><code><span class="token function">npm</span> i cz-conventional-changelog -D
</code></pre></div><p>\u5728<code>package.json</code>\u4E2D\u914D\u7F6E</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./node_modules/cz-conventional-changelog&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,13),c=[t];function p(i,l,r,d,u,g){return e(),a("div",null,c)}var k=n(o,[["render",p]]);export{h as __pageData,k as default};
