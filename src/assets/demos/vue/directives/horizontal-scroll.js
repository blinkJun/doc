/*
 * @Author liangjun
 * @LastEditors liangjun
 * @Date 2021-11-03 16:05:40
 * @LastEditTime 2021-11-03 16:59:32
 * @Description 横向滚动指令，使用此指令在元素上时，滚动鼠标滚轮可以实现横向滚动
 */
import { elScroll } from '@/plugins/utils';
const listeners = {};
export default {
  bind(el, binding, vnode) {
    const handler = function (event) {
      // 最大距离
      const maxScrollLeft = this.scrollWidth - this.offsetWidth;
      if (maxScrollLeft === 0) {
        // 无需滚动
        return false;
      }
      // 禁用默认行为
      event.preventDefault();
      // 开始位置
      const start = this.scrollLeft;
      // 当前滚轮鼠标偏移
      const wheelDelta = event.wheelDelta;
      // 最终位置
      let end = start - wheelDelta;
      if (end > 0) {
        end = end > maxScrollLeft ? maxScrollLeft : end;
      } else {
        end = 0;
      }

      elScroll(this, start, end, 0, () => {}, 'scrollLeft');
    };
    listeners[vnode.context._uid] = handler;
    el.addEventListener('mousewheel', handler);
  },
  unbind(el, binding, vnode) {
    el.removeEventListener('mousewheel', listeners[vnode.context._uid]);
  },
};
