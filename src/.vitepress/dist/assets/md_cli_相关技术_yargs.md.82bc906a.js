import{_ as n,c as s,o as a,a as p}from"./app.f8375116.js";const g='{"title":"yargs \u7684\u4F7F\u7528\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"yargs \u7684\u4F7F\u7528\u65B9\u6CD5","slug":"yargs-\u7684\u4F7F\u7528\u65B9\u6CD5"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u57FA\u672C\u4F7F\u7528","slug":"\u57FA\u672C\u4F7F\u7528"},{"level":3,"title":"\u9AD8\u7EA7\u7528\u6CD5","slug":"\u9AD8\u7EA7\u7528\u6CD5"}],"relativePath":"md/cli/\u76F8\u5173\u6280\u672F/yargs.md","lastUpdated":1638340958403}',t={},o=p(`<h2 id="yargs-\u7684\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a href="https://www.npmjs.com/package/yargs" target="_blank" rel="noopener noreferrer">yargs</a> \u7684\u4F7F\u7528\u65B9\u6CD5 <a class="header-anchor" href="#yargs-\u7684\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u6CE8\u518C\u547D\u4EE4\u884C\u547D\u4EE4</p><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-BASH"><pre><code><span class="token function">npm</span> i yargs --save
</code></pre></div><h3 id="\u57FA\u672C\u4F7F\u7528" tabindex="-1">\u57FA\u672C\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u672C\u4F7F\u7528" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token keyword">const</span> yargs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;yargs/yargs&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// process.argv.slice(2) \u7684\u7B80\u5199</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> hideBin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;yargs/helpers&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> arg <span class="token operator">=</span> <span class="token function">hideBin</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>

<span class="token comment">// \u5B9A\u4E49</span>
<span class="token keyword">const</span> cli <span class="token operator">=</span> <span class="token function">yargs</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>
<span class="token comment">// \u547D\u4EE4\u884C\u5BBD\u5EA6</span>
<span class="token keyword">const</span> terminalWidth <span class="token operator">=</span> cli<span class="token punctuation">.</span><span class="token function">terminalWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u521D\u59CB\u5316</span>
cli
<span class="token punctuation">.</span><span class="token function">usage</span><span class="token punctuation">(</span><span class="token string">&#39;Usage\uFF1Ablink-cli-dev [command] &lt;options&gt;&#39;</span><span class="token punctuation">)</span>   <span class="token comment">// \u4F7F\u7528\u63D0\u793A</span>
<span class="token punctuation">.</span><span class="token function">demandCommand</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;A command is required! Pass --help to see all available commands and options.&#39;</span><span class="token punctuation">)</span> <span class="token comment">//\u671F\u671B\u7684\u6700\u5C0F\u547D\u4EE4\u6570</span>
<span class="token punctuation">.</span><span class="token function">strict</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                            <span class="token comment">// \u4E25\u683C\u6A21\u5F0F\uFF0C\u65E0\u6CD5\u8BC6\u522B\u7684\u53C2\u6570\u5C06\u4F1A\u8FDB\u884C\u63D0\u793A</span>
<span class="token punctuation">.</span><span class="token function">alias</span><span class="token punctuation">(</span><span class="token string">&quot;v&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;version&quot;</span><span class="token punctuation">)</span>                                <span class="token comment">// \u53C2\u6570\u522B\u540D</span>
<span class="token punctuation">.</span><span class="token function">wrap</span><span class="token punctuation">(</span>terminalWidth<span class="token punctuation">)</span>                                 <span class="token comment">// \u4FEE\u6539\u8F93\u51FA\u7684\u6587\u6848\u5BBD\u5EA6</span>
<span class="token punctuation">.</span><span class="token function">epilogue</span><span class="token punctuation">(</span><span class="token string">&#39;your own footer desc&#39;</span><span class="token punctuation">)</span>                    <span class="token comment">// \u5728\u5E95\u90E8\u6DFB\u52A0\u63D0\u793A\u6587\u672C</span>
<span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span>                                           <span class="token comment">// \u914D\u7F6E\u591A\u4E2A\u5168\u5C40\u9009\u9879</span>
  <span class="token literal-property property">debug</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;boolean&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">describe</span><span class="token operator">:</span><span class="token string">&#39;bootstrap debug mode&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span><span class="token string">&#39;d&#39;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>                                                   
<span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;registry&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>                                 <span class="token comment">// \u914D\u7F6E\u5355\u4E2A\u5168\u5C40\u9009\u9879</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">describe</span><span class="token operator">:</span><span class="token string">&#39;define global registry&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">alias</span><span class="token operator">:</span><span class="token string">&#39;r&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;debug&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string">&#39;Dev Options\uFF1A&#39;</span><span class="token punctuation">)</span>                    <span class="token comment">// \u5C06\u547D\u4EE4\u805A\u5408</span>
<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;registry&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token string">&#39;Publish Options\uFF1A&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">recommendCommands</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                 <span class="token comment">// \u547D\u4EE4\u8F93\u51FA\u9519\u8BEF\u65F6\u8FDB\u884C\u63D0\u793A</span>
<span class="token punctuation">.</span><span class="token function">fail</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>msg</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>                                   <span class="token comment">// \u5B9A\u5236\u51FA\u9519\u65F6\u7684\u63D0\u793A\u4FE1\u606F</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span>argv                                                <span class="token comment">// \u5B8C\u6210\u521D\u59CB\u5316</span>
</code></pre></div><h3 id="\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1">\u9AD8\u7EA7\u7528\u6CD5 <a class="header-anchor" href="#\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a></h3><div class="language-javascript"><pre><code><span class="token comment">// command:\u5B9A\u4E49\u547D\u4EE4</span>

<span class="token comment">// command \u53C2\u6570</span>
<span class="token keyword">const</span> command <span class="token operator">=</span> <span class="token string">&#39;init [name]&#39;</span>                        <span class="token comment">// \u547D\u4EE4\u683C\u5F0F\uFF0C\u7528\u4F5C\u63D0\u793A</span>
<span class="token keyword">const</span> describe <span class="token operator">=</span> <span class="token string">&#39;do init a project&#39;</span>                 <span class="token comment">// \u547D\u4EE4\u63CF\u8FF0\uFF0C\u7528\u4F5C\u63D0\u793A</span>
<span class="token keyword">const</span> aliases <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;n&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;projectName&#39;</span><span class="token punctuation">]</span>                  <span class="token comment">// \u547D\u4EE4\u53C2\u6570\u522B\u540D</span>
<span class="token keyword">const</span> <span class="token function-variable function">builder</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">yargs</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>                           <span class="token comment">// \u6267\u884Ccommand\u4E4B\u524D\u7684\u5904\u7406\u51FD\u6570\uFF0C\u5B9A\u4E49\u53EA\u6709\u8FD9\u4E2A\u547D\u4EE4\u624D\u6709\u7684\u53C2\u6570</span>
  yargs<span class="token punctuation">.</span><span class="token function">option</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;string&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">describe</span><span class="token operator">:</span><span class="token string">&#39;Name of the project&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">argv</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>                             <span class="token comment">// \u8FD9\u4E2A\u547D\u4EE4\u7684\u5177\u4F53\u6267\u884C\u65B9\u6CD5</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>argv<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5B9A\u4E49command</span>
cli<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span>describe<span class="token punctuation">,</span>builder<span class="token punctuation">,</span>handler<span class="token punctuation">)</span>
<span class="token comment">// \u53E6\u4E00\u79CD\u5B9A\u4E49\u65B9\u5F0F</span>
cli<span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  command<span class="token punctuation">,</span>
  describe<span class="token punctuation">,</span>
  aliases<span class="token punctuation">,</span>
  builder<span class="token punctuation">,</span>
  handler
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-javascript"><pre><code><span class="token comment">// parse\uFF1A\u624B\u52A8\u5904\u7406\u53C2\u6570</span>

<span class="token comment">// \u4E0D\u518D\u4F7F\u7528 hideBin \u65B9\u6CD5\uFF0C\u81EA\u5B9A\u4E49 argv \u53C2\u6570</span>
<span class="token keyword">const</span> argv <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5B9A\u4E49\u7684\u65F6\u5019\u4E0D\u518D\u4F20\u5165argv\u53C2\u6570</span>
<span class="token keyword">const</span> cli <span class="token operator">=</span> <span class="token function">yargs</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u8C03\u7528parse\u65B9\u6CD5\uFF0C\u6CE8\u5165\u5176\u4ED6\u53C2\u6570</span>
cli<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>argv<span class="token punctuation">,</span><span class="token punctuation">{</span>
  <span class="token literal-property property">version</span><span class="token operator">:</span><span class="token string">&#39;1.0.0&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div>`,9),e=[o];function c(l,u,i,r,k,m){return a(),s("div",null,e)}var y=n(t,[["render",c]]);export{g as __pageData,y as default};
