/*
 * @Author liangjun
 * @LastEditors liangjun
 * @Date 2020-07-17 17:14:48
 * @LastEditTime 2020-07-17 17:15:24
 * @Description useragent
 */

let ua = navigator.userAgent;
const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(ua);
const isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
const isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
const isWx = ua.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';
const isQQ = ua.toLowerCase().match(/QQ/i) == 'qq';
const isWeiBo = ua.toLowerCase().match(/WeiBo/i) == 'weibo';
