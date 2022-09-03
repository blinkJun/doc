import{_ as n,c as s,o as a,a as t}from"./app.952c636c.js";const y='{"title":"\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 echarts \u6BD4\u8F83\u597D\u7684\u5B9E\u8DF5","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. \u4F7F\u7528mixins\u6DF7\u5165\u901A\u7528\u65B9\u6CD5","slug":"_1-\u4F7F\u7528mixins\u6DF7\u5165\u901A\u7528\u65B9\u6CD5"},{"level":2,"title":"2. \u5728\u9875\u9762\u4E2D\u521D\u59CB\u5316\u548C\u914D\u7F6E\u9009\u9879","slug":"_2-\u5728\u9875\u9762\u4E2D\u521D\u59CB\u5316\u548C\u914D\u7F6E\u9009\u9879"}],"relativePath":"md/Vue/Vue2/\u7EC4\u4EF6\u4E2D\u4F7F\u7528Echarts.md","lastUpdated":1648885436694}',p={},o=t(`<h1 id="\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528-echarts-\u6BD4\u8F83\u597D\u7684\u5B9E\u8DF5" tabindex="-1">\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 <code>echarts</code> \u6BD4\u8F83\u597D\u7684\u5B9E\u8DF5 <a class="header-anchor" href="#\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528-echarts-\u6BD4\u8F83\u597D\u7684\u5B9E\u8DF5" aria-hidden="true">#</a></h1><h2 id="_1-\u4F7F\u7528mixins\u6DF7\u5165\u901A\u7528\u65B9\u6CD5" tabindex="-1">1. \u4F7F\u7528<code>mixins</code>\u6DF7\u5165\u901A\u7528\u65B9\u6CD5 <a class="header-anchor" href="#_1-\u4F7F\u7528mixins\u6DF7\u5165\u901A\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token comment">// \u5F15\u5165echarts</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> echarts <span class="token keyword">from</span> <span class="token string">&#39;echarts&#39;</span>
<span class="token comment">// \u5F15\u5165\u4E3B\u9898\u5E76\u6CE8\u518C</span>
<span class="token keyword">import</span> echartTheme <span class="token keyword">from</span> <span class="token string">&#39;@/assets/echarts-theme&#39;</span>
echarts<span class="token punctuation">.</span><span class="token function">registerTheme</span><span class="token punctuation">(</span><span class="token string">&#39;walden&#39;</span><span class="token punctuation">,</span> echartTheme<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u56FE\u8868\u7684\u76F8\u5173\u914D\u7F6E</span>
      <span class="token literal-property property">chartConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token literal-property property">resizeTimer</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">chart</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;chart-box&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token comment">// \u4F20\u5165\u56FE\u8868\u7684\u9009\u9879\uFF0C\u66F4\u65B0\u6B64\u56FE\u8868</span>
    <span class="token function">refreshChartAction</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> chartConfig <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>chartConfig
      <span class="token comment">// \u662F\u5426\u7F13\u5B58\u4E86\u56FE\u8868</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>chartConfig<span class="token punctuation">.</span>chart<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u672A\u7F13\u5B58\u56FE\u8868\u5219\u521D\u59CB\u5316\u56FE\u8868</span>
        <span class="token keyword">const</span> chartDom <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span>chartConfig<span class="token punctuation">.</span>name<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>chartDom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          chartConfig<span class="token punctuation">.</span>chart <span class="token operator">=</span> echarts<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>chartDom<span class="token punctuation">,</span> <span class="token string">&#39;walden&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u7F13\u5B58\u4E86\u5C31\u6E05\u9664\u56FE\u8868</span>
        chartConfig<span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u91CD\u65B0\u8BBE\u7F6E\u9009\u9879</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>chartConfig<span class="token punctuation">.</span>chart<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        chartConfig<span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">setOption</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u66F4\u65B0\u56FE\u8868\u7684\u5927\u5C0F</span>
    <span class="token function">resizeAllCharts</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>chartConfig<span class="token punctuation">.</span>chart <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>chartConfig<span class="token punctuation">.</span>chart<span class="token punctuation">.</span><span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u521D\u59CB\u5316\u9875\u9762\u65F6\u8C03\u7528\u6B64\u65B9\u6CD5\u76D1\u542C\u6D4F\u89C8\u5668\u7A97\u53E3\u53D8\u5316\uFF0C\u540C\u65F6\u66F4\u65B0\u56FE\u8868\u5927\u5C0F</span>
    <span class="token function">readyResize</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span>
      <span class="token keyword">const</span> <span class="token function-variable function">listenResize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>that<span class="token punctuation">.</span>chartConfig<span class="token punctuation">.</span>resizeTimer<span class="token punctuation">)</span>
        that<span class="token punctuation">.</span>chartConfig<span class="token punctuation">.</span>resizeTimer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          that<span class="token punctuation">.</span><span class="token function">resizeAllCharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> listenResize<span class="token punctuation">)</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$once</span><span class="token punctuation">(</span><span class="token string">&#39;hook:beforeDestroy&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> listenResize<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u521D\u59CB\u5316\u65B9\u6CD5</span>
    <span class="token keyword">async</span> <span class="token function">initEcharts</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">readyResize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">resizeAllCharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_2-\u5728\u9875\u9762\u4E2D\u521D\u59CB\u5316\u548C\u914D\u7F6E\u9009\u9879" tabindex="-1">2. \u5728\u9875\u9762\u4E2D\u521D\u59CB\u5316\u548C\u914D\u7F6E\u9009\u9879 <a class="header-anchor" href="#_2-\u5728\u9875\u9762\u4E2D\u521D\u59CB\u5316\u548C\u914D\u7F6E\u9009\u9879" aria-hidden="true">#</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> echartsMixin <span class="token keyword">from</span> <span class="token string">&#39;./mixins/echarts&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">mixins</span><span class="token operator">:</span><span class="token punctuation">[</span>echartsMixin<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token function">initData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">// \u66F4\u65B0\u4E2D</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>chartConfig<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">true</span>
      <span class="token comment">// \u83B7\u53D6\u56FE\u8868\u914D\u7F6E</span>
      <span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token comment">// \u81EA\u52A8\u521D\u59CB\u5316\u548C\u5237\u65B0\u56FE\u8868</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">refreshChartAction</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
      <span class="token comment">// \u66F4\u65B0\u540E</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>chartConfig<span class="token punctuation">.</span>loading <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">getOptions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">confine</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
          <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&#39;item&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&#39;{a} &lt;br/&gt;{b} : {c} ({d}%)&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;seriesName&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;pie&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">radius</span><span class="token operator">:</span> <span class="token string">&#39;65%&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">center</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;50%&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;50%&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token literal-property property">itemStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">emphasis</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">shadowBlur</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
                <span class="token literal-property property">shadowOffsetX</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token literal-property property">shadowColor</span><span class="token operator">:</span> <span class="token string">&#39;rgba(0, 0, 0, 0.5)&#39;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initEcharts</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,5),e=[o];function c(l,u,k,i,r,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{y as __pageData,m as default};
