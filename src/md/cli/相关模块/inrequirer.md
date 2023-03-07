# [inquirer](https://www.npmjs.com/package/inquirer) 的使用方法
命令行交互

## 安装
```BASH
npm i inquirer --save
```

## 基本使用
```javascript
const inquirer = require('inquirer')
inquirer
  .prompt([
    {
      // 交互类型
      // input：输入框
      // confirm：确认框
      // list：选择 choices 其中一项
      // rawlist: 与list相似，展示样式不同
      // expand：提供简写，在 choices 中配置
      // checkbox：多选 choices
      // password：输入密码
      // editor：创建缓存文件提供文本输入，获取到最终输入结果
      type:'input',
      // 字段名称
      name:'userName',
      // 交互问题，对用户的提示
      message:'input your name',
      // 默认值
      default:'no name',
      // 验证
      validate:function(value){
        return value==='have name'
      },
      // 对结果处理，在validate之前
      filter:function(value){
        return value+'!'
      },
      choices:[
        {value:1, name:'a'},
        {value:2, name:'b'}
      ]
    },
    // 第二个交互
    {
      type:'number',
      name:'age',
      message:'input your age',
    }
  ])
  .then((answers) => {
    // 获取到用户的输入
    console.log(answers.userName)
    console.log(answers.age)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
```
