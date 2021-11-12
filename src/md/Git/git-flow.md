# `Git` 标准操作流程：`Git Flow`

所有的这些规范都是针对特定的**多人**设定的，意在让多人协作的过程更顺畅，更简单，减少不必要的冲突和时间的浪费

## 常规`Git Flow`

预设两个分支：

- `master`：只能用来包括产品代码，不能在此分支上工作
- `develop`：进行任何新的开发的基础分支，完成开发后合并到`master`
  这两个分支成为长期分支，其他分支在完成功能后会被删除掉

- 功能开发`feature`：基于`develop`的新分支`feature/msg-plugin`

  - 完成开发后整合到`develop`
  - 等待更全面的测试
  - 等待和`develop`一起发布

- 管理`release`:通过`tag`发布版本

  - 新功能已经添加
  - 代码已经被测试
  - 使用版本号命名

- `bug`修复 `hotfix`：基于`master`的新分支`hotfix:miss-link`
  - 针对 `master`分支，修复后合并到`maser`、`develop`

优点：清晰可控
缺点：相对复杂，不适合持续发布

## `Github Flow`

- 根据需求，从`master`拉出分支
- 激烈的开发阶段，提交`commit`
- 开发完毕，发起 PR (`pull request`)
- **代码评审**
- 部署，测试
- 没问题，`merge`到`master`

## 两大规则

- `branch`命名：

  - `feature/`开头代表功能开发
  - `hotfix/`开头代表`bug`修复

- `commit`**言之有物**，简单描述做了什么
