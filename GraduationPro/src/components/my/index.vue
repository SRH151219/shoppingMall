<template>
    <div id="index">
        <div class="head">
            <div class="set">
                <span @click="handleGoSet">设置</span>
            </div>
            <div class="con">
                <div class="pic"></div>
                <div class="info">
                    <p>{{userInfo.userName}}</p>
                    <p>{{userInfo.userSex}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vuex from "vuex";
export default {
  created() {
      return{

      }
  },
  methods: {
      //点击设置
      handleGoSet(){
          this.$router.push("/loginSet");
      }
  },
  computed:{
    ...Vuex.mapState({
      userInfo:state => state.my.userInfo
    })
  },
//   mounted(){
//       console.log(this.userInfo);
//   }
};
</script>

<style scoped>
#index {
  width: 100%;
  height: 100%;
  padding-bottom: 0.5rem;
  background: lightcyan;
  overflow: hidden;
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
  background: #ccc;
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
.info{
    float: left;
    /* background: #ccc; */
    width: 2rem;
    height: 1rem;
    padding: 20px 10px;
}
.info p{
    font-size: 16px;
    width: 100%;
    text-align: center;
    padding: 0 0 10px 0;
}
</style>
