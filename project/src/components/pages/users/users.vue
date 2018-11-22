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
          users:"我的主页",
          coupon:"我的红包",
          order:"我的团购",
          goods:"我的订单",
        },
    }
  },
  computed:{
    ...mapGetters({
      username:'user/username'
    }),
    getMonth(){
      return this.date.getMonth()+1;
    },
    getDate(){
      return this.date.getDate()+1;
    },
    getDay(){
      let str;
      if(this.date.getDay()==1){
        str = "星期一"
      }else if(this.date.getDay()==2){
        str = "星期二"
      }else if(this.date.getDay()==3){
        str = "星期三"
      }else if(this.date.getDay()==4){
        str = "星期四"
      }else if(this.date.getDay()==5){
        str = "星期五"
      }else if(this.date.getDay()==6){
        str = "星期六"
      }else if(this.date.getDay()==0){
        str = "星期日"
      }
      return str;
    }
  },
  methods:{
    setClick(index){
      console.log(index)
    }
  }
}
</script>

<style scoped>
@import '../../../css/users.scss';
</style>
