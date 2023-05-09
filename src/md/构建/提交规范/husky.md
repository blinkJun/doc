# [`husky`](https://www.npmjs.com/package/husky)

`git`钩子函数触发时，执行一系列命令

## 安装

```bash
npm install husky --save-dev
```

设置`npm`钩子函数，在`npm install`的时候安装`husky`：

```bash
npm set-script prepare "husky install"
```

或者在`package.json`中配置：

```json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```

初始化一次

```bash
npm run prepare
```

## 使用

添加一个钩子函数：`pre-commit`

```bash
npx husky add .husky/pre-commit "npm test"
```

在提交时，`npm test`命令会被触发

```bash
git add .husky/pre-commit
git commit -m "Keep calm and commit"
```

更多文档：[husky](https://typicode.github.io/husky)

## 常用钩子

- 完成提交信息时对提交信息进行验证

```bash
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```

- 提交前验证提交暂存代码和美化暂存代码

```bash
npx husky add .husky/pre-commit "npm run lint-staged \n npm run pretty-quick"
```
