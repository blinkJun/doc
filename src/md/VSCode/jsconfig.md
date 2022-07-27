# 使用`jsconfig.json`提高项目编码的体验

## 什么是 jsconfig.json？

当一个项目中存在`tsconfig.json`时，表示这是一个`typecrtipt`项目，目录中存在`jsconfig.json`文件表示该目录是`JavaScript`项目。
`jsconfig.json`文件指定[`JavaScript`语言服务](https://github.com/Microsoft/TypeScript/wiki/JavaScript-Language-Service-in-Visual-Studio)提供的功能选项。

> `jsconfig.json`源于`tsconfig.json`，是`TypeScript`的配置文件。`jsconfig.json`相当于`tsconfig.json`的“`allowJs`”属性设置为`true`。

## 为什么需要一个 jsconfig.json 文件？

`Visual Studio Code`的`JavaScript`支持可以在两种不同的模式下运行：

1. 文件范围：无`jsconfig.json`在`Visual Studio Code`中打开的`JavaScript`文件被视为独立单元

2. 显式项目：使用`jsconfig.json`表示该目录是`JavaScript`项目，可以列出包括的目录和排除的目录，以及编译选项。

当项目中存在`jsconfig.json`时可以提高编码体验。

## 如何使用？

- 指定项目包含的目录，和不包含的目录，提高语言服务的性能：

```json
{
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

- 通过`compilerOptions`属性配置`JavaScript`语言支持。

> 不要被 compilerOptions 混淆。 此属性的存在是因为 jsconfig.json 是 tsconfig.json 的后代，后者用于编译 TypeScript。

具体字段可根据[`tsconfig.json`的编译选项](https://www.tslang.cn/docs/handbook/compiler-options.html)

```js
{
  "compilerOptions":{
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "target": "es2015",
    "module": "es2015",
    "lib": [
      "dom",
      "esnext"
    ],
    "baseUrl":".",
    "paths":{
      "@/*": [
        "src/*"
      ]
    }
  }
}
```

## 模板

- `vue`项目模板：

```json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "target": "es2015",
    "module": "es2015",
    "lib": ["dom", "esnext"],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": [
    "dist",
    "node_modules",
    "build",
    ".vscode",
    ".nuxt",
    "coverage",
    ".npm",
    ".yarn"
  ]
}
```
