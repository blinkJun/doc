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
