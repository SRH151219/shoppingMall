// 引入 Mock
var Mock = require('mockjs')

//引入处理路径的模块
import {
  pathParams
} from "../utils/mockUtils";

//引入node的核心模块qs（用于处理请求路径）
const qs = require("querystring");


//扩展数据
const Random = Mock.Random;
Random.extend({
  goodsType: function (data) {
    var type = ["男装", "女装","男鞋","女鞋", "童装", "童鞋"]
    return this.pick(type);
  }
})
//------------------------------------------------------定义数据类型------------------------------------------------------

// 定义数据类型
var data = Mock.mock({
  // 20条数据
  "data|120": [{
    // 商品类型
    "goodsType": "@goodsType",
    //商品地址（市）
    "goodsAddress": "@city",
    // 商品Id
    "goodsId|+1": 1,
    //商品名称(4个字)
    "goodsName": "@ctitle(4)",

    //商品图片
    "goodsImg": "@Image('172x172','@color','@goodsType')",
    //商品原价格
    "goodsPrice|300-520": 300,

    //商品现售价
    "goodsSpecialPrice|45-120": 45,

    //购买人数
    "goodsBuyNum|300-1000": 300,

  }]
})

//-------------------------------------接口：获取商品----------------------------------------------------------------


//   /\/api\/mall\/getGoods/
Mock.mock(/\/api\/mall\/getGoods/, "post", (option) => {
  //   option指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性
  // console.log(option)
  //直接通过option.body获取参数（字符串）,JSON.parse()将字符串转为对象，，解构赋值，获得goodsType
  var bodyObj = JSON.parse(option.body).typePage;
  var type = bodyObj.type;
  var page = bodyObj.page;
  let {
    limit
  } = JSON.parse(option.body);
  // console.log(type, page, limit);
  var arr = data.data;
  // console.log(arr.length)

  if (type == "all") {
    // 获取所有数据
    //获取每页对应的数据,filter遍历数组，返回符合条件的数据（每次返回一页的数据）
    //商品的数量(手动设置)
    var goodsNum = arr.length;
    var datalist = arr.filter(function (item, index) {
      return index >= (page - 1) * limit && index < page * limit;
    })

  } else if (type == "推荐") {
    // 获取所有数据
    //获取每页对应的数据,filter遍历数组，返回符合条件的数据（每次返回一页的数据）

    // console.log(arr);
    var datalist = arr;
     //商品的数量(手动设置)
     var goodsNum = datalist.length;

  } else if (type == "男装") {
    // 男装
    var datalist = arr.filter(function (item, index) {
      return item.goodsType == "男装"
    })
    var goodsNum = datalist.length;

  } else if (type == "女装") {
    // 女装
    var datalist = arr.filter(function (item, index) {
      return item.goodsType == "女装"
    })
    var goodsNum = datalist.length;
  } else if (type == "童装") {
    // 童装
    var datalist = arr.filter(function (item, index) {
      return item.goodsType == "童装"
    })
    var goodsNum = datalist.length;

  } else if (type == "男鞋") {
    // 男鞋
    var datalist = arr.filter(function (item, index) {
      return item.goodsType == "男鞋"
    })

  } else if (type == "女鞋") {
    // 女鞋
    var datalist = arr.filter(function (item, index) {
      return item.goodsType == "女鞋"
    })

    var goodsNum = datalist.length;

  }
  //响应的数据
  return [datalist, goodsNum, type]
})
