# 压缩

## `zlib`模块（内置）

### `gzip`压缩

通过转换流的方式对数据进行压缩。

```js
const zlib = require('zlib')
const gzip = zlib.createGzip()

const fs = require('fs')

const readStream = fs.createReadStream('./a.txt')
const writeStream = fs.createWriteStream('./b.txt')

// 查看会是乱码，因为已经被压缩
readStream.pipe(gzip).pipe(writeStream)
```
