import axios from "axios";
export default {
  //获取cookie中已加入购物车的商品
  getCookiesGoods({
    commit,
    state
  }, params) {
    //将接收到的数据转为数组
    var strGoods = params;
    var arrGoods = strGoods.split("&&");
    arrGoods = arrGoods.map((item, index) => {
      return JSON.parse(item)
    })
    
    commit("getCookiesGoods", arrGoods)

  },

  //（全选按钮选中，则所有商品都要选中，全选按钮未选中，则所有的商品都要未选中）
  hangleAllChange({
    commit
  }) {
    commit("hangleAllChange")

  },
  
  //当有任意一个商品为未选中状态时，全选按钮也要为未选中状态
  handleGoodsChange({
    commit
  }, params) {
    commit("handleGoodsChange", params)
  },

  //    + -按钮改变数量
  handleChangeNum({
    commit,
    state
  }, params) {
    // console.log(params);
    commit("handleChangeNum", params)
  },
  

  // //------------------------------------------------
  //获取商品id
  getGoodsId({
    commit
  }, params) {
    // console.log(params)
    commit("getGoodsId", params);

  },
  handleGetGoods({
    commit
  }) {
    axios({
      method: "get",
      url: "http://localhost:3000/goods"

    }).then((data) => {
      //filter为数组的过滤函数，data.data为数组，
      //为每一个商品都加一个初始状态，使得每个商品默认为选中状态
      data.data.filter((item) => {
        //为每个商品对象都加了一个属性flag，值为true
        item.flag = true;
      })

      commit("handleGetGoods", data.data)
      console.log(data.data)
      // console.log(data);
      // console.log(data.data)

    })
  },



}


