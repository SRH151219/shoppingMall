//引入model层
const userModel = require("../model/user");

//引入加密模块（node的核心模块）
const crypto = require('crypto');

//-------------------------------------------注册-----------------------------------------------------------
const register = (req, res) => {
    //req.body接收前端传来的值
    const {
        userName,
        userPwd,
        userSex
    } = req.body;
    // console.log(req.body);
    // console.log(userName, userPwd)
    //查
    userModel.findUser({
        userName
    }, (data) => {
        if (data) {
            res.json({
                info: "用户名重复",
                status: false
            })
        } else {
            //创建加密的方法
            const hash = crypto.createHash("sha256");
            //对数据进行加密
            hash.update(userPwd);
            //加密后的值(将password与字符串hex一起加密)
            // console.log(hash.digest("hex"));
            //增
            userModel.addUser({
                userName,
                userPwd: hash.digest("hello"),
                userSex: userSex,
                userImg: "http://localhost:5000/img/1556958011325-banner1.jpg"
            }, () => {
                res.json({
                    info: "注册成功",
                    status: true
                })
            })
        }
    })


}
//---------------------------------登录---------------------------------------
const login = (req, res) => {
    //req.body接收前端传来的值
    const {
        userName,
        userPwd
    } = req.body;
    // console.log(req.body);
    // console.log(userName, userPwd)
    //查
    userModel.findUser({
        userName
    }, (data) => {
        if (data) {
            //创建加密算法
            const hash = crypto.createHash("sha256");
            //对password进行加密
            hash.update(userPwd);
            if (data.userPwd == hash.digest("hello")) {
                //用户名和密码都正确，将当前用户的用户名存储在session中
                // req.session.user = username;
                //-----------创建token-----------------
                //1.引入
                var JWT = require("jsonwebtoken");
                //2.负载信息
                let payload = {
                    user: "sun"
                }
                //3.密钥
                let secret = "1234";
                //生成token
                let token = JWT.sign(payload, secret, {
                    expiresIn: "1h"
                });
                //将token保存在cookie种
                res.cookie("token", token)

                res.json({
                    info: "登录成功",
                    status: 1
                })
            } else {
                res.json({
                    info: "密码不正确",
                    status: 2
                })
            }
        } else {
            res.json({
                info: "用户名不存在",
                status: 3
            })
        }
    })

}
//-------------------------登录成功，获取用户信息----------------------------
const getUserInfo = (req, res) => {
    //req.body接收前端传来的值
    // console.log(req.body);
    const {
        userName,
    } = req.body;
    // console.log(req.body);
    // console.log(userName, userPwd)
    //查
    userModel.findUser({
        userName
    }, (data) => {
        console.log(data);
        res.json({
            data: data,
            status: 1
        })
    })

}

//--------------------------修改用户信息-------------------------------------------

const modifyUserInfo = (req, res) => {
    // console.log( req.body);
    // console.log(req.files)
    // //req.body接收前端传来的值
    const {
        userOldName,
        userName,
        userSex,
        userOldPwd,
        userNewPwd,
        userNewPwd2
    } = req.body;
    console.log(userName);
    //要将图片的路径存储为一下格式，才能在浏览器中正确显示
    //http://localhost:3000/img/1546663402424-1.jpg

    //获取前端传来的大图的路径  public\\img\\1555292319052-back.png'
    var headImgUrl = req.files.userImg[0].path
    //将数据的格式修改为http://localhost:5000/img/1546663402424-1.jpg
    headImgUrl = headImgUrl.replace(/\\/g, "/");
    headImgUrl = headImgUrl.replace("public/", "");
    headImgUrl = "http://localhost:5000/" + headImgUrl;



    //创建加密的方法
    const hash = crypto.createHash("sha256");
    //对数据进行加密
    hash.update(userNewPwd2);
    //修改数据
    userModel.modifyUserInfo({
        userOldName,
        userName,
        userSex,
        userNewPwd2: hash.digest("hello"),
        headImgUrl
    }, (data) => {
        console.log("哈哈" + data);
        //查找到的数据
        res.json({
            data: data,
            status: 1
        })
    })

}

module.exports = {
    register,
    login,
    getUserInfo,
    modifyUserInfo
}