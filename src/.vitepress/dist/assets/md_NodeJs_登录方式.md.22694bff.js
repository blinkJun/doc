import{_ as o,c as e,o as c,a as n}from"./app.dfde2fab.js";const h='{"title":"\u670D\u52A1\u7684\u767B\u5F55\u65B9\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"Cookie","slug":"cookie"},{"level":2,"title":"\u57FA\u4E8E Cookie \u7684 Session","slug":"\u57FA\u4E8E-cookie-\u7684-session"},{"level":2,"title":"JWT(Json web token)","slug":"jwt-json-web-token"},{"level":2,"title":"SSO : Single Sign On","slug":"sso-single-sign-on"},{"level":3,"title":"\u540C\u57DF\u4E0B\u7684\u5355\u70B9\u767B\u5F55","slug":"\u540C\u57DF\u4E0B\u7684\u5355\u70B9\u767B\u5F55"},{"level":3,"title":"\u4E0D\u540C\u57DF\u4E0B\u7684\u5355\u70B9\u767B\u5F55","slug":"\u4E0D\u540C\u57DF\u4E0B\u7684\u5355\u70B9\u767B\u5F55"},{"level":2,"title":"OAuth2","slug":"oauth2"},{"level":3,"title":"\u8FD0\u884C\u6D41\u7A0B","slug":"\u8FD0\u884C\u6D41\u7A0B"}],"relativePath":"md/NodeJs/\u767B\u5F55\u65B9\u5F0F.md","lastUpdated":1638340958387}',s={},a=n(`<h1 id="\u670D\u52A1\u7684\u767B\u5F55\u65B9\u5F0F" tabindex="-1">\u670D\u52A1\u7684\u767B\u5F55\u65B9\u5F0F <a class="header-anchor" href="#\u670D\u52A1\u7684\u767B\u5F55\u65B9\u5F0F" aria-hidden="true">#</a></h1><h2 id="cookie" tabindex="-1"><code>Cookie</code> <a class="header-anchor" href="#cookie" aria-hidden="true">#</a></h2><p><strong>\u539F\u7406\uFF1A</strong></p><ol><li>\u5BA2\u6237\u7AEF\u901A\u8FC7\u8BF7\u6C42\u5C06\u8D26\u6237\u5BC6\u7801\u53D1\u9001\u5230\u670D\u52A1\u7AEF</li><li>\u670D\u52A1\u7AEF\u9A8C\u8BC1\u8D26\u6237\u5BC6\u7801 <ul><li>\u9A8C\u8BC1\u6210\u529F\u8FD4\u56DE\u52A0\u5BC6\u7684<code>set-cookie</code>\u54CD\u5E94\u8BF7\u6C42\u5934\uFF0C\u5C06\u7528\u6237\u4FE1\u606F\u8BBE\u7F6E\u5230\u5BA2\u6237\u7AEF<code>cookie</code>\u4E2D</li><li>\u9A8C\u8BC1\u5931\u8D25\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F</li></ul></li><li>\u4E4B\u540E\u5BA2\u6237\u7AEF\u53D1\u9001\u7684\u8BF7\u6C42\u90FD\u4F1A\u81EA\u52A8\u643A\u5E26\u6B64<code>cookie</code>\uFF0C\u670D\u52A1\u7AEF\u901A\u8FC7<code>cookie</code>\u83B7\u5F97\u7528\u6237\u7684\u4FE1\u606F <ul><li>\u5728\u7528\u6237\u4FE1\u606F\u4E2D\u53EF\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4</li><li>\u8FC7\u671F\u6216\u8005\u89E3\u5BC6\u5931\u8D25</li></ul></li></ol><p>\u7279\u70B9\uFF1A</p><ul><li>\u50A8\u5B58\u5728\u6D4F\u89C8\u5668\u7684\u4E00\u6BB5\u5B57\u7B26\u4E32\uFF0C\u4E0D\u5927\u4E8E5kb</li><li>\u8DE8\u57DF\u4E0D\u5171\u4EAB</li><li>\u670D\u52A1\u7AEF\u53EF\u4EE5\u4FEE\u6539<code>cookie</code>\u8FD4\u56DE</li><li>\u6D4F\u89C8\u5668\u53EF\u4EE5\u4FEE\u6539<code>cookie</code>\uFF08\u6709\u9650\u5236\uFF09</li><li>\u53D1\u9001<code>http</code>\u8BF7\u6C42\u81EA\u52A8\u643A\u5E26\u5BF9\u5E94\u8BF7\u6C42\u57DF<code>cookie</code>\u53D1\u9001\u7ED9\u670D\u52A1\u7AEF</li></ul><p>node\u64CD\u4F5C\uFF1A</p><ul><li><code>req.headers.cookie</code></li></ul><p>\u6D4F\u89C8\u5668\u64CD\u4F5C\uFF1A</p><ul><li><code>document.cookie</code></li></ul><p>\u53C2\u6570\uFF1A</p><ul><li>\u4E0D\u5141\u8BB8\u5BA2\u6237\u7AEF\u4FEE\u6539\uFF1A<code>httpOnly</code></li><li>\u8FC7\u671F\u65F6\u95F4\uFF0C<code>GMT</code>\u683C\u5F0F\uFF1A<code>expires</code></li></ul><p>\u5B58\u5728\u7684\u95EE\u9898\uFF1A</p><ul><li>\u66B4\u9732\u7528\u6237\u4FE1\u606F\u7B49\u654F\u611F\u6570\u636E</li></ul><h2 id="\u57FA\u4E8E-cookie-\u7684-session" tabindex="-1">\u57FA\u4E8E <code>Cookie</code> \u7684 <code>Session</code> <a class="header-anchor" href="#\u57FA\u4E8E-cookie-\u7684-session" aria-hidden="true">#</a></h2><p>\u89E3\u51B3<code>cookie</code>\u5B58\u5728\u7684\u66B4\u9732\u95EE\u9898\u3002</p><p><strong>\u539F\u7406\uFF1A</strong></p><ol><li>\u5BF9\u7528\u6237\u4FE1\u606F\u7B49\u654F\u611F\u6570\u636E\u751F\u6210\u5BF9\u5E94\u7684<code>token</code>\uFF0C\u5C06\u7528\u6237\u4FE1\u606F\u4FDD\u5B58\u5728\u670D\u52A1\u7AEF<code>session</code>\uFF0C\u5C06<code>token</code>\u8BBE\u7F6E\u5230\u5BA2\u6237\u7AEF<code>cookie</code></li><li>\u5BA2\u6237\u7AEF\u8BF7\u6C42\u65F6\u4F1A\u643A\u5E26\u4FDD\u5B58\u6709<code>token</code>\u7684<code>cookie</code>\u5230\u670D\u52A1\u7AEF\uFF0C\u670D\u52A1\u7AEF\u6839\u636E<code>token</code>\u67E5\u627E\u7F13\u5B58\u5728<code>session</code>\u4E2D\u7684\u7528\u6237\u4FE1\u606F</li></ol><p>\u7279\u70B9\uFF1A</p><ul><li>\u7528\u6237\u4FE1\u606F\u4FDD\u5B58\u5728\u670D\u52A1\u7AEF\uFF0C\u907F\u514D\u5C06\u654F\u611F\u6570\u636E\u53D1\u9001\u5230\u5BA2\u6237\u7AEF</li><li>\u65B9\u4FBF\u670D\u52A1\u7AEF\u5BF9\u7528\u6237\u8FDB\u884C\u7BA1\u7406</li><li>\u5360\u7528\u670D\u52A1\u7AEF\u5185\u5B58</li></ul><p>\u5B58\u5728\u7684\u95EE\u9898\uFF1A</p><ul><li><code>session</code>\u662F<code>js</code>\u53D8\u91CF\uFF0C\u653E\u5728\u8FDB\u7A0B\u5185\u5B58\u4E2D\uFF0C\u53D8\u91CF\u8FC7\u5927\u5185\u5B58\u4E0D\u8DB3\u600E\u4E48\u529E</li><li>\u8DE8\u57DF\u4E0D\u4F1A\u643A\u5E26<code>cookie</code>\uFF0C\u9700\u8981\u8BBE\u7F6E\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB<code>cors</code>\uFF0C\u5E76\u5728\u5BA2\u6237\u7AEF\u8BF7\u6C42\u914D\u7F6E\u4E2D\u8BBE\u7F6E\u8DE8\u57DF\u643A\u5E26<code>cookie</code>\u7684\u8BBE\u7F6E</li><li>\u64CD\u4F5C\u7CFB\u7EDF\u4F1A\u9650\u5236\u4E00\u4E2A\u8FDB\u7A0B\u7684\u6700\u5927\u53EF\u7528\u5185\u5B58</li><li>\u5982\u679C\u662F\u591A\u8FDB\u7A0B\u7684\uFF0C\u8FDB\u7A0B\u4E4B\u95F4\u7684\u5185\u5B58\u4E0D\u80FD\u5171\u4EAB</li></ul><p>\u5982\u4F55\u89E3\u51B3<code>session</code>\u5171\u4EAB\u7684\u95EE\u9898\uFF1A</p><ol><li>\u6570\u636E\u6301\u4E45\u5316 <ul><li>\u4F7F\u7528\u5171\u4EAB\u5185\u5B58\uFF1A<code>redis</code></li><li>\u5199\u5165\u6570\u636E\u5E93</li></ul></li><li>\u4E0D\u4FDD\u5B58<code>session</code>\u6570\u636E\uFF0C\u5C06\u6570\u636E\u4FDD\u5B58\u5728\u5BA2\u6237\u7AEF <ul><li><code>jwt</code></li></ul></li></ol><h2 id="jwt-json-web-token" tabindex="-1"><code>JWT</code>(<code>Json web token</code>) <a class="header-anchor" href="#jwt-json-web-token" aria-hidden="true">#</a></h2><p>\u76F8\u5173\u6587\u7AE0\uFF1A</p><ul><li><a href="https://www.jianshu.com/p/576dbf44b2ae" target="_blank" rel="noopener noreferrer">\u4EC0\u4E48\u662F<code>JWT</code></a></li><li><a href="http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html" target="_blank" rel="noopener noreferrer"><code>JWT</code>\u5165\u95E8</a></li></ul><p>\u539F\u7406\uFF1A</p><ol><li>\u670D\u52A1\u7AEF\u8BA4\u8BC1\u540E\uFF0C\u751F\u6210\u7528\u6237\u6570\u636E\u5BF9\u8C61\uFF0C\u5E76\u4F7F\u7528\u5BF9\u5E94\u89C4\u5219\u7B7E\u540D\u8FD9\u4E2A\u5BF9\u8C61\u83B7\u5F97\u4E00\u4E2A\u52A0\u5BC6\u5B57\u7B26\u4E32<code>JWT</code>\uFF0C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF</li><li>\u5BA2\u6237\u7AEF\u81EA\u5DF1\u5C06<code>token</code>\u4FDD\u5B58\u5728<code>cookie</code>\u6216\u8005<code>storage</code>\u4E2D</li><li>\u5BA2\u6237\u7AEF\u5728\u8BF7\u6C42\u65F6\u624B\u52A8\u5C06<code>JWT</code>\u9644\u5728\u8BF7\u6C42\u5934\u4E2D\uFF0C\u901A\u5E38\u4E3A<code>Authorization: Bearer &lt;token&gt;</code></li><li>\u670D\u52A1\u7AEF\u83B7\u53D6\u5230\u5BA2\u6237\u7AEF\u53D1\u9001\u7684<code>token</code>\uFF0C\u89E3\u5BC6\u9A8C\u8BC1<code>token</code>\u7684\u6709\u6548\u6027\uFF0C\u4F7F\u7528\u9644\u5E26\u7684\u6570\u636E</li></ol><p><strong><code>JWT</code>\u7684\u7ED3\u6784</strong></p><div class="language-"><pre><code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ
</code></pre></div><p>\u5B83\u88AB<code>.</code>\u5206\u5272\u4E3A\u4E09\u4E2A\u90E8\u5206\uFF1A<code>header.payload.signature</code></p><p><strong><code>header</code></strong> \u5305\u542B\u4E24\u90E8\u5206\u4FE1\u606F\uFF1A</p><ul><li>\u58F0\u660E\u7C7B\u578B\uFF1A<code>JWT</code></li><li>\u58F0\u660E\u52A0\u5BC6\u7B97\u6CD5\uFF1A\u901A\u5E38\u7528<code>HMAC SHA256</code></li></ul><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;typ&quot;</span><span class="token operator">:</span><span class="token string">&quot;JWT&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;alg&quot;</span><span class="token operator">:</span><span class="token string">&quot;HS256&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5BF9\u8FD9\u90E8\u5206\u5185\u5BB9\u8FDB\u884C<code>base64</code>\u52A0\u5BC6\uFF0C\u5F97\u5230<code>header</code>\u5B57\u7B26\u4E32\uFF1A</p><div class="language-"><pre><code>eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9
</code></pre></div><p><strong><code>payload</code></strong> \u5B58\u653E\u6709\u6548\u4FE1\u606F\u7684\u5730\u65B9\uFF0C\u5305\u542B\u4E09\u4E2A\u90E8\u5206\u5185\u5BB9</p><ul><li>\u6807\u51C6\u58F0\u660E</li><li>\u516C\u5171\u58F0\u660E</li><li>\u79C1\u6709\u58F0\u660E</li></ul><p>\u6807\u51C6\u58F0\u660E\uFF08\u5EFA\u8BAE\u4F46\u4E0D\u5F3A\u5236\u4F7F\u7528\uFF09\uFF1A</p><ul><li><code>iss</code>: <code>jwt</code>\u7B7E\u53D1\u8005</li><li><code>sub</code>: <code>jwt</code>\u6240\u9762\u5411\u7684\u7528\u6237</li><li><code>aud</code>: \u63A5\u6536<code>jwt</code>\u7684\u4E00\u65B9</li><li><code>exp</code>: <code>jwt</code>\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u8FD9\u4E2A\u8FC7\u671F\u65F6\u95F4\u5FC5\u987B\u8981\u5927\u4E8E\u7B7E\u53D1\u65F6\u95F4</li><li><code>nbf</code>: \u5B9A\u4E49\u5728\u4EC0\u4E48\u65F6\u95F4\u4E4B\u524D\uFF0C\u8BE5<code>jwt</code>\u90FD\u662F\u4E0D\u53EF\u7528\u7684.</li><li><code>iat</code>: <code>jwt</code>\u7684\u7B7E\u53D1\u65F6\u95F4</li><li><code>jti</code>: <code>jwt</code>\u7684\u552F\u4E00\u8EAB\u4EFD\u6807\u8BC6\uFF0C\u4E3B\u8981\u7528\u6765\u4F5C\u4E3A\u4E00\u6B21\u6027<code>token</code>,\u4ECE\u800C\u56DE\u907F\u91CD\u653E\u653B\u51FB\u3002</li></ul><p>\u516C\u5171\u58F0\u660E\uFF08\u4EFB\u610F\uFF09\uFF1A \u6DFB\u52A0\u4E1A\u52A1\u76F8\u5173\u7684\u5FC5\u8981\u4FE1\u606F</p><p>\u79C1\u6709\u58F0\u660E\uFF08\u4EFB\u610F\uFF09\uFF1A \u6DFB\u52A0\u4E0E\u4E1A\u52A1\u65E0\u5173\u7684\u4FE1\u606F</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;sub&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1234567890&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u6807\u51C6</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;John Doe&quot;</span><span class="token punctuation">,</span>   <span class="token comment">// \u516C\u5171</span>
  <span class="token property">&quot;admin&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>         <span class="token comment">// \u79C1\u6709</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5BF9\u8FD9\u90E8\u5206\u5185\u5BB9\u8FDB\u884C<code>base64</code>\u52A0\u5BC6\uFF0C\u5F97\u5230<code>payload</code>\u5B57\u7B26\u4E32\uFF1A</p><div class="language-"><pre><code>eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9
</code></pre></div><p><strong><code>signature</code></strong> \u5BF9\u524D\u4E24\u90E8\u5206\u7684\u7B7E\u540D\uFF0C\u9632\u6B62\u6570\u636E\u7BE1\u6539</p><ol><li>\u9996\u5148\u6307\u5B9A\u4E00\u4E2A\u79C1\u6709\u5BC6\u94A5\uFF1A<code>secret</code>\uFF0C\u4FDD\u5B58\u5728\u670D\u52A1\u7AEF</li><li>\u4F7F\u7528<code>.</code>\u7EC4\u5408<code>base64</code>\u5904\u7406\u540E\u7684<code>header</code>\u548C<code>payload</code>\uFF0C\u5F97\u5230\u4E00\u4E2A\u5F85\u52A0\u5BC6\u7684\u5B57\u7B26\u4E32</li><li>\u4F7F\u7528<code>header</code>\u4E2D\u58F0\u660E\u7684\u52A0\u5BC6\u65B9\u5F0F\u901A\u8FC7<code>secret</code>\u5BF9\u5F85\u52A0\u5BC6\u7684\u5B57\u7B26\u4E32\u52A0\u76D0\u52A0\u5BC6\u5F97\u5230\u7B2C\u4E09\u90E8\u5206\uFF1A<code>signature</code></li><li>\u6700\u7EC8\u53EF\u4EE5\u7EC4\u5408\u6210<code>jwt</code></li></ol><div class="language-javascript"><pre><code><span class="token keyword">const</span> secret <span class="token operator">=</span> <span class="token string">&#39;abc123&#39;</span>
<span class="token keyword">const</span> encodedString <span class="token operator">=</span> <span class="token function">base64</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;.&#39;</span> <span class="token function">base64</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span>
<span class="token keyword">const</span> signature <span class="token operator">=</span> <span class="token constant">HMACSHA256</span><span class="token punctuation">(</span>encodedString<span class="token punctuation">,</span> secret<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> jwt <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">base64</span><span class="token punctuation">(</span>header<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">base64</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>signature<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
</code></pre></div><p>\u4F18\u70B9\uFF1A</p><ul><li>\u6839\u636E<code>json</code>\u7684\u901A\u7528\u6027\uFF0C\u53EF\u4EE5\u652F\u6301\u591A\u8BED\u8A00\u670D\u52A1\u7AEF</li><li>\u6784\u6210\u7B80\u5355\uFF0C\u65B9\u4FBF\u4F20\u8F93</li><li>\u4E0D\u5728\u670D\u52A1\u7AEF\u4FDD\u5B58\u4F1A\u8BDD\u4FE1\u606F\uFF0C\u4FBF\u4E8E\u6269\u5C55</li></ul><p>\u7F3A\u70B9\uFF1A</p><ul><li><code>payload</code>\u662F<code>base64</code>\u5BF9\u79F0\u52A0\u5BC6\uFF0C<code>jwt</code>\u4E0D\u52A0\u5BC6\u4E0D\u5E94\u8BE5\u4FDD\u5B58\u654F\u611F\u4FE1\u606F\u5230<code>payload</code></li><li>\u65E0\u6CD5\u5B9E\u65F6\u7BA1\u7406\u7528\u6237\u6570\u636E</li></ul><h2 id="sso-single-sign-on" tabindex="-1"><code>SSO</code> : <code>Single Sign On</code> <a class="header-anchor" href="#sso-single-sign-on" aria-hidden="true">#</a></h2><p>\u5728\u591A\u4E2A\u5E94\u7528\u7CFB\u7EDF\u4E2D\uFF0C\u53EA\u9700\u8981\u767B\u5F55\u4E00\u6B21\uFF0C\u5C31\u53EF\u4EE5\u8BBF\u95EE\u5176\u4ED6\u76F8\u4E92\u4FE1\u4EFB\u7684\u5E94\u7528\u7CFB\u7EDF\u3002</p><h3 id="\u540C\u57DF\u4E0B\u7684\u5355\u70B9\u767B\u5F55" tabindex="-1">\u540C\u57DF\u4E0B\u7684\u5355\u70B9\u767B\u5F55 <a class="header-anchor" href="#\u540C\u57DF\u4E0B\u7684\u5355\u70B9\u767B\u5F55" aria-hidden="true">#</a></h3><p>\u4E00\u4E2A\u4F01\u4E1A\u4E00\u822C\u60C5\u51B5\u4E0B\u53EA\u6709\u4E00\u4E2A\u57DF\u540D\uFF0C\u901A\u8FC7\u4E8C\u7EA7\u57DF\u540D\u533A\u5206\u4E0D\u540C\u7684\u7CFB\u7EDF\u3002 \u6BD4\u5982\u6211\u4EEC\u6709\u4E2A\u57DF\u540D\u53EB\u505A\uFF1A<code>a.com</code>\uFF0C\u540C\u65F6\u6709\u4E24\u4E2A\u4E1A\u52A1\u7CFB\u7EDF\u5206\u522B\u4E3A\uFF1A<code>app1.a.com</code> \u548C <code>app2.a.com</code>\u3002 \u6211\u4EEC\u8981\u505A\u5355\u70B9\u767B\u5F55\uFF0C\u9700\u8981\u4E00\u4E2A\u767B\u5F55\u7CFB\u7EDF\uFF0C\u53EB\u505A\uFF1A<code>sso.a.com</code>\u3002 \u6211\u4EEC\u9700\u8981\u5728<code>sso.a.com</code>\u767B\u5F55\u540E\u5728 <code>app1.a.com</code> \u548C <code>app2.a.com</code> \u4E5F\u5C31\u767B\u5F55\u4E86\u3002</p><ul><li>\u5982\u4F55\u5728\u4ED6\u4EEC\u4E4B\u95F4\u5171\u4EAB\u767B\u5F55\u72B6\u6001\uFF1F <ul><li><code>cookie</code><code>domain</code>\u9009\u9879\u8868\u793A\u7684\u662F<code>cookie</code>\u6240\u5728\u7684\u57DF\uFF0C\u9ED8\u8BA4\u4E3A\u8BF7\u6C42\u7684\u5730\u5740\uFF0C\u5C06<code>domain</code>\u8BBE\u7F6E\u4E3A<code>.a.com</code>\u5C31\u53EF\u4EE5\u4F7F\u4E8C\u7EA7\u57DF\u540D\u90FD\u53EF\u4EE5\u8BBF\u95EE\u5230\u8FD9\u4E2A<code>cookie</code></li></ul></li></ul><h3 id="\u4E0D\u540C\u57DF\u4E0B\u7684\u5355\u70B9\u767B\u5F55" tabindex="-1">\u4E0D\u540C\u57DF\u4E0B\u7684\u5355\u70B9\u767B\u5F55 <a class="header-anchor" href="#\u4E0D\u540C\u57DF\u4E0B\u7684\u5355\u70B9\u767B\u5F55" aria-hidden="true">#</a></h3><p>\u9996\u6B21\u767B\u5F55\u6D41\u7A0B\uFF1A</p><ol><li>\u7528\u6237\u8BBF\u95EE<code>app1</code>\u7CFB\u7EDF\uFF0C<code>app1</code>\u7CFB\u7EDF\u662F\u9700\u8981\u767B\u5F55\u7684\uFF0C\u4F46\u7528\u6237\u73B0\u5728\u6CA1\u6709\u767B\u5F55\u3002</li><li>\u8DF3\u8F6C\u5230<code>SSO</code>\u767B\u5F55\u7CFB\u7EDF\uFF0C<code>SSO</code>\u7CFB\u7EDF\u4E5F\u6CA1\u6709\u767B\u5F55\uFF0C\u5F39\u51FA\u7528\u6237\u767B\u5F55\u9875\u3002</li><li>\u7528\u6237\u586B\u5199\u7528\u6237\u540D\u3001\u5BC6\u7801\uFF0C<code>SSO</code>\u7CFB\u7EDF\u8FDB\u884C\u8BA4\u8BC1\u540E\uFF0C\u5C06\u767B\u5F55\u72B6\u6001\u5199\u5165<code>SSO</code>\u7684<code>session</code>\uFF0C\u6D4F\u89C8\u5668\uFF08<code>Browser</code>\uFF09\u4E2D\u5199\u5165<code>SSO</code>\u57DF\u4E0B\u7684<code>Cookie</code>\u3002</li><li><code>SSO</code>\u7CFB\u7EDF\u767B\u5F55\u5B8C\u6210\u540E\u4F1A\u751F\u6210\u4E00\u4E2A<code>ST</code>\uFF08<code>Service Ticket</code>\uFF09\uFF0C<code>SSO</code>\u767B\u5F55\u7CFB\u7EDF\u643A\u5E26<code>ST</code>\u8DF3\u8F6C\u5230<code>app1</code>\u7CFB\u7EDF\u3002</li><li><code>app1</code>\u7CFB\u7EDF\u62FF\u5230ST\u540E\uFF0C\u4ECE\u540E\u53F0\u5411<code>SSO</code>\u53D1\u9001\u8BF7\u6C42\uFF0C\u9A8C\u8BC1<code>ST</code>\u662F\u5426\u6709\u6548\u3002</li><li>\u9A8C\u8BC1\u901A\u8FC7\u540E\uFF0C<code>app1</code>\u7CFB\u7EDF\u5C06\u767B\u5F55\u72B6\u6001\u5199\u5165<code>session</code>\u5E76\u8BBE\u7F6E<code>app1</code>\u57DF\u4E0B\u7684<code>Cookie</code>\u3002</li></ol><p>\u5176\u4ED6\u7CFB\u7EDF\u767B\u5F55\u6D41\u7A0B\uFF1A</p><ol><li>\u4E4B\u540E\u672A\u767B\u5F55\u7684<code>app2</code>\u3001<code>app3</code>\u4F1A\u8DF3\u8F6C<code>SSO</code>\u7CFB\u7EDF</li><li>\u6B64\u65F6<code>SSO</code>\u5DF2\u7ECF\u767B\u5F55\u5B8C\u6210\uFF0C\u4E0D\u9700\u8981\u91CD\u65B0\u767B\u5F55\u9A8C\u8BC1</li><li>\u91CD\u590D\u9996\u6B21\u767B\u5F55\u7684 4-5 \u6B65\u9AA4</li></ol><h2 id="oauth2" tabindex="-1"><code>OAuth2</code> <a class="header-anchor" href="#oauth2" aria-hidden="true">#</a></h2><p>\u7B2C\u4E09\u65B9\u9274\u6743\u7684\u5E38\u7528\u65B9\u5F0F</p><p>\u5E94\u7528\u573A\u666F\uFF1A\u5E94\u7528\u63D0\u4F9B\u7ED9\u7B2C\u4E09\u65B9\u5E94\u7528\u90E8\u5206\u4F7F\u7528\u6743\u9650\uFF0C\u5982\uFF1Aqq\u6388\u6743\u7F51\u6613\u4E91\u97F3\u4E50\uFF0C\u4F7F\u7F51\u6613\u4E91\u97F3\u4E50\u83B7\u5F97qq\u7684\u7528\u6237\u540D\u548C\u5934\u50CF</p><p><code>OAuth2</code> \u4E2D\u51E0\u4E2A\u540D\u8BCD\uFF1A</p><ul><li><code>Third-party application</code>\uFF1A\u7B2C\u4E09\u65B9\u5E94\u7528\u7A0B\u5E8F\uFF0C\u672C\u6587\u4E2D\u53C8\u79F0&quot;\u5BA2\u6237\u7AEF&quot;\uFF0C\u6307\u4F8B\u5B50\u4E2D\u7684 <strong>\u7F51\u6613\u4E91\u97F3\u4E50</strong></li><li><code>HTTP service</code>\uFF1AHTTP\u670D\u52A1\u63D0\u4F9B\u5546\uFF0C\u6307 <strong><code>qq</code></strong></li><li><code>Resource Owner</code>\uFF1A\u8D44\u6E90\u6240\u6709\u8005\uFF0C\u6307<strong>\u7528\u6237</strong></li><li><code>User Agent</code>\uFF1A\u7528\u6237\u4EE3\u7406\uFF0C\u6307<strong>\u6D4F\u89C8\u5668</strong></li><li><code>Authorization server</code>\uFF1A<strong>\u8BA4\u8BC1\u670D\u52A1\u5668</strong>\uFF0C\u5373\u670D\u52A1\u63D0\u4F9B\u5546\uFF08<strong><code>qq</code></strong>\uFF09\u4E13\u95E8\u7528\u6765\u5904\u7406\u8BA4\u8BC1\u7684\u670D\u52A1\u5668\u3002</li><li><code>Resource server</code>\uFF1A\u8D44\u6E90\u670D\u52A1\u5668\uFF0C\u5373\u670D\u52A1\u63D0\u4F9B\u5546\uFF08<strong><code>qq</code></strong>\uFF09\u5B58\u653E\u7528\u6237\u751F\u6210\u7684\u8D44\u6E90\u7684\u670D\u52A1\u5668\u3002</li></ul><h3 id="\u8FD0\u884C\u6D41\u7A0B" tabindex="-1">\u8FD0\u884C\u6D41\u7A0B <a class="header-anchor" href="#\u8FD0\u884C\u6D41\u7A0B" aria-hidden="true">#</a></h3><ol><li>\u7528\u6237\u6253\u5F00\u5BA2\u6237\u7AEF\u4EE5\u540E\uFF0C\u5BA2\u6237\u7AEF\u8981\u6C42\u7528\u6237\u7ED9\u4E88\u6388\u6743\u3002</li><li>\u7528\u6237\u540C\u610F\u7ED9\u4E88\u5BA2\u6237\u7AEF\u6388\u6743\u3002</li><li>\u5BA2\u6237\u7AEF\u4F7F\u7528\u4E0A\u4E00\u6B65\u83B7\u5F97\u7684\u6388\u6743\uFF0C\u5411\u8BA4\u8BC1\u670D\u52A1\u5668\u7533\u8BF7\u4EE4\u724C\u3002</li><li>\u8BA4\u8BC1\u670D\u52A1\u5668\u5BF9\u5BA2\u6237\u7AEF\u8FDB\u884C\u8BA4\u8BC1\u4EE5\u540E\uFF0C\u786E\u8BA4\u65E0\u8BEF\uFF0C\u540C\u610F\u53D1\u653E\u4EE4\u724C\u3002</li><li>\u5BA2\u6237\u7AEF\u4F7F\u7528\u4EE4\u724C\uFF0C\u5411\u8D44\u6E90\u670D\u52A1\u5668\u7533\u8BF7\u83B7\u53D6\u8D44\u6E90\u3002</li><li>\u8D44\u6E90\u670D\u52A1\u5668\u786E\u8BA4\u4EE4\u724C\u65E0\u8BEF\uFF0C\u540C\u610F\u5411\u5BA2\u6237\u7AEF\u5F00\u653E\u8D44\u6E90\u3002</li></ol><p>\u5728\u6B65\u9AA42\u4E2D\uFF0C\u5BA2\u6237\u7AEF\u6388\u6743\u7684\u65B9\u5F0F\u6709\u591A\u79CD\uFF1A</p><h4 id="\u6388\u6743\u7801\u6A21\u5F0F" tabindex="-1">\u6388\u6743\u7801\u6A21\u5F0F <a class="header-anchor" href="#\u6388\u6743\u7801\u6A21\u5F0F" aria-hidden="true">#</a></h4><ol><li>\u7528\u6237\u8BBF\u95EE\u7F51\u6613\u4E91\u97F3\u4E50\uFF0C\u7F51\u6613\u4E91\u97F3\u4E50\u8981\u6C42\u7528\u6237\u63D0\u4F9Bqq\u7684\u6388\u6743\uFF0C\u6307\u5B9A\u4E00\u4E2A&quot;<strong>\u91CD\u5B9A\u5411<code>URI</code></strong>&quot;\uFF0C\u5E76\u8DF3\u8F6C\u5230<code>qq</code>\u8BBE\u7F6E\u7684\u6388\u6743\u767B\u5F55\u9875\u9762</li><li>\u5728<code>qq</code>\u8BBE\u7F6E\u7684\u6388\u6743\u767B\u5F55\u9875\u9762\uFF0C\u7528\u6237\u9009\u62E9\u6388\u6743\u8303\u56F4\uFF0C\u5B8C\u6210\u9A8C\u8BC1\u540E<code>qq</code><strong>\u8BA4\u8BC1\u670D\u52A1\u5668</strong>\u8FD4\u56DE\u4E00\u4E2A<strong>\u6388\u6743\u7801</strong>\uFF0C\u643A\u5E26<strong>\u6388\u6743\u7801</strong>\u8FD4\u56DE\u7F51\u6613\u4E91\u97F3\u4E50\u6307\u5B9A\u7684&quot;<strong>\u91CD\u5B9A\u5411<code>URI</code></strong>&quot;</li><li>\u7F51\u6613\u4E91\u97F3\u4E50\u83B7\u5F97<strong>\u6388\u6743\u7801</strong>\uFF0C\u9644\u4E0A\u6307\u5B9A\u7684&quot;<strong>\u91CD\u5B9A\u5411<code>URI</code></strong>&quot;\uFF0C\u5411\u8BA4\u8BC1\u670D\u52A1\u5668\u7533\u8BF7<strong>\u4EE4\u724C</strong></li><li>\u8BA4\u8BC1\u670D\u52A1\u5668\u6838\u5BF9\u4E86<strong>\u6388\u6743\u7801</strong>\u548C&quot;<strong>\u91CD\u5B9A\u5411<code>URI</code></strong>&quot;\uFF0C\u786E\u8BA4\u65E0\u8BEF\u540E\uFF0C\u5411\u5BA2\u6237\u7AEF\u53D1\u9001<strong>\u8BBF\u95EE\u4EE4\u724C</strong>\uFF08<code>access token</code>\uFF09\u548C<strong>\u66F4\u65B0\u4EE4\u724C</strong>\uFF08<code>refresh toke</code>n\uFF09\u3002</li></ol><p>1\u6B65\u9AA4\u4E2D\uFF0C\u6388\u6743\u767B\u5F55\u9875\u9762\uFF0C\u5305\u542B\u4EE5\u4E0B\u53C2\u6570\uFF1A</p><ul><li><code>response_type</code>\uFF1A\u8868\u793A\u6388\u6743\u7C7B\u578B\uFF0C\u5FC5\u9009\u9879\uFF0C\u6B64\u5904\u7684\u503C\u56FA\u5B9A\u4E3A&quot;code&quot;</li><li><code>client_id</code>\uFF1A\u8868\u793A\u5BA2\u6237\u7AEF\u7684ID\uFF0C\u5FC5\u9009\u9879</li><li><code>redirect_uri</code>\uFF1A\u8868\u793A\u91CD\u5B9A\u5411<code>URI</code>\uFF0C\u53EF\u9009\u9879</li><li><code>scope</code>\uFF1A\u8868\u793A\u7533\u8BF7\u7684\u6743\u9650\u8303\u56F4\uFF0C\u53EF\u9009\u9879</li><li><code>state</code>\uFF1A\u8868\u793A\u5BA2\u6237\u7AEF\u7684\u5F53\u524D\u72B6\u6001\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4EFB\u610F\u503C\uFF0C\u8BA4\u8BC1\u670D\u52A1\u5668\u4F1A\u539F\u5C01\u4E0D\u52A8\u5730\u8FD4\u56DE\u8FD9\u4E2A\u503C\uFF0C\u907F\u514D<code>csrf</code>\u3002</li></ul>`,75),d=[a];function t(i,l,p,r,u,k){return c(),e("div",null,d)}var q=o(s,[["render",t]]);export{h as __pageData,q as default};
