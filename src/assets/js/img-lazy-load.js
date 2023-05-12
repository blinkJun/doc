/*
 * @Author liangjun
 * @LastEditors liangjun
 * @Date 2020-07-17 17:03:41
 * @LastEditTime 2020-07-17 17:05:15
 * @Description 图片懒加载
 */

// <img src="" class="lazy" data-src="http://dev-images.qiniu.kuman.com/diurnal/timgNR1M9P5Y.jpg" alt="">
// const lazy = new LazyLoad()
// lazy.start();lazy.end();lazy.refresh();
// start后，进入窗口类名为.lazy的img元素将data-src的内容载入到src;并删除lazy类名
class LazyLoad {
  constructor(options = {}) {
    this.sourceAttrName = options.source || 'data-src';
    this.lazyloadSelector = options.selector || '.lazy';
    this.ob = null;
    this.throttle = null;
    this.startLock = false;
  }
  loadImage(img) {
    img.src = img.getAttribute(this.sourceAttrName);
    img.classList.remove(this.lazyloadSelector.substring(1));
  }
  isInSight(img) {
    const bound = img.getBoundingClientRect();
    const clientHeight = window.innerHeight;
    //如果只考虑向下滚动加载
    //const clientWidth = window.innerWeight;
    return bound.top <= clientHeight + 100; // +100提前加载
  }
  start() {
    if (this.startLock) {
      console.log('lazyload already start');
      return;
    }
    this.scrollListen();
    if ('IntersectionObserver' in window) {
      let imgs = Array.from(document.querySelectorAll(this.lazyloadSelector));
      this.ob = new IntersectionObserver((changes) => {
        for (const change of changes) {
          if (0 < change.intersectionRatio && change.intersectionRatio <= 1) {
            this.loadImage(change.target);
            this.ob.unobserve(change.target);
          }
        }
      });
      imgs.forEach((img) => {
        this.ob.observe(img);
      });
    } else {
      window.addEventListener('scroll', this.scrollListen.bind(this));
    }
    this.startLock = true;
  }
  end() {
    this.ob.disconnect();
    window.removeEventListener('scroll', this.scrollListen);
    this.startLock = false;
  }
  refresh() {
    this.end();
    this.start();
  }
  normalLazyLoad() {
    let imgs = Array.from(document.querySelectorAll(this.lazyloadSelector));
    imgs.forEach((img) => {
      if (this.isInSight(img)) {
        this.loadImage(img);
      }
    });
  }
  scrollListen() {
    this.normalLazyLoad();
  }
}
