<template>
    <div id="head">
        <div class="carcon">
            <div class="car iconfont icongouwuche1"></div>
            <div class="txt">购物车</div>

        </div>
        <div class="search">
            <span class="searchIcon iconfont iconsearch"></span>
        </div>
        <div class="clssifyCon">
            <div class="classify iconfont iconfenlei1"></div>
            <div class="txt">分类</div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#head {
  width: 100%;
  height: 0.5rem;
  display: flex;
  align-items: center;
  background: #fff;
}
.carcon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 0.5rem;
  height: 0.5rem;
  justify-content: center;
}
.carcon .car {
  font-size: 0.24rem;
  align-self: center;
}
.carcon .txt {
  font-size: 10px;
  align-self: center;
}
.search {
  
  height: 0.3rem;
  width: 2.8rem;
  background: #ccc;

  line-height: 0.3rem;
}
.search span {

  padding-left: 0.12rem;
  padding-right: 0.08rem;
  font-size: 0.16rem;
  
  float: left;
}
.clssifyCon{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 0.5rem;
  height: 0.5rem;

}
.clssifyCon .classify {
  font-size: 0.24rem;
  align-self: center;
}
.clssifyCon .txt{
    font-size: 10px;
    align-self: center;
}
</style>
