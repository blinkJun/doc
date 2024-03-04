const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (client) => {
  client.on('message', (message) => {
    // 响应客户端的自定义ping pong
    if (message.toString() === 'ping') {
      client.send('pong');
    }
  });

  // 发送规范推荐的ping
  client.ping();
  // 收到规范推荐的pong
  client.on('pong', () => {
    console.log('pong');
  });

  client.on('close', () => {});
});
