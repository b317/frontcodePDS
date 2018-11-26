<template>
    <div class="container">
      <div class="fontwarn" v-if="showWarn">注:收货人仅为用户本人<i class="el-icon-close warn-icon" @click="wIconClick"></i></div>
      <div class="form-group">
        <div class="input-group"><div class="input-font">收货姓名</div><input readonly class="readonly" v-model="realname"/><div class="blue" @click="nameclick">未设置真实姓名？</div></div>
        <div class="input-group"><div class="input-font">手机号码</div><input readonly class="readonly" v-model="phone"/></div>
        <div class="input-group"><div class="input-font">收货地址</div><v-distpicker @selected="selected"></v-distpicker><div class="warn">{{msg1}}</div></div>
        <div class="input-group"><div class="input-font">详细信息</div><input v-model="detailInfo"/><div class="warn">{{msg2}}</div></div>
        <div class="input-group"><div class="input-font">邮编号码</div><input v-model="zip"/><div class="warn">{{msg3}}</div></div>
        <button @click="clickbtn">保存</button>
      </div>
    </div>
</template>

<script>
import VDistpicker from 'v-distpicker'
export default {
  components: { VDistpicker },
  data () {
    return {
        msg:"设置收货地址",
        realname:"奥特曼",
        phone:"10086",
        address:"",
        detailInfo:"",
        zip:"",
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
    selected(e){
      this.address = `${e.province.value}/${e.city.value}/${e.area.value}`
      console.log(this.address)
    },
    nameclick(){
      this.$router.push("setUserInfo")
    },
    clickbtn(){
      if(!this.address){
        this.msg1 = "必填信息"
      }else{
        this.msg1 = ""
      }
      if(!this.detailInfo){
        this.msg2 = "必填信息"
      }else{
        this.msg2 = ""
      }
      if(!this.zip){
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
