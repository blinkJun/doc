<template>
  <div ref="wrapEl" class="select-rect">
    <canvas :id="canvasId"></canvas>
  </div>
</template>
<script setup>
import { useId } from 'vue';
// import { fabric } from 'fabric';
import { onMounted, ref } from 'vue';

const canvasId = `fabric-canvas-${useId()}`;

const emit = defineEmits(['init']);

const wrapEl = ref(null);
let fabricCanvas;

const initFabric = () => {
  import('fabric').then((module) => {
    // use code
    const { fabric } = module.default;
    const wrapHeight = wrapEl.value.offsetHeight;
    const wrapWidth = wrapEl.value.offsetWidth;
    fabricCanvas = new fabric.Canvas(canvasId, {
      width: wrapWidth,
      height: wrapHeight,
    });
    emit('init', fabricCanvas);
  });
};

onMounted(initFabric);
</script>
<style>
.select-rect {
  width: 100%;
  height: 450px;
  border: 1px solid #eaeaea;
  background-color: #fafafa;
}
</style>
