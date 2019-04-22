<template>
  <div id="app">
    <router-view/>
    <footer-com v-show="footerStatus"></footer-com>
  </div>
</template>

<script>
import Footer from "./components/footer";
import Vuex from "vuex";
export default {
  name: "App",
  components: {
    "footer-com": Footer
  },
  data() {
    return {
      footerStatus: true
    };
  },
  created() {
    // 非父子组件传值
    this.obverser.$on("changeState", () => {
      this.footerStatus = !this.footerStatus;
    });
    this.obverser.$on("changeState2", () => {
      this.footerStatus = !this.footerStatus;
    });
    this.obverser.$on("changeState3", () => {
      this.footerStatus = !this.footerStatus;
    });
    this.obverser.$on("changeState4", () => {
      this.footerStatus = !this.footerStatus;
    });
    this.obverser.$on("changeState5", () => {
      this.footerStatus = !this.footerStatus;
    });
    this.obverser.$on("changeState6", () => {
      this.footerStatus = !this.footerStatus;
    });
    this.obverser.$on("changeState7", () => {
      this.footerStatus = !this.footerStatus;
    });
    this.obverser.$on("changeState8", () => {
      this.footerStatus = !this.footerStatus;
    });
    this.obverser.$on("changeState9", () => {
      this.footerStatus = !this.footerStatus;
    });
    this.obverser.$on("changeState10", () => {
      this.footerStatus = !this.footerStatus;
    });
      this.obverser.$on("changeState11", () => {
      this.footerStatus = !this.footerStatus;
    });
    this.obverser.$on("changeState12", () => {
      this.footerStatus = !this.footerStatus;
    });
    //调用actions中的方法
    this.getMallAll();
  },
  methods: {
    // actions的辅助函数
    ...Vuex.mapActions({
      getMallAll: "mall/getAllData"
    })
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
