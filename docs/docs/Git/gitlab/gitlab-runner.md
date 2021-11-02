# [Gitlab](https://docs.gitlab.com/)
gitlab代码管理平台

# Gitlab `ci/cd`
持续集成通常用来进行日常编译和自动化测试，来保证及时发现提交的问题，避免影响项目进度。
通常持续集成的过程包括：
- 提交（合并）代码
- 编译
- 测试
- 发布

不同的项目可能步骤有所不同，一些更加规范的公司的项目可能会加入静态代码检查，也有不少的小项目迫于进度和QA的工作压力，可能连测试过程都没有。

## 为什么使用 `gitlab-runner`
就我理解，gitlab-ci是一个简易版的jenkins，git服务器兼任了Jenkins master的功能，而我只需要准备好一个slave即可。而且，gitlab-ci的runner支持多重环境，尤其是Docker还有专属的配置支持。配置过程也非常的简便无脑，比起Jenkins的slave配置可以说是完胜了。

## 什么是 `gitlab-runner`
简单介绍一下runner。正如我前文所说，runner可以理解为是Jenkins的slave，机器（或docker）通过runner程序与git服务器进行通信，当有新的任务发布到当前runner时，runner会执行.gitlab-ci.yml所定义的CI指令



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
配置好的`runner`配置文件通常放在`/srv/gitlab-runner/config/config.toml`中，可进入容器进行修改，保存实时生效

## 配置项目

### 可能存在的问题
- 若`runner`配置`tag`标签，则需要点击`runner`进入到配置页面，配置不符合`tag`的提交也会触发runner执行

### 配置`.gitlab-ci.yml`
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