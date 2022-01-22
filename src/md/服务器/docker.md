# `Docker`
基于`docker`，我们可以把开发、测试环境，一键部署到任何一台机器上。只要该机器安装了`docker`
有了`docker`、就有了一切

## 理解`docker`

### 什么是`docker`：存放应用的容器
- 公司开发，开源在`github`
- 跨平台：`linux`,`mac`,`window`

### `docker`解决了什么问题
- 运行环境不一致带来的问题
- 快速扩展，弹性伸缩

### `docker`的思想
- 集装箱
- 标准化
  - 运输方式
  - 储存方式
  - api接口
- 隔离

### 关键概念
- 仓库：超级码头
- 镜像`image`：集装箱
- 容器：运行程序的地方

**仓库取出镜像，放置到容器中运行**
![alt 属性文本](../assets/images/docker.svg)

### 仓库：可选择
- hub.docker.com
- c.163.com

### 镜像：`image`
`linux`联合文件系统：不同文件目录，联合到同一个文件夹，将联合的文件夹（只读）分层

- 下载镜像：`docker pull <image-name>:<tag>`
- 查看本地镜像：`docker images`
- 删除镜像：`docker rmi <image-id>`
- 上传镜像：`docker push <username>/<repository>:<tag>`，要先注册[hub.docker.com](http://hub.docker.com)


### 容器： 镜像 + 可读写层
运行态容器：一个可读写的统一文件系统加上隔离的进程空间和包含其中的进程。
启动容器:`docker run -p xxx1:xxx2 -v=hostPath:containerPath -d hello-world`
- `-p`：端口映射，将主机端口`xxx1`映射到容器端口`xxx2`
- `-v`：文件映射，将主机文件目录`hostPath`映射到容器目录`containerPath`
- `-d`：后台运行
- `--name`：定义容器名称

### 常用操作
```bash
docker ps -a               #查看所有运行的容器，-a显示隐藏的容器
docker container ls -a     #获得容器信息
docker container ls -a  -q   #获得容器id
docker container stop <container ID>
docker container rm  <container ID>
docker container stop $(docker container ls -a -q)  #批量停止
docker logs <container ID> #查看容器启动log
docker inspect <container ID> #查看容器具体信息
```

运行`nginx`：持久运行，后台挂起，进入容器内部
1. `docker pull nginx:latest`
2. `docker run -d nginx`
3. 查看运行中的容器：`docker ps`
4. 进入容器：`docker exec -it [容器id]  bash`
5. `docker stop [容器id]`


### `docker`网络
- 网络类型
  - `bridge`：独立模式，网络桥接
  - `host`：使用宿主主机网络
  - `none`
- 端口映射：主机端口8080，容器端口80
  - `docker run -itd -p 8080:80 nginx`

### `Dockerfile`：制作自己的镜像
创建名称为`Dockerfile`的配置文件，放置在代码根目录：
```dockerfile
# 指定维护者
MAINTAINER 381347268@qq.com
# 指定基础镜像
FROM node:14
# 指定一个运行的目录
WORKDIR /app
# 复制文件到指定地址
COPY . /app

# 构建镜像时，一般用于做一些系统配置，安装必备的软件，可以有多个RUN

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
# 安装依赖
RUN npm set registry https://registry.npm.taobao.org
RUN npm install

# 启动容器时，只能有一个CMD
CMD echo $SERVER_NAME && echo $AUTHOR_NAME && npm run dev

# 环境变量
ENV SERVER_NAME='admin-server'
ENV AUTHOR_NAME='blink'
```
打包：`docker build -t copyfile:latest .` 最后的`.`指`Dockerfile`在当前目录下。

- `.dockerignore`：类似`.gitignore`，忽略文件

## `docker-compose` 组合多个容器
每个`docker container`应该只负责一个服务，如果需要启动多个服务，就需要多个`docker container`，为了将`docker container`组合起来，就需要`docker-compose`
通过一个配置文件，就可以让你的系统一键启动所有的运行环境：`nodejs`+`mysql`+`redis`

### `docker-compose.yml` 配置文件
```yml
version: '3'
# 多个 docker contaner
services:
  admin-server:
    build:
      context: . #当前目录
      dockerfile: Dockerfile #基于 Dockerfile 构建
    images: admin-server #当前构建出来的镜像
    container_name: admin-server #容器名称
    ports: #端口映射
      - 8081:3000

  admin-redis:
    image: redis #引用官网的镜像
    container_name: admin-redis
    ports:
      - 6378:6379
    environment:
      - TZ=Asia/Shanghai #设置时区

  admin-mysql:
    image: mysql
    container_name: admin-mysql
    restart: always #出错则重启
    privileged: true #高权限，执行sql
    command: --default-authentication-plugin=mysql_native_password #远程访问
    ports:
      - 3305:3306
    volumes: # 文件映射
      - .docker-volumes/mysql/log:/var/log/mysql  #记录日志
      - .docker-volumes/mysql/data:/var/lib/mysql #数据持久化
      - ./mysql/init:/docker-entrypoint-initdb.d  #初始化sql

```
在`admin-server`中将`redis`的`host`和`port`改为`admin-redis:6379`，即可使`admin-server`连接到`admin-redis`服务

### 常用命令
```bash
docker-compose build <service name> #构建容器
docker-compose up -d #启动所有服务器，-d 表示后台启动
docker-compose down #停止所有服务
docker-compose ps #查看服务
```
