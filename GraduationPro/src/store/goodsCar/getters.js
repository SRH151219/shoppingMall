export default {

  //计算所有选中的商品的总数量，总价格

  //getters中可直接访问到state
  goodsCount(state) {
      console.log(123);
    let goodsNumCount = 0; //总数量
    let goodsNumPrice = 0; //总价格
    // //遍历所有的商品
    state.goodsCookiesList.map((item,index) => {
      if (item.flag == true) {
        goodsNumCount += item.goodsNum;
        // 先乘10，后除10是为了防止不稳定小数的出现
        goodsNumPrice += (item.goodsPrice) * 10 * item.goodsNum;
      }
    })
    //最后return一个对象
    return {
      goodsNumCount,
      goodsNumPrice: goodsNumPrice / 10
    };
  }
}
