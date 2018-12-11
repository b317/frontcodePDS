<template>
  <div id="app">
    <nav-header @selectTag="selectTag"></nav-header>
    <div>
      <el-row :gutter="20">
        <el-col :span="4">
          <div class="grid-content bg-purple tag_left">
            <nav-left v-bind:selectIndex="selectIndex"></nav-left>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-purple content">
            <router-view/>
          </div>
        </el-col>
      </el-row>
      <nav-footer></nav-footer>
    </div>
  </div>
</template>

<script>
  import "./assets/css/main.css";
  import NavHeader from '@/components/NavHeader'
  import NavLeft from '@/components/NavLeft'
  import NavFooter from '@/components/NavFooter'
  export default {
    name: 'App',
    components:{
      NavHeader,NavFooter,NavLeft
    },
    data(){
      return{
        selectIndex:'',
      }
    },
    mounted(){
      this.selectIndex=sessionStorage.getItem("selectIndex");
    },
    methods:{
      selectTag(key){
        this.selectIndex=key;
        sessionStorage.removeItem("selectIndex");
        sessionStorage.setItem("selectIndex",key);
      }
    }
  }
</script>

<style>
  html,body{
    margin:0;width:100%;font-family: microsoft yahei;
  }
  #app{
    min-width: 1254px !important;
  }
  #app .el-row{
    margin-right:0 !important;
  }
  .tag_left{height:549px;background: #2C3E50;}
  .content{height:529px;overflow-y: auto;background: white;margin-top: 20px}
  .content::-webkit-scrollbar {display:none}
</style>
