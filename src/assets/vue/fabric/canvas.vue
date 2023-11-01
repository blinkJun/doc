<template>
  <div ref="wrapEl" class="select-rect">
    <canvas id="select-rect-canvas"></canvas>
  </div>
</template>
<script setup>
// import { fabric } from 'fabric';
import { onMounted, ref } from 'vue';

const emit = defineEmits(['init']);

const wrapEl = ref(null);
let fabricCanvas;

const initFabric = () => {
  import('fabric').then((module) => {
    // use code
    const { fabric } = module.default;
    const wrapHeight = wrapEl.value.offsetHeight;
    const wrapWidth = wrapEl.value.offsetWidth;
    fabricCanvas = new fabric.Canvas('select-rect-canvas', {
      width: wrapWidth,
      height: wrapHeight,
      backgroundColor: 'transparent',
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
