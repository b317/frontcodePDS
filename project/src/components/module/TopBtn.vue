<template>
  <div>
    <button type="button" class="back-top small" @click="backTop()" v-show="backTopShow">飞到顶部</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        backTopShow:false
      }
    },
    components: {},
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      backTop() {
        let back = setInterval(() => {
          if(document.body.scrollTop||document.documentElement.scrollTop){
            document.body.scrollTop-=100;
            document.documentElement.scrollTop-=100;
          }else {
            clearInterval(back)
          }
        });
      },
      handleScroll(){
        if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
          this.backTopShow=true;
        }
        else {
          this.backTopShow=false;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 10px
  }
  .back-top{
    width: 42px;
    height: 42px;
    color: #999;
    font-size: 12px;
  }
  button{border: 1px solid #ccc;}
</style>
