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
    </div>
      <nav-footer class="nav_footer"></nav-footer>
  </div>
</template>

<script>
  import "./assets/css/main.css";
  import NavHeader from '@/components/NavHeader'
  import NavFooter from '@/components/NavFooter'
  import NavLeft from '@/components/NavLeft'
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
  .content{height:519px;overflow-y: auto;background: white;
    margin-top: 20px;overflow-x: hidden}

  @media screen and (min-height: 700px){
    .tag_left{height:649px;}
    .content{height:619px}
  }
  .content::-webkit-scrollbar {display:none}
  .nav_footer{position: absolute;width: 100%}
</style>
