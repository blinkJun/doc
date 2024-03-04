// 百度坐标
const bdPoint = [108.34171638707808, 22.818581259540537];
// 转换为 GCJ02 坐标
export const GCJ02Point = gcoord.transform(
  bdPoint, // 经纬度坐标
  gcoord.BD09, // 当前坐标系
  gcoord.GCJ02 // 目标坐标系
);
// 创建 GCJ02 地理坐标系，
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

export default () => {
  const onlineUrl =
    'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}';
  const offlineUrl = 'http://111.12.91.15:28802/map/amap' + '/{z}/{x}/{y}.png'; // 设置本地离线瓦片所在路径
  return new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.XYZ({
          url: onlineUrl,
        }),
      }),
    ],
    view: new ol.View({
      center: ol.proj.transform(GCJ02Point, 'GCJ:02', 'EPSG:3857'),
      zoom: 10, // 缩放
    }),
    controls: ol.control.defaults.defaults({
      zoom: true,
      rotate: true,
      attribution: true,
    }),
  });
};
