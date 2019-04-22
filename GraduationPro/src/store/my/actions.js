import axios from "axios";
export default{
    // 获取用户信息
    getUserInfo({commit,state},params){
        // console.log(params);
        // commit("getUserInfo",params)
        axios({
            method:"post",
            url:"/api/users/getUserInfo",
            data:{
                userName:params
            }
        }).then((data)=>{
            // console.log(data);
            commit("getUserInfo",data.data.data)
        })
    }
}
