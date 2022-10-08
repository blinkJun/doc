# [`lint-staged`](https://www.npmjs.com/package/lint-staged)
使用`eslint`等工具校验和修复暂存的代码

## 安装
```bash
npm install lint-staged --save-dev
```

## 使用

1. 要预先配置好`eslint`
2. 在`package.json`中配置：
```json
{
  "scripts":{
    "lint-staged": "lint-staged"
  },
  "lint-staged": {
    "*.{vue,js,ts,jsx,tsx}": "eslint --fix"
  }
}
```
过滤文件采用的是`glob`模式
