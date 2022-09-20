# `Mysql`

## 关系型与非关系型数据库

关系型如：`mysql`、`sqlserver`、`db2`、`oracle`，特点：

1. `sql`语句增删查改操作
2. 保持事务一致性，事务机制（回滚）

非关系型：`mongodb`、`Hbase`、`Redis`

1. no sql 、not only sql
2. 轻量、高效、自由

## 数据库概念

| sql           | mongodb       | 说明                                 |
| ------------- | ------------- | ------------------------------------ |
| `database`    | `database`    | 数据库                               |
| `table`       | `collection`  | 表/集合                              |
| `row`         | `document`    | 记录行/文档                          |
| `column`      | `field`       | 字段/域                              |
| `index`       | `index`       | 索引                                 |
| `table joins` |               | 表连接，`mongodb`不支持              |
| `primary key` | `primary key` | 主键，`mongodb`自动将`_id`设置为主键 |

## 和 `Mongodb`的区别

## 建表

### 字段设计原则

  1. **应该尽量使用可以正确存储数据的最小数据类型**。
    因为更小的数据类型占用更少的磁盘、内存、和CPU缓存。

  2. **简单就好**
    简单的数据类型操作可以减小CPU的使用率。例如整型比字符操作代价更低，因为字符集的排序规则比整型更加复杂。尽量选用`mysql`的内建类型来存储日期和时间（`data`,`time`,`datatime`）而不是用字符串。

  3. **尽量避免`NULL`**
    `null`是列的默认属性，通常情况下最好指定列`not null`，除非业务中需要存储`null`值。
    因为有`null`值的列使索引、索引统计和值比较都更复杂，如果在这列上建立索引，每个索引记录都需要一个额外的字节。

### 常用字段类型

- 整数类型：从大到小，无脑选`int`
  - `BIGINT`
  - `int`
  - `mediumint`
  - `smallint`
  - `tinyint`
- 实数类型：高精度选`DECIMAL`，其他选`float`
  - `FLOAT`
  - `DOUBLE`
  - `DECIMAL`
- 字符串类型：固定长度且较小，选`char`，其他选`varchar`
  - `CHAR`
  - `VARCHAR`
  - `text`
  - `blob`
- 日期类型：可用`int`（需要转换），`tamstamp`=>`datetime`
  - `timestamp`
  - `datetime`

### `pk`主键：不重复，可自增
