# 在小程序中根据环境使用对应的`baseUrl`

1. 配置多个`baseUrl`

```js
const yuwenBaseUrl = 'http://192.168.31.119:8801';
const cunlinBaseUrl = 'http://192.168.31.119:8801';

const testBaseUrl = 'http://111.12.91.15:8805';
const prodBaseUrl = 'https://hsjc.bhsxxzx.com';
```

2. 定义环境

```js
// 根据环境配置
const baseUrls = {
  // 开发版
  develop: yuwenBaseUrl,
  // 体验版
  trial: testBaseUrl,
  // 正式版
  release: prodBaseUrl,
};
```

3. 根据环境信息得到当前环境`apiHost`
```js
// 获取当前环境信息
const accountInfo = wx.getAccountInfoSync()
const { miniProgram } = accountInfo
// 根据环境使用 baseUrl
export const apiHost = baseUrls[miniProgram.envVersion]
```
