<template>
    <div id="logo">
        <img src="../../../static/images/logo.png" alt="logo">
        <p @click="handleGo">跳过 {{time}}s</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      time: 10,
      timer: null
    };
  },
  created() {
    this.obverser.$emit("changeState7");
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.handleTime();
  },
  methods: {
    //设置计时器
    handleTime() {
      this.timer = setInterval(() => {
        this.time--;
        if (this.time == 0) {
          clearTimeout(this.timer);
          this.$router.push("/mall");
        }
      }, 1000);
    },
    handleGo() {
      this.$router.push("/mall");
    }
  },
  destroyed() {
    clearInterval(this.timer);
    this.obverser.$emit("changeState8");
  }
};
</script>

<style scoped>
#logo {
  width: 100%;
  height: 100%;
  position: relative;
}
img {
  width: 100%;
  height: 100%;
}
p {
  width: 100px;
  height: 50px;
  background: rgba(255, 255, 255, 0.4);
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  top: 5px;
  right: 0;
  border-radius: 10px;
}
</style>
