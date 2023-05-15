# `HTML`编码风格

## 文档描述

1. **强制** 首行固定使用`<!DOCTYPE html>`文档声明标识为`html5`。
2. **强制** 保证 `favicon` 可访问。

   在未指定 `favicon` 时，大多数浏览器会请求 `Web Server` 根目录下的 `favicon.ico` 。为了保证 `favicon` 可访问，避免 `404`，必须遵循以下两种方法之一：

   1. 在 `Web Server` 根目录放置 `favicon.ico` 文件。
   2. 使用 `link` 指定 `favicon`。

   示例：`<link rel="shortcut icon" href="path/to/favicon.ico">`

3. **强制** 页面必须包含`title`标签
4. **强制** 在`head`标签直接子元素固定使用`<meta charset="UTF-8" />`指定编码

   ```html
   <html>
     <head>
       <meta charset="UTF-8" />
       <title>首页</title>
       ......
     </head>
     <body>
       ......
     </body>
   </html>
   ```

5. **强制** 引入 `CSS` 时必须指明 `rel="stylesheet"`

   ```html
   <link rel="stylesheet" href="page.css" />
   ```

6. **强制** 在 `head` 中引入页面需要的所有 `CSS` 资源

   优先引入`CSS`可以让浏览器等待样式加载完毕再渲染页面，而在`dom`树之后引入`CSS`会导致浏览器先渲染`dom`树，使页面“裸奔”，加载`CSS`后会重新渲染，消耗性能

7. **建议** 引入 `CSS` 和 `JavaScript` 时无须指明 `type` 属性。`text/css` 和 `text/javascript` 是 `type` 的默认值。

8. **建议** `JavaScript`会阻塞页面渲染，应当放在页面末尾，或采用异步加载。

9. **建议** 启用`IE Edge`模式让浏览器使用`ie`最新版本

   ```html
   <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
   ```

10. **建议** 在 `html` 标签上设置正确的 `lang` 属性

    有助于提高页面的可访问性，如：让语音合成工具确定其所应该采用的发音，令翻译工具确定其翻译语言等。

    ```html
    <html lang="zh-CN"></html>
    ```

## 标签和属性

1. **强制** 所有标签和属性使用小写

   ```html
   <!-- good -->
   <table cellspacing="0">
     ...
   </table>

   <!-- bad -->
   <TABLE cellSpacing="0">
     ...
   </TABLE>
   ```

2. **强制** 标签属性必须使用双引号包裹

   ```html
   <!-- good -->
   <script src="esl.js"></script>

   <!-- bad -->
   <script src=esl.js></script>
   <script src='esl.js'></script>
   ```

3. **强制** 元素 id 必须保证页面唯一
4. **强制** 正确嵌套组合元素，如`ul`中应只放置`li`，不要放置`h2`这种标签。
5. **建议** `inline`元素不可包含`block`元素
6. **建议** `class`代表相应模块或部件的内容或功能，不以样式信息进行命名

   ```html
   <!-- good -->
   <div class="sidebar"></div>

   <!-- bad -->
   <div class="left"></div>
   ```

7. **建议** 为不好辨别的标签结构或模块结构增加注释
8. **建议** 使用语义化标签，常用标签：

   - `section` - 分割模块
   - `nav` - 导航
   - `header` - 头部
   - `footer` - 尾部
   - `p` - 段落
   - `h1`,`h2`,`h3`,`h4`,`h5`,`h6` - 层级标题
   - `strong`,`em` - 强调
   - `ins` - 插入
   - `del` - 删除
   - `abbr` - 缩写
   - `code` - 代码标识
   - `cite` - 引述来源作品的标题
   - `q` - 引用
   - `blockquote` - 一段或长篇引用
   - `ul` - 无序列表
   - `ol` - 有序列表
   - `dl`,`dt`,`dd` - 定义列表

9. **建议** 为含有多个子元素或具有深层结构的标签进行换行和相对父级缩进，过长的代码不容易阅读与维护，每行不得超过 `120` 个字符。

10. **建议** 使用样式或者一个标签可以实现的布局不要嵌套太多标签，尽量简洁

   ```html
   <!-- good -->
   <img class="avatar" src="image.png" />

   <!-- bad -->
   <span class="avatar">
     <img src="image.png" />
   </span>
   ```

11. **建议** 布尔类型的属性，可以不添加属性值

    ```html
    <input type="text" disabled />

    <input type="checkbox" value="1" checked />
    ```

12. **建议** 自定义属性使用`data-`为前缀

    ```html
    <ol data-ui-type="Select"></ol>
    ```

## 图片

1. **强制** 禁止 `img` 的 `src` 取值为空。延迟加载的图片也要增加默认的 `src`。
   浏览器在渲染过程中会把 `src` 属性中的空内容进行加载，直至加载失败，影响 `DOMContentLoaded` 与 `Loaded` 事件之间的资源准备过程，拉长了首屏渲染所用的时间

2. **建议** 有下载需求的图片采用 `img` 标签实现，无下载需求的图片采用 `CSS` 背景图实现。

   - 产品 `logo`、用户头像、用户产生的图片等有潜在下载需求的图片，以 `img` 形式实现，能方便用户下载。
   - 无下载需求的图片，比如：`icon`、背景、代码使用的图片等，尽可能采用 `CSS` 背景图实现。

3. **建议** 为具有含义的`img`标签添加`alt`属性

## 表单

1. **建议** 有文本标题的控件必须使用 `label` 标签将其与其标题相关联。

   有两种方式：

   1. 将控件置于 `label` 内。
   2. `label` 的 `for` 属性指向控件的 `id`。

   推荐使用第一种，减少不必要的 `id`。如果 `DOM` 结构不允许直接嵌套，则应使用第二种。

   ```html
   <label>
     <input type="checkbox" name="confirm" value="on" />
     我已确认上述条款
   </label>

   <label for="username">用户名：</label>
   <input type="textbox" name="username" id="username" />
   ```

2. **强制** 使用 `button` 元素时必须指明 `type` 属性值

   `button` 元素的默认 `type` 为 `submit，如果被置于` `form` 元素中，点击后将导致表单提交。为显示区分其作用方便理解，必须给出 `type` 属性。

   ```html
   <button type="submit">提交</button>

   <button type="button">取消</button>
   ```

3. **建议** 在针对移动设备开发的页面时，根据内容类型指定输入框的 `type` 属性。

   ```html
   <input type="date" />
   ```

## 多媒体

1. **建议** 当在现代浏览器中使用 `audio` 以及 `video` 标签来播放音频、视频时，应当注意格式。

   音频应尽可能覆盖到如下格式：

   - `MP3`
   - `WAV`
   - `Ogg`

   视频应尽可能覆盖到如下格式：

   - `MP4`
   - `WebM`
   - `Ogg`

2. **建议** 在支持 `HTML5` 的浏览器中优先使用 `audio` 和 `video` 标签来定义音视频元素。
3. **建议** 使用退化到插件的方式来对多浏览器进行支持。

   ```html
   <audio controls>
     <source src="audio.mp3" type="audio/mpeg" />
     <source src="audio.ogg" type="audio/ogg" />
     <object width="100" height="50" data="audio.mp3">
       <embed width="100" height="50" src="audio.swf" />
     </object>
   </audio>

   <video width="100" height="50" controls>
     <source src="video.mp4" type="video/mp4" />
     <source src="video.ogg" type="video/ogg" />
     <object width="100" height="50" data="video.mp4">
       <embed width="100" height="50" src="video.swf" />
     </object>
   </video>
   ```

4. **建议** 只在必要的时候开启音视频的自动播放
5. **建议** 在 `object` 标签内部提供指示浏览器不支持该标签的说明。
   ```html
   <object width="100" height="50" data="something.swf">
     DO NOT SUPPORT THIS TAG
   </object>
   ```
