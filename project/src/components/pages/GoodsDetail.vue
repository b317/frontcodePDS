<template>
    <div>
      <!--位置-->
      <div class="appTop" style="min-width: 1079px;">
        <span>您的位置：</span>
        <span class=""><router-link title="首页" href="javascript:void(0);" target="_blank" to="/home" >首页</router-link>&gt;</span>
        <span class=""><router-link title="我的订单" href="javascript:void(0);" to="/goods">我的订单</router-link>&gt;</span>
        <span class="last"><span title="订单详情">订单详情</span></span>
        <div class="trade-detail-hotline" style="float: right;">
          <span>服务热线：</span><em><span class="ui-trade-label ">0000 000 000</span></em>
        </div>
      </div>
      <!--步骤-->
      <div class="appStep">
        <el-steps :space="200" :active="active" finish-status="success">
          <el-step title="拍下商品" description="2018-12-10 21:46:44"></el-step>
          <el-step title="进行付款" description="2018-12-10 21:46:57"></el-step>
          <el-step title="卖家发货" description="2018-12-11 09:55:21"></el-step>
          <el-step title="确认收货" description="2018-12-13 16:06:32"></el-step>
          <el-step title="交易成功" description="2018-12-13 16:06:52"></el-step>
        </el-steps>
      </div>
      <!--内容-->
      <div class="appDetailPanel">
        <table class="bought-form-table" style="min-width: 1079px;">
          <tbody>
          <tr class="tr-center tb-hd">
            <td style="width: 437px;">商品</td>
            <td style="width: 127px;">订单总价</td>
            <td style="width: 107px;">数量</td>
            <td style="width: 10%;">优惠</td>
            <td style="width: 197px;">状态</td>
          </tr>
          <tr>
            <td style="height: 45px;">
              <div class="bought-form-hd">
                <!--<span class="bg-span" style="padding-left: 15px;padding-right: 10px;">包裹</span>-->
                <!--<span class="bg-span bought-express">韵达快递</span>-->
                <span class="bg-span bought-num">运单号：<span>{{order_mes.order_num}}</span></span>
                <span class="bg-span bought-time" style="padding-left: 10px;">{{order_mes.createdAt}}</span>
              </div>
            </td>
            <td colspan="3">
              <span class="bg-span bought-sign">快件已被签收,如有问题请电联业务员：文彦烟【18666******】。相逢是缘,如果您对我的服务感到满意,给个五星好不好?【请在评价小件员处给予五星好评】如有疑问请联系快递员</span>
              <span style="padding-left: 5px;">更多<i class="el-icon-arrow-down" style="font-size: 10px;"></i></span>
            </td>
            <td></td>
          </tr>
          <tr class="tr-center">
            <td>
              <div class="g-img-a" style="float: left;margin: 12px;">
                <div><a href="#"><img :src="'http://134.175.113.58/'+product_mes.goods_photo" alt="" style="width: 80px;height: 80px;"/></a></div>
              </div>
              <div class="g-cont-p" style="text-align: left;">
                <p><span style="line-height:16px;">{{product_mes.goods_name}}:{{product_mes.goods_desc}}</span></p>
                <p style="color: #9e9e9e"><span><span>颜色分类</span><span>：</span><span>【幸运】翡翠青叶</span></span></p>
              </div>
            </td>
            <td><span>{{order_mes.order_price}}</span></td>
            <td><span>1</span></td>
            <td><span>{{product_mes.goods_discount}}</span></td>
            <td class="border-result">
              <span v-if="this.$route.params.orderStatus==0">等待付款</span>
              <span v-if="this.$route.params.orderStatus==1">等待发货</span>
              <span v-if="this.$route.params.orderStatus==2">已经发货</span>
              <span v-if="this.$route.params.orderStatus==3">交易完成</span>
              <span v-if="this.$route.params.orderStatus==4">正退款中</span>
              <span v-if="this.$route.params.orderStatus==5">交易失败</span>
            </td>
          </tr>
          </tbody>
        </table>
        <table class="trade-status-table" style="min-width: 1079px;">
          <tbody>
          <tr>
            <td style="padding-left: 15px;width: 37%;"><h3>订单信息</h3></td>
            <td rowspan="2" style="width: 577px;">
              <div class="detailBlock">
                <div class="trade-detail-imfor">
                  <span class="imfor-icon"><img src="../../../static/T1e.aoXuXdXXa94Hfd-32-32.png"></span>
                  <span class="imfor-title">
                    <span class="">
                      <h3>订单状态:
                        <span v-if="this.$route.params.orderStatus==0">等待付款</span>
                        <span v-if="this.$route.params.orderStatus==1">等待发货</span>
                        <span v-if="this.$route.params.orderStatus==2">已经发货</span>
                        <span v-if="this.$route.params.orderStatus==3">交易成功</span>
                        <span v-if="this.$route.params.orderStatus==4">正退款中</span>
                        <span v-if="this.$route.params.orderStatus==5">交易失败</span>
                      </h3>
                    </span>
                  </span>
                </div>
                <div class="trade-detail-prompt">
                  <div class="dotted-node"><span>&nbsp;</span><span>物流：</span></div>
                  <div class="trade-detail-main">
                    <span class="package-detail">韵达快递</span>
                    <span class="package-detail">运单号:</span><span>{{order_mes.order_num}}</span>
                    <div class="logistic-detail">
                      <span class="package-detail package-time-detail">2018-11-17 22:47:21</span>
                      <span class="package-detail package-explain-detail"> 快件已被签收,如有问题请电联业务员：文彦烟【18666******】。相逢是缘,如果您对我的服务感到满意,给个五星好不好?【请在评价小件员处给予五星好评】如有疑问请联系快递员</span>
                    </div>
                  </div>
                </div>
                <div class="trade-detail-operate">
                  <dl>
                    <dt>商品总价：</dt>
                    <dd>￥<span>{{product_mes.goods_price}}</span></dd>
                  </dl>
                  <dl>
                    <dt>运费(快递)：</dt>
                    <dd>￥<span>{{product_mes.goods_fare}}</span></dd>
                  </dl>
                  <dl>
                    <dt>订单总价：</dt>
                    <dd>￥<span>{{order_mes.order_price}}</span></dd>
                  </dl>
                  <dl>
                    <dt>实付款：</dt>
                    <dd>￥<span>{{order_mes.order_price}}</span></dd>
                  </dl>
                </div>
              </div>
            </td>
          </tr>
          <tr class="detail-list-tr">
            <td style="">
              <ul>
                <li class="table-list" style="padding-top: 15px;">
                  <div class="trade-imfor-dt" style="vertical-align: top;"><span>收货地址</span><span>：</span></div>
                  <div class="trade-imfor-dd" style="width: 214px;">
                    <span class="ui-trade-label null">{{order_mes.order_addr}}</span>
                  </div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>买家留言</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label null">{{order_mes.order_mark}}</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>订单编号</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label middleText">{{order_mes.order_num}}</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>付款方式</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">{{order_mes.pay_method}}</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>成交时间</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">{{order_mes.createdAt}}</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>付款时间</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">{{order_mes.createdAt}}</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>发货时间</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">2018-11-13 09:55:21</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>完结时间</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">2018-11-17 16:06:32</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>商家店名</span><span>：</span></div>
                  <div class="trade-imfor-dd">
                      <span><span class="middleText">
                        <span class="short-dd-nick" title="馨语富尚专卖店">{{this.$route.params.shopName}}-馨语富尚专卖店
                          <span class="ww-light ww-small">
                            <a href="#" class="ww-inline ww-online" title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验，还支持语音视频噢。">
                              <span>客服在线</span>
                            </a>
                          </span>
                        </span>
                      </span></span>
                  </div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>商家公司</span><span>：</span></div>
                  <div class="trade-imfor-dd">
                    <span class="ui-trade-label">上海伯众数码科技有限公司</span>
                  </div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>商家城市</span><span>：</span></div>
                  <div class="trade-imfor-dd">
                    <span class="ui-trade-label">上海市</span>
                  </div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>联系商家</span><span>：</span></div>
                  <div class="trade-imfor-dd">
                    <span class="ui-trade-label">15001782890</span>
                  </div>
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script>
  import {getCookie} from "@/util/auth";
  import axios from 'axios'
  export default {
    props: [],
    data() {
      return {
        msg: 'hello world',
        active: 0,
        product_mes:'',
        order_mes:''
      }
    },
    methods: {
     findGoodsById(){
       axios.get('/v1/merchant/goods/'+this.$route.query.goods_id,{
         headers:{
           'Authorization': 'Bearer '+getCookie("token")
         }
       }).then((res)=>{
         let result = res.data.data;
         this.product_mes=result;
         console.log("hahaha");
       }).catch((err)=>{
         console.log(err);
       })
     },
      findOrderById(){
        axios.get(' /v1/user/orders/'+this.$route.query.order_id,{
          headers:{
            'Authorization': 'Bearer '+getCookie("token")
          }
        }).then((res)=>{
          let result = res.data.data;
          this.order_mes=result;
          //      时间格式化
          var dateee = new Date(this.order_mes.createdAt).toJSON();
          this.order_mes.createdAt = new Date(+new Date(dateee)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
          console.log("hahaha");
        }).catch((err)=>{
          console.log(err);
        })
      }
    },
    mounted(){
      this.findGoodsById();
      this.findOrderById();
      this.active = this.$route.params.orderStatus + 1;
      if( this.active == 4){
        this.active =5
      }
    }
  }
</script>
<style scoped>
  ul, li{list-style: none;}
  .appTop,.appTop a,.appDetailPanel{font-size: 14px;color: #666;}
  .appTop a:hover{color: #f65d29;}
  .appTop{margin-bottom: 15px;padding-top: 10px;border-top: 1px solid #ccc;}
  .appTop span.last{color: #f65d29;font-weight: bolder;}

  table{border: 1px solid #e8e8e8;margin-bottom: 15px;}
  table tr.tr-center td{
    line-height: 1;
    text-align: center;
  }
  table tr.tr-center.tb-hd{height: 35px}
  .tr-center .g-cont-p{color: #666}
  .bought-form-table tr,.trade-status-table tr td{
    border-width: 1px 1px 0 0;
    border-style: solid;
    border-color: #ececec;
  }
  table,table tr,table tr td{border-collapse:collapse;}
  table tr td .bought-sign{
    display: inline-block;
    width: 247px;
    line-height: 16px;
    vertical-align: middle;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }
  table tr td.border-result{border-left: 1px solid #ececec;}

  .detail-list-tr td ul{
    margin: 0;
    padding: 0;
  }
  .detail-list-tr td ul li div{
    display: inline-block;
    padding-bottom: 15px;
  }
  .detail-list-tr td ul li .trade-imfor-dt{padding-left: 15px;}
  .trade-imfor-dd .ww-online{
    background-position: -80px 0;
  }
  .trade-imfor-dd a{
    width: 20px;
    height: 20px;
    text-decoration: none !important;
    background-image: url("../../../static/cs-130-60.gif");
  }
  .trade-imfor-dd span{
    line-height: 20px;
  }
  .trade-imfor-dd a span{
    display: none;
  }
  .trade-imfor-dd .ww-inline{
    display: inline-block;
    vertical-align: text-bottom;
  }
  .trade-status-table tr td .detailBlock{padding-left: 25px;}
  .detailBlock dl dt,.detailBlock dl dd{display: inline-block;}
  .detailBlock .trade-detail-imfor{
    height: 36px;
  }
  .trade-detail-imfor .imfor-icon {
    display: inline-block;
    vertical-align: middle;
  }
  .trade-detail-imfor .imfor-title{
    display: inline-block;
    font-size: 14px;
    font-weight: bolder;
    vertical-align: middle;
    margin-left: 10px;
  }
  .trade-detail-prompt{margin:25px 0 0 25px;}
  .trade-detail-prompt .dotted-node{display: inline-block;vertical-align: top;}
  .trade-detail-prompt .trade-detail-main{display: inline-block;width: 577px;}
  .trade-detail-operate dl dt{
    width: 127px;
    text-align: center;
  }
</style>
