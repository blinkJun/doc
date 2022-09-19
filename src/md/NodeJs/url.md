# `url` 模块（内置）

对 `url` 进行相关处理

## `api`

### `parse`方法

对 `url` 进行格式化

```js
const url = require('url');
const link = '/api/list?id=1#hash';
const formatUrl = url.parse(link);
console.log(formatUrl);

// {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: '#hash',
//   search: '?id=1',
//   query: 'id=1',
//   pathname: '/api/list',
//   path: '/api/list?id=1',
//   href: '/api/list?id=1#hash'
// }

// 格式化 query 查询参数
const formatUrlQuery = url.parse(link, true);

console.log(formatUrlQuery);

// {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: '#hash',
//   search: '?id=1',
//   query: [Object: null prototype] { id: '1' },
//   pathname: '/api/list',
//   path: '/api/list?id=1',
//   href: '/api/list?id=1#hash'
// }
```

### `format`方法

将`Url`对象格式化为链接

```js
const url = require('url');
const urlObject = {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: '#hash',
  search: '?id=1',
  query: { id: '1' },
  pathname: '/api/list',
  path: '/api/list?id=1',
  href: '/api/list?id=1#hash',
};
const link = url.format(urlObject);

console.log(link);

// /api/list?id=1#hash
```

## `URL` 全局对象

新版 `url` 处理对象

```js
const absolutePath = '/api/list?id=1#hash';
const base = 'http://192.168.1.15:8080';

// 第一个参数是完整链接时，第二个参数可忽略
const urlObject = new URL(absolutePath, base);

console.log(urlObject);
// {
//   href: 'http://192.168.1.15:8080/api/list?id=1#hash',
//   origin: 'http://192.168.1.15:8080',
//   protocol: 'http:',
//   username: '',
//   password: '',
//   host: '192.168.1.15:8080',
//   hostname: '192.168.1.15',
//   port: '8080',
//   pathname: '/api/list',
//   search: '?id=1',
//   searchParams: URLSearchParams { 'id' => '1' },
//   hash: '#hash'
// }
```

操作查询参数:[`URLSearchParams`](https://nodejs.org/api/url.html#class-urlsearchparams)

- `set` : 设置新值
- `toString` : 格式化为字符串
  ...

## `querystring` 内置模块

专门用于处理查询字符串的模块

```js
const qs = require('querystring');
const query = 'name=jun&age=18';

const queryObj = qs.parse(query);

console.log(queryObj);
//  { name: 'jun', age: '18' }

const originQuery = qs.stringify(queryObj);
// name=jun&age=18
```
