
```javascript

function myNew (func,...args){
    // 1. 创建一个新对象
    const obj = {}
    // 2. 将对象的原型链指针指向构造函数的原型
    obj.__proto__ = func.prototype
    // 3. 以obj为this上下文执行构造函数
    func.apply(obj,...args)
    // 4. 返回构造完成的对象
    return obj
}
```

new的原理是使用构造方法构造一个新的对象
结果是：
- 新对象的 `__proto__` 指向构造它的构造函数的原型：`func.prototype`
- 构造的过程 `func`作为构造函数被执行，上下文是新对象