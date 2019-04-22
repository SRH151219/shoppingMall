import axios from "axios";
export default {
  // 下拉加载
  getGoods({
    commit,
    state
  }, params) {
    // console.log(params)
    axios({
      method: "post",
      url: "/api/mall/getGoods",
      data: {
        //类型
        typePage: params,
        //限制的条数
        limit: 8
      }
    }).then((data) => {
      console.log(data.data);
      //   console.log(params);
      var data1 = {
        data: data.data,
        page: params.page
      };
      commit("getGoods", data1);
    })
  },
  //下拉刷新
  getNewGoods({
    commit,
    state
  }) {
    commit("getNewGoods")
  },

  //通过id，获取商品详情
  getGoodsDetails({
    commit,
    state
  }, params) {
    console.log(params);
    axios({
      method: "post",
      url: "/api/mall/getGoodsDetails",
      data:{
        id:params
      }
    }).then((data) => {
      console.log(data);
      commit("getGoodsDetails", data.data.data[0]);
    })
  }

}
