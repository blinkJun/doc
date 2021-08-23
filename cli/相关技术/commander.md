## [commander](https://www.npmjs.com/package/commander) 的使用方法

### 安装
```BASH
npm i commander --save
```

### 基本使用

```javascript
const commander = require('commander')

// 注册方式1：获取单例
const program = commander.program

// 注册方式2：生成一个实例
const program = new commander.Command()

// 使用
program
.name(Object.keys(pkg.bin)[0])                  //命令的名称（可不设，自动获取）
.version('1.0.0')                               //版本号
.usage('<command> [options]')                   //使用提示
.option('-d,--debug','是否开启调试模式',false)   //设置参数、提示、默认参数
.option('-e,--env <envName>','获取环境变量名称')
.parse(process.argv)                            //解析参数

```

### 命令注册的两种方法
- 第一种:`command`
```javascript
const clone = program.command('clone <source> [destination]'); //<>表示参数必填 []表示选填

clone
.description('clone a registry')                               // 命令描述，在-help时提示
.option('-f, --force','是否强制拷贝')                           //属于命令的选项
.action((source,destination,cmdOptions)=>{
  console.log('do clone',source,destination,cmdOptions.force)
})
```
- 第二种：`addCommand` 注册**子命令**
```javascript
// 子命令，对命令分组
const service = new commander.Command('service')

// 第一个子命令
service
  .command('start [port]')                //类似第一种命令注册方式
  .description('start service at port')
  .action((port)=>{
    console.log('do service start',port)
  })

// 第二个子命令
service
  .command('stop [port]')
  .description('stop service at port')
  .action((port)=>{
    console.log('do service stop',port)
  })

program.addCommand(service)
```

### 高级用法
- 通配匹配命令
```javascript
program
  .arguments('<cmd> [options]')     // 定义无匹配情况下的命令输入
  .description('test command',{     // 输入参数的描述
    cmd:'command to run',
    options:'options for command'
  })
  .action((cmd,options)=>{

  })
```
- 命令后缀：输入`command`第二个参数启用命令后缀，第三个参数增强命令功能
```javascript
program
  .command(
    'install [name]',                             //实际调用了 cli-install name
    'install package',
    {
      executableFile:'others cli',                // 指定使用其他命令，实际是：others cli name
      isDefault:true,                             // 无通配命令时，默认执行此命令
      hidden:true                                 // 隐藏此命令提示
    }
  )    
  .alias('i')                                     // install 别名 i
```
- 自定义`help`信息
```javascript
// 方法 1
program.helpInfomation = function(){
  return 'your help infomation'
}

// 方法 2 监听并改写
program.on('--help',()=>{
  console.log('your help infomation')
})

```

- `debug`模式
```javascript
// 监听并修改环境变量
program.on('option:debug',()=>{
  if(program.opts().debug){
    process.env.LOG_LEVEL = 'verbose'
  }
})
```

- 另一种未知命令监听
```javascript
program.on('command:*',(options)=>{
  console.error(`未知的命令：${options[0]}`)
  // 可用命令提示
  const availableCommands = program.commands.map(cmd=>cmd.name());
  console.log('可用命令：' + availableCommands.join(','))
})
```