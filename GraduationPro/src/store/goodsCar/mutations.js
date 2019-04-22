export default {
  getCookiesGoods(state, params) {
    // console.log(params);
    params.map((item,index)=>{
      item.flag = true;
    })
    // console.log(params);
    state.goodsCookiesList = params;
    // console.log(state.goodsCookiesList);

  },

  //全选按钮
  hangleAllChange(state) {
    //全选按钮状态改变
    state.allSelected = !state.allSelected;
    //使所有商品的选中状态与全选按钮相同
    state.goodsCookiesList.map((item) => {
      item.flag = state.allSelected;
    })
  },

  //当有任意一个商品为未选中状态时，全选按钮也要为未选中状态
  handleGoodsChange(state, params) {
    //改变当前按钮状态
    state.goodsCookiesList[params].flag = !state.goodsCookiesList[params].flag;
    //判断所有商品的选中状态，如果有一个未选中，则将全选按钮的状态改为false
    //设置开关按钮
    var goodsState = false;
    for (var i = 0; i < state.goodsCookiesList.length; i++) {
      //如果state.goodsList[i].flag为false（即未选中），则将gooodsState设为true
      if (!state.goodsCookiesList[i].flag) {
        goodsState = true; //
        break;
      }
    }
    //存在未选中的商品
    if (goodsState) {
      //将全选按钮状态设为false
      state.allSelected = false;
    } else {
      //不存在未选中商品，则全选按钮状态为true
      state.allSelected = true;

    }

  },
  handleChangeNum(state, params) {
    switch (params.id) {
      case 1:
        if (state.goodsCookiesList[params.indexA].goodsNum > 1) {
          state.goodsCookiesList[params.indexA].goodsNum--;
        }
        break;
      case 2:
        state.goodsCookiesList[params.indexA].goodsNum++;
        break;
      default:
        break;

    }
  },




  // //---------------------------------------------------------
  //修改商品id
  getGoodsId(state, params) {
    // console.log(params);
    state.goodsId = params;
    // console.log(state.goodsId);
  },
  handleGetGoods(state, params) {
    state.goodsList = params;
    // console.log(state.goodsList);
  },



}
