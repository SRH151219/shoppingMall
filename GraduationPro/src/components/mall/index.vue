<template>
  <div id="index">
    <head-com class="head"></head-com>
    <div class="new" v-show="newShow">…………刷新完成…………</div>
    <tab-com v-show="tabShow1" class="tab" @handleData="getVal"></tab-com>
    <div class="wrapper proWrapper" ref="proScroll">
      <ul class="content">
        <banner-com></banner-com>
        <buy-com></buy-com>
        <get-com></get-com>
        <hot-com></hot-com>
        <div class="tabCon">
          <tab-com v-show="tabShow2" @handleData="getVal"></tab-com>
        </div>
        <product-com :warn="warnTxt"></product-com>
      </ul>
    </div>

  </div>
</template>

<script>
// 引入头部组件
import Head from "./head";
// 引入baner组件
import Banner from "./banner";
//引入buy组件
import Buy from "./buy";
//引入get组件
import Get from "./get";
//引入hot组件
import Hot from "./hot";
//引入tab组件
import Tab from "./tab";
//引入product组件
import Product from "./product";

//引入better-scroll
import Bscroll from "better-scroll";

//引入Vuex
import Vuex from "vuex";

export default {
  components: {
    "head-com": Head,
    "banner-com": Banner,
    "buy-com": Buy,
    "get-com": Get,
    "hot-com": Hot,
    "tab-com": Tab,
    "product-com": Product
  },
  data() {
    return {
      tabShow1: false,
      tabShow2: true,
      newShow:false,
      page: 1,
      warnTxt: "上拉加载更多……"
    };
  },
  created() {
    this.getGoods({ type: "推荐", page: this.page });
  },
  mounted() {
    //   better-scroll组件实例化
    //获取最新dom后，进行插件实例化，（因为这个时候，wrapper 的 DOM 已经渲染了，我们可以正确计算它以及它内层 content 的高度，以确保滚动正常），this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new Bscroll(this.$refs.proScroll, {
          //第一个参数是包裹元素，第二个参数是better-scroll的配置项
          //滚动的元素允许点击
          click: true,
          //在better-scroll中，禁用了点击事件，要用的话，自己进行配置
          tap: true,
          // 上拉加载,配置后，可以调用pullingUp事件
          pullUpLoad: {
            // 当上拉距离超过30px时触发 pullingUp 事件
            threshold: -30
          },
          //在屏幕滚动的时候，实时派发scroll事件
          probeType: 2,

          //下拉刷新,配置后，可以调用pullingUp事件
          pullDownRefresh: {
            // 下拉距离超过30px触发pullingDown事件
            threshold: 30,
            // 回弹停留在距离顶部20px的位置
            stop: 50
          }
        });

        // //监听滚动的距离
        this.scroll.on("scroll", obj => {
          //  通过...rest判断，只用一个参数，且为对象
          //   console.log(rest);
          //     console.log(obj);
          // console.log(obj.y);
          //obj为对象，包含x坐标和y坐标
          if (obj.y <= -498) {
            this.tabShow1 = true;
            this.tabShow2 = false;
          } else {
            this.tabShow1 = false;
            this.tabShow2 = true;
          }
        });

        // 鼠标/手指离开触发事件 touchEnd
        //当滚动结束，触发事件scrollEnd
        this.scroll.on("pullingUp", () => {
          //触发上拉事件后，做一些事情，eg：发起请求
          //页数 ++
          this.page++;
          var pages = Math.ceil(this.goodsNum / 8);
          console.log(this.page,pages);
          // console.log(this.goodsNum);
          // console.log(pages);
          if (this.dataType == "推荐") {
            if (this.page <= pages) {
              this.getGoods({ type: "推荐", page: this.page });
              //事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则上拉事件只会执行一次
              this.scroll.finishPullUp();
              this.warnTxt = "上拉加载更多……";
            } else {
              this.warnTxt = "无更多数据";
            }
          } else {
            this.warnTxt = "无更多数据";
          }
        });

        //下拉刷新
        this.scroll.on("pullingDown", () => {
          // console.log("下拉刷新操作");
          // 将页码赋为1
          this.page = 1;
          // 重新加载第一页的数据
          this.getGoods({ type: "all", page: this.page });
          //显示提示语
          this.newShow = true;
          setTimeout(() => {
            // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
            this.scroll.finishPullDown();
            // 隐藏提示语
            this.newShow = false;
          }, 300);
        });
      } else {
        //否则我们会调用 this.scroll.refresh 方法重新计算，来确保滚动效果的正常
        this.scroll.refresh();
      }
    });
  },
  updated() {},
  computed: {
    ...Vuex.mapState({
      goodsNum: state => state.mallPro.goodsNum,
      dataType: state => state.mallPro.dataType
    })
  },
  methods: {
    ...Vuex.mapActions({
      // 上拉刷新，下拉加载
      getGoods: "mallPro/getGoods",
      //上拉刷新
      getNewGoods: "mallPro/getNewGoods"
    }),
    //接收tab子组件传来的值
    getVal(val) {
      // console.log(val);
      this.page = 1;
      this.getGoods({ type: val, page: this.page });
    }
  }
};
</script>

<style scoped>
#index {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding-bottom: 0.5rem;
  background: lightcyan;
}
.new{
  font-size: 14px;
  text-align: center;
}
.proWrapper {
  overflow: hidden;
  height: 6.67rem;
  z-index: 0;
}

.head {
  z-index: 100;
}
/* 当滚动到一定距离,tab进行绝对定位 */
.tab {
  position: fixed;
  top: 0.5rem;
  z-index: 10;
}

.tabCon {
  width: 100%;
  height: 0.5rem;
}

.tabFixed {
  position: fixed;
  top: 0.5rem;
}
</style>
