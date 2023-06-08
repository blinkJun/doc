# Vue2 响应式

## 原理

1. 使用`Dep`构造函数收集依赖和触发依赖
2. 使用`observe`函数对对象递归劫持`getter`、`setter`方法，获取属性时**收集依赖**，更新属性时**触发依赖**
3. 实现一个`autorun`函数，接收一个响应式回调方法`update`
4. 在`autorun`内部实现一个`wrapperUpdate`函数，将`update`包裹起来：在`update`调用前将`wrapperUpdate`作为依赖方法存入`Dep.activeUpdate`静态属性，调用`update`时，通过对象的`getter`属性的拦截，`Dep.depend`方法就可以获取到当前的响应式函数`wrapperUpdate`并将它收集起来。调用`update`之后将`Dep.activeUpdate`静态属性删除。
5. 当对对象修改时，`setter`方法就会调用`Dep.notify`触发收集到的`wrapperUpdate`，调用`wrapperUpdate`触发了`update`响应式回调方法。

## 简易实现

```javascript
// 定义依赖收集函数
class Dep {
  // 收集实时存放的响应式回调
  static activeUpdate;
  constructor() {
    this.subs = new Set();
  }

  // 收集
  depend() {
    if (Dep.activeUpdate) {
      this.subs.add(Dep.activeUpdate);
    }
  }

  // 触发
  notify() {
    this.subs.forEach((update) => update());
  }
}

// 递归劫持
const observe = function (origin) {
  if (!origin || typeof origin !== 'object') {
    return;
  }
  Object.keys(origin).forEach((key) => {
    // 必须缓存，不缓存再次调用 origin[key] 会触发getter方法，导致无限循环，内存溢出！！！！
    let value = origin[key];
    // 创建一个依赖收集实例
    const dep = new Dep();
    Object.defineProperty(origin, key, {
      get() {
        // 收集
        dep.depend();
        return value;
      },
      set(newValue) {
        value = newValue;
        // 触发
        dep.notify();
      },
    });
    observe(value);
  });
};

// 设置响应式回调函数处理方法
const autorun = function (update) {
  const wrapperUpdate = function () {
    Dep.activeUpdate = wrapperUpdate;
    update();
    Dep.activeUpdate = null;
  };
  // 立即执行一次，进行依赖收集
  wrapperUpdate();
};

// 测试
const data = {
  count: 1,
};
// 劫持
observe(data);
// 回调
autorun(() => {
  console.log(`update:${data.count}`);
});
// 修改
data.count++;
data.count++;
```
