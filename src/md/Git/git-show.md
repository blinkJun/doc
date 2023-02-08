# `git-show` 获取提交的具体信息

将对应的`commit`信息作为命令行变量：

```bash
  export COMMIT_INFO=$(git show -s --format=fuller $CI_COMMIT_SHA)
  echo -e "$COMMIT_INFO \n"
```

具体参数可查看[`git-show`文档](http://schacon.github.io/git/git-show)
