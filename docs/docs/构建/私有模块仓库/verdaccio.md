# 私有`npm`仓库：[`verdaccio`](https://verdaccio.org/zh-CN/docs/what-is-verdaccio)
模块化管理的一种方案，兼容`npm`的私有模块化管理服务

## 通过`docker`部署服务

1. **安装`Verdaccio`镜像**
```bash
sudo docker pull verdaccio/verdaccio:5
```

2. **初始化文件目录**
```bash
cd /usr/local
# 在此目录下保存配置
mkdir verdaccio
cd verdaccio
# 创建配置存放目录、数据存放目录、插件存放目录
mkdir conf && mkdir storage && mkdir plugins
# 在 conf 目录中创建配置文件
cd conf
vi config.yaml
```

3. **写入配置内容**
```yaml
# 设置中文
i18n:
    web: zh-CN
# 默认存储在本地文件夹内
storage: ./storage
# 默认的权限认证服务
auth:
    htpasswd:
        file: ./htpasswd
    # 允许创建用户的数量，设置为-1时禁止注册
    max_users: 1000
# 上行链路，向上查找模块返回
uplinks:
    cnpmjs:
        url: https://registry.npm.taobao.org/
    npmjs:
        url: https://registry.npmjs.org/
# 包的访问
packages:
    "@*/*":
        # 定义允许访问包的分组 或者 用户（用户名称）
        access: $all
        # 定义允许发布包的分组 或者 用户（用户名称）
        publish: $authenticated
        # 查找的上线链路
        proxy: cnpmjs npmjs
    "**":
        access: $all
        proxy: cnpmjs npmjs
# 日志记录
logs:
- { type: stdout, format: pretty, level: http }
```
修改配置文件后需要重启容器

相关问题：
- 复制到文件时出现格式错误，可能时注释导致的，将注释删除重试
- `.yaml`文件中不允许使用tab，请使用空格

4. **启动 `Verdaccio` 容器**
```bash
V_PATH=/usr/local/verdaccio; sudo docker run -d -it --restart=always --name verdaccio \
  -p 4873:4873 \
  -v $V_PATH/conf:/verdaccio/conf \
  -v $V_PATH/storage:/verdaccio/storage \
  -v $V_PATH/plugins:/verdaccio/plugins \
  verdaccio/verdaccio:5
```
启动完成后可访问：服务器地址`:4873`
不能访问时使用`docker logs <container id>`查看错误日志

5. **注册、登录、发布**
```bash
npm adduser --registry http://{部署的 ip}:4873
npm login --registry http://{部署的 ip}:4873
npm publish --registry http://{部署的 ip}:4873
```

相关问题：
- `adduser`错误：`unexpected error: EACCES: permission denied, open '/verdaccio/conf/htpasswd'`
配置的目录无权限，在服务器输入此命令：`sudo chown -R 10001:65533 /usr/local/verdaccio`
- `publish`错误：`user liangjun is not allowed to publish package add`
未配置`packages`权限，配置`publish: $authenticated`登录用户可发布或者指定用户发布

6. **使用私有仓库的方式**

- 需要时使用：`npm install --registry http://localhost:4873`
- 默认使用：
    - `npm set registry http://localhost:4873/`
    - 在用户目录下的`.npmrc`中添加一行：`registry=http://localhost:4873/`