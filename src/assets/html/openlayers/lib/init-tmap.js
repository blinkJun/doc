// 百度坐标
const bdPoint = [108.34171638707808, 22.818581259540537];
// 转换为 EPSG4490 坐标
export const EPSG4490Point = gcoord.transform(
  bdPoint, // 经纬度坐标
  gcoord.BD09, // 当前坐标系
  gcoord.WGS84 // 目标坐标系
);

// 创建天地图坐标系
const proj4490 = new ol.proj.Projection({
  code: 'EPSG:4490',
  units: 'degrees',
  axisOrientation: 'neu',
  // 坐标系范围
  extent: [-180, -90, 180, 90],
});
ol.proj.addProjection(proj4490);
// 定义EPSG:4490地理坐标系和web墨卡托投影坐标系之间的转换规则
ol.proj.addCoordinateTransforms(
  'EPSG:4490',
  'EPSG:3857',
  function (coordinate) {
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

// 首先设置好WMTS瓦片地图的瓦片坐标系
export const EPSG3857 = ol.proj.get('EPSG:3857'); // 获取web墨卡托投影坐标系
const EPSG3857Extent = EPSG3857.getExtent(); // web墨卡托投影坐标系的四周范围
const width = ol.extent.getWidth(EPSG3857Extent); // web墨卡托投影坐标系的水平宽度，单位米
const resolutions = []; // 瓦片地图分辨率
const matrixIds = [];
for (let z = 1; z < 18; z++) {
  resolutions[z] = width / (256 * Math.pow(2, z));
  matrixIds[z] = z;
}
export const wmtsTileGrid = new ol.tilegrid.WMTS({
  origin: ol.extent.getTopLeft(EPSG3857Extent), // 原点（左上角）
  resolutions: resolutions, // 瓦片分辨率
  matrixIds: matrixIds, // 矩阵ID，就是瓦片坐标系z维度各个层级的标识
});

// WMTS数据源与地图
const wmtsSource = new ol.source.WMTS({
  url: 'http://t0.tianditu.gov.cn/vec_w/wmts?tk=9dd6d5022dc0ec7b98fcd19ce218c62e', // 天地图key去官网很容易申请
  layer: 'vec', // 图层名
  version: '1.0.0', // WMTS版本
  // 投影坐标系矩阵集，一定要和WMTS capabilities文档中一致，否则会加载失败
  matrixSet: 'w',
  format: 'tiles', // 图片格式
  projection: EPSG3857, // 投影坐标系
  requestEncoding: 'KVP', // 请求的编码方式，默认就是'KVP'
  // 在WMTS capabilities文档中对应的样式名，一定要写，否则会加载失败
  style: 'default',
  tileGrid: wmtsTileGrid, // 投影坐标系
});

const wmtsLayer = new ol.layer.Tile({
  source: wmtsSource,
});
export default () => {
  return new ol.Map({
    target: 'map',
    layers: [wmtsLayer],
    view: new ol.View({
      center: ol.proj.transform(EPSG4490Point, 'EPSG:4490', 'EPSG:3857'),
      zoom: 10, // 缩放
    }),
    controls: ol.control.defaults.defaults({
      zoom: true,
      rotate: true,
      attribution: true,
    }),
  });
};
