<template>
  <fabric-canvas @init="onFabricCanvasInit"></fabric-canvas>
  <div class="actions">
    <button type="button" @click="addRect">矩形</button>
    <button type="button" @click="useConstomContols">设置自定义控件</button>
    <button type="button" @click="resetContols">恢复控件</button>
  </div>
  <div class="actions">
    <button type="button" @click="lockObject">锁定元素</button>
    <button type="button" @click="unlockObject">解锁元素</button>
  </div>
</template>
<script setup>
import bgTransparent from '../../../images/bg-transparent.png';
import FabricCanvas from '../canvas.vue';
import FabricZoom from '../handles/zoom';
import FabricSelection from '../handles/selection';
import FabricTranslate from '../handles/translate';
import {
  customDefaultContorls,
  resetDetaultContols,
} from '../controls/default';
import useCornerRotateControls from '../controls/rotate';
import useDelControl from '../controls/del';
import {
  useLockControl,
  doLockActivedObjectControl,
  doUnlockActivedObjectControl,
} from '../controls/lock';

let fabricCanvas = null;
let fabric = null;

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
    // console.log(objects)
  });
  selectionInstance.onClear(() => {
    // console.log('clear')
  });
}

// 添加一个矩形
function addRect() {
  // 创建一个长方形
  const rect = new fabric.Rect({
    top: 100, // 距离容器顶部 100px
    left: 100, // 距离容器左侧 100px
    width: 30, // 矩形宽度 30px
    height: 30, // 矩形高度 30px
    fill: 'blue', // 填充
  });

  fabricCanvas.add(rect); // 将矩形添加到 canvas 画布里
}

let removeRotateControlEventCache = null;
// 使用自定义控件
function useConstomContols() {
  // 覆盖默认控件
  customDefaultContorls();
  // 新自定义旋转控件
  const { removeRotateControlEvent } = useCornerRotateControls(fabricCanvas);
  removeRotateControlEventCache = removeRotateControlEvent;
  // 新增删除控件
  useDelControl(fabricCanvas, (object) => {
    // console.log(object);
  });
  // 新增锁定控件
  useLockControl(() => {
    unlockObject();
  });
  fabricCanvas.requestRenderAll();
}
// 恢复默认控件
function resetContols() {
  resetDetaultContols();
  removeRotateControlEventCache && removeRotateControlEventCache();
  fabricCanvas.requestRenderAll();
}

function lockObject() {
  const activeObject = fabricCanvas.getActiveObject();
  doLockActivedObjectControl(activeObject);
  fabricCanvas.requestRenderAll();
}
function unlockObject() {
  const activeObject = fabricCanvas.getActiveObject();
  doUnlockActivedObjectControl(activeObject);
  fabricCanvas.requestRenderAll();
}
</script>
<style lang="less" scoped>
.actions {
  margin-top: 10px;
  > button {
    padding: 0 10px;
    border: 1px solid #eee;
    margin-right: 10px;
  }
}
</style>
