<template>
    <div id="header">
        <div class="con">
            <div class="left">
                <h1 class="logo">
                    <img src="../../../../static/imgs/logo.png" alt="logo" title="logo">
                </h1>
                <div class="manageName">
                    商品后台管理系统
                </div>
            </div>
            <div class="right">
                <div class="l">欢迎您：主人</div>
                <div class="r">退出登录</div>
            </div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
#header {
  width: 100%;
  height: 70px;
}
.con {
  width: 100%;
  height: 70px;
  background: #6b91b6;
}
.left {
  overflow: hidden;
  float: left;
}
.logo {
  /* display: inline-block; */
  float: left;
  padding: 10px 10px 10px 50px;
}
.logo img {
  width: 100px;
  height: 50px;
}
.manageName {
  float: left;
  display: inline-block;
  height: 70px;
  line-height: 70px;
  color: #fff;
  font-weight: bolder;
}

/* 右侧 */
.right {
  float: right;
  height: 70px;
  line-height: 70px;
  color: #fff;
  padding-right: 18px;
}
.l {
  padding-right: 15px;
}
.l,
.r {
  display: inline-block;
}
.r {
  color: red;
}
</style>
