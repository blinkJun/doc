const http = require('http');
const url = require('url');

// 缓存回调事件
const events = [];
// 缓存定时器
const timers = new Set();
// 当前挂起的请求
const subscribers = new Set();

// 触发完成事件，回调挂起的请求
const EventProducer = () => {
  const event = {
    id: Date.now(),
    timestamp: Date.now(),
  };
  events.push(event);

  // 通知所有挂起的请求
  subscribers.forEach((subscriber) => {
    subscriber.resp.write(
      JSON.stringify(
        events.filter((event) => event.timestamp > subscriber.timestamp)
      )
    );
    subscriber.resp.end();
  });
  // 重置subscribers
  subscribers.clear();
  // 取消请求的超时回调
  timers.forEach((timer) => clearTimeout(timer));
  // 重置timers
  timers.clear();
};

// 5秒生成一个事件
setInterval(() => {
  EventProducer();
}, 5000);

// 创建服务
const server = http.createServer((req, resp) => {
  const urlParsed = url.parse(req.url, true);

  resp.setHeader('Access-Control-Allow-Origin', '*');
  resp.setHeader('Origin', '*');

  if (urlParsed.pathname == '/list') {
    // 发送服务端现存事件
    resp.write(JSON.stringify(events));
    resp.end();
  } else if (urlParsed.pathname == '/subscribe') {
    const timestamp = parseInt(urlParsed.query['timestamp']);
    const subscriber = {
      timestamp,
      resp,
    };
    // 新建的连接挂起来
    subscribers.add(subscriber);

    // 30s超时，自动关闭连接
    const timer = setTimeout(() => {
      resp.end();
      timers.delete(timer);
    }, 30000);

    // 客户端主动断开连接
    req.on('close', () => {
      subscribers.delete(subscriber);
      clearTimeout(timer);
    });

    timers.add(timer);
  }
});

server.listen(8080, () => {
  console.log('server is up');
});
