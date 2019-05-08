<template>
    <div id="top">
        <div class="head">
            <div class="back iconfont iconIcon-fanhui" @click="handleGo"></div>
            <p>购物车</p>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    //返回
    handleGo() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.head {
  width: 100%;
  height: 0.48rem;
  background: #fff;
}
.head p {
  width: 100%;
  height: 0.48rem;
  line-height: 0.48rem;
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
}
.head div {
  position: absolute;
  left: 0;
  top: 0;
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 32px;
}
</style>
