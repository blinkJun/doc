// 使用 Proxy 实现数据的双向绑定

// Object.defineProperty实现双向绑定存在的问题：
// 1，需要递归对数据劫持
// 2，不支持数组、数组的长度改变是无效的
// 3，不能劫持不存在的属性

// Proxy 实现数据监听的原理
// 1，使用reactive方法， 通过Proxy创造响应式对象，拦截对象的get，set方法，实现对对象的拦截
// 2，创建 effect 函数，并触发第一次更新，在获取对象值的时候通过调用 track 方法收集当前的 effect函数
// 3，在修改值时，触发trigger函数，将收集到的 effect 函数执行

// 是否是对象
const isObject = (val) => val !== null && typeof val === 'object';

// 是不是整型
const isIntegerKey = (key) => '' + parseInt(key, 10) === key;

// 劫持对象弱缓存
const proxyMap = new WeakMap();

// 对象劫持
const reactive = function (origin) {
  // 不是对象则直接返回
  if (!isObject(origin)) {
    return origin;
  }
  // 已经劫持过
  const existProxy = proxyMap.get(origin);
  if (existProxy) {
    return existProxy;
  }

  const proxy = new Proxy(origin, {
    get(target, key, receiver) {
      const value = Reflect.get(target, key, receiver);
      // 收集依赖
      track(target, key);

      // 动态劫持深层对象
      if (isObject(value)) {
        return reactive(value);
      }

      return value;
    },
    set(target, key, value, receiver) {
      // 判断是否已经有值
      const oldValue = target[key];

      // 是否是新值
      const hadKey =
        Array.isArray(target) && isIntegerKey(key)
          ? Number(key) < target.length
          : target.hasOwnProperty(key);

      const result = Reflect.set(target, key, value, receiver);
      // 触发响应方法
      if (!hadKey) {
        // 新增
        trigger(target, 'ADD', key, value);
      } else if (oldValue !== value) {
        // 修改
        trigger(target, 'SET', key, value, oldValue);
      }
      return result;
    },
  });

  // 存入缓存
  proxyMap.set(origin, proxy);

  return proxy;
};

// 使用 effect 函数触发依赖收集
// 此嵌套的方式 会使 activeEffect 为 null 导致 state.c不能收集到
// effect(() => {
//     state.a = 100;
//     effect(() => {
//         state.b = 200;
//     })
//     state.c = 300;
// })
// 使用堆栈的方式保存依赖收集的顺序，内层收集完毕后，使 activeEffect 回到上一级
let activeEffect = null;
let effectStack = [];
let id = 0;
const effect = function (update) {
  const effect = function () {
    // 防止死循环
    if (!effectStack.includes(effect)) {
      try {
        activeEffect = effect;
        effectStack.push(activeEffect);
        return update();
      } finally {
        effectStack.pop();
        activeEffect = effectStack[effectStack.length - 1];
      }
    }
  };
  effect.id = id++;
  effect.deps = [];
  effect();
  return effect;
};

// 依赖收集方法
// 存放依赖的 映射数据结构：
// const targetMap = {
//     target1: {
//         name: [effect, effect]
//     },
//     target2: {
//         name: [effect, effect]
//     }
// }
const targetMap = new WeakMap();
const track = function (target, key) {
  if (!activeEffect) {
    return false;
  }

  // 获取映射
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  // 获取劫持对象下的字段映射
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Set();
    depsMap.set(key, dep);
  }

  // 添加此绑定方法
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
  }
};

// 执行响应函数
const trigger = function (target, type, key, value, oldValue) {
  // 获取映射
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  // key不为 undefined
  if (key !== undefined) {
    // effects 列表执行函数
    const run = (effects) => {
      if (effects) {
        effects.forEach((effect) => effect());
      }
    };
    // 直接修改数组的 length 将不会触发收集的响应方法
    // 特殊处理数组的触发
    if (key === 'length' && Array.isArray(target)) {
      depsMap.forEach((deps, index) => {
        if (index === 'length' || index >= value) {
          run(deps);
        }
      });
    } else {
      const effects = depsMap.get(key);
      run(effects);

      switch (type) {
        case 'ADD':
          // 是数组且是索引类型，触发 length 的响应方法
          if (Array.isArray(target) && isIntegerKey(key)) {
            run(depsMap.get('length'));
          }
      }
    }
  }
};

// test

// object
const target = reactive({
  deep: {},
});

// array
const targetArray = reactive([]);

effect(() => {
  // console.log(target.state)
  console.log(target.deep.state);
  // console.log(targetArray[2])
  // console.log(targetArray.length)
});

setTimeout(() => {
  // target.state = 1
  target.deep.state = 5;
  // targetArray[2] = 10
  // targetArray.length = 2
}, 2000);
