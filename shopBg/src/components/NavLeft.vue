<template>
  <div class="nav_left">
    <el-menu v-if="selectIndex==1 || selectIndex==null"
             default-active="1"
             class="el-menu-vertical-demo"
             @select="handleSelect"
             background-color="#2C3E50"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">欢迎页</span>
      </el-menu-item>
    </el-menu>

    <el-menu v-if="selectIndex==2"
             default-active="1"
             class="el-menu-vertical-demo"
             @select="handleSelect"
             background-color="#2C3E50"
             text-color="#fff"
             active-text-color="#ffd04b">
      <!--<el-menu-item index="1">-->
        <!--<i class="el-icon-menu"></i>-->
        <!--<span slot="title">商品管理</span>-->
      <!--</el-menu-item>-->
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-submenu index="2" class="product_manage">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
          <el-menu-item index="2-1" style="min-width: 180px; !important;">商品列表</el-menu-item>
          <el-menu-item index="2-2" style="min-width: 180px; !important;">商品分类</el-menu-item>
          <el-menu-item index="2-3" style="min-width: 180px; !important;">商品上新</el-menu-item>
          <el-menu-item index="2-4" style="min-width: 180px; !important;">商品删除</el-menu-item>
          <el-menu-item index="2-5" style="min-width: 180px; !important;">修改库存</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">优惠券管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">拼团管理</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">客户名单管理</span>
      </el-menu-item>
    </el-menu>

    <el-menu v-if="selectIndex==3"
             default-active="1"
             class="el-menu-vertical-demo"
             @select="handleSelect"
             background-color="#2C3E50"
             text-color="#fff"
             active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">系统消息</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">消息群发</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style>
  .nav_left>.el-menu{border-right:1px solid #545c64;border-top:1px solid rgba(22, 23, 22, 0.21);
  box-shadow:0 -5px 8px rgba(4, 4, 4, 0.3)}
  .nav_left .product_manage .el-menu-item{text-align: center;line-height: 45px;height:45px; }
</style>
<script>
  export default {
    props:["selectIndex"],
    data() {
      return {
        msg: 'hello world',
        activeIndex:''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        if(this.selectIndex=='1'){
          this.$router.push('/')
        }else if(this.selectIndex=='2'){
          switch (key){
            case '1':this.$router.push('/OrderManage');
              break;
            case '2-1':this.$router.push('/ProductList');
              break;
            case '2-2':this.$router.push('/ProductSort');
              break;
            case '2-3':this.$router.push('/ProductUpdate');
              break;
            case '2-4':this.$router.push('/productList');
              break;
            case '2-5':this.$router.push('/productList');
              break;
            case '3':this.$router.push('/CouponManage');
              break;
            case '4':this.$router.push('/GroupManage');
              break;
            case '5':this.$router.push('/ClientListManage');
              break;
          }
        }else{
          switch (key){
            case '1':this.$router.push('/SystemMes');
              break;
            case '2':this.$router.push('/GroupSendMes');
              break;
          }
        }
      }
    }
  }
</script>
