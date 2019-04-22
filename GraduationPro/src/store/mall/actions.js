import axios from "axios";
export default{
    getAllData({commit,state}){
        //获取商城banner，buy，get,hot,select,tab数据
        axios({
            method: "get",
            url: "/api/all/mallall",
            responseType: "json"
        }).then(data => {
        // console.log(data);
            commit("getAllData",data)
        });
    }
}
