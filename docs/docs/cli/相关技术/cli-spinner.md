## [cli-spinner](https://www.npmjs.com/package/cli-spinner) 的使用方法
命令行loading效果

### 安装
```BASH
npm i cli-spinner --save
```

### 基本使用
```javascript
const {Spinner} = require('cli-spinner')

const spinnerInstance = new Spinner('loading... %s')
// 替换 %s 文本，使用内置的加载图
spinnerInstance.setSpinnerString(Spinner.spinners[0]);
// 启动
spinnerInstance.start()
// 结束
spinnerInstance.stop(true)
```