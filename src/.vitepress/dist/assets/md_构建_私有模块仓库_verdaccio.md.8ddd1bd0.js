import{_ as n,c as s,o as a,a as t}from"./app.dfde2fab.js";const g='{"title":"\u79C1\u6709npm\u4ED3\u5E93\uFF1Averdaccio","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u901A\u8FC7docker\u90E8\u7F72\u670D\u52A1","slug":"\u901A\u8FC7docker\u90E8\u7F72\u670D\u52A1"}],"relativePath":"md/\u6784\u5EFA/\u79C1\u6709\u6A21\u5757\u4ED3\u5E93/verdaccio.md","lastUpdated":1638340958403}',e={},o=t(`<h1 id="\u79C1\u6709npm\u4ED3\u5E93\uFF1Averdaccio" tabindex="-1">\u79C1\u6709<code>npm</code>\u4ED3\u5E93\uFF1A<a href="https://verdaccio.org/zh-CN/docs/what-is-verdaccio" target="_blank" rel="noopener noreferrer"><code>verdaccio</code></a> <a class="header-anchor" href="#\u79C1\u6709npm\u4ED3\u5E93\uFF1Averdaccio" aria-hidden="true">#</a></h1><p>\u6A21\u5757\u5316\u7BA1\u7406\u7684\u4E00\u79CD\u65B9\u6848\uFF0C\u517C\u5BB9<code>npm</code>\u7684\u79C1\u6709\u6A21\u5757\u5316\u7BA1\u7406\u670D\u52A1</p><h2 id="\u901A\u8FC7docker\u90E8\u7F72\u670D\u52A1" tabindex="-1">\u901A\u8FC7<code>docker</code>\u90E8\u7F72\u670D\u52A1 <a class="header-anchor" href="#\u901A\u8FC7docker\u90E8\u7F72\u670D\u52A1" aria-hidden="true">#</a></h2><ol><li><strong>\u5B89\u88C5<code>Verdaccio</code>\u955C\u50CF</strong></li></ol><div class="language-bash"><pre><code><span class="token function">sudo</span> <span class="token function">docker</span> pull verdaccio/verdaccio:5
</code></pre></div><ol start="2"><li><strong>\u521D\u59CB\u5316\u6587\u4EF6\u76EE\u5F55</strong></li></ol><div class="language-bash"><pre><code><span class="token builtin class-name">cd</span> /usr/local
<span class="token comment"># \u5728\u6B64\u76EE\u5F55\u4E0B\u4FDD\u5B58\u914D\u7F6E</span>
<span class="token function">mkdir</span> verdaccio
<span class="token builtin class-name">cd</span> verdaccio
<span class="token comment"># \u521B\u5EFA\u914D\u7F6E\u5B58\u653E\u76EE\u5F55\u3001\u6570\u636E\u5B58\u653E\u76EE\u5F55\u3001\u63D2\u4EF6\u5B58\u653E\u76EE\u5F55</span>
<span class="token function">mkdir</span> conf <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> storage <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> plugins
<span class="token comment"># \u5728 conf \u76EE\u5F55\u4E2D\u521B\u5EFA\u914D\u7F6E\u6587\u4EF6</span>
<span class="token builtin class-name">cd</span> conf
<span class="token function">vi</span> config.yaml
</code></pre></div><ol start="3"><li><strong>\u5199\u5165\u914D\u7F6E\u5185\u5BB9</strong></li></ol><div class="language-yaml"><pre><code><span class="token comment"># \u8BBE\u7F6E\u4E2D\u6587</span>
<span class="token key atrule">i18n</span><span class="token punctuation">:</span>
    <span class="token key atrule">web</span><span class="token punctuation">:</span> zh<span class="token punctuation">-</span>CN
<span class="token comment"># \u9ED8\u8BA4\u5B58\u50A8\u5728\u672C\u5730\u6587\u4EF6\u5939\u5185</span>
<span class="token key atrule">storage</span><span class="token punctuation">:</span> ./storage
<span class="token comment"># \u9ED8\u8BA4\u7684\u6743\u9650\u8BA4\u8BC1\u670D\u52A1</span>
<span class="token key atrule">auth</span><span class="token punctuation">:</span>
    <span class="token key atrule">htpasswd</span><span class="token punctuation">:</span>
        <span class="token key atrule">file</span><span class="token punctuation">:</span> ./htpasswd
    <span class="token comment"># \u5141\u8BB8\u521B\u5EFA\u7528\u6237\u7684\u6570\u91CF\uFF0C\u8BBE\u7F6E\u4E3A-1\u65F6\u7981\u6B62\u6CE8\u518C</span>
    <span class="token key atrule">max_users</span><span class="token punctuation">:</span> <span class="token number">1000</span>
<span class="token comment"># \u4E0A\u884C\u94FE\u8DEF\uFF0C\u5411\u4E0A\u67E5\u627E\u6A21\u5757\u8FD4\u56DE</span>
<span class="token key atrule">uplinks</span><span class="token punctuation">:</span>
    <span class="token key atrule">cnpmjs</span><span class="token punctuation">:</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//registry.npm.taobao.org/
    <span class="token key atrule">npmjs</span><span class="token punctuation">:</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//registry.npmjs.org/
<span class="token comment"># \u5305\u7684\u8BBF\u95EE</span>
<span class="token key atrule">packages</span><span class="token punctuation">:</span>
    <span class="token key atrule">&quot;@*/*&quot;</span><span class="token punctuation">:</span>
        <span class="token comment"># \u5B9A\u4E49\u5141\u8BB8\u8BBF\u95EE\u5305\u7684\u5206\u7EC4 \u6216\u8005 \u7528\u6237\uFF08\u7528\u6237\u540D\u79F0\uFF09</span>
        <span class="token key atrule">access</span><span class="token punctuation">:</span> $all
        <span class="token comment"># \u5B9A\u4E49\u5141\u8BB8\u53D1\u5E03\u5305\u7684\u5206\u7EC4 \u6216\u8005 \u7528\u6237\uFF08\u7528\u6237\u540D\u79F0\uFF09</span>
        <span class="token key atrule">publish</span><span class="token punctuation">:</span> $authenticated
        <span class="token comment"># \u67E5\u627E\u7684\u4E0A\u7EBF\u94FE\u8DEF</span>
        <span class="token key atrule">proxy</span><span class="token punctuation">:</span> cnpmjs npmjs
    <span class="token key atrule">&quot;**&quot;</span><span class="token punctuation">:</span>
        <span class="token key atrule">access</span><span class="token punctuation">:</span> $all
        <span class="token key atrule">proxy</span><span class="token punctuation">:</span> cnpmjs npmjs
<span class="token comment"># \u65E5\u5FD7\u8BB0\u5F55</span>
<span class="token key atrule">logs</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> stdout<span class="token punctuation">,</span> <span class="token key atrule">format</span><span class="token punctuation">:</span> pretty<span class="token punctuation">,</span> <span class="token key atrule">level</span><span class="token punctuation">:</span> http <span class="token punctuation">}</span>
</code></pre></div><p>\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u540E\u9700\u8981\u91CD\u542F\u5BB9\u5668</p><p>\u76F8\u5173\u95EE\u9898\uFF1A</p><ul><li>\u590D\u5236\u5230\u6587\u4EF6\u65F6\u51FA\u73B0\u683C\u5F0F\u9519\u8BEF\uFF0C\u53EF\u80FD\u65F6\u6CE8\u91CA\u5BFC\u81F4\u7684\uFF0C\u5C06\u6CE8\u91CA\u5220\u9664\u91CD\u8BD5</li><li><code>.yaml</code>\u6587\u4EF6\u4E2D\u4E0D\u5141\u8BB8\u4F7F\u7528tab\uFF0C\u8BF7\u4F7F\u7528\u7A7A\u683C</li></ul><ol start="4"><li><strong>\u542F\u52A8 <code>Verdaccio</code> \u5BB9\u5668</strong></li></ol><div class="language-bash"><pre><code><span class="token assign-left variable">V_PATH</span><span class="token operator">=</span>/usr/local/verdaccio<span class="token punctuation">;</span> <span class="token function">sudo</span> <span class="token function">docker</span> run -d -it --restart<span class="token operator">=</span>always --name verdaccio <span class="token punctuation">\\</span>
  -p <span class="token number">4873</span>:4873 <span class="token punctuation">\\</span>
  -v <span class="token variable">$V_PATH</span>/conf:/verdaccio/conf <span class="token punctuation">\\</span>
  -v <span class="token variable">$V_PATH</span>/storage:/verdaccio/storage <span class="token punctuation">\\</span>
  -v <span class="token variable">$V_PATH</span>/plugins:/verdaccio/plugins <span class="token punctuation">\\</span>
  verdaccio/verdaccio:5
</code></pre></div><p>\u542F\u52A8\u5B8C\u6210\u540E\u53EF\u8BBF\u95EE\uFF1A\u670D\u52A1\u5668\u5730\u5740<code>:4873</code> \u4E0D\u80FD\u8BBF\u95EE\u65F6\u4F7F\u7528<code>docker logs &lt;container id&gt;</code>\u67E5\u770B\u9519\u8BEF\u65E5\u5FD7</p><ol start="5"><li><strong>\u6CE8\u518C\u3001\u767B\u5F55\u3001\u53D1\u5E03</strong></li></ol><div class="language-bash"><pre><code><span class="token function">npm</span> adduser --registry http://<span class="token punctuation">{</span>\u90E8\u7F72\u7684 ip<span class="token punctuation">}</span>:4873
<span class="token function">npm</span> login --registry http://<span class="token punctuation">{</span>\u90E8\u7F72\u7684 ip<span class="token punctuation">}</span>:4873
<span class="token function">npm</span> publish --registry http://<span class="token punctuation">{</span>\u90E8\u7F72\u7684 ip<span class="token punctuation">}</span>:4873
</code></pre></div><p>\u76F8\u5173\u95EE\u9898\uFF1A</p><ul><li><code>adduser</code>\u9519\u8BEF\uFF1A<code>unexpected error: EACCES: permission denied, open &#39;/verdaccio/conf/htpasswd&#39;</code> \u914D\u7F6E\u7684\u76EE\u5F55\u65E0\u6743\u9650\uFF0C\u5728\u670D\u52A1\u5668\u8F93\u5165\u6B64\u547D\u4EE4\uFF1A<code>sudo chown -R 10001:65533 /usr/local/verdaccio</code></li><li><code>publish</code>\u9519\u8BEF\uFF1A<code>user liangjun is not allowed to publish package add</code> \u672A\u914D\u7F6E<code>packages</code>\u6743\u9650\uFF0C\u914D\u7F6E<code>publish: $authenticated</code>\u767B\u5F55\u7528\u6237\u53EF\u53D1\u5E03\u6216\u8005\u6307\u5B9A\u7528\u6237\u53D1\u5E03</li></ul><ol start="6"><li><strong>\u4F7F\u7528\u79C1\u6709\u4ED3\u5E93\u7684\u65B9\u5F0F</strong></li></ol><ul><li>\u9700\u8981\u65F6\u4F7F\u7528\uFF1A<code>npm install --registry http://localhost:4873</code></li><li>\u9ED8\u8BA4\u4F7F\u7528\uFF1A <ul><li><code>npm set registry http://localhost:4873/</code></li><li>\u5728\u7528\u6237\u76EE\u5F55\u4E0B\u7684<code>.npmrc</code>\u4E2D\u6DFB\u52A0\u4E00\u884C\uFF1A<code>registry=http://localhost:4873/</code></li></ul></li></ul>`,21),p=[o];function c(l,i,r,u,k,d){return a(),s("div",null,p)}var h=n(e,[["render",c]]);export{g as __pageData,h as default};
