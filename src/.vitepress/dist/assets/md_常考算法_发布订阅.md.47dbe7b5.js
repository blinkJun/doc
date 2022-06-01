import{_ as n,c as s,o as a,a as t}from"./app.ca5faf2f.js";const f='{"title":"\u53D1\u5E03\u8BA2\u9605\u8BBE\u8BA1\u6A21\u5F0F","description":"","frontmatter":{},"headers":[],"relativePath":"md/\u5E38\u8003\u7B97\u6CD5/\u53D1\u5E03\u8BA2\u9605.md","lastUpdated":1648885436705}',p={},o=t(`<h1 id="\u53D1\u5E03\u8BA2\u9605\u8BBE\u8BA1\u6A21\u5F0F" tabindex="-1">\u53D1\u5E03\u8BA2\u9605\u8BBE\u8BA1\u6A21\u5F0F <a class="header-anchor" href="#\u53D1\u5E03\u8BA2\u9605\u8BBE\u8BA1\u6A21\u5F0F" aria-hidden="true">#</a></h1><div class="language-javascript"><pre><code>
<span class="token keyword">class</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>listeners <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u76D1\u542C</span>
  <span class="token function">addListener</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u6CA1\u6709\u5C31\u6DFB\u52A0\u4E00\u4E2A\u7A7A\u6570\u7EC4</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> callbackList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span>
    callbackList<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u89E6\u53D1</span>
  <span class="token function">emit</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> hasListener <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>hasListener<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> callbackList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>callbackList<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    callbackList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token operator">=&gt;</span><span class="token function">callback</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u79FB\u9664</span>
  <span class="token function">removeListener</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> hasListener <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>hasListener<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> callbackList <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>listeners<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>callbackList<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>index<span class="token operator">&lt;</span>callbackList<span class="token punctuation">.</span>length<span class="token punctuation">;</span>index<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> callbackItem <span class="token operator">=</span> callbackList<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>callbackItem <span class="token operator">===</span> callback<span class="token punctuation">)</span><span class="token punctuation">{</span>
        callbackList<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">// exmple</span>
<span class="token keyword">const</span> bus <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

bus<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
bus<span class="token punctuation">.</span><span class="token function">addListener</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span> <span class="token function">two</span><span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    bus<span class="token punctuation">.</span><span class="token function">removeListener</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">,</span>two<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    bus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">,</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre></div>`,2),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var w=n(p,[["render",e]]);export{f as __pageData,w as default};
