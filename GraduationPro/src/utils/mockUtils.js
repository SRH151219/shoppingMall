//处理请求路径

// 引入node的核心模块
const qs = require("querystring");

  const pathParams = (url)=>{
    // 将请求路径以？切割为数组,并获取？后面的元素
    let str = url.split("?")[1];

    //将字符串转为对象
    return qs.parse(str);

}

export default pathParams; 