<template>
  <div id="app">
    <el-menu id="my-menu"  background-color="#f6f6f6" text-color="#333" active-text-color="#f65d29" :default-active="activeIndex" class="el-menu-demo my-menu" mode="horizontal" @select="handleSelect">
    <el-menu-item index="5"><router-link to="/news">消息中心</router-link></el-menu-item>
    <el-submenu index="4" show-timeout="10" hide-timeout="10">
      <template slot="title">个人中心</template>
      <el-menu-item index="4-1">我的团购</el-menu-item>
      <el-menu-item index="4-2">我的红包</el-menu-item>
    </el-submenu>
    <el-menu-item index="3" style="color:#f65d29;"><router-link to="/news">免费注册</router-link></el-menu-item>
    <el-menu-item index="2"><router-link to="/news">你好,{{showName}}</router-link></el-menu-item>
    <el-menu-item index="1" id="menu-home-btn"><router-link to="/home">拼多少首页</router-link></el-menu-item>
    <i class="el-icon-edit" id="icon-home"></i>
    </el-menu>
    <div class="line"></div>
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data(){
    return{
      activeIndex: '1'
    }
  },
  computed: {
    ...mapState({
      name: state => state.user.userName
    }),
    showName(){
      return this.name === "" ? "请登录":this.name
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
}
</script>

<style>
@import './css/header.scss';
html,body{
  margin:0px;
  padding:0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
