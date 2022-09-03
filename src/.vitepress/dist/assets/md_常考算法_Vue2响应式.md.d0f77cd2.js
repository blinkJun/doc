import{_ as n,c as a,o as s,a as t}from"./app.952c636c.js";const f='{"title":"Vue2\u54CD\u5E94\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u539F\u7406","slug":"\u539F\u7406"},{"level":2,"title":"\u7B80\u6613\u5B9E\u73B0","slug":"\u7B80\u6613\u5B9E\u73B0"}],"relativePath":"md/\u5E38\u8003\u7B97\u6CD5/Vue2\u54CD\u5E94\u5F0F.md","lastUpdated":1648885436705}',p={},o=t(`<h1 id="vue2\u54CD\u5E94\u5F0F" tabindex="-1">Vue2\u54CD\u5E94\u5F0F <a class="header-anchor" href="#vue2\u54CD\u5E94\u5F0F" aria-hidden="true">#</a></h1><h2 id="\u539F\u7406" tabindex="-1">\u539F\u7406 <a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a></h2><ol><li>\u4F7F\u7528<code>Dep</code>\u6784\u9020\u51FD\u6570\u6536\u96C6\u4F9D\u8D56\u548C\u89E6\u53D1\u4F9D\u8D56</li><li>\u4F7F\u7528<code>observe</code>\u51FD\u6570\u5BF9\u5BF9\u8C61\u9012\u5F52\u52AB\u6301<code>getter</code>\u3001<code>setter</code>\u65B9\u6CD5\uFF0C\u83B7\u53D6\u5C5E\u6027\u65F6<strong>\u6536\u96C6\u4F9D\u8D56</strong>\uFF0C\u66F4\u65B0\u5C5E\u6027\u65F6<strong>\u89E6\u53D1\u4F9D\u8D56</strong></li><li>\u5B9E\u73B0\u4E00\u4E2A<code>autorun</code>\u51FD\u6570\uFF0C\u63A5\u6536\u4E00\u4E2A\u54CD\u5E94\u5F0F\u56DE\u8C03\u65B9\u6CD5<code>update</code></li><li>\u5728<code>autorun</code>\u5185\u90E8\u5B9E\u73B0\u4E00\u4E2A<code>wrapperUpdate</code>\u51FD\u6570\uFF0C\u5C06<code>update</code>\u5305\u88F9\u8D77\u6765\uFF1A\u5728<code>update</code>\u8C03\u7528\u524D\u5C06<code>wrapperUpdate</code>\u4F5C\u4E3A\u4F9D\u8D56\u65B9\u6CD5\u5B58\u5165<code>Dep.activeUpdate</code>\u9759\u6001\u5C5E\u6027\uFF0C\u8C03\u7528<code>update</code>\u65F6\uFF0C\u901A\u8FC7\u5BF9\u8C61\u7684<code>getter</code>\u5C5E\u6027\u7684\u62E6\u622A\uFF0C<code>Dep.depend</code>\u65B9\u6CD5\u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u5F53\u524D\u7684\u54CD\u5E94\u5F0F\u51FD\u6570<code>wrapperUpdate</code>\u5E76\u5C06\u5B83\u6536\u96C6\u8D77\u6765\u3002\u8C03\u7528<code>update</code>\u4E4B\u540E\u5C06<code>Dep.activeUpdate</code>\u9759\u6001\u5C5E\u6027\u5220\u9664\u3002</li><li>\u5F53\u5BF9\u5BF9\u8C61\u4FEE\u6539\u65F6\uFF0C<code>setter</code>\u65B9\u6CD5\u5C31\u4F1A\u8C03\u7528<code>Dep.notify</code>\u89E6\u53D1\u6536\u96C6\u5230\u7684<code>wrapperUpdate</code>\uFF0C\u8C03\u7528<code>wrapperUpdate</code>\u89E6\u53D1\u4E86<code>update</code>\u54CD\u5E94\u5F0F\u56DE\u8C03\u65B9\u6CD5\u3002</li></ol><h2 id="\u7B80\u6613\u5B9E\u73B0" tabindex="-1">\u7B80\u6613\u5B9E\u73B0 <a class="header-anchor" href="#\u7B80\u6613\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token comment">// \u5B9A\u4E49\u4F9D\u8D56\u6536\u96C6\u51FD\u6570</span>
<span class="token keyword">class</span> <span class="token class-name">Dep</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6536\u96C6\u5B9E\u65F6\u5B58\u653E\u7684\u54CD\u5E94\u5F0F\u56DE\u8C03</span>
  <span class="token keyword">static</span> activeUpdate
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6536\u96C6</span>
  <span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>activeUpdate<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>activeUpdate<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// \u89E6\u53D1</span>
  <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">update</span><span class="token operator">=&gt;</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u9012\u5F52\u52AB\u6301</span>
<span class="token keyword">const</span> <span class="token function-variable function">observe</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">origin</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>origin <span class="token operator">||</span> <span class="token keyword">typeof</span> origin <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> 
  <span class="token punctuation">}</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5FC5\u987B\u7F13\u5B58\uFF0C\u4E0D\u7F13\u5B58\u518D\u6B21\u8C03\u7528 origin[key] \u4F1A\u89E6\u53D1getter\u65B9\u6CD5\uFF0C\u5BFC\u81F4\u65E0\u9650\u5FAA\u73AF\uFF0C\u5185\u5B58\u6EA2\u51FA\uFF01\uFF01\uFF01\uFF01</span>
    <span class="token keyword">let</span> value <span class="token operator">=</span> origin<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u4F9D\u8D56\u6536\u96C6\u5B9E\u4F8B</span>
    <span class="token keyword">const</span> dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span>key<span class="token punctuation">,</span><span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// \u6536\u96C6</span>
        dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> value
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span><span class="token punctuation">{</span>
        value <span class="token operator">=</span> newValue
        <span class="token comment">// \u89E6\u53D1</span>
        dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">observe</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8BBE\u7F6E\u54CD\u5E94\u5F0F\u56DE\u8C03\u51FD\u6570\u5904\u7406\u65B9\u6CD5</span>
<span class="token keyword">const</span> <span class="token function-variable function">autorun</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">update</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">wrapperUpdate</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    Dep<span class="token punctuation">.</span>activeUpdate <span class="token operator">=</span> wrapperUpdate
    <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    Dep<span class="token punctuation">.</span>activeUpdate <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u7ACB\u5373\u6267\u884C\u4E00\u6B21\uFF0C\u8FDB\u884C\u4F9D\u8D56\u6536\u96C6</span>
  <span class="token function">wrapperUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6D4B\u8BD5</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u52AB\u6301</span>
<span class="token function">observe</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
<span class="token comment">// \u56DE\u8C03</span>
<span class="token function">autorun</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">update:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token punctuation">.</span>count<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u4FEE\u6539</span>
data<span class="token punctuation">.</span>count<span class="token operator">++</span>
data<span class="token punctuation">.</span>count<span class="token operator">++</span>

</code></pre></div>`,5),e=[o];function c(u,l,k,i,r,d){return s(),a("div",null,e)}var w=n(p,[["render",c]]);export{f as __pageData,w as default};
