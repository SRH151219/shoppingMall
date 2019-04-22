<template>
    <div id="index">
        <div class="head">
            <div class="back iconfont iconIcon-fanhui">
            </div>
            <div class="search">
                <span class="searchIcon iconfont iconsearch"></span>
            </div>
        </div>
        <div class="con">
            分类
        </div>
        <el-tabs :tab-position="tabPosition" style="height: 100%;background:#fff" @tab-click="handleChange($event)">
            <el-tab-pane label="男装">
                <transition name="navFade">
                    <div v-show="show0">
                        <content-com></content-com>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="女装">
                <transition name="navFade">
                    <div v-show="show1">
                        <content-com></content-com>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="男鞋">
                <transition name="navFade">
                    <div v-show="show2">
                        <content-com></content-com>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="女鞋">
                <transition name="navFade">
                    <div v-show="show3">
                        <content-com></content-com>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="童装">
                <transition name="navFade">
                    <div v-show="show4">
                        <content-com></content-com>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="童鞋" :class="indexA == index ? 'active' : ''">
                <transition name="navFade">
                    <div v-show="show5">
                        <content-com></content-com>
                    </div>
                </transition>
            </el-tab-pane>

        </el-tabs>

    </div>
</template>

<script>
import classContent from "./content";
import Bscroll from "better-scroll";
import Vuex from "vuex";
export default {
  components: {
    "content-com": classContent
  },
  data() {
    return {
      tabPosition: "left",
      show0: true,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      indexA: 0,
      index: 0
    };
  },
  created() {
    //   默认显示的数据为男装
    this.getGoods({ type: "男装", page: 1 });
  },
  mounted() {},
  methods: {
    ...Vuex.mapActions({
      //获取商品详情
      getGoods: "mallPro/getGoods"
    }),

    handleChange(val) {
      //通过输出事件对象来判断事件源
      console.log(val.label);
      //下标
      console.log(val.index);
      //调用actions中的方法
      //   this.getGoods()
      this.getGoods({ type: val.label, page: 1 });

      //   this.show5 = true;
      this.indexA = val.index;
      this.index = val.index;
      //设置计时器，目的时为了让每个分类延时显示，这样切换分类时，就不会出现问题
      setTimeout(() => {
        if (val.index == 0) {
          this.show0 = true;
          this.show1 = this.show2 = this.show3 = this.show4 = this.show5 = !this
            .show0;
        } else if (val.index == 1) {
          this.show1 = true;
          this.show0 = this.show2 = this.show3 = this.show4 = this.show5 = !this
            .show1;
        } else if (val.index == 2) {
          this.show2 = true;
          this.show1 = this.show0 = this.show3 = this.show4 = this.show5 = !this
            .show2;
        } else if (val.index == 3) {
          this.show3 = true;
          this.show1 = this.show2 = this.show0 = this.show4 = this.show5 = !this
            .show3;
        } else if (val.index == 4) {
          this.show4 = true;
          this.show1 = this.show2 = this.show3 = this.show0 = this.show5 = !this
            .show4;
        } else if (val.index == 5) {
          this.show5 = true;
          this.show1 = this.show2 = this.show3 = this.show4 = this.show0 = !this
            .show5;
        }
      }, 300);
    }
  },
  updated() {
    console.log("更新");
  }
};
</script>

<style scoped>
#index {
  width: 100%;
  height: 100%;
  padding-bottom: 1rem;
  background: #fff;
  font-size: 16px;
  overflow: hidden;

}
.head {
  width: 100%;
  height: 0.5rem;
  background: #fff;
  display: flex;
  align-items: center;
  /* margin-bottom: 20px; */
}

.head .back {
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 28px;
  /* background: pink; */
}
.search {
  height: 0.3rem;
  width: 2.8rem;
  background: #ccc;
  line-height: 0.3rem;
  border-radius: 4px;
}
.search span {
  padding-left: 0.12rem;
  padding-right: 0.08rem;
  font-size: 0.16rem;

  float: left;
}

.con {
  width: 80%;
  height: 0.3rem;
  text-align: center;
  line-height: 0.3rem;
  border: 1px solid #f2f2f2;
  box-shadow: 10px 10px 5px #ccc;
  background: #f2f2f2;
  color: #333;
  margin: 20px auto;
  margin-bottom: 20px;
  border-radius: 6px;
}

/* .active {
  border-left: 2px solid #8050ff;
} */

/* 动画 */
.navFade-enter,
.navFade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
.navFade-enter-active,
.navFade-leave-active {
  transition: all 300ms;
}

.navFade-enter-to,
.navFade-leave {
  opacity: 1;
}
</style>
<style>
.el-tabs--left .el-tabs__item.is-left {
  text-align: center;
  background: #f2f2f2;
  width: 85px;
  height: 60px;
  line-height: 60px;
  border: 1px solid #f2f2f2;
  border-right: 0;
}

.el-tabs__nav-wrap::after {
  background-color: #fff;
}

.el-tabs--left .el-tabs__active-bar.is-left {
  width: 0;
}

/* 纵向滚动 */
.el-tabs__content {
  height: 100%;
  overflow: scroll;
}
.el-tab-pane {
  height: 100%;
}

.el-tabs--left .el-tabs__item.is-left .el-tabs__item.is-active {
  background: #fff;
}

.el-tabs--left .el-tabs__item.is-active {
  background: #fff;
}
</style>

