// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

var express = require('express');
var router = express.Router();

//引入controller
var userController = require("../controller/user");
// var bannerControler = require("../controller/banner");
//当路径为/register时，执行增 业务逻辑
router.post("/register",userController.register);
router.post("/login",userController.login);
router.post("/getUserInfo",userController.getUserInfo);

// router.post("/banner",bannerControler.banner);

module.exports = router;