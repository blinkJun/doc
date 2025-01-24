export default class FabricZoom {
  constructor(canvas, options = { byPoint: true }) {
    this.events = [];
    this.hotkeys = options.hotkeys || ['Ctrl'];
    const byPoint = options.byPoint;
    // 缩放，监听鼠标滚轮事件
    canvas.on('mouse:wheel', (opt) => {
      if (this.hotkeys.includes('Ctrl') && !opt.e.ctrlKey) {
        return false;
      }
      opt.e.stopPropagation();
      opt.e.preventDefault();
      const delta = opt.e.deltaY; // 滚轮向上滚一下是 -100，向下滚一下是 100
      let zoom = canvas.getZoom(); // 获取画布当前缩放值

      // 控制缩放范围在 0.01~20 的区间内
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;

      // 设置画布缩放比例
      // 关键点！！！
      // 参数1：将画布的所放点设置成鼠标当前位置
      // 参数2：传入缩放值
      if (byPoint) {
        canvas.zoomToPoint(
          {
            x: opt.e.offsetX, // 鼠标x轴坐标
            y: opt.e.offsetY, // 鼠标y轴坐标
          },
          zoom // 最后要缩放的值
        );
      } else {
        canvas.setZoom(zoom);
      }
      this.events.forEach((cb) => {
        cb(zoom);
      });
    });
  }
  onChange(cb) {
    this.events.push(cb);
  }
}
