<template>
  <fabric-canvas @init="onFabricCanvasInit"></fabric-canvas>
  <div class="actions">
    <button type="button" @click="screenshot">截图</button>
    <button type="button" @click="centerSelectedObject">居中选中元素</button>
    <button type="button" @click="zoomToFitObjects(fabricCanvas)">
      展示所有元素
    </button>
  </div>
</template>
<script setup>
import bgTransparent from '../../../images/bg-transparent.png';
import FabricCanvas from '../canvas.vue';
import FabricZoom from '../handles/zoom';
import FabricSelection from '../handles/selection';
import FabricTranslate from '../handles/translate';
import { setCenterFromObject, zoomToFitObjects } from '../handles/utils';

let fabricCanvas = null;
let fabric = null;
let selectedObject = null;

async function onFabricCanvasInit(canvas, fabricModule) {
  fabricCanvas = canvas;
  fabric = fabricModule;
  // 设置背景
  canvas.setBackgroundColor(
    {
      source: bgTransparent,
      repeat: 'repeat',
    },
    canvas.renderAll.bind(canvas)
  );

  // 设置缩放
  const zoomInstance = new FabricZoom(canvas, { byPoint: true });
  zoomInstance.onChange((zoom) => {
    // console.log(zoom)
  });

  // 设置拖拽移动
  const translateInstance = new FabricTranslate(canvas);
  translateInstance.onChange((vpt) => {
    // console.log(vpt)
  });

  // 选中元素回调
  const selectionInstance = new FabricSelection(canvas);
  selectionInstance.onSelect((objects) => {
    selectedObject = objects[0];
  });
  selectionInstance.onClear(() => {
    selectedObject = null;
    // console.log('clear')
  });

  // 创建一个长方形
  const rect = new fabric.Rect({
    top: 100, // 距离容器顶部 100px
    left: 100, // 距离容器左侧 100px
    width: 30, // 矩形宽度 30px
    height: 30, // 矩形高度 30px
    fill: 'blue', // 填充
  });

  fabricCanvas.add(rect); // 将矩形添加到 canvas 画布里

  // 创建一个长方形
  const rect2 = new fabric.Rect({
    top: 500, // 距离容器顶部 100px
    left: 500, // 距离容器左侧 100px
    width: 100, // 矩形宽度 30px
    height: 100, // 矩形高度 30px
    fill: 'purple', // 填充
  });

  fabricCanvas.add(rect2); // 将矩形添加到 canvas 画布里
}

function screenshot() {
  const originalTransform = fabricCanvas.viewportTransform;
  const imageData = fabricCanvas.toDataURL({
    format: 'png',
  });

  fabricCanvas.viewportTransform = originalTransform;

  // 下载
  const a = document.createElement('a');
  a.href = imageData;
  a.download = `fabric-screenshot-${Date.now()}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

function centerSelectedObject() {
  if (!selectedObject) {
    return false;
  }
  setCenterFromObject(selectedObject, fabricCanvas);
}
</script>
<style lang="less" scoped>
.canvas-box {
  margin-top: 10px;
}
.actions {
  margin-top: 10px;
  > button {
    padding: 0 10px;
    border: 1px solid #eee;
    margin-right: 10px;
  }
}
</style>
