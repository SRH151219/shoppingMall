//导入数据库
const db = require("../utils/database");

//定义数据类型,user为表名,会自动加s
const User = db.model("user",{
    userName:String,
    userPwd:String,
    userSex:String,
    userImg:String
})

//增
//参数1：对象，key:value
//参数2：cb 回调
//方法，当调用该方法时，必须传递两个参数
const addUser = (userInfo,cb)=>{
    const user = new User({
        userName : userInfo.userName,
        userPwd:userInfo.userPwd,
        userSex:userInfo.userSex
    })
    user.save().then(()=>{
        cb()
    })
}

//查
const findUser = (userInfo,cb)=>{
    User.findOne({userName:userInfo.userName}).then((data)=>{//是查找一条数据，data为查到的数据
        cb(data);
    })
}

// 


//导出
module.exports = {
    addUser,
    findUser
}