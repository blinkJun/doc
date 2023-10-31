import { fabric } from 'fabric';
import useClipMask from './useClipMask';

export function maskOnResize(canvas, object) {
  // 自定义遮罩层，用于裁剪时显示黑色半透明背景
  const { updateMask, removeMask } = useClipMask(canvas);
  // 更新
  const updateEvents = [
    'scaled',
    'selected',
    'modified',
    'scaling',
    'moving',
    'rotating',
    'skewing',
  ];
  updateEvents.forEach((key) => {
    object.on(key, () => {
      updateMask(object);
    });
  });
  // 移除
  const removeEvents = ['removed', 'deselected'];
  removeEvents.forEach((key) => {
    object.on(key, removeMask);
  });
}

export function getRectByPoints(startPoint, endPoint) {
  // 矩形参数计算（前面总结的4条公式）
  const top = Math.min(startPoint.y, endPoint.y);
  const left = Math.min(startPoint.x, endPoint.x);
  const width = Math.abs(startPoint.x - endPoint.x);
  const height = Math.abs(startPoint.y - endPoint.y);
  return {
    top,
    left,
    width,
    height,
  };
}

// 创建矩形
export function createRect(position) {
  // 矩形对象
  return new fabric.Rect({
    ...position,
    fill: 'transparent', // 填充色：透明
    stroke: '#3E63F1', // 边框颜色：主题色
    shadow: '1px 1px 2px rgba(255, 255, 255, 0.5)', // 阴影
    inverted: true,
    absolutePositioned: true,
  });
}
export default function (canvas, onRectInsert) {
  // 当前操作模式（默认 || 创建矩形）
  let currentType = 'rect';

  // 画布操作类型切换
  function typeChange(opt) {
    currentType = opt;
    switch (opt) {
      case 'default': // 默认框选模式
        canvas.selection = true; // 允许框选
        canvas.selectionColor = 'rgba(100, 100, 255, 0.3)'; // 选框填充色：半透明的蓝色
        canvas.selectionBorderColor = 'rgba(255, 255, 255, 0.3)'; // 选框边框颜色：半透明灰色
        canvas.skipTargetFind = false; // 允许选中
        break;
      case 'rect': // 创建矩形模式
        canvas.selectionColor = 'transparent'; // 选框填充色：透明
        canvas.selectionBorderColor = 'rgba(0, 0, 0, 0.2)'; // 选框边框颜色：透明度很低的黑色（看上去是灰色）
        canvas.skipTargetFind = true; // 禁止选中
        break;
    }
  }
  typeChange('rect');

  // 起始和结束坐标
  let startPoint = null;
  let endPoint = null;
  let pressing = false;

  canvas.on('mouse:down', canvasMouseDown);
  canvas.on('mouse:move', canvasMouseMove);
  canvas.on('mouse:up', canvasMouseUp);

  // 鼠标在画布上按下
  function canvasMouseDown(e) {
    pressing = true;
    // 鼠标左键按下时，将当前坐标 赋值给 startPoint。{x: xxx, y: xxx} 的格式
    startPoint = e.absolutePointer;
  }

  // 鼠标在画布上移动
  let mask = null;
  function canvasMouseMove(e) {
    if (pressing && currentType === 'rect') {
      const currentPoint = e.absolutePointer;
      const position = getRectByPoints(startPoint, currentPoint);
      const rect = createRect(position);
      if (!mask) {
        mask = useClipMask(canvas);
      }
      mask.updateMask(rect);
    }
  }

  // 鼠标在画布上松开
  function canvasMouseUp(e) {
    pressing = false;
    // 清除绘制时的遮罩层
    if (mask) {
      mask.removeMask();
      mask = null;
    }
    // 绘制矩形的模式下，才执行下面的代码
    if (currentType === 'rect') {
      // 松开鼠标左键时，将当前坐标 赋值给 endPoint
      endPoint = e.absolutePointer;
      const canCreate =
        endPoint.x !== startPoint.x || endPoint.y !== startPoint.y;
      if (!canCreate) {
        return false;
      }
      // 如果点击和松开鼠标，都是在同一个坐标点，不会生成矩形
      if (JSON.stringify(startPoint) !== JSON.stringify(endPoint)) {
        // 调用 创建矩形 的方法
        const position = getRectByPoints(startPoint, endPoint);
        const rect = createRect(position);
        // 返回
        onRectInsert && onRectInsert(rect);

        // 将矩形添加到画布上
        canvas.add(rect);

        // 设置聚焦
        canvas.setActiveObject(rect);
      }
      // 清空绘制数据
      startPoint = null;
      endPoint = null;
    }
  }

  return {
    typeChange,
  };
}
