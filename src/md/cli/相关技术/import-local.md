## 理解 [`import-local`](https://www.npmjs.com/package/import-local)

通过当前目录查找使用本地的包，而不是全局的包

通常用于脚手架，当一个脚手架既安装在本地目录，也在安装在全局目录时，调用脚手架命令，我们期望优先使用本地目录的包，而不是去使用全局目录的脚手架。就可以通过在脚手架启动的脚本中使用此包对脚手架寻址，如果查找到本地的脚手架包则优先使用。

#### [`pkg-dir`](https://www.npmjs.com/package/pkg-dir)
查找到存在`package.json`的上层目录

#### to do...