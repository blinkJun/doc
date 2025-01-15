<template>
  <fabric-canvas @init="onFabricCanvasInit"></fabric-canvas>
</template>
<script setup>
import bgTransparent from '../../../images/bg-transparent.png';
import FabricCanvas from '../canvas.vue';
import FabricZoom from '../handles/zoom';
import FabricTranslate from '../handles/translate';
async function onFabricCanvasInit(fabricCanvas) {
  // 设置背景
  fabricCanvas.setBackgroundColor(
    {
      source: bgTransparent,
      repeat: 'repeat',
    },
    fabricCanvas.renderAll.bind(fabricCanvas)
  );

  // 设置缩放
  const zoomInstance = new FabricZoom(fabricCanvas, { byPoint: true });
  zoomInstance.onChange((zoom) => {
    // console.log(zoom)
  });

  // 设置拖拽移动
  const translateInstance = new FabricTranslate(fabricCanvas);
  translateInstance.onChange((vpt) => {
    // console.log(vpt)
  });
}
</script>
