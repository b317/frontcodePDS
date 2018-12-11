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
          <input v-model="password" class="pasInput" type="password" placeholder="输入密码">
          <input v-model="password2" class="pasInput" type="password" placeholder="重复密码">
          <div class="checkbox-group">
          <input type="checkbox" value="yes" v-model="isRemberPhone" class="Rcheckbox"><div class="RcheckSpan">记住手机号</div>
          </div>
        </div>
        <button @click="register" class="loginBtn">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import {setName,getName} from "@/util/auth";
import {register,getvCode} from "@/api/http";
import axios from 'axios'
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
      totalTime: 3,
      password2:""
    }
  },
  beforeMount() {
    // axios.post("/v1/user/",{
    //   username:"13420120750",
    //   password:"648135",
    //   vcode:"164835"
    // }).then(res => {
    //   console.log(res)
    // })
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
      if(this.totalTime < 3){
        console.log("已发送")
        return
      }
      getvCode({
          phone:this.phone
        }).then((response)=>{
            console.log("已发送验证码")
            console.log(response)
            this.warntext = "已发送验证码，请查看手机"
        })
        .catch(function (error) {//出错
            console.log(error);
        });
      let ccc = window.setInterval(() => {
        this.totalTime--
        this.getIdenBtnText = this.totalTime + 's后重新发送'
        if(this.totalTime == 0){
          clearInterval(ccc)
          this.getIdenBtnText = "获得验证码"
          this.totalTime = 3
        }
      },1000)
    },
    check(){
      if(this.phone == ""){
        this.warntext = "请填入手机号码"
        return 1;
      }
      else if(this.idencode == ""){
        this.warntext = "请填入验证号"
        return 1;
      }
      else if(this.password == ""){
        this.warntext = "请输入密码"
        return 1;
      }
      else if(this.password2 == ""){
        this.warntext = "请重复密码"
        return 1;
      }
      if(this.password2 != this.password){
        this.warntext = "重复密码错误"
        return 1;
      }
    },
    cb(obj){
      if(obj.code == 0){
        this.$alert('将自动登录并跳转至首页', '注册成功', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push("/home")
          }
        });
      }else if(obj.code == 20105){
        this.$alert('验证码错误', '错误', {
          confirmButtonText: '确定',
        });
      }else if(obj.code == 20106){
        this.$alert('手机已被注册', '错误', {
          confirmButtonText: '确定',
        });
      }
    },
    register(){
      if(this.check() == 1){
        return
      }
      register({
          username:this.phone,
          password:this.password,
          vcode:this.idencode
        }).then((response) => {
            console.log(response)
            const data = response.data;
            this.cb(response)
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
