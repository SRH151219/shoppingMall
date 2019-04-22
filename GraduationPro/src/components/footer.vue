<template>
    <div id="footer" >
        <ul>
            <li v-for="(item,index) in nav">
                <router-link :to="name[index]">
                    <span :class="icon[index]"></span>
                    <b>{{item}}</b>
                </router-link>
            </li>
        </ul>

    </div>
</template>

<script>
export default {
  data() {
    return {
      nav: ["商城", "分类", "购物车", "我的"],
      name: ["mall", "classification", "shoppingCar", "my"],
      icon: [
        "iconfont iconshangcheng",
        "iconfont iconfenlei",
        "iconfont icongouwuche",
        "iconfont iconwode"
      ],
      footerStatus: false
    };
  },
  methods: {}
};
</script>

<style  scoped>
#footer {
  width: 100%;
  /* height: 1rem; */
  height: .5rem;
  background: #fff;
  position: absolute;
  left: 0;
  bottom: 0;
}
ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
li {
  flex: 1;
}
a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  color: #333;
}
.router-link-active {
  background: #c33;
  /* color: yellow; */
}
.router-link-active span {
  color: yellow;
}

span {
  font-size: 22px;
  margin-bottom: 3px;
}
b {
  font-size: 12px;
}
</style>


