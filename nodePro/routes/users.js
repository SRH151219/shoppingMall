var express = require('express');
var router = express.Router();
//引入controller
var userController = require("../controller/user");

//引入multer
var multer = require("multer");
//设置传递到服务器图片的路径
var storage = multer.diskStorage({
    //处理图片路径
    destination: function (req, file, cb) {
        //路径必须写对（根据项目根目录来写的路径，不是根据当前文件）
        cb(null, './public/img')
    },
    //设置文件夹中图片文件的名称
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) //时间戳，防止图片路径被覆盖
    }
})
//内存存储引擎
var upload = multer({
    storage: storage
})

//名字必须写对，限制文件上传的个数
var cpUpload = upload.fields([{
    //goodsMaxImg为前端通过ajax传给ajax的key值
    name: 'userImg',
    //限制文件上传的个数
    maxCount: 1
}, ])

//修改用户信息 cpUpload会让后端先处理图片
router.post("/modifyUserInfo", cpUpload, userController.modifyUserInfo);

// var bannerControler = require("../controller/banner");
//当路径为/register时，执行增 业务逻辑
router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/getUserInfo", userController.getUserInfo);


module.exports = router;