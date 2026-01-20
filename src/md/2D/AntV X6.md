# [AntV X6](https://x6.antv.antgroup.com/)

`x6` 是一个基于`html`的流程图编辑引擎，类似的图编辑引擎还有：[`GoJS`](https://gojs.net/latest/)、[`D3`](https://d3js.org/)，如果你打算开发一个流程图编辑器，基于文档更易阅读的原因，推荐使用`x6`。

它适合用来开发`DAG`图、`ER`图、流程图、血缘图等，这些图通常由多个节点和线连接在一起，详细的功能请查看官方文档。

下面简单介绍一下这几种流程图的特点：

## `DAG`：`Directed Acyclic Graph`（有向无环图）

有向无环图，它有下面几个特点：

- 两个节点的连接是有方向的，而不是连接在一起而已
- 它是无环的，即无论子节点多深，它的子节点不会连接回到中间任何一个节点

基于这两个特点，`DAG`图就能很好的表示节点之间的依赖（因果）关系，无环的特性也避免了循环依赖的出现，所以常用于下面这些领域：

1. 任务调度与依赖关系（如项目管理、工作流引擎）。
2. 版本控制与提交历史（如 Git）。
3. 依赖解析与包管理（如 npm、pip）。
4. 网络与路由（如网络拓扑、分布式系统）。

通常一个标准的`DAG`图是支持拓扑排序的：

拓扑排序：通常用来解决`DAG`图中的依赖关系问题，确定节点的顺序

假设现在有一系列课程，它们存在一定的依赖关系，通过拓扑排序可以计算得出课程排课顺序。

拓扑排序可以通过这两种方法实现：

1. Kahn 算法（基于入度）
2. DFS 算法（基于深度优先搜索）

## `ER`：`Entity-Relationship Diagram`（实体关系图）

`ER`图中指定了三要素：

1. 实体（Entity）：

- 一个独立存在的对象如学生、课程、员工等
- 在图中，使用**矩形**表示

2. 属性（Attribute）：

- 属性是实体的特征或者描述如：学号、姓名、年龄
- 在图中，使用**椭圆形**表示，与实体用线连接

3. 关系（Relationship）：

- 用于描述实体之间的关系如学生和课程的关系是选修
- 在图中，使用**菱形**表示，与实体使用线连接，在线上标明关系的类型：
  - 1:1 （两个实体之间一对一关系）
  - 1:n （两个实体之间一对多关系）
  - m:n （两个实体之间多对多关系）

`ER`图通常用于：

1. 设计数据库：帮助开发者理清数据结构、明确实体、属性和关系；
2. 沟通工具：便于开发者和业务人员之间的沟通；
3. 文档：便于后续维护和扩展；
4. 优化：发现设计不合理的设计

## 流程图

流程图和`DAG`图的主要区别是它是可以有环路的，它通常用来表示为了一定的目标而设计的一系列**流程**和**逻辑**关系，在图中表示出具体的步骤。对图形的形状没有具体的要求。

## 血缘图

血缘图通常用来表示数据的来源、流转和依赖关系，其目的是提供数据的透明性和可追溯性，应用于数据治理、溯源和分析。它的表现形式和流程图差别不大。

## `AntV X6`有向图架构

### 自定义节点

1. 设计一个盒子节点，用于加载不同类型的子节点和所有节点的相似操作逻辑，以 vue 为例：

```vue
<template>
  <div class="control-box">
    <div class="cell-layout">
      <component :is="component" :cell="cell"></component>
    </div>
  </div>
</template>
<script>
export default {
  name: 'control-box',
  props: ['component', 'cell'],
};
</script>
```

2. 设计一个方法，可以通过`extend`方法挂载组件到`DOM`，得到自定义组件`DOM`

```js
import cellBox from './box.vue';
const nodeConfigComponentMap = importComponentFromDir(
  require.context('./nodes', false, /\w+\.vue$/)
);
const mappingNodeType = [];
const getNodeHTML = (shape, cell) => {
  const config = mappingNodeType.find((item) => item.nodeName === shape);
  const component = nodeConfigComponentMap[config.nodeEl];
  const NodeConnectToolInstance = Vue.extend(cellBox);
  const NodeVM = new NodeConnectToolInstance({
    propsData: {
      component: component,
      cell: cell,
    },
  });
  NodeVM.$mount();
  return NodeVM.$el;
};
```

3. 注册自定义元素，实例化元素的时候生成对应自定义组件：

```js
import { Graph, Shape, Markup, EdgeView } from '@antv/x6';
// 自定义节点-开始节点
Shape.HTML.register({
  shape: 'startNode',
  width: 200,
  height: 100,
  minWidth: 110,
  minHeight: 65,
  effect: ['data'],
  html(cell) {
    return getNodeHTML('startNode', cell);
  },
});
```

### 自定义边标签

1. 与自定义节点类似，可通过`onEdgeLabelRendered`方法将自定义节点插入至标签元素中：

```js
new Graph({
  onEdgeLabelRendered: (args) => {
    const { selectors, edge } = args;
    const content = selectors.foContent;
    const NodeInstance = Vue.extend(EdgeLabel);
    const NodeVM = new NodeInstance({
      propsData: {
        edge: edge,
      },
    });
    NodeVM.$mount();
    content.appendChild(NodeVM.$el);
  },
});
```

2. 插入元素内，还需要对标签大小进行适配、更新标签数据时还需要调用`edge.setLabels([Date.now()])`方法触发边标签的重载

### 自定义路由

一条边是由一系列的点构成的，而通过算法将两个节点之间的这些点生成的函数叫做路由

库内提供了一系列的路由，通常情况下是足够使用了，但是有一种情况需要自定义，当两个元素有多条边连接时，可能会出现重合的情况。以这种情况为例：

1. 首先获得默认路由下的点数据，通过计算获得两个点之间的中心点
2. 通过两个节点之间的直线，计算得到垂直方向上的偏移点
3. 将偏移点插入点数据中，即可得到新的一条不重合的边的点数据

### 大量节点数据下的性能问题

当通过框选，框选大量的节点和边，进行拖拽移动的时候，有向图的性能会大幅度下降、出现卡顿。这是因为拖拽时，有向图会不断的删除节点边框和连接边，并生成新位置下的节点选中边框和连接边，这样的大量删除和生成非常消耗性能，我们可以通过重写渲染方法来实现性能的优化：

1. 在`AntV X6`的源代码中找到`graph.renderer.schedule.requestViewUpdate`视图更新代码，分析该代码中的处理逻辑
2. 在更新处理函数前判断边的连接数量、节点数量，低于指定数量按原逻辑处理，高于指定数量进入防抖处理函数，只在拖拽结束时再更新视图

### 注意事项：

1. 有向图每次保存应该保存完整的结构化数据
2. 有向图保存最好由用户主动保存，自动保存可能会使用户产生依赖忘记保存
3. 有向图与图外表单交互，应该由有向图组件、模块统一处理，否则数据容易出现错乱
4. 自定义节点形状上下左右四条边的中点应该被图形覆盖
