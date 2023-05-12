// 浅拷贝与深拷贝：
// 基本数据储存在栈中，引用类型数据储存在堆之中
// 基本类型数据可直接复制，引用类型数据在赋值时，新变量没有获得新值，而是将指针指向此对象的堆位置
// 浅拷贝：拷贝了对象的引用地址，没有获得新值；深拷贝：获得新值，而不是获得引用地址

// 浅拷贝：let a = b;let a = Object.assign({},b)
// 深拷贝：let a = JSON.parse(JSON.stringify(b));
// 考虑多种引用类型的完整深拷贝：

// 常用的引用类型
const objectType = '[object Object]';
const arrayType = '[object Array]';
const dateType = '[object Date]';
const regType = '[object RegExp]';
const setType = '[object Set]';
const mapType = '[object Map]';

// 是引用类型
function isObject(origin) {
  return typeof origin == 'object';
}

// 获取对象的具体引用类型
const getObjectType = function (obj) {
  return Object.prototype.toString.call(obj);
};

/**
 * @method deepCopy
 * @description 深拷贝
 * @param {Object} obj 需要拷贝的对象
 * @return {Object} 返回复制的对象
 */
const deepCopy = function (origin, map = new WeakMap()) {
  // 一、无数据 或者 类型为基本类型、函数则直接返回
  if (!origin || !isObject(origin)) {
    return origin;
  }

  // 二、获取引用数据类型
  const type = getObjectType(origin);

  // 三、已经存在，则直接返回，循环引用
  if (map.has(origin)) {
    return map.get(origin);
  }

  // 四、根据类型处理
  // 1，正则或者Date类型
  if (type === regType || type === dateType) {
    const newObject = new origin.constructor(origin.valueOf());
    map.set(newObject);
    return newObject;
  }
  // 2，Set 类型
  if (type === setType) {
    const newObject = new Set();
    for (const value of origin) {
      newObject.add(deepCopy(value, map));
    }
    map.set(newObject);
    return newObject;
  }
  // 3，Map类型
  if (type === mapType) {
    const newObject = new Map();
    for (const [key, value] of origin) {
      newObject.set(key, deepCopy(value, map));
    }
    map.set(newObject);
    return newObject;
  }

  // 4，Array 或者 Object 类型
  // 考虑了以Symbol作为key的情况
  const keys = Reflect.ownKeys(origin);
  // 获取描述符
  const descriptors = Object.getOwnPropertyDescriptors(origin);
  // 考虑原型链，继承原对象的原型，描述符
  const newObject = Object.create(Object.getPrototypeOf(origin), descriptors);

  map.set(newObject);
  keys.forEach((key) => {
    const value = origin[key];
    newObject[key] = deepCopy(value, map);
  });

  // 数组类型则还原
  return type === arrayType ? Array.from(newObject) : newObject;
};

const obj = {
  // =========== 1.基础数据类型 ===========
  num: 0, // number
  str: '', // string
  bool: true, // boolean
  unf: undefined, // undefined
  nul: null, // null
  sym: Symbol('sym'), // symbol
  bign: BigInt(1n), // bigint

  // =========== 2.Object类型 ===========
  // 普通对象
  obj: {
    name: '我是一个对象',
    id: 1,
  },
  // 数组
  arr: [0, 1, 2],
  // 函数
  func: function () {
    console.log('我是一个函数');
  },
  // 日期
  date: new Date(0),
  // 正则
  reg: new RegExp('/我是一个正则/ig'),
  // Map
  map: new Map().set('mapKey', 1),
  // Set
  set: new Set().add('set'),
  // =========== 3.其他 ===========
  [Symbol('1')]: 1, // Symbol作为key
};

console.log(obj);
console.log(deepCopy(obj));
