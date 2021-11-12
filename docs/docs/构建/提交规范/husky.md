# [`husky`](https://www.npmjs.com/package/husky)

git钩子函数触发时，执行一系列命令

## 安装

```bash
npm install husky --save-dev
```

设置`npm`钩子函数，在`npm install`的时候安装`husky`：
```bash
npm set-script prepare "husky install"
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
