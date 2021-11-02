# `pm2` 进程守护

## 特点：
- 进程守护：稳定
- 多进程：高效
- 日志记录 ：问题可追溯

## 常用命令：
- `pm2 start index.js`：启动一个js进程
- `pm2 restart <id/name>`：重启一个进程
- `pm2 reload`：逐个重启进程
- `pm2 list`：查看进程列表
- `pm2 logs <id/name>`：查看进程输出的日志
- `pm2 stop <id/name>`：停止进程
- `pm2 delete <id/name>`：删除进程
- `pm2 monit`：性能监控
- `pm2 startup`:生成pm2-root开机自启动脚本，设置pm2-root为服务
- `pm2 save`:将当前运行的项目保存，pm2-root会自动读取启动

## 基本配置
```javascript
const os = require('os')
const cpuCoreLength = os.cpus().length // CPU 几核

module.exports = {
  apps:{
    name:'your-server-name',
    // 启动文件
    script:'bin/www',
    // 是否监控文件，修改文件时，自动重启
    watch:false,
    ignore_watch:['node_modules','__test__','logs'],
    // 开启的实例数量，测试环境开启一个即可
    instances:cpuCoreLength,
    // 输出错误日志位置
    error_file:'./logs/err.log',
    out_file:'./logs/out.log',
    // 日志时间格式化，Z表示使用当前时区的时间格式
    log_date_format:'YYYY-MM-DD HH:mm:ss Z',
    // 多个实例合并日志
    combile_logs:true,
    // 内存占用超过300M时重启
    max_memory_restart:'300M'
  }
}
```

## 基本使用
1. 安装`pm2`:`npm i pm2 -g`
2. 配置一个`pm2.config.js`文件存放在`bin`目录
3. 在`package.json`中配置`script`：`cross-env NODE_ENV=dev pm2 start /bin/pm2.config.js`
4. 启动`script`

## 日志拆分
一个日志文件过大时，不方便定位问题

使用 [`pm2-logrotate`](https://www.npmjs.com/package/pm2-logrotate)
安装：`pm2 install pm2-logrotate -g`，运行`pm2 list`即可看到`pm2-logrotate`的进程

```bash
# 默认配置如下
pm2 set pm2-logrotate:max_size 10M #日志文件最大10m
pm2 set pm2-logrotate:retain 30 #保留30个文件 多了自动删除
pm2 set pm2-logrotate:compress false #gzip
pm2 set pm2-logrotate:dateFormat YYYY-MM-DD_HH-mm-ss
pm2 set pm2-logrotate:workerInterval 30 #单位 s，日志检查的时间间隔
pm2 set pm2-logrotate:rotateInterval 0 0 * * * #定时规则
pm2 set pm2-logrotate:rotateModule true # 分割pm2模块的日志
```