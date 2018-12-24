<template>
  <div class="content"> 
  </div>
</template>

<script>
export default {
    props:["src"],
  data () {
    return {
      show:false,
      configs: {
        width:400,
        height:400,
        maskWidth:100,
        maskHeight:100,
        maskColor:'#ddd',
        maskOpacity:0.8
      }
    }
  },
  mounted() {
  },
  methods:{
  }
}
</script>

<style scoped lang="scss">
.content{
 
}
</style>
