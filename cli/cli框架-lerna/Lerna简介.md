# Lerna简介

## 原生脚手架开发痛点分析

- 痛点一：重复操作
    - 多Package本地操作
    - 多Package依赖安装
    - 多Package单元测试
    - 多Package代码提交
    - 多Package代码发布
- 痛点二：版本一致性
    - 发布时版本一致性
    - 发布后互相依赖版本升级

> package越多，管理复杂度越高

## Lerna简介
>Lerna is a tool that optimizes the workflow around managing multi-package repositories with git and npm.

Lerner是一个优化基于 git + npm 的多package项目的管理工具

## 优势
- 大幅度减少重复操作
- 提升操作的标准化
> lerna是架构优化的产物，它揭示了一个架构真理：项目复杂度提升以后，就需要对架构进行优化。架构优化的主要目标往往都是以效能为核心。

## 官网
[lerna](https://github.com/lerna/lerna)

## 案例
使用lerna管理的大型项目：
- [babel](https://github.com/babel/babel)
- [vue-cli](https://github.com/vuejs/vue-cli)
- [create-react-app](https://github.com/facebook/create-react-app)

## lerna 开发脚手架流程

1. 初始化项目
    1. 初始化npm项目
    2. 安装lerna
    3. `lerna init` **初始化项目**
2. 创建package
    1. `lerna create` **创建package**
    2. `lerna add` 安装依赖
    3. `lerna link` 链接依赖
3. 开发和测试
    1. `lerna exec` 执行shell脚本
    2. `lerna run`  **执行npm命令**
    3. `lerna clean` 清空依赖
    4. `lerna bootstrap` 重装依赖
4. 发布上线
    1. `lerna version` 、`bump version` 
    2. `lerna changed` 查看上版本以来的所有变更
    3. `lerna diff` 查看diff
    4. `lerna publish` **项目发布**


## 基于lerna创建项目


```bash
# 1. 安装lerna到全局环境
npm i lerna -g 

# 2. 安装lerna到开发环境
npm i lerna --save-dev

# 3. 初始化
lerna init
```

4. 添加.gitignore
```.gitignore
node_modules
.vscode
.idea
packages/**/node_modules
lerna-debug.log
```

```bash
# 5. 创建package: core
lerna create core

# 在npm账户创建一个可用的组织名称，输入组织名称作为package的前置，避免发布时重名
package name: (core) @blink-cli-dev/core

# 6. 创建package: utils
lerna create utils
# 记得组织名称
package name: (core) @blink-cli-dev/utils
```

## lerna核心操作
1. `lerna add` [为所有包安装依赖](https://github.com/lerna/lerna/tree/main/commands/add#readme)

2. `lerna link` [自动为互相引用的包添加软连接](https://github.com/lerna/lerna/tree/main/commands/link#readme)

3. `lerna exec` [执行shell命令，上下文在各个包目录下](https://github.com/lerna/lerna/tree/main/commands/run#readme)

4. `lerna run ` [执行各个包的npm命令](https://github.com/lerna/lerna/tree/main/commands/run#readme)

5. `lerna clean` [清空所有的依赖：删除node_modules](https://github.com/lerna/lerna/tree/main/commands/clean#readme)

6. `lerna bootstrap` [重新安装node_modules，建立互相引用的软连接](https://github.com/lerna/lerna/tree/main/commands/bootstrap#readme)

7. `lerna version` [更新包版本](https://github.com/lerna/lerna/tree/main/commands/version#readme)

8. `lerna publish` [更新包版本](https://github.com/lerna/lerna/tree/main/commands/publish) 在推送版本后使用