<template>
    <div class="container">
      <div class="fontwarn">没有什么消息</div>
      <div class="info"></div>
    </div>
</template>

<script>
export default {
   wIconClick(){
      this.showWarn = false
    },
  data () {
    return {
        oldpass:"",
        newpass:"",
        newpass2:"",
        msg1:"",
        msg2:"",
        msg3:"",
        canS:false
    }
  },
  methods:{
    clickbtn(){
      if(!this.oldpass){
        this.msg1 = "必填信息"
      }else{
        this.msg1 = ""
      }
      if(!this.newpass){
        this.msg2 = "必填信息"
      }else{
        this.msg2 = ""
      }
      if(!this.newpass2){
        this.msg3 = "必填信息"
      }else{
        this.msg3 = ""
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../css/set.scss';
</style>
