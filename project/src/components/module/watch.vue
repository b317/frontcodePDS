<template>
  <div class="content"> 
    <img-zoom :src="src" width="300" height="400" :bigsrc="src" :configs="configs"></img-zoom>
  </div>
</template>

<script>
import imgZoom from 'vue2.0-zoom'
export default {
  components: { imgZoom },
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
