# Webpack
一个模块化打包工具。

## 为什么用webpack？
适合复杂的前端构建工作

## 与gulp,grunt的关系
- 都是node环境下的前端构建工具
- 复杂度较高
  - `gulp`这类为任务流式的打包处理资源，适合较简单的打包构建
  - `webpack`功能更多

## 有什么用，特点是什么
- 模块化打包：保证模块的引用正确，顺序正确，我们可以自行管理项目结构，保证模块结构的清晰和可读性
- 编译兼容：使用`loader`为.less、.vue等文件编译解析，我们使用这类型文件的新语法，新特性开发，提高开发效率
- 功能扩展：通过`plugin`，在模块打包，编译兼容的基础上实现按需加载，代码压缩等功能。提高自动化构建的程度和代码的质量

## webpack是如何工作的
1. 自动从入口文件递归解析所有资源形成依赖树关系
2. `loader`处理文件为javascript文件
3. 处理过程通过发布订阅的方式，向外抛出钩子，`plugins`可以利用这些钩子扩展webpack的功能

## 常用`loader`有哪些
- `babel-loader`：把 ES6 转换成 ES5
- `css-loader`：加载 CSS，支持模块化、压缩、文件导入等特性
- `eslint-loader`：通过 ESLint 检查 JavaScript 代码
- `file-loader`：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件

## 常用`plugins`有哪些
- `commons-chunk-plugin`：提取公共代码
- `CopyWebpackPlugin`：复制文件到指定位置
- `uglifyjs-webpack-plugin`：通过UglifyES压缩ES6代码
- `CleanWebpackPlugin`：清理输出文件夹

## 如何写一个`loader`
`loader`就是一个方法，webpack会传入文件文本内容，在方法内转换处理文件内容然后返回新的文本内容。

## 如何写一个`plugin`

### 关键概念
- `Compiler` ：compiler 对象代表了**完整的 webpack 环境配置**。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用它来访问 webpack 的主环境。

- `compilation` ：compilation 对象代表了一次资源版本构建。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的**编译资源**。一个 compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。

### 创建步骤
1. 定义一个构造函数作为插件
2. 构造函数的原型上写一个`apply`方法，接受`compiler`参数
3. 在`compiler`上监听`webpack`的事件，回调函数接收`compilation`和`callback`参数
4. 根据配置`compiler`和当前构建状态进行处理
5. 处理完成后调用回调函数`callback`

```javascript
///src/plugins/helloPlugin.js
// 命名函数。
function HelloPlugin(options) {
    // 使用 options 设置插件实例……
    console.log(options);
}
 
//插件函数的 prototype 上定义一个 apply 方法
HelloPlugin.prototype.apply = compiler => {
    //hooks
     compiler.hooks.done.tap('HelloPlugin', status => {
        console.log(status.toJson());
 
    })
     
    // 旧版本的相关钩子
    //compiler.plugin('done' , () => {
      //  console.log('hello world');
    //})
 
    // 设置回调来访问 compilation 对象：
    //compiler.plugin('compilation', compilation => {
 
        // 现在，设置回调来访问 compilation 中的步骤：
       // compilation.plugin('optimize', () => {
            console.log('optimize');
        //})
 
    //})
}
 
module.exports = HelloPlugin
```


## webpack热更新原理
插件`hot-module-replacement-plugin` 包给 `webpack-dev-server` 提供了热更新的能力，它们两者是结合使用的。
1. `webpack-dev-server(WDS)`的功能提供 `bundle server`的能力，就是生成的 `bundle.js` 文件可以通过 `localhost://xxx` 的方式去访问，另外 `WDS` 也提供 `livereload`(浏览器的自动刷新)。
2. `hot-module-replacement-plugin` 的作用是提供 `HMR` 的 `runtime`，并且将 `runtime` 注入到 `bundle.js` 代码里面去。一旦磁盘里面的文件修改，那么 `HMR server` 会将有修改的 `js module` 信息发送给 `HMR runtime`，然后 `HMR runtime` 去局部更新页面的代码。因此这种方式可以不用刷新浏览器。