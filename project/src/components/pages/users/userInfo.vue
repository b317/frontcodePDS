<template>
    <div class="container">
      <div class="fontwarn">没有什么消息</div>
      <div class="info"></div>
      <!-- <watchpic :src="src"></watchpic> -->
    </div>
</template>

<script>
import watchpic from "@/components/module/watch"
export default {
  components:{watchpic},
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
        canS:false,
        src:"../../../static/meinv.jpg"
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
