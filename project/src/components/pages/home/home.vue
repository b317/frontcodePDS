<template>
  <div class="home">
    <div class="header">
      <headmenu></headmenu>
      <leftmenu></leftmenu>
      <div class="header-center">
        <carousel></carousel>
        <div style="display:flex;">
          <hotp :data=data :type=type[1]></hotp>
          <hotp :data=data :type=type[0] style="margin-left:6px;"></hotp>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ddd from "./hot.js"
import {setName,getName} from "@/util/auth";
import headmenu from "@/components/pages/home/headerMenu"
import hotp from "@/components/pages/home/hotp"
import carousel from "@/components/pages/home/carousel"
import leftmenu from "@/components/module/menuLeft"
export default {
  components:{
    leftmenu,headmenu,carousel,hotp
  },
  data () {
    return {
      msg: 'home',
      data:[],
      type:[1,2]
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
