<template>
  <div id="index">
    <top-com></top-com>
    <header-com v-show="headerShow"></header-com>
    <center-com></center-com>
    <footer-com v-show="footerShow"></footer-com>
  </div>

</template>

<script>
import Top from "./top";
import Header from "./header";
import Center from "./center";
import Footer from "./footer";
import Cookies from "js-cookie";
import Vuex from "vuex";

export default {
  components: {
    "top-com": Top,
    "header-com": Header,
    "center-com": Center,
    "footer-com": Footer
  },
  data() {
    return {
      headerShow: true,
      footerShow: true,
    };
  },
  created() {
    //获取cookie中goodsCar的值
    var goods = Cookies.get("goodsCar");
    this.getCookiesGoods(goods);
  },
  methods: {
    ...Vuex.mapActions({
      //获取商品
      getCookiesGoods: "goodsCar/getCookiesGoods"
    })
  },
  computed: {
    ...Vuex.mapState({
      allSelected: state => state.goodsCar.allSelected
    }),
    ...Vuex.mapGetters({
      goodsCount: "goodsCar/goodsCount"
    })
  },
  destroyed() {}
};
</script>

<style scoped>
#index {
  width: 100%;
  height: 100%;
  padding-bottom: 0.5rem;
  /* background: lightcyan; */
  background: #fff;
}
.head {
  width: 100%;
  height: 0.48rem;
  background: #fff;
}
.head p {
  width: 100%;
  height: 0.48rem;
  line-height: 0.48rem;
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
}
.head div {
  position: absolute;
  left: 0;
  top: 0;
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 32px;
}
/* 顶部全选 */
.top {
  font-size: 16px;
  display: flex;
  width: 100%;
  padding: 0 14px;
  height: 0.5rem;
  align-items: center;
  background: pink;
}

/* 底部全选 */
.bottom {
  width: 100%;
  padding: 0 14px;
  height: 0.5rem;
  position: absolute;
  bottom: 0.5rem;
  background: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
}
.bottom .left {
  /* flex: 1; */
}
.bottom .right {
  /* flex: 1; */
  display: flex;
  /* background: orange; */
  align-items: center;
}
.bottom .right .count {
  width: 1rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  background: #c33;
  border-radius: 30px;
  color: #fff;
  margin-left: 8px;
}
</style>
