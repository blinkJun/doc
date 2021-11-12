## `HTTP`
`HTTP`是一种不保存状态的应用层协议，用于客户端和服务端之间的通信，通过请求和响应的交换达成通信。

### 常用请求方法
- `get`：获取资源
- `post`：添加资源
- `put`：更新资源
- `delete`：删除资源
- `options`：询问支持的方法

#### `GET` 和 `POST` 的主要区别
1. 数据存放位置不同：`GET`参数通过URL传递，`POST`放在`Request body`中
2. 会不会被浏览器记录：`GET`请求参数会被完整保留在浏览器历史记录里，而`POST`中的参数不会被保留。
3. 支持的编码类型：`GET`请求中有非 `ASCII` 字符，会在请求之前进行转码，`post`数据放在 `request body` 中，可以支持非ASCII字符
4. 安全性：`get`数据放在url中，会被浏览器记录，相对`post`安全性较差。

### 状态码
- 1xx：信息性状态码，请求正在处理中
- 2xx：成功状态码，请求正常处理完毕
- 3xx：重定向状态码，需要进行进一步操作
- 4xx：客户端错误状态码，服务器无法处理请求
- 5xx：服务端错误状态码，服务器处理请求出错

#### 代表性的14个状态码
- 200：请求已经正常处理
- 204：请求正常处理，但不会返回响应主体，head请求
- 206：请求正常处理，返回指定的响应主体，请求头中设置- content-range的请求
- 301：永久重定向，客户端应该按location提示的字段重新保存新- uri
- 302,307：临时重定向，不会要求客户端保存临时的uri
- 303：临时重定向，希望客户端使用get请求获取重定向的资源
- 304：资源没有改变，可以使用缓存在客户端中的资源。在请求中携- 附带条件的字段时
- 400：请求报文语法错误
- 401：发送的请求需要通过http认证
- 403：请求资源的访问被拒绝，访问权限出现了问题
- 404：在服务器没有找到请求的资源
- 500：服务器在处理请求时出错了
- 503：服务器正在负载或者停机维护，无法处理请求，可Retry-after字段返回具体维护需要的时间

### 首部字段
包含客户端和服务器处理请求和响应所需要的信息

#### 通用首部字段（常用）
- `Cache-Control`：操作缓存的工作机制
    - public
    - private
    - no-cache
    - no-store
    - s-maxage=1
    - max-age=60
    - min-fresh=60
    - max-stale=60
    - only-if-cached
    - must-revalidate
    - proxy-revalidate
    - no-trasform
- `Connection：删除不再转发的首部字段，管理持久连接`
    - date：删除首部中date字段
    - keep-alive：保持持久连接
    - close：断开持久连接
- `Date`：表明创建HTTP报文的日期和时间
- `Transfer-Encoding`：规定报文传输时使用的编码方式
- `Upgrade`：检测某些协议可否使用更高的版本进行通信
- `Via`：追踪客户端和服务端之间的请求和响应的传输路径
- `Warning`：警告内容

#### 请求首部字段（常用）
- Accept：客户端能够处理的媒体类型和优先级
- Accept-Charset：客户端支持的字符集和优先级
- Accept-Encoding：客户端支持的内容编码和优先级
- Accept-Language：客户端能够处理的自然语言集和优先级
- `Authorization`：认证信息
- Expect：期望服务器进行某些行为
- From：显示用户的电子邮箱地址
- Host：请求的资源所处的主机名和端口号
- If-Match，If-Modified-Since，If-None-Match，If-Range，- If-Unmodified-Since：条件请求
- Max-Forwards：指定可经过的最大服务器数量
- Proxy-Authorization：客户端与代理服务器的认证
- Range：请求部分资源
- Referer：发起请求的URI地址
- TE：类似Accept-Encoding
- User-Agent：用户代理

#### 响应首部字段（常用）
- Accept-Ranges：告知客户端服务器是否能处理范围请求，bytes||none
- Age：源服务器在多久之前创建了响应，若是代理，则指的是缓存后发起认- 证到认证完成的时间，单位为秒
- `Etag`：告知客户端资源的字符串唯一标识
- Location：将响应接收方引导至某个与请求URI位置不同的资源
- Proxy-Authenticate：把代理服务器要求的认证信息发送给客户端
- Retry-After：告知客户端应该多久之后再次发送请求，与503，3xx状态码- 配合使用
- Server：告知客户端当前服务器安装的服务器应用程序信息
- Vary：指定客户端必须包含此字段指定的请求头字段才可以使用缓存，否则- 需要重新从源服务器获取资源
- www-Authenticate：用于http访问认证

#### 实体首部字段：用于补充内容的更新时间等与实体相关的信息
- Allow：服务端所支持的HTTP请求方法
- Content-Encoding：告知客户端 服务端对报文主体所使用的内容编码方式
- Content-Language：告知客户端服务端主体所使用的自然语言
- Content-Length：实体主体部分的大小
- Content-Location：报文主体部分所对应的URI
- Content-MD5：内容主体进行MD5编码后的值，客户端用相同的算法进行比较
- Content-Range：范围请求
- Content-Type：主体对象的媒体类型
- Expires：资源的过期时间
- `Last-Modified`：资源最终修改时间

#### 用于保存状态的 `Cookie` 和 `Set-Cookie` 首部字段
- `Set-Cookie`：服务端用于管理客户端 `cookie` 状态
    - expires：有效期
    - path：限制指定cookie发送范围的文件目录
    - domain：指定值结尾匹配的域名可发送cookie
    - secure：只在https时发送连接
    - httpOnly：js无法获取cookie

比如：`BDRCVFR[feWj1Vr5u3D]=mk3SLVN4HKm; path=/; domain=.baidu.com`

- `Cookie`：告知服务器，客户端`cookie`的值
