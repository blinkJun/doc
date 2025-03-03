<template>
  <fabric-canvas
    style="margin-top: 10px"
    @init="onFabricCanvasInit"
  ></fabric-canvas>
</template>
<script setup>
import FabricCanvas from '../canvas.vue';
import bgTransparent from '../../../images/bg-transparent.png';
import useCornerRotateControls from '../controls/rotate';
import useDelControl from '../controls/del';
import useConfirmControl from '../controls/confirm';
import useMouseCreateRect from '../handles/useMouseCreateRect';
import useResizeMask from '../handles/useResizeMask';
import { customDefaultContorls } from '../controls/default';

let fabricCanvas = null;
let fabric = null;

// 使用自定义控件
function useConstomContols(delCallback) {
  // 覆盖默认控件
  customDefaultContorls();
  // 新自定义旋转控件
  useCornerRotateControls(fabricCanvas);
  // 新增删除控件
  useDelControl(fabricCanvas, delCallback);
  fabricCanvas.requestRenderAll();
}

async function onFabricCanvasInit(canvas, fabricModule) {
  fabricCanvas = canvas;
  fabric = fabricModule;
  let onCreateRectTypeChange;
  // 设置背景
  canvas.setBackgroundColor(
    {
      source: bgTransparent,
      repeat: 'repeat',
    },
    canvas.renderAll.bind(canvas)
  );

  // 使用自定义控件
  useConstomContols(() => {
    // 被删除后可以再次生成
    setTimeout(() => {
      onCreateRectTypeChange && onCreateRectTypeChange('rect');
    }, 500);
  });

  // 即将使用自定义确认控件
  const { setControlToObject, removeControlFromObject } = useConfirmControl();

  // 可以使用鼠标框选生成矩形
  const { typeChange } = useMouseCreateRect(fabricCanvas, (rect) => {
    // 为元素设置遮罩层，遮罩层随元素变化
    useResizeMask(fabricCanvas, rect);
    // 添加确认控件设置
    setControlToObject(rect, {
      onCancel: () => {
        fabricCanvas.remove(rect);
        setTimeout(() => {
          // 被删除后可以再次生成
          typeChange('rect');
        }, 500);
      },
      onConfirm: () => {
        fabricCanvas.discardActiveObject();
      },
    });

    // 只能绘制一次,恢复为点选模式
    setTimeout(() => {
      // 被删除后可以再次生成
      typeChange('default');
    }, 500);
  });

  onCreateRectTypeChange = typeChange;

  fabricCanvas.renderAll();
}
</script>
