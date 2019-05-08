<template>
  <div id="saleStatus">
    <div id="myChart" ref="con"></div>
  </div>
</template>

<script>
//使用 ES Module：
//引入 echarts 主模块。
import echarts from "echarts/lib/echarts";

//折线图
import "echarts/lib/chart/line";
//柱形图
import "echarts/lib/chart/bar";
//饼状图
import "echarts/lib/chart/pie";
//散点图
import "echarts/lib/chart/scatter";

// 引入提示框组件、标题组件、工具箱组件。
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/toolbox";

//使用 CommonJS：
// 引入柱状图组件
// require("echarts/lib/chart/bar");
// 引入提示框和title组件
// require("echarts/lib/component/tooltip");
// require("echarts/lib/component/title");

export default {
  data() {
    return {};
  },
  mounted() {
    //调用函数
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(this.$refs.con);
      // 绘制图表
      myChart.setOption({
        //标题组件，包含主标题和副标题
        title: [
          {
            //主标题文本，支持使用 \n 换行
            text: "ECharts 入门示例",
            // 主标题文本超链接。
            link: "http://www.baidu.com",
            //指定窗口打开主标题超链接,'self' 当前窗口打开,'blank' 新窗口打开
            target: "self",
            // 是否显示标题组件
            show: true,
            color: "orange",
            //主标题样式
            textStyle: {
              //主标题字体颜色
              color: "orange",
              //主标题字体样式，'normal''italic''oblique'
              fontStyle: "italic"
              //……
            },
            //副标题文本
            subtext: "这是副标题",
            //组件离容器左侧的距离
            left: 100,
            top: 10,
            //标题背景颜色
            backgroundColor: "#ccc"
          }
        ],

        tooltip: {},
        // grid: { x: "20%", y: "50%", width: "50%", height: "38%" },

        //x轴
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        //y轴
        yAxis: {},

        //系列列表。每个系列通过 type 决定自己的图表类型
        series: [
          {
            //条形图
            type: "bar",
            //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
            name: "销量",
            // legendHoverLink:true,
            // symbolSize:10,
            //柱条的宽度，不设时自适应。支持设置成相对于类目宽度的百分比。
            barWidth:10,
            //
            barMinHeight:20,

            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  }
};
</script>

<style scoped>
#myChart {
  width: 600px;
  height: 200px;
}
</style>
