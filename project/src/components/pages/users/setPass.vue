<template>
    <div class="container">
      <div class="fontwarn" v-if="showWarn">注:换绑手机号码功能暂未开放<i class="el-icon-close warn-icon" @click="wIconClick"></i></div>
      <div class="form-group">
        <div class="input-group"><div class="input-font">原本密码</div><input  v-model="oldpass"/><div class="warn">{{msg1}}</div></div>
        <div class="input-group"><div class="input-font">更改密码</div><input  v-model="newpass"/><div class="warn">{{msg2}}</div></div>
        <div class="input-group"><div class="input-font">重复密码</div><input  v-model="newpass2"/><div class="warn">{{msg3}}</div></div>
        <button @click="clickbtn">保存</button>
      </div>  
    </div>
</template>

<script>
export default {
  data () {
    return {
        oldpass:"",
        newpass:"",
        newpass2:"",
        msg1:"",
        msg2:"",
        msg3:"",
        canS:false,
        showWarn:true
    }
  },
  methods:{
    wIconClick(){
      this.showWarn = false
    },
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

.container{
  height: 170px;
}
</style>
