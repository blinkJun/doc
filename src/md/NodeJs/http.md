# `http`（内置）

## 创建服务

```js
const http = require('http');

// 创建服务
const server = http.createServer((req, res) => {
  // 接受请求，并返回内容

  // 输出流写入数据
  res.write('hello');
  res.write('world');

  // 写入响应状态，指定返回内容格式
  res.writeHead(200, {
    'content-type': 'text/html;charset=utf-8',
  });

  // 完成写入
  res.end();
});

// 监听端口
server.listen(3000);
```
