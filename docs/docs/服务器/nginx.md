# `Nginx`
`nginx` 一直是`web server` 的必备神器，以稳定和高性能著称

- 静态服务：提供访问静态文件的服务
- 反向代理：提供本地服务的代理
- 负载均衡
- `access log`

## 安装

[点击查看安装教程](https://www.runoob.com/linux/nginx-install-setup.html)

## 常用命令
- `nginx`：启动
- `nginx -s reload`：重启
- `nginx -s stop`：停止
- `nginx -t`：测试配置文件
- `nginx -c xxx.conf`：指定配置文件启动

## 基础配置
```nginx
http {
  # 开启gzip
  gzip  on;
    
  #启用gzip压缩的最小文件
  gzip_min_length 1k;
    
  #gzip 压缩级别， 1-10，数字越大压缩越好，但cpu消耗越高,且压缩效果不会明显提升，一般设置在2-4
  gzip_comp_level 4;
  
  #压缩的文件类型
  gzip_types text/css application/javascript application/x-javascript text/javascript  application/octet-stream application/font-woff;

  # 根据返回的 Content-Type 来决定 expires
  map $sent_http_content_type $expires {
      "text/html"                 epoch;
      "text/html; charset=utf-8"  epoch;
      default                     off;
  }
}
```

## 常用服务配置

- 静态服务
```nginx
http {
  server {
      listen       80;
      server_name  site.com;
      # 将本地的一个文件夹作为所有 url 请求的根路径
      # 比如用户请求了一个 localhost/test,那么 nginx 就会去需找 /usr/share/nginx/html 文件夹下的 test 文件返回。
      root /usr/share/nginx/html;
      # 默认查找路径下的文件返回
      index index.html index.htm;

      location / {
        try_files $uri $uri/ =404;
      }
  }
}
```

- 不带`www`的域名重定向到带`www`的域名
```nginx
http {
  server {
      listen       80;
      server_name  site.com;
      return       301 http://www.site.com$request_uri;
  }
}
```

- 接口服务
```nginx
http {
  server {
      listen       80;
      server_name  www.site.com;

      # api path
      location /api/ {
          proxy_pass http://127.0.0.1:5301/;
          proxy_set_header Host $host:5301;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header x-forwarded-for  $proxy_add_x_forwarded_for;
      }

      location /console-api/ {
          proxy_pass http://127.0.0.1:5302/;
          proxy_set_header Host $host:5302;
          proxy_set_header X-Real-IP $remote_addr;
          proxy_set_header x-forwarded-for  $proxy_add_x_forwarded_for;
      }
  }
}
```

- 服务端渲染主站
```nginx
http {
  server {
      listen          80;             # the port nginx is listening on
      server_name     www.site.com;    # setup your domain here

      gzip            on;
      gzip_types      text/plain application/xml text/css application/javascript;
      gzip_min_length 1000;

      location / {
          expires $expires;

          proxy_redirect                      off;
          proxy_set_header Host               $host;
          proxy_set_header X-Real-IP          $remote_addr;
          proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
          proxy_set_header X-Forwarded-Proto  $scheme;
          proxy_read_timeout          1m;
          proxy_connect_timeout       1m;
          proxy_pass                          http://127.0.0.1:8501; # set the adress of the Node.js instance here
      }
  }
}
```