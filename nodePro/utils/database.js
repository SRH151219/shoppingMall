//引入数据库
const mongoose = require("mongoose");
//数据库地址
const url = "mongodb://127.0.0.1/graduationPro"//数据库中如果有graduationPro数据库，则直接进行连接，如果不存在，则创建并连接
//连接数据库
mongoose.connect(url,{useNewUrlParser:true});
//导出数据库
module.exports = mongoose;