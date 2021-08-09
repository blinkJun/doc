## 原理
对象上的函数，指向调用此函数的对象
1. 创建临时属性指向当前方法
2. 使方法被调用时`this`指向传入的上下文
3. 删除此临时属性，返回结果

## 实现一个`apply`
```javascript
Function.prototype.myApply = function(context,args){
    // 获得传入的上下文，没有则使用window
    const currentContext = context || window
    // 创建一个临时属性指向当前的方法，当前方法调用时this将指向分配的上下文
    currentContext._trigger = this
    // 传入获得调用结果
    let result
    if(args){
        result = currentContext._trigger(...args)
    }else{
        result = currentContext._trigger()
    }
    // 删除临时的属性
    delete currentContext._trigger
    // 返回结果
    return result
}
```

## 实现一个`call`
```javascript
Function.prototype.myCall = function(context,...args){
    const currentContext = context || window
    currentContext._trigger = this
    let result
    if(args.length>0){
        result = currentContext._trigger(...args)
    }else{
        result = currentContext._trigger()
    }
    delete currentContext
    return result
}

```

## 实现一个`bind`
```javascript
Function.prototype.myBind(context){
    const that = this
    return function(...args){
        return this.apply(that,args)
    }
}
```