<template>
    <div id="center">
        <ul class="goods" v-for="(item,index) in goodsCookiesList"  @change="handleGoodsChange(index)">
            <li>
                <label><input type="checkbox" :checked="item.flag"></label>
            </li>
            <li>
                <img :src="item.goodsImg" alt="">
            </li>
            <li>
                <p>商品名称：{{item.goodsName}}</p>
                <p>颜色：{{item.goodsColor}}</p>
                <p>尺寸:{{item.goodsSize}}</p>
                <p>单价：￥{{item.goodsPrice}}</p>
                <div class="num">
                    <p>价格:￥{{item.goodsPrice * item.goodsNum}}</p>
                    <div class="btn">
                        <button @click="handleChangeNum({indexA:index,id:1})"> - </button>
                        <input type="text" class="txt" v-model.number="item.goodsNum">
                        <button @click="handleChangeNum({indexA:index,id:2})"> + </button>
                    </div>
                </div>

            </li>

        </ul>

    </div>
</template>

<script>
import Vuex from "vuex";
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5]
    };
  },
  computed: {
    ...Vuex.mapState({
      goodsCookiesList: state => state.goodsCar.goodsCookiesList
    })
  },
  methods: {
    ...Vuex.mapActions({
      handleGoodsChange: "goodsCar/handleGoodsChange",
      handleChangeNum: "goodsCar/handleChangeNum"
    }),
  
  }
};
</script>

<style scoped>
#center {
  width: 100%;
  height: 4.67rem;
  /* background: orange; */
  overflow: scroll;
}
ul {
  display: flex;
  font-size: 16px;
  /* justify-content: space-between */
  padding: 5px 10px 5px 15px;
  background: rgba(160, 160, 157, 0.2);
  margin-bottom: 10px;
}
ul li:nth-of-type(1) {
  width: 0.5rem;
  height: 1rem;
  line-height: 1rem;
}
ul li:nth-of-type(2) {
  width: 0.8rem;
}
ul li:nth-of-type(3) {
  flex: 1;
  padding-left: 35px;
  font-size: 14px;
}
ul li:nth-of-type(3) p {
  line-height: 20px;
}
ul li:nth-of-type(3) .num {
  padding-left: 0.8rem;
}
ul li:nth-of-type(3) .num p {
  /* padding-top: 10px; */
  line-height: 24px;
  color: red;
  font-size: 16px;
}
ul li:nth-of-type(3) .txt {
  width: 0.4rem;
  height: 0.2rem;
  font-size: 14px;
  text-align: center;
}
ul li:nth-of-type(3) button {
  width: 0.2rem;
  height: 0.2rem;
  font-size: 14px;
  /* line-height: .2rem; */
}
img {
  width: 0.8rem;
  height: 1rem;
}

/* .btn{
    padding-left: .8rem;
} */
</style>
