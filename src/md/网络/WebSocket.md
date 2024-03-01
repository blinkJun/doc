# `WebSocket`

`WebSocket`并不是一个全新的协议，而是利用了`HTTP`协议来建立连接。

`WebSocket`和`HTTP`的异同：

- `WebSocket`协议跟`HTTP`一样处在应用层，是可靠的`tcp`连接，具体查看[分层管理](./网络基础.md#分层管理)。`WebSocket`在建立连接时，可以使用已有的`HTTP`的`GET`请求进行握手：客户端在请求头中将`WebSocket`协议版本等信息发生到服务器，服务器同意的话，会响应一个`101`的状态码。就是说一次`HTTP`请求和响应，即可轻松转换协议到`WebSocket`。
- `WebSocket`可以双向通信，`HTTP`只能由客户端发起
- `WebSocket`每个数据帧较`HTTP`报文都更轻量
  - `WebSocket`每个数据帧只有固定、轻量的头信息，不会有`cookie`等或者自定义的头信息。并且建立通讯后是一对一的，不需要携带验证信息。但握手时的 HTTP 请求会自动携带`cookie`。
  - `WebSocket`在应用层就会将大的数据分拆到多个数据帧，而`HTTP`不会拆分每个报文。
- `WebSocket`属于`HTML5`

## 其他长连接方案

在了解`WebSocket`前应该了解类似的技术解决方案：[轮询](#轮询)

## 应用场景

- 弹幕
- 即时通讯
- 协同编辑
- 实时位置
- 体育实况更新
- 股票基金实时更新

## 优缺点

优点：

- 连接次数少：`WebSocket`并不是一个新协议，通过一个`HTTP`升级协议就可以完成连接
- 实时性高：服务端可以实时推送数据到客户端
- 双向通信：客户端和服务端可以互相发生信息
- 适合频繁通信：长时间保持连接，适合需要持续对话的场景

缺点：

- 代理限制：某些代理应用如`nginx`的长连接时间是有限制的，可能需要客户端自动重连
- 保持状态：`WebSocket`是有状态的，服务更新时需要对正在连接的客户端作兼容

## 工作原理

### 连接阶段

`socket`使用一个标准的`HTTP`请求附带一些特殊的首部字段向服务器发起连接。

```HTTP
GET ws://localhost:3000/ws/chat HTTP/1.1
HOST: localhost
upgrade: WebSocket
Connection: Upgrade
Origin: HTTP://localhost:3000
Sec-WebSocket-Key: client-random-string
Sec-WebSocket-Version: 13
```

该请求和普通`HTTP`请求有几点不同：

1. `GET`请求是以`ws://`开头的地址
2. 请求头`upgrade: WebSocket`和`Connection: Upgrade`表示这个连接将要被转换为`WebSocket`连接
3. `Sec-WebSocket-Key`用于标识这个连接，并非用于加密数据
4. `Sec-WebSocket-Version`指定了`WebSocket`的协议版本

若服务器接受请求，则会返回如下响应：

```HTTP
HTTP/1.1 101 Switching Protocols
Upgrade: WebSocket
Connection: upgrade
Sec-WebSocket-Accept: server-random-string
```

该响应代码`101`表示本次连接的`HTTP`协议即将被更改，更改后的协议为`Upgrade: WebSocket`指定的`WebSocket`协议

版本号和子协议规定了双方可以理解的数据格式和是否支持压缩。如果直接使用`WebSocket`的`api`则不需要考虑这些。

- **通讯数据格式**：可以使用字符串或者二进制数据进行通讯，通常使用`json`字符串比较方便。

- **`WebSocket`的全双工通讯**：
  为什么`WebSocket`可以实现全双工通信而`HTTP`不行呢？实际上`HTTP`是建立在`tcp`协议之上，`tcp`协议本身实现了全双工通信，但是`HTTP`的请求-应答机制限制了全双工通信。`WebSocket`建立连接后就不会再使用`HTTP`协议请求，从而可以互相通信。

- **安全的`WebSocket`连接机制**：与`HTTPS`类似，浏览器使用`wss://xxx`创建`WebSocket`连接时，会先通过`HTTPS`创建安全的连接，然后升级为安全的`WebSocket`连接，底层通信走的还是安全的`ssl/tls`协议

### 数据传输阶段
具体的数据格式是怎么样的呢？WebSocket 的每条消息可能会被切分成多个数据帧（最小单位）。发送端会将消息切割成多个帧发送给接收端，接收端接收消息帧，并将关联的帧重新组装成完整的消息。

帧信息通常是无法直接获取的，浏览器并没有暴露获取帧信息的`API`，以下只作了解

- 数据帧

  - 帧头：帧头包括四个部分：`fin`、`rsv1`、`rsv2`、`rsv3`、`opcode`、`masked` 和 `payload_length`。其中，`fin` 表示数据帧的结束标志，`rsv1`、`rsv2`、`rsv3` 表示保留字段，`opcode` 表示数据帧的类型，`masked` 表示是否进行掩码处理，`payload_length` 表示有效载荷的长度。
  - 有效载荷：有效载荷是数据帧中实际的数据部分，它由客户端和服务端进行数据传输。

- 控制帧

  - `Ping` 帧：`Ping` 帧用于测试客户端和服务端之间的连接状态，客户端向服务端发送 `Ping` 帧，服务端收到后需要向客户端发送 `Pong` 帧进行响应。
  - `Pong` 帧：`Pong` 帧用于响应客户端的 `Ping` 帧，它用于测试客户端和服务端之间的连接状态。
  - `Close` 帧：`Close` 帧用于关闭客户端和服务端之间的连接，它包括四个部分：`fin`、`rsv1`、`rsv2`、`rsv3`、`opcode`、`masked` 和 `payload_length`。其中，`opcode` 的值为 8，表示 `Close` 帧。

### 关闭连接阶段

当不再需要WebSocket连接时，需要进行关闭阶段。关闭阶段包括以下几个步骤：

客户端向服务端发送关闭请求，请求中包含一个`WebSocket`的随机密钥。
服务端接收到关闭请求后，向客户端发送关闭响应，关闭响应中包含服务端生成的随机密钥。
客户端收到关闭响应后，关闭`WebSocket`连接。

## 心跳检测机制

1. 传输层`TCP`有自己的心跳检测机制，失活后会通知应用层，但是依赖于系统的实现，具有不确定性，若要通过`tcp`来检测需要修改对应的配置，在浏览器环境不太现实
2. `WebSocket`有自己的保活机制，但是在协议中不是强制的。`WebSocket`通讯的数据帧会有一个4位的`OPCODE`，标记当前传输的数据帧类型，例如：`0x8`表示关闭帧、`0x9`表示`ping`帧、`0xA`表示`pong`帧、`0x1`普通文本数据帧等。
   - 关闭数据帧，在任意一方要关闭通道时，发送给对方。例如浏览器的`WebSocket`实例调用`close`时，就会发送一个`OPCODE`为连接关闭的数据帧给服务器端，服务器端接收到后同样需要返回一个关闭数据帧，然后关闭底层的`TCP`连接。
   - `ping`数据帧，用于发送方询问对方是否存活，也就是心跳检测包。目前只有后端可以控制`ping`数据帧的发送。但浏览器端的`WebSocket`实例上没有对应的`api`可用。
   - `pong`数据帧，当`WebSocket`通讯一方接收到对方发送的`ping`数据帧后，需要及时回复一个内容一致，且`OPCODE`标记为`pong`的数据帧，告诉对方我还在。但目前回复`pong`是浏览器的自动行为，意味着不同浏览器会有差异。而且在`js`中没有相关`api`可以控制。

综合上述，探测对方存活的方式都是服务器主动进行心跳检测。浏览器并没有提供相关能力。为了能够在浏览器端实时探测后端的存活，或者说连接依旧可用，只能自己实现心跳检测。

在服务端使用协议推荐的方式对客户端进行心跳检测：

<<< @/assets/html/WebSocket/server-websocket.js{13-17}

在服务端对客户端进行心跳检测可以清理不在线的客户端，释放资源，但是对于是否要实现客户端对服务端的心跳检测，我认为是不必要的，断连了再重连即可。

若为了增强连接的稳定性，也可以实现客户端和服务端配合进行心跳检测：

::: details

- 客户端心跳检测

<<< @/assets/js/websocket.js{123}

- 服务端配合响应

<<< @/assets/html/WebSocket/server-websocket.js{8}

:::

## `ws` 模块

客户端：

```js
// HTTPS://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket
const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {};
ws.onmessage = (msg) => {};
ws.send('something');
```

服务端：

```js
// HTTPS://www.npmjs.com/package/ws
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
// HTTPS://socket.io/docs/v4/client-initialization/
import io from 'socket.io';
const socket = io('ws://localhost:8080');
socket.on('connection', () => {});
socket.emit('message', 'world');
```

服务端

```js
// HTTPS://socket.io/docs/v4/server-installation/
const server = require('HTTP').createServer();
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

# 轮询

当服务器出现以下情况时，没办法通过一个`HTTP`请求返回客户端所需要的内容：

- 此次处理需要的时间不确定，有可能会很长，需要客户端等待
- 服务器会持续有新内容，此次请求完成后还需要下一次请求

而客户端又需要获得最新的数据，对数据实时性要求很高，这时候就需要通过以下几种方式来实现功能：

1. 短轮询(`polling`)
2. 长轮询(`long polling`)
3. 长连接(`WebSocket`)
4. 服务器事件推送(`Sever-Sent Events`， `aka SSE`)

## 短轮询（`Polling`）

短轮询其实就是每隔一段时间就请求一次，获取最新的数据。

短轮询服务端通常不做处理，提供`HTTP`接口即可，由客户端决定轮询哪种数据格式的接口。

假设有一个持续更新的记录列表，一般有以下两种情况：

- 服务端不作修改，客户端持续的请求接口得到全部数据状态
- 客户端携带上一次获取得到的数据时间戳进行请求，服务端通过时间戳对比，返回时间戳之后更新的数据

优点：

- 实现简单

缺点：

- 无用的请求过多，每次请求不一定有新的数据
- 数据实时性差，并不是有了新数据就能马上被轮询到

短轮询实现：

::: details

- 实现

  <<< @/assets/js/polling.js

- 使用

  ```js
  const pollingInstance = new Polling({
    // 轮询的请求
    request: () => {
      return api();
    },
    // 可选：在此判断是否继续轮询，不传默认持续轮询
    needToPolling: (res) => {
      const undoneCount = 1;
      return undoneCount > 0;
    },
  });

  // 每次轮询请求回来的数据更新到列表
  pollingInstance.addListener('update', (res) => {
    // 处理轮询响应
    console.log(res);
  });

  // 轮询结束事件
  pollingInstance.addListener('end', (res) => {
    // 处理轮询响应
    console.log(res);
  });

  // 启动轮询
  pollingInstance.start();

  // 停止轮询
  pollingInstance.stop();
  ```

:::

## 长轮询（`Long Polling`）

在需要等待的情况下，那么服务端也进入等待状态，不立刻响应这个请求，将请求缓存起来，等待一段时间，如果到处理完成，或者有新数据更新时，逐个取出请求进行响应。

处理时间和新数据出现这个时间是无法预料的，所以“等待一段时间”通常为`30s`或者`60s`等预估的时间，超过时间还没有新数据就响应请求，让客户端重新请求。

优点：

- 大大减少了请求的次数
- 具有更好的数据实时性

缺点：

- 服务端会一直缓存客户端的请求，占用服务器资源
- 数据频繁更新的情况下会有大量的连接建立和关闭的处理，对性能有一定的影响

长轮询主要逻辑在服务端实现：

::: details

- 服务端

<<< @/assets/html/long-polling/server-long-polling.js

- 客户端

<<< @/assets/html/long-polling/client-long-polling.html

:::

## `SSE`(`Server-Send Events`)

基于`HTTP`协议，服务端向客户端推送事件的技术。

客户端向服务端发起一个持久化的`HTTP`连接，服务端接受请求后挂起，有新消息时通过这个连接推送数据给客户端，可以多次推送，跟`WebSocket`不同的是，只能服务端推送消息，不允许客户端向服务端发送消息。

优点：

- 连接数少：客户端和服务端只有一个持久的`HTTP`连接
- 数据实时性高：服务端可以实时推送数据到客户端
- 默认断线重连

缺点：

- 单项通信：只允许服务端推送，不允许客户端
- 代理限制：跟`WebSocket`一样，可能需要客户端重连
- 一般传输文本，二进制需要编码后发送，`WebSocket`默认支持传送二进制数据

`SSE`实现：

主要实现在服务端：

1. 首先设置`HTTP`响应头：
```http
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive
```

2. `message`

每个消息的结构为：`[field]: value`，每个结构使用`\n`分割，每个消息体再使用`\n`分割

> 每个消息必须发送`data`，否则不会触发事件。

`field`有以下几种类型：

  - `:`：注释
  - `data`：消息的具体内容
  - `event`：自定义事件，会触发客户端对应的事件，不设置则触发`message`事件
  - `id`：此次消息的`id`，在客户端使用`lastEventId`获取
  - `retry`：指定客户端重新发起连接的间隔

::: details

- 服务端

<<< @/assets/html/server-send-events/server.js

- 客户端

<<< @/assets/html/server-send-events/event-source.html

:::

