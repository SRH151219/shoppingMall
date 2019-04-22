<template>
    <div id="content">
        <ul>
            <li v-for="(item,index) in classContent" @click="handleDetails(item._id)">
                <img :src="item.goodsBigImg" alt="">
            </li>
        </ul>
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
      classContent: state => state.mallPro.product
    })
  },
  methods: {
    ...Vuex.mapActions({
      //获取商品详情
      getGoodsDetails: "mallPro/getGoodsDetails"
    }),
    handleDetails(val) {
    //   console.log(val);
      this.getGoodsDetails(val);
      this.$router.push("/goodsDetails");
    }
  }
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: rgba(400, 100, 100, 0.1);
  padding-bottom: 1rem;
}
ul li {
  /* width: 100%; */
  padding: 10px;
}
ul li img {
  width: 1.2rem;
  height: 1.5rem;
  border-radius: 8px;
}
</style>
