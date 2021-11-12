# [`glob`](http://www.imooc.com/article/4053) 

## [`glob`](https://www.npmjs.com/package/glob) 的使用方法
匹配指定路径下的文件

### 安装
```BASH
npm i glob --save
```

### 基本使用

```javascript
const glob = require('glob')

glob('**',{
  // 指定位置
  cwd:process.cwd(),
  // 忽略
  ignore:['node_modules/**'],
  // 不匹配文件夹
  nodir:true
},(err,files)=>{
  if(err){
    console.log(err.message)
  }
  console.log(files)
})
```