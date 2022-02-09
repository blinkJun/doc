# 使用`Proxy`实现一个简易的响应式

```javascript

const observe = function(origin,handler){
  return new Proxy(origin,{
    set:function(target,key,receiver){
      handler(key)
      return Reflect.set(target,key,receiver)
    }
  })
}
const data = {
  count:1
}
const observedData = observe(data,(key)=>{
  console.log(`change ${key}：${data[key]}`)
})
observedData.count++
```