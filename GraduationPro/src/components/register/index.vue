<template>
  <div id="register">
    <div class="back iconfont iconIcon-fanhui
" @click="handleBack"></div>
    <div class="con">
      <p>用户注册</p>
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
        <button @click="handleRegister">注册</button>
      </p>
      <p class="btnLogin">
        <button @click="handleLogin">已注册，去登录</button>
      </p>
    </div>

  </div>
</template>

<script>
// import axios from "axios";
import axios from "axios";
export default {
  data() {
    return {
      // v-model数据双向绑定
      userName: "",
      userPwd: "",
      nameWarn: "",
      pwdWarn: ""
    };
  },
  created() {
    // console.log(this);
    this.obverser.$emit("changeState");
  },
  destroyed() {
    this.obverser.$emit("changeState2");
  },
  methods: {
    //   返回按钮
    handleBack: function() {
      this.$router.back();
    },
    //注册按钮
    handleRegister: function() {
      // console.log(this.userName,this.userPwd)

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
        // console.log("验证");
        axios({
          method: "post",
          url: "/api/users/register",
          data: {
            userName: this.userName,
            userPwd: this.userPwd,
            // 默认性别为女
            userSex: "女"
          },
          responseType: "json"
        }).then(data => {
          console.log(data.data);
          if (data.data.status) {
            // 注册成功，跳转到登录
            this.$router.push("/login");
          } else {
            this.nameWarn = data.data.info;
          }
        });
      }
    },
    handleLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
#register {
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
  margin-bottom: 18px;
}
.btn button {
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
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.btnLogin button {
  width: 70%;
  height: 0.4rem;
  text-align: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.6);
  line-height: 0.4rem;
  font-size: 16px;
  border-radius: 4px;
  border: 0;
  outline: none;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
}
</style>
