<template>
  <div id="details">
    <div class="car">
      <p @click="handleCar">购物车({{goodsCount.goodsNumCount}})</p>
      <p @click="handleAdd">加入购物车</p>
    </div>

    <div class="showImg">
      <div class="back iconfont iconIcon-fanhui
" @click="handleBack"></div>
      <div class="swiper-container goods-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide " v-for="(item,index) in goodsDetails.goodsSmallImg">
            <img :src="item">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

      </div>
    </div>
    <div class="price">
      <p class="price1">特价：￥{{goodsDetails.goodsPrice1}}</p>
      <p class="price2">原价：￥{{goodsDetails.goodsPrice2}}</p>
    </div>
    <div class="desc">
      {{goodsDetails.goodsDesc}}
    </div>
    <div class="sizeDesc">
      <p>尺码</p>
      <div class="size">
        <p>S</p>
        <p>M</p>
        <p>L</p>
        <p>XL</p>
      </div>

    </div>
    <div class="introduce">
      <p>商品信息</p>
      <p>品牌名称： 噢姆</p>
      <p>商品名称： 羊毛混纺撞色显瘦廓形毛呢大衣</p>
      <p>产地： 中国</p>
      <p>材质： 80.4%羊毛 19.6%棉</p>
      <p>洗涤说明： 不可水洗 不可漂白 在阴凉处悬挂晾干 熨斗底板最高温度110℃ 常规干洗</p>
      <p>风格： 通勤</p>
      <p>适用场合： 约会</p>
      <p>版型： 宽松</p>
      <p>厚薄： 常规</p>
      <p>弹性： 无弹</p>
      <p>适用季节： 冬</p>
      <p>领型： 翻领</p>
      <p>适用人群： 中年</p>
      <p>图案： 纯色</p>
      <p> 面料： 棉 羊毛</p>
    </div>

    <div class="goodsImg">
      <p>商品图片</p>
      <div v-for="(item,index) in goodsDetails.goodsSmallImg">
        <img :src="item">
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../../../node_modules/swiper/dist/css/swiper.css";
import Vuex from "vuex";
import Cookies from "js-cookie";
export default {

  created() {
    this.obverser.$emit("changeState9");
  },
  destroyed() {
    this.obverser.$emit("changeState10");
  },
  computed: {
    ...Vuex.mapState({
      goodsDetails: state => state.mallPro.goodsDetails,
      goodsCarNum: state => state.goodsCar.goodsCarNum,
      //商品id
      goodsId: state => state.goodsCar.goodsId
    }),
    ...Vuex.mapGetters({
      goodsCount: "goodsCar/goodsCount"
    })
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    //进入购物车
    handleCar() {
      this.$router.push("/goodsCar");
    },
    //加入购物车
    handleAdd() {
      //获取已经存在的商品
      var carGoods = Cookies.get("goodsCar");
      //设置开关，用于判断商品是否已经存在,默认值为false,即商品不存在。
      var flag = false;
      //商品信息
      var goodsId = this.goodsDetails._id;
      var goodsImg = this.goodsDetails.goodsBigImg;
      var goodsPrice = this.goodsDetails.goodsPrice1;
      var goodsSize = "M";
      var goodsColor = "粉红色";
      var goodsName = this.goodsDetails.goodsName;
      var goodsNum = 1;
      var goods = {
        goodsId,
        goodsImg,
        goodsPrice,
        goodsSize,
        goodsColor,
        goodsNum,
        goodsName
      };

      //如果购物车有商品
      if (carGoods) {
        //判断此时点击加入购物车的商品是否已经存在
        //将carGoods字符串以&&切割为数组
        var arr = carGoods.split("&&");
        //将数组中每一项（字符串）转为对象。
        var arr1 = arr.map((item, index) => {
          return JSON.parse(item);
        });

        //判断商品是否已经存在，如果已经存在，数量++
        for (var i = 0; i < arr1.length; i++) {
          if (arr1[i].goodsId == goodsId) {
            //数量++
            arr1[i].goodsNum++;
            //注意：修改状态值为true，即商品存在
            flag = true;
            break;
          }
        }

        //如果商品已经存在
        if (flag) {
          //将数组中的每一项转为字符串。
          var arr2 = arr1.map((item, index) => {
            return JSON.stringify(item);
          });

          //将数组转为字符串
          if (arr2.length > 1) {
            var st = arr2.join("&&");
          } else {
            st = arr2.join();
          }

          //如果商品存在，则不需要进行拼接，直接存入cookie
          Cookies.set("goodsCar", st);
          // console.log(Cookies.get("goodsCar"));
          //注意：将开关设为false
          flag = false;
        } else {
          // console.log("不存在");
          //如果商品不存在，则将商品进行字符串拼接
          var newCarGoods = carGoods + "&&" + JSON.stringify(goods);
          //设置拼接后的cookie
          Cookies.set("goodsCar", newCarGoods);
          // console.log(Cookies.get("goodsCar"));
        }
      } else {
        //第一次设置cookie
        Cookies.set("goodsCar", goods);
      }

      //elementUI消息提示
      this.$message({
        message: "成功加入购物车",
        type: "success",
        //显示时间
        duration: 600,
        //文字居中
        center: true
      });

      //
    }
  },
  mounted() {
    setTimeout(() => {
      var mySwiper = new Swiper(".goods-swiper", {
        loop: true, // 循环模式选项
        autoplay: {
          //自动切换的时间间隔，单位ms
          delay: 2000,
          //用户操作swiper之后，是否禁止autoplay。默认为true：停止。
          disableOnInteraction: false
        },

        //开启鼠标滚轮控制Swiper切换
        mousewheel: true,

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          //点击分页器，可进行切换
          clickable: true,
          //点击slide时显示/隐藏分页器，如果遇到无效，可增加样式 .swiper-container .swiper-button-hidden{ opacity : 0; }。
          hideOnClick: true
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          //点击slide时显示/隐藏前进后退按钮，如果遇到无效，可增加样式 .swiper-container .swiper-button-hidden{ opacity : 0; }。
          hideOnClick: true
        }
      });
    }, 300);
  }
};
</script>

<style scoped>
#details {
  width: 100%;
  height: 100%;
  overflow: scroll;
  padding-bottom: 0.6rem;
}
.showImg {
  width: 100%;
  height: 3.75rem;
  background: pink;
  position: relative;
}
.goods-swiper img {
  width: 100%;
  height: 3.75rem;
}
.back {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 0.5rem;
  height: 0.5rem;
  color: #fff;
  background: rgb(255, 8, 0, 0.3);
  text-align: center;
  line-height: 0.5rem;
  font-size: 32px;
}
.price {
  width: 100%;
  /* height: .5rem; */
  font-size: 16px;
  padding: 10px 15px;
  /* background: pink; */
}
.price1 {
  font-size: 32px;
  color: red;
}
.price2 {
  text-decoration: line-through;
  color: #ccc;
}
.desc {
  font-size: 16px;
  padding: 0 15px 10px 15px;
}
.sizeDesc {
  font-size: 24px;
  padding: 10px 15px;
  border-bottom: 1px dashed rgb(192, 197, 197);
}
.sizeDesc > p {
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 36px;
  /* background: rgb(150, 150, 150, 0.3); */
  border-bottom: 1px dashed rgb(192, 197, 197);
}
.size {
  width: 100%;
  /* padding: 0 15px; */
  height: 1rem;
  /* background: pink; */
  display: flex;
  font-size: 16px;
  flex-wrap: wrap;
}
.size p {
  width: 1.1rem;
  height: 0.3rem;
  /* background: orange; */
  line-height: 0.3rem;
  text-align: center;
  margin-right: 5px;
  border: 1px solid #777;
}
.introduce {
  font-size: 12px;
  padding: 0 10px;
}
.introduce p {
  /* padding: 5px 0; */
  line-height: 24px;
}
.introduce p:nth-of-type(1) {
  font-size: 24px;
  line-height: 36px;
  /* background: rgb(150, 150, 150, 0.3); */
}

.goodsImg p {
  font-size: 24px;
  line-height: 36px;
  padding: 0 10px;
}
.goodsImg img {
  width: 100%;
  margin-bottom: 5px;
}
.car {
  width: 100%;
  height: 0.6rem;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 16px;
  background: #fff;
}
.car {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.car p:nth-of-type(1) {
  width: 0.85rem;
  height: 0.42rem;
  border: 1px solid #e6e6e6;
  text-align: center;
  line-height: 0.42rem;
}
.car p:nth-of-type(2) {
  width: 2.56rem;
  height: 0.42rem;
  text-align: center;
  line-height: 0.42rem;
  border: 1px solid #e6e6e6;
  background: #dd3d97;
  color: #fff;
}
</style>
<style>
.el-message {
  position: fixed;
  left: 50%;
  top: 500px;
  color: red;
}

.el-message__icon {
  font-size: 32px;
}
</style>

