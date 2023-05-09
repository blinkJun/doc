# [`ESLint`代码规范](http://eslint.cn/)

**规范的代码格式可以让整个工作的效率在一定程度上提升到最高**

## 没有规范可能出现的问题

- 代码格式难以读懂
- 代码提交的时候会有很多格式问题的修改，造成不必要的时间消耗

## `ESLint`是什么

`eslint`是一个开源的`javascirpt`的 `linting`工具，使用 `espree` 将 `javascript` 代码解析成抽象语法树（`AST`），然后通过 `AST` 来分析我们的代码

## 安装 `ESLint`

```bash
npm i eslint --save-dev
```

## 使用 `ESLint`

### 命令行工具

```bash
npx eslint --version
```

校验代码

```bash
npx eslint --ext ts,vue src/**
```

初始化

```bash
npx eslint --init
```

### `ESLint`配置文件

放置在项目根目录下

- 可以使用 `.eslintrc.js`，使用`module.exports`导出`json`格式配置
- 可以直接配置为 `.eslintrd.json`
- 可以在`package.json`中的`eslintConfig`字段中配置

关注的配置：

- [`rules`](http://eslint.cn/docs/rules/)：自定义配置的规则
- `extends`：通过引用`NPM`包的方式集成一个个配置方案
  - `npm`模块由 `eslint-config-`开头，如:`eslint-config-myconfig`、`@scope/eslint-config-myconfig`
  - 使用时使用全称或者缩写：
  ```javascript
  // .eslintrc.js
  module.exports = {
    //...
    extends: [
      'eslint-config-myconfig', // 全称
      //  'myconfig'                   缩写
    ],
    plugins: [],
    rules: {
      quotes: 'single',
      'space-before-blocks': 'always',
    },
    //...
  };
  ```
- 如果想排除某些文件夹可以在项目根目录下增加一个文件：`.eslintignore`：
  ```
    dist
  ```

## 安装`VSCode` 的 `ESLint`的插件，为代码提供实时校验

在 `VSCode` 插件市场中搜索并安装 `ESLint` 插件

修复提示的错误

- 在 `VSCode` 中 `ctrl+alt+p`查找 `eslint`命令进行修复
- 在提示错误的红线上悬停，在出现的错误提示悬浮窗中点击快速修复
- 在 `VSCode` 中查找 `eslint` 配置选择保存文件自动修复
  ```json
  // settings.json
  {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
  ```

## 常用配置解析

```json
{
  // eslint服务会从代码文件向上查找配置文件，当配置为root=true时停止向上查找
  "root": true,
  // 与parseOptions同时存在，配置解析器
  "parser": "vue-eslint-parser",
  "parserOptions": {
    // parser只能有一个，可在此再配置一个parser处理
    "parser": "@typescript-eslint/parser",
    // 默认是 script ，es模块配置为 module
    "sourceType": "module",
    // 额外的语言特性
    "ecmaFeatures": {
      "jsx": true,
      "tsx": true
    }
  },
  // 启用的环境
  "env": {
    "browser": true,
    "node": true
  },
  // 使用插件增强
  "plugins": ["@typescript-eslint", "prettier"],
  // 基于哪些配置
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier"
  ],
  "rules": {
    // 使用两个空格缩进
    "indent": ["warn", 2],
    // 样式不美观直接显示警报
    "prettier/prettier": [
      "warn",
      {
        // window下换行是CRLF，linux下是LF 不检查这一项
        "endOfLine": "auto"
      }
    ]
  }
}
```
