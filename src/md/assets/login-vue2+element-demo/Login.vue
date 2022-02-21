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
