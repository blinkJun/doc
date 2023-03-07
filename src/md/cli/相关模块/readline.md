# [`readline`](http://nodejs.cn/api/readline.html#readline_readline)
逐行读取

## 基本使用
```javascript
const readline = require('readline')

// 创建实例
const rl = readline.createInterface({
  // 接入命令行输入输出
  input:process.stdin,
  output:process.stdout
})

// 发起交互
rl.question('your name',answer=>{
  console.log(answer)
  // 结束交互
  rl.close()
})

```
