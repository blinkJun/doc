# [`git-cz`](https://www.npmjs.com/package/git-cz)

按步骤完成一次规范的代码提交

## 直接使用
```bash
npx git-cz
```
或者在`package.json`中配置`scripts`：
```json
{
  "scripts":{
    "commit":"npx git-cz"
  }
}
```
使用：`npm run commit`

- type，提交类型：
  - feat： 新增一个功能
  - fix: 修复bug
  - docs: 仅仅修改了文档，比如README, CHANGELOG, CONTRIBUTE等等
  - style: 仅仅修改了空格、格式缩进等等，不改变代码逻辑
  - refactor: 代码重构，没有加新功能或者修复bug
  - perf: 优化相关，比如提升性能、体验
  - test: 测试用例，包括增加缺失用例或者修正测试用例
- scope，所属模块，可忽略
- subject，简短描述
- body，详细描述


## `Commitizen` 适配器
如果需要在项目中使用`commitizen`生成符合`AngularJS`规范的提交说明，初始化`cz-conventional-changelog`适配器：
```bash
npm i cz-conventional-changelog -D
```
在`package.json`中配置
```json
{
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-conventional-changelog"
    }
  }
}
```
