<template>
    <div class="small_tag">
      <span style="padding-left: 14px">{{msg}}</span>
      <span class="span1"></span>
      <span class="span2"></span>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: '已读'
            }
        }
    }
</script>
<style>
  .span1{
    position: absolute;width:60px;height:16px;
    /*border:1px solid red;*/
    top:-1px;left:-14px;
    background: rgb(246, 246, 246);
    transform: rotate(-35deg);
  }
  .span2{
    position: absolute;width:16px;height:80px;
    /*border:1px solid red;*/
    right: -13px;top:-20px;z-index:10000 ;
    background: rgb(246, 246, 246);
    transform: rotate(-35deg);
  }
</style>
