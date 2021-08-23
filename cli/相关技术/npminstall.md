## [npminstall](https://www.npmjs.com/package/npminstall) 的使用方法

### 安装
```BASH
npm i npminstall --save
```

### 安装模块到指定目录
```javascript
const npminstall = require('npminstall')

npminstall({
  root:path.resolve(userHome,'.blink-cli-dev'),
  storeDir:path.resolve(userHome,'.blink-cli-dev','node_modules'),
  registry:'https://registry.npmjs.org',
  pkgs:[
    {
      name:'foo',
      version:'1.0.0'
    }
  ]
})
```