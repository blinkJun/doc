# 进程

>进程是正在运行的程序的实例

## [`child_process`](http://nodejs.cn/api/child_process.html)

### 异步

#### `exec` 和 `execFile`

执行命令

```javascript
const cp = require('child_process')

// 执行 shell 脚本，获得 child 子进程对象，执行结果通过回调获取
const child = cp.exec('ls -al',function(err,stdout,stderr){
  // err 异常
  // stdout 脚本执行的输出
  // stderr 脚本执行异常时的输出
})

// 执行文件，参数通过第二个参数传入
// 与exec的区别是传入参数的不同
const child = cp.execFile('ls',['-al'],function(err,stdout,stderr){})

```

#### `spawn`

流式获取输出，适合开销较大的任务

```javascript
// 类似execFile 无回调函数，直接返回实例
const child = cp.spawn(path.resolve(__dianame,'test.shell'),['-al'],{
  // 指定脚本执行的所在目录
  cwd:process.cwd(),
  // pipe:流式触发输入输出，父进程需要监听
  // inherit:直接作为从父进程输入输出，父进程只需要监听错误
  stdio:'pipe'
})

// 可以使用监听的方式获取输出
child.stdout.on('data',function(chunk){
  console.log(chunk.toString())
})

// 监听输出时发生的错误
child.stderr.on('data',function(chunk){
  console.log(chunk.toString())
})
```

#### `fork`

在子进程中执行node文件，主要用于nodejs脚本和耗时操作
与`require`的不同是，脚本是在子进程中执行的而不是在当前进程

```javascript
const child = cp.fork(path.resolve(__dianame,'index.js'))
```

### 同步

#### `execSync`、`execFileSync`、`spawnSync`

同步获得执行结果

```javascript
// 获得 buffer 数据结果
const ret = cp.execSync('ls')
console.log(ret.toString())

const ret2 = cp.execFileSync('ls',['-al'])
console.log(ret2.toString())

const ret3 = cp.spawnSync('ls',['-al'])
console.log(ret3.stdout.toString())
```

### 主进程和子进程之间的通信

**父->子**：通过子进程实例向子进程发送消息

- 父进程

```javascript
// 发送消息，进入等待的状态
child.send('hello child process',()=>{
  // 发送完毕之后的回调
})

// 断开与子进程的链接
child.disconnect()
```

- 子进程

```javascript
process.on('message',function(msg){
  console.log(msg)
})
```

**子->父**：通过`process`向父进程通信

- 子进程

```javascript
process.send('hello main process')
```

- 父进程

```javascript
child.on('message',(msg)=>{
  console.log(msg)
})
```

注意不要循环发送消息，容易进入死循环

## `redis`：缓存数据库，放在内存中

进程之间的缓存内容共享

- 适合场景如：`session`
  - 访问频繁，对性能要求高
  - 可不考虑数据丢失的问题
  - 数据量不会太大
- 特点
  - 相比mysql，速度块
  - 成本高，储存数据量少
- 方案
  - `web server`和`redis`分为两个服务
  - 双方独立且可扩展
- 使用方式
  - 自动启动
