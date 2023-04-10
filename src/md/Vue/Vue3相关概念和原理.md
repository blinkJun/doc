# 相关概念和原理

## 选项式`api` 和 组合式 `api`

- 选项式`api`

  这种方式使用`methods`、`watch`、`mounted`等选项来描述组件的逻辑，生命周期选项会在特定的周期被调用、函数和`data`选项会被挂载到组件`this`上

  - 优点：强制按照选项来组织代码，结构清晰
  - 缺点：功能代码分散在各个选项中，单个功能不够集中，体现出另一种方式的混乱，维护成本高

- 组合式 `api`

  与`<srcipt setup>`配合使用，此方式会告诉`vue`在编译阶段时进行处理如：导入、顶层变量和函数可以在模板中直接使用。选项式的功能需要通过导入特定的`api`来进行描述组件的逻辑。

  - 优点：将同一个功能的代码通过函数的方式抽离重新组织，功能点更清晰，更好维护
  - 缺点：过于自由、规范不合理导致代码难以理解

组合式`api`与`mixins`对比的优点
  1. 解决了`mixins`的问题
		- 命名容易冲突
		- 选项式的功能不易于理解

  2. 函数参数和返回可以反应出它的输入输出
  3. 内部实现可以更好理解实现了什么

如何选用：根据开发成员的能力选择对应的方式

## Proxy 实现数据监听的原理
拦截`reactive`、响应`effect`、收集`track`、触发`trigger`
1. 使用`reactive`方法， 通过`Proxy`创造响应式对象，拦截对象的`get`，`set`方法，实现对对象的拦截
2. 创建 `effect` 函数，并触发第一次更新，在获取对象值的时候通过调用 `track` 方法收集当前的 `effect` 函数
3. 在修改值时，触发`trigger`函数，将收集到的 `effect` 函数执行


## `Vue`应用

在`vue2`中，我们通常使用`new Vue()`创建一个组件。
   - 挂载元素：可以通过`el`的选项挂载到元素上
   - 全局组件：通过`Vue.component`的方式注册为全局组件，任何组件可以使用
   - 子组件：通过`components`引入其它组件供当前组件使用

在`vue3`中，

**应用**代替了`el`功能，应用可以挂载到页面中元素上，应用的选项跟组件的选项一样，可以直接挂载一个**根组件**：

  ```js
    import { createApp } from 'vue'
    // 从一个单文件组件中导入根组件
    import App from './App.vue'
    // 创建应用
    const app = createApp(App)
    // 挂载应用到#app元素
    app.mount('#app')
  ```

不在有**全局组件**，注册组件需要在应用中进行，只有该应用可以使用此组件：
  ```js
    import TodoDeleteButton from './TodoDeleteButton.vue'
    app.component('TodoDeleteButton', TodoDeleteButton)
  ```

也可以在应用中局部注册作为**子组件**
  ```vue
      <script setup >
        import ComponentA from './ComponentA.vue'
      </script>
  ```

在应用中可以配置一些应用内可用的公共配置：[createApp](https://cn.vuejs.org/api/application.html)

## [响应式](https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html)

`vue3`使用`Proxy`优化了`vue2`中使用`defineProperty`带来的问题：
  - 不能监听新增的属性
  - 对数组只能通过改写方法实现

因为`Proxy`的特性带来了新的问题：

  1. 代理对象与原始对象不一样，只有代理对象是响应式的，更改原始对象不会触发更新。因此，**使用 `Vue` 的响应式系统的最佳实践是 仅使用你声明对象的代理版本**

  2. `Vue` 的响应式系统是通过属性访问进行追踪的

       - 需要始终保持变量对代理对象的引用，不要随意“替换”代理对象，这会导致响应式连接丢失：

          ```js
              let state = reactive({ count: 0 })

              // 上面的引用 ({ count: 0 }) 将不再被追踪（响应性连接已丢失！）
              state = reactive({ count: 1 })
          ```

       - 需要始终使用代理对象进行操作，读取响应式对象的值到变量、解构响应式对象、将响应式对象的值传入函数都是使响应丢失

  3. 仅对对象类型起效，对基本类型无效，需要`ref`进行包装

**`ref`**

`ref`方法将传入的值包装为一个带有`value`属性的`ref`对象。

该方法解决了`reactive`方法对基本类型无效的问题，对基本类型进行了引用包装。

**解包**

使用`ref`包装的值需要使用`.value`来操作具体值，但是在以下集中情况不需要`.value`也能得到值：

  假设：

  ```js
    const title = ref('hello')
    const count = ref(0)
    const state = reactive({
      count
    })
  ```

  - 在模板中使用`ref`对象可以直接被解包：
    ```html
      <h1>{{title}}</h1>
    ```

  - 作为响应式对象的属性时，可通过`state.count`直接调用，`count`会被解包
  -  在数组或者`Map`、`Set`中时 不会被解包

## 组合式`api`中的**宏**

`vue3`中，

若使用选项式`api`：
  - `props`：定义方式跟`vue2`一样的
  - `emit`：`$emit`方式依然可用，但是推荐在选项`emits`中配置组件要触发的事件

若使用组合式`api`，需要使用**宏**定义：
  - `props`：使用`defineProps`宏定义`props`，参数和选项式`api`一致

    ```js
      const props = defineProps(['foo'])
      console.log(props.foo)
    ```

  - `emit`：使用`defineEmits`宏定义`emits`，参数和选项式`api`一致

    ```js
      const emit = defineEmits(['inFocus', 'submit'])

      function buttonClick() {
        emit('submit')
      }
    ```
宏不能在子函数中使用，它必须直接放置在 `<script setup>` 的顶级作用域下。


## 原生元素和组件上的`v-model`

原生元素的`v-model`已由内部实现，实际是由`input`、`change`等事件和`value`、`checked`等属性组合而来

  - `vue2`：组件使用`input`事件和`value`组合为`v-model`，
  - `vue3`：使用`modelValue`属性和`update:modelValue`事件作为`v-model`。

并支持了多个`v-model`：

  ```html
    <UserName
      v-model:first-name="first"
      v-model:last-name="last"
    />
  ```

  ```js
    defineProps({
      firstName: String,
      lastName: String
    })

    defineEmits(['update:firstName', 'update:lastName'])
  ```

## [**透传**](https://cn.vuejs.org/guide/components/attrs.html)

指定特定元素得到透传属性：

1. 定义禁用透传

  ```html
    <script>
      // 使用普通 <script> 来声明选项的
      export default {
        inheritAttrs: false
      }
    </script>
  ```
2. 指定透传元素

  ```html
    <div class="btn-wrapper">
      <button class="btn" v-bind="$attrs">click me</button>
    </div>
  ```

多根元素组件下：

通常情况组件上未读取的`prop`会自动透传到子组件根元素上，多根元素的子组件需要显式的指定这些`prop`需要透传到哪个根元素：

```html
  <header>...</header>
  <main v-bind="$attrs">...</main>
  <footer>...</footer>
```

## `Fragments`片段：组件支持多个根元素
  - `Vue2`：只能有一个根元素
  - `Vue3`：可以有多个元素

## `Teleport`支持将组件渲染到指定父元素
```html
  <teleport to="body">
    <div v-if="modalOpen" class="modal">
      <div>
        I'm a teleported modal!
        (My parent is "body")
        <button @click="modalOpen = false">
          Close
        </button>
      </div>
    </div>
  </teleport>
```

## 与Vue2比较的优化

### 体积优化：删除了一些不常用的API
如：filter

### 摇树优化：`Tree-shaking`
在Vue3中，所有的API都通过ES6模块化的方式引入，这样就能让webpack或rollup等打包工具在打包时对没有用到API进行剔除，最小化bundle体积。

### 优化响应式
- `Vue2`，`defineProperty`方法缺陷
	- 不能监听新增的属性
	- 对数组只能通过改写方法实现
- `Vue3`，使用`Proxy`进行拦截：
  - 可以监听新增的属性
  - 深层对象依然需要递归监听，但是可以实现在访问内部对象时在`getter`进行动态监听：**惰性监听**
