// import { fabric } from 'fabric-with-erasing'

/**
 * 设置画布中心到指定对象中心点上
 * @param {Object} obj 指定的对象
 */
export function setCenterFromObject(obj, canvas) {
  const objCenter = obj.getCenterPoint();
  const viewportTransform = canvas.viewportTransform;
  if (
    canvas.width === undefined ||
    canvas.height === undefined ||
    !viewportTransform
  )
    return;
  viewportTransform[4] = canvas.width / 2 - objCenter.x * viewportTransform[0];
  viewportTransform[5] = canvas.height / 2 - objCenter.y * viewportTransform[3];
  canvas.setViewportTransform(viewportTransform);
  canvas.renderAll();
}

/**
 * @method zoomToFitObjects
 * @description 缩放到显示所有对象
 * @param {Object} canvas
 */
export function zoomToFitObjects(canvas) {
  if (canvas.getObjects().length < 1) {
    return;
  }
  const x1 = Math.min(...canvas.getObjects().map((obj) => obj.left));
  const y1 = Math.min(...canvas.getObjects().map((obj) => obj.top));
  const x2 = Math.max(
    ...canvas.getObjects().map((obj) => obj.left + obj.getScaledWidth())
  );
  const y2 = Math.max(
    ...canvas.getObjects().map((obj) => obj.top + obj.getScaledHeight())
  );
  const height = y2 - y1;
  const width = x2 - x1;
  const zoom1 = canvas.getHeight() / height;
  const zoom2 = canvas.getWidth() / width;
  const zoom = zoom1 > zoom2 ? zoom2 : zoom1;
  const viewportTransform = [
    zoom,
    0,
    0,
    zoom,
    (0 - x1) * zoom,
    (0 - y1) * zoom,
  ];
  canvas.setViewportTransform(viewportTransform);
}
