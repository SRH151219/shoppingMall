<template>
  <div id="header">
    <div class="top">
      <p>
        <label for="selectAll"><input type="checkbox" id="selectAll" :checked="allSelected" @change="change()">全选</label>
      </p>
      <p class="count">总数量:
        <span class="color">{{goodsCount.goodsNumCount}}</span>
        <!-- <span>100</span> -->

      </p>
      <p class="money">合计金额:
        <span class="color">￥{{goodsCount.goodsNumPrice}}</span>
      </p>
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
      allSelected: state => state.goodsCar.allSelected
    }),
    ...Vuex.mapGetters({
      goodsCount: "goodsCar/goodsCount"
    })
  },
  methods: {
    ...Vuex.mapActions({
      hangleAllChange: "goodsCar/hangleAllChange"
    }),
    
    //全选按钮发生变化
    change() {
      // console.log(1);
      this.hangleAllChange();
    }
  }
};
</script>

<style scoped>
#header {
  /* margin-bottom: 10px; */
}

/* 顶部全选 */
.top {
  font-size: 16px;
  display: flex;
  width: 100%;
  padding: 0 14px;
  height: 0.5rem;
  align-items: center;
  background: rgba(156, 156, 155, 0.2);
}
.count,.money{
  flex: 1;
  text-align: center;

}
.color{
  color: red;
}
</style>
