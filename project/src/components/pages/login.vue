<template>
    <div class="login-container">
      <img class="login-bigpic" :src="src">
      <div class="login-table">
        <div class="tab">
          <div class="tab-login-text" v-bind:class="{ active: isLogin }" @click="tabClick(true)">短信登录</div>
          <div class="tab-login-nomal" v-bind:class="{ active: !isLogin }" @click="tabClick(false)">账号密码登录</div>
        </div>
        <div class="warn">{{warntext}}</div>
        <div v-if="isLogin" class="login-form">
          <input v-model="phone" class="phoneInput" placeholder="手机号码">
          <input v-model="idencode" class="idenCodeInput" placeholder="输入验证码">
          <button @click="idenCodeclick" class="getIdenInput">{{getIdenBtnText}}</button>
          <div class="checkbox-group">
            <input type="checkbox" value="yes" v-model="isRemberPhone" class="Rcheckbox"><div class="RcheckSpan">记住手机号</div>
          </div>
        </div>
        <div v-else>
          <input v-model="phone" class="phoneInput" placeholder="手机号码">
          <input v-model="password" class="pasInput" type="password" placeholder="输入密码">
          <div class="checkbox-group">
            <input type="checkbox" value="yes" v-model="isLoginAuto" class="Rcheckbox"><div class="RcheckSpan">自动登录</div>
            <div class="fogotPas" @click="tabClick(true)">忘记密码？</div>
          </div>
        </div>
        <button @click="loginclick" class="loginBtn">登录</button>
      </div>
    </div>
</template>

<script>
import {setName,getName,setId,setRoleId} from "@/util/auth";
import {login,loginByvCode,getvCode,getUserInfo,banner2 } from "@/api/http";
import { mapState,mapGetters,mapMutations } from 'vuex'
import { setCookie, getCookie } from '../../../../bg/vue-admin/src/common/auth';

export default {
  data () {
    return {
      isLogin:true,
      activeName: 'login',
      phone:"",
      password:"",
      idencode:"",
      isRemberPhone:false,
      isLoginAuto:true,
      warntext:"",
      getIdenBtnText:"获得验证码",
      totalTime: 61,
      src:""
    }
  },
  computed:{
    checkPhone(){ 
        return (/^1[34578]\d{9}$/.test(this.phone)); 
    }
  },
  mounted() {
    this.phone = getCookie("phone")
    banner2().then(res => {
      console.log(res)
      this.src = "http://134.175.113.58/" +res.data.data.bannerList[0].image
    })
  },
  methods:{
    ...mapMutations({
      setuserName:'user/setUserName', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      setId:'user/setId',
      setRoleId:'user/setRoleId'
    }),
    idenCodeclick(){
      if(!this.checkPhone){
        this.warntext = "手机号码格式错误"
        return
      }
      if(this.totalTime < 61){
        console.log("已发送")
        return
      }
      getvCode({
          phone:this.phone
        }).then((response) => {
            this.warntext = "已发送验证码，请查看手机"
            console.log(response)
        })
        .catch(function (error) {//出错
            console.log(error);
        });
      let clock = window.setInterval(() => {
        this.totalTime--
        this.getIdenBtnText = this.totalTime + 's'
        if(this.totalTime == 0){
          clearInterval(clock)
          this.getIdenBtnText = "获得验证码"
          this.totalTime = 61
        }
      },1000)
    },
    tabClick(a){
      if(!a){
        this.warntext = ""
      }else{
        if(this.totalTime < 61){
          this.warntext = "已发送验证码，请查看手机"
        }
      }
      this.isLogin = a
    },
    cb(res){
      if(res.data.code == 0){
        this.$alert('将自动登录并跳转至首页', '登录成功', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push("/home")
          }
        });
      }else{
        this.$alert('服务器500错误,请重试', '失败', {
          confirmButtonText: '确定',
        });
      }
      const data = res.data.data;
      setId(data.id)
      setRoleId(data.role_id)
      setCookie("token",data.token)
      if(isLoginAuto){
        setCookie("phone",data.username)
      }
      getUserInfo({id:data.id}).then(res => {
        const data = res.data.data;
        console.log(data)
        let a = data.nick_name==""?data.username:data.nick_name
        this.setuserName(a)//cookie
      })
    },
    loginclick(){
      if(this.isLogin){//如果是验证码登录
        loginByvCode({
          username:this.phone,
          vcode:this.idencode
        }).then((res) => {
          this.cb(res)
        })
        .catch(function (error) {//出错
            console.log(error);
        });
      }else{//如果是手机密码登录
        login({
          username:this.phone,
          password:this.password
        }).then((res) => {
          this.cb(res)
        })
        .catch(function (error) {//出错
            console.log(error);
        });
      }
    }
  }
}
</script>

<style scoped>
@import '../../css/login.scss';
</style>
