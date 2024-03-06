/*
 * @LastEditTime 2024-03-06 17:14:42
 * @Description: 控制条样式
 */

import { fabric } from 'fabric';
import verticalImg from '../../../images/controls/middlecontrol.svg';
import horizontalImg from '../../../images/controls/middlecontrolhoz.svg';
import edgeImg from '../../../images/controls/edgecontrol.svg';
import rotateImg from '../../../images/controls/rotateicon.svg';
import lockCanvasImg from '../../../images/controls/lockCanvasObject.svg';
import deleteIcon from '../../../images/controls/canvasObjectDeleteIcon.svg';

function hideIntervalControl() {
  fabric.Object.prototype.controls.mt.visible = false;
  fabric.Object.prototype.controls.ml.visible = false;
  fabric.Object.prototype.controls.mb.visible = false;
  fabric.Object.prototype.controls.mr.visible = false;
}

// 中间横杠
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

// 顶点
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

// 删除
function deleteControl(canvas, removeActivedObjectCallback) {
  const delImg = document.createElement('img');
  delImg.src = deleteIcon;

  function renderDelIcon(ctx, left, top, styleOverride, fabricObject) {
    const size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(delImg, -size / 2, -size / 2, size, size);
    ctx.restore();
  }

  // 删除选中元素
  function deleteObject() {
    const activeObject = canvas.getActiveObjects();
    if (activeObject) {
      activeObject.map((item) => canvas.remove(item));
      canvas.requestRenderAll();
      canvas.discardActiveObject();
    }
    removeActivedObjectCallback(activeObject);
  }

  // 删除图标
  fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: -16,
    offsetX: 16,
    cursorStyle: 'pointer',
    mouseUpHandler: deleteObject,
    render: renderDelIcon,
    cornerSize: 24,
  });
}

// 旋转
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

function addLockObjectIcon(canvas, unlockActivedObjectCallBack) {
  const img = document.createElement('img');
  img.src = lockCanvasImg;
  function renderIconLock(ctx, left, top, styleOverride, fabricObject) {
    const wsize = 24;
    const hsize = 24;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(img, -wsize / 2, -hsize, wsize, hsize);
    ctx.restore();
  }
  // 解锁元素
  function unlockActivedObject() {
    unlockActivedObjectCallBack(false);
  }
  // 锁定图标
  fabric.Object.prototype.controls.lockObjectControl = new fabric.Control({
    x: 0.5,
    y: 0.5,
    offsetY: 16,
    touchSizeX: 36,
    touchSizeY: 36,
    visible: false,
    sizeX: 36,
    sizeY: 36,
    mouseUpHandler: unlockActivedObject,
    cursorStyle: 'pointer',
    actionName: 'ulock',
    render: renderIconLock,
  });
}

export function initControls(
  canvas,
  unlockActivedObjectCallBack,
  removeActivedObjectCallback
) {
  // 删除图标
  deleteControl(canvas, removeActivedObjectCallback);
  // 顶点图标
  peakControl(canvas);
  // 中间横杠图标
  intervalControl(canvas);
  // 旋转图标
  rotationControl(canvas);
  // 锁定图标
  addLockObjectIcon(canvas, unlockActivedObjectCallBack);

  // 选中样式
  fabric.Object.prototype.set({
    transparentCorners: false,
    borderColor: '#5E7FFF',
    cornerColor: '#FFF',
    borderScaleFactor: 1.5,
    cornerStyle: 'circle',
    cornerStrokeColor: '#0E98FC',
    borderOpacityWhenMoving: 1,
  });

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

export default initControls;
export { hideIntervalControl };
