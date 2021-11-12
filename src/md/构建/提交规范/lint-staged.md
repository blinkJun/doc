# [`lint-staged`](https://www.npmjs.com/package/lint-staged)
校验暂存的代码

## 安装
```bash
npm install lint-staged --save-dev
```

## 使用
1. 在`package.json`中配置：
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

2. 使用：`lint-staged`
