## 为什么要分析lerna的源码
- 2w+ star 的明星项目
- 对我们开发脚手架有用
- 蕴含大量最佳实践，值得深入学习研究

## 要分析什么
- lerna源码结构和执行流程分析
- `import-local`源码深度精读

## 收获什么
- 如何将源码分析的收获写进简历
- 明星项目的架构设计
- 脚手架流程的思路
- 脚手架调试本地源码的另外一种方法
- nodeJs加载node_modules模块的流程
- 各种文件操作算法和最佳实践

### 准备源码
1. 下载源码：[lerna](https://github.com/lerna/lerna)
2. 安装依赖
3. IDE打开

可开始的标准：
- 找到入口文件
- 能够本地调试

#### node调试技巧
1. `step over` 逐行执行代码
2. `step init` 进入方法内部
3. `step out` 跳出方法

### 结构和执行流程

#### 概念解释
- `require(".")` 表示相对路径，当前目录下的index.js文件
- `"@lerna/exec":"file:../../commands/exec"` 使用相对路径引用包文件，可以不用link链接两个package，`lerna publish`会将这个链接自动解析为线上包

#### 初始化流程
1. 本地链接包引用`"@lerna/exec":"file:../../commands/exec"`
2. 使用`yargs`，globalOptions注册lerna的全局命令，对命令作基本配置
3. 继承 `command` 方法实现`lerna`对项目的初始化流程，使用`lerna`的`excute`处理方法对命令进行处理