<template>
  <div class="block">
    <el-carousel>
      <el-carousel-item v-for="(item,key) in data" :key="key">
          <img :src=item.img class="img" @click="click(item.url)">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {banner} from "@/api/http.js"
export default {
  mounted() {
    banner().then(res => {
      let data = res.data.data.bannerList
      data.map((item,index) => {
        let i = {
          img:"http://134.175.113.58/"+item.image,
          url:item.url,
          title:item.title
        }
        this.data.push(i)
      })
    })
    this.$bus.$emit("cal",this.data)
  },
  data () {
    return {
        data:[]
    }
  },
  methods:{
    click(a){
      window.open("http://"+a)
    }
  }
}
</script>

<style scoped lang="scss">
.block{
    height: 300px;
    width: 100%;
    .img{
      width: 100%;
      height: 300px;
    }
}
</style>
