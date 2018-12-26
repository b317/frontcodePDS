<template>
    <div class="goodsdetail">
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
          <el-step title="拍下商品" :description="order_mes.createdAt"></el-step>
          <el-step title="进行付款" :description="order_mes.payedAt"></el-step>
          <el-step title="卖家发货" :description="order_mes.payedAt"></el-step>
          <el-step title="确认收货" :description="order_mes.payedAt"></el-step>
          <el-step title="交易成功" :description="order_mes.finishedAt"></el-step>
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
                <span class="bg-span" style="padding-left: 15px;padding-right: 10px;">包裹</span>
                <span class="bg-span bought-express">xxxx</span>
                <span class="bg-span bought-num">运单号：<span>xxxxxxxxxxx</span></span>
              </div>
            </td>
            <td colspan="3">
              <span class="bg-span bought-sign"> 快件已被签收,如有问题请联系<span
                class="span-a">商家客服</span>。相逢是缘,如果您对我的服务感到满意,给个五星好不好?</span>
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
            <td><span>￥{{order_mes.order_price}}</span></td>
            <td><span>1</span></td>
            <td><span>￥{{product_mes.goods_discount}}</span></td>
            <td class="border-result"><span>{{order_mes.order_status}}</span></td>
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
                      <h3>订单状态：{{order_mes.order_status}}</h3>
                    </span>
                  </span>
                </div>
                <div class="trade-detail-prompt">
                  <div class="dotted-node">
                    <span>物流：</span>
                    <span class="package-detail">xxxx</span>
                    <span class="package-detail">运单号:</span><span>xxxxxxxx</span>
                  </div>
                  <div class="trade-detail-main">
                    <span class="package-detail package-time-detail">xxxx-xx-xx xx:xx:xx</span>
                    <span class="package-detail package-explain-detail"> 快件已被签收,如有问题请联系<span
                      class="span-a">商家客服</span>。相逢是缘,如果您对我的服务感到满意,给个五星好不好?</span>
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
                    <span class="ui-trade-label null">{{order_mes.client_nick}},{{order_mes.client_phone}},{{order_mes.order_addr}} ,xxxxxx</span>
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
                  <div class="trade-imfor-dt"><span>订单时间</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">{{order_mes.createdAt}}</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>付款方式</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">{{order_mes.pay_method}}</span>/<span class="ui-trade-label">xxxxxxxxxx</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>付款时间</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">{{order_mes.payedAt}}</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>更新时间</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">{{order_mes.updatedAt}}</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>完结时间</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">{{order_mes.finishedAt}}</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>商家店名</span><span>：</span></div>
                  <div class="trade-imfor-dd">
                      <span><span class="middleText">
                        <span class="short-dd-nick" :title="shop_mes.shop_name">{{shop_mes.shop_name}}
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
                  <div class="trade-imfor-dt"><span>商家城市</span><span>：</span></div>
                  <div class="trade-imfor-dd">
                    <span class="ui-trade-label">{{shop_mes.shop_addr}}</span>
                  </div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>联系商家</span><span>：</span></div>
                  <div class="trade-imfor-dd">
                    <span class="ui-trade-label">{{shop_mes.shop_phone}} / QQ{{shop_mes.shop_qq}}</span>
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
        order_mes:'',
        shop_mes:''
      }
    },
    methods: {
      //时间显示格式
      formatTime(item){
        let time = item.createdAt;
        var date = new Date(time).toJSON();
        item.createdAt = new Date(+new Date(date)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');

        let time1 = item.payedAt;
        var date1 = new Date(time1).toJSON();
        item.payedAt = new Date(+new Date(date1)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');

        let time2 = item.finishedAt;
        var date2 = new Date(time2).toJSON();
        item.finishedAt = new Date(+new Date(date2)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');

        let time3 = item.updatedAt;
        var date3 = new Date(time3).toJSON();
        item.updatedAt = new Date(+new Date(date3)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
      },
      //根据id获取商品信息
      findGoodsById(){
       axios.get('/v1/merchant/goods/'+this.$route.query.goods_id,{
         headers:{
           'Authorization': 'Bearer '+getCookie("token")
         }
       }).then((res)=>{
         let result = res.data.data;
         this.product_mes=result;
         this.findShopById(this.product_mes);
         console.log("hahaha");
       }).catch((err)=>{
         console.log(err);
       })
     },
      //根据id获取订单信息
      findOrderById(){
        axios.get(' /v1/user/orders/'+this.$route.query.order_id,{
          headers:{
            'Authorization': 'Bearer '+getCookie("token")
          }
        }).then((res)=>{
          let result = res.data.data;
          this.order_mes=result;
          //时间格式化
          this.formatTime(this.order_mes);
          this.formatStep(this.order_mes);
        }).catch((err)=>{
          console.log(err);
        })
      },
      //根据id获取商铺信息
      findShopById(item){
        axios.get('/v1/merchant/detailbyself/'+item.shop_id,{
          headers:{
            "Authorization":"Bearer "+ getCookie("token")
          }
        }).then((res)=>{
          let result = res.data.data;
          this.shop_mes = '';
          this.shop_mes=result;
          console.log(this.shop_mes.shop_name);
        }).catch((err)=>{
          console.log(err);
        })
      },
      //步骤显示
      formatStep(item){
        if(item.order_status=='待支付'){this.active =1}
        if(item.order_status=='已支付'||item.order_status=='待发货'){this.active =2}
        if(item.order_status=='已发货'){this.active =3}
        if(item.order_status=='已完成'){this.active =5}
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
  @import "../../css/goods.css";
  .span-a{text-decoration: underline;color: #20a0ff;cursor: pointer;}
  .span-a:hover{text-decoration: underline;color: #ff4200;cursor: pointer;}
</style>
