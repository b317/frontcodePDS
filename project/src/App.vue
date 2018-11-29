<template>
  <div id="app">
      <el-menu id="my-menu"  background-color="#f6f6f6" text-color="#333" active-text-color="#f65d29" :default-active="activeIndex" class="el-menu-demo my-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="5"><el-badge is-dot class="item" v-if="haveMes"></el-badge> 消息中心</el-menu-item>
        <el-submenu index="4">
          <template slot="title">个人中心</template>
          <el-menu-item index="4-3">我的主页</el-menu-item>
          <el-menu-item index="4-1">我的团购</el-menu-item>
          <el-menu-item index="4-4">我的订单</el-menu-item>
          <el-menu-item index="4-2">我的红包</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" style="color:#f65d29;">免费注册</el-menu-item>
        <el-menu-item index="2" class="app-username">你好,{{showName}}</el-menu-item>
        <el-menu-item index="1" id="menu-home-btn">拼多少首页</el-menu-item>
        <i class="el-icon-edit" id="icon-home"></i>
      </el-menu>
    <div class="line"></div>
    <div class="container">
      <div class="body-head">
        <img src="./assets/pds_logo.png"/>
        <div class="body-head-title2" v-if="titleShowOrNot">
          <span class="title-line-y">|</span><span id="title-span">{{title}}</span>
        </div>
        <div v-else class="body-head-title">
          <div class="top-input-class">
            <div><i class="el-icon-search"></i></div>
            <input placeholder="搜索商品，商家，优惠卷等等">
            <button>搜索</button>
          </div>
        </div>
      </div>
      <router-view/>
    </div>
    <nav-footer v-if="isShow"></nav-footer>
    <login-footer v-if="!isShow"></login-footer>
  </div>
</template>

<script>
import { mapState,mapGetters } from 'vuex'
import NavFooter from '@/components/module/NavFooter'
import LoginFooter from '@/components/module/LoginFooter'
export default {
  name: 'App',
  data(){
    return{
      isLoading:false,
      activeIndex: '1',
      inputInfo:"请输入",
      isShow:false,
      LoadingTime:3,
      haveMes:true
    }
  },
  components:{
    NavFooter,LoginFooter
  },
  computed: {
    ...mapGetters({
      username:'user/username'
    }),
    showName(){
      return this.username === "" ? "请登录":this.username
    },
    title(){
      if(this.activeIndex == 2){
        return "登录"
      }else if(this.activeIndex == 3){
        return "注册"
      }
    },
    titleShowOrNot(){
      if(this.activeIndex == 2||this.activeIndex == 3){
        return true
      }else if(this.activeIndex == 3){
        return false
      }
    }
  },
  mounted(){
    ///asdasdasd
    this.$bus.$on("loading",(a) => {
      this.isLoading = a
    })
    this.checkShowFooter();
  },
  methods: {
      handleSelect(key, keyPath) {
        this.activeIndex = key;
        if(key == 1){
          this.$router.push("/home")
        }else if(key == 2){
          this.$router.push("/login")
        }else if(key == 3){
          this.$router.push("/register")
        }else if(key == "4-1"){
          this.$router.push("/Order")
        }else if(key == "4-2"){
          this.$router.push("/coupon")
        }else if(key == 5){
          this.$router.push("/news")
        }else if(key == "4-3"){
          this.$router.push("/userInfo")
        }else if(key == "4-4"){
          this.$router.push("/goods")
        }
        this.checkShowFooter(); //检查不同的页面显示不同的页脚
      },
      checkShowFooter(){
        this.$route.matched.forEach((item,index)=>{
          if(item.name=="login" || item.name=="register"){
            this.isShow=false
          }else{
            this.isShow=true
          }
        })
      }
    }
  }
</script>

<style>
  @import './css/header.scss';
  @import "./css/footer.css";
  @import "./css/newsCenter.css";
  .app-username{
    max-width: 120px !important;
    overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
  }
  .gloab-loading{
    position:fixed;
    left: 48%;
    top:50%;
  }
  html,body{
    margin:0px;
    padding:0px;
    width: 100%;
    height: 100%;
  }
  .item{position: absolute;right:5px}
  .container{
    width: 80%;
    margin: 0 auto;
  }
</style>
