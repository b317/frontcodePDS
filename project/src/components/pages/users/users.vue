<template>
<div class="container">
  <div class="user">
    <beaty-date></beaty-date>
    <div class="userInfo">
      <div class="touxiang"><img :src="src"></div>
      <div class="username">{{username}}</div>
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
import {getId,getName,setName} from "@/util/auth";
import {getUserInfo} from "@/api/http";

import { mapState,mapGetters,mapMutations } from 'vuex'

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
        }
    }
  },
  computed:{
    ...mapGetters({
      src:'user/headpic',
      username:'user/username',
    }),
  },
  mounted() {
    getUserInfo({id:getId()}).then(res => {
      let data = res.data.data
      let username = data.nick_name == "" ? data.username:data.nick_name
      this.setuserName(username)
      this.setpic("http://134.175.113.58/"+data.head_image)
    })
  },
  methods:{
    ...mapMutations({
      setuserName:'user/setUserName', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      setpic:'user/setpic'
    }),
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
