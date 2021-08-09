# 跟vue2比较增加的新特性

### 新增了组合式API
- Vue2:每增加一个功能，有可能需要在data/computed/watch/methods/，生命周期上添加代码，组件越复杂，代码越复杂，维护成本高
- Vue3：新增组合式API
将同一个功能的代码抽离重新组织，功能点更清晰，更好维护

### 片段：组件支持多个根元素
  - Vue2：只能有一个root元素
  - Vue3：可以有多个元素，但是要指定$attr

### 支持将组件渲染到指定父元素
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

### `v-model`支持参数，替代`.sync`修饰符
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
