// 单例模式
// 惰性单例
const Singleton = function (name) {};
const getInstance = (function () {
  let instance;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();

// 策略模式
// 定义一系列算法，把他们一个个封装起来，并且使他们可以相互替换
const Strategy = {
  A: (num) => {
    return 2 * num;
  },
  B: (num) => {
    return 3 * num;
  },
  C: (num) => {
    return 4 * num;
  },
};

// 代理模式
// 缓存代理，缓存计算结果
const mult = function () {
  return 'result';
};
const proxyMult = (function () {
  let cache = {};
  return function () {
    let args = Array.prototype.join.call(arguments, ',');
    if (args in cache) {
      return cache[args];
    }
    return (cache[args] = mult.apply(this, arguments));
  };
})();

// 发布-订阅模式（观察者模式）：事件模型
class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }
  addListener(eventName, callback) {
    this.listeners.has(eventName) || this.listeners.set(eventName, callback);
    this.listeners.get(eventName).push(callback);
  }
  removeListener(eventName, callback) {
    if (this.listeners.has(eventName)) {
      let eventCallbackList = this.listeners.get(eventName);
      if (eventCallbackList && eventCallbackList.length) {
        let eventCallbackListLength = eventCallbackList.length;
        for (let i = 0; i < eventCallbackListLength; i++) {
          if (
            typeof eventCallbackList[i] === 'function' &&
            eventCallbackList[i] === callback
          ) {
            eventCallbackList.splice(i, 1);
            this.listeners.set(eventName, eventCallbackList);
            return true;
          }
        }
      } else {
        return false;
      }
    }
    return false;
  }
  emit(eventName, ...args) {
    if (this.listeners.has(eventName)) {
      const eventList = this.listeners.get(eventName);
      if (eventList && eventList.length) {
        eventList.forEach((callbackItem) => {
          callbackItem(...args);
        });
        return true;
      } else {
        return false;
      }
    }
  }
}

// 模板模式
class Modal {
  constructor() {}
  show() {
    console.log('show modal');
  }
  hide() {}
}
class WarningModal extends Modal {
  constructor() {
    super();
  }
  show() {
    console.log('show warning modal');
  }
}

// 享元模式，对象池
// 性能优化方案
const objectFactory = function (createObjectFn) {
  let objectPool = [];
  return {
    create: () => {
      var obj =
        objectPool.length === 0
          ? createObjectFn.apply(this, arguments)
          : objectPool.shift();
      return obj;
    },
    recover: (obj) => {
      objectPool.push(obj);
    },
  };
};
// 使用
const iframeFactory = objectFactory(() => {
  var iframe = document.createElement('iframe');
  document.body.appendChild(iframe);

  iframe.onload = function () {
    iframe.onload = null; // 防止 iframe 重复加载的 bug
    iframeFactory.recover(iframe); // iframe 加载完成之后回收节点
  };

  return iframe;
});

// 装饰者模式
// AOP装饰函数
Function.prototype.before = function (beforeFn) {
  let that = this;
  return function () {
    beforeFn.apply(this, arguments); //先执行beforeFn
    return that.apply(this, arguments); //再执行当前函数
  };
};
Function.prototype.after = function (afterFn) {
  let that = this;
  return function () {
    let ret = that.apply(this, arguments); //执行当前函数
    afterFn.apply(this, arguments);
    return ret;
  };
};

// 适配器模式
// 如：数据结构之间的转化
