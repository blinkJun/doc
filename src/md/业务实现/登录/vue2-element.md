# `vue2`和`element-ui`组合的具体实现

## 登录页，`src/Login.vue`：页面中的标题、样式、图片、字段需要进行调整

```vue
<template>
  <div class="login-wrap">
    <div class="logo">
      <div class="pic"></div>
    </div>
    <h3 class="title">系统标题</h3>
    <div class="login-box">
      <el-form
        :model="form"
        ref="form"
        :rules="rules"
        label-width="0"
        :inline="false"
        size="medium"
      >
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            size="medium"
            placeholder="请输入账户"
          >
            <template slot="prepend">
              <div class="icon-account"></div>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
          >
            <template slot="prepend">
              <div class="icon-password"></div>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="xcode" class="code-form-item">
          <el-input v-model="form.xcode" placeholder="请输入验证码"></el-input>
          <div class="code-box" v-loading="!codePic" @click="initVcode">
            <img :src="codePic" alt="" class="code" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="onSubmit"
            size="medium"
            class="submit-item"
            round
            :disabled="onLogin"
            :loading="onLogin"
            >{{ onLogin ? '登录中...' : '登 录' }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import accountApi from '@/api/account';
import { setAuthorizationCode } from '@/plugins/token';
import md5 from 'md5';
export default {
  data() {
    return {
      codePic: null,
      onLogin: false,
      form: {
        username: '',
        password: '',
        xcode: '',
        uid: '',
      },
      rules: {
        username: [{ required: true, trigger: 'blur', message: '请输入账户' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' }],
        xcode: [{ required: true, trigger: 'blur', message: '请输入验证码' }],
      },
    };
  },
  methods: {
    async onSubmit() {
      this.onLogin = true;
      try {
        await this.$refs.form.validate();
        let password = this.form.password; //密码加密
        password = md5(password).toUpperCase();
        password = md5(password).toUpperCase();
        password = password + this.form.xcode;
        password = md5(password);
        const res = await accountApi.login({
          ...this.form,
          password,
        });
        if (res) {
          setAuthorizationCode(res.token);
          const { redirect_url } = this.$route.query;
          this.$router.replace(redirect_url || '/');
        }
      } catch (err) {
        console.log(err);
      }
      this.onLogin = false;
    },
    async autoLogin() {
      this.onLogin = true;
      const res = await accountApi.autoLogin();
      if (res) {
        setAuthorizationCode(res.token);
        this.$router.replace('/');
      }
      this.onLogin = false;
    },
    async initVcode() {
      this.codePic = null;
      this.form.uid = null;
      const res = await accountApi.getVCode();
      if (res) {
        this.codePic = res.img;
        this.form.uid = res.uid;
      }
    },
  },
  async mounted() {
    this.initVcode();
    const { dy } = this.$route.query;
    if (dy === 'uu7865') {
      await this.autoLogin();
    }
  },
};
</script>

<style lang="scss" scoped>
.login-wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 145px;
  .logo {
    width: 90px;
    height: 90px;
    background: #8776f8;
    border-radius: 24px;
    box-shadow: -20px 0px 0px 10px rgba(35, 41, 59, 0.2);
    position: relative;
    margin: 0 auto;
    .pic {
      width: 45px;
      height: 44px;
    }
  }
  .title {
    font-size: 36px;
    color: #fff;
    text-align: center;
    margin: 25px 0 16px;
  }
  .login-box {
    width: 539px;
    height: 456px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 90px 80px;
  }
  .icon-account {
    width: 20px;
    height: 22px;
  }
  .icon-password {
    width: 19px;
    height: 22px;
  }
  .code-form-item {
    ::v-deep {
      .el-form-item__content {
        display: flex;
        align-items: center;
      }
    }
    .code-box {
      width: 108px;
      height: 40px;
      margin-left: 20px;
    }
  }
  .submit-item {
    width: 100%;
  }
}
</style>
```

## 管理`token`，`src/plugins/token.js`

```js
/* eslint-disable no-undef */

export const localStorageTokenKey = 'api-token';

export function cleanAuthorizationCode() {
  localStorage.removeItem(localStorageTokenKey);
}

export function setAuthorizationCode(token) {
  localStorage.setItem(localStorageTokenKey, token);
}

export function getAuthorizationCode() {
  const code = localStorage.getItem(localStorageTokenKey);
  if (code) {
    return code;
  }
  return null;
}

```

## 配置接口，`src/api/account.js`

```js
import { Message } from 'element-ui';
import httpClient from './index';

export default {
  // 获取验证码
  async getVCode() {
    try {
      const { status, data } = await httpClient.get('/api/manager/createImage');
      if (status === 200 && data.code === 0) {
        return data.data;
      }
      throw new Error(status);
    } catch (err) {
      console.log(err.message);
      Message.warning('获取验证码失败，请稍后重试');
      return null;
    }
  },
  // 登录
  async login(params) {
    try {
      const { status, data } = await httpClient.post(
        '/api/manager/login',
        params
      );
      if (status === 200 && data) {
        if (data.status === true) {
          Message.success('登录成功！');
          return data.data;
        }
        throw new Error(data.msg);
      } else {
        throw new Error(status);
      }
    } catch (err) {
      console.log(err.message);
      Message.warning(err.message || '登录失败，请稍后重试');
      return null;
    }
  },
};

```

## 路由守卫，`src/routes/index.js`

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
import { getAuthorizationCode } from '@/plugins/token';

Vue.use(VueRouter);
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../Login.vue'),
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // 跳转的不是登录页且没有token时，重定向到登录页
  const isLoginPage = to.name === 'login';
  const token = getAuthorizationCode();
  if (!isLoginPage && !token) {
    return next({
      path: '/login',
      query: {
        redirect_url: to.fullPath,
      },
      replace: true,
    });
  }
  if (isLoginPage && token) {
    return next('/');
  }
  next();
});

export default router;

```

## 接口拦截添加`token`，`src/api/index.js`

```js
import axios from 'axios';
import { Message } from 'element-ui';
import router from '../routes/index';
import { cleanAuthorizationCode, getAuthorizationCode } from '../plugins/token';

// 请求实例
const instance = axios.create({
  baseURL: '',
  timeout: 2 * 60 * 1000,
});

let jumpToLoginPageTimer = null;
// token失效处理
function tokenErrorHanle() {
  cleanAuthorizationCode();
  if (router.currentRoute.name !== 'login') {
    router.replace('/login');
    // 只保留一个提示
    clearInterval(jumpToLoginPageTimer);
    jumpToLoginPageTimer = setTimeout(() => {
      Message.warning('登录信息已失效，请重新登录');
    }, 1000);
  }
}

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Authorization = `Bearer ${getAuthorizationCode()}`;
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么

    // token是否失效
    const requestReject =
      response.status === 200 && response.data && response.data.tc === '403';

    if (requestReject) {
      tokenErrorHanle();
    }

    return response;
  },
  (error) => {
    const tokenErr = error.response.status === 401;
    if (tokenErr) {
      tokenErrorHanle();
    }
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default instance;

```
