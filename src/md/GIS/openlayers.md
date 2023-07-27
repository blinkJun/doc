# [`openlayers`](https://openlayers.org/en/latest/apidoc/)

是一个用于开发`WebGIS`客户端的`JavaScript`包，它是一个开源的项目，其设计之意是为互联网客户端提供强大的地图展示功能，包括地图数据显示与相关操作，并具有灵活的扩展机制。

## 架构

![`openlayers`架构](../../assets//images/openlayers-org.png)

- `Map`：整个地图的容器
- `Layer`：地图图层
- `Source`：对应图层的数据源
- `Style`：矢量图层的样式
- `View`：地图表现相关的视图

## 坐标系

库默认使用`EPSG:4326`地理坐标系，`EPSG:3857`投影坐标系展示地图。

在创建视图时，若使用`EPSG:4326`坐标系覆盖默认的`EPSG:3857`投影，用于展示地图，在这种情况下，`openLayers`会将经纬度坐标直接映射到屏幕坐标系，而不会进行任何投影转换。

> 使用经纬度投影时，经度的范围为`-180`度至`+180`度，纬度的范围为`-90`度至`+90`度。较小纬度的区域（如赤道附近）会在屏幕上呈现较大的比例因子，而较高纬度的区域（如极地附近）会呈现较小的比例因子。

> 需要注意的是，使用经纬度投影时，地图上的直线不一定是直的，因为经纬度本身是曲线坐标系。如果需要在地图上绘制直线，或者进行测量和几何计算等操作，可能需要先将经纬度坐标转换为其他投影坐标系（如投影坐标系，如`Web`墨卡托投影 `EPSG:3857`），然后再进行相应的操作。

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

## 坐标系注册和转换

若需要使用其他坐标系，可以进行注册，如下注册了一个`GCJ02`地理坐标系并添加到了库中：

```js
const GCJ02 = new ol.proj.Projection({
  // 坐标系代码
  code: 'GCJ:02',
  // 坐标系范围
  extent: [-180, -90, 180, 90],
  // 坐标系分辨率使用的单位
  units: 'degrees',
  // 用于确定坐标系的坐标轴方向
  axisOrientation: 'enu',
});
// 添加到openlayers支持的坐标系
ol.proj.addProjection(GCJ02);
```

若该坐标系也使用`EPSG:3857`投影，则需要配置他们直接的转换关系：

```js
// 定义GCJ02地理坐标系和web墨卡托投影坐标系之间的转换规则
ol.proj.addCoordinateTransforms(
  'GCJ:02',
  'EPSG:3857',
  function (coordinate) {
    // GCJ02火星坐标系转换为投影坐标系是使用经纬度直接转换，只有当前地理坐标系为WGS84时，经纬度可以被直接转换为EPSG:3857。
    // 若当前坐标系使用 GCJ02，算法会将GCJ02先转为WGS84，再转为EPSG:3857，所以这里将GCJ02视为WGS84进行直接转换
    return gcoord.transform(
      coordinate, // 经纬度坐标
      gcoord.WGS84, // 当前坐标系
      gcoord.EPSG3857 // 目标坐标系
    );
  },
  function (coordinate) {
    return gcoord.transform(
      coordinate, // 投影坐标
      gcoord.EPSG3857, // 当前坐标系
      gcoord.WGS84 // 目标坐标系
    );
  }
);
```

> [转换工具库：`gcoord`](./%E5%9C%B0%E5%9B%BE%E6%A6%82%E5%BF%B5.md#坐标系之间的转换)

之后可以使用`gcoord`工具转换，也可以使用`openlayers`自带的方法转换：

```js
// 将经纬度坐标从 EPSG:4326 转换为 EPSG:3857 投影坐标系坐标，也可以反向转换
ol.proj.transform([lon, lat], 'EPSG:4326', 'EPSG:3857');

// 将经纬度视为 EPSG:4326 转换到指定坐标系
// 默认转换至 EPSG:3857
ol.proj.fromLonLat([lon, lat]);
// 指定转换至 EPSG:3857
ol.proj.fromLonLat([lon, lat], 'EPSG:3857');

// 将坐标信息转换为经纬度，固定转换至 EPSG:4326
// 默认坐标系 EPSG:3857
ol.proj.toLonLat([lon, lat]);
// 指定坐标系
ol.proj.toLonLat([lon, lat], 'EPSG:3857');
```

## `demo`

以下`demo`均为百度地图的`demo`，初始化地图的代码`init-bmap.js`如下：

::: details
<<< @/assets/html/openlayers/lib/init-bmap.js
:::

## `demo`-点

::: details
<<< @/assets/html/openlayers/点.html
:::

## `demo`-多边形样式绘制和编辑删除

::: details
<<< @/assets/html/openlayers/多边形.html
:::

## `demo`-圆形样式绘制和编辑删除

::: details
<<< @/assets/html/openlayers/圆形.html
:::

## `demo`-geojson

::: details
<<< @/assets/html/openlayers/绘制和查询行政区域.html
:::

## `demo`-窗口内地图范围坐标

::: details
<<< @/assets/html/openlayers/获取窗口内地图范围坐标.html
:::

## `demo`-比例尺功能、平移缩放控件

::: details
<<< @/assets/html/openlayers/比例尺功能、平移缩放控件.html
:::

## `demo`-图标和动画

::: details
<<< @/assets/html/openlayers/图标和动画.html
:::

## `demo`-自定义覆盖物，显示`html`结构

::: details
<<< @/assets/html/openlayers/自定义覆盖物.html
:::
