<template>
    <div id="index">
        <div class="head">
            <div class="set">
                <span @click="handleGoSet">设置</span>
            </div>
            <div class="con">
                <div class="pic">
                    <img :src="userInfo.userImg" alt="">
                </div>
                <div class="info">
                    <p>昵称:
                        <span>{{userInfo.userName}}</span>
                    </p>
                    <p>性别:
                        <span>{{userInfo.userSex}}</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="two">
                <ul>
                    <li>
                        <span>115</span>
                        <b>收藏夹</b>
                    </li>
                    <li>
                        <span>72</span>
                        <b>关注店铺</b>
                    </li>
                    <li>
                        <span>774</span>
                        <b>足迹</b>
                    </li>
                    <li>
                        <span>15</span>
                        <b>红包卡券</b>
                    </li>
                </ul>
            </div>
            <div class="content">
                <div class="one">
                    <p>我的订单</p>
                    <p>查看全部订单&gt;</p>
                </div>
                <ul>
                    <li>
                        <span class="iconfont iconicon"></span>
                        <b>待付款</b>
                    </li>
                    <li>
                        <span class="iconfont icondaifahuo1"></span>
                        <b>代发货</b>
                    </li>
                    <li>
                        <span class="iconfont icondaifahuo
"></span>
                        <b>待收货</b>
                    </li>
                    <li>
                        <span class="iconfont iconicon-test"></span>
                        <b>待付款</b>
                    </li>
                    <li>
                        <span class="iconfont iconpingjia
"></span>
                        <b>评价</b>
                    </li>
                    <li>
                        <span class="iconfont iconrefund"></span>
                        <b>退款/售后</b>
                    </li>
                </ul>
            </div>
            <div class="guss">
                <div class="name">
                    猜你喜欢：
                </div>
                <div class="con">
                    还没有数据哦
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import Vuex from "vuex";
import Cookies from "js-cookie";
export default {
  created() {
    var userName = Cookies.get("userName");
      console.log(userName);
    this.getUserInfo(userName);
  },
  methods: {
    //点击设置
    handleGoSet() {
      this.$router.push("/loginSet");
    },
    //my仓库
    ...Vuex.mapActions({
      //保存用户信息
      getUserInfo: "my/getUserInfo"
    })
  },
  computed: {
    ...Vuex.mapState({
      userInfo: state => state.my.userInfo
    })
  },
  mounted() {
    console.log(this.userInfo);
  }
};
</script>

<style scoped>
#index {
  width: 100%;
  height: 100%;
  padding-bottom: 0.5rem;
  background: rgba(200, 200, 200, 0.2);
  overflow: hidden;
  font-size: 16px;
  overflow: scroll;
}
.head {
  width: 100%;
  height: 1.8rem;
  padding: 0 14px;
  background: linear-gradient(-90deg, #fa4dbe, #fbaa58);
}
.head .set {
  width: 100%;
  height: 0.5rem;
}
.head .set span {
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 16px;
  text-align: center;
  background: rgba(255, 174, 174, 0.2);
  border-radius: 5px;
  float: right;
}
.pic {
  width: 0.8rem;    
  height: 0.8rem;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  background: #fff;
  float: left;
}
.pic img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
}
.info {
  float: left;
  /* background: #ccc; */
  width: 2rem;
  height: 1rem;
  padding: 20px 10px;
}
.info p {
  font-size: 16px;
  width: 100%;
  text-align: left;
  padding: 0 0 10px 30px;
  color: #333;
  line-height: 20px;
}
.info p span {
  color: #fff;
  font-weight: 900;
  padding-left: 10px;
}
.bottom {
  padding: 0 15px;
}
.two {
  font-size: 16px;
  /* background: #fff; */
  background: linear-gradient(-90deg, #fa4dbe, #fbaa58);
  border-radius: 10px;
  margin-top: -20px;
  padding: 10px 15px;
}
.two ul {
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-weight: 700;
}
.two ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.two ul li b {
  padding-top: 10px;
}

.content {
  font-size: 16px;
  border-radius: 20px;
  /* padding: 0 15px; */
  background: #fff;
  /* background:linear-gradient(-90deg, #fa4dbe, #fbaa58); */

  margin-top: 10px;
}
.content .one {
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(221, 214, 214);
}
.content .one p:nth-of-type(1) {
  font-size: 18px;
  font-weight: 900;
  color: #000;
}
.content ul {
  display: flex;
  justify-content: space-between;
  padding: 15px;
}
.content ul li {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content ul li span {
  font-size: 24px;
  color: #c33;
}
.content ul li b {
  font-size: 14px;
  padding-top: 10px;
  color: #333;
}

.guss {
  padding: 0 15px;
  font-size: 16px;
  border-radius: 10px;
  /* padding: 0 15px; */
  background: #fff;
  margin-top: 10px;
}
.guss .name {
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(221, 214, 214);
  font-weight: 600;
  font-size: 18px;
}
.guss .con {
  height: 3rem;
  width: 100%;
  background: rgba(250, 245, 245, 0.3);
  font-size: 0.3rem;
  text-align: center;
  line-height: 3rem;
  color: #c33;
  writing-mode: tb-rl;
  letter-spacing: 10px;
}
</style>
