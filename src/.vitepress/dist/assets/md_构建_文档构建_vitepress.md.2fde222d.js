import{_ as n,c as s,o as a,a as t}from"./app.f8375116.js";const m='{"title":"\u4F7F\u7528 vitepress \u521B\u5EFA\u7EC4\u4EF6\u5E93\u6587\u6863","description":"","frontmatter":{},"headers":[{"level":2,"title":"tips","slug":"tips"},{"level":2,"title":"\u8FDB\u884C\u4E00\u4E9B\u57FA\u7840\u914D\u7F6E","slug":"\u8FDB\u884C\u4E00\u4E9B\u57FA\u7840\u914D\u7F6E"}],"relativePath":"md/\u6784\u5EFA/\u6587\u6863\u6784\u5EFA/vitepress.md","lastUpdated":1638340958403}',p={},e=t(`<h1 id="\u4F7F\u7528-vitepress-\u521B\u5EFA\u7EC4\u4EF6\u5E93\u6587\u6863" tabindex="-1">\u4F7F\u7528 <a href="https://vitejs.cn/vitepress/" target="_blank" rel="noopener noreferrer"><code>vitepress</code></a> \u521B\u5EFA\u7EC4\u4EF6\u5E93\u6587\u6863 <a class="header-anchor" href="#\u4F7F\u7528-vitepress-\u521B\u5EFA\u7EC4\u4EF6\u5E93\u6587\u6863" aria-hidden="true">#</a></h1><p>\u5148\u6839\u636E\u6587\u6863\u5B89\u88C5\u73AF\u5883\uFF0C\u542F\u52A8\u9ED8\u8BA4\u7684\u6587\u6863\u670D\u52A1</p><h2 id="tips" tabindex="-1">tips <a class="header-anchor" href="#tips" aria-hidden="true">#</a></h2><ul><li><code>0.20.1</code> \u7248\u672C\u4E0D\u652F\u6301\u4E2D\u6587\u6587\u4EF6\u5939\u89E3\u6790\uFF0C\u5F00\u53D1\u670D\u52A1\u53EF\u6253\u5F00\uFF0C\u751F\u4EA7\u6253\u5305\u4F1A\u62A5\u9519</li></ul><h2 id="\u8FDB\u884C\u4E00\u4E9B\u57FA\u7840\u914D\u7F6E" tabindex="-1">\u8FDB\u884C\u4E00\u4E9B\u57FA\u7840\u914D\u7F6E <a class="header-anchor" href="#\u8FDB\u884C\u4E00\u4E9B\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a></h2><ol><li>\u914D\u7F6E\u4E3B\u9875\uFF1A<code>index.md</code></li></ol><div class="language-md"><pre><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /images/logo.png
<span class="token key atrule">heroAlt</span><span class="token punctuation">:</span> Blink Elements
<span class="token key atrule">heroText</span><span class="token punctuation">:</span> Blink Elements
<span class="token key atrule">tagline</span><span class="token punctuation">:</span> UI\u7EC4\u4EF6\u5E93
<span class="token key atrule">actionText</span><span class="token punctuation">:</span> Get Started
<span class="token key atrule">actionLink</span><span class="token punctuation">:</span> /md/guide/
<span class="token key atrule">features</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Simplicity First
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Minimal setup with markdown<span class="token punctuation">-</span>centered project structure helps you focus on writing.
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Vue<span class="token punctuation">-</span>Powered
    <span class="token key atrule">details</span><span class="token punctuation">:</span> Enjoy the dev experience of Vue + webpack<span class="token punctuation">,</span> use Vue components in markdown<span class="token punctuation">,</span> and develop custom themes with Vue.
  <span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Performant
    <span class="token key atrule">details</span><span class="token punctuation">:</span> VitePress generates pre<span class="token punctuation">-</span>rendered static HTML for each page<span class="token punctuation">,</span> and runs as an SPA once a page is loaded.
<span class="token key atrule">footer</span><span class="token punctuation">:</span> MIT Licensed <span class="token punctuation">|</span> Copyright \xA9 2019<span class="token punctuation">-</span>present LJ</span>
<span class="token punctuation">---</span></span>
</code></pre></div><ol start="2"><li>\u5728\u6587\u6863\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA<code>.vitepress</code>\u6587\u4EF6\u5939\uFF0C\u5BF9\u4E3B\u9898\u8FDB\u884C\u57FA\u672C\u914D\u7F6E</li></ol><div class="language-typescript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>mdPlugin<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./config/plugins&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>HeadConfig<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress&#39;</span>


<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Blink-Elements&#39;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&#39;Just playing around.&#39;</span><span class="token punctuation">,</span>
  markdown<span class="token operator">:</span><span class="token punctuation">{</span>
    config<span class="token operator">:</span>mdPlugin
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  head<span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;link&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        rel<span class="token operator">:</span> <span class="token string">&#39;icon&#39;</span><span class="token punctuation">,</span>
        href<span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span> <span class="token keyword">as</span> HeadConfig<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    repo<span class="token operator">:</span> <span class="token string">&#39;blink-elements&#39;</span><span class="token punctuation">,</span>
    logo<span class="token operator">:</span> <span class="token string">&#39;/images/logo.png&#39;</span><span class="token punctuation">,</span>
    nav<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;\u6307\u5357&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/md/guide/&#39;</span><span class="token punctuation">,</span>activeMatch<span class="token operator">:</span> <span class="token string">&#39;^/guide/&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> text<span class="token operator">:</span> <span class="token string">&#39;\u7EC4\u4EF6&#39;</span><span class="token punctuation">,</span> link<span class="token operator">:</span> <span class="token string">&#39;/md/components/&#39;</span><span class="token punctuation">,</span>activeMatch<span class="token operator">:</span> <span class="token string">&#39;^/components/&#39;</span> <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    sidebar<span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/md/guide/&#39;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          text<span class="token operator">:</span> <span class="token string">&#39;\u6307\u5357&#39;</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> 
              text<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> 
              link<span class="token operator">:</span> <span class="token string">&#39;/md/guide/&#39;</span> 
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> 
              text<span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span> 
              link<span class="token operator">:</span> <span class="token string">&#39;/md/guide/button&#39;</span> 
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token string-property property">&#39;/md/components/&#39;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          text<span class="token operator">:</span> <span class="token string">&#39;\u7EC4\u4EF6&#39;</span><span class="token punctuation">,</span>
          children<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> 
              text<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> 
              link<span class="token operator">:</span> <span class="token string">&#39;/md/components/&#39;</span> 
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> 
              text<span class="token operator">:</span> <span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span> 
              link<span class="token operator">:</span> <span class="token string">&#39;/md/components/button&#39;</span> 
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u66F4\u591A\u914D\u7F6E\u67E5\u9605<a href="https://vitejs.cn/vitepress/" target="_blank" rel="noopener noreferrer"><code>vitepress</code></a></p>`,10),o=[e];function c(l,u,i,r,k,d){return a(),s("div",null,o)}var h=n(p,[["render",c]]);export{m as __pageData,h as default};
