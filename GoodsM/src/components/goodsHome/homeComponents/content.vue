<template>
    <div id="content">
        <!-- 路由嵌套，根据不同的路由，显示不同的组件 -->
        <router-view></router-view>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#content {
  float: left;
  /* 使用css3的cacl进行计算宽的，因为左右padding各占20px ，leftBar宽度为200px，所以要减去240px */
  width: calc(100% - 240px);
  padding: 20px 20px;
  position: relative;
}
</style>
