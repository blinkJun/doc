import { fabric } from 'fabric';

export default function (canvas) {
  // 自定义遮罩层，用于裁剪时显示黑色半透明背景
  const mask = new fabric.Rect({
    top: 0,
    left: 0,
    width: canvas.width,
    height: canvas.height,
    fill: 'rgba(0,0,0,0.5)',
    selectable: false,
    evented: false,
  });
  let insertMask = false;
  // 更新遮罩层
  function updateMask(object) {
    object.clone((cloneObject) => {
      cloneObject.absolutePositioned = true;
      cloneObject.inverted = true;
      mask.clipPath = cloneObject;
      if (!insertMask) {
        insertMask = true;
        canvas.add(mask);
      }
      mask.sendBackwards();
    });
  }
  // 移除遮罩层
  function removeMask() {
    insertMask = false;
    canvas.remove(mask);
  }
  return {
    updateMask,
    removeMask,
  };
}
