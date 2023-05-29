/*
 * @Author liangjun
 * @LastEditors liangjun
 * @Date 2019-05-29 16:33:50
 * @LastEditTime 2023-05-29 17:40:08
 * @Description utils function
 */

/**
 * @method durationFormatByStamp
 * @description des
 * @param {Number} times 时间戳
 * @return {String} '00:01'
 */
export const durationFormatByStamp = function (times) {
  let minu = Math.floor(times / 1000 / 60);
  let second = Math.floor(
    60 * (times / 1000 / 60 - Math.floor(times / 1000 / 60))
  );
  minu = minu < 10 ? '0' + minu : minu;
  second = second < 10 ? '0' + second : second;
  return `${minu}:${second}`;
};

/**
 * @method dateFormat
 * @description 格式化日期文本
 * @param {Date | String | Number} date 传入日期
 * @param {String} format 传入格式如：yyyy-MM-dd
 * @return {String}
 * @example
 * dateFormat(new Date(), 'yyyy-MM-dd')
 * // 2023-01-02
 */
export function dateFormat(date, format) {
  if (typeof date === 'string') {
    date = date - 0 || (!/\d+T\d+/.test(date) ? date.replace(/-/g, '/') : date);
  }

  const d = new Date(date);
  if (!date || d.toUTCString() === 'Invalid Date') {
    return '';
  }

  var map = {
    y: d.getFullYear(), // 年
    M: d.getMonth() + 1, //月
    d: d.getDate(), //日
    h: d.getHours(), //时
    m: d.getMinutes(), //分
    s: d.getSeconds(), //秒
    S: d.getMilliseconds(), //毫秒
    q: Math.floor((d.getMonth() + 3) / 3), //季度
  };

  return format.replace(/([yMdhmsqS])\1*/g, function (m, t) {
    var v = String(map[t]);

    if (t === 'y') {
      return v.substr(4 - m.length);
    } else if (t === 'S') {
      return ('00' + v).substr(v.length - 1);
    } else if (m.length > 1) {
      return ('0' + v).substr(v.length - 1);
    }

    return v;
  });
}
export const date = (date) => dateFormat(date, 'yyyy-MM-dd');
export const datetime = (date) => dateFormat(date, 'yyyy-MM-dd hh:mm:ss');
export const times = (date) => dateFormat(date, 'hh:mm');

/**
 * @method numberFormat
 * @description 格式化数值为特定格式
 * @param {Number} number 需要格式化的数值
 * @param {Number} precision 保留小数点
 * @param {String} thousand 千分位分隔符
 * @return {String}
 */
export const numberFormat = function (number, precision = 2, thousand = ',') {
  if (typeof number == 'number' || (number -= 0)) {
    return (number.toFixed(precision) + '').replace(
      /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,
      '$&' + thousand
    );
  }
  return '0';
};

/**
 * @method jsonToUrlQuery
 * @description json转换为url query参数
 * @param {Object} query JSON
 * @return {String} 'a=1&b=2'
 */
const jsonToUrlQuery = function (query) {
  const queryArr = [];
  for (const key in query) {
    // eslint-disable-next-line no-prototype-builtins
    if (query.hasOwnProperty(key)) {
      queryArr.push(`${key}=${query[key]}`);
    }
  }
  return queryArr.join('&');
};

/**
 * @method updateUrlQuery
 * @description 动态添加url参数
 * @requires jsonToUrlQuery
 * @param {Object} options {url:'www.baidu.com?a=1',query:{b=2}}
 * @return {String} 'www.baidu.com?a=1&b=2'
 */
const updateUrlQuery = (options) => {
  let { url, query } = options;
  if (!url) return '';
  if (query) {
    let params = jsonToUrlQuery(query);
    if (url.indexOf('?') !== -1) {
      url = `${url}&${params}`;
    } else {
      url = `${url}?${params}`;
    }
  }
  return url;
};

/**
 * @method debounce
 * @description 防抖函数
 * @param {Function} callback 回调方法
 * @param {Number} ms 防抖延迟
 * @return {Function}
 */
const debounce = function (callback, ms = 200) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, ms);
  };
};

/**
 * @method throttle
 * @description 节流函数
 * @param {Function} callback 回调方法
 * @param {Number} ms 节流间接时间
 * @return {Function}
 */

const throttle = function (callback, ms = 200) {
  let canRun = true;
  return function (...args) {
    if (!canRun) {
      return false;
    }
    canRun = false;
    callback.apply(this, args);
    setTimeout(() => {
      canRun = true;
    }, ms);
  };
};

/**
 * @method pageScrollTop
 * @description 获取和设置页面滚动高度
 */
const pageScrollTop = {
  get() {
    if (window.pageYOffset) {
      return window.pageYOffset;
    }
    // Explorer 6 Strict
    if (document.documentElement && document.documentElement.scrollTop) {
      return document.documentElement.scrollTop;
    }
    // all other Explorers
    if (document.body) {
      return document.body.scrollTop;
    }
    return 0;
  },
  set(top) {
    if (window.pageYOffset) {
      window.pageYOffset = Number(top);
    }
    // Explorer 6 Strict
    if (document.documentElement && document.documentElement.scrollTop) {
      document.documentElement.scrollTop = Number(top);
    }
    // all other Explorers
    if (document.body) {
      document.body.scrollTop = Number(top);
    }
    return true;
  },
};

/**
 * @method scrollTop
 * @description 平滑滚动页面
 * @param {HTMLElement} el 需要滚动的页面元素
 * @param {Number} from 滚动的开始地点
 * @param {Number} to 滚动结束的地点
 * @param {Number} duration 运动时间
 * @param {Function} endCallback 滚动结束时的回调函数
 * @param {String} direction 滚动的方向：scrollTop || scrollLeft
 * @return
 */
const elScroll = function (
  el,
  from = 0,
  to,
  duration = 500,
  endCallback,
  direction = 'scrollTop'
) {
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame =
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
  }
  const difference = Math.abs(from - to);
  const step = Math.ceil((difference / duration) * 50);

  function scroll(start, end, step) {
    if (start === end) {
      endCallback && endCallback();
      return;
    }

    let d = start + step > end ? end : start + step;
    if (start > end) {
      d = start - step < end ? end : start - step;
    }

    if (el === window) {
      window.scrollTo(d, d);
    } else {
      el[direction] = d;
    }
    window.requestAnimationFrame(() => scroll(d, end, step));
  }
  scroll(from, to, step);
};

/**
 * @method postTime
 * @description 将时间戳格式化相对时间
 * @param {Object} options 相对时间模板
 * @return {String} 相对时间文案
 */
const postTime = function (options) {
  let timeText = {
    withinOneMinute: '刚刚',
    withinOneHour: '{minute}分钟前',
    withinToday: '{hour}小时前',
    yesterday: '昨天',
    history: '{month}月{day}日',
  };
  Object.assign(timeText, options);
  let judgeTimePast = function (timestamp) {
    const nowTimestamp = Date.now();
    const oneMinute = 1000 * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;

    const timestampDate = new Date(timestamp);
    const timeYear = timestampDate.getFullYear();
    const timeMonth = timestampDate.getMonth() + 1;
    const timeDate = timestampDate.getDate();
    const timeHours = timestampDate.getHours();
    const timeMinute = timestampDate.getMinutes();

    const timePast = nowTimestamp - timestamp;
    // 一分钟内
    const isWithinOneMinute = timePast < oneMinute;
    // 一小时内
    const isWithinOneHour = timePast < oneHour;
    // 一天内
    const isToday = timePast <= oneDay;
    // 两天内
    const isYesterday = timePast <= oneDay * 2;
    // 三天内
    const isBeforeYesterday = timePast <= oneDay * 3;

    if (isWithinOneMinute) {
      return timeText.withinOneMinute;
    }
    if (isWithinOneHour) {
      const pastMinute = parseInt(timePast / 1000 / 60);
      return timeText.withinOneHour.replace('{minute}', pastMinute);
    }
    if (isToday) {
      return timeText.withinToday
        .replace('{hour}', timeHours)
        .replace('{minute}', timeMinute);
    }
    if (isYesterday) {
      return timeText.yesterday
        .replace('{hour}', timeHours)
        .replace('{minute}', timeMinute);
    }
    if (isBeforeYesterday) {
      return timeText.dayBeforeYesterday
        .replace('{hour}', timeHours)
        .replace('{minute}', timeMinute);
    }
    return timeText.history
      .replace('{year}', timeYear)
      .replace('{month}', timeMonth)
      .replace('{day}', timeDate)
      .replace('{hour}', timeHours)
      .replace('{minute}', timeMinute);
  };
  return judgeTimePast;
};

/**
 * @method flatArray
 * @description 递归将多维数组拍平为一维数组
 * @param {Array} arr 多维数据
 * @return {Array} 一维数组
 */
const flatArray = function (arr) {
  return arr.reduce((base, item) => {
    // 如元素是数组则进行递归，逐层拍平
    const temp = Array.isArray(item) ? flatArray(item) : [item];
    base.push(...temp);
    return base;
  }, []); // 初始数组
};

/**
 * @method bubbleSort
 * @description 冒泡排序
 * @param {Array} arr 需要排序的数组
 * @return {Array}
 */
const bubbleSort = function (arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]];
      }
    }
  }
  return arr;
};
// 原理：
// 1，首先遍历一次数组；
// 2，到每一项时，再遍历一次剩余项，与当前项比较，不断取最小值替换到当前项
// 3，这样保证逐渐遍历的过程中都是取到最小值

/**
 * @method selectionSort
 * @description 选择排序
 * @param {Array} arr 需要排序的数组
 * @return {Array}
 */
const selectionSort = function (arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
  return arr;
};

/**
 * @method setTitle
 * @description 在ios上会出现spa设置title不起效的问题，使用ifarme方式兼容
 * @param {String} title
 * @return
 */
const setTitle = function (title) {
  document.title = title;
  var mobile = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(mobile)) {
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.setAttribute('src', '/favicon.ico');
    var iframeCallback = function () {
      setTimeout(function () {
        iframe.removeEventListener('load', iframeCallback);
        document.body.removeChild(iframe);
      }, 0);
    };
    iframe.addEventListener('load', iframeCallback);
    document.body.appendChild(iframe);
  }
};

/**
 * @method fullScreen
 * @description 全屏
 * @param {*}
 * @return {*}
 */
function fullScreen() {
  let el = document.documentElement;
  let rfs =
    el.requestFullScreen ||
    el.webkitRequestFullScreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullScreen;

  if (rfs) {
    rfs.call(el);
  } else if (typeof window.ActiveXObject !== 'undefined') {
    //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
    let wscript = new ActiveXObject('WScript.Shell');
    if (wscript != null) {
      wscript.SendKeys('{F11}');
    }
  }
}

/**
 * @method exitScreen
 * @description 退出全屏
 * @param {*}
 * @return {*}
 */
function exitScreen() {
  let el = document;
  let cfs =
    el.cancelFullScreen ||
    el.webkitCancelFullScreen ||
    el.mozCancelFullScreen ||
    el.exitFullScreen;

  if (cfs) {
    cfs.call(el);
  } else if (typeof window.ActiveXObject !== 'undefined') {
    //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
    let wscript = new ActiveXObject('WScript.Shell');
    if (wscript != null) {
      wscript.SendKeys('{F11}');
    }
  }
}

/**
 * @method arrayUnique
 * @description 数组去重
 * @param {Array} arr
 * @return {Array}
 */
const arrayUnique = {
  base: function (arr) {
    const newArr = [];
    for (const item in arr) {
      if (!newArr.includes(item)) {
        newArr.push(item);
      }
    }
    return newArr;
  },
  bySet: function (arr) {
    return Array.from(new Set(arr));
  },
  byMap: function (arr) {
    const newArr = [];
    const map = new Map();
    for (const value of arr) {
      if (!map.has(value)) {
        map.set(value, true);
        newArr.push(value);
      }
    }
    map.clear();
    return newArr;
  },
};

/**
 * @method uuid
 * @description 创建一个uuid
 * @return {String}
 */
const uuid = function () {
  var s = [];
  var hexDigits = '0123456789abcdef';
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';

  var uuid = s.join('');
  return uuid;
};

/**
 * @method downloadBlobData
 * @description post下载二进制文件
 * @param {Blob}} 二进制数据
 * @param {String} 文件名
 * @param {String} 文件类型如：'text/csv'
 *
 */
const downloadBlobData = function (data, fileName, contentType) {
  var blob = new Blob([data], { type: contentType });
  var downloadElement = document.createElement('a');
  var href = window.URL.createObjectURL(blob); // 创建下载的链接
  downloadElement.href = href;
  downloadElement.download = fileName; // 下载后文件名
  document.body.appendChild(downloadElement);
  downloadElement.click(); // 点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
  window.URL.revokeObjectURL(href); // 释放掉blob对象
};

/**
 * @method copyText
 * @description 复制文本到粘贴板
 * @param {String} text
 * @return {Boolean}
 */
const copyText = function (text) {
  try {
    const input = document.createElement('input');
    input.style.opacity = '0';
    input.style.position = 'fixed';
    input.style.top = '-100px;';
    input.style.left = '-100px';
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    return true;
  } catch (err) {
    console.log(err);
    console.log(
      '复制失败，execCommand 可能已经废弃，请更新 copyText 方法，使用 permission 获取粘贴板权限后，使用 Clipboard 对象进行复制操作'
    );
    return false;
  }
};

/**
 * @method toFixed
 * @description 重新避免原函数精度不准的问题
 * @param {Number} num 数值
 * @param {Number} s 保留小数点位数 默认为2
 * @return {String}
 * @example
 * toFixed(25.244)
 * // 25.24
 */
export function toFixed(num, s = 2) {
  const times = Math.pow(10, s);
  const des = num * times + 0.5;
  return parseInt(des, 10) / times + '';
}

/**
 * @method formatNumber
 * @description 格式化数值为特定格式
 * @param {Number} number 需要格式化的数值
 * @param {Number} precision 保留小数点，默认2
 * @param {String} thousand 千分位分隔符，默认','
 * @return {String}
 * @example
 * formatNumber(1000.22,1,',')
 * // '1,000.2'
 */
export function formatNumber(number, precision = 2, thousand = ',') {
  if (typeof number == 'number' || (number -= 0)) {
    return (number.toFixed(precision) + '').replace(
      /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,
      '$&' + thousand
    );
  }
  return '0';
}

/**
 * @method formatFileSize
 * @description 格式化文件大小
 * @param  {number} total 文件大小
 * @param  {number} n     total参数的原始单位如果为Byte，则n设为0，如果为KB，则n设为1，如果为MB，则n设为2，以此类推
 * @return {string}       带单位的文件大小的字符串
 * @example
 * formatFileSize(300)
 * // 300KB'
 */
export function formatFileSize(total, n = 0) {
  var unitArr = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
  var len = total / 1024.0;

  if (len > 1000) {
    return formatFileSize(len, ++n);
  }

  return len.toPrecision(3) + unitArr[n];
}

/**
 * @method getPercent
 * @description 获取百分比
 * @param {Number} value 数值
 * @param {Number} total 总数值 默认为100
 * @return {String} 百分比
 * @example
 * getPercent(0)
 * // 0%
 */
export function getPercent(value, total = 100) {
  if (total === 0 || (value === 0 && total === 0)) {
    return '100%';
  } else if (value === 0) {
    return '0%';
  } else {
    let percentValue = parseInt((value / total) * 10000) / 100;
    percentValue = percentValue < 0.01 ? 0.01 : percentValue;
    return `${percentValue}%`;
  }
}

/**
 * @method angle
 * @description 获取两个坐标点之间的角度
 * @param {Object} start {x,y}
 * @param {Object} end {x,y}
 * @return {Number}
 */
export const angle = function (
  { x: startX, y: startY },
  { x: moveX, y: moveY }
) {
  const absX = Math.abs(startX - moveX);
  const abxY = Math.abs(startY - moveY);

  // x 轴之差为 0
  if (absX === 0) {
    return 90;
  }

  // y 轴之差为 0
  if (abxY === 0) {
    return 0;
  }

  let angle = (Math.atan(abxY / absX) * 360) / (2 * Math.PI);

  return angle;
};

/**
 * @method getRandomColor
 * @description 生成随机HEX色值
 * @return {String}
 */
export function getRandomColor() {
  return (
    '#' +
    Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padEnd(6, '0')
  );
}

/**
 * @method getStarScore
 * @description 生成星级评分
 * @param {Number} rate：（1-5）
 * @return {String}
 */
export function getStarScore(rate) {
  return '★★★★★☆☆☆☆☆'.slice(5 - rate, 10 - rate);
}
