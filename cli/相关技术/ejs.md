## [ejs](https://www.npmjs.com/package/ejs) 的使用方法
模板渲染

### 安装
```BASH
npm i ejs --save
```

### 基本使用

```javascript
const ejs = require('ejs')

// 模板字符串
const html = '<h1> <%= user.name %> </h1>'
// 相关配置
const options = {}
// 传入数据
const data = {
  user:{
    name:'blink'
  }
}

// 多次使用
// 生成模板，传入数据生成内容
let template = ejs.compile(html,options);
// 获得数据填充后的内容
const compilerTemplate = template(data);


// 一次性使用
const renderTemplate = ejs.render(html,data,options)

// 对文件处理 
// 返回promise
const renderedFile = ejs.renderFile(path.resolve(__dirname,'template.html'),data,options)
// 回调函数
ejs.renderFile(path.resolve(__dirname,'template.html'),data,options,(err,file)=>{
  console.log(err)
  console.log(file)
})
```

### 标签含义
- `<% '脚本'`：输入脚本语句
- `<%_ `：删除此行缩进空格
- `<%= `：输出数据到模板 转义
- `<%- `：输出数据到模板 不转义
- `<%# `：注释，不做处理
- `<%% `：输出 '<%'
- `%>`：一般结束标签
- `-%>`：删除紧随其后的换行符
- `_%>`：删除紧随其后的空格符


```html
<!-- js脚本 -->
<!-- 判断语句 -->
<% if(user){ %>
  <!-- 循环 -->
  <% for(let i = 0; i<10; i++){ %>
    <!-- 删除缩进 -->
    <%_ %><div><%= user.name %></div>
  <% } %>
<% } %>
```

### 包含功能
传入另一个模板
```html
<%- include('./header.html',{user}) -%>
```

### 自定义分隔符
修改分隔符
```javascript

const options = {
  // 将 % 修改为 ?
  delimiter:'?'
}

```

### 自定义文件加载器

```javascript
ejs.fileLoader = function(filePath){
  // 可以返回新的内容作为新模板
}
```