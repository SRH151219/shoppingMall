var express = require('express');
var router = express.Router();
//引入controller
var goodsController = require("../../controller/goodsManage/goods.js");

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
    name: 'bigImg',
    //限制文件上传的个数
    maxCount: 1
}, {
    //goodsMaxImg为前端通过ajax传给ajax的key值
    name: 'smallImgs',
    //限制文件上传的个数 
    maxCount: 8
}])

//商品接口
//cpUpload会让后端先处理图片
router.post("/addGoods",cpUpload, goodsController.addGoods);
// router.post("/addGoods", goodsController.addGoods);

//查询商品接口
router.post("/getGoods", goodsController.findGoods);

//商品详情接口
router.post("/getGoodsDetails",goodsController.findGoodsDetails);

module.exports = router;