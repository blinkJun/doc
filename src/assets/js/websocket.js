export default class WebSocketAuto extends EventTarget {
  constructor(options) {
    super();

    this.url = options.url;
    this.webSocketOptions = options.webSocketOptions || [];

    // 设置连接的超时时间
    this.connectTimeOut = options.connectTimeOut || 2000;

    // 限制重连次数，默认不限制
    this.reConnectTimmer = null;
    this.reConnectTimeOut = options.reConnectTimeOut || 2000;
    this.reConnectRepeatLimit = options.reConnectRepeatLimit || null;
    this.reConnectRepeatCount = 0;

    // 心跳配置
    // 是否开启心跳检测，后端需要响应心跳，若后端不响应心跳，会一直重连！
    this.heartCheckEnable = options.heartCheckEnable || false;
    this.heartCheckTimer = null;
    // 心跳频率
    this.heartCheckTimeOut = options.heartCheckTimeOut || 2000;
    this.heartCheckPing = options.heartCheckPing || 'ping';
    this.heartCheckPong = options.heartCheckPong || 'pong';
    // 发送心跳包后等待的时间，超时则重连
    this.heartCheckCloseTimer = null;
    this.heartCheckCloseTimeOut = options.heartCheckCloseTimeOut || 2000;

    // 是否主动关闭
    this.activeClose = false;

    this.connect();
  }
  // 连接
  connect() {
    const ws = (this.ws = new WebSocket(this.url, ...this.webSocketOptions));

    // 设置连接超时时间
    const connectTimeOutTimer = setTimeout(() => {
      ws.close();
      this.reConnect();
      throw new Error(`WebSocket connect to ${this.url} timeout`);
    }, this.connectTimeOut);

    // 连接成功
    ws.addEventListener('open', (event) => {
      clearTimeout(connectTimeOutTimer);
      // 重置配置
      this.reConnectRepeatCount = 0;
      this.activeClose = false;
      this.dispatchEvent(new CustomEvent('open', { detail: event }));
      // 开始心跳检测
      if (this.heartCheckEnable) {
        this.heartCheck();
      }
    });

    // 收到消息
    ws.addEventListener('message', (event) => {
      // 返回的消息
      // 没有开启心跳检测则直接触发事件，开启了心跳检测且返回数据不是指定的心跳响应也触发事件
      if (!this.heartCheckEnable || this.heartCheckPong !== event.data) {
        this.dispatchEvent(new MessageEvent('message', event));
      }
      if (this.heartCheckEnable) {
        // 开始心跳检测
        this.heartCheck();
      }
    });

    // 连接关闭
    ws.addEventListener('close', (event) => {
      // 停止心跳检测
      this.stopHeartCheck();
      this.dispatchEvent(new CloseEvent('close', event));
      // 如果不是主动被关闭，则尝试重连
      if (!this.activeClose) {
        this.reConnect();
      }
    });

    // 连接出错
    ws.addEventListener('error', (event) => {
      // 停止心跳检测
      this.stopHeartCheck();
      this.dispatchEvent(new ErrorEvent('error', event));
      // 重连
      this.reConnect();
    });
  }
  // 重连
  reConnect() {
    // 如果设置了重连次数限制，超出限制则不再重连
    if (
      this.reConnectRepeatLimit &&
      this.reConnectRepeatCount >= this.reConnectRepeatLimit
    ) {
      return false;
    }
    // 延时重连
    clearTimeout(this.reConnectTimmer);
    this.reConnectTimmer = setTimeout(() => {
      this.reConnectRepeatCount++;
      this.connect();
    }, this.reConnectTimeOut);
  }
  // 发送消息
  // 断网情况下，无法触发close事件，ws会较长时间处于CLOSING状态，此时此函数会报错
  // 请使用trycatch捕获错误处理
  send(...args) {
    return this.ws?.send(...args);
  }
  // 手动关闭
  close() {
    this.activeClose = true;
    return this.ws?.close();
  }
  // 心跳检测
  heartCheck() {
    this.stopHeartCheck();
    this.heartCheckTimer = setTimeout(() => {
      // 发送心跳包
      this.send(this.heartCheckPing);
      // 一定时间内无响应则关闭，触发重连
      this.heartCheckCloseTimer = setTimeout(() => {
        this.ws?.close();
      }, this.heartCheckCloseTimeOut);
    }, this.heartCheckTimeOut);
  }
  // 停止心跳检测
  stopHeartCheck() {
    clearTimeout(this.heartCheckTimer);
    clearTimeout(this.heartCheckCloseTimer);
  }
}
