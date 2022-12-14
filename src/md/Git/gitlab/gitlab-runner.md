# [Gitlab](https://docs.gitlab.com/)

gitlab 代码管理平台

# Gitlab `ci/cd`

持续集成通常用来进行日常编译和自动化测试，来保证及时发现提交的问题，避免影响项目进度。
通常持续集成的过程包括：

- 提交（合并）代码
- 编译
- 测试
- 发布

不同的项目可能步骤有所不同，一些更加规范的公司的项目可能会加入静态代码检查，也有不少的小项目迫于进度和 QA 的工作压力，可能连测试过程都没有。

## 为什么使用 `gitlab-runner`

就我理解，gitlab-ci 是一个简易版的 jenkins，git 服务器兼任了 Jenkins master 的功能，而我只需要准备好一个 slave 即可。而且，gitlab-ci 的 runner 支持多重环境，尤其是 Docker 还有专属的配置支持。配置过程也非常的简便无脑，比起 Jenkins 的 slave 配置可以说是完胜了。

## 什么是 `gitlab-runner`

简单介绍一下 runner。正如我前文所说，runner 可以理解为是 Jenkins 的 slave，机器（或 docker）通过 runner 程序与 git 服务器进行通信，当有新的任务发布到当前 runner 时，runner 会执行.gitlab-ci.yml 所定义的 CI 指令

## 使用 `docker` 安装 `gitlab-runner`

```bash
# 拉取runner镜像并启动，请注意：runner的版本应该和gitlab同一个大版本，不然有兼容问题替换latest为v11.0.0
docker run -d --name gitlab-runner --restart always -v /srv/gitlab-runner/config:/etc/gitlab-runner -v /var/run/docker.sock:/var/run/docker.sock gitlab/gitlab-runner:latest

# 进入容器内部
docker exec -it gitlab-runner bash

# 注册runner
gitlab-runner register

# 按照提示配置runner的字段：
# runner注册到的gitlab项目地址，在gitlab项目，设置 - ci/cd - runner 下查看url和token
# url
> Please enter the gitlab-ci coordinator URL (e.g. https://gitlab.com )
# token
> Please enter the gitlab-ci token for this runner
# 描述
> Please enter the gitlab-ci description for this runner
# 执行器 [excutors](https://docs.gitlab.com/runner/executors/)：可以选择bash、docker、ssh等 ，这里使用docker方便载入node环境
# 请注意：选择ssh是不能链接window服务器的，会报错
> Please enter the executor: ssh, docker+machine, docker-ssh+machine, kubernetes, docker, parallels, virtualbox, docker-ssh, shell:

# 完成配置退出容器
exit
```

删除无效的`runner`：
`gitlab-runner verify --delete`

配置好的`runner`配置文件通常放在`/srv/gitlab-runner/config/config.toml`中，可进入容器进行修改，保存实时生效

## 可能存在的问题

- 若`runner`配置`tag`标签，则需要点击`runner`进入到配置页面，配置不符合`tag`的提交也会触发 runner 执行

## 配置`.gitlab-ci.yml`

在项目根目录下新增配置文件`.gitlab-ci.yml`

```yml
# docker环境依赖
image: node:14.10.0

# 各个job之间缓存 node_modules
cache:
  key: $CI_COMMIT_REF_SLUG
  paths:
    - .npm/

before_script:
  - npm ci --cache .npm --prefer-offline

# Stages 表示构建阶段，这里有三个阶段 install,build,deploy
stages:
  - dependencies
  - build:test
  - deploy:test

# 安装依赖
install:dependencies:
  stage: dependencies
  script:
    - npm i
  # Introduced v11.4
  # only:
  #   changes:
  #     - package-lock.json

# 测试环境
# 打包
build:test:
  stage: build:test
  only:
    - master
  script:
    - npm run build:test
  artifacts:
    paths:
      - dist
# 发布
deploy:test:
  stage: deploy:test
  only:
    - master
  script:
    # 此处使用了阿里云oss的上传方式，可以选择其他方式：ssh，bash
    - node ./bin/oss/test.js
```

在推送标签时才使用构建阶段，则将`only: - master`改为：`only: - tags`

## 操作实现

### 将本机文件内容更新到远程服务器：

1. 首先实现[免密登录远程服务器](../../服务器/%E5%85%8D%E5%AF%86%E7%99%BB%E5%BD%95%E8%BF%9C%E7%A8%8B%E6%9C%8D%E5%8A%A1%E5%99%A8.md)

2. 将变量保存至`gitlab`项目中的安全变量设置：

   - `SSH_PRI_KEY`：私钥
   - `CUSTOM_USERNAME`：远程服务器用户名
   - `CUSTOM_IP`：远程服务器地址

3. 编辑`gitlab-ci.yml`：
   ```yml
   # 发布
   deploy:docs:
     stage: deploy
     script:
       - eval $(ssh-agent -s) # 使用ssh
       - bash -c 'ssh-add <(echo "$SSH_PRI_KEY")' # 缓存ssh key
       - scp -o StrictHostKeyChecking=no -r docs/* $CUSTOM_USERNAME@$CUSTOM_IP:/usr/local/nginx/www/
   ```
