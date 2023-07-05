/*定义百度地图分辨率与瓦片网格*/
const resolutions = [];
for (var i = 0; i <= 19; i++) {
  resolutions[i] = Math.pow(2, 18 - i);
}

// 创建百度地理坐标系，
const projBD09 = new ol.proj.Projection({
  // 坐标系代码
  code: 'BD:09',
  // 坐标系范围
  extent: [-180, -90, 180, 90],
  // 坐标系分辨率使用的单位
  units: 'degrees',
  // 用于确定坐标系的坐标轴方向
  axisOrientation: 'enu',
});
// 添加到openlayers支持的坐标系
ol.proj.addProjection(projBD09);
// 创建百度投影坐标系
const projBD09Meter = new ol.proj.Projection({
  // 坐标系代码
  code: 'BD:09-Meter',
  // 坐标系范围
  extent: [-20037726.37, -11708041.66, 20037726.37, 12474104.17],
  // 坐标系分辨率使用的单位
  units: 'm',
  // 用于确定坐标系的坐标轴方向
  axisOrientation: 'neu',
});
// 添加到openlayers支持的坐标系
ol.proj.addProjection(projBD09Meter);
// 定义百度投影坐标系和 BD:09 坐标系之间的转换规则
ol.proj.addCoordinateTransforms(
  'BD:09',
  'BD:09-Meter',
  function (coordinate) {
    return gcoord.transform(
      coordinate, // 经纬度坐标
      gcoord.BD09, // 当前坐标系
      gcoord.BD09Meter // 目标坐标系
    );
  },
  function (coordinate) {
    return gcoord.transform(
      coordinate, // 投影坐标
      gcoord.BD09Meter, // 当前坐标系
      gcoord.BD09 // 目标坐标系
    );
  }
);

/*加载百度地图离线瓦片不能用ol.source.XYZ，ol.source.XYZ针对谷歌地图（注意：是谷歌地图）而设计，而百度地图与谷歌地图使用了不同的投影、分辨率和瓦片网格。因此这里使用ol.source.TileImage来自行指定投影、分辨率、瓦片网格。*/
const tileGrid = new ol.tilegrid.TileGrid({
  origin: [0, 0],
  resolutions: resolutions,
});
// 创建百度坐标系切片资源
const bMapSources = new ol.source.TileImage({
  projection: 'BD:09-Meter',
  tileGrid: tileGrid,
  tileUrlFunction: function (tileCoord, pixelRatio, proj) {
    let z = tileCoord[0];
    let x = tileCoord[1];
    let y = -tileCoord[2] - 1;
    if (x < 0) x = 'M' + -x;
    if (y < 0) y = 'M' + -y;
    // return `http://111.12.91.15:28802/map/bmap/${z}/${x}/${y}.png`;
    return `https://maponline3.bdimg.com/tile/?qt=vtile&z=${z}&x=${x}&y=${y}&styles=pl&scaler=1&udt=20230616&from=jsapi3_0`;
  },
});
// 创建切片图层
const bdMapLayers = new ol.layer.Tile({
  source: bMapSources,
});
export default () => {
  const view = new ol.View({
    // 在百度地图jsapi中为了方便开发者，在底层将经纬度自动转换为墨卡托投影坐标，所以可以直接使用经纬度进行定位
    // 在使用openlayers的时候，需要手动对经纬度坐标进行转换，转换为百度的墨卡托投影坐标才能正确显示
    center: ol.proj.transform(
      [108.34171638707808, 22.818581259540537],
      'BD:09',
      'BD:09-Meter'
    ),
    zoom: 10, // 缩放
    maxZoom: 19,
    projection: 'BD:09-Meter',
    // 使用和百度切片资源设置的分辨率
    resolutions: bMapSources.getTileGrid().getResolutions(),
    // 设置缩放级别为整数
    constrainResolution: true,
    // 关闭无极缩放地图
    smoothResolutionConstraint: false,
  });
  return new ol.Map({
    target: 'map',
    layers: [bdMapLayers],
    view: view,
    controls: ol.control.defaults.defaults({
      zoom: true,
      rotate: true,
      attribution: true,
    }),
  });
};
