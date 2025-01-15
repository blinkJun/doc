# 2D 引擎：[`fabric`](https://fabricjs.com/)

`fabric`是一个`javascript canvas`工具库，如果你打算使用`canvas`进行`2d`绘图，推荐使用`fabric`。

官方文档比较难看懂，推荐看此作者的文章：[Fabric.js 从入门到**\_\_\_\_**](https://juejin.cn/post/7026941253845516324)

进阶：更推荐看此仓库源码[vue-fabric-editor](https://github.com/ikuaitu/vue-fabric-editor)

## 基础设置

<fabric-basic></fabric-basic>

::: details 源代码

  ::: code-group

  <<< @/assets/demos/fabric/demos/fabric-basic.vue [基础配置]

  <<< @/assets/demos/fabric/handles/zoom.js

  <<< @/assets/demos/fabric/handles/translate.js

  <<< @/assets/demos/fabric/canvas.vue

  :::

## 在画布中进行框选

<select-rect></select-rect>

<script setup >
import fabricBasic from '../../assets/demos/fabric/demos/fabric-basic.vue'
import SelectRect from '../../assets/demos/fabric/demos/select-rect.vue'
</script>
