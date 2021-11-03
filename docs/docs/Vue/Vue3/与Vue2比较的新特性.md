## 新特性

#### `Composition API`新增了组合式API
- Vue2:每增加一个功能，有可能需要在data/computed/watch/methods/，生命周期上添加代码
	- 功能复杂后，选项功能分散，维护成本高
	- `mixins`的问题
		- 命名容易冲突
		- 选项式的功能不易于理解
- Vue3：新增组合式API
将同一个功能的代码通过函数的方式抽离重新组织，功能点更清晰，更好维护
	- 函数参数和返回可以反应出它的输入输出
	- 内部实现可以更好理解实现了什么

#### `Fragments`片段：组件支持多个根元素
  - Vue2：只能有一个root元素
  - Vue3：可以有多个元素，但是要指定$attr

#### `Teleport`支持将组件渲染到指定父元素
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

#### 移除key
不在需要key，Vue3会自动生成key

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