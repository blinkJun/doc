# 文件操作-`fs`

对文件和文件夹进行相关操作

```js
const fs = require('fs')

// 创建目录
fs.mkdir('./images',(err)=>{})

// 读取目录
fs.readdir('./images',(err,data)=>{
  // data 为文件夹内的数据列表
})

// 删除目录，有子文件则无法删除
fs.rmdir('./images',(err)=>{})

// 查看文件的信息
fs.stat('./images',(err,data)=>{
  // 可通过下面方式判断是文件夹还是文件

  // 文件
  if(data.isFile()){}

  // 文件夹
  if(data.isDirectory()){}
})

// 重命名
fs.rename('./images','./assets',(err)=>{})

// 文件写入内容，无文件则生成文件，覆盖方式
fs.writeFile('./images/a.txt','hello',(err)=>{})

// 文件增加内容
fs.appendFile('./images/a.txt','world',(err)=>{})

// 文件读取内容
fs.readFile('./images/a.txt','utf-8',(err,data)=>{
  // 二进制数据
  console.log(data);
})

// 删除文件
fs.unlink('./images/a.txt',(err)=>{})

```

## 同步的方式操作`api`

在回调`api`的名称后加`Sync`，会阻塞且直接抛出错误，需要程序捕获错误进行处理

```js
  try{
    fs.unlinkSync('./imgaes/a.txt')
  }catch(err){
    console.log(err)
  }
```

## `promise`的方式操作`api`

无回调，无阻塞，但是还是需要捕获错误，`api`名称与原`api`一致，需要更改引入方式

```js
const fs = require('fs').promises

fs.unlink('./images/a.txt').then(res=>{

},(err)=>{

})
```
