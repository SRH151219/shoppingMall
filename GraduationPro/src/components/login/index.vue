<template>
  <div id="login">
    <div class="back iconfont iconIcon-fanhui
" @click="handleBack"></div>
    <div class="con">
      <p>登录</p>
      <p class="warn">{{nameWarn}}</p>
      <p class="user u">
        <label for="txt">用户名：</label>
        <input type="text" id="txt" v-model="userName">
      </p>
      <p class="warn">{{pwdWarn}}</p>
      <p class="user pwd">
        <label for="pwd">密码:</label>
        <input type="password" v-model="userPwd">
      </p>

      <p class="btn">

        <button @click="handleLogin">登录</button>
        <button @click="handleRegister">注册</button>
      </p>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import Vuex from "vuex";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      userName: "",
      userPwd: "",
      nameWarn: "",
      pwdWarn: ""
    };
  },
  created() {
    this.obverser.$emit("changeState3");
  },
  destroyed() {
    this.obverser.$emit("changeState4");
  },
  methods: {
    //   返回按钮
    handleBack: function() {
      this.$router.back();
    },
    //登录按钮
    handleLogin: function() {
      // console.log(this.userName, this.userPwd);
      //-----------------------------------------前端校验---------------------------

      //用户名： 2-20个 中文、英文、数字但不包括下划线等符号
      var reg1 = /^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/;
      //  密码：密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
      var reg2 = /^[a-zA-Z]\w{5,17}$/;

      if (this.userName == "") {
        this.nameWarn = "用户名不能为空";
      } else if (!reg1.test(this.userName)) {
        this.nameWarn = "请输入2~10个中文/英文/数字";
      }

      if (this.userPwd == "") {
        this.pwdWarn = "密码不能为空";
      } else if (this.userPwd.length < 6 || this.userPwd.length > 20) {
        this.pwdWarn = "密码长度为 6 ~ 20 个字符";
      } else if(!reg2.test(this.userPwd)){
        this.pwdWarn = "以字母开头，只包含字母/数字/下划线";
      }

      if (reg1.test(this.userName) && reg2.test(this.userPwd)) {
        axios({
          method: "post",
          url: "/api/users/login",
          data: {
            userName: this.userName,
            userPwd: this.userPwd,
          },
          responseType: "json"
        }).then(data => {
          if (data.data.status == 1) {
            //如果登录成功，将用户名放到仓库
            // this.getUserInfo(this.userName);
            //如果登录成功，将用户名放到cookies中
            Cookies.set("userName",this.userName);
            //登陆成功后，路径跳转
            this.$router.push("/mall");
          } else if (data.data.status == 2) {
            this.pwdWarn = data.data.info;
          } else if (data.data.status == 3) {
            this.nameWarn = data.data.info;
          }
        });
      }
    },
    //点击注册按钮
    handleRegister() {
      this.$router.push("/register");
    },
    //my仓库
    // ...Vuex.mapActions({
    //   //保存用户信息
    //   getUserInfo:"my/getUserInfo"
    // })

  },
  
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  background: url("../../../static/images/registerBg.jpg") no-repeat;
  background-size: 100% 100%;
}
.back {
  width: 0.5rem;
  height: 0.5rem;
  color: #fff;
  text-align: center;
  line-height: 0.5rem;
  font-size: 32px;
}
.con {
  width: 90%;
  height: 3.38rem;
  padding: 15px;
  /* background: pink; */
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  font-size: 16px;
}
.con > p:nth-of-type(1) {
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #fff;
  letter-spacing: 0;
  line-height: 80px;
  text-align: left;
  line-height: 24px;
  margin-bottom: 30px;
}
.user label {
  font-size: 16px;
  color: #fff;
  text-align: left;
  height: 0.4rem;
  line-height: 0.4rem;
  /* background: orange; */
}
.user input {
  width: 75%;
  height: 0.4rem;
  border: 0;
  border-bottom: 2px solid #ccc;
  background: 0;
  text-align: center;
  line-height: 0.4rem;
  outline: none;
  font-size: 20px;
}
.pwd input {
  margin-left: 25px;
}
.warn {
  text-align: center;
  height: 0.3rem;
  line-height: 0.3rem;
  color: red;
}

.btn {
  margin-top: 0.5rem;
  width: 100%;
  height: 0.4rem;
}
.btn button:nth-of-type(1) {
  width: 70%;
  height: 0.4rem;
  text-align: center;
  color: #fff;
  background: #ffc700;
  line-height: 0.4rem;
  font-size: 16px;
  border-radius: 4px;
  border: 0;
  outline: none;
}
.btn button:nth-of-type(2) {
  width: 0.77rem;
  height: 0.4rem;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  line-height: 0.4rem;
  margin-left: 10px;
  border-radius: 4px;
  font-size: 14px;
  border: 0;
  outline: none;
}
</style>
