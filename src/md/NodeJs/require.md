# `require`相关

## 支持加载的文件类型

- `node` ：`c++`插件，不常用
- `js` ：需要在文件内导出资源`module.exports`
- `json`：`json`文件格式

非以上格式的文件会被当成`js`文件读取

## `require`如何查找模块

1. 优先加载原生模块
2. 按文件路径查找文件模块，无后缀名尝试带上 `.node`、`.js`、`.json`加载
3. 若是文件目录则检查目录下的`package.json`文件的`main`获取模块，无指定模块则尝试获取目录下的`index.node`、`index.js` 文件，都没有则报错
4. 不是文件路径模块，则会从`node_modules`中查找，不断向外层父级的`node_modules`中查找模块
5. 最后会查找全局目录下的模块

## 如何使用 `ESmodule` 语法

1. 将`node`版本提高到 14 以上
2. 将`js`文件后缀修改为`mjs`
3. 引入时必须填写后缀名

```javascript
import index from './index.mjs';
```
