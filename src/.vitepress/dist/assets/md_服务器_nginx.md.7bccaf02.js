import{_ as n,c as s,o as a,a as e}from"./app.dfde2fab.js";const w='{"title":"Nginx","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":2,"title":"\u5E38\u7528\u547D\u4EE4","slug":"\u5E38\u7528\u547D\u4EE4"},{"level":2,"title":"\u57FA\u7840\u914D\u7F6E","slug":"\u57FA\u7840\u914D\u7F6E"},{"level":2,"title":"\u5E38\u7528\u670D\u52A1\u914D\u7F6E","slug":"\u5E38\u7528\u670D\u52A1\u914D\u7F6E"}],"relativePath":"md/\u670D\u52A1\u5668/nginx.md","lastUpdated":1642815815671}',p={},t=e(`<h1 id="nginx" tabindex="-1"><code>Nginx</code> <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h1><p><code>nginx</code> \u4E00\u76F4\u662F<code>web server</code> \u7684\u5FC5\u5907\u795E\u5668\uFF0C\u4EE5\u7A33\u5B9A\u548C\u9AD8\u6027\u80FD\u8457\u79F0</p><ul><li>\u9759\u6001\u670D\u52A1\uFF1A\u63D0\u4F9B\u8BBF\u95EE\u9759\u6001\u6587\u4EF6\u7684\u670D\u52A1</li><li>\u53CD\u5411\u4EE3\u7406\uFF1A\u63D0\u4F9B\u672C\u5730\u670D\u52A1\u7684\u4EE3\u7406</li><li>\u8D1F\u8F7D\u5747\u8861</li><li><code>access log</code></li></ul><h2 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h2><p><a href="https://www.runoob.com/linux/nginx-install-setup.html" target="_blank" rel="noopener noreferrer">\u70B9\u51FB\u67E5\u770B\u5B89\u88C5\u6559\u7A0B</a></p><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1">\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h2><ul><li><code>nginx</code>\uFF1A\u542F\u52A8</li><li><code>nginx -s reload</code>\uFF1A\u91CD\u542F</li><li><code>nginx -s stop</code>\uFF1A\u505C\u6B62</li><li><code>nginx -t</code>\uFF1A\u6D4B\u8BD5\u914D\u7F6E\u6587\u4EF6</li><li><code>nginx -c xxx.conf</code>\uFF1A\u6307\u5B9A\u914D\u7F6E\u6587\u4EF6\u542F\u52A8</li></ul><h2 id="\u57FA\u7840\u914D\u7F6E" tabindex="-1">\u57FA\u7840\u914D\u7F6E <a class="header-anchor" href="#\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a></h2><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
  <span class="token comment"># \u5F00\u542Fgzip</span>
  <span class="token directive"><span class="token keyword">gzip</span>  <span class="token boolean">on</span></span><span class="token punctuation">;</span>

  <span class="token comment">#\u542F\u7528gzip\u538B\u7F29\u7684\u6700\u5C0F\u6587\u4EF6</span>
  <span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1k</span></span><span class="token punctuation">;</span>

  <span class="token comment">#gzip \u538B\u7F29\u7EA7\u522B\uFF0C 1-10\uFF0C\u6570\u5B57\u8D8A\u5927\u538B\u7F29\u8D8A\u597D\uFF0C\u4F46cpu\u6D88\u8017\u8D8A\u9AD8,\u4E14\u538B\u7F29\u6548\u679C\u4E0D\u4F1A\u660E\u663E\u63D0\u5347\uFF0C\u4E00\u822C\u8BBE\u7F6E\u57282-4</span>
  <span class="token directive"><span class="token keyword">gzip_comp_level</span> <span class="token number">4</span></span><span class="token punctuation">;</span>

  <span class="token comment">#\u538B\u7F29\u7684\u6587\u4EF6\u7C7B\u578B</span>
  <span class="token directive"><span class="token keyword">gzip_types</span> text/css application/javascript application/x-javascript text/javascript  application/octet-stream application/font-woff</span><span class="token punctuation">;</span>

  <span class="token comment"># \u6839\u636E\u8FD4\u56DE\u7684 Content-Type \u6765\u51B3\u5B9A expires</span>
  <span class="token directive"><span class="token keyword">map</span> <span class="token variable">$sent_http_content_type</span> <span class="token variable">$expires</span></span> <span class="token punctuation">{</span>
      &quot;text/html&quot;                 <span class="token directive"><span class="token keyword">epoch</span></span><span class="token punctuation">;</span>
      &quot;text/html<span class="token punctuation">;</span> charset=utf-8&quot;  <span class="token directive"><span class="token keyword">epoch</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">default</span>                     <span class="token boolean">off</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u5E38\u7528\u670D\u52A1\u914D\u7F6E" tabindex="-1">\u5E38\u7528\u670D\u52A1\u914D\u7F6E <a class="header-anchor" href="#\u5E38\u7528\u670D\u52A1\u914D\u7F6E" aria-hidden="true">#</a></h2><ul><li>\u9759\u6001\u670D\u52A1</li></ul><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">server_name</span>  site.com</span><span class="token punctuation">;</span>
      <span class="token comment"># \u5C06\u672C\u5730\u7684\u4E00\u4E2A\u6587\u4EF6\u5939\u4F5C\u4E3A\u6240\u6709 url \u8BF7\u6C42\u7684\u6839\u8DEF\u5F84</span>
      <span class="token comment"># \u6BD4\u5982\u7528\u6237\u8BF7\u6C42\u4E86\u4E00\u4E2A localhost/test,\u90A3\u4E48 nginx \u5C31\u4F1A\u53BB\u9700\u627E /usr/share/nginx/html \u6587\u4EF6\u5939\u4E0B\u7684 test \u6587\u4EF6\u8FD4\u56DE\u3002</span>
      <span class="token directive"><span class="token keyword">root</span> /usr/share/nginx/html</span><span class="token punctuation">;</span>
      <span class="token comment"># \u9ED8\u8BA4\u67E5\u627E\u8DEF\u5F84\u4E0B\u7684\u6587\u4EF6\u8FD4\u56DE</span>
      <span class="token directive"><span class="token keyword">index</span> index.html index.htm</span><span class="token punctuation">;</span>

      <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">try_files</span> <span class="token variable">$uri</span> <span class="token variable">$uri</span>/ =404</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u4E0D\u5E26<code>www</code>\u7684\u57DF\u540D\u91CD\u5B9A\u5411\u5230\u5E26<code>www</code>\u7684\u57DF\u540D</li></ul><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">server_name</span>  site.com</span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">return</span>       <span class="token number">301</span> http://www.site.com<span class="token variable">$request_uri</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u63A5\u53E3\u670D\u52A1</li></ul><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">server_name</span>  www.site.com</span><span class="token punctuation">;</span>

      <span class="token comment"># api path</span>
      <span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
          <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:5301/</span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span>:5301</span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> x-forwarded-for  <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token directive"><span class="token keyword">location</span> /console-api/</span> <span class="token punctuation">{</span>
          <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:5302/</span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span>:5302</span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> x-forwarded-for  <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u670D\u52A1\u7AEF\u6E32\u67D3\u4E3B\u7AD9</li></ul><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">listen</span>          <span class="token number">80</span></span><span class="token punctuation">;</span>             <span class="token comment"># the port nginx is listening on</span>
      <span class="token directive"><span class="token keyword">server_name</span>     www.site.com</span><span class="token punctuation">;</span>    <span class="token comment"># setup your domain here</span>

      <span class="token directive"><span class="token keyword">gzip</span>            <span class="token boolean">on</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">gzip_types</span>      text/plain application/xml text/css application/javascript</span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1000</span></span><span class="token punctuation">;</span>

      <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
          <span class="token directive"><span class="token keyword">expires</span> <span class="token variable">$expires</span></span><span class="token punctuation">;</span>

          <span class="token directive"><span class="token keyword">proxy_redirect</span>                      <span class="token boolean">off</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> Host               <span class="token variable">$host</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP          <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For    <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto  <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_read_timeout</span>          <span class="token number">1m</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_connect_timeout</span>       <span class="token number">1m</span></span><span class="token punctuation">;</span>
          <span class="token directive"><span class="token keyword">proxy_pass</span>                          http://127.0.0.1:8501</span><span class="token punctuation">;</span> <span class="token comment"># set the adress of the Node.js instance here</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><code>cors</code></li></ul><div class="language-nginx"><pre><code><span class="token directive"><span class="token keyword">location</span> /video-api</span> <span class="token punctuation">{</span>

   <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$request_method</span> = <span class="token string">&#39;OPTIONS&#39;</span>)</span> <span class="token punctuation">{</span>
         <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Access-Control-Allow-Origin&#39;</span> <span class="token string">&#39;*&#39;</span> always</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Access-Control-Allow-Methods&#39;</span> <span class="token string">&#39;GET,POST,OPTIONS,PUT,DELETE&#39;</span> always</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Access-Control-Allow-Headers&#39;</span> <span class="token string">&#39;*&#39;</span> always</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Access-Control-Max-Age&#39;</span> <span class="token number">1728000</span> always</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Content-Length&#39;</span> <span class="token number">0</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">add_header</span> <span class="token string">&#39;Content-Type&#39;</span> <span class="token string">&#39;text/plain; charset=utf-8&#39;</span></span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">return</span> <span class="token number">204</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">proxy_pass</span> https://gb.guangxixinchan.cn/cn21-open/api</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,20),o=[t];function c(l,i,r,k,d,u){return a(),s("div",null,o)}var _=n(p,[["render",c]]);export{w as __pageData,_ as default};
