# `NPM` 与 `package.json`

## `NPM`

`nodejs`模块化命令行工具

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

用来描述项目及项目所依赖的模块信息

### `name`

推荐使用全小写和`-`作为包的名称，如：`validate-npm-package-name`
可以使用此命令来查询模块名称是否已经被使用：`npm view <packageName>`

### `description`

用于书写描述此模块的基本信息。
如果你希望你模块被更多人搜索使用，这个字段是必不可少的，它能帮助人们在`npm`库中快速搜索到你的模块

### `keywords`

这是一个字符串数组，可以将一个个关键字字符串填入。
同样是为了帮助人们搜索到此模块

### `version`

语义化版本 - [semver](https://semver.org/lang/zh-CN/)
版本格式：主版本号.次版本号.修订号（`1.0.0`），版本号递增规则如下

- 主版本号：当你做了不兼容的API修改
- 次版本号：当你做了向下兼容的功能性新增
- 修订号：当你做了向下兼容的问题修正

### `homepage`

用于放置此模块的主页，可以是使用文档、`demo`

### `repository`

指定代码库的存放地址，方便查看模块的源码

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/npm/cli.git",
    // 指定目录
    "directory": "packages/react-dom"
  }
}
```

### `bugs`

`bugs`用于项目问题的反馈`issue`地址或者一个邮箱

```json
"bugs": {
  "url" : "https://github.com/owner/project/issues",
  "email" : "project@hostname.com"
}
```

### `files`：选择上传到npm的文件

- 未配置此字段则默认忽略`.gitignore`中的内容
- 指示`npm publish`的时候需要上传的内容，如：`dist`
- `package.json`、`readme.md`、`CHANGELOG.md`、`LICENSE`会包含在其中

### 依赖：dependencies

- `dependencies`：业务依赖模块
  使用`npm i package --save`进行安装，在`npm`5.x开始可以忽略`--save`，要关闭此功能，使用`npm config set save false`

- `devDependencies`：开发环境依赖模块
  使用`npm i -D`或者`npm i --save-dev`进行安装

- `peerDependencies`：使用此项目应安装的模块

### 安装依赖包的版本

相信大家都会经历过，我们安装一些依赖包的时候，版本号前面都会带 `^` 或者 `~` 的符号，这两个符号代表什么意思呢？

- `~` 会匹配最近的小版本依赖包，比如 `~1.2.3` 会匹配所有 `1.2.x` 版本，但是不包括 `1.3.0`
- `^` 会匹配最新的大版本依赖包，比如 `^1.2.3` 会匹配所有 `1.x.x` 的包，包括 `1.3.0`，但是不包括 `2.0.0`
- `*` 安装最新版本的依赖包，比如 `*1.2.3` 会匹配 `x.x.x`

当我们安装模块的时候，该如何选择那种符号设置模块？
写死一个版本号，这样没问题，但是当模块发布小版本对`bug`修复时，我们又需要对版本号进行修改，有点麻烦。
当使用`^`、`*`时，版本改动会比较大，很有可能会造成版本不兼容，不推荐使用。
建议使用`~`标记版本号，可以保证项目不会出现大问题，小版本的`bug`也可以得到修复。

### 模块入口文件

- `main`：常规脚本文件，指向模块根脚本
- `module`：非官方字段，打包工具会优先查找此字段获得`es module`模块
- `types`：`typescript`类型入口文件，提供模块的类型声明

### `scripts`：执行命令

添加自定义执行命令，也可以添加npm的生命周期钩子：

```json
{
  "scripts":{
    // 在发布模块之前执行此命令
    "prepublishOnly":"npm run build"
  }
}
```

更多钩子：[npm scripts](https://docs.npmjs.com/cli/v7/using-npm/scripts)

### `config`

可以用于添加命令行的环境变量
如有一个`packge.json`如下：

```json
{
  "name" : "writepress",
  "config" : { "port" : "8080" },
  "scripts" : { "start" : "node server.js" }
}
```

在`server.js`中就可以通过此方式获得`config`字段：`process.env.npm_package_config_port`

### 发布相关问题

- 当发布出现`402`错误时，表示发布的包为私有包，应该通过发布公开包的方式进行发布：
  - 通过`npm publish --access public`
  - 在`package.json`中配置：

  ```json
    "publishConfig": {
        "access": "public"
    },
  ```

## `package-lock.json`

保证多人开发时，大家安装模块的一致性。

### 出现的原因

当我们使用`~`、`^`、`*`等符号标记模块时，就有可能出现每个人安装的模块版本不一致的情况：一个同事安装了模块，不久后模块更新了新版本，之后另一个同事进行了安装。

有人说：那我每个模块写死版本号，不用这些符号标记模块就好了，每个人安装的都是指定的版本号。这种方式确实保证了项目安装的模块的一致性，但是忽略了模块里面也是有依赖的，模块里面的依赖我们是不能修改成为固定版本号的。

所以`package-lock.json`诞生了：`package-lock.json` 它会在 `npm` 更改 `node_modules` 目录树 或者 `package.json` 时自动生成的。

当我们使用`npm install`时，会自动生成一个`package-lock.json`文件在`package.json`同级目录下，当我们下次`npm install`时，会根据`package-lock.json`来处理依赖，保证模块安装的一致性。

### `cnpm install`

值得注意的是，使用其他命令时是不会生成`package-lock.json`，也不会按照`package-lock.json`来处理依赖的。
既想要淘宝源的速度，又想保证模块的一致性，可使用下面的方式将`npm`的默认源修改为淘宝源，使用`npm`命令来安装：

```bash
# 修改默认源
npm config set registry https://registry.npm.taobao.org
# 查看配置信息
npm config list
```

需要还原时：

```bash
npm config set registry https://registry.npmjs.org
```

## 使用`npm`安装`git`模块

如不想额外的部署私有模块化仓库，也不想将模块发布到`npm`公共平台上，可以选择直接安装私有`git`仓库如`gitlab`上的模块：

如平常使用`git`一样，需要在`gitlab`上设置`ssh key`，使用如下方式安装`git`模块

- `git+ssh`
```bash
  npm i git+ssh://git@github.com/livelybone/vue-select.git
```

- `git+http`
```bash
  npm i git+http://git.gxucreate.com:8091/sgz/bh-practitioners-nucleic-web.git
```

**使用`tag`来区分`git`模块版本**
1. 为`git`版本库指定提交设置`tag`并推送到远程
2. 安装模块的的时候使用`#`选择指定`tag`安装，如：
```bash
  npm i git+http://git.gxucreate.com:8091/sgz/bh-practitioners-nucleic-web.git#2.0.1
```
