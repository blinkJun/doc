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
