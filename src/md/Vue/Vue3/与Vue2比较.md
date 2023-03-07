# 和 `vue2` 比较

## 新特性

### `Composition API`新增了组合式API
- Vue2:每增加一个功能，有可能需要在data/computed/watch/methods/，生命周期上添加代码
	- 功能复杂后，选项功能分散，维护成本高
	- `mixins`的问题
		- 命名容易冲突
		- 选项式的功能不易于理解
- Vue3：新增组合式API
将同一个功能的代码通过函数的方式抽离重新组织，功能点更清晰，更好维护
	- 函数参数和返回可以反应出它的输入输出
	- 内部实现可以更好理解实现了什么

### `Fragments`片段：组件支持多个根元素
  - Vue2：只能有一个root元素
  - Vue3：可以有多个元素，但是要指定$attr

### `Teleport`支持将组件渲染到指定父元素
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

### 移除key
不在需要key，Vue3会自动生成key

## 与Vue2比较的优化

### 体积优化：删除了一些不常用的API
如：filter

### 摇树优化：`Tree-shaking`
在Vue3中，所有的API都通过ES6模块化的方式引入，这样就能让webpack或rollup等打包工具在打包时对没有用到API进行剔除，最小化bundle体积。

### 优化响应式
- Vue2，`defineProperty`方法缺陷
	- 不能监听新增的属性
	- 对数组只能通过改写方法实现
- Vue3，使用`Proxy`进行拦截：
  - 可以监听新增的属性
  - 深层对象依然需要递归监听，但是可以实现在访问内部对象时在`getter`进行动态监听：**惰性监听**

### 编译优化
静态提升，静态节点都会被提升到render 的外部，只有初始化时会被创建，再次调用render时不会再次创建，可以直接重用这些静态节点对应的vnode

## 非兼容性改变

#### `v-model`支持参数，替代`.sync`修饰符，统一双向绑定实现
```javascript
//父元素
v-model:showValue="show"

//子元素props
showValue

//对应事件
emit('update:showValue')

// 使用v-model时，默认参数为modelValue
v-model === v-model:modelValue
```
