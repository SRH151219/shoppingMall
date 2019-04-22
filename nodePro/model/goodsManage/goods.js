//引入数据库
const db = require("../../utils/database");

// 定义数据类型，good为表名，会自动加s
const Goods = db.model("good", {
    goodsName: String,
    goodsDesc: String,
    goodsPrice1: Number,
    goodsPrice2: Number,
    goodsClass: String,
    uploadTime: String,
    goodsBigImg: String,
    goodsSmallImg: Array,
})
// 添加商品
const addGoods = (goodsInfo, cb) => {
    let goods = new Goods({
        goodsName: goodsInfo.name,
        goodsDesc: goodsInfo.desc,
        goodsPrice1: goodsInfo.price1,
        goodsPrice2: goodsInfo.price2,
        goodsClass: goodsInfo.region,
        uploadTime: goodsInfo.data1,
        goodsBigImg: goodsInfo.bigImgUrl,
        goodsSmallImg: goodsInfo.smallImgsUrl,
    })
    goods.save().then(() => {
        cb();
    })
}

//查看商品
const findGoods = (cb) => {
    Goods.find().then((data) => { //是查找一条数据，data为查到的数据
        cb(data);
    })
}

//查看某条商品信息（商品详情）
const findGoodsDetails = (params, cb) => {
    Goods.find({
        _id: params
    }).then((data) => {
        cb(data)
    })
}
module.exports = {
    addGoods,
    findGoods,
    findGoodsDetails
}