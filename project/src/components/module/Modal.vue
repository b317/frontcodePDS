<template>
  <div>
    <div class="md-modal modal-msg md-modal-transition" v-bind:class="{'md-show':mdShow}">
      <div class="md-modal-inner">
        <div class="md-top">
          <slot name="title"></slot>
          <i class="el-icon-close" @click="closeModal"></i>
        </div>
        <div class="md-content">
          <slot name="content_from"></slot>&nbsp;&nbsp;<slot name="time"></slot>
          <div>
            <slot name="content_detail"></slot>
          </div>
          <div class="btn-wrap">
            <slot name="btnGroup"></slot>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="md-overlay" v-if="mdShow" @click="closeModal"></div>-->
  </div>
</template>
<style>

</style>
<script>
  export default{
    props:["mdShow"],
    data(){
      return{
        msg:'hello vue'
      }
    },
    methods:{
      closeModal(){
        this.$emit("close");
      }
    }
  }
</script>
