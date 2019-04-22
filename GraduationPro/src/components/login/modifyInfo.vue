<template>
    <div class="modify">
        <div class="head">
            <div class="back iconfont iconIcon-fanhui" @click="handleBack"></div>
            <p>修改资料</p>
        </div>
        <div class="con">
            <!-- 用户名 -->
            <p class="conBox">
                <span>昵称 :</span>
                <input class="txt" type="text" placeholder="请输入昵称">

            </p>
            <!-- 密码 -->
            <p class="conBox">
                <span>密码 :</span>
                <input class="pwd" type="password" placeholder="密码">

            </p>
            <!-- 确认密码 -->
            <p class="conBox">
                <span>确认密码 :</span>
                <input class="pwd" type="password" placeholder="确认密码">
            </p>
            <p class="conBox btn"> 
                <button>确认修改</button>
            </p>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        //点击返回按钮
        handleBack(){
            this.$router.back();
        }
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
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.conBox span {
  display: inline-block;
  width: 0.8rem;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  /* background: linen; */
}
.conBox input {
  width: 2rem;
  height: 0.5rem;
  border: 0;
  outline: none;
  background: 0;
  font-size: 14px;
  text-align: center;
}
.btn{
    margin-top: .5rem;
}
button {
  width: 100%;
  height: .5rem;
  border-radius: 4px;
  border: 0;
  font-size: 16px;
}
</style>
