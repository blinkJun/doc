## [yargs](https://www.npmjs.com/package/yargs) 的使用方法
注册命令行命令

### 安装
```BASH
npm i yargs --save
```

### 基本使用
```javascript
const yargs = require('yargs/yargs')

// process.argv.slice(2) 的简写
const { hideBin } = require('yargs/helpers')
const arg = hideBin(process.argv)

// 定义
const cli = yargs(arg)
// 命令行宽度
const terminalWidth = cli.terminalWidth()

// 初始化
cli
.usage('Usage：blink-cli-dev [command] <options>')   // 使用提示
.demandCommand(1,'A command is required! Pass --help to see all available commands and options.') //期望的最小命令数
.strict()                                            // 严格模式，无法识别的参数将会进行提示
.alias("v","version")                                // 参数别名
.wrap(terminalWidth)                                 // 修改输出的文案宽度
.epilogue('your own footer desc')                    // 在底部添加提示文本
.options({                                           // 配置多个全局选项
  debug:{
    type:'boolean',
    describe:'bootstrap debug mode',
    alias:'d'
  }
})                                                   
.option('registry',{                                 // 配置单个全局选项
  type:'string',
  describe:'define global registry',
  alias:'r'
})
.group(['debug'],'Dev Options：')                    // 将命令聚合
.group(['registry'],'Publish Options：')
.recommendCommands()                                 // 命令输出错误时进行提示
.fail((err,msg)=>{                                   // 定制出错时的提示信息
  console.log(err)
})
.argv                                                // 完成初始化
```

### 高级用法
```javascript
// command:定义命令

// command 参数
const command = 'init [name]'                        // 命令格式，用作提示
const describe = 'do init a project'                 // 命令描述，用作提示
const aliases = ['n','projectName']                  // 命令参数别名
const builder = (yargs)=>{                           // 执行command之前的处理函数，定义只有这个命令才有的参数
  yargs.option('name',{
    type:'string',
    describe:'Name of the project'
  })
}
const handler = (argv)=>{                             // 这个命令的具体执行方法
  console.log(argv)
}

// 定义command
cli.command(command,describe,builder,handler)
// 另一种定义方式
cli.command({
  command,
  describe,
  aliases,
  builder,
  handler
})
```

```javascript
// parse：手动处理参数

// 不再使用 hideBin 方法，自定义 argv 参数
const argv = process.argv.slice(2);

// 定义的时候不再传入argv参数
const cli = yargs()

// 调用parse方法，注入其他参数
cli.parse(argv,{
  version:'1.0.0'
})
```