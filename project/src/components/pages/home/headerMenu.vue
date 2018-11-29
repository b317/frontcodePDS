<template>
  <div class="content">
      <div class="home">主题市场</div>
      <div class="li" v-for="(item,key) in data" :key=key>
          {{item}}
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        data:[
            "超级团购",
            "2018盛典",
            "超级便宜"
        ]
    }
  }
}
</script>

<style scoped lang="scss">
.content{
    position: relative;
    left: -120px;
    width: 98.9vw;
    height: 32px;
    background-image: linear-gradient(to right,#ff9000 0,#ff5000 100%);
    background-repeat: repeat-x;
    display: flex;
    flex-direction: row;
    .home{
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        min-width: 210px;
        text-align: center;
        cursor: pointer;
        background: #ff5000;
        margin-left: 120px;
    }
    .home:hover{
        background: #ff5100b4;
    }
    .li{
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        min-width: 120px;
        text-align: center;
        cursor: pointer;
    }
    .li:hover{
        background: #ff5000;
    }
}
</style>
