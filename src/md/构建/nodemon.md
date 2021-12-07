# `nodemon`
检测文件修改，自动重启应用，帮助开发基于`node.js`的项目

## 如何使用
1. 安装
```bash
npm i nodemon --save-dev
```

2. 使用：直接替换 `node` 命令

```bash
node index.js
# =>
nodemon index.js
```

3. 修改配置

基本配置：
```json
{
  "restartable":"rs",
  "verbose": true,
  "ignore": ["*.test.js", "fixtures/*"],
  "execMap": {
    "rb": "ruby",
    "pde": "processing --sketch={{pwd}} --run"
  },
  "watch": [
    "./src/*"
  ],
  "env": {
    "NODE_ENV": "development",
    "PORT": "3000"
  },
  "ext": "js json",
}
```

配置说明：
- `restartable`：设置重启模式，需要手动重启时输入`rs`
- `verbose`：设置日志输出模式，·为详细模式
- `watch`：需要监听的文件
- `ignore`：忽略的文件
  默认忽略：`.git`, `node_modules`, `bower_components`, `.sass-cache`
- `delay`：设置延迟时间
- `exec`：执行的命令
- `ext`：文件后缀名
- `execMap`：运行服务的后缀名和对应的运行命令
- `env`：运行环境 `development` 是开发环境，`production` 是生产环境。`port` 是端口号

可将配置输出为`nodemon.json`放置在根目录，也可以在`package.json`中配置`nodemonConfig`字段。

## `typescript`
检测`typescript`文件

1. 安装 `ts-node`
```bash
npm i ts-node --save-dev
```

2. 在配置中的`ext`中添加`ts`文件监检测
```json
{
  "ext": "js json ts",
}
```

3. 检测`ts`文件：
```bash
nodemon index.ts
```
