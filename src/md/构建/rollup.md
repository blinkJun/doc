# 类库的打包工具 [`Rollup`](https://rollupjs.org/guide/en/#overview)

## 配置文件 `rollup.config.js`

```javascript
export default {
  input:'main.js',
  output:{
    file:'dist/bundle.js',
    format:'es'
  }
}
```

使用：

```bash
npx rollup --config rollup.config.js
```

- 输出 `umd` 格式文件并配置全局变量、排除依赖包

```javascript
export default {
  input:'main.js',
  output:{
    name:'blinkComponents', //全局变量名称
    file:'dist/bundle.js',
    format:'umd',
    globals:{
      'vue':'Vue',
      'lodash-es':'_'
    },
    exports:'named'
  },
  external:['vue','lodash-es']
}
```

## 使用[插件](https://github.com/rollup/awesome)

- 读取`json`文件内容

```javascript
import json from '@rollup/plugin-json';
export default {
  plugins:[json()]
}
```

- 读取`node`模块：

```javascript
import {nodeResolve} from '@rollup/plugin-node-resolve'
export default {
  plugins:[nodeResolve()]
}
```

- 压缩混淆代码：`rollup-plugin-terser`

```javascript
import {terser} from 'rollup-plugin-terser'
export default {
  plugins:[terser()]
}
```

- 处理 `vue` 文件内容：[rollup-plugin-vue](https://www.npmjs.com/package/rollup-plugin-vue)
- 处理 `css` 内容：[rollup-plugin-css-only](https://www.npmjs.com/package/rollup-plugin-css-only)
- 处理 `typescript`：[rollup-plugin-typescript2](https://www.npmjs.com/package/rollup-plugin-typescript2)

```javascript
import vuePlugin from 'rollup-plugin-vue';
// 需要增加对 style 的处理
import cssPlugin from 'rollup-plugin-css-only'
// 兼容vue的 typescript 插件，默认使用根目录下的 tsconfig.json 配置文件
import tsPlugin from 'rollup-plugin-typescript2'
export default {
  plugins:[
    tsPlugin({
      // 覆盖 tsconfig.json 配置
      tsconfigOverride:{
        // 输出声明文件
        declaration:true
      }
    }),
    vuePlugin(),
    cssPlugin({
      output:'bundle.css'
    }),
  ]
}
```

## `external` 排除模块打包

```javascript
export default {
  external:['vue'] || (id)=>{
    return /^vue/.test(id) || deps.some(k=>new RegExp(`^${k}`).test(id))
  }
}
```

## 开发插件

插件是一个**函数**，并返回一个`options`对象，在`options`上定义一系列`rollup`生命周期钩子，在对应生命周期被调用并传入相关参数

```javascript
function plugin(){
  return {
    name:'plugin',
    buildStart:(options)=>{

    },
    load(id){
      return null
    },
    transform(code,id){
      return {
        code:''
      }
    },
    buildEnd(error){

    }
  }
}
```


## 实现
一些功能实现

### 为工具函数库生成类型声明文件

1. 安装`rollup-plugin-typescript2`插件
2. 配置`typescript`插件：
    ```js
      // rollup.config.js
      import tsPlugin from 'rollup-plugin-typescript2'
      export default {
        plugins:[
          tsPlugin({
            // 覆盖 tsconfig.json 配置
            tsconfigOverride:{
              "compilerOptions":{
                "allowJs":true, /* 允许使用js文件 */
                "module":"es2020", /* 模块类型 */
                "declaration": true, /* 生成相关的 '.d.ts' 文件。 */
                "declarationDir": "./dist/types", /* '.d.ts' 文件输出目录 */
                "emitDeclarationOnly": true, /* 只生成声明文件，不生成 js 文件*/
                "rootDir": "./lib", /* 指定输出文件目录（用于输出），用于控制输出目录结构 */
              }
            },
            useTsconfigDeclarationDir:true, /* 允许指定类型声明文件导出目录 */
            include:"**/*.js+(|x)", /* 必须指定包含哪些文件可以进行编译 */
          }),
          terser()
        ]
      }
    ```
