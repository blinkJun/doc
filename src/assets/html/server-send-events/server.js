const http = require('http');

http
  .createServer((req, res) => {
    res.writeHead(200, {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
      'Access-Control-Allow-Origin': '*',
      origin: '*',
    });

    const sendMessage = (data) => {
      res.write(`data: ${data}\n\n`);
    };

    // 每隔一段时间发送一个消息
    setInterval(() => {
      sendMessage(
        JSON.stringify({
          time: Date.now(),
        })
      );
    }, 1000);

    setTimeout(() => {
      // 发送一个自定义事件
      res.write(`: custom close event\n`);
      res.write(`id: close-id\n`);
      res.write(`event: close\n`);
      res.write(`retry: 1000\n`);
      res.write(`data: close event\n\n`);
    }, 1000);
  })
  .listen(3000);

console.log('SSE server running at http://localhost:3000');
