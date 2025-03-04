<template>
  <fabric-canvas @init="onFabricCanvasInit"></fabric-canvas>
  <div class="actions">
    <button type="button" @click="verticalAlign('top')">垂直-顶部</button>
    <button type="button" @click="verticalAlign('middle')">垂直-居中</button>
    <button type="button" @click="verticalAlign('bottom')">垂直-底部</button>
    <button type="button" @click="textAlign('left')">水平-左</button>
    <button type="button" @click="textAlign('center')">水平-居中</button>
    <button type="button" @click="textAlign('right')">水平-右</button>
  </div>
</template>
<script setup>
import bgTransparent from '../../../images/bg-transparent.png';
import FabricCanvas from '../canvas.vue';

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

  const width = 150;
  const height = 100;

  // 文本
  const textBox = new fabric.Text('hello world', {
    fontSize: 14,
    splitByGrapheme: true,
  });
  // 容器
  const rect = new fabric.Rect({
    width: width,
    height: height,
    fill: 'transparent',
  });
  // 建组
  const group = new fabric.Group([rect, textBox], {
    top: 100,
    left: 100,
    width: width,
    height: height,
  });
  textBox.set('width', width);
  fabricCanvas.add(group);
}

const groupKeys = [
  'instance',
  'top',
  'left',
  'width',
  'height',
  'scaleX',
  'scaleY',
];
// 更新属性
function updateObjectProperty(config, object) {
  if (object) {
    Object.keys(config).forEach((key) => {
      const value = config[key];
      object.set(key, value);
    });
  }
}
function updateTextProperty(config, object) {
  // 组内的容器和文本
  const rectObject = object.item(0);
  const textObject = object.item(1);

  // 应始终具有宽高
  if (!config.width) {
    config.width = object.get('scaleX') * object.get('width');
  }
  if (!config.height) {
    config.height = object.get('scaleY') * object.get('height');
  }

  // 取组的属性进行设置
  const groupConfig = {};
  groupKeys.forEach((key) => {
    if (typeof config[key] !== 'undefined') {
      groupConfig[key] = config[key];
    }
  });

  // 取文本的属性进行设置
  const textConfig = {};
  for (const key in config) {
    if (!groupConfig[key]) {
      textConfig[key] = config[key];
    }
  }

  // 特殊处理属性：
  if (typeof config.visible !== 'undefined') {
    groupConfig.visible = config.visible;
    textConfig.visible = config.visible;
  }

  updateObjectProperty(groupConfig, rectObject);
  updateObjectProperty(textConfig, textObject);

  // 更新文本在组中的位置
  const updateTextVerticalAlign = (type) => {
    if (type === 'top') {
      updateObjectProperty(
        {
          top: -object.height / 2,
        },
        textObject
      );
    }
    if (type === 'middle') {
      updateObjectProperty(
        {
          top: -textObject.height / 2,
        },
        textObject
      );
    }
    if (type === 'bottom') {
      updateObjectProperty(
        {
          top: object.height / 2 - textObject.height,
        },
        textObject
      );
    }
  };

  // 根据组的大小，更新组内矩形、文本大小位置
  if (typeof groupConfig.width !== 'undefined') {
    updateObjectProperty(
      {
        scaleX: 1,
        width: object.width,
        left: -object.width / 2,
      },
      rectObject
    );

    updateObjectProperty(
      {
        scaleX: 1,
        width: object.width,
        left: -object.width / 2,
      },
      textObject
    );
  }

  if (typeof groupConfig.height !== 'undefined') {
    updateObjectProperty(
      {
        scaleY: 1,
        height: object.height,
        top: -object.height / 2,
      },
      rectObject
    );

    updateTextVerticalAlign(textObject.verticalAlign);
  }
}
function verticalAlign(type) {
  const activeObjects = fabricCanvas.getActiveObjects();
  const group = activeObjects[0];
  if (!group) {
    return false;
  }
  updateTextProperty(
    {
      verticalAlign: type,
    },
    group
  );
  fabricCanvas.renderAll();
}
function textAlign(type) {
  const activeObjects = fabricCanvas.getActiveObjects();
  const group = activeObjects[0];
  if (!group) {
    return false;
  }
  updateTextProperty(
    {
      textAlign: type,
    },
    group
  );
  fabricCanvas.renderAll();
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
