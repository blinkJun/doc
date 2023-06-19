# [`openlayers`](https://openlayers.org/en/latest/apidoc/)

是一个用于开发`WebGIS`客户端的`JavaScript`包，它是一个开源的项目，其设计之意是为互联网客户端提供强大的地图展示功能，包括地图数据显示与相关操作，并具有灵活的扩展机制。

## 架构

![`openlayers`架构](../../assets//images/openlayers-org.png)

- `Map`：整个地图的容器
- `Layer`：地图图层
- `Source`：对应图层的数据源
- `Style`：矢量图层的样式
- `View`：地图表现相关的视图

## 安装和使用

```bash
npm i ol --save
```

## `Map`和`View`

`map`是`ol`总的核心组件，初始化地图(`map`)时，至少需要一个可视化区域(`view`)、一个或多个图层(`layer`)、一个地图加载的目标`html`元素(`target`)

```js
import Map from 'ol/map';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import Tile from 'ol/layer/Tile';

const map = new Map({
  target: document.getElementById('map'),
  layers: [
    new Tile({
      source: new OSM(),
    }),
  ],
  view: new View({
    zoom: 4,
    center: [108.358224, 22.904248],
  }),
});
```
