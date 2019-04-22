<template>
    <div id="buy">
        <div class="con" v-for="(item,index) in buy">
            <!-- 点击进行页面的跳转 -->
            <router-link :to="link[index]">
                <img :src="item.url" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      // 点击页面跳转的地址
      link: ["my", "login"]
    };
  },
  created() {
  },
  methods: {
  },
  computed: {
    ...Vuex.mapState({
      buy: state => state.mall.buy,
    })
  },
  mounted() {
  }
};
</script>

<style scoped>
#buy {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 1.46rem;
  padding: 16px 12px 0px 12px;
  /* background: pink; */
  justify-content: center;
  /* margin-bottom: 10px; */
  background: #f2f2f2;
}

#buy .con {
  width: 1.75rem;
  height: 1.3rem;
}
#buy .con img {
  width: 1.75rem;
  height: 1.3rem;
}
</style>
