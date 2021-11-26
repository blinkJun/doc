# 在组件中使用 `echarts` 比较好的实践

## 1. 使用`mixins`混入通用方法

```js
// 引入echarts
import * as echarts from 'echarts'
// 引入主题并注册
import echartTheme from '@/assets/echarts-theme'
echarts.registerTheme('walden', echartTheme)
export default {
  data () {
    return {
      // 图表的相关配置
      chartConfig: {
        loading: false,
        resizeTimer: null,
        chart: null,
        name: 'chart-box'
      }
    }
  },
  methods:{
    // 传入图表的选项，更新此图表
    refreshChartAction (options) {
      const chartConfig = this.chartConfig
      // 是否缓存了图表
      if (!chartConfig.chart) {
        // 未缓存图表则初始化图表
        const chartDom = this.$refs[chartConfig.name]
        if (chartDom) {
          chartConfig.chart = echarts.init(chartDom, 'walden')
        }
      } else {
        // 缓存了就清除图表
        chartConfig.chart.clear()
      }
      // 重新设置选项
      if (chartConfig.chart) {
        chartConfig.chart.setOption(options)
      }
    },
    // 更新图表的大小
    resizeAllCharts () {
      this.chartConfig.chart && this.chartConfig.chart.resize()
    },
    // 在初始化页面时调用此方法监听浏览器窗口变化，同时更新图表大小
    readyResize () {
      const that = this
      const listenResize = function () {
        clearTimeout(that.chartConfig.resizeTimer)
        that.chartConfig.resizeTimer = setTimeout(() => {
          that.resizeAllCharts()
        }, 400)
      }
      window.addEventListener('resize', listenResize)
      this.$once('hook:beforeDestroy', function () {
        window.removeEventListener('resize', listenResize)
      })
    },
    // 初始化方法
    async initEcharts () {
      this.readyResize()
      setTimeout(() => {
        this.resizeAllCharts()
      }, 1500)
    }
  }
}
```

## 2. 在页面中初始化和配置选项

```js
import echartsMixin from './mixins/echarts'
export default {
  mixins:[echartsMixin],
  methods:{
    initData(){
      // 更新中
      this.chartConfig.loading = true
      // 获取图表配置
      const options = this.getOptions()
      // 自动初始化和刷新图表
      this.refreshChartAction(options)
      // 更新后
      this.chartConfig.loading = false
    },
    getOptions(){
      return {
        tooltip: {
          confine: true,
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: 'seriesName',
            type: 'pie',
            radius: '65%',
            center: ['50%', '50%'],
            data: [10,20],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  },
  mounted(){
    this.initEcharts()
    this.initData()
  }
}
```
