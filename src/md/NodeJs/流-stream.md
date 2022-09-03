# 流 - `stream`

专门用于处理数据的抽象接口类。

## 文件的操作方式

### 基于一次性读取的文件操作

1. 有了`nodejs`之后，我们具备了使用`js`操作来操作二进制的能力
2. 一次性读取：

  ```js
    const fs =  require('fs')

    fs.readFile('./read.txt',(err,data)=>{
      console.log(data) // <Buffer ...> 二进制数据
      console.log(data.toString()) // 转换为字符串数据
    })

    fs.writeFile('./write.txt','hello world',(err)=>{
      console.log('写入成功！')
    })
  ```

存在的缺陷：将磁盘的数据全部读取到内存中，内存占用量大，不适合大文件操作。

### 基于`open`、`read`、`write`内存操作的文件操作

1. `nodejs`提供了一种数据类型类型来存放二进制：内存空间-`Buffer`，在内存缓冲区存放数据

  ```js
    // 申请空间
    let buf1 = Buffer.alloc(100)

    // 模拟文件使用空间
    let buf2 = Buffer.from('hello world')
  ```

2. 将大文件一部分一部分的读取并写入文件，解决内存占用过大的问题：

 ```js
  const {open,read,write} = require('fs')

  // 【读就是写】，读取数据放入内容空间，可重复操作读取数据
  open('./test.txt','r',(err,rfd)=>{
    // 申请内存空间
    const buff = Buffer.alloc(100)
    // 将数据读取入内存空间
    read(rfd,buff,0,6,0,(err,readBytes,buf)=>{
      // 读取到的数据
      console.log(buf.toString())
    })
  })

  // 【写就是读】，要写入数据到文件，则需要读取内存中的数据
  let outputBuf = Buffer.from('hello world')
  open('./test-output.txt','w',(err,wfd)=>{
    write(wfd,outputBuf,0,3,(err,written,buf)=>{
      // 查看文件内容
    })
  })
 ```

存在的问题：不知道申请多少内存合适、语法复杂

### 基于 `stream` 的流操作

```js
const {createReadStream,createWriteStream,pipeline} = require('fs')

const rs = createReadStream('test.txt')
const ws = createWriteStream('ouput.txt')

// 从可读流流向可写流
rs.pipe(ws)

// 使用pipeline 可以处理错误，转换数据
pipeline(rs,ws,(err)=>{
  console.log(err)
})
```

## `Stream`模块

在什么情况下会使用到流？

1. 使用到了内置的实现流接口的内置模块（`fs`、`http`、`zlib`、`net`）
2. 自定义类继承 `Stream` 模块内部定义的类

`Stream`定义了4个类，分别表示4种流：

- 可读流
- 可写流
- 转换流(双工流)

### 可读流的实现

```js
const {Readable,Writable} =  require('stream')
const fs = require('fs')

class MyReadable extends Readable {
  constructor(options,data){
    super(options)
    this.data = data
  }
  // 实现 Readable 抽象方法
  _read(){
    // 将数据推入可读流内存
    // 当 push null 时表示数据读取完毕
    const chunk = data.shift() || null
    this.push(chunk)
  }
}

const data = ['h','e','l','l','o']

const rs = new MyReadable({encoding:'utf-8'},data)

// 消费可读流的方式

// 1. 非流动模式
rs.on('readable',()=>{
  let chunk
  while(chunk = rs.read(1)){
    console.log(chunk)
  }
})

// 2. 流动模式
rs.on('data',(chunk)=>{
  console.log(chunk)
})

// 其他可用事件
rs.on('error',(error)=>{
  console.log(error)
})
rs.on('end',()=>{
  console.log('读取完毕')
})
```

### 可写流的实现

```js
const {Readable,Writable} =  require('stream')
const fs = require('fs')


class MyWritable extends Writable {
  constructor(options){
    super(options)
  }
  _write(data,encoding,callback){
    // 对数据进行操作
    fs.writeFile('./test.txt',data,{encoding},(err)=>{
      callback()
    })
  }
}

// 使用 objectMode 可读取 js对象
const ws = new MyWritable({objectMode:false})

ws.write('hello world')

ws.on('finish',()=>{
  console.log('写入完毕')
})

ws.on('error',(error)=>{
  console.log(error)
})
```

### 转换流的实现：`Transform`

同时实现了 `Readable` 和 `Writable` 的流，即可以作为上游生产数据，又可以作为下游消费数据，这样可以处于数据流动管道的中间部分 `rws`:

```js
rs.pipe(rws).pipe(ws)
```

```js
const {Transform,pipeline} =  require('stream')
const fs = require('fs')

class MyTransform extends Transform{
  constructor(options){
    super(options)
  }
  // 转换数据
  _transform(chunk,encoding,done){
    // 转换为大写
    this.push(chunk.toString().toUpperCase())
    done()
  }
  // 会在数据流的尾部被调用
  _flush(done){
    this.push('添加额外数据')
    done()
  }
}

const rs = createReadStream('test.txt')
const ws = createWriteStream('ouput.txt')
const ts = new MyTransform()

pipeline(rs,ts,ws,(err)=>{
  console.log(err)
})
```
