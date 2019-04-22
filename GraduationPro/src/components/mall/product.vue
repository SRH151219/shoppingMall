<template>
  <div id="pro">

    <div class="con" v-for="(item,index) in product" @click="handleDetails(item._id)">
      <div class="imgCon">
        <img :src="item.goodsBigImg" alt="">
      </div>
      <div class="txt">
        <p class="goodsName">
          {{item.goodsName}}
        </p>
        <div class="goodsPrice">
          <p> 现价：{{item.goodsPrice1}}</p>
          <p>原价：{{item.goodsPrice2}}</p>
        </div>
        <div class="goodsDesc">
          哈{{item.goodsDesc}}
        </div>
      </div>

    </div>
    <!-- 加载提示 -->
    <div class="warn">
      {{warn}}
    </div>
  </div>
</template>

<script>
import axios from "axios";
//引入vuex
import Vuex from "vuex";
export default {
  props: ["warn"],
  data() {
    return {
      url: ""
    };
  },
  created() {},
  computed: {
    ...Vuex.mapState({
      product: state => state.mallPro.product,
      // goodsId:state =>state.goodsCar.goodsId
    })
  },

  methods: {
    //点击进入详情页，并获得商品id
    handleDetails(val) {
      // console.log(val);
      this.getGoodsDetails(val);
      //记录此时的商品id
      this.getGoodsId(val);
      this.$router.push("/goodsDetails")
    },
    ...Vuex.mapActions({
      //获取商品详情
      getGoodsDetails:"mallPro/getGoodsDetails",
      //记录商品id
      getGoodsId:"goodsCar/getGoodsId"
    }),

  },
  mounted() {}
};
</script>

<style scoped>
#pro {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 16px;
  color: #000;
  box-sizing: border-box;
  padding: 15px 10px 0;
  padding-bottom: 3rem;
  background: #f2f2f2;
  overflow: hidden;
  min-height: 6.3rem;
}
#pro .con {
  /* flex: 1; */
  background: #fff;
  margin-bottom: 15px;
  /* margin-right: 10px; */
  border-radius: 15px;
}

#pro .con .imgCon img {
  border-radius: 15px 15px 0 0;
  width: 1.72rem;
  height: 2.25rem;
}
.warn {
  width: 100%;
  height: 0.5rem;
  font-size: 16px;
  text-align: center;
  line-height: 0.5rem;
}
.txt {
  width: 100%;
  padding: 0 10px;
}

.goodsName {
  font-size: 14px;
  color: #333;
}
.goodsPrice p:nth-of-type(1) {
  font-size: 16px;
  color: red;
  padding: 5px 0;
}

.goodsPrice p:nth-of-type(2) {
  font-size: 12px;
  color: #ccc;
  text-decoration: line-through;
  /* padding: 5px 0; */
}

.goodsDesc {
  width: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 5px 5px 15px 5px;
}
</style>
