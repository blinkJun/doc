# `Date` 和 时区
在 `node` 环境中 `new Date()` 获取的时间是世界标准时间，和当前时区的时间不一样

- 获取当前时区的时间：
  - `(new Date()).toString()`
  - `date-fns`模块的`format`

- 在`docker`中没有时区，需要设置时区