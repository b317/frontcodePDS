<template>
  <div>
    <div class="login-container">
      <img class="login-bigpic" src="@/assets/login-bigpic.jpg">
      <div class="login-table">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone:"",
      password:"",
      idencode:""
    }
  },
  beforeMount() {

  },
  methods:{
    loginBtnclick(){
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
