# `commitizen`

让你的`git`提交更加规范

## 安装和使用

全局安装

```bash
npm i commitizen -g
```

使用

```
git cz -m"init"
```

如果你不是运行在`Commitizen friendly`环境中，`git cz`就和普通的`git commit`一模一样。

## 创建友好环境 `Making your repo Commitizen friendly`

此环境即为`commitizen`适配器，通过问答选择的方式来规范提交结构信息。

通过`commitizen`工具来安装符合`AngularJS`提交说明规范的适配器：

```bash
commitizen init cz-conventional-changelog --save-dev --save-exact
```

如果已有适配器，可通过`--force`来强制安装

此操作实际做的工作如下：

1. 安装`cz-conventional-changelog`适配器模块到项目
2. 在`package.json`中添加如下配置：
   ```json
    "config": {
      "commitizen": {
        "path": "cz-conventional-changelog"
      }
    }
   ```

在 2 中，也可以选择把这个设置放置到单独文件中：`.czrc`：

```json
{
  "path": "cz-conventional-changelog"
}
```

## [`git-cz`](https://www.npmjs.com/package/git-cz)

无需安装`commitizen`、`cz-conventional-changelog`适配器，使用指定命令即可完成一次规范的代码提交

安装：

```bash
npm i git-cz --save-dev
```

使用

```bash
npx git-cz
```

或者在`package.json`中配置`scripts`：

```json
{
  "scripts": {
    "commit": "git add . && npx git-cz"
  }
}
```

使用：`npm run commit`

- `type`，提交类型：
  - `feat`： 新增一个功能
  - `fix`: 修复 bug
  - `docs`: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等等
  - `style`: 仅仅修改了空格、格式缩进等等，不改变代码逻辑
  - `refactor`: 代码重构，没有加新功能或者修复 bug
  - `perf`: 优化相关，比如提升性能、体验
  - `test`: 测试用例，包括增加缺失用例或者修正测试用例
- `scope`，所属模块，可忽略
- `subject`，简短描述
- `body`，详细描述
