# `Socket`

`websocket`并不是一个全新的协议，而是利用了`http`协议来建立连接。

## 应用场景

- 弹幕
- 即时通讯
- 协同编辑
- 实时位置
- 体育实况更新
- 股票基金实时更新

使用`http`请求实现的缺点：

轮询：

1. 即时性不强，需要特定时间才会去请求。
2. 频繁请求，用户量大时，服务器压力也大

长连接：

1. 服务器会挂起连接，当请求量多时，服务器压力也会增大

## 建立连接

`socket`使用一个标准的`http`请求附带一些特殊的首部字段向服务器发起连接。

```HTTP
GET ws://localhost:3000/ws/chat HTTP/1.1
HOST: localhost
upgrade: websocket
Connection: Upgrade
Origin: http://localhost:3000
Sec-WebSocket-Key: client-random-string
Sec-WebSocket-Version: 13
```

该请求和普通`http`请求有几点不同：

1. `GET`请求是以`ws://`开头的地址
2. 请求头`upgrade: websocket`和`Connection: Upgrade`表示这个连接将要被转换为`WebSocket`连接
3. `Sec-WebSocket-Key`用于标识这个连接，并非用于加密数据
4. `Sec-WebSocket-Version`指定了`WebSocket`的协议版本

若服务器接受请求，则会返回如下响应：

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: upgrade
Sec-WebSocket-Accept: server-random-string
```

该响应代码`101`表示本次连接的`http`协议即将被更改，更改后的协议为`Upgrade: websocket`指定的`websocket`协议

版本号和子协议规定了双方可以理解的数据格式和是否支持压缩。如果直接使用`WebSocket`的`api`则不需要考虑这些。

- **通讯数据格式**：可以使用字符串或者二进制数据进行通讯，通常使用`json`字符串比较方便。

- **`websocket`的全双工通讯**：
  为什么`websocket`可以实现全双工通信而`http`不行呢？实际上`http`是建立在`tcp`协议之上，`tcp`协议本身实现了全双工通信，但是`http`的请求-应答机制限制了全双工通信。`websocket`建立连接后就不会再使用`http`协议请求，从而可以互相通信。

- **安全的`websocket`连接机制**：与`https`类似，浏览器使用`wss://xxx`创建`websocket`连接时，会先通过`https`创建安全的连接，然后升级为安全的`websocket`连接，底层通信走的还是安全的`ssl/tls`协议

## 浏览器支持

- `chrome`
- `firefox`
- `ie` > 10
- `safari` >= 6
- `android` >= 4.4
- `ios` >= 8

## `ws` 模块

客户端：

```js
// https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {};
ws.onmessage = (msg) => {};
ws.send('something');
```

服务端：

```js
// https://www.npmjs.com/package/ws
import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {});
  ws.send('something');
  ws.on('close', () => {});
});

// 获取所有客户端
console.log(wss.clients);
```

## 消息格式规范

```js
const WSMessageType = {
  message: 1,
  error: 2,
  image: 3,
};
const createMessage = (type, data) => {
  return JSON.stringify({
    type,
    data,
  });
};

const message = createMessage(WSMessageType.message, 'hello world');
```

## 登录用户信息和`ws`客户端关联

```js
ws.user = user;
```

## `socket.io` 模块

客户端

```js
// https://socket.io/docs/v4/client-initialization/
import io from 'socket.io';
const socket = io('ws://localhost:8080');
socket.on('connection', () => {});
socket.emit('message', 'world');
```

服务端

```js
// https://socket.io/docs/v4/server-installation/
const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', (client) => {
  socket.emit('message', 'hello');
  client.on('event', (data) => {
    /* … */
  });
  client.on('disconnect', () => {
    /* … */
  });

  // 获取请求
  console.log(client.handshake);

  // 获取客户端 Map结构
  console.log(io.sockets.sockets);
});
server.listen(3000);
```
