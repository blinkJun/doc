import{_ as n,c as s,o as a,a as p}from"./app.952c636c.js";const w='{"title":"\u6DF1\u590D\u5236","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6DF1\u590D\u5236","slug":"\u6DF1\u590D\u5236"},{"level":3,"title":"\u5BF9\u5404\u79CD\u5F15\u7528\u7C7B\u578B\u5B9E\u73B0\u590D\u5236","slug":"\u5BF9\u5404\u79CD\u5F15\u7528\u7C7B\u578B\u5B9E\u73B0\u590D\u5236"}],"relativePath":"md/\u5E38\u8003\u7B97\u6CD5/\u6DF1\u590D\u5236.md","lastUpdated":1648885436706}',t={},o=p(`<h2 id="\u6DF1\u590D\u5236" tabindex="-1">\u6DF1\u590D\u5236 <a class="header-anchor" href="#\u6DF1\u590D\u5236" aria-hidden="true">#</a></h2><h3 id="\u5BF9\u5404\u79CD\u5F15\u7528\u7C7B\u578B\u5B9E\u73B0\u590D\u5236" tabindex="-1">\u5BF9\u5404\u79CD\u5F15\u7528\u7C7B\u578B\u5B9E\u73B0\u590D\u5236 <a class="header-anchor" href="#\u5BF9\u5404\u79CD\u5F15\u7528\u7C7B\u578B\u5B9E\u73B0\u590D\u5236" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">// \u5B9A\u4E49\u8981\u590D\u5236\u7684\u5F15\u7528\u7C7B\u578B</span>
<span class="token keyword">const</span> types <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">object</span><span class="token operator">:</span><span class="token string">&#39;[object Object]&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">array</span><span class="token operator">:</span><span class="token string">&#39;[object Array]&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">reg</span><span class="token operator">:</span><span class="token string">&#39;[object RegExp]&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">date</span><span class="token operator">:</span><span class="token string">&#39;[object Date]&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">set</span><span class="token operator">:</span><span class="token string">&#39;[object Set]&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">map</span><span class="token operator">:</span><span class="token string">&#39;[object Map]&#39;</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u83B7\u53D6\u5F15\u7528\u7C7B\u578B</span>
<span class="token keyword">const</span> <span class="token function-variable function">getObjectType</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">origin</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// map\u7528\u4E8E\u5B58\u653E\u590D\u5236\u8FC7\u7684\u5BF9\u8C61\uFF0C\u9632\u6B62\u5FAA\u73AF\u5F15\u7528</span>
<span class="token keyword">const</span> <span class="token function-variable function">deepCopy</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span>map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u53EA\u5904\u7406\u5F15\u7528\u7C7B\u578B</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>origin<span class="token operator">||</span><span class="token keyword">typeof</span> origin <span class="token operator">!==</span><span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> origin
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5DF2\u5B58\u5728\uFF0C\u5FAA\u73AF\u5F15\u7528\uFF0C\u76F4\u63A5\u8FD4\u56DE</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> origin
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> objectType <span class="token operator">=</span> <span class="token function">getObjectType</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span>
    <span class="token comment">// \u5904\u7406 \u6B63\u5219 \u548C \u65E5\u671F\u7C7B\u578B</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>objectType<span class="token operator">===</span>types<span class="token punctuation">.</span>reg<span class="token operator">||</span>objectType<span class="token operator">===</span>types<span class="token punctuation">.</span>date<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// \u751F\u6210\u65B0\u6B63\u5219</span>
        <span class="token keyword">const</span> newObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">origin<span class="token punctuation">.</span>construter</span><span class="token punctuation">(</span>origin<span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment">// \u5B58\u50A8</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>newObject<span class="token punctuation">)</span>
        <span class="token comment">// \u8FD4\u56DE</span>
        <span class="token keyword">return</span> newObject
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5904\u7406 set</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>objectType <span class="token operator">===</span> types<span class="token punctuation">.</span>set<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> newObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> origin<span class="token punctuation">)</span><span class="token punctuation">{</span>
            newObject<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">deepCopy</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span>map<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>newObject<span class="token punctuation">)</span>
        <span class="token keyword">return</span> newObject
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5904\u7406map</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>objectType <span class="token operator">===</span> types<span class="token punctuation">.</span>map<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> newObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span>value<span class="token punctuation">]</span> <span class="token keyword">of</span> origin<span class="token punctuation">)</span><span class="token punctuation">{</span>
            newObject<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token function">deepCopy</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span>map<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>newObject<span class="token punctuation">)</span>
        <span class="token keyword">return</span> newObjcet
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5904\u7406Object \u548C Array</span>
    <span class="token comment">// \u8003\u8651Symbol</span>
    <span class="token keyword">const</span> keys <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getOwnKeys</span><span class="token punctuation">(</span>origin<span class="token punctuation">)</span>
    <span class="token keyword">const</span> newObject <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    keys<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> currentObject <span class="token operator">=</span> origin<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        newObject<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span>currentObject<span class="token punctuation">,</span>map<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>newObject<span class="token punctuation">)</span>

    <span class="token keyword">return</span> objectType <span class="token operator">===</span> types<span class="token punctuation">.</span>array<span class="token operator">?</span>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>newObject<span class="token punctuation">)</span><span class="token operator">:</span>newObject
<span class="token punctuation">}</span>

</code></pre></div>`,3),e=[o];function c(u,l,k,r,i,y){return a(),s("div",null,e)}var m=n(t,[["render",c]]);export{w as __pageData,m as default};
