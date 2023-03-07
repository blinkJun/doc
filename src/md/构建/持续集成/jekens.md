# `jekins`
构建、部署、自动化工具

## `docker`安装使用

1. 安装`docker`
2. 安装`jekins`：`docker pull jenkinsci/blueocean`
3. 运行`jekins`
  - 在`linux`、`macOS`上：
  ```bash
    docker run
      -u root
      --name jenkins
      --rm
      -d
      -p 8080:8080
      -p 50000:50000
      -v /home/jenkins_data/home:/home
      -v /home/jenkins_data/jekins_home:/var/jenkins_home
      -v /var/run/docker.sock:/var/run/docker.sock
      jenkinsci/blueocean
  ```
    `docker run -u root --name jenkins --rm -d -p 8080:8080 -p 50000:50000 -v /home/jenkins_data/home:/home -v /home/jenkins_data/jekins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean`

  - 在`window`上的`docker`使用
  ```bash
    docker run
      -d
      -u root
      --name jenkins
      -p 8080:8080
      -v E/projects:/var/projects
      -v D/jenkins_data/jenkins_home:/var/jenkins_home
      -v /var/run/docker.sock:/var/run/docker.sock
      jenkinsci/blueocean
  ```
    `docker run -d -u root --name jenkins -p 8080:8080 -v E/projects:/var/projects -v D/jenkins_data/jenkins_home:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean`
  > 需要增加自动重启命令：`docker container update --restart=always jenkins`
  需要在`docker desktop`应用设置中勾选`Expose daemon on tcp://localhost:2375 without TLS`

4. 进入可视化页面：`http://localhost:8080/`
5. 使用`docker logs <id>`查看日志获取可视化页面密码
6. 安装建议的插件、配置账户，重启
7. 在系统管理-插件管理-可用插件中安装`Docker Plugin`、`Docker pipeline`

## 配置

1. 开启一个流水线项目
2. 在`pipeline`选项中选择`Pipeline script from SCM`选项
3. 选择`git`并添加用户名密码或者`ssh`凭证
4. 配置指定的分支并保存配置
5. 在项目根目录增加`jenkinsfile`并增加以下内容，推送至远程分支
```jenkinsfile
pipeline {
    agent {
        docker {
            image 'node:14.21.1-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install --registry https://registry.npm.taobao.org'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'dist/**/*', followSymlinks: false
        }
    }
}
```
