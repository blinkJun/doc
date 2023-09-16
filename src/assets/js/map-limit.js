function createArrayIterator(coll) {
  var i = -1;
  var len = coll.length;
  return function next() {
    return ++i < len ? { value: coll[i], key: i } : null;
  };
}

/**
 * @description 当前请求控制器，初始化管理数据，返回管理函数
 * @method limitManage
 * @param {Array} requests 传入的数据项
 * @param {Number} limit 最大并发数量
 * @return {Function} 返回管理函数
 */
function limitManage(requests, limit) {
  const nextElem = createArrayIterator(requests);
  let done = false;
  let canceled = false;
  let running = 0;
  let looping = false;
  // 只会根据limit创建一次
  return function (iteratee, callback) {
    function iterateeCallback(err) {
      if (canceled) return;
      running -= 1;
      if (err) {
        done = true;
        callback(err);
      } else if (err === false) {
        done = true;
        canceled = true;
      } else if (done && running <= 0) {
        done = true;
        return callback(null);
      } else if (!looping) {
        replenish();
      }
    }
    function replenish() {
      looping = true;
      while (running < limit && !done) {
        var elem = nextElem();
        if (elem === null) {
          done = true;
          if (running <= 0) {
            callback(null);
          }
          return;
        }
        running += 1;
        iteratee(elem.value, elem.key, iterateeCallback);
      }
      looping = false;
    }

    // 立即运行一次
    replenish();
  };
}

/**
 *
 * @callback requestItemFinishCallback
 * @description 请求成功或者失败时回调此参数
 * @param {Object} err 如果失败传此参数
 */

/**
 *
 * @callback requestItemCallback
 * @description 进入执行状态，执行到对应的数据项时回调此函数
 * @param {Object} dataItem 每个请求对应的数据项
 * @param {requestItemFinishCallback} callback 请求结束后的回调
 */

/**
 *
 * @callback finishCallback
 * @description 并发结束执行时回调
 * @param {Object} err 错误项
 * @param {Array} results 对应错误内容，或者执行完成的结果
 */

/**
 * @description 限制最大数量进行并发
 * @method mapLimit
 * @param {Array} requests 请求数据数组，每一项会传给对应的请求函数
 * @param {Number} limit 最大并发数量
 * @param {requestItemCallback} handle 每个请求对于的请求函数
 * @param {finishCallback} callback 成功之后的回调
 */
function mapLimit(requests, limit, handle, callback) {
  // 根据数据列表和最大并发数创建一个闭包管理对象
  // 创建后在里面自动管理并发的状态
  // 该函数返回一个方法，执行该方法开始并发
  const manage = limitManage(requests, limit);

  // 保存最终结果
  const results = [];
  // 方法执行后按顺序调用传入的单项回调函数处理数据
  return manage(
    (value, key, iterCb) => {
      // 调用传入的单项处理函数
      handle(
        value, //此项对应的数据
        (err, res) => {
          // 将处理结果缓存到对应位置
          results[key] = res;
          // 如果失败则终止
          if (err) {
            iterCb(err);
          }
        }
      );
    },
    (err) => {
      //最终处理结果，可能失败也可能成功
      callback(err, results);
    }
  );
}
