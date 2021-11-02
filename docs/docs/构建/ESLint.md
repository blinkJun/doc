# [`ESLint`代码规范](http://eslint.cn/)
**规范的代码格式可以让整个工作的效率在一定程度上提升到最高**

## 没有规范可能出现的问题
- 代码格式难以读懂
- 代码提交的时候会有很多格式问题的修改，造成不必要的时间消耗

## `ESLint`是什么
> 是一个开源的`javascirpt`的 `linting`工具，使用 `espree` 将 `javascript` 代码解析成抽象语法树（`AST`），然后通过 `AST` 来分析我们的代码

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

### `VSCode` `ESLint`的插件，为代码提供实时校验
在 `VSCode` 插件市场中搜索 `ESLint`

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
      'quotes': 'single',
      'space-before-blocks': 'always',
    },
    //...
  };
  ```

### 修复提示的错误
- 在 `VSCode` 中 `ctrl+alt+p`查找 `eslint`命令进行修复
- 在 `VSCode` 中查找 `eslint` 配置选择保存文件自动修复


## `prettier` 美化代码

`eslint`解决的问题
- **代码的质量的问题**
- 代码的风格问题

`prettier`自动美化代码的风格，无需过多配置

### 使用 `prettier`

安装
```bash
npm install prettier --save-dev --save-exact
```

命令行使用
```bash
npx prettier --write src/main.ts
```

在`VSCode`中使用
和`ESLint`一样，安装插件，搜索命令执行，或者配置保存自动格式化

## `ESLint` 和 `prettier` 的冲突问题
在`ESLint`中使用 `prettier`插件
- 禁用所有和`prettier`有关的代码格式规则
- 将所有的 `prettier`规则和修改导入`ESLint`中，在`ESLint`统一的显示错误
