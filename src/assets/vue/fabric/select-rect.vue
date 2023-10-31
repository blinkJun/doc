<template>
  <fabric-canvas @init="onFabricCanvasInit"></fabric-canvas>
</template>
<script setup>
import { ref } from 'vue';
import FabricCanvas from './canvas.vue';
import initControls from './handles/initControls';
import initControlsRotate from './handles/initControlsRotate';
import useMouseCreateRect, { maskOnResize } from './handles/useMouseCreateRect';
import useConstomAction from './handles/useCustomActions.js';

let changeSelectType = null;

function customRectControl(fabricCanvas, rect) {
  // 自定义一个操作栏，包含确认和删除按钮
  const { clear } = useConstomAction(fabricCanvas, rect, {
    onRemove: () => {
      fabricCanvas.remove(rect);
      setTimeout(() => {
        // 被删除后可以再次生成
        changeSelectType('rect');
      }, 500);
    },
    onCollect: () => {
      fabricCanvas.discardActiveObject();
    },
  });
}

function onFabricCanvasInit(fabricCanvas) {
  // 可以使用鼠标框选生成矩形
  const { typeChange } = useMouseCreateRect(fabricCanvas, (rect) => {
    // 矩形选中时显示遮罩层
    maskOnResize(fabricCanvas, rect);

    // 再次自定义矩形控制器
    customRectControl(fabricCanvas, rect);

    // 只能绘制一次,恢复为点选模式
    setTimeout(() => {
      // 被删除后可以再次生成
      typeChange('default');
    }, 500);
  });

  changeSelectType = typeChange;

  // 自定义矩形操作样式
  initControls(
    fabricCanvas,
    () => {},
    (objects) => {
      console.log('del');
      // 被删除后可以再次生成
      setTimeout(() => {
        typeChange('rect');
      }, 500);
    }
  );

  // 自定义4个角旋转样式
  initControlsRotate(fabricCanvas);

  fabricCanvas.renderAll();
}
</script>
