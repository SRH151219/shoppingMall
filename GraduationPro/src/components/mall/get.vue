<template>
    <div id="get">
        <router-link to="">
            <img :src="get[0].url" alt="">
        </router-link>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
  computed: {
    ...Vuex.mapState({
      get: state => state.mall.get
    })
  },
  mounted() {
    // console.log(this.get);
  }
};
</script>

<style scoped>
#get {
  width: 100%;
  height: 0.52rem;
  box-sizing: border-box;
  padding: 0 12px;
  background: #f2f2f2;
}
#get img {
  width: 100%;
  height: 0.52rem;
}
</style>
