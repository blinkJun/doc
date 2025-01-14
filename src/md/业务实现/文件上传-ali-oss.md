# 使用`ali-oss`文件上传

<<< @/assets/demos/ali-oss/ali-oss.js

## 使用

```js
import OssClient from './ali-oss.js'

const ossProjectPath = 'folder_test_002/intelligent-editor/'
const localProjectDist = `${process.cwd()}/dist`
const args = process.argv.slice(2)

const client = new OssClient({
  region: 'oss-cn-hangzhou',
  accessKeyId: '***',
  accessKeySecret: '***',
  bucket: '****',
  timeout: '120s',
  retryMax: 10
})

client.upload({
  ossProjectPath,
  localProjectDist,
  needDeleteServerFiles: args[0] === '-delete'
}).catch((err) => {
  console.log(err)
  //   以失败退出
  process.exit(1)
})
```
