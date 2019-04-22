//导入model
const goodsModel = require("../../model/goodsManage/goods.js");

const addGoods = function (req, res) {
    //接收数据
    //凡是数据的信息，用req.body接收
    //凡是表单图片的信息，用req.files接收
    // console.log(req);
    // console.log(req.body);
    // console.log(req.files); //是一个对象，{goodsMaxImg:[{}],goodsMinImg:[{},{},{}]}

    //获取前端传来的信息
    const {
        name,
        desc,
        price1,
        price2,
        region,
        data1
    } = req.body;

    //要将图片的路径存储为一下格式，才能在浏览器中正确显示
    //http://localhost:3000/img/1546663402424-1.jpg

    //获取前端传来的大图的路径  public\\img\\1555292319052-back.png'
    var bigImgUrl = req.files.bigImg[0].path;


    //将数据的格式修改为http://localhost:5000/img/1546663402424-1.jpg
    bigImgUrl = bigImgUrl.replace(/\\/g, "/");
    bigImgUrl = bigImgUrl.replace("public/", "");
    bigImgUrl = "http://localhost:5000/" + bigImgUrl;

    var arr = [];
    //获取前端传来的小图的路径
    for (var i = 0, len = req.files.smallImgs.length; i < len; i++) {
        var smallImgUrl = req.files.smallImgs[i].path;
        //将数据的格式修改为http://localhost:3000/img/1546663402424-1.jpg
        smallImgUrl = smallImgUrl.replace(/\\/g, "/");
        smallImgUrl = smallImgUrl.replace("public/", "");
        smallImgUrl = "http://localhost:5000/" + smallImgUrl
        arr.push(smallImgUrl);
    }

    //将数据传到数据库
    goodsModel.addGoods({
        name,
        desc,
        price1,
        price2,
        region,
        data1,
        bigImgUrl,
        smallImgsUrl: arr
    }, () => {
        res.json({
            info: "添加成功",
            status: true
        })
    })
}
//查找所有商品
const findGoods = (req, res) => {
    //获取前端传来的商品类型,限制返回的条数
    // console.log(req.body);
    let {
        typePage,
        limit
    } = req.body
    var page = typePage.page;
    var type = typePage.type
    goodsModel.findGoods((data) => {
        // console.log(data);
        var goodsNum = 0;
        var datalist = [];
        if (type == "推荐") {
            //数据的长度
            goodsNum = data.length;
            // console.log(goodsNum);
            // 筛选 page 所对应的 limit 条数据
            datalist = data.filter(function (item, index) {
                return index >= (page - 1) * limit && index < page * limit;
            })
        } else {
            datalist = data.filter(function (item, index) {
                return item.goodsClass == type
            })
            goodsNum = datalist.length;
        }
        res.json({
            data: [datalist, goodsNum, type],
            status: true
        })

    })
}
//获取某条商品信息（商品详情）
//查找所有商品
const findGoodsDetails = (req, res) => {
    //获取前端传来的商品类型,限制返回的条数
    // console.log(req.body);
    let {
        id
    } = req.body
    // console.log(id)
    goodsModel.findGoodsDetails(id, (data) => {
        // console.log(data);
        res.json({
            data: data,
            status: true
        })
    })
}

module.exports = {
    addGoods,
    findGoods,
    findGoodsDetails
}