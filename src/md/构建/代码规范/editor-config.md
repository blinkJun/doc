# [编辑器配置](http://editorconfig.org)

## `.editorconfig`
常常在他人项目中，发现有一个`.editorconfig`文件，里面配置的内容有点类似`eslint`。我在想，都有`eslint`了，为什么还要配置这个东西呢？在网上查找了一下相关资料，看了文档发现有些功能`eslint`是满足不了的。

## 为什么要用
- `eslint`和`editorconfig`有共通的东西，比如缩进，`eslint`偏向帮你检查代码，`editorconfig`则希望编辑器直接按照这个配置编写代码
- `editorconfig`可以对更多文件进行规范，而`eslint`通常只校验`js`

## 如何使用

通用的 `.editorconfig` 配置文件一般如下所示：

```csharp

# 表示根目录，查找配置文件到此文件为止
root = true

[*]
# 缩进风格：空格
indent_style = space
# 缩进大小2
indent_size = 2
# 换行符lf
end_of_line = lf
# 字符集utf-8
charset = utf-8
# 是否删除行尾的空格
trim_trailing_whitespace = true
# 是否在文件的最后插入一个空行
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab

```

1. 将文件保存在项目根目录
2. 分别修改 indent_size 为 2 和 4 查看编辑器有无变化
3. 若无变化则需要到编辑器插件市场查找 editorconfig 相关插件，安装即可。如 vscode 在插件市场中查找`editorCondif for VS Code`安装。
