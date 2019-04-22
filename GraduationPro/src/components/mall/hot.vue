<template>
    <div id="hot">
        <div class="head">热门品牌</div>
        <div class="bottom">
            <div class="con" v-for="(item,index) in hot">
                <router-link to="/my">
                    <img :src="item.url" alt="">
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...Vuex.mapState({
      hot: state => state.mall.hot
    })
  },
  mounted() {
    // console.log(this.hot);
  }
};
</script>

<style scoped>
#hot {
  width: 100%;
  height: 1.75rem;
  background: #f2f2f2;
}
#hot .head {
  width: 100%;
  height: 0.44rem;
  background: #fff;
  font-size: 16px;
  color: #000;
  text-align: center;
  line-height: 0.44rem;
  font-weight: bolder;
  box-sizing: border-box;
  padding: 0 12px;
  background: #f2f2f2;
}
#hot .bottom {
  display: flex;
  height: 1.24rem;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
}

#hot .bottom img {
  width: 1.2rem;
  height: 0.62rem;
}
</style>
