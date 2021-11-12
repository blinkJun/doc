# `ECMAScript` 规范

## 规范提案流程
- stage 0 : Strawman（展示阶段）
- stage 1 : Proposal（征求意见阶段）
- stage 2 : Draft（草案阶段）
- stage 3 : Candidate（候选人阶段）
- stage 4 : Finished（定案阶段）

## `'use strict'`

### 意义
- 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
	- 变量必须声明后使用，只读属性禁止覆盖
	- 禁止`delete`变量或不可删除的属性
	- 阻止扩展的对象动态添加属性时抛出异常
	- 禁用 `with` 语句
	- 限制 `eval` 的作用域
	- 削弱 `arguments` 参数对象
	- `this` 若无指定默认为 `undefined`
	- 函数形参禁止同名
	- 不建议使用语句内的函数声明
	- 保留更多的关键字：`implements, interface, let, package, private, protected, public, 				static, yield, class, enum, export, extends, import, super`
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的`Javascript`做好铺垫。
### 如何使用
- 文件首行：影响整个文件
- 代码区块首行：影响整个代码块
- 函数首行：影响整个函数
- 其余位置无效


## [`ES6`规范主要内容](https://es6.ruanyifeng.com/)

### 新增基础类型`Symbol`、`bigInt`
- `Symbol`：独一无二的值，使用`Symbol()`创建
- `bigInt`:表示大于 `2^53 - 1` 的整数，可使用`BigInt()`创建

### 新增声明变量关键字 `let` 和 `const`

声明变量的6种方式
- `var`
- `let`
- `const`
- `function`
- `import`
- `class`

`var` `let` `const` 的区别
1. 声明过程的不一样
    - 遇到有`var`的作用域，在任何语句执行前都已经完成了声明和初始化
    - `let` 和 `const` 先完成声明，并没有到初始化，提前访问会报错（**暂时性死区**）
2. `let` `const` **不允许重复声明**，`var`可以。
3. `let` `const` 在作用域之外不可使用，`var`可以。**块级作用域**
4. `const` 不允许修改，若是引用类型表示不允许修改这个指向。


### 解构赋值
如何使用：
- “模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值
- 解构赋值允许指定默认值：`let [foo = true] = []`;
- 可嵌套解构

常用用途：
- 交换变量的值
- 提取 `JSON` 对象中的数据
- 从函数返回多个值，通过解构获得
- 函数参数的定义
- 函数参数的默认值
- 遍历 `Map` 结构
- 输入模块的指定方法

### 字符串扩展
- 新增遍历器接口，可被`for...of`循环遍历
- 新增实用方法：
  - `includes()`：是否包含某个字符串
  - `startsWith()`：是否以某个字符串开头
  - `endsWith()`：是否以某个字符串结尾
- 模板字符串：
	- 所有的空格和缩进都会被保留在输出之中
	- 可以使用`trim`方法消除空格和换行
	- 嵌入变量，需要将变量名写在`${}`
	- 可嵌套


### 数值扩展
`Math`对象新增大量的数值相关计算方法，需要使用时查阅

### 函数扩展
- 参数可设置默认值
- rest参数（形式为`...变量名`）：可通过扩展运算符获取剩余参数，只能设置在参数最后一位
- 箭头函数

### 数组扩展
- 扩展运算符`...`：`rest`参数的逆运算，将数组解构为用逗号分割的参数数列
- 新增实用方法：
  - `Array.from()`：将类数组转换为数组
  - `find()`：查找成员并返回
  - `findIndex()`：查找成员下标并返回
  - `entries()`，`keys()` 和 `values()`：返回键值对、键、值对应的遍历器对象
  - `includes()`：返回成员是否包含对应值的布尔值
  - `flat()`：拍平数组

### 对象的扩展
- 扩展运算符`...`：`rest`参数的逆运算，将对象解构为用逗号分割的参数数列
- 允许写入变量和函数，作为对象的属性和方法
- 新增实用方法：
  - `entries()`，`keys()` 和 `values()`：返回键值对、键、值对应的遍历器对象
  - `Object.assign`：合并对象，浅复制

### 新数据结构 `Set`、`Map`
`Set`：
- 类似于数组，但是成员的值都是唯一的，没有重复的值
- 可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化
- 内部判断两个值是否相等的方式类似===，主要的区别是NaN等于自身,两个对象总是不相等的

`Set`实例的属性和方法：

属性
  - `Set.prototype.constructor`：构造函数，默认就是`Set`函数。
  - `Set.prototype.size`：返回`Set`实例的成员总数。

操作方法
  - `add(value)`：添加某个值，返回 `Set` 结构本身。
  - `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
  - `has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
  - `clear()`：清除所有成员，没有返回值。

遍历方法
  - `keys()`：返回键名的遍历器
  - `values()`：返回键值的遍历器
  - `entries()`：返回键值对的遍历器
  - `forEach()`：使用回调函数遍历每个成员

遍历的应用
  - 可用扩展运算符...
  - 数组去重：`[...new Set([1,1,2,3])]`
  - 间接使用数组方法：`new Set([...set].map(x=>x+1))`
    - 并集：`let union = new Set([...a, ...b])`
    - 交集：`let intersect = new Set([...a].filter(x => b.has(x)))`
    - 差集：`let difference = new Set([...a].filter(x => !b.has(x)))`

`Map`：
- 类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
- 接受数组作为参数
- 只有对同一个对象的引用，`Map` 结构才将其视为同一个键
- 如果 `Map` 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，`Map` 将其视为一个键
		
`Map`实例的属性和方法
- `Map.prototype.size`：返回 `Map` 结构的成员总数。

操作方法
  - `set(key, value)`：设置键名`key`对应的键值为`value`，然后返回整个 `Map` 结构
  - `get(key)`：读取key对应的键值，如果找不到`key`，返回`undefined`
  - `has(key)`：返回一个布尔值，表示某个键是否在当前 `Map` 对象之中
  - `delete(key)`：删除某个键，返回`true`。如果删除失败，返回`false`
  - `clear()`：清除所有成员，没有返回值

遍历方法
  - `keys()`：返回键名的遍历器。
  - `values()`：返回键值的遍历器。
  - `entries()`：返回所有成员的遍历器。
  - `forEach(`)：遍历 `Map` 的所有成员。

`WeakSet`：
类似`Set`。
- 区别1：成员只能是对象；
- 区别2：成员弱引用，无引用时可能会被回收

`WeakMap`：
类似`Map`。
- 区别1：只接受对象作为键名（`null`除外）；
- 区别2：键名所指向的对象，不计入垃圾回收机制


### `Proxy` 和 `Reflect`
- `Proxy`：实现代理目标对象，可拦截操作方法，修改默认操作行为
- `Reflect`：将对象的操作方法放到该对象上，与`Proxy`代理的操作方法一一对应，方便完成默认行为

### `Promise`对象
生成一个微任务，内部维护一个状态，一旦更新就不会再变，可以用来进行链式的异步操作

实用方法：
- `resolve`参数：将状态从`pending`变为`resolve`
- `reject`参数：将状态从`pending`变为`reject`
- `Promise.prototype.then()`：Promise 实例添加状态改变时的回调函数。
- `Promise.prototype.catch()`：.then(null, rejection)的别名，用于指定发生错误时的回调函数
- `Promise.prototype.finally()`：不管 Promise 对象最后状态如何，都会执行的操作。
- `Promise.all()`：将多个 Promise 实例，包装成一个新的 Promise 实例

### `Generator`函数
生成一个遍历器对象返回，通过一次次调用返回对象的`next`方法完成对函数的运行，每一次`next`都会调用函数往下执行，直至下一个`yield`表达式

### `async`函数
`Generator`函数的语法糖，并内置了执行器，会像普通函数一样同步执行，并返回一个`Promise`对象，在函数中可使用`await`表示等待后续函数的执行结果。如果`await`跟的是普通函数，会被`Promise.resolve`处理。

### `class`类和继承
ES5构造函数的语法糖，继承的实现方式是**寄生组合继承**

### `ES module`模块规范
规范了模块的导入导出语法