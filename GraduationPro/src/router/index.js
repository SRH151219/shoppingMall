import Vue from 'vue'
import Router from 'vue-router'

//引入组件(组件懒加载)
const Mall = () => import('../components/mall/index');
const Classification = () => import('../components/classification/index');
const ShoppingCar = () => import('../components/shoppingCar/index');
const My = () => import('../components/my/index');
// import Mall from "../components/mall/index";
// import Classification from "../components/classification/index";
// import ShoppingCar from "../components/shoppingCar/index";
// import My from "../components/my/index";
//引入logo组件
const Logo = () => import('../components/logo/index.vue');
//引入注册组件
const Register = () => import('../components/register/index.vue');
//引入登录组件
const Login = () => import('../components/login/index.vue')
//引入登录设置组件
const LoginSet = () => import("../components/login/loginSet.vue");

//引入密码修改组件
const ModifyInfo = () => import("../components/login/modifyInfo.vue");

//引入商品详情页
const GoodsDetails = () => import("../components/goodsDetails/goodsDetails.vue");
//购物车
const GoodsCar = () => import("../components/shoppingCar/index.vue")

//引入 js-cookie
import Cookies from "js-cookie";

Vue.use(Router);

let router = new Router({
  routes: [{
      path: "/",
      // redirect:"/mall"
      redirect: "/logo"

    },
    {
      path: "/logo",
      name: "logo",
      component: Logo,
    },
    {
      path: "/goodsDetails",
      name: "goodsDetails",
      component: GoodsDetails,
      //验证是否登录
      meta: {
        isLogin: true,
      }
    },
    {
      path: "/goodsCar",
      name: "goodsCar",
      component: GoodsCar,
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/loginSet",
      name: "loginSet",
      component: LoginSet
    },
    {
      path: "/mall",
      name: "mall",
      component: Mall
    },
    {
      path: "/classification",
      name: "clallification",
      component: Classification,
    },
    {
      path: "/shoppingCar",
      name: "shoppingCar",
      component: ShoppingCar,
      meta: {
        isLogin: true,
      }
    },
    {
      path: "/my",
      name: "my",
      component: My,
      meta: {
        isLogin: true,
      }
    },
    //注册组件
    {
      path: "/register",
      name: "register",
      component: Register
    },
    //修改密码
    {
      path: "/ModifyInfo",
      name: "ModifyInfo",
      component: ModifyInfo
    },

    {
      path: "**",
      component: Mall
    },


  ]
})

//全局守卫
router.beforeEach((to, from, next) => {
  //获取cookie
  let token = Cookies.get("token");
  // console.log(to);
  if (to.meta.isLogin) {
    if (token) {
      next();
    } else {
      next("/login");
    }
  }
  next();

})

export default router;
