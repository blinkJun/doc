# `Mysql`
[菜鸟教程](https://www.runoob.com/mysql/mysql-tutorial.html)

## 关系型与非关系型数据库

关系型如：`mysql`、`sqlserver`、`db2`、`oracle`，特点：

1. `sql`语句增删查改操作
2. 保持事务一致性，事务机制（回滚）

非关系型：`mongodb`、`Hbase`、`Redis`

1. `no sql` 、`not only sql`
2. 轻量、高效、自由

主要区别：
关系型数据库天然就是表格式的，数据储存在表的行和列中。表之间可以关联协作储存。非关系型通常储存在数据集中，如文档、键值对、图结构。

关系型表结构特点：

优点：
1. 易于维护：都使用格式一致的表结构
2. 使用方便：`SQL`语言通用，可用于复杂查询
3. 复杂操作： 支持`SQL`在一个或多个表中进行非常复杂的查询

缺点：
1. 读写性能较差，特别是海量数据的高效率读写
2. 固定的表结构缺少灵活性
3. 有高并发读写需求时，硬盘IO压力大

非关系型数据库特点：

优点：
1. 格式灵活：存储数据的格式可以是键值对、文档、图片
2. 速度快：可以使用硬盘或者随机储存器作为载体
3. 高扩展性
4. 成本低：部署简单

缺点：
1. 不提供`SQL`支持
2. 无事务处理
3. 数据结构相对复杂，复杂查询功能欠缺


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


## `SQL`语句

插入：
```sql
INSERT INTO `students`('id','name','score','gender') VALUES (null,'张三',100,1);
```

更新：
```sql
UPDATE `students` SET `name`='李四',`score`=80,`gender`=0 WHERE id=2;
```

删除：
```sql
DELETE FROM `students` WHERE id=2;
```

查询：
```sql
-- 查询所有的数据所有的字段
SELECT * FROM `students` WHERE 1;

-- 查所有的数据的某个字段
SELECT `id`,`name`,`score`,`gender` FROM `students` WHERE 1;

-- 条件查询
SELECT * FROM `students` WHERE score>=80;
SELECT * FROM `students` WHERE score>=80 AND gender=1;

-- 模糊查询 无 % 表示以k开头或者结尾
SELECT * FROM `students` WHERE `name` LIKE '%k%';

-- 排序 默认从小到大
SELECT `id`,`name`,`gender`,`score` FROM `students` ORDER BY `score`;
SELECT `id`,`name`,`gender`,`score` FROM `students` ORDER BY `score` DESC;

-- 分页查询
SELECT `id`,`name`,`gender`,`score` FROM `students` LIMIT 50 OFFSET 0;

-- 记录条数
SELECT COUNT(*) FROM `students`;
SELECT COUNT(*) `num` FROM `students`;

-- 多表查询，多表查询又称笛卡尔查询，查询结果是两个表的乘积，100*100 = 10000
SELECT * FROM `students`,`classes`;
-- 多表查询，使用 表名.列表 这样方式来引用列和设置别名，来避免结果集的列名重复问题
SELECT
  students.id sid,
  students.name,
  students.gender,
  students.score,
  classes.id cid,
  classes.name cname
FROM students,classes;


-- 联表查询
-- 确定一个主表作为结果，将其他表的行有选择性的连接到主表结果集上
SELECT s.id,s.name,s.class_id,c.name class_name,s.gender,s.score
FROM students s
INNER JOIN classes c
ON s.class_id=c.id
```

语句中的`' '`通常用来表示字符串字段的值，`` ` ` ``通常是用于避免字段名称和`SELECT`这种类似的关键字冲突。

联表查询类型：
- `INNER JOIN`：查询主表和其他表的交集，只获得匹配得上的数据
- `LEFT JOIN`：查询主表的所有行，其他表匹配不上时使用`null`填充
- `RIGHT JOIN`：与`LEFT JOIN` 相反
- `FULL JOIN`：查询主表、其他表的所有数据，匹配不上使用`null`填充


## 默认储存引擎
`mysql`将`MySAM`变成了`InnoDB`

1. `InnoDB`支持事务，`MySAM`不支持
2. `InnoDB`支持外键，`MySAM`不支持，将包含外键的`InnoDB`转换成`MySAM`将会失败

## 外键约束

- `CASCADE`：在父表上`update/delete`记录时，同步`update/delete`掉子表的匹配记录
- `SET NULL`：在父表上`update/delete`记录时，将子表上匹配记录的列设置为`null`（此列不能为`not null`）
- `NO ACTION`：如果子表中有匹配的记录，则不允许对父表对应候选键进行`update/delete`操作
- `RESTRICT`：同`NO ACTION`，都是立即检查外键约束


## 在`NodeJs`中使用`mysql`

使用[`sequelize`](./sequelize.md)管理数据库
