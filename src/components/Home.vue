<template>
  <div style="height: 100%">
    <el-container style="height: 100%">
      <el-header style="background: #101319;height: 60px;">
        <div class="fold" @mouseover="labelHovered=true" v-if="!labelHovered">
          <i class="el-icon-menu" style="position: absolute;left: 10px;top: 15px"></i>
        </div>
        <div
          class="unfold"
          v-if="labelHovered">
          <i class="el-icon-menu" style="position: absolute;background: dodgerblue;left: 10px;top: 15px"></i>
        </div>
        <div style="height: 60px;width: 800px;margin-left: 100px;display: inline-block;">
          <el-menu class="selection" mode="horizontal" background-color="#101319"  active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">DNA算法实验</template>
              <el-menu-item index="1-1"><router-link to="/home/IndexingAlgorithm">匹配算法</router-link></el-menu-item>
              <el-menu-item index="1-2"></el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3"><router-link to="/home/benchMark">benchmark</router-link></el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank"><router-link to="/home/createData">仿真数据</router-link></a></el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <el-main class="main">
        <div class="label">
          <div class="welcome">
            <span style="margin-left: 20px">您好!欢迎回来王宇龙</span>
          </div>
        </div>
        <div style="width: 80%;margin-left: 10%;margin-top: 10px;position: relative">
          <router-view></router-view>
        </div>
      </el-main>
      <el-drawer
        :visible.sync="labelHovered"
        direction="ltr"
        class="menu"
        :modal="modal"
        :before-close="handleClose">
        <el-menu
          class="el-menu-vertical-demo"
          @close="handleClose">
          <el-menu-item index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title"><router-link to="/home/myIndexing">我的比对实验</router-link></span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title"><router-link to="/home/myBenchmark">我的benchmark</router-link></span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-drawer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      modal: false,
      labelHovered: false
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style scoped>
.welcome{
  height: 40px;
  line-height: 40px;
  width: 80%;
  margin-left: 10%;
  margin-top: 5px;
  background: rgba(255, 255, 255, 0.300000);
  backdrop-filter: blur(15px);
}
.selection{
  color: white!important;
}
.label{
  background: url('../assets/home-banner.png') no-repeat;
  width: 100%;
  height: 50px;
  background-size: 100% 100%;
  display: inline-block;
}
.main{
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  margin: 0px;
  padding: 0px;
}
::v-deep .el-drawer {
  background-color: #e3e3e3 !important
}
.fold {
  color: white;
  height: 60px;
  width: 60px;
  font-size: 30px;
  display: inline-block;
  line-height: 60px;
  text-align: center;
  position: absolute;
  left: 0px
}

.unfold {
  height: 60px;
  width: 60px;
  font-size: 30px;
  display: inline-block;
  line-height: 60px;
  text-align: center;
  background-color: dodgerblue;
  position: absolute;
  left: 0px
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
</style>
