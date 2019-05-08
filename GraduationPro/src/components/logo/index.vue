<template>
  <div id="logo">
    <!-- <img src="../../../static/images/registerBg.jpg" alt="logo"> -->
    <div class="txt">商城</div>

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
  background: rgba(236, 225, 225, 0.4);
  animation: bg 10s;
}
img {
  width: 100%;
  height: 100%;
}
p {
  width: 100px;
  height: 50px;
  background: rgba(236, 225, 225, 0.4);
  font-size: 16px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  top: 5px;
  right: 0;
  border-radius: 10px;
}

.txt {
  position: absolute;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  color: rgb(11, 14, 19);
  background: rgb(116, 157, 233,.2);
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  font-size: 26px;
  border-radius: 50%;
  animation: myfirst 8s;
}

@keyframes bg {
  0% {
    background: rgb(185, 90, 138, 0.8);
  }
  25% {
    background: rgb(185, 90, 138, 0.4);
  }
  50% {
    background: rgb(134, 197, 134, 1);
  }
  75% {
    background: rgb(134, 197, 134, 0.6);
  }
  100% {
    background: rgb(134, 197, 134, 0.3);
  }
}

@keyframes myfirst {
  0% {
    background: rgb(134, 197, 134, 0.3);
    transform: scale(1);
  }
  25% {
    background: rgb(134, 197, 134, 0.6);
    transform: scale(2);
    left: 30px;
    top: 40px;
  }
  50% {
    background: rgb(134, 197, 134, 1);
    transform: scale(3);
  }
  75% {
    background: rgb(185, 90, 138, 0.4);
    transform: scale(3);
  }
  100% {
    background: rgb(185, 90, 138, 0.8);
    transform: scale(2) skew(45reg);
  }
}
</style>
