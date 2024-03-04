import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import DayeElements, { DictPlugin } from '../../dist/daye-elements.esm.js';
import '../../dist/bundle.css';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
}) => {
  DictPlugin.Dict({});
  Vue.use(DayeElements);
  Vue.use(ElementUI);
};
