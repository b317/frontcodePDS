<template>
  <div style="background-color: rgb(246, 246, 246);padding-right: 20px">
    <el-row :gutter="20" style="left: 1px">
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <h2>{{ msg }} <i class="el-icon-loading"></i></h2>
          <ul>
            <li v-bind:class="[mesTag==0 ? active : '']" @click="mesTag=0">
              <router-link to="/newsOne" href="javascript:void(0)" class="msgCheck">
                <i class="el-icon-setting"></i>&nbsp;<span ref="tagOne">系统通知</span>
              </router-link>
            </li>
            <li v-bind:class="[mesTag==1 ? active : '']" @click="mesTag=1">
              <router-link to="/newsTwo" href="javascript:void(0)" class="msgCheck">
                <i class="el-icon-goods"></i>&nbsp;<span ref="tagTwo">活动消息</span>
              </router-link>
            </li>
            <li v-bind:class="[mesTag==2 ? active : '']" @click="mesTag=2">
              <router-link to="/newsThree" href="javascript:void(0)" class="msgCheck msgCheckLast">
                <i class="el-icon-document"></i>&nbsp;<span ref="tagThree">优惠券消息</span>
              </router-link>
            </li>
          </ul>
        </div>
      </el-col>
      <el-col :span="19"  class="MsgContent">
      <router-view></router-view>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg:"消息中心",
        mesTag:0,
        active:'active',
        tagArray:[]
      }
    },
    mounted(){
      this.init();
    },
    methods:{
      init(){
      }
    }
  }
</script>

<style scoped>
  .bg-purple h2{background: #707e8a;padding:8px;color:white;margin-bottom: 40px}
  .bg-purple{background: white;}
  .bg-purple ul{list-style: none;padding: 0}
  .bg-purple ul .msgCheck{color:#333;font-weight: bold;}
  .bg-purple ul li{border:4px solid rgb(246, 246, 246);border-right: none}
  .bg-purple ul li:hover{background: #f65d29}
  .bg-purple ul li:hover .msgCheck{color:white}
  .bg-purple ul li{padding:10px 0;}
  .bg-purple ul li a{padding:10px 108px 10px 10px;}
  .bg-purple ul li .msgCheckLast{padding-right: 91px}
  .active{background: #f65d29}
  .active .msgCheck{color:white !important;}

  .MsgContent{height: 500px;overflow-y: auto}
  /*滚动条样式*/
  /*.MsgContent::-webkit-scrollbar {!*滚动条整体样式*!*/
    /*width: 8px;     !*高宽分别对应横竖滚动条的尺寸*!*/
    /*height: 4px;*/
  /*}*/
  /*.MsgContent::-webkit-scrollbar-thumb {!*滚动条里面小方块*!*/
    /*border-radius: 8px;*/
    /*!*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*!*/
    /*background: #d0d0d0;*/
  /*}*/
  /*.MsgContent::-webkit-scrollbar-track {!*滚动条里面轨道*!*/
    /*!*-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);*!*/
    /*border-radius: 0;*/
    /*!*background: rgba(0,0,0,0.1);*!*/
  /*}*/
  .MsgContent::-webkit-scrollbar {display:none}
</style>
