<template>
  <div id="set">
    <div class="head">
      <div class="back iconfont iconIcon-fanhui" @click="handleBack"></div>
      <p>账户设置</p>
    </div>
    <div class="con">
      <p>
        <span class="sp">头像</span>
        <b class="cen">
          <img :src="userInfo.userImg" alt="">
        </b>

      </p>
      <p>
        <span class="sp">昵称</span>
        <b class="cen">{{userInfo.userName}}</b>

      </p>
      <p>
        <span class="sp">性别</span>
        <b class="cen">{{userInfo.userSex}}</b>

      </p>

    </div>

    <div class="con2">
      <p>
        <span class="sp">登录密码</span>
        <b class="cen"></b>

      </p>

      <p>
        <span></span>
        <b class="sp">修改地址</b>

      </p>
    </div>
    <div class="con3 modify">
      <button @click="handleModify">修改基本资料</button>
    </div>
    <div class="con3">
      <el-button type="text" @click="open2" class="btn">退出登录</el-button>
    </div>
  </div>

</template>

<script>
import Cookies from "js-cookie";
import Vuex from "vuex";
export default {
  data() {
    return {
      visible2: false
    };
  },
  created() {
    this.obverser.$emit("changeState5");
  },
  destroyed() {
    this.obverser.$emit("changeState6");
  },
  methods: {
    //返回
    handleBack() {
      this.$router.back();
    },
    //点击退出
    open2() {
      this.$confirm("确认退出当前用户吗？", "温馨提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(() => {
          //点击确定执行
          Cookies.remove("token");
          this.$router.push("/mall");
        })
        .catch(() => {
          //点击取消执行
        });
    },
    //点击修改资料
    handleModify() {
      this.$router.push("/modifyInfo");
    }
  },
  computed: {
    ...Vuex.mapState({
      userInfo: state => state.my.userInfo
    })
  },
  mounted(){
    // console.log(this.userInfo);
  }
};
</script>

<style scoped>
#set {
  width: 100%;
  height: 100%;
  background: #fff;
  font-size: 16px;
}
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
.con,
.con2,
.con3 {
  padding: 4px 10px;
  /* background: blue; */
}
.con {
  margin-top: 10px;
  margin-bottom: 15px;
}
.con2 {
  margin-bottom: 0.5rem;
}
.con3 {
  width: 100%;
  height: 0.5rem;
}
.con p,
.con2 p,
.con3 p {
  width: 100%;
  height: 0.5rem;
  border: 1px solid #f2f2f2;
}
.sp {
  display: inline-block;
  width: 1rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: left;
  font-size: 16px;
  padding-left: 15px;
  /* background: red; */
}
.go {
  /* display: inline-block; */
  width: 0.5rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 16px;
  float: right;
  /* background: yellow; */
}
.cen {
  width: 2rem;

  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-size: 16px;
  float: right;
}
.cen img {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  margin: 0 auto;
}

.modify {
  margin-bottom: 10px;
}
.modify button {
  width: 100%;
  height: 0.5rem;
  font-size: 16px;
  border: 0;
  border-radius: 4px;
  color: #fff;
  background: #333;
}
</style>
<style>
.con3 > .el-button {
  width: 100%;
  height: 0.5rem;
  background: #333;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
/*温馨提示*/
.el-message-box__wrapper
  .el-message-box
  .el-message-box__header
  .el-message-box__title {
  font-size: 16px;
  text-align: center;
  font-weight: bolder;
}
/* 提示内容 */
.el-message-box__wrapper
  .el-message-box
  .el-message-box__content
  .el-message-box__message
  p {
  font-size: 16px;
  color: #000;
  margin-top: 10px;
  line-height: 0.3rem;
  text-align: center;
}
/* 确认，取消按钮 */
.con3.el-message-box__wrapper .el-message-box .el-message-box__btns {
  text-align: center;
}
.el-message-box__wrapper
  .el-message-box
  .el-message-box__btns
  .el-button--small {
  font-size: 16px;
  margin-top: 0.35rem;
  margin-right: 10px;
}
/* 提示框宽度 */
.el-message-box {
  width: 300px;
}
</style>

