<template>
  <div class="home">
    <div class="header">
      <headmenu></headmenu>
      <leftmenu></leftmenu>
      <div class="header-center">
        <carousel></carousel>
        <div style="display:flex;">
          <hot></hot>
          <hotp style="margin-left:6px;"></hotp>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {setName,getName} from "@/util/auth";
import headmenu from "@/components/pages/home/headerMenu"
import hot from "@/components/pages/home/hot"
import hotp from "@/components/pages/home/hotp"
import carousel from "@/components/pages/home/carousel"
import leftmenu from "@/components/module/menuLeft"
export default {
  components:{
    leftmenu,headmenu,carousel,hot,hotp
  },
  data () {
    return {
      msg: 'home'
    }
  },
  mounted() {
    this.$bus.$on("test",(a) => {
      console.log(a)
    })
  },
  methods:{
    click(){
      console.log("ASd")
    },
    clicked(){
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

<style scoped lang="scss">
  .home{
    height: 2000px;
    background: #f7f7f7;
    .header{
      height: 690px;
      position: relative;
      .header-center{
        position: absolute;
        top: 42px;
        left: 220px;
      }
    }
  }
</style>
