# 本地调试 `npm` 包方法

1. 常规调试
    1. 直接全局安装进行调试
    2. 在脚手架目录使用`npm link`

<br>

2. 分包调试：`npm link module`

<br>

- 理解 `npm link`：
  - `npm link`：将当前项目链接到`node`全局`node_modules`中作为一个库文件，并解析`bin`配置创建可执行文件
  - `npm link module`：将当前项目中`node_modules`下指定库`module`链接到`node`全局`node_modules`下的库`module`

<br>

- 理解 `npm unlink`：
  - `npm unlink`：将当前项目从`node`全局`node_modules`中移除
  - `npm unlink module`：移除当前项目中`node_modules`下指定库`module` 对全局库`module`的链接
  - `npm unlink`失败:检查是否修改过`package.json`的`name`
<br>
