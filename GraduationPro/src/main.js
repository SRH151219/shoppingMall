// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Obverser from "./observer/observer";
Vue.prototype.obverser = Obverser;



//引入flexable
// import "../static/commonCss/flexble";
//引入公共样式
import "../static/commonCss/phone-public.css";
//引入iconfont样式
import "../static/myIconfont/iconfont.css";

//引入elementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入store
import store from "./store/index";

// 引入 mockjs

// import "./mockjs/index";

Vue.use(ElementUI);



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
