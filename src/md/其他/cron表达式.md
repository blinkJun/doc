# `Cron`表达式
`Cron`表达式是一个字符串，字符串以5或6个空格隔开，分为6或7个域，每一个域代表一个含义，`Cron`有如下两种语法格式：
- `Seconds` `Minutes` `Hours` `DayofMonth` `Month` `DayofWeek` `Year`
- `Seconds` `Minutes` `Hours` `DayofMonth` `Month` `DayofWeek`
```
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)
```

## 结构
`corn`从左到右（用空格隔开）：秒 分 小时 月份中的日期 月份 星期中的日期 年份

## 各个字段的含义
| 字段 | 允许值 | 允许的特殊字符 |
|  ----  | ----  | ---- |
| 秒（Seconds）|	0~59的整数	| , - * /  四个字符 |
| 分（Minutes）|	0~59的整数	| , - * /  四个字符 |
| 小时（Hours）|	0~23的整数	| , - * /  四个字符 |
| 日期（DayofMonth）|	1~31的整数（但是你需要考虑你月的天数）| ,- * ? / L W C  八个字符 |
| 月份（Month）|	1~12的整数或者 JAN-DEC |	, - * /  四个字符 |
| 星期（DayofWeek）|	1~7的整数或者 SUN-SAT （1=SUN）|	, - * ? / L C #   八个字符 |
| 年(可选，留空)（Year）|	1970~2099	| , - * /  四个字符 |

注意事项：

每一个域都使用数字，但还可以出现如下特殊字符，它们的含义是：

- `*`：表示匹配该域的任意值。假如在Minutes域使用`*`, 即表示每分钟都会触发事件。

- `?`：只能用在DayofMonth和DayofWeek两个域。它也匹配域的任意值，但实际不会。因为DayofMonth和DayofWeek会相互影响。例如想在每月的20日触发调度，不管20日到底是星期几，则只能使用如下写法： `13 13 15 20 * ?`, 其中最后一位只能用`?`，而不能使用`*`，如果使用`*`表示不管星期几都会触发，实际上并不是这样。

- `-`：表示范围。例如在Minutes域使用`5-20`，表示从5分到20分钟每分钟触发一次 

- `/`：表示起始时间开始触发，然后每隔固定时间触发一次。例如在Minutes域使用`5/20`,则意味着5分钟触发一次，而25，45等分别触发一次. 

- `,`：表示列出枚举值。例如：在Minutes域使用`5,20`，则意味着在5和20分每分钟触发一次。 

- `L`：表示最后，只能出现在DayofWeek和DayofMonth域。如果在DayofWeek域使用`5L`,意味着在最后的一个星期四触发。 

- `W`:表示有效工作日(周一到周五),只能出现在DayofMonth域，系统将在离指定日期的最近的有效工作日触发事件。例如：在 DayofMonth使用`5W`，如果5日是星期六，则将在最近的工作日：星期五，即4日触发。如果5日是星期天，则在6日(周一)触发；如果5日在星期一到星期五中的一天，则就在5日触发。另外一点，W的最近寻找不会跨过月份 。

- `LW`:这两个字符可以连用，表示在某个月最后一个工作日，即最后一个星期五。 

- `#`:用于确定每个月第几个星期几，只能出现在DayofMonth域。例如在`4#2`，表示某月的第二个星期三。


 
**注：**

有些子表达式能包含一些范围或列表

例如：子表达式（天（星期））可以为 “`MON-FRI`”，“`MON，WED，FRI`”，“`MON-WED,SAT`”

- “`*`”字符代表所有可能的值
  因此，“`*`”在子表达式（月）里表示每个月的含义，“`*`”在子表达式（天（星期））表示星期的每一天

- “`/`”字符用来指定数值的增量 
  例如：在子表达式（分钟）里的“`0/15`”表示从第0分钟开始，每15分钟 
  在子表达式（分钟）里的“`3/20`”表示从第3分钟开始，每20分钟（它和“`3，23，43`”）的含义一样

- “`?`”字符仅被用于天（月）和天（星期）两个子表达式，表示不指定值 
  当2个子表达式其中之一被指定了值以后，为了避免冲突，需要将另一个子表达式的值设为“`?`”

- “`L`” 字符仅被用于天（月）和天（星期）两个子表达式，它是单词“`last`”的缩写 
  但是它在两个子表达式里的含义是不同的。 
    - 在天（月）子表达式中，“`L`”表示一个月的最后一天 
    - 在天（星期）自表达式中，“`L`”表示一个星期的最后一天，也就是`SAT`

  如果在“`L`”前有具体的内容，它就具有其他的含义了
  例如：“`6L`”表示这个月的倒数第６天，“`FRIL`”表示这个月的最一个星期五 
  注意：在使用“`L`”参数时，不要指定列表或范围，因为这会导致问题

## 在 `NodeJs`中使用
```javascript
  var CronJob = require('cron').CronJob;
  
  var doSomeThing = function(){
    console.log('start')
  }

  // 每天8点调用方法发送
  new CronJob('0 0 8 * * *', function() {
    doSomeThing()
  }, null, true, 'Asia/Shanghai');
  ```