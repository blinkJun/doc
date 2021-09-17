# `NPM` 与 `package.json`

## `NPM`

### `npm`的主要功能
- 从`npm`服务器下载第三方模块到本地，比如`vue`
- 从`npm`服务器下载命令行程序使用，比如`vue-cli`、`rollup`
- 自己编写模块或者命令行程序上传到`npm`服务器供他人使用

### 注册使用`npm`
1. 登录[npm](https://www.npmjs.com/)，注册账户
2. 安装`node`，自带`npm`，常用操作：
  - `npm whoami`：检查是否登录
  - `npm login` 或 `npm add user` 进行登录
  - `npm config ls` 查看配置信息
  - `npm logout` 退出登录

## `package.json`

### 版本号
语义化版本 - [semver](https://semver.org/lang/zh-CN/)
版本格式：主版本号.次版本号.修订号（1.0.0），版本号递增规则如下
- 主版本号：当你做了不兼容的API修改
- 次版本号：当你做了向下兼容的功能性新增
- 修订号：当你做了向下兼容的问题修正

### `files`：选择上传到npm的文件
- 未配置此字段则默认忽略`.gitignore`中的内容
- 指示`npm publish`的时候需要上传的内容，如：`dist`
- `package.json`、`readme.md`、`CHANGELOG.md`、`LICENSE`会包含在其中

### 依赖：dependencies
- `dependencies`：业务依赖模块
- `devDependencies`：开发环境依赖模块
- `peerDependencies`：使用此项目应安装的模块

### 模块入口文件
- `main`：常规脚本文件，指向模块根脚本
- `module`：非官方字段，打包工具会优先查找此字段获得`es module`模块
- `types`：`typescript`类型入口文件，提供模块的类型声明

### `scripts`：执行命令
可以添加npm的生命周期钩子：
```json
{
  "scripts":{
    // 在发布模块之前执行此命令
    "prepublishOnly":"npm run build"
  }
}
```
更多钩子：[npm scripts](https://docs.npmjs.com/cli/v7/using-npm/scripts)