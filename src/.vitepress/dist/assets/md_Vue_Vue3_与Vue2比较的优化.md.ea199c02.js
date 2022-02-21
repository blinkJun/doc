import{_ as e,c as a,o as r,a as i}from"./app.dfde2fab.js";const f='{"title":"\u4E0EVue2\u6BD4\u8F83\u7684\u4F18\u5316","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6027\u80FD\u4F18\u5316","slug":"\u6027\u80FD\u4F18\u5316"},{"level":2,"title":"\u4F53\u79EF\u4F18\u5316\uFF1A\u5220\u9664\u4E86\u4E00\u4E9B\u4E0D\u5E38\u7528\u7684API","slug":"\u4F53\u79EF\u4F18\u5316\uFF1A\u5220\u9664\u4E86\u4E00\u4E9B\u4E0D\u5E38\u7528\u7684api"},{"level":2,"title":"\u6447\u6811\u4F18\u5316\uFF1ATree-shaking","slug":"\u6447\u6811\u4F18\u5316\uFF1Atree-shaking"},{"level":2,"title":"\u4F18\u5316\u54CD\u5E94\u5F0F","slug":"\u4F18\u5316\u54CD\u5E94\u5F0F"},{"level":2,"title":"\u7F16\u8BD1\u4F18\u5316","slug":"\u7F16\u8BD1\u4F18\u5316"}],"relativePath":"md/Vue/Vue3/\u4E0EVue2\u6BD4\u8F83\u7684\u4F18\u5316.md","lastUpdated":1638340958387}',t={},d=i('<h1 id="\u4E0Evue2\u6BD4\u8F83\u7684\u4F18\u5316" tabindex="-1">\u4E0EVue2\u6BD4\u8F83\u7684\u4F18\u5316 <a class="header-anchor" href="#\u4E0Evue2\u6BD4\u8F83\u7684\u4F18\u5316" aria-hidden="true">#</a></h1><h2 id="\u6027\u80FD\u4F18\u5316" tabindex="-1">\u6027\u80FD\u4F18\u5316 <a class="header-anchor" href="#\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a></h2><h2 id="\u4F53\u79EF\u4F18\u5316\uFF1A\u5220\u9664\u4E86\u4E00\u4E9B\u4E0D\u5E38\u7528\u7684api" tabindex="-1">\u4F53\u79EF\u4F18\u5316\uFF1A\u5220\u9664\u4E86\u4E00\u4E9B\u4E0D\u5E38\u7528\u7684API <a class="header-anchor" href="#\u4F53\u79EF\u4F18\u5316\uFF1A\u5220\u9664\u4E86\u4E00\u4E9B\u4E0D\u5E38\u7528\u7684api" aria-hidden="true">#</a></h2><p>\u5982\uFF1Afilter</p><h2 id="\u6447\u6811\u4F18\u5316\uFF1Atree-shaking" tabindex="-1">\u6447\u6811\u4F18\u5316\uFF1A<code>Tree-shaking</code> <a class="header-anchor" href="#\u6447\u6811\u4F18\u5316\uFF1Atree-shaking" aria-hidden="true">#</a></h2><p>\u5728Vue3\u4E2D\uFF0C\u6240\u6709\u7684API\u90FD\u901A\u8FC7ES6\u6A21\u5757\u5316\u7684\u65B9\u5F0F\u5F15\u5165\uFF0C\u8FD9\u6837\u5C31\u80FD\u8BA9webpack\u6216rollup\u7B49\u6253\u5305\u5DE5\u5177\u5728\u6253\u5305\u65F6\u5BF9\u6CA1\u6709\u7528\u5230API\u8FDB\u884C\u5254\u9664\uFF0C\u6700\u5C0F\u5316bundle\u4F53\u79EF\u3002</p><h2 id="\u4F18\u5316\u54CD\u5E94\u5F0F" tabindex="-1">\u4F18\u5316\u54CD\u5E94\u5F0F <a class="header-anchor" href="#\u4F18\u5316\u54CD\u5E94\u5F0F" aria-hidden="true">#</a></h2><ul><li>Vue2\uFF0C<code>defineProperty</code>\u65B9\u6CD5\u7F3A\u9677 <ul><li>\u4E0D\u80FD\u76D1\u542C\u65B0\u589E\u7684\u5C5E\u6027</li><li>\u5BF9\u6570\u7EC4\u53EA\u80FD\u901A\u8FC7\u6539\u5199\u65B9\u6CD5\u5B9E\u73B0</li></ul></li><li>Vue3\uFF0C\u4F7F\u7528<code>Proxy</code>\u8FDB\u884C\u62E6\u622A\uFF1A <ul><li>\u53EF\u4EE5\u76D1\u542C\u65B0\u589E\u7684\u5C5E\u6027</li><li>\u6DF1\u5C42\u5BF9\u8C61\u4F9D\u7136\u9700\u8981\u9012\u5F52\u76D1\u542C\uFF0C\u4F46\u662F\u53EF\u4EE5\u5B9E\u73B0\u5728\u8BBF\u95EE\u5185\u90E8\u5BF9\u8C61\u65F6\u5728<code>getter</code>\u8FDB\u884C\u52A8\u6001\u76D1\u542C\uFF1A<strong>\u60F0\u6027\u76D1\u542C</strong></li></ul></li></ul><h2 id="\u7F16\u8BD1\u4F18\u5316" tabindex="-1">\u7F16\u8BD1\u4F18\u5316 <a class="header-anchor" href="#\u7F16\u8BD1\u4F18\u5316" aria-hidden="true">#</a></h2><p>\u9759\u6001\u63D0\u5347\uFF0C\u9759\u6001\u8282\u70B9\u90FD\u4F1A\u88AB\u63D0\u5347\u5230render \u7684\u5916\u90E8\uFF0C\u53EA\u6709\u521D\u59CB\u5316\u65F6\u4F1A\u88AB\u521B\u5EFA\uFF0C\u518D\u6B21\u8C03\u7528render\u65F6\u4E0D\u4F1A\u518D\u6B21\u521B\u5EFA\uFF0C\u53EF\u4EE5\u76F4\u63A5\u91CD\u7528\u8FD9\u4E9B\u9759\u6001\u8282\u70B9\u5BF9\u5E94\u7684vnode</p>',10),l=[d];function h(n,s,o,c,u,_){return r(),a("div",null,l)}var g=e(t,[["render",h]]);export{f as __pageData,g as default};
