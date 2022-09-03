import { _ as n, c as a, o as s, a as e } from './app.952c636c.js';
const m =
    '{"title":"Gitlab","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u4F7F\u7528 gitlab-runner","slug":"\u4E3A\u4EC0\u4E48\u4F7F\u7528-gitlab-runner"},{"level":2,"title":"\u4EC0\u4E48\u662F gitlab-runner","slug":"\u4EC0\u4E48\u662F-gitlab-runner"},{"level":2,"title":"\u4F7F\u7528 docker \u5B89\u88C5 gitlab-runner","slug":"\u4F7F\u7528-docker-\u5B89\u88C5-gitlab-runner"},{"level":2,"title":"\u53EF\u80FD\u5B58\u5728\u7684\u95EE\u9898","slug":"\u53EF\u80FD\u5B58\u5728\u7684\u95EE\u9898"},{"level":2,"title":"\u914D\u7F6E.gitlab-ci.yml","slug":"\u914D\u7F6E-gitlab-ci-yml"}],"relativePath":"md/Git/gitlab/gitlab-runner.md","lastUpdated":1648885436692}',
  t = {},
  c = e(
    `<h1 id="gitlab" tabindex="-1"><a href="https://docs.gitlab.com/" target="_blank" rel="noopener noreferrer">Gitlab</a> <a class="header-anchor" href="#gitlab" aria-hidden="true">#</a></h1><p>gitlab \u4EE3\u7801\u7BA1\u7406\u5E73\u53F0</p><h1 id="gitlab-ci-cd" tabindex="-1">Gitlab <code>ci/cd</code> <a class="header-anchor" href="#gitlab-ci-cd" aria-hidden="true">#</a></h1><p>\u6301\u7EED\u96C6\u6210\u901A\u5E38\u7528\u6765\u8FDB\u884C\u65E5\u5E38\u7F16\u8BD1\u548C\u81EA\u52A8\u5316\u6D4B\u8BD5\uFF0C\u6765\u4FDD\u8BC1\u53CA\u65F6\u53D1\u73B0\u63D0\u4EA4\u7684\u95EE\u9898\uFF0C\u907F\u514D\u5F71\u54CD\u9879\u76EE\u8FDB\u5EA6\u3002 \u901A\u5E38\u6301\u7EED\u96C6\u6210\u7684\u8FC7\u7A0B\u5305\u62EC\uFF1A</p><ul><li>\u63D0\u4EA4\uFF08\u5408\u5E76\uFF09\u4EE3\u7801</li><li>\u7F16\u8BD1</li><li>\u6D4B\u8BD5</li><li>\u53D1\u5E03</li></ul><p>\u4E0D\u540C\u7684\u9879\u76EE\u53EF\u80FD\u6B65\u9AA4\u6709\u6240\u4E0D\u540C\uFF0C\u4E00\u4E9B\u66F4\u52A0\u89C4\u8303\u7684\u516C\u53F8\u7684\u9879\u76EE\u53EF\u80FD\u4F1A\u52A0\u5165\u9759\u6001\u4EE3\u7801\u68C0\u67E5\uFF0C\u4E5F\u6709\u4E0D\u5C11\u7684\u5C0F\u9879\u76EE\u8FEB\u4E8E\u8FDB\u5EA6\u548C QA \u7684\u5DE5\u4F5C\u538B\u529B\uFF0C\u53EF\u80FD\u8FDE\u6D4B\u8BD5\u8FC7\u7A0B\u90FD\u6CA1\u6709\u3002</p><h2 id="\u4E3A\u4EC0\u4E48\u4F7F\u7528-gitlab-runner" tabindex="-1">\u4E3A\u4EC0\u4E48\u4F7F\u7528 <code>gitlab-runner</code> <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4F7F\u7528-gitlab-runner" aria-hidden="true">#</a></h2><p>\u5C31\u6211\u7406\u89E3\uFF0Cgitlab-ci \u662F\u4E00\u4E2A\u7B80\u6613\u7248\u7684 jenkins\uFF0Cgit \u670D\u52A1\u5668\u517C\u4EFB\u4E86 Jenkins master \u7684\u529F\u80FD\uFF0C\u800C\u6211\u53EA\u9700\u8981\u51C6\u5907\u597D\u4E00\u4E2A slave \u5373\u53EF\u3002\u800C\u4E14\uFF0Cgitlab-ci \u7684 runner \u652F\u6301\u591A\u91CD\u73AF\u5883\uFF0C\u5C24\u5176\u662F Docker \u8FD8\u6709\u4E13\u5C5E\u7684\u914D\u7F6E\u652F\u6301\u3002\u914D\u7F6E\u8FC7\u7A0B\u4E5F\u975E\u5E38\u7684\u7B80\u4FBF\u65E0\u8111\uFF0C\u6BD4\u8D77 Jenkins \u7684 slave \u914D\u7F6E\u53EF\u4EE5\u8BF4\u662F\u5B8C\u80DC\u4E86\u3002</p><h2 id="\u4EC0\u4E48\u662F-gitlab-runner" tabindex="-1">\u4EC0\u4E48\u662F <code>gitlab-runner</code> <a class="header-anchor" href="#\u4EC0\u4E48\u662F-gitlab-runner" aria-hidden="true">#</a></h2><p>\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B runner\u3002\u6B63\u5982\u6211\u524D\u6587\u6240\u8BF4\uFF0Crunner \u53EF\u4EE5\u7406\u89E3\u4E3A\u662F Jenkins \u7684 slave\uFF0C\u673A\u5668\uFF08\u6216 docker\uFF09\u901A\u8FC7 runner \u7A0B\u5E8F\u4E0E git \u670D\u52A1\u5668\u8FDB\u884C\u901A\u4FE1\uFF0C\u5F53\u6709\u65B0\u7684\u4EFB\u52A1\u53D1\u5E03\u5230\u5F53\u524D runner \u65F6\uFF0Crunner \u4F1A\u6267\u884C.gitlab-ci.yml \u6240\u5B9A\u4E49\u7684 CI \u6307\u4EE4</p><h2 id="\u4F7F\u7528-docker-\u5B89\u88C5-gitlab-runner" tabindex="-1">\u4F7F\u7528 <code>docker</code> \u5B89\u88C5 <code>gitlab-runner</code> <a class="header-anchor" href="#\u4F7F\u7528-docker-\u5B89\u88C5-gitlab-runner" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token comment"># \u62C9\u53D6runner\u955C\u50CF\u5E76\u542F\u52A8\uFF0C\u8BF7\u6CE8\u610F\uFF1Arunner\u7684\u7248\u672C\u5E94\u8BE5\u548Cgitlab\u540C\u4E00\u4E2A\u5927\u7248\u672C\uFF0C\u4E0D\u7136\u6709\u517C\u5BB9\u95EE\u9898\u66FF\u6362latest\u4E3Av11.0.0</span>
<span class="token function">docker</span> run -d --name gitlab-runner --restart always -v /srv/gitlab-runner/config:/etc/gitlab-runner -v /var/run/docker.sock:/var/run/docker.sock gitlab/gitlab-runner:latest

<span class="token comment"># \u8FDB\u5165\u5BB9\u5668\u5185\u90E8</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it gitlab-runner <span class="token function">bash</span>

<span class="token comment"># \u6CE8\u518Crunner</span>
gitlab-runner register

<span class="token comment"># \u6309\u7167\u63D0\u793A\u914D\u7F6Erunner\u7684\u5B57\u6BB5\uFF1A</span>
<span class="token comment"># runner\u6CE8\u518C\u5230\u7684gitlab\u9879\u76EE\u5730\u5740\uFF0C\u5728gitlab\u9879\u76EE\uFF0C\u8BBE\u7F6E - ci/cd - runner \u4E0B\u67E5\u770Burl\u548Ctoken</span>
<span class="token comment"># url</span>
<span class="token operator">&gt;</span> Please enter the gitlab-ci coordinator URL <span class="token punctuation">(</span>e.g. https://gitlab.com <span class="token punctuation">)</span>
<span class="token comment"># token</span>
<span class="token operator">&gt;</span> Please enter the gitlab-ci token <span class="token keyword">for</span> this runner
<span class="token comment"># \u63CF\u8FF0</span>
<span class="token operator">&gt;</span> Please enter the gitlab-ci description <span class="token keyword">for</span> this runner
<span class="token comment"># \u6267\u884C\u5668 [excutors](https://docs.gitlab.com/runner/executors/)\uFF1A\u53EF\u4EE5\u9009\u62E9bash\u3001docker\u3001ssh\u7B49 \uFF0C\u8FD9\u91CC\u4F7F\u7528docker\u65B9\u4FBF\u8F7D\u5165node\u73AF\u5883</span>
<span class="token comment"># \u8BF7\u6CE8\u610F\uFF1A\u9009\u62E9ssh\u662F\u4E0D\u80FD\u94FE\u63A5window\u670D\u52A1\u5668\u7684\uFF0C\u4F1A\u62A5\u9519</span>
<span class="token operator">&gt;</span> Please enter the executor: ssh, docker+machine, docker-ssh+machine, kubernetes, docker, parallels, virtualbox, docker-ssh, shell:

<span class="token comment"># \u5B8C\u6210\u914D\u7F6E\u9000\u51FA\u5BB9\u5668</span>
<span class="token builtin class-name">exit</span>
</code></pre></div><p>\u914D\u7F6E\u597D\u7684<code>runner</code>\u914D\u7F6E\u6587\u4EF6\u901A\u5E38\u653E\u5728<code>/srv/gitlab-runner/config/config.toml</code>\u4E2D\uFF0C\u53EF\u8FDB\u5165\u5BB9\u5668\u8FDB\u884C\u4FEE\u6539\uFF0C\u4FDD\u5B58\u5B9E\u65F6\u751F\u6548</p><h2 id="\u53EF\u80FD\u5B58\u5728\u7684\u95EE\u9898" tabindex="-1">\u53EF\u80FD\u5B58\u5728\u7684\u95EE\u9898 <a class="header-anchor" href="#\u53EF\u80FD\u5B58\u5728\u7684\u95EE\u9898" aria-hidden="true">#</a></h2><ul><li>\u82E5<code>runner</code>\u914D\u7F6E<code>tag</code>\u6807\u7B7E\uFF0C\u5219\u9700\u8981\u70B9\u51FB<code>runner</code>\u8FDB\u5165\u5230\u914D\u7F6E\u9875\u9762\uFF0C\u914D\u7F6E\u4E0D\u7B26\u5408<code>tag</code>\u7684\u63D0\u4EA4\u4E5F\u4F1A\u89E6\u53D1 runner \u6267\u884C</li></ul><h2 id="\u914D\u7F6E-gitlab-ci-yml" tabindex="-1">\u914D\u7F6E<code>.gitlab-ci.yml</code> <a class="header-anchor" href="#\u914D\u7F6E-gitlab-ci-yml" aria-hidden="true">#</a></h2><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u589E\u914D\u7F6E\u6587\u4EF6<code>.gitlab-ci.yml</code></p><div class="language-yml"><pre><code><span class="token comment"># docker\u73AF\u5883\u4F9D\u8D56</span>
<span class="token key atrule">image</span><span class="token punctuation">:</span> node<span class="token punctuation">:</span>14.10.0

<span class="token comment"># \u5404\u4E2Ajob\u4E4B\u95F4\u7F13\u5B58 node_modules</span>
<span class="token key atrule">cache</span><span class="token punctuation">:</span>
  <span class="token key atrule">key</span><span class="token punctuation">:</span> $CI_COMMIT_REF_SLUG
  <span class="token key atrule">paths</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> .npm/

<span class="token key atrule">before_script</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> npm ci <span class="token punctuation">-</span><span class="token punctuation">-</span>cache .npm <span class="token punctuation">-</span><span class="token punctuation">-</span>prefer<span class="token punctuation">-</span>offline

<span class="token comment"># Stages \u8868\u793A\u6784\u5EFA\u9636\u6BB5\uFF0C\u8FD9\u91CC\u6709\u4E09\u4E2A\u9636\u6BB5 install,build,deploy</span>
<span class="token key atrule">stages</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> dependencies
  <span class="token punctuation">-</span> build<span class="token punctuation">:</span>test
  <span class="token punctuation">-</span> deploy<span class="token punctuation">:</span>test

<span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
<span class="token key atrule">install:dependencies</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> dependencies
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> npm i
  <span class="token comment"># Introduced v11.4</span>
  <span class="token comment"># only:</span>
  <span class="token comment">#   changes:</span>
  <span class="token comment">#     - package-lock.json</span>

<span class="token comment"># \u6D4B\u8BD5\u73AF\u5883</span>
<span class="token comment"># \u6253\u5305</span>
<span class="token key atrule">build:test</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> build<span class="token punctuation">:</span>test
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> master
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> npm run build<span class="token punctuation">:</span>test
  <span class="token key atrule">artifacts</span><span class="token punctuation">:</span>
    <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> dist
<span class="token comment"># \u53D1\u5E03</span>
<span class="token key atrule">deploy:test</span><span class="token punctuation">:</span>
  <span class="token key atrule">stage</span><span class="token punctuation">:</span> deploy<span class="token punctuation">:</span>test
  <span class="token key atrule">only</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> master
  <span class="token key atrule">script</span><span class="token punctuation">:</span>
    <span class="token comment"># \u6B64\u5904\u4F7F\u7528\u4E86\u963F\u91CC\u4E91oss\u7684\u4E0A\u4F20\u65B9\u5F0F\uFF0C\u53EF\u4EE5\u9009\u62E9\u5176\u4ED6\u65B9\u5F0F\uFF1Assh\uFF0Cbash</span>
    <span class="token punctuation">-</span> node ./bin/oss/test.js
</code></pre></div>`,
    18
  ),
  o = [c];
function p(l, r, i, u, k, d) {
  return s(), a('div', null, o);
}
var b = n(t, [['render', p]]);
export { m as __pageData, b as default };
