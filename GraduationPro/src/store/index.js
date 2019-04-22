//引入子模块mall
import mall from "./mall/index";

//引入子仓库 mallPro
import mallPro from "./mallPro/index";

//引入子仓库my
import my from "./my/index";

//引入子仓库goodsCar
import goodsCar from "./goodsCar/index";

//导入vue
import Vue from "vue";

//导入vuex
import Vuex from "vuex";

//将vux挂载到vue的实例上
Vue.use(Vuex);

//公共状态
const state = {

};
//修改公共状态
const mutations = {

};

//做业务逻辑及异步数据的加载
const actions = {

};
//
const getters = {

};

//创建vuex仓库
const store= new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        mall,
        mallPro,
        my,
        goodsCar
    }
})
export default store;
