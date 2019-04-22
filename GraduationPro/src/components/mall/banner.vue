<template>
  <div id="banner ">
    <div class="swiper-container banner-swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide " v-for="(item,index) in banner">
          <img :src="item.url" :alt="item.name">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

    </div>

  </div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper";
import "../../../node_modules/swiper/dist/css/swiper.css";
import Vuex from "vuex";
export default {
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
 
  },
  computed:{
    // 从vuex中获取banner数据
    ...Vuex.mapState({
      banner:state =>state.mall.banner
    })
  },
  
  mounted() {
    setTimeout(() => {
      var mySwiper = new Swiper(".banner-swiper", {
        loop: true, // 循环模式选项
        autoplay: {
          //自动切换的时间间隔，单位ms
          delay: 1000,
          //用户操作swiper之后，是否禁止autoplay。默认为true：停止。
          disableOnInteraction: false
        },

        //开启鼠标滚轮控制Swiper切换
        mousewheel: true,

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          //点击分页器，可进行切换
          clickable: true,
          //点击slide时显示/隐藏分页器，如果遇到无效，可增加样式 .swiper-container .swiper-button-hidden{ opacity : 0; }。
          hideOnClick: true
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          //点击slide时显示/隐藏前进后退按钮，如果遇到无效，可增加样式 .swiper-container .swiper-button-hidden{ opacity : 0; }。
          hideOnClick: true
        }
      });
    }, 300);
  }
};
</script>

<style scoped>
#banner {
  width: 100%;
  /* height: 2.5rem; */
  height: 1.25rem;
}
.banner-swiper {
  width: 100%;
  /* height: 2.5rem; */
  height: 1.25rem;
}
.swiper-container .swiper-button-hidden {
  opacity: 0;
}
img {
  /* width: 7.5rem;
  height: 2.5rem; */
  width: 3.75rem;
  height: 1.25rem;
  /* width: 100%; */
  /* height: 1.25rem;
  height: 100%; */
}
</style>
<style>
/* 修改swiper样式 */
.swiper-container-horizontal > .swiper-pagination-bullets {
  bottom: -18px;
}
.swiper-button-prev,
.swiper-button-next {
  background-size: 16px 44px;
}
</style>

