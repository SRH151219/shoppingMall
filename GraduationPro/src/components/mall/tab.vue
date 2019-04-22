<template>
  <div id="tab">
    <div class="wrapper tabWrapper" ref="nav">
      <ul class="content">
        <li v-for="(item,index) in tab" @click="handleChange(index,item.con,$event)">
          <router-link to="" :class="index == indexA ? 'active' : ''">
            {{item.con}}
          </router-link>
        </li>
      </ul>
      <!-- 这里可以放一些其它的 DOM，但不会影响滚动 -->
    </div>
  </div>
</template>

<script>
import Vuex from "vuex";
import Bscroll from "better-scroll";
export default {
  data() {
    return {
      indexA: 0
    };
  },
  computed: {
    ...Vuex.mapState({
      tab: state => state.mall.tab
    })
  },
  methods: {
    ...Vuex.mapActions({
      getGoods: "mallPro/getGoods"
    }),
    // 点击tab栏
    handleChange(val, type, event) {
      // console.log(val,type)
      // 记录当前点击选项的下标
      this.indexA = val;
      // 触发事件
        //  this.$emit("handleData",type);
       this.getGoods({ type: type, page: 1 });
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.scroll) {
        this.scroll = new Bscroll(this.$refs.nav, {
          //当scrollX设置为 true 的时候，可以开启横向滚动。
          scrollX: true,
          //允许点击
          click: true,
          tab: true
        });
      }else{
        this.scroll.refresh();
      }
    });
  }
};
</script>

<style scoped>
#tab {
  width: 100%;
  height: 0.5rem;
  background: #fff;
  font-size: 16px;
}

#tab .tabWrapper .content {
  display: flex;
  width: max-content;
  flex-wrap: nowrap;
  flex-shrink: 2;
}

#tab .tabWrapper .content li a {
  display: block;
  height: 0.5rem;
  padding: 0 12px;
  line-height: 0.5rem;
  color: #333;
}
.active {
  border-bottom: 2px solid blue;
  color: #c33;
}
</style>
