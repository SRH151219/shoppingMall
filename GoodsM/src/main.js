// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入公共样式
import "../static/commonCss/pc-public.css";
//引入element
import ElementUI from "element-ui";
//引入elementui 样式
import "element-ui/lib/theme-chalk/index.css";
//将插件挂载到vue的实例上
Vue.use(ElementUI);



Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})