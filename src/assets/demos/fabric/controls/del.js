import { fabric } from 'fabric';
import deleteIcon from '../../../images/controls/canvasObjectDeleteIcon.svg';
// 删除按钮
export function useDelControl(canvas, onObjectRemove) {
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
    onObjectRemove && onObjectRemove(activeObject);
  }

  // 删除图标
  fabric.Object.prototype.controls.del = new fabric.Control({
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

export default useDelControl;
