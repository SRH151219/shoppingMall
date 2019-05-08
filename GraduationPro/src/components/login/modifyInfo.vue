<template>
  <div class="modify">
    <div class="head">
      <div class="back iconfont iconIcon-fanhui" @click="handleBack"></div>
      <p>修改资料</p>
    </div>
    <div class="con">
      <div class="conBox">
        <p>
          <span>头像 :</span>
          <input type="file" class="inputCss imgFile" ref="imgFile" accept="image/*" id="file" value="" @change="handleImgChange()" />

        </p>

        <img :src="headFile" id="headimg" alt="">

      </div>
      <!-- 用户名 -->
      <div class="conBox">
        <p class="warn"> {{nameWarn}}</p>
        <p>
          <span>昵称 :</span>
          <input class="txt inputCss" type="text" placeholder="请输入昵称" v-model="userName">

        </p>

      </div>
      <div class="conBox">
        <p class="warn"> {{sexWarn}}</p>
        <p>
          <span>性别 :</span>
          <input class="sex inputCss" type="text" placeholder="请输入性别" v-model="userSex">
        </p>

      </div>
      <div class="conBox">
        <p class="warn"> {{newPwdWarn}}</p>
        <p>
          <span>新密码 :</span>
          <input class="pwd inputCss" type="password" placeholder="请输入新密码" v-model="userNewPwd">
        </p>

      </div>

      <!-- 确认密码 -->
      <div class="conBox">
        <p class="warn"> {{newPwdWarn2}}</p>
        <p>
          <span>确认新密码 :</span>
          <input class="pwd inputCss" type="password" placeholder="请确认新密码" v-model="userNewPwd2">
        </p>

      </div>

      <p class="conBox btn">
        <button @click="ModifyUserInfo">确认修改</button>
      </p>
    </div>

  </div>
</template>

<script>
import Vuex from "vuex";
import axios from "axios";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      userName: "",
      userSex: "",
      userOldPwd: "",
      userNewPwd: "",
      userNewPwd2: "",
      headFile: "",
      nameWarn: "",
      sexWarn: "",
      oldPwdWarn: "",
      newPwdWarn: "",
      newPwdWarn2: ""
    };
  },
  methods: {
    //my仓库
    ...Vuex.mapActions({
      //保存用户信息
      getUserInfo: "my/getUserInfo"
    }),
    //点击返回按钮
    handleBack() {
      this.$router.back();
    },

    //头像,读取本地文件，并显示本地文件
    handleImgChange() {
      var img = this.$refs.imgFile;
      //图片路径
      var imgFile = img.files[0];
      console.log(imgFile);
      //html5提供的FileReader读取到文件中的数据,
      //首先创建一个FileReader实例
      var reader = new FileReader();
      //图片文件转换为base64
      reader.readAsDataURL(imgFile);
      //记录vue的this
      var vueThis = this;
      reader.onload = function() {
        //读取完成后，数据保存在对象的result属性中
        // console.log(this.result);
        //此时的this指向reader，所以要在该函数外部记录vue的this
        vueThis.headFile = this.result;
      };
    },

    //确认修改资料
    ModifyUserInfo() {
      //-----------------------------------------前端校验---------------------------
      //用户名： 2-20个 中文、英文、数字但不包括下划线等符号
      var reg1 = /^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/;
      //  密码：密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
      var reg2 = /^[a-zA-Z]\w{5,17}$/;

      //昵称校验
      if (this.userName == "") {
        this.nameWarn = "用户名不能为空";
      } else if (!reg1.test(this.userName)) {
        this.nameWarn = "请输入2~10个中文/英文/数字";
      }
      //性别校验
      if(this.userSex != "女" || this.userSex != "男"){
        this.sexWarn = "性别必须为 '男' 或者 '女'";
      }else{
        this.sexWarn = "";
      }

      //新密码校验
      if (this.userNewPwd == "") {
        this.newPwdWarn = "密码不能为空";
      } else if (this.userNewPwd.length < 6 || this.userNewPwd.length > 20) {
        this.newPwdWarn = "密码长度为 6 ~ 20 个字符";
      } else if (!reg2.test(this.userNewPwd)) {
        this.newPwdWarn = "以字母开头，只包含字母/数字/下划线";
      }

      //确认密码校验
      if (this.userNewPwd !== this.userNewPwd2) {
        this.newPwdWarn2 = "密码有误";
      }

      if (
        reg1.test(this.userName)&&
        reg2.test(this.userNewPwd) &&
        this.userNewPwd == this.userNewPwd2
      ) {
        //图片路径
        var img = this.$refs.imgFile;
        var imgFile = img.files[0];
        //2.获取数据
        var userOldName = Cookies.get("userName");
        //3.将输入加入到formdata
        var formData = new FormData();
        formData.append("userOldName", userOldName);
        formData.append("userName", this.userName);
        formData.append("userSex", this.userSex);
        formData.append("userOldPwd", this.userOldPwd);
        formData.append("userNewPwd", this.userNewPwd);
        formData.append("userNewPwd2", this.userNewPwd2);
        // 头像
        formData.append("userImg", imgFile);

        console.log(formData.get("userName"));


        //3.将数据传到后端
        axios({
          method: "post",
          url: "/api/users/modifyUserInfo",
          data: formData,
          // data:"你好",

          // 必须设置请求头 multipart/form-data
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }).then(data => {
          console.log(data);
          //修改成功
          if (data.data.status) {
            //将用户名保存到cookie中
            Cookies.set("userName", this.userName);
            this.getUserInfo(this.userName);
            //页面跳转
            this.$router.push("/loginSet")
          }
        });
      }
      // console.log(this.userName, this.userSex);
    }
  },
  computed: {
    ...Vuex.mapState({
      userInfo: state => state.my.userInfo
    })
  },
  mounted() {
    //将vuex中state中的数据赋给data，以便于实现输入框的数据双向绑定。
    this.userName = this.userInfo.userName;
    this.userSex = this.userInfo.userSex;
    this.headFile = this.userInfo.userImg;
  }
};
</script>

<style scoped>
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

.con {
  width: 100%;
  padding: 4px 10px;
  margin-top: 0.6rem;
}
.conBox {
  width: 100%;
  height: 0.5rem;
  font-size: 16px;
  /* margin-bottom: 10px; */
  border-bottom: 1px solid #ccc;
}
.conBox span {
  display: inline-block;
  width: 0.9rem;
  /* height: 0.5rem; */
  /* line-height: 0.5rem; */
  text-align: center;
  /* background: linen; */
}
.conBox .inputCss {
  width: 2rem;
  /* height: 0.5rem; */
  border: 0;
  outline: none;
  background: 0;
  font-size: 16px;
  text-align: center;
}
.btn {
  margin-top: 0.5rem;
}
button {
  width: 100%;
  height: 0.5rem;
  border-radius: 4px;
  border: 0;
  font-size: 16px;
}

/* 上传头像 */
.imgFile {
  width: 100%;
  height: 1rem;
  background: #ccc;
  margin: 0;
  padding: 0;
}

#headimg {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  position: absolute;
  top: 0.6rem;
  left: 1.4rem;
}

.warn {
  display: block;
  font-size: 14px;
  width: 100%;
  text-align: center;
  color: red;
  /* background: #ccc; */
  height: 25px;
  line-height: 25px;
}
</style>

