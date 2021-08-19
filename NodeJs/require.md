# `require`相关

## 支持加载的文件类型

- `node` ：`c++`插件，不常用
- `js` ：需要在文件内导出资源`module.exports`
- `json`：`json`文件格式

非以上格式的文件会被当成`js`文件读取

## 如何使用 `ESmodule` 语法
1. 将`node`版本提高到14以上
2. 将`js`文件后缀修改为`mjs`
3. 引入时必须填写后缀名
```javascript
import index from './index.mjs'
```