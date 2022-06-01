import{_ as n,c as s,o as a,a as t}from"./app.ca5faf2f.js";const h='{"title":"\u526F\u4F5C\u7528","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EAF\u51FD\u6570 pure function","slug":"\u7EAF\u51FD\u6570-pure-function"},{"level":2,"title":"\u526F\u4F5C\u7528-\u51FD\u6570\u5916\u90E8\u73AF\u5883\u53D1\u751F\u7684\u4EA4\u4E92","slug":"\u526F\u4F5C\u7528-\u51FD\u6570\u5916\u90E8\u73AF\u5883\u53D1\u751F\u7684\u4EA4\u4E92"},{"level":2,"title":"react\u4E2D\u7684\u526F\u4F5C\u7528\u51FD\u6570useEffect","slug":"react\u4E2D\u7684\u526F\u4F5C\u7528\u51FD\u6570useeffect"},{"level":2,"title":"vue setup\u4E2D\u7684\u526F\u4F5C\u7528\u51FD\u6570 watchEffect","slug":"vue-setup\u4E2D\u7684\u526F\u4F5C\u7528\u51FD\u6570-watcheffect"},{"level":2,"title":"watch \u7CBE\u786E\u63A7\u5236 effect","slug":"watch-\u7CBE\u786E\u63A7\u5236-effect"}],"relativePath":"md/Vue/Vue3/\u526F\u4F5C\u7528.md","lastUpdated":1648885436695}',p={},o=t(`<h1 id="\u526F\u4F5C\u7528" tabindex="-1">\u526F\u4F5C\u7528 <a class="header-anchor" href="#\u526F\u4F5C\u7528" aria-hidden="true">#</a></h1><h2 id="\u7EAF\u51FD\u6570-pure-function" tabindex="-1">\u7EAF\u51FD\u6570 <code>pure function</code> <a class="header-anchor" href="#\u7EAF\u51FD\u6570-pure-function" aria-hidden="true">#</a></h2><ul><li>\u76F8\u540C\u7684\u8F93\u5165\uFF0C\u6C38\u8FDC\u4F1A\u5F97\u5230\u76F8\u540C\u7684\u8F93\u51FA</li><li>\u6CA1\u6709\u526F\u4F5C\u7528</li></ul><div class="language-javascript"><pre><code><span class="token comment">// \u7EAF\u51FD\u6570</span>
<span class="token keyword">const</span> <span class="token function-variable function">double</span> <span class="token operator">=</span> <span class="token parameter">x</span><span class="token operator">=&gt;</span>x<span class="token operator">*</span><span class="token number">2</span>
<span class="token comment">// \u975E\u7EAF\u51FD\u6570</span>
<span class="token keyword">const</span> randomValue <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5728<code>vue</code>\u3001<code>react</code>\u4E2D\u7684\u7EAF\u51FD\u6570\u601D\u60F3\uFF1A\u8F93\u5165\u6570\u636E<code>=&gt;</code>\u8FD4\u56DE\u754C\u9762</p><h2 id="\u526F\u4F5C\u7528-\u51FD\u6570\u5916\u90E8\u73AF\u5883\u53D1\u751F\u7684\u4EA4\u4E92" tabindex="-1">\u526F\u4F5C\u7528-\u51FD\u6570\u5916\u90E8\u73AF\u5883\u53D1\u751F\u7684\u4EA4\u4E92 <a class="header-anchor" href="#\u526F\u4F5C\u7528-\u51FD\u6570\u5916\u90E8\u73AF\u5883\u53D1\u751F\u7684\u4EA4\u4E92" aria-hidden="true">#</a></h2><p>\u9664\u4E86\u8F93\u5165\u8F93\u51FA\u4E4B\u5916\u7684\uFF0C\u548C\u5916\u90E8\u73AF\u5883\u53D1\u751F\u4EA4\u4E92\u7684\u51FD\u6570\u3002 \u5982\uFF1A</p><ul><li>\u7F51\u7EDC\u8BF7\u6C42</li><li><code>DOM</code>\u64CD\u4F5C</li><li>\u8BA2\u9605\u6570\u636E\u6765\u6E90</li><li>\u5199\u5165\u6587\u4EF6\u7CFB\u7EDF</li><li>\u83B7\u53D6\u7528\u6237\u8F93\u5165</li></ul><h2 id="react\u4E2D\u7684\u526F\u4F5C\u7528\u51FD\u6570useeffect" tabindex="-1"><code>react</code>\u4E2D\u7684\u526F\u4F5C\u7528\u51FD\u6570<code>useEffect</code> <a class="header-anchor" href="#react\u4E2D\u7684\u526F\u4F5C\u7528\u51FD\u6570useeffect" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code>
<span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token comment">// \u6BCF\u6B21\u52A0\u8F7D\u5B8C\u6210\u6267\u884C\u6B64\u65B9\u6CD5</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mounted&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>msg<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="vue-setup\u4E2D\u7684\u526F\u4F5C\u7528\u51FD\u6570-watcheffect" tabindex="-1"><code>vue setup</code>\u4E2D\u7684\u526F\u4F5C\u7528\u51FD\u6570 <code>watchEffect</code> <a class="header-anchor" href="#vue-setup\u4E2D\u7684\u526F\u4F5C\u7528\u51FD\u6570-watcheffect" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>watchEffect<span class="token punctuation">,</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    
    <span class="token comment">// \u54CD\u5E94 watchEffect \u56DE\u8C03\u51FD\u6570\u4E2D\u4F9D\u8D56\u7684\u54CD\u5E94\u5F0F\u5BF9\u8C61\u3002</span>
    <span class="token keyword">const</span> destroy <span class="token operator">=</span> <span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">onInvalidate</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>

      <span class="token comment">// \u4F7F\u7528 onInvalidate \u5C06\u526F\u4F5C\u7528\u6267\u884C\u5931\u6548</span>
      <span class="token keyword">const</span> source <span class="token operator">=</span> axios<span class="token punctuation">.</span>CancelToken<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;...&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token literal-property property">cancelToken</span><span class="token operator">:</span>source<span class="token punctuation">.</span>token
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token function">onInvalidate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        source<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token string">&#39;\u53D6\u6D88\u8BF7\u6C42&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
      <span class="token comment">// \u9ED8\u8BA4\u5728 update \u4E4B\u524D\u6267\u884C\uFF0C\u53EF\u4F7F\u7528flush\u8C03\u6574\u4E3Aupdate\u4E4B\u540E\u6267\u884C</span>
      <span class="token comment">// react \u9ED8\u8BA4\u5728 update \u4E4B\u540E\u6267\u884C\uFF0C\u4E0D\u53EF\u4FEE\u6539</span>
      <span class="token literal-property property">flush</span><span class="token operator">:</span><span class="token string">&#39;pre&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u9500\u6BC1</span>
    <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="watch-\u7CBE\u786E\u63A7\u5236-effect" tabindex="-1"><code>watch</code> \u7CBE\u786E\u63A7\u5236 <code>effect</code> <a class="header-anchor" href="#watch-\u7CBE\u786E\u63A7\u5236-effect" aria-hidden="true">#</a></h2><div class="language-javascript"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>watch<span class="token punctuation">,</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
    
    <span class="token comment">// \u7B2C\u4E00\u4E2A\u53C2\u6570\u9700\u8981\u662F\u54CD\u5E94\u5F0F\u5BF9\u8C61</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6216\u8005\u4F20\u5165\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD4\u56DE\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u503C</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>props<span class="token punctuation">.</span>msg<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u591A\u4E2A\u503C</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>props<span class="token punctuation">.</span>msg<span class="token punctuation">,</span>count<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u548C <code>watchEffect</code> \u7684\u533A\u522B</p><ul><li>\u61D2\u6267\u884C\u526F\u4F5C\u7528\uFF0C\u53EA\u9488\u5BF9\u67D0\u4E2A\u54CD\u5E94\u5F0F\u53D8\u91CF\u53BB\u6267\u884C</li><li>\u5B9A\u4E49\u4EC0\u4E48\u72B6\u6001\u4E0B\u6267\u884C\uFF0C<code>watchEffect</code>\u53EA\u4F1A\u5728\u4F9D\u8D56\u503C\u66F4\u65B0\u540E\u6267\u884C</li><li>\u53EF\u4EE5\u8BBF\u95EE\u6570\u636E\u66F4\u65B0\u524D\u540E\u7684\u503C</li></ul>`,16),c=[o];function e(u,l,k,i,r,d){return a(),s("div",null,c)}var m=n(p,[["render",e]]);export{h as __pageData,m as default};
