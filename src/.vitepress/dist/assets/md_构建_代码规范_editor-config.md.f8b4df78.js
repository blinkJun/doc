import{_ as e,c as n,o as a,a as s}from"./app.ca5faf2f.js";const u='{"title":"\u7F16\u8F91\u5668\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":".editorconfig","slug":"editorconfig"},{"level":2,"title":"\u4E3A\u4EC0\u4E48\u8981\u7528","slug":"\u4E3A\u4EC0\u4E48\u8981\u7528"},{"level":2,"title":"\u5982\u4F55\u4F7F\u7528","slug":"\u5982\u4F55\u4F7F\u7528"}],"relativePath":"md/\u6784\u5EFA/\u4EE3\u7801\u89C4\u8303/editor-config.md","lastUpdated":1648885436709}',o={},t=s(`<h1 id="\u7F16\u8F91\u5668\u914D\u7F6E" tabindex="-1"><a href="http://editorconfig.org" target="_blank" rel="noopener noreferrer">\u7F16\u8F91\u5668\u914D\u7F6E</a> <a class="header-anchor" href="#\u7F16\u8F91\u5668\u914D\u7F6E" aria-hidden="true">#</a></h1><h2 id="editorconfig" tabindex="-1"><code>.editorconfig</code> <a class="header-anchor" href="#editorconfig" aria-hidden="true">#</a></h2><p>\u5E38\u5E38\u5728\u4ED6\u4EBA\u9879\u76EE\u4E2D\uFF0C\u53D1\u73B0\u6709\u4E00\u4E2A<code>.editorconfig</code>\u6587\u4EF6\uFF0C\u91CC\u9762\u914D\u7F6E\u7684\u5185\u5BB9\u6709\u70B9\u7C7B\u4F3C<code>eslint</code>\u3002\u6211\u5728\u60F3\uFF0C\u90FD\u6709<code>eslint</code>\u4E86\uFF0C\u4E3A\u4EC0\u4E48\u8FD8\u8981\u914D\u7F6E\u8FD9\u4E2A\u4E1C\u897F\u5462\uFF1F\u5728\u7F51\u4E0A\u67E5\u627E\u4E86\u4E00\u4E0B\u76F8\u5173\u8D44\u6599\uFF0C\u770B\u4E86\u6587\u6863\u53D1\u73B0\u6709\u4E9B\u529F\u80FD<code>eslint</code>\u662F\u6EE1\u8DB3\u4E0D\u4E86\u7684\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u8981\u7528" tabindex="-1">\u4E3A\u4EC0\u4E48\u8981\u7528 <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u7528" aria-hidden="true">#</a></h2><ul><li><code>eslint</code>\u548C<code>editorconfig</code>\u6709\u5171\u901A\u7684\u4E1C\u897F\uFF0C\u6BD4\u5982\u7F29\u8FDB\uFF0C<code>eslint</code>\u504F\u5411\u5E2E\u4F60\u68C0\u67E5\u4EE3\u7801\uFF0C<code>editorconfig</code>\u5219\u5E0C\u671B\u7F16\u8F91\u5668\u76F4\u63A5\u6309\u7167\u8FD9\u4E2A\u914D\u7F6E\u7F16\u5199\u4EE3\u7801</li><li><code>editorconfig</code>\u53EF\u4EE5\u5BF9\u66F4\u591A\u6587\u4EF6\u8FDB\u884C\u89C4\u8303\uFF0C\u800C<code>eslint</code>\u901A\u5E38\u53EA\u6821\u9A8C<code>js</code></li></ul><h2 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1">\u5982\u4F55\u4F7F\u7528 <a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a></h2><p>\u901A\u7528\u7684 <code>.editorconfig</code> \u914D\u7F6E\u6587\u4EF6\u4E00\u822C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-csharp"><pre><code>
<span class="token preprocessor property"># \u8868\u793A\u6839\u76EE\u5F55\uFF0C\u67E5\u627E\u914D\u7F6E\u6587\u4EF6\u5230\u6B64\u6587\u4EF6\u4E3A\u6B62</span>
root <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token punctuation">[</span><span class="token operator">*</span><span class="token punctuation">]</span>
<span class="token preprocessor property"># \u7F29\u8FDB\u98CE\u683C\uFF1A\u7A7A\u683C</span>
indent_style <span class="token operator">=</span> space
<span class="token preprocessor property"># \u7F29\u8FDB\u5927\u5C0F2</span>
indent_size <span class="token operator">=</span> <span class="token number">2</span>
<span class="token preprocessor property"># \u6362\u884C\u7B26lf</span>
end_of_line <span class="token operator">=</span> lf
<span class="token preprocessor property"># \u5B57\u7B26\u96C6utf-8</span>
charset <span class="token operator">=</span> utf<span class="token operator">-</span><span class="token number">8</span>
<span class="token preprocessor property"># \u662F\u5426\u5220\u9664\u884C\u5C3E\u7684\u7A7A\u683C</span>
trim_trailing_whitespace <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token preprocessor property"># \u662F\u5426\u5728\u6587\u4EF6\u7684\u6700\u540E\u63D2\u5165\u4E00\u4E2A\u7A7A\u884C</span>
insert_final_newline <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token punctuation">[</span><span class="token operator">*</span><span class="token punctuation">.</span>md<span class="token punctuation">]</span>
trim_trailing_whitespace <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token punctuation">[</span>Makefile<span class="token punctuation">]</span>
indent_style <span class="token operator">=</span> tab

</code></pre></div><ol><li>\u5C06\u6587\u4EF6\u4FDD\u5B58\u5728\u9879\u76EE\u6839\u76EE\u5F55</li><li>\u5206\u522B\u4FEE\u6539 indent_size \u4E3A 2 \u548C 4 \u67E5\u770B\u7F16\u8F91\u5668\u6709\u65E0\u53D8\u5316</li><li>\u82E5\u65E0\u53D8\u5316\u5219\u9700\u8981\u5230\u7F16\u8F91\u5668\u63D2\u4EF6\u5E02\u573A\u67E5\u627E editorconfig \u76F8\u5173\u63D2\u4EF6\uFF0C\u5B89\u88C5\u5373\u53EF\u3002\u5982 vscode \u5728\u63D2\u4EF6\u5E02\u573A\u4E2D\u67E5\u627E<code>editorCondif for VS Code</code>\u5B89\u88C5\u3002</li></ol>`,9),r=[t];function p(c,i,l,d,f,_){return a(),n("div",null,r)}var h=e(o,[["render",p]]);export{u as __pageData,h as default};
