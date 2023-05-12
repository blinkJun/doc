/*
 * @Author liangjun
 * @LastEditors liangjun
 * @Date 2021-04-20 17:46:21
 * @LastEditTime 2021-04-21 14:12:05
 * @Description 绑定this的三种方法 call apply bind
 */

// apply
Function.prototype.myApply = function (context, args) {
  context._trigger = this;
  let result;
  // 有参数
  if (args) {
    result = context._trigger(...args);
  } else {
    result = context._trigger();
  }
  delete context._trigger;
  return result;
};

// call
Function.prototype.myCall = function (context, ...args) {
  context._trigger = this;
  let result;
  // 有参数
  if (args.length > 0) {
    result = context._trigger(...args);
  } else {
    result = context._trigger();
  }
  delete context._trigger;
  return result;
};

// bind
Function.prototype.myBind = function (context) {
  const that = this;
  return function (...args) {
    return that.apply(context, args);
  };
};

const a = function (...args) {
  console.log(this);
  console.log(args);
};
const b = {
  a: 1,
};
