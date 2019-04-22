<template>
    <div id="index">
      <header-com></header-com>
      <div class="main">
        <leftbar-com></leftbar-com>
        <content-com></content-com>
      </div>

    </div>
</template>

<script>
// 引入头部组件
import Head from "./homeComponents/header";
//引入左边导航栏
import LeftBar from "./homeComponents/leftTab";
//引入内容区
import Content from "./homeComponents/content";
export default {
  components: {
    "header-com": Head,
    "leftbar-com": LeftBar,
    "content-com": Content
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
#index {
  width: 100%;
  height: 100%;

}
.main{
  width: 100%;
  /* height: 300px; */
  /* background: pink; */
}
</style>
