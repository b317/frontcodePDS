<template>
<div>
  <div class="user">
    <beaty-date></beaty-date>
    <div class="userInfo">
      <div class="touxiang"><img src="@/assets/touxiang.jpg"></div>
      <div class="username">{{username}}(用户)</div>
      <div class="set">
        <div @click="setClick(1)">个人中心</div>
        <div class="address" @click="setClick(2)">设置收货地址</div>
        <div class="setinfo" @click="setClick(3)">设置个人信息</div>
        <div @click="setClick(4)">更改密码</div>
      </div>
    </div>
    <leftTab v-bind:routeArr="routeArr"></leftTab>
  </div>
  <router-view/>
</div>
</template>

<script>
import leftTab from "@/components/module/leftTab"
import beatyDate from "@/components/module/beatyDate"

import { mapState,mapGetters } from 'vuex'

export default {
  components:{
    leftTab,beatyDate
  },
  data () {
    return {
        routeArr:{
          userInfo:"我的主页",
          coupon:"我的红包",
          order:"我的团购",
          goods:"我的订单",
        },
    }
  },
  computed:{
    ...mapGetters({
      username:'user/username'
    })
  },
  methods:{
    setClick(index){
      if(index == 1){
        this.$router.push("userInfo")
      }else if(index == 2){
        this.$router.push("setAddress")
      }else if(index == 3){
        this.$router.push("setUserInfo")
      }else if(index == 4){
        this.$router.push("setPass")
      }
    }
  }
}
</script>

<style scoped>
@import '../../../css/users.scss';
</style>
