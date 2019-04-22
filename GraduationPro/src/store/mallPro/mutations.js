import { stat } from "fs";

export default {
  // 上拉加载
  getGoods(state, params) {
    // console.log(params);
    // 商品
    var pageGoods = params.data.data[0];
    //商品的总数量
    state.goodsNum = params.data.data[1];
    state.dataType= params.data.data[2];
    // 商品类型
    if(params.page == 1){
      state.product = pageGoods;
      // console.log(state.product);
    }else if(params.data.data[2] == "推荐") {
      // 展开运算符
      state.product = [...state.product, ...pageGoods];
      // console.log(state.product);
    }

  },
  //商品详情
  getGoodsDetails(state,params){
    // console.log(params);
    state.goodsDetails = params;
    // console.log(state.goodsDetails)
  }

}
