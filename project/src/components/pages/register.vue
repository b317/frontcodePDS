<template>
  <div>
    <div class="login-container">
      <img class="login-bigpic" src="@/assets/login-bigpic.jpg">
      <div class="login-table res-tab" >
        <div class="tab-register">
          <div class="tab-login-text">账号注册</div>
        </div>
        <div class="warn">{{warntext}}</div>
        <div class="login-form">
          <input v-model="phone" class="phoneInput" placeholder="手机号码">
          <input v-model="idencode" class="idenCodeInput" placeholder="输入验证码">
          <button @click="idenCodeclick" class="getIdenInput">{{getIdenBtnText}}</button>
          <input v-model="password" class="pasInput" placeholder="输入密码">
          <input type="checkbox" value="yes" v-model="isRemberPhone" class="Rcheckbox"><div class="RcheckSpan">记住手机号</div>
        </div>
        <button @click="register" class="loginBtn">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import {setName,getName} from "@/util/auth";
import {register} from "@/api/http";

export default {
  data () {
    return {
      isLogin:true,
      activeName: 'login',
      phone:"",
      password:"",
      idencode:"",
      isRemberPhone:false,
      warntext:"",
      getIdenBtnText:"获得验证码",
      totalTime: 61
    }
  },
  beforeMount() {

  },
  computed:{
    checkPhone(){ 
        return (/^1[34578]\d{9}$/.test(this.phone)); 
    }
  },
  methods:{
    idenCodeclick(){
      if(!this.checkPhone){
        this.warntext = "手机号码格式错误"
        return
      }
      if(this.totalTime < 61){
        console.log("已发送")
        return
      }
      this.warntext = "已发送验证码，请查看手机"
      let ccc = window.setInterval(() => {
        this.totalTime--
        this.getIdenBtnText = this.totalTime + 's后重新发送'
        if(this.totalTime == 0){
          clearInterval(ccc)
          this.getIdenBtnText = "获得验证码"
          this.totalTime = 61
        }
      },1000)
    },
    register(){
      alert(this.checkPhone)
      register({
          //参数
        }).then(function (response){
            const data = response.data;
            this.setName({userName:data.params.username})//vuex
            setName(data.params.username)//cookie
        })
        .catch(function (error) {//出错
            console.log(error);
        });
    }
  }
}
</script>

<style scoped>
@import '../../css/login.scss';
</style>
