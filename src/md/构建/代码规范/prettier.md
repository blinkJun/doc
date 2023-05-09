# `prettier`美化代码

`prettier`基本不用配置，他有一套自己比较强硬的格式化规则，直接对代码进行格式化，通常格式化的代码也比较美观

## 配置规则（可以不配置）

配置文件为 `.prettierrc` 或是在 `package.json` 里配置 `prettier` 字段，常见配置规则如下：

```json
{
  "printWidth": 120, // 每行代码最大长度，默认为80
  "tabWidth": 4, //一个tab代表几个空格数，默认2
  "useTabs": false, //是否使用tab进行缩进，默认为false，表示用空格进行缩减
  "semi": true, // 行尾添加分号
  "singleQuote": true, // 使用单引号
  "jsxSingleQuote": true, // 使用单引号
  "jsxBracketSameLine": true, // 启用jsx语法，> 放在末尾
  "trailingComma": "es5", // 在多行逗号分隔的句法结构中尽可能打印尾随逗号，默认es5
  "arrowParens": "avoid" // 箭头函数尽可能省略括号。示例：x => x，默认always
}
```

## 使用

- `npm`模块方式

  1. 安装

     ```bash
     npm install prettier --save-dev --save-exact
     ```

  2. 通过命令行使用

     ```bash
     npx prettier --write src/main.ts
     ```

- 编辑器插件方式

  1. 在`VSCode`或其它编辑器的插件市场中搜索`prettier`插件安装

  2. 在格式化代码时选择`prettier`作为格式化插件

  > 可以在编辑器中配置`prettier`的规则，不在项目中配置规则。

## 和`eslint`的区别

1. `eslint`主要检测和格式化`js`**代码的质量的问题**
2. `prettier`格式化大部分代码类型的风格问题

## `ESLint` 和 `prettier` 的冲突问题

通常表现为在使用两种插件进行格式化时，格式化的代码不一致，`eslint`验证失败。

出现冲突的原因：

- 重叠的格式化规则不一致，二者重叠的配置规则可以参考[这里](https://github.com/prettier/eslint-config-prettier/blob/main/index.js#L23)。

- `vscode`同时开启二者进行格式化

  ```json
  {
    "editor.formatOnSave": true, // 保存时使用格式化
    "editor.defaultFormatter": "esbenp.prettier-vscode", // 默认格式化插件
    "eslint.enable": true, // eslint开启
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true // 代码保存使用eslint格式化
    }
  }
  ```

解决方法：将`eslint`和`prettier`冲突的配置禁用，统一使用`prettier`进行格式化，`eslint`只进行代码质量检查。

1. 覆盖冲突的规则：安装`eslint-config-prettier`到项目，在`eslint`配置中添加：

   ```json
   {
     "extends": ["prettier"] // 使用eslinst-config-prettier中的配置项
   }
   ```

   > 具体规则查看[这里](https://github.com/prettier/eslint-config-prettier/blob/main/index.js#L23)

   > 此时冲突的规则被覆盖，使用`eslint`格式化将忽略这些规则。`eslint`格式化的代码和`prettier`格式化的代码不再冲突，但是格式化的结果仍然不一致。

   > 如果希望`eslint`格式化的代码结果和`prettier`格式化的完全一致，则需要进入第二步骤

2. 使用`prettier`作为`eslint`插件进行格式化：安装`eslint-plugin-prettier`到项目，基于第 1 步扩展`eslint`配置：

   ```json
   {
     "extends": ["prettier"],
     "plugins": ["prettier"],
     "rules": {
       "prettier/prettier": "error", // 在eslint中运行prettier，并启用该插件提供的规则
       "arrow-body-style": "off", // 关闭规则
       "prefer-arrow-callback": "off" // 关闭规则
     }
   }
   ```

   或者也可以使用如下配置：

   ```json
   {
     "extends": ["plugin:prettier/recommended"]
   }
   ```

   > 这两个配置效果完全一致

   > 此时`eslint`格式化就会使用`prettier`插件来格式化那些忽略的内容，最终格式化结果就和`prettier`格式化的结果一致了。

   > 此时使用`eslint`还是`prettier`得到的格式化结果都一致，但是如果在`vscode`中还是同时开启了两种格式化。虽然结果一致，但是编辑进行了两次格式化，还是浪费了资源，那就需要将其中一种格式化关闭。

3. 推荐默认不使用保存代码自动格式化，使用手动的方式`alt+shift+f`进行手动格式化。在代码中右键选择默认的格式化工具，根据需求选择对应的格式化工具。但是可开启保存代码时触发`eslint`格式化，始终修复`js`代码的错误：
   ```json
   {
     "editor.codeActionsOnSave": {
       "source.fixAll.eslint": true
     }
   }
   ```

## 和`.editorconfig`的关系

`prettier`会从`.editorconfig`中读取符合规则的样式进行格式化。

在配置文件的选择上，`prettier`遵循以下顺序：

`.prettierrc`>`.editorconfig`>`用户在编辑器中的配置`
