# `CSS`编码风格

## 选择器

1. **建议** 适当使用直接选择器`>`，避免匹配到深层子元素

    ```css
    /* bad */
    .content .title {
      font-size: 2rem;
    }

    /* good */
    content>.title {
      font-size: 2rem;
    }
    ```

2. **强制** 当一个 `rule` 包含多个 `selector` 时，每个选择器声明必须独占一行

    ```css
    /* good */
    .post,
    .page,
    .comment {
        line-height: 1.5;
    }

    /* bad */
    .post, .page, .comment {
        line-height: 1.5;
    }
    ```

3. **建议** 避免使用`id`选择器、`!important`声明

4. **强制** 属性选择器中的值和文本内容必须用双引号包围。

   不允许使用单引号，不允许不使用引号。

    ```css
    /* good */
    article[character="juliet"] {
        voice-family: "Vivien Leigh", victoria, female;
    }
    html[lang|="zh"] q:after {
        content: "”";
    }


    /* bad */
    article[character='juliet'] {
        voice-family: "Vivien Leigh", victoria, female;
    }
    html[lang|=zh] q:after {
        content: '”';
    }

    ```

5. **建议** 选择器的嵌套层级应不大于 `3` 级，位置靠后的限定条件应尽可能精确

    ```css
    /* good */
    #username input {}
    .comment .avatar {}

    /* bad */
    .page .header .login #username input {}
    .comment div * {}
    ```

## 属性

1. **建议** 尽量使用缩写属性

    ```css
    /* bad */
    .content {
      border-top-style: none;
      font-family: palatino, georgia, serif;
      font-size: 100%;
      line-height: 1.6;
      padding-bottom: 2em;
      padding-left: 1em;
      padding-right: 1em;
      padding-top: 0;
    }

    /* good */
    .content {
      border-top: 0;
      font: 100%/1.6 palatino, georgia, serif;
      padding: 0 1em 2em;
    }
    ```

2. **强制** 不要省略`0`之后的单位，不要省略1以下小数的`0`

    和日期格式一样，`2023/05/16`总是比`2023/5/16`更舒服点

    ```css
    /* bad */
    button{
      width:0;
      height:.5px;
    }


    /* good */
    button {
      width: 0px;
      height:0.5px;
    }
    ```

3. **强制** 每个属性独占一行

    ```css
    /* bad */
    button{
      width:100px;height:50px;color:#fff;background:#00a0e9;
    }


    /* good */
    button{
      width: 100px;
      height: 50px;
      color: #fff;
      background: #00a0e9;
    }
    ```

4. **强制** 每行不得超过 `120` 个字符，除非单行不可分割。

   常见不可分割的场景为URL超长。
   对于超长的样式，在样式值的 `空格` 处或` , `后换行，建议按逻辑分组。

   ```css
    div{
      /* 不同属性值按逻辑分组 */
      background:
          transparent url(aVeryVeryVeryLongUrlIsPlacedHere)
          no-repeat 0 0;

      /* 可重复多次的属性，每次重复一行 */
      background-image:
          url(aVeryVeryVeryLongUrlIsPlacedHere)
          url(anotherVeryVeryVeryLongUrlIsPlacedHere);

      /* 类似函数的属性值可以根据函数调用的缩进进行 */
      background-image: -webkit-gradient(
          linear,
          left bottom,
          left top,
          color-stop(0.04, rgb(88,94,124)),
          color-stop(0.52, rgb(115,123,162))
      );
    }
   ```





5. **强制** 属性定义后必须以分号结尾。

    ```css
    /* good */
    .selector {
        margin: 0;
    }

    /* bad */
    .selector {
        margin: 0
    }
    ```



6. **建议** 属性书写顺序

    按
    1. `Formatting Model`（布局方式、位置）
    2. `Box Model`（尺寸）
    3. `Typographic`（文本相关）
    4. `Visual`（视觉效果）
    5. ** （其它）

    的顺序书写，以提高代码的可读性。

    - `Formatting Model` 相关属性包括：`position` / `top` / `right` / `bottom` / `left` / `float` / `display` / `overflow` 等
    - `Box Model` 相关属性包括：`border` / `margin` / `padding` / `width` / `height` 等
    - `Typographic` 相关属性包括：`font` / `line-height` / `text-align` / `word-wrap` 等
    - `Visual` 相关属性包括：`background` / `color` / `transition` / `list-style` 等

    另外，如果包含 `content` 属性，应放在最前面。

    示例：

    ```css
    .sidebar {
        /* formatting model: positioning schemes / offsets / z-indexes / display / ...  */
        position: absolute;
        top: 50px;
        left: 0;
        overflow-x: hidden;

        /* box model: sizes / margins / paddings / borders / ...  */
        width: 200px;
        padding: 5px;
        border: 1px solid #ddd;

        /* typographic: font / aligns / text styles / ... */
        font-size: 14px;
        line-height: 20px;

        /* visual: colors / shadows / gradients / ... */
        background: #f5f5f5;
        color: #333;
        -webkit-transition: color 1s;
          -moz-transition: color 1s;
                transition: color 1s;
    }
    ```

7. **强制** 不能省去`url()`里的双引号

    不能是单引号，也最好不要省略，因为这看起来更符合字符串规则

    ```css
    /* good */
    body {
      background: url("bg.png");
    }

    /* bad */
    body {
      background: url(bg.png);
    }
    ```

8. **强制** 颜色值中的英文字符尽量采用小写和简写，不用小写也需要在同一项目中保持一致

    ```css
    /* good */
    .success {
        background-color: #aca;
        color: #90ee90;
    }

    /* bad */
    .success {
        background-color: #ACA;
        color: #90EE90;
    }

    ```

9. **建议** 背景图同时给出水平和垂直方向的位置。

    背景图的初始位置是`0% 0%`，在只有一个方向的值时，另一个方向的值会被解析为 `center`。为避免理解上的困扰，应同时给出两个方向的值

## `z-index`层级

1. **建议** `z-index`每个层级保留`100`个数量容纳元素。

## 字体

1. **建议** `font-family` 属性中的字体族名称应使用字体的英文`Family Name`，其中如有空格，须放置在引号中。

    所谓英文 `Family Name`，为字体文件的一个元数据，常见名称如下：

    字体 | 操作系统 | Family Name
    -----|----------|------------
    宋体 (中易宋体) | Windows | SimSun
    黑体 (中易黑体) | Windows | SimHei
    微软雅黑 | Windows | Microsoft YaHei
    微软正黑 | Windows | Microsoft JhengHei
    华文黑体 | Mac/iOS | STHeiti
    冬青黑体 | Mac/iOS | Hiragino Sans GB
    文泉驿正黑 | Linux | WenQuanYi Zen Hei
    文泉驿微米黑 | Linux | WenQuanYi Micro Hei

    ```css
    h1 {
        font-family: "Microsoft YaHei";
    }
    ```

2. **强制** `font-family` 按
    - 「西文字体在前、中文字体在后」
    - 「效果佳 (质量高/更能满足需求) 的字体在前、效果一般的字体在后」
    - 最后必须指定一个通用字体族( `serif / sans-serif` )

    的规则编写。

    ```css
    /* Display according to platform */
    .article {
        font-family: Arial, sans-serif;
    }

    /* Specific for most platforms */
    h1 {
        font-family: "Helvetica Neue", Arial, "Hiragino Sans GB", "WenQuanYi Micro Hei", "Microsoft YaHei", sans-serif;
    }
    ```

3. **建议** 在同一个项目中，同样的 `Family Name` 大小写必须统一。

## 过渡和动画

1. **建议** 使用 `transition` 时应指定 `transition-property`

    ```css
    /* good */
    .box {
        transition: color 1s, border-color 1s;
    }

    /* bad */
    .box {
        transition: all 1s;
    }
    ```

2. **建议** 使用`transform`代替`position`实现过渡和动画

    `transform`比`position`拥有更好的性能。

## 媒体查询

1. **建议** `Media Query` 如果有多个逗号分隔的条件时，应将每个条件放在单独一行中。

    ```css
    @media
    (-webkit-min-device-pixel-ratio: 2), /* Webkit-based browsers */
    (min--moz-device-pixel-ratio: 2),    /* Older Firefox browsers (prior to Firefox 16) */
    (min-resolution: 2dppx),             /* The standard way */
    (min-resolution: 192dpi) {           /* dppx fallback */
        /* Retina-specific stuff here */
    }
    ```

## 兼容

1. **建议** 带私有前缀的属性由长到短排列，按冒号位置对齐。

    标准属性放在最后，按冒号对齐方便阅读，也便于在编辑器内进行多行编辑。

    ```css
    .box {
      -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
              box-sizing: border-box;
    }
    ```

## `OOCSS` 和 `BEM`

出于以下原因，我们鼓励使用 `OOCSS` 和 `BEM` 的某种组合：

  * 可以帮助我们理清 `CSS` 和 `HTML` 之间清晰且严谨的关系。
  * 可以帮助我们创建出可重用、易装配的组件。
  * 可以减少嵌套，降低特定性。
  * 可以帮助我们创建出可扩展的样式表。

**OOCSS**，也就是 “Object Oriented CSS（面向对象的CSS）”，是一种写 CSS 的方法，其思想就是鼓励你把样式表看作“对象”的集合：创建可重用性、可重复性的代码段让你可以在整个网站中多次使用。

参考资料：

  * Nicole Sullivan 的 [OOCSS wiki](https://github.com/stubbornella/oocss/wiki)
  * Smashing Magazine 的 [Introduction to OOCSS](http://www.smashingmagazine.com/2011/12/12/an-introduction-to-object-oriented-css-oocss/)

**BEM**，也就是 “Block-Element-Modifier”，是一种用于 `HTML` 和 `CSS` 类名的_命名约定_。`BEM` 最初是由 Yandex 提出的，要知道他们拥有巨大的代码库和可伸缩性，`BEM` 就是为此而生的，并且可以作为一套遵循 `OOCSS` 的参考指导规范。

  * CSS Trick 的 [BEM 101](https://css-tricks.com/bem-101/)
  * Harry Roberts 的 [introduction to BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)

**示例**

```html
<article class="listing-card listing-card--featured">

  <h1 class="listing-card__title">Adorable 2BR in the sunny Mission</h1>

  <div class="listing-card__content">
    <p>Vestibulum id ligula porta felis euismod semper.</p>
  </div>

</article>
```

```css
.listing-card { }
.listing-card--featured { }
.listing-card__title { }
.listing-card__content { }
```

  * `.listing-card` 是一个块（block），表示高层次的组件。
  * `.listing-card__title` 是一个元素（element），它属于 `.listing-card` 的一部分，因此块是由元素组成的。
  * `.listing-card--featured` 是一个修饰符（modifier），表示这个块与 `.listing-card` 有着不同的状态或者变化。
