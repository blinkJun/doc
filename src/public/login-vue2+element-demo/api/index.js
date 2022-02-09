import axios from 'axios';
import qs from 'qs';
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
