<template>
  <div>
    <el-row >
      <el-col :span="5">
        <div class="grid-content bg-purple">
          <left-tab v-bind:routeArr="routeArr"></left-tab>
        </div>
      </el-col>
      <el-col :span="19"><div class="grid-content bg-purple">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
          <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
          <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
        </el-tabs>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import leftTab from "@/components/module/leftTab"

  export default {
    components:{
      leftTab
    },
    data () {
      return {
        activeName: 'second',
        msg:"coupon",
        routeArr:{
          userInfo:"我的主页",
          coupon:"我的红包",
          order:"我的团购",
          goods:"我的订单",
        },
      }
    }
  }
</script>

<style scoped>

</style>
