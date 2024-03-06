import store from '@/store';

/**
 * @method validateAuthCode
 * @description 验证功能权限
 * @param {String} authCode 授权码  'sys:admins:create'
 * @return {Boolean}
 */
export const validateAuthCode = function (authCode) {
  const funcAuth = store.state.account.permissions.permissions;
  return funcAuth && funcAuth.includes(authCode);
};
export const validateAuthCodeAsync = async function (authCode) {
  const { permissions } = await store.dispatch('getPermission');
  return permissions && permissions.includes(authCode);
};

/**
 * @method handleAuthElement
 * @description 对进行权限管理的元素进行处理
 * @param {HTMLElement} el 权限管理元素
 * @param {String} authCode  'sys:admins:create'
 * @return
 */
export const handleAuthElement = function (el, authCode) {
  setTimeout(() => {
    if (validateAuthCode(authCode)) {
      el.removeAttribute('disabled');
      el.removeAttribute('title');
      el.classList.remove('is-disabled');
    } else {
      el.setAttribute('disabled', true);
      el.setAttribute('title', '您没有权限进行此项操作');
      el.classList.add('is-disabled'); // element ui button默认禁用样式
    }
  }, 400);
};

export default {
  install: function (Vue, options) {
    const authElements = new Map();

    // 权限指令 v-auth="sys:admin:create"
    Vue.directive('auth', function (el, binding, vnode) {
      const type = binding.arg;
      const value = binding.value;
      handleAuthElement(el, value);
      authElements.set(vnode.key, {
        type,
        value,
        el,
        vnode,
      });
    });

    /**
     * @method update
     * @description 更新进行权限控制的元素
     * @param
     * @return
     */
    const update = function () {
      // console.log('update auth status')
      authElements.forEach((item) => {
        const { el, value } = item;
        if (el) {
          handleAuthElement(el, value);
        }
      });
    };

    Vue.prototype.$auth = {
      update,
      validate: validateAuthCode,
      validateAsync: validateAuthCodeAsync,
    };
  },
};
