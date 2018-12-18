<template>
  <div class="content">
      <div class="home">主题市场</div>
      <div @click="click(item.url)" class="li" v-for="(item,key) in data" :key=key>
          {{item.title}}
      </div>
  </div>
</template>

<script>
export default {
    mounted() {
    this.$bus.$on("cal",a=>{
        this.data = a
    })
    },
  data () {
    return {
        data:{}
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
.content{
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
        width: 13.2%;
        text-align: center;
        cursor: pointer;
        background: #ff5000;
        margin-left: 10%;
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
