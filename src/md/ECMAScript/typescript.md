# [`typescript`](https://www.tslang.cn/)

`javascript` + `type`

## `typescript` 的优势

- 程序更容易理解

  - 代码即注释
  - 类型清晰

- 效率更高

  - 代码自动补全
  - 参数提示
  - 错误提示

- 更少错误

  - 编译期间对代码校验

- 兼容`javascript`
  - 兼容 `js` 文件
  - 可以添加声明文件方便使用 `js`

## 添加类型的意义

为变量添加类型检查，提供自动补全和错误提示

## 类型

### 基础类型

- `boolean`
- `string`
- `number`
- `array`
- `tuple` 元组，在数组中使用其他数据类型
- `enum` 枚举
- `any` 任意
- `void` 无，通常用作函数返回值
- `object` 基础类型之外的类型

### 高级类型

- `&`：交叉类型，可以访问多个类型的所有成员
- `|`：联合类型，只能多个类型的相同成员

### 类型断言

可以由用户断言变量为何种类型

- `(<string>someValue).length`：尖括号
- `(someValue as string).length`：`as`

## `interface` 接口

```typescript
// 定义可扩展的字段
interface MapData {
  [propName: string]: string;
}

// 类数组
interface LikeArray {
  [index: number]: string;
}
```

## `Class`

### 相关概念

- 继承：继承父类的方法属性
- 多态：重写父类的方法
- 抽象类和方法：`abstract` 作为父类，不能实例化，抽象方法不提供实现，子类必须要实现抽象方法

### 类中修饰符

- public：公有，都可以访问到
- protected：保护类型，类中可访问，类外不可访问
- private：私有属性，只在当前类可访问
- readonly：只读类型,只能访问
- static：静态属性，在类中，不在实例中

### `implements` 根据接口实现

```typescript
interface Clock {
  name: string;
  alert(): void;
}
interface Game {
  play(): void;
}
class phone implements Clock, Game {
  name: string = 'old';
  alert() {}
  play() {}
}
```

#### `constructor`、静态属性约束

同名定义约束构造函数和静态属性

```typescript
interface ClockStatic {
  new (name: string, time: number): void;
  color: string;
}

const clock = class clock {
  static color = 'red';
  constructor(name: string, time: number) {}
};
```

## 泛型

内部类型依赖外部类型，定义`T`为传入的类型，`T`称为泛型。

### 函数中使用泛型

```typescript
function echo<T>(anyVar: T): T {
  return anyVar;
}

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
```

`Promise`

```typescript
interface BaseRes {
  status: number;
  code: number;
}

function withApi<T>(url: string): Promise<T> {
  return fetch(url).then((resp) => resp.json());
}
withApi<BaseRes>('/api').then((res) => {
  console.log(res.status);
});
```

### 接口 `interface` 中使用泛型

强化接口的其他字段

```typescript
interface Props {
  title: string;
  desc: string;
}

interface Component<P = {}> {
  (props: P, context: any): any;
}

const handleComponent: Component<Props> = function (props, context) {
  console.log(props.title);
};
```

### 通过接口约束泛型

函数内部提前约束变量类型应该有的成员

```typescript
interface Length {
  length: numer;
}
function showLength<T extends Length>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

## `type`：类型别名

将类型组织起来，起一个新名字

```typescript
// 泛型P和接口联合 作为类型PropsWithChildren
type PropsWithChildren<P> = P & { Children?: any };
```

### 高级特性

```typescript
// 将成员组合起来作为联合类型：只能选择其一
type keys = keyof Countrys;

// 获取某一成员的类型
type NameType = Countrys['name'];

// 循环并转换类型
// 将keys的成员全部转换可选并设置为Country相同成员的类型
type Test = {
  [key in keys]?: Country[key];
};
```

### `type`和接口`interface`的差别

- 类型：对象、函数两者都适用，但是 `type` 可以用于基础类型、联合类型、元祖

```typescript
// interface
interface Point {
  x: number;
  y: number;
}

interface SetPoint {
  (x: number, y: number): void;
}

// type
type Point = {
  x: number;
  y: number;
};

type SetPoint = (x: number, y: number) => void;
```

- 同名合并：`interface` 支持，`type` 不支持。
- 计算属性：`type` 支持, `interface` 不支持。

总的来说，公共的用 interface 实现，不能用 interface 实现的再用 type 实现。主要是一个项目最好保持一致。

## 装饰器：`decorators`

标注或修改类和类的成员
反射库:[`reflect-metadata`](https://www.npmjs.com/package/reflect-metadata)

## [定义声明类型文件](https://tasaid.com/blog/20171102225101.html)

为`js`文件中的变量提供类型声明文件

### 使用 `.d.ts` 来定义声明文件

```typescript
declare const jQuery = (selector:string):any
```

```typescript
// 不会报错
jQuery('#id');
```

### 可以通过安装类型库获得类型提示

```bash
npm i @type/xxx --save-dev
```

### 相关问题

- 导入`node`模块显示找不到相关模块或者类型定义
  安装`node`类型定义：

```bash
npm i @types/node --save-dev
```

在项目根目录下配置`tsconfig.json`，
添加配置：

```json
{
  "compilerOptions": {
    "moduleResolution": "node"
  }
}
```
