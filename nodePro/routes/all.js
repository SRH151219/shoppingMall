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
var mallallController = require("../controller/mallall");
//当路径为/register时，执行增 业务逻辑
// router.post("/banner",bannerControler.banner);
router.get("/mallall",mallallController.mallall);

module.exports = router;