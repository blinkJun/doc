// 假设有三个中间件
async function m1(ctx, next) {
  ctx.count++;
  console.log(`count:${ctx.count}`);

  console.log(`m1:start`);
  await next();
  console.log(`m1:end`);
}
async function m2(ctx, next) {
  ctx.count++;
  console.log(`count:${ctx.count}`);

  console.log(`m2:start`);
  await next();
  console.log(`m2:end`);
}
async function m3(ctx, next) {
  ctx.count++;
  console.log(`count:${ctx.count}`);

  console.log(`m3:start`);
  await next();
  console.log(`m3:end`);
}

// 期望3个中间件依次执行
// 假设m2执行，则需要next执行的是m3函数：
const next1 = async function () {
  await m3();
};
// m2(next1);

// 假设m1执行，则需要next执行的是next1：
const next2 = async function () {
  await m2(next1);
};
// m1(next2);

// m1()=>next2()=>m2()=>next1()=>m3()

// 创建一个生成最终next的方法
const compose = async function (ctx) {
  // ctx为此函数内变量，所有中间件共享

  // 先归纳为一个生成next方法的函数：
  const createNext = function (middleware, oldNext) {
    return async function () {
      await middleware(ctx, oldNext);
    };
  };

  // 最后一个next方法设置为立即resovle的promise
  let next = async () => {
    return Promise.resolve();
  };

  // 则可得
  const middlewares = [m1, m2, m3];
  for (let i = middlewares.length - 1; i >= 0; i--) {
    // 递归覆盖next，使next为嵌套多个中间件的函数
    next = createNext(middlewares[i], next);
  }

  // 将最终next返回
  return await next();
};

// 传递ctx
const ctx = {
  count: 0,
};

compose(ctx);
