# `GraphQL` 和 `Restful API`

## 什么是`GraphQL`
GraphQL - Graph Query language 图查询语言，意思是擅长处理`图`数据结构的查询，即多个数据对象，各个之间还有关联关系。
- `scheme`：数据规范
- `rootValue`：数据源
根据数据规范，前端可以查询需要的数据源内容，更加灵活获取数据。

## 什么是`Restful API`
它是指通过`get`(获取)、`post`(新增)、`put`(更新)、`delete`(删除)等请求方法来设计的一种`API`设计风格。通常一个请求`uri`对应一个资源

- 错误的：
  - `/getOrders`
  - `listCitys`
  - `/getWeathers?city=深圳`
- 正确的：
  - `GET /orders/1` ：返回订单编号为1的订单
  - `POST /orders` ：增加一个订单
  - `Delete /orders/1` ：删除一个订单编号为1的订单
  - `PUT /orders/1` :更新订单编号为1的订单