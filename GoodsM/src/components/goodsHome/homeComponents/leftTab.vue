<template>
    <div id="leftTab">
        <!-- el-row行 -->
        <el-row class="tac">
            <!-- el-col列，通过:span的值控制大小，总共是24 -->
            <el-col :span="24">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="1">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页</span>
                    </el-menu-item>

                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <!-- 一级导航 -->
                            <span>商品管理</span>
                        </template>

                        <el-menu-item-group>
                            <router-link to="/addGoods">
                                <el-menu-item index="2-1">添加商品</el-menu-item>
                            </router-link>
                            <router-link to="/findGoods">
                                <el-menu-item index="2-2">查看商品</el-menu-item>
                            </router-link>
                        </el-menu-item-group>

                        <!-- 三级导航 -->
                        <el-submenu index="2-3">
                            <template slot="title">商品分类</template>
                            <el-menu-item index="2-3-1">水果</el-menu-item>
                            <el-menu-item index="2-3-1">蔬菜</el-menu-item>

                        </el-submenu>
                    </el-submenu>

                    <el-menu-item index="3">
                        <i class="el-icon-menu"></i>
                        <span slot="title">商家管理</span>
                    </el-menu-item>

                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <!-- 一级导航 -->
                            <span>广告管理</span>
                        </template>

                        <el-menu-item-group>
                            <el-menu-item index="4-1">添加banner广告</el-menu-item>
                            <el-menu-item index="4-2">查看banner广告</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <!-- 一级导航 -->
                                <span>销售盈利分析</span>
                        </template>

                        <el-menu-item-group>
                            <router-link to="/saleStatus">
                                <el-menu-item index="5-1">销售状况</el-menu-item>
                            </router-link>

                            <el-menu-item index="5-2">盈利状况</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>

                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
#leftTab {
  float: left;
  width: 200px;
  background: lightblue;
}
</style>
