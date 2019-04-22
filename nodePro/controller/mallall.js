//引入model层
const mallModel = require("../model/mallall");



const mallall = (req, res) => {
    // let {
    //     id
    // } = req.body;
    // console.log(req.body);
    // 查找banner图
    // if (id == 1) {
    //查
    mallModel.findMallall( (data) => {
        res.json({
            data: data,
            status: true,
        })
    })
    // }



}

module.exports = {
    mallall
}