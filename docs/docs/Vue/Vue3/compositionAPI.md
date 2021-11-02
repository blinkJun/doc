# `composition API`

## `ref`
将基本类型的数据转换为响应式对象，通过`.value`更新值
```typescript
import {ref} from 'vue'
export default defineComponent({
  setup(){
    
    const count = ref<number>(0)
    
    // 调用此方法完成 count 的递增
    const addCount = ()=>{
      count.value++
    }

    return {
      count,
      addCount
    }
  }
})
```

## `reactive`
将引用类型的数据转换为响应式对象
```typescript
import {reactive} from 'vue'
interface Person {
  name:string
  age:number
}
export default defineComponent({
  setup(){
    
    const person = reactive<Person>({
      name:'mao',
      age:16
    })
    
    // 调用此方法完成 age 的递增
    const addAge = ()=>{
      person.age++
    }

    return {
      person,
      addAge
    }
  }
})
```

## `toRefs`
在`reactive`的实现中，当我们尝试结构`person`对象，只返回他们的成员供模板使用时，发现并不能响应，是因为`person`为响应式对象，而它的成员是普通类型字段，并不是响应式对象，需要**通过`toRefs`方法将它的成员也进行转换**
```typescript
import {reactive,toRefs} from 'vue'
interface Person {
  name:string
  age:number
}
export default defineComponent({
  setup(){
    
    const person = reactive<Person>({
      name:'mao',
      age:16
    })
    
    // 调用此方法完成 age 的递增
    const addAge = ()=>{
      person.age++
    }

    // 转换响应式对象成员
    const personDec = toRefs(person)

    return {
      ...personDec,
      addAge
    }
  }
})
```

## 生命周期函数
提供钩子函数方便在 `setup` 函数中使用
- 无 `beforeCreate` 和 `created`，因为它们在`setup`之前和之后运行，可以在`setup`中实现
- 其他钩子函数和生命周期函数相同，只是在名称上加上了`on`：`onMounted`