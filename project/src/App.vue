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
          <el-menu-item index="4-5">{{shopclick}}</el-menu-item>
          <el-menu-item index="4-6" v-if="islo">退出登录</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" style="color:#f65d29;">免费注册</el-menu-item>
        <el-menu-item index="2" class="app-username">你好,{{showName}}
        </el-menu-item>
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
            <input placeholder="搜索商品，商家，优惠卷等等" v-model="sval">
            <button @click="btnclick">搜索</button>
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
import { mapState,mapGetters,mapMutations } from 'vuex'
import {getId,getName,setName,delCookie} from "@/util/auth";
import {getUserInfo} from "@/api/http";
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
      haveMes:true,
      sval:"",
      islo:false
    }
  },
  components:{
    NavFooter,LoginFooter
  },
  computed: {
    ...mapGetters({
        username: 'user/username',
        role_id: 'user/role_id'
      }),
    showName(){
      return this.username === "" ? "请登录":this.username
    },
    shopclick(){
      return this.role_id == 2 ? "我的商铺":"商家认证"
    },
    title(){
      if(this.$route.path == "/login"){
        return "登录"
      }else if(this.$route.path == "/register"){
        return "注册"
      }
    },
    titleShowOrNot(){
      if(this.$route.path == "/login"||this.$route.path == "/register"){
        return true
      }else{
        return false
      }
    }
  },
  mounted(){
    this.$bus.$on("seach2",this.heih)
    if(getId() != null){
      this.islo = true
      getUserInfo({id:getId()}).then(res => {
        let data = res.data.data
        let a = data.nick_name==""?data.username:data.nick_name
        this.setuserName(a)
        this.setRoleId(data.role_id)
        this.setpic("http://134.175.113.58/"+data.head_image)
      })
    }
    this.$bus.$on("loading",(a) => {
      this.isLoading = a
    })
    this.checkShowFooter();
  },
  beforeDestroy() {
    this.$bus.$off("seach2",this.heih)
  },
  methods: {
    heih(a){
      this.sval = a
    },
    ...mapMutations({
      setuserName:'user/setUserName', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      setId:'user/setId',
      setRoleId:'user/setRoleId',
      setpic:"user/setpic"
    }),
    btnclick(){
      this.$router.push({ name: 'seach', params: { sval: this.sval }})
    },
      handleSelect(key, keyPath) {
        this.sval =""
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
        }else if(key == "4-5"){
          console.log(this.role_id)
          if(this.role_id == 2){
            if(getId() != null){
              window.open("http://www.jianlinker.cn/pds/merchantbg")
            }
          }else{
            this.$router.push("/MerchantEntry")
          }
        }
        else if(key == "4-6"){
          delCookie("role_id")
          delCookie("password")
          delCookie("data")
          delCookie("username")
          delCookie("token")
          delCookie("id")
          window.location.reload()
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
  #icon-back{
    color: #f65d29;
  }
  .top-btn{
    position: fixed;
    right: 0px;
    top: 40%;
  }
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
