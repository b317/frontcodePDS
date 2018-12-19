<template>
  <div class="nav_header">
    <el-row style="background: #2C3E50;min-width: 900px !important;">
      <el-col :span="4" style="">
        <div class="grid-content bg-purple">
          <span class="logo">拼多少</span>
          <span class="small_logo">商家后台</span>
        </div>
      </el-col>
      <el-col :span="13">
        <div class="grid-content bg-purple-light">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#2C3E50"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">店铺首页</el-menu-item>
            <el-menu-item index="2">我的管理</el-menu-item>
            <el-menu-item index="3">消息中心</el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content bg-purple header_right">
          <el-row>
            <el-col :span="10" style="position: relative;z-index: 1000">
              <img src="/static/touxiang.jpg">
              <div style="" class="admin">
                admin
                <i class="el-icon-caret-bottom"></i>
                <div style="position: absolute;top:40px;left:46px;width: 45%;height:20px;"></div>
                <div class="admin_pull_down">
                  <div><a href="javascript:void(0)" @click="dialogFormVisible = true">修改店铺信息</a></div>
                  <div><a href="javascript:void(0)">修改个人信息</a></div>
                </div>
              </div>
            </el-col>
            <el-col :span="14">
              <ul>
                <li>
                  <span><img src="/static/home.png"/>拼多少首页</span>
                </li>
                <li><span><img src="/static/exit.png"/>退出</span></li>
              </ul>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
    <!--修改店铺信息弹出框-->
    <el-dialog title="修改店铺信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="店铺名称" :label-width="formLabelWidth">
          <el-input v-model="form.shop_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  import ElRow from "element-ui/packages/row/src/row";

  export default {
    components: {ElRow},
    data() {
      return {
//        activeIndex: '1',
        dialogFormVisible: false,
        form: {
          shop_name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
      };
    },
    computed:{
      activeIndex(){
        return this.$store.state.headerTag.active_index;
      }
    },
    mounted(){
      let index = sessionStorage.getItem("active_index");
      this.$store.dispatch("checkIndexAction",index);
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$emit("selectTag",key);
        if(key==1){
          let index = window.sessionStorage.getItem("active_index");
          this.$store.dispatch("checkIndexAction",key);
          this.$router.push('/');
        }else if(key==2){
          this.$store.dispatch("checkIndexAction",key);
          this.$router.push('/OrderManage');
        }else{
//          console.log(this.$route.params.index);
          this.$store.dispatch("checkIndexAction",key);
          this.$router.push('/SystemMes');
        }
      }
    }
  }
</script>
<style>
  /*.nav_header .el-col:first-child div{*/
    /*vertical-align: middle;line-height: 50px;padding-left:20px ;*/
  /*}*/
  /*.nav_header .logo{*/
    /*font-family:LiSu;color: white;font-size: 34px;*/
    /*font-weight: bolder;cursor: pointer;*/
  /*}*/
  /*.nav_header .small_logo{*/
    /*color: #DCDFE6;border-bottom:1px solid #DCDFE6;*/
    /*font-family: microsoft yahei;font-size: 13px*/
  /*}*/
  /*.nav_header .el-menu{border-bottom: none !important;min-width:700px !important;}*/
  /*.nav_header .el-menu-item:first-child:hover{*/
    /*background: none !important;*/
  /*}*/
  /*!*.nav_header .header_right{*!*/
  /*!*line-height: 50px;*!*/
  /*!*}*!*/
  /*.nav_header .header_right .el-col:first-child img{*/
    /*margin-top: 5px;*/
    /*width: 40px;border-radius: 25px; vertical-align: middle;*/
    /*border: 4px solid gray;*/
  /*}*/

  /*.nav_header .header_right .el-col:first-child img:hover{*/
    /*border: 4px solid #909399;*/
  /*}*/
  /*.nav_header .header_right .el-col:last-child img{*/
    /*width: 30px; vertical-align: middle;*/
  /*}*/
  /*.nav_header .header_right ul{list-style: none;margin: 0;padding: 0;}*/
  /*.nav_header .header_right ul li{float: left;padding:15px 8px;}*/
  /*.nav_header .header_right ul li:hover{*/
    /*!*outline: 0;*!*/
    /*background-color: #303133;*/
  /*}*/
</style>
