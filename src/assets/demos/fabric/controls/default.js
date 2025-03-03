import { fabric } from 'fabric';
import verticalImg from '../../../images/controls/middlecontrol.svg';
import horizontalImg from '../../../images/controls/middlecontrolhoz.svg';
import edgeImg from '../../../images/controls/edgecontrol.svg';
import rotateImg from '../../../images/controls/rotateicon.svg';

// 缓存默认控件
const defaultControls = { ...fabric.Object.prototype.controls };
// 缓存默认对象设置
const defaultObjectConfig = {
  transparentCorners: fabric.Object.prototype.transparentCorners,
  borderColor: fabric.Object.prototype.borderColor,
  cornerColor: fabric.Object.prototype.cornerColor,
  borderScaleFactor: fabric.Object.prototype.borderScaleFactor,
  cornerStyle: fabric.Object.prototype.cornerStyle,
  cornerStrokeColor: fabric.Object.prototype.cornerStrokeColor,
  borderOpacityWhenMoving: fabric.Object.prototype.borderOpacityWhenMoving,
};
// 缓存默认组设置
const defaultGroupConfig = {
  lockMovementX: fabric.Group.prototype.lockMovementX,
  lockMovementY: fabric.Group.prototype.lockMovementY,
  lockRotation: fabric.Group.prototype.lockRotation,
  lockScalingX: fabric.Group.prototype.lockScalingX,
  lockScalingY: fabric.Group.prototype.lockScalingY,
  selectable: fabric.Group.prototype.selectable,
  hasControls: fabric.Group.prototype.hasControls,
};

// 覆盖默认中间横杠
function intervalControl() {
  const verticalImgIcon = document.createElement('img');
  verticalImgIcon.src = verticalImg;

  const horizontalImgIcon = document.createElement('img');
  horizontalImgIcon.src = horizontalImg;

  function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    const wsize = 20;
    const hsize = 20;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(verticalImgIcon, -wsize / 2, -hsize / 2, wsize, hsize);
    ctx.restore();
  }

  function renderIconHoz(ctx, left, top, styleOverride, fabricObject) {
    const wsize = 20;
    const hsize = 20;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(horizontalImgIcon, -wsize / 2, -hsize / 2, wsize, hsize);
    ctx.restore();
  }
  // 中间横杠：左
  fabric.Object.prototype.controls.ml = new fabric.Control({
    visible: true,
    x: -0.5,
    y: 0,
    offsetX: -1,
    cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
    actionHandler: fabric.controlsUtils.scalingXOrSkewingY,
    getActionName: fabric.controlsUtils.scaleOrSkewActionName,
    render: renderIcon,
  });
  // 中间横杠：右
  fabric.Object.prototype.controls.mr = new fabric.Control({
    visible: true,
    x: 0.5,
    y: 0,
    offsetX: 1,
    cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
    actionHandler: fabric.controlsUtils.scalingXOrSkewingY,
    getActionName: fabric.controlsUtils.scaleOrSkewActionName,
    render: renderIcon,
  });
  // 中间横杠：底
  fabric.Object.prototype.controls.mb = new fabric.Control({
    visible: true,
    x: 0,
    y: 0.5,
    offsetY: 1,
    cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
    actionHandler: fabric.controlsUtils.scalingYOrSkewingX,
    getActionName: fabric.controlsUtils.scaleOrSkewActionName,
    render: renderIconHoz,
  });
  // 中间横杠：顶
  fabric.Object.prototype.controls.mt = new fabric.Control({
    visible: true,
    x: 0,
    y: -0.5,
    offsetY: -1,
    cursorStyleHandler: fabric.controlsUtils.scaleSkewCursorStyleHandler,
    actionHandler: fabric.controlsUtils.scalingYOrSkewingX,
    getActionName: fabric.controlsUtils.scaleOrSkewActionName,
    render: renderIconHoz,
  });
}

// 覆盖顶点
function peakControl() {
  const img = document.createElement('img');
  img.src = edgeImg;

  function renderIconEdge(ctx, left, top, styleOverride, fabricObject) {
    const wsize = 20;
    const hsize = 20;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(img, -wsize / 2, -hsize / 2, wsize, hsize);
    ctx.restore();
  }
  // 四角图标：上左
  fabric.Object.prototype.controls.tl = new fabric.Control({
    x: -0.5,
    y: -0.5,
    cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler,
    actionHandler: fabric.controlsUtils.scalingEqually,
    render: renderIconEdge,
  });
  // 四角图标：下左
  fabric.Object.prototype.controls.bl = new fabric.Control({
    x: -0.5,
    y: 0.5,
    cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler,
    actionHandler: fabric.controlsUtils.scalingEqually,
    render: renderIconEdge,
  });
  // 四角图标：上右
  fabric.Object.prototype.controls.tr = new fabric.Control({
    x: 0.5,
    y: -0.5,
    cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler,
    actionHandler: fabric.controlsUtils.scalingEqually,
    render: renderIconEdge,
  });
  // 四角图标：下右
  fabric.Object.prototype.controls.br = new fabric.Control({
    x: 0.5,
    y: 0.5,
    cursorStyleHandler: fabric.controlsUtils.scaleCursorStyleHandler,
    actionHandler: fabric.controlsUtils.scalingEqually,
    render: renderIconEdge,
  });
}

// 覆盖旋转点
function rotationControl() {
  const img = document.createElement('img');
  img.src = rotateImg;
  function renderIconRotate(ctx, left, top, styleOverride, fabricObject) {
    const wsize = 40;
    const hsize = 40;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(img, -wsize / 2, -hsize / 2, wsize, hsize);
    ctx.restore();
  }
  // 旋转图标
  fabric.Object.prototype.controls.mtr = new fabric.Control({
    x: 0,
    y: 0.5,
    cursorStyleHandler: fabric.controlsUtils.rotationStyleHandler,
    actionHandler: fabric.controlsUtils.rotationWithSnapping,
    offsetY: 30,
    withConnecton: false,
    actionName: 'rotate',
    render: renderIconRotate,
  });
}

// 自定义控件
export function customDefaultContorls(canvas) {
  // 顶点图标
  peakControl(canvas);
  // 中间横杠图标
  intervalControl(canvas);
  // 旋转图标
  rotationControl(canvas);
  // 选中样式
  fabric.Object.prototype.set({
    transparentCorners: false,
    borderColor: '#5E7FFF',
    cornerColor: '#FFF',
    borderScaleFactor: 1.5,
    cornerStyle: 'circle',
    cornerStrokeColor: '#0E98FC',
    borderOpacityWhenMoving: 0.7,
  });
  // 组样式
  fabric.Group.prototype.set({
    lockMovementX: false,
    lockMovementY: false,
    lockRotation: false,
    lockScalingX: false,
    lockScalingY: false,
    selectable: true,
    hasControls: true,
  });
}

// 恢复默认控件
export function resetDetaultContols() {
  fabric.Object.prototype.controls = {
    ...defaultControls,
  };
  fabric.Object.prototype.set(defaultObjectConfig);
  fabric.Group.prototype.set(defaultGroupConfig);
}
