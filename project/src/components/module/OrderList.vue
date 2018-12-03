<template>
    <div>
      <el-row class="el-row-list">
        <el-col :span="8"><div class="grid-content bg-purple">团购商品</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple-light">单价</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple">优惠</div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple">实付款</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple-light">几人成团</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple">凑团人数</div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple-light">拼团状态</div></el-col>
        <el-col :span="2"><div class="grid-content bg-purple-light">交易操作</div></el-col>
      </el-row>
      <el-container v-for="(item,index) of orderlist" :key="index">
        <el-header>
          <el-row class="">
            <el-col :span="3">
              <div class="grid-content bg-purple">
                <strong>{{item.groupTime}}</strong>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">
                拼团号：{{item.groupNumber}}
              </div>
            </el-col>
            <el-col :span="14">
              <div class="grid-content bg-purple">
                <span class="shop_image"><img :src="'/static/'+item.shopImg"/></span>
                <span class="shop_name">{{item.shopName}}</span>
              </div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content bg-purple"><i class="el-icon-delete"></i></div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <el-row  class="">
            <el-col :span="8">
              <div class="grid-content bg-purple">
                      <span class="goods_image">
                        <img :src="'/static/'+item.productImg"/>
                      </span>
                <span class="goods_content">
                          <span>
                            <router-link to="" href="javascript:void(0)">{{item.productTitle}}</router-link>
                          </span>
                      </span>
              </div>
            </el-col>
            <el-col :span="2"><div class="grid-content bg-purple-light">￥{{item.productPrice}}</div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple">￥{{item.couponPrice}}</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple">￥{{item.productPrice-item.couponPrice}}</div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple-light">{{item.groupNeedPeople}}</div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple">{{item.groupRealityPeople}}</div></el-col>
            <el-col :span="3">
              <div v-if="item.groupStatus==0" class="grid-content bg-purple-light">正在拼团</div>
              <div v-if="item.groupStatus==1" class="grid-content bg-purple-light">拼团完成</div>
              <div v-if="item.groupStatus==2" class="grid-content bg-purple-light">已发货</div>
              <div v-if="item.groupStatus==3" class="grid-content bg-purple-light">已签收</div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple-light">
                <div class="tip">
                  <el-button type="success"  size="mini" v-if="item.groupStatus==0"  @click="cancelGroup">取消拼团</el-button>
                  <!--<el-button type="primary"  size="mini"  v-if="item.groupStatus==1">去支付</el-button>-->
                </div>
                <div class="tip">
                  <el-button type="info"  size="mini"   v-if="item.groupStatus==0">分享邀人</el-button>
                </div>
                <div>
                  <el-button type="info"  size="mini"  v-if="item.groupStatus==1">查看订单</el-button>
                </div>
                <!--<div>-->
                <!--<el-button type="info"  size="mini">分享邀人</el-button>-->
                <!--</div>-->
              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </div>
</template>
<style>
</style>
<script>
  export default {
    props:['orderlist'],
    data() {
      return {
        msg: 'hello world'
      }
    },
    methods: {
      cancelGroup() {
        this.$confirm('取消拼团您将退出此次拼团，是否确认取消？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确认取消',
          cancelButtonText: '放弃取消'
        }).then(() => {
            this.$message({
              type: 'info',
              message: '已确认取消拼团'
            });
          }).catch(action => {
            this.$message({
              type: 'info',
              message: '取消此次操作'
            })
          });
      }
    }
  }
</script>
