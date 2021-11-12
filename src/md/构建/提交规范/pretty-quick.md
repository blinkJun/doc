# [`pretty-quick`](https://www.npmjs.com/package/pretty-quick)
美化暂存的代码


## 安装
```bash
npm install --save-dev prettier pretty-quick
```

## 使用
1. 在`package.json`中配置：
```json
{
  "scripts":{
    "pretty-quick": "pretty-quick --staged"
  }
}
```

2. 使用：`npm run pretty-quick`
