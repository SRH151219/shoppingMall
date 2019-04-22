import axios from "axios";
import qs from "qs";
//引入自己设置的cookie
import {getCookie} from "../utils/Auth";

const server = axios.create({
  //项目ip地址
//   baseURL: "",
  timeout: 5000,
  //可以在请求的时候，携带cookie发送到服务器
//   widthCredentials:true
})

//请求拦截
server.interceptors.request.use((config) => {
  if (config.method == "post") {
    config.data = qs.stringify(config.data);
  } else if (config.method == 'get') {
    config.params = {
      ...config.params
    };
  }
  //设置请求头
  config.headers["Content-type"] = "application/x-www-form-urlencoded";
  //每次请求都要带上token,客户端token与服务端进行对比
  //通过headers将cookie传给后端
  config.headers["X-Token"] = getCookie;

  return config;
},(err)=>{
    //请求发生错误
    return Promise.reject(err);

})
//响应拦截
server.interceptors.response.use((res)=>{
    if(res.status == 200){
        return res.data;
    } 
},(err)=>{
    return Promise.reject(err);
})

//导出
export default server;