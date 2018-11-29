<template>
  <div class="block">
    <el-carousel>
      <el-carousel-item v-for="(item,key) in data" :key="key">
        <img :src=item class="img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
        data:["https://op.meituan.net/oppkit_pic/pc_index_banner/62a45aa4850492f550098aaecd09ecb1.jpg",
        "https://op.meituan.net/oppkit_pic/pc_index_banner/7828f4e0ac8b9096a63f7e2879721c00.jpg",
        "https://op.meituan.net/oppkit_pic/pc_index_banner/439f748edec577b30354098fab1aa1c8.png",
        "https://op.meituan.net/oppkit_pic/pc_index_banner/e8a11125c4ba9d7b2cd4c781894eb80c.jpg"
        ]
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
