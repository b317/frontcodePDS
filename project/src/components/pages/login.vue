<template>
  <div>
    <div class="login-container">
      <img class="login-bigpic" src="@/assets/login-bigpic.jpg">
      <div class="login-table">
        <div class="tab">
          <div class="tab-login-text" v-bind:class="{ active: isLogin }" @click="tabClick(true)">短信登录</div>
          <div class="tab-login-nomal" v-bind:class="{ active: !isLogin }" @click="tabClick(false)">账号密码登录</div>
        </div>
        <div v-if="isLogin">
          <input v-model="phone" class="phoneInput" placeholder="手机号码">
          <input v-model="idencode" class="idenCodeInput" placeholder="输入验证码">
          <button @click="idenCodeclick" class="getIdenInput">获取动态密码</button>
          <input type="checkbox" value="yes" v-model="isRemberPhone" class="Rcheckbox"><div class="RcheckSpan">记住手机号</div>
        </div>
        <div v-else>
          <input v-model="phone" class="phoneInput" placeholder="手机号码">
          <input v-model="password" class="pasInput" placeholder="输入密码">
          <input type="checkbox" value="yes" v-model="isLoginAuto" class="Rcheckbox"><div class="RcheckSpan">自动登录</div>
          <div class="fogotPas" @click="tabClick(true)">忘记密码？</div>
        </div>
        <button @click="loginclick" class="loginBtn">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLogin:true,
      activeName: 'login',
      phone:"",
      password:"",
      idencode:"",
      isRemberPhone:false,
      isLoginAuto:true
    }
  },
  beforeMount() {

  },
  methods:{
    idenCodeclick(){
      console.log(this.phone,this.idencode)
    },
    tabClick(a){
      this.isLogin = a
    },
    loginclick(){
      this.$bus.$emit("test","aaaaa")
      this.$store.dispatch('user/Login',{
        "name":"a",
        "password":"asd"
      })
      console.log(getName())
    }
  }
}
</script>

<style scoped>
@import '../../css/login.scss';
</style>
