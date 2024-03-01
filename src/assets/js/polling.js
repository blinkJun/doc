export default class Polling extends EventTarget {
  constructor({ request, needToPolling }) {
    super();
    // 请求
    this.request = request;
    // 检查是否需要继续轮询
    this.needToPolling = needToPolling || (() => true);
    this.pollingListTimer = null;
    this.delay = 3000;
    this.pollingId = 0;
    this.onRequestPollingList = false;
    this.requestErrorCount = 0;
  }

  async start() {
    const needPolling = await this.needToPolling();
    if (needPolling) {
      let delay = this.delay * (this.requestErrorCount + 1);
      delay = delay > 30000 ? 30000 : delay;
      this.pollingListTimer = setTimeout(() => {
        this.polling();
      }, delay);
    }
  }

  async stop() {
    // 更新轮询id，所有请求废弃
    this.pollingId = this.pollingId + 1;
    clearTimeout(this.pollingListTimer);
    this.onRequestPollingList = false;
    this.requestErrorCount = 0;
  }

  async polling() {
    const pollingId = this.pollingId;
    if (this.onRequestPollingList) {
      return false;
    }
    this.onRequestPollingList = true;
    try {
      const res = await this.request();
      // 重置请求错误状态为0
      this.requestErrorCount = 0;
      // 如果已经变更了轮询id，则废弃
      if (pollingId !== this.pollingId) {
        this.onRequestPollingList = false;
        return false;
      }
      // 更新数据
      this.dispatchEvent(new CustomEvent('update', { detail: res }));
      // 传入新数据由调用者判断是否需要继续轮询
      const needPolling = await this.needToPolling(res);
      // 不再需要轮询表示轮询已结束
      if (!needPolling) {
        this.dispatchEvent(new Event('end'));
        this.onRequestPollingList = false;
        return false;
      }
    } catch (error) {
      this.requestErrorCount++;
      console.log(error);
    }
    this.start();
    this.onRequestPollingList = false;
  }
}
