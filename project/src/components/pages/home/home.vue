<template>
  <div class="home">
    <div class="header">
      <headmenu class="headmenu"></headmenu>
      <div class="header-center">
        <leftmenu></leftmenu>
        <div class="header-center-cen">
          <carousel></carousel>
          <div style="display:flex;width:100%;">
            <hotp :data=data :type=type[1]></hotp>
            <hotp :data=data :type=type[0] style="margin-left:6px;"></hotp>
          </div>
        </div>
        <userInfo class="info"></userInfo>
      </div>
    </div>
    <contenter></contenter>
  </div>
</template>

<script>
import ddd from "./hot.js"
import {setName,getName,getCookie} from "@/util/auth";
import headmenu from "@/components/pages/home/headerMenu"
import userInfo from "@/components/pages/home/userInfo"
import hotp from "@/components/pages/home/hotp"
import carousel from "@/components/pages/home/carousel"
import leftmenu from "@/components/module/menuLeft"
import contenter from "@/components/pages/home/content"

export default {
  components:{
    leftmenu,headmenu,carousel,hotp,userInfo,contenter
  },
  data () {
    return {
      msg: 'home',
      data:[],
      type:[1,2],
    }
  },
  mounted() {
    this.data = ddd.data
    this.$bus.$on("test",(a) => {
      console.log(a)
    })
  },
  methods:{
    click(){
      console.log("ASd")
    },
    clicked(){
      console.log(getName())
    }
  }

}
</script>

<style scoped lang="scss">
  .home{
    background: #f7f7f7;
    width: 100%;
    .header{
      width: 100%;
      height: 570px;
      position: relative;
      .header-center{
        width: 100%;
        display: flex;
        position: absolute;
        top: 32px;
        .header-center-cen{
          width: 58%;
          margin-top: 10px;
          margin-left: -32%;
        }
      }
      .headmenu{
        position: absolute;
        left:-12.5%;
      }
      .info{
        width: 22%;
        position: absolute;
        right: 12px;
        top: 10px;
      }
    }
  }
</style>
