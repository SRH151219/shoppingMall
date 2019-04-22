<template>
    <div id="gooter">
        <div class="bottom">
            <p class="left">
                <label for="selectAll"><input type="checkbox" id="selectAll" :checked="allSelected" @change="change()">全选</label>
            </p>
            <div class="right">
             
                <p class="count">结算
                    <span>({{goodsCount.goodsNumPrice}})</span>

                </p>
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
    change() {
      this.hangleAllChange();
    }
  }
};
</script>

<style scoped>
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
  background: rgba(156, 156, 155, 0.2);
}

.bottom .right {
  display: flex;
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
