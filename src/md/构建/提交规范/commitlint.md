# [commitlint](https://www.npmjs.com/package/@commitlint/cli)
验证提交的信息是否符合规范

## 使用

1. 安装校验模块和推荐配置
```bash
npm i @commitlint/cli @commitlint/config-conventional -D
```

2. 配置 ` commitlint.config.js`
```bash
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js
```

3. 使用
  - 直接使用：`npx commitlint --edit`，验证当前最新的提交信息是否符合规则
  - 搭配`husky`使用：[点击查看](./husky.md#常用钩子)
