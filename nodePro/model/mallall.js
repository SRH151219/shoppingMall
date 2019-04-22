//导入数据库
const db = require("../utils/database");

//定义数据类型,banner为表名,会自动加s
const Banner = db.model("banner",{
    url:String,
    name:String,
    class:String
})

//查
const findMallall = (cb)=>{
    // console.log(info)
    Banner.find().then((data)=>{//是查找一条数据，data为查到的数据
        cb(data);
    })
}

//导出
module.exports = {
    findMallall
}