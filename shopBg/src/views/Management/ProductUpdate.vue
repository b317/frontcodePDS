<template>
  <div>
    <div class="bread_crumbs">
      <span>商品管理&nbsp;<i class="present">--&nbsp;{{msg}}</i></span>
    </div>
    <div class="update_product">
      <div class="step">
        <el-steps :active="1" simple>
          <el-step title="选择商品分类标签" icon="el-icon-edit"></el-step>
          <el-step title="填写商品信息" icon="el-icon-upload"></el-step>
          <el-step title="上传商品图片" icon="el-icon-picture"></el-step>
          <el-step title="其他信息" icon="el-icon-picture"></el-step>
        </el-steps>
      </div>
      <div class="step_one">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item>当前选择的商品标签类别是：</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div style="width: 100%;text-align: center;margin-top: 20px">
          <div class="step_one_left">
            <header>请选择一级商品标签</header>
            <ul>
              <li @click="index=0" :class="{'active':index==0}">电子产品</li>
              <li @click="index=1" :class="{'active':index==1}">家具电器</li>
            </ul>
          </div>
          <span class="right_icon"><img src="/static/right.png"></span>
          <div class="step_one_right">
            <header>请选择二级商品标签</header>
            <ul>
              <li>电脑</li>
              <li>苹果手机</li>
            </ul>
            <ul v-if="false">
              <li>电饭煲</li>
              <li>电冰箱</li>
            </ul>
          </div>
          <div>
            <el-button>上一步</el-button>
            <el-button type="primary">下一步</el-button>
          </div>
        </div>
      </div>
      <div class="step_two"></div>
      <div class="step_three"></div>
      <div class="step_four"></div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  export default {
    data() {
      return {
        msg: '商品上新',
        index:null
      }
    }
  }
</script>
