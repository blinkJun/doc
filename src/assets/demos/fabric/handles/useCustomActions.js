import { fabric } from 'fabric';

// 删除按钮样式
const deleteIcon = `data:image/svg+xml,${encodeURIComponent(
  '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1692954890354" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13326" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M617.92 516.096l272 272-101.824 101.824-272-272-272 272-101.856-101.824 272-272-275.008-275.04L241.056 139.2l275.04 275.04 275.04-275.04 101.824 101.824-275.04 275.04z" fill="#F85F4A" p-id="13327"></path></svg>'
)}`;
const deleteImg = document.createElement('img');
deleteImg.src = deleteIcon;

// 确定按钮样式
const collectIcon = `data:image/svg+xml,${encodeURIComponent(
  '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1692954639646" class="icon" viewBox="0 0 1092 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13291" xmlns:xlink="http://www.w3.org/1999/xlink" width="213.28125" height="200"><path d="M445.781333 756.667733L204.8 515.003733l71.953067-72.021333L470.357333 637.1328 835.242667 273.066667l71.953066 71.8848-410.8288 409.873066a33.928533 33.928533 0 0 1-3.6864 3.208534 34.133333 34.133333 0 0 1-46.967466-1.365334z" fill="#00D775" p-id="13292"></path></svg>'
)}`;
const collectImg = document.createElement('img');
collectImg.src = collectIcon;

// 渲染图标
function renderIcon(icon, size) {
  return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(icon, -size / 2, -size / 2, size, size);
    ctx.restore();
  };
}
// 圆角矩形
function createRadiusRect(
  ctx,
  x,
  y,
  width,
  height,
  cornerSize,
  bgColor,
  borderColor
) {
  ctx.beginPath();
  ctx.moveTo(x + cornerSize, y);
  ctx.arcTo(x + width, y, x + width, y + cornerSize, cornerSize);
  ctx.lineTo(x + width, y + height - cornerSize);
  ctx.arcTo(
    x + width,
    y + height,
    x + width - cornerSize,
    y + height,
    cornerSize
  );
  ctx.lineTo(x + cornerSize, y + height);
  ctx.arcTo(x, y + height, x, y + height - cornerSize, cornerSize);
  ctx.lineTo(x, y + cornerSize);
  ctx.arcTo(x, y, x + cornerSize, y, cornerSize);
  ctx.closePath();

  ctx.fillStyle = bgColor;
  // ctx.strokeStyle = borderColor
  ctx.fill();
  // ctx.stroke()
}

// todos 根据矩形状态更新按钮区域的位置
function checkEmptyPosition(rect, emptyPositionChange) {
  const checkPosition = () => {
    const bottom = rect.canvas.height - rect.top - rect.height;
    if (bottom > rect.top) {
      emptyPositionChange('bottom');
    } else {
      emptyPositionChange('top');
    }
  };
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
    rect.on(key, checkPosition);
  });
  // 移除
  // const removeEvents = ['removed', 'deselected']
  // removeEvents.forEach((key) => {
  //   rect.on(key, removeMask)
  // })
}

export default function (canvas, rect, options) {
  // 增加自定义控件
  rect.controls.actionsBg = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: -25,
    offsetX: -31,
    cursorStyle: 'default', // 鼠标移到控件时的指针样式
    render: function (ctx, left, top, styleOverride, fabricObject) {
      ctx.save();
      const width = 62;
      const height = 23;
      ctx.translate(left, top);
      ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
      createRadiusRect(
        ctx,
        -width / 2,
        -height / 2,
        width,
        height,
        3,
        'rgba(0,0,0,0.5)',
        'rgba(0,0,0,0.5)'
      );
      ctx.restore();
    },
    cornerSize: 24,
  });
  rect.controls.actionRemove = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: -25,
    offsetX: -46,
    cursorStyle: 'pointer',
    mouseUpHandler: options.onRemove,
    render: renderIcon(deleteImg, 16),
    cornerSize: 24,
  });
  rect.controls.actionCollect = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: -25,
    offsetX: -16,
    cursorStyle: 'pointer',
    mouseUpHandler: options.onCollect,
    render: renderIcon(collectImg, 24),
    cornerSize: 24,
  });
  rect.controls.deleteControl.visible = false;

  // 自动更换控件的位置
  // todos，清空选框的控件事件
  checkEmptyPosition(rect, (position) => {
    if (position === 'bottom') {
      rect.controls.actionsBg.y = 0.5;
      rect.controls.actionsBg.offsetY = 25;

      rect.controls.actionRemove.y = 0.5;
      rect.controls.actionRemove.offsetY = 25;

      rect.controls.actionCollect.y = 0.5;
      rect.controls.actionCollect.offsetY = 25;
    } else {
      rect.controls.actionsBg.y = -0.5;
      rect.controls.actionsBg.offsetY = -25;

      rect.controls.actionRemove.y = -0.5;
      rect.controls.actionRemove.offsetY = -25;

      rect.controls.actionCollect.y = -0.5;
      rect.controls.actionCollect.offsetY = -25;
    }
  });

  const clear = () => {
    delete rect.controls.actionRemove;
    delete rect.controls.actionCollect;
    delete rect.controls.actionsBg;
    rect.controls.deleteControl.visible = true;
    canvas.remove(rect);
  };
  return {
    clear,
  };
}
