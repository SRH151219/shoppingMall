import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//引入home组件
import Home from "@/components/goodsHome/index"
//引入查看商品 组件
import AddGoods from "../components/content/addGoods";
//引入 添加商品 组件
import FindGoods from "../components/content/findGoods";
//销售状况
import SaleStatus from "../components/content/saleSatus"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
        {
          path:"/addGoods",
          name:"addGoods",
          component:AddGoods
          
        },
        {
          path:"/findGoods",
          name:"findGoods",
          component:FindGoods
        },
        {
          path:"/saleStatus",
          name:"saleStatus",
          component:SaleStatus
        }
      ]
      
    }
  ]
})
