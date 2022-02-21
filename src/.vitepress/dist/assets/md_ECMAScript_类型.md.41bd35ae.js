import{_ as e,c as l,o as i,a as d}from"./app.dfde2fab.js";const f='{"title":"\u7C7B\u578B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u57FA\u672C\u7C7B\u578B","slug":"\u57FA\u672C\u7C7B\u578B"},{"level":2,"title":"\u5F15\u7528\u7C7B\u578B","slug":"\u5F15\u7528\u7C7B\u578B"},{"level":3,"title":"\u7C7B\u578B\u8F6C\u6362","slug":"\u7C7B\u578B\u8F6C\u6362"},{"level":3,"title":"\u5224\u65AD\u7C7B\u578B\u7684\u65B9\u5F0F","slug":"\u5224\u65AD\u7C7B\u578B\u7684\u65B9\u5F0F"}],"relativePath":"md/ECMAScript/\u7C7B\u578B.md","lastUpdated":1638340958387}',o={},c=d('<h1 id="\u7C7B\u578B" tabindex="-1">\u7C7B\u578B <a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a></h1><h2 id="\u57FA\u672C\u7C7B\u578B" tabindex="-1">\u57FA\u672C\u7C7B\u578B <a class="header-anchor" href="#\u57FA\u672C\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u57FA\u672C\u7C7B\u578B\u7684\u503C\u90FD\u662F\u5B58\u653E\u5728\u6808\u5185\u5B58\u4E2D\u7684\uFF0C\u53D8\u91CF\u4E4B\u95F4\u7684\u8D4B\u503C\u90FD\u662F\u901A\u8FC7\u62F7\u8D1D\u8FDB\u884C\u7684\uFF0C\u6B64\u540E\u4E24\u4E2A\u53D8\u91CF\u518D\u53C2\u4E0E\u4EFB\u4F55\u64CD\u4F5C\u7684\u65F6\u5019\u90FD\u4E0D\u4F1A\u76F8\u4E92\u5F71\u54CD</p><ul><li><code>Number</code></li><li><code>String</code></li><li><code>Boolean</code></li><li><code>Undefined</code>\uFF1A\u58F0\u660E\u4F46\u672A\u5B9A\u4E49\u7684\u53D8\u91CF</li><li><code>Null</code>\uFF1A\u7A7A\u6307\u9488\u5BF9\u8C61</li><li><code>Symbol</code>\uFF1A\u72EC\u4E00\u65E0\u4E8C\u7684\u503C\uFF0C\u4F7F\u7528Symbol()\u521B\u5EFA</li><li><code>bigInt</code>\uFF1A\u7528\u4E8E\u5F53\u6574\u6570\u503C\u5927\u4E8ENumber\u6570\u636E\u7C7B\u578B\u652F\u6301\u7684\u8303\u56F4\u65F6</li></ul><h2 id="\u5F15\u7528\u7C7B\u578B" tabindex="-1">\u5F15\u7528\u7C7B\u578B <a class="header-anchor" href="#\u5F15\u7528\u7C7B\u578B" aria-hidden="true">#</a></h2><p>\u5F15\u7528\u7C7B\u578B\u7684\u503C\u90FD\u662F\u5B58\u653E\u5728\u5806\u5185\u5B58\u4E2D\u7684\uFF0C\u53D8\u91CF\u4E4B\u95F4\u7684\u8D4B\u503C\u90FD\u662F\u901A\u8FC7\u590D\u5236\u5F15\u7528\u8FDB\u884C\u7684\uFF0C\u7531\u6B64\u5EF6\u7533\u51FA\u6D45\u590D\u5236\u548C\u6DF1\u590D\u5236\u6982\u5FF5</p><h3 id="\u7C7B\u578B\u8F6C\u6362" tabindex="-1">\u7C7B\u578B\u8F6C\u6362 <a class="header-anchor" href="#\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a></h3><ul><li><p>\u8F6C\u6362\u4E3A<code>boolean</code>\uFF1A\u5224\u65AD\u65F6\uFF0C\u9664\u6B64\u90E8\u5206\u503C\u5916\uFF0C\u5168\u90E8\u8F6C\u6362\u4E3A<code>true</code></p><ul><li><code>null</code></li><li><code>undefined</code></li><li><code>&quot;&quot;</code></li><li><code>NaN</code></li><li><code>-0</code></li><li><code>+0</code></li></ul></li><li><p>\u5BF9\u8C61\u8F6C\u6362\u4E3A\u57FA\u672C\u7C7B\u578B\uFF1A\u987A\u5E8F\u89E6\u53D1\u5BF9\u8C61\u7684\u65B9\u6CD5\u83B7\u53D6\u8FD4\u56DE\u503C\u4F5C\u4E3A\u57FA\u672C\u7C7B\u578B</p><ul><li><code>Symbol.toPrimitive</code></li><li><code>valueOf</code></li><li><code>toString</code></li></ul></li><li><p>\u56DB\u5219\u8FD0\u7B97\u8F6C\u6362\u89C4\u5219</p><ul><li>\u52A0\u6CD5\uFF1A\u6709\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u5176\u4ED6\u7C7B\u578B\u81EA\u52A8\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u7C7B\u578B</li><li>\u5176\u4ED6\u8FD0\u7B97\u6CD5\uFF1A\u8F6C\u6362\u4E3A\u6570\u503C\u8FDB\u884C\u8BA1\u7B97</li></ul></li><li><p><code>==</code>\u6BD4\u8F83</p><ul><li>\u901A\u5E38\u6BD4\u8F83\u7ED3\u679C\u8DDF\u6211\u4EEC\u7684\u8BA4\u77E5\u4E00\u6837\uFF0C\u53EA\u6709\u51E0\u4E2A\u7279\u6B8A\u7684\u7ED3\u679C</li><li><code>NaN == NaN =&gt; false</code></li><li><code>undefined == null =&gt; true</code></li><li>\u5B57\u7B26\u4E32\u548C\u6570\u503C\u6BD4\u8F83\u4F1A\u5148\u628A\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6570\u503C\u7C7B\u578B</li><li>\u5E03\u5C14\u503C\u548C\u6570\u503C\u6BD4\u8F83\u4F1A\u5148\u628A\u5E03\u5C14\u503C\u8F6C\u6362\u4E3A\u6570\u503C\u7C7B\u578B</li><li>\u6709\u5BF9\u8C61\u7C7B\u578B\u7684\u503C\u5219\u5C06\u5176\u8F6C\u6362\u4E3A\u57FA\u7840\u7C7B\u578B</li></ul></li></ul><h3 id="\u5224\u65AD\u7C7B\u578B\u7684\u65B9\u5F0F" tabindex="-1">\u5224\u65AD\u7C7B\u578B\u7684\u65B9\u5F0F <a class="header-anchor" href="#\u5224\u65AD\u7C7B\u578B\u7684\u65B9\u5F0F" aria-hidden="true">#</a></h3><ul><li><code>typeOf</code>\uFF1A\u53EA\u80FD\u5224\u65AD\u57FA\u672C\u7C7B\u578B\uFF0C\u4E0D\u80FD\u5224\u65AD\u5F15\u7528\u7C7B\u578B</li><li><code>Object.prototype.toString.call()</code></li><li><code>instenceOf</code></li><li><code>Array.isArray()</code></li></ul>',10),a=[c];function t(r,n,u,s,h,p){return i(),l("div",null,a)}var b=e(o,[["render",t]]);export{f as __pageData,b as default};
