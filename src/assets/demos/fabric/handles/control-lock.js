import { fabric } from 'fabric';
import lockCanvasImg from '../../../images/controls/lockCanvasObject.svg';

const LOCK_CONTROL_KEY = 'lock';

/**
 * 锁定元素
 */
export function doLockActivedObjectControl(activeObject) {
  if (!activeObject) {
    return false;
  }
  const oldControlVisibleCache = {};
  const oldBorderColor = activeObject.borderColor;
  for (let key in activeObject.controls) {
    oldControlVisibleCache[key] = activeObject.controls[key].visible;
    if (key === LOCK_CONTROL_KEY) {
      activeObject.setControlVisible(LOCK_CONTROL_KEY, true);
    } else {
      activeObject.setControlVisible(key, false);
    }
  }
  activeObject.oldControlVisibleCache = oldControlVisibleCache;
  activeObject.oldBorderColor = oldBorderColor;
  activeObject.borderColor = '#FF3232';
}

/**
 * 解锁元素
 */
export function doUnlockActivedObjectControl(activeObject) {
  if (!activeObject) {
    return false;
  }
  const oldControlVisibleCache = activeObject.oldControlVisibleCache || {};

  for (let key in activeObject.controls) {
    if (key === LOCK_CONTROL_KEY) {
      activeObject.setControlVisible(LOCK_CONTROL_KEY, false);
    } else {
      activeObject.setControlVisible(key, oldControlVisibleCache[key] || true);
    }
  }
  activeObject.borderColor = activeObject.oldBorderColor || '#FF3232';
}

export function useLockControl(unlockCallback) {
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
    unlockCallback && unlockCallback();
  }
  // 锁定图标，只有被锁定时才显示，点击后解锁
  fabric.Object.prototype.controls[LOCK_CONTROL_KEY] = new fabric.Control({
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

export default {
  useLockControl,
  doLockActivedObjectControl,
  doUnlockActivedObjectControl,
};
