<template>
    <div class="shop-content">
      <!--商铺顶部-->
      <div class="goods-shop-hd" id="hd">
        <div class="layout grid-m J_TLayout">
          <div class="col-main">
            <div class="hd-head rela" style="height:120px;display: inline-block;">
              <div class="hd-name" style="height:80px;text-align:left;padding:20px 16px;">
                <span class="h1" style="line-height:80px;font-size:40px;font-family:宋体;">馨语给您一个温馨的家</span>
                <span class="h2" style="padding-top:16px;line-height:64px;font-size:16px;font-family:宋体;">生活有你更美好</span>
              </div>
            </div>
            <div class="shopExtra" style="height: 120px;display: inline-block;">
              <div class="slogo" style="">
                <span><strong>馨语富尚专卖店</strong></span>
                <div class="slogo-extraicon"></div>
              </div>
              <div class="other-info" style="margin-top: 15px;">
                <span class="info-item">
                  <span class="title">信 誉:</span>
                  <a class="r-rank-icon" href="#">
                    <img src="../../../static/icon-16-16.gif">
                  </a>
                </span>
                <span class="info-item cs-rank-icon" style="margin-left: 25px;">
                  <span class="title">客 服:</span>
                  <a class="ww-inline ww-online" href="#"
                   title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验，还支持语音视频噢。">
                    <span>客服在线</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--商铺内容-->
      <div class="goods-detail-panel">
        <div class="leftView">
          <div class="imgView">
            <div class="goods-img">
              <img class="small" :src="this.$route.params.src">
            </div>
            <p class="tm-action">
              <span id="J_EditItem" style="float: right;padding-right: 40px;"><a href=""><i class="el-icon-phone-outline"></i>举报</a></span>
              <a id="J_IShare" class="iShare tm-event" href="#"><i class="el-icon-share"></i>分享</a>
              <span style="padding-left: 15px;"><i class="el-icon-loading"></i>已销售<span id="J_CollectCount">0000</span></span>
            </p>
          </div>
          <div class="contentView">
            <div class="tb-detail-hd">
              <h1>{{this.$route.params.title}}</h1>
            </div>
            <div class="tm-fcs-panel">
              <!--<p><span class="tb-metatit">价格</span>-->
                <!--<span class="tb-tm-price"><em class="tm-yen">¥ </em>-->
                  <!--<del><span class="tm-price">00.00</span></del></span>-->
              <!--</p>-->
              <p><span class="tb-metatit">团购价</span>
                <span class="tb-tm-group-price"><em class="tm-yen">¥ </em>
                  <span class="tm-group-price">{{this.$route.params.price}}</span></span>
              </p>
            </div>
            <div class="tm-delivery-panel">
              <span class="tb-metatit">配送</span>
              <div class="tb-postAge" style="display: inline-block;">
                <span class="tb-deliveryAdd" id="J_deliveryAdd">江苏宿迁</span> 至 <span>
                <span role="button" class="sel-address" style="cursor: pointer;">{{address}}</span>
                <!--<i class="el-icon-arrow-down"></i>-->
              </span>
                <!--<span>快递：<span>0.00</span></span>-->
              </div>
            </div>
            <div class="tm-type-panel">
              <span class="tb-metatit" style="vertical-align: top">颜色分类</span>
              <ul class="tb-type" :model="listForm">
                <!--<li title="白色铃兰10株+盆" class="tb-txt">-->
                  <!--<a href="#" role="button" tabindex="0" class="tb-txt-a" :class="{'active': isActive=true}"><span>白色铃兰5株+盆</span><i>已选中</i></a>-->
                <!--</li>-->
                <!--<li :title="白色铃兰20株+盆" class="tb-txt">-->
                  <!--<a href="#" role="button" tabindex="1" class="tb-txt-a"><span>白色铃兰10株+盆</span><i>已选中</i></a>-->
                <!--</li>-->
                <!--<li title="白色铃兰20株+盆" class="tb-txt">-->
                  <!--<a href="#" role="button" tabindex="2" class="tb-txt-a"><span>白色铃兰15株+盆</span><i>已选中</i></a>-->
                <!--</li>-->
                <!--<li :title="listForm.title" class="tb-txt">-->
                  <!--<a href="#" role="button" tabindex="1" class="tb-txt-a"><span>{{listForm.title}}</span><i>已选中</i></a>-->
                <!--</li>-->
                <type-item-li></type-item-li>
                <type-item-li></type-item-li>
                <type-item-li></type-item-li>
                <type-item-li></type-item-li>
              </ul>
            </div>
            <div></div>
            <div class="tb-amount">
              <span class="tb-metatit">数量</span>
              <div class="mui-amount-btn" style="display: inline-block;">
            <span class="tb-amount-widget mui-amount-wrap">
              <input class="tb-text mui-amount-input" v-model="number" title="请输入购买量">
              <span class="mui-amount-btn">
                <span class="mui-amount-increase" @click="incr"><i class="el-icon-arrow-up" style="line-height: 5px"></i></span>
                <span class="mui-amount-decrease" @click="decr"><i class="el-icon-arrow-down" style="line-height: 5px"></i></span>
              </span>
              <span class="mui-amount-unit">件</span>
            </span>
              </div>
              <em id="J_EmStock" class="tb-hidden" style="display: inline;">库存<span>000</span>件</em>
            </div>
            <div></div>
            <div class="tb-action-btn">
              <button class="buy-btn">立即购买</button>
              <button class="group-btn">加入拼团</button>
            </div>
            <div class="tm-ser">
              <span class="tb-metatit">服务承诺</span>
              <div class="tm-laysku-dd" style="display: inline-block;">
                <span><a href="#" title="该商品由中国人保承保正品保证险">正品保证</a></span>
                <span><a href="#" title="极速退款是为诚信会员提供的退款退货流程的专享特权，额度是根据每个用户当前的信誉评级情况而定">极速退款</a></span>
                <span><a href="#" title="卖家为您购买的商品投保退货运费险（保单生效以下单显示为准）">赠运费险</a></span>
              </div>
            </div>
          </div>
        </div>
        <div class="rightView">
          <div class="recommend-label "><s></s><span>看了又看</span></div>
          <div class="recommend-bd">
            <ul>
              <recommend-item></recommend-item>
              <recommend-item></recommend-item>
              <recommend-item></recommend-item>
            </ul>
          </div>
        </div>
      </div>
      <!-- 没有数据 -->
      <div class="goods-recommend-panel">
        <goods-recommend-item class="g-item" v-for="(item,index) of datelist" :key="index"
        :pickgoods="item" :index="index" v-if="isShow"></goods-recommend-item>
        <div class="goods-nodate" v-if="!isShow">
          <span class="g-nodate">没有数据</span>
        </div>
      </div>
    </div>
</template>
<script>
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
    import RecommendItem from "./RecommendItem.vue";
    import GoodsRecommendItem from "./GoodsRecommendItem.vue";
    import TypeItemLi from "./TypeItemLi.vue";
    export default {
      components: {ElButton, RecommendItem,GoodsRecommendItem,TypeItemLi},
      data() {
        return {
          msg: 'hello world',
          num8: 1,
          number: '1',
          isShow:true,  // 是否有数据
          datelist: [
            {
              icon: "../../../static/goods/430x430q90.jpg",
              name: "茉莉花盆栽",
              rate: 1.7,
              delprice: "24.00",
              price: "23.00",
              tipshow:[1,0,1]
            },
            {
              icon: "../../../static/goods/400x400q90.jpg",
              name: "金娃娃萱草",
              rate: 2.7,
              delprice: "27.00",
              price: "26.00",
              tipshow:[1,0,0]
            },
            {
              icon: "../../../static/goods/400x400q91.jpg",
              name: "转子莲艾丽塔",
              rate: 3.7,
              delprice: "26.00",
              price: "24.00",
              tipshow:[1,1,1]
            },
            {
              icon: "../../../static/goods/400x400q92.jpg",
              name: "紫丁香花---花语代表初恋",
              rate: 4.3,
              delprice: "23.00",
              price: "21.00",
              tipshow:[0,0,1]
            },
            {
              icon: "../../../static/goods/400x400q93.jpg",
              name: "古典玫瑰紫袍",
              rate: 4.7,
              delprice: "22.00",
              price: "22.00",
              tipshow:[1,1,0]
            },
            {
              icon: "../../../static/goods/400x400q90.jpg",
              name: "金娃娃萱草",
              rate: 4.3,
              delprice: "27.00",
              price: "24.00",
              tipshow:[0,1,1]
            },
            {
              icon: "../../../static/goods/400x400q91.jpg",
              name: "转子莲艾丽塔",
              rate: 4.3,
              delprice: "24.00",
              price: "23.00",
              tipshow:[1,0,1]
            },
            {
              icon: "../../../static/goods/400x400q92.jpg",
              name: "初恋紫丁香花",
              rate: 4.3,
              delprice: "24.00",
              price: "20.00",
              tipshow:[1,0,1]
            },
            {
              icon: "../../../static/goods/400x400q93.jpg",
              name: "古典玫瑰紫袍",
              rate: 4.3,
              delprice: "29.00",
              price: "27.00",
              tipshow:[1,0,1]
            },
            {
              icon: "../../../static/goods/400x400q90.jpg",
              name: "金娃娃萱草",
              rate: 4.3,
              delprice: "28.00",
              price: "24.00",
              tipshow:[1,0,1]
            },
            {
              icon: "../../../static/goods/400x400q91.jpg",
              name: "转子莲艾丽塔",
              rate: 4.3,
              delprice: "34.00",
              price: "32.00",
              tipshow:[1,0,1]
            },
          ], // 数据集
          address: '广东湛江',
          listForm:{
            title: '白色铃兰20株+盆'
          }
        }
      },
      methods:{
        //增加购买数量
        incr(){
          if(this.number==100){
            this.$message({
              message: '警告，数量已达到100件',
              type: 'warning'
            });
          }else{
            this.number++
          }
        },
        //减少购买数量
        decr(){
          if(this.number==1){
            this.$message({
              message: '提示，数量已低到1件',
              type: 'warning'
            });
          }else{
            this.number--
          }
        },
        //是否有数据
        ifShow(item){
          if(item.length==0){
            this.isShow=false;
          }else{
            this.isShow=true;
          }
        },
      },
      mounted(){
        this.ifShow(this.datelist);
      }
    }
</script>
<style scoped>
  ul li {
    list-style: none;
  }
  .tb-amount-widget .mui-amount-input {
    vertical-align: middle;
  }
  .tb-text {
    font-size: 12px;
    height: 26px;
    width: 36px;
    padding: 3px 2px 0 3px;
    line-height: 26px;
    border: 1px solid #a7a6ac;
  }
  .tb-amount-widget .mui-amount-btn {
    display: inline-block;
    vertical-align: middle;
  }
  .tb-amount-widget .mui-amount-increase {
    margin-bottom: 3px;
  }
  .tb-amount-widget .mui-amount-decrease, .tb-amount-widget .mui-amount-increase {
    width: 16px;
    height: 12px;
    overflow: hidden;
    border: 1px solid #a7a6ab;
    display: block;
    font-family: tm-detail-font!important;
    line-height: 12px;
    font-size: 16px;
    cursor: pointer;
  }
  .tb-amount-widget .mui-amount-unit {
    vertical-align: middle;
    margin-left: 5px;
  }
  .contentView .tb-amount em {
    vertical-align: middle;
    color: #878787;
    margin-left: 1.2em;
    font-size: 14px;
  }
  .tb-action-btn .buy-btn,.tb-action-btn .group-btn{
    width: 178px;height: 38px;
    border: 1px solid #FF0036;
    text-align: center;
    font-size: 16px;
  }
  .tb-action-btn .buy-btn{
    background-color: #ffeded;
    color: #FF0036;
    cursor: pointer;
  }
  .tb-action-btn .group-btn{
    background-color: #ff0036;
    color: #fff;
    cursor: pointer;
  }
  /*商铺页头*/
  .shop-content #hd{
    width: 100%;
    height: 150px;
    background-image: url(../../../static/yt_01.jpg);
    background-repeat: no-repeat;
    background-position: 0 0;
    margin-bottom: 0;
    background-color: #FFF;
    position: absolute;
    top: 140px;
    left: 0;
    z-index: 1;
    border-top: 1px dotted #f40;
  }
  .shop-content .layout{
    width: 990px;
    margin-left: auto;
    margin-right: auto;
  }
  .shop-content .layout .hd-name .h1{
    font: 40px/80px "微软雅黑";
    color: #20A77F;
  }
  .shop-content .layout .hd-name .h2{
    padding-left: 5px;
    font: 18px/34px "微软雅黑",arial;
    color: #858585;
  }
  .shopExtra{
    margin-top: 35px;
    float: right;
  }
  .shopExtra .other-info .cs-rank-icon .ww-online{
    background-position: 0 0;
  }
  .shopExtra .other-info .cs-rank-icon a{
    width: 67px;
    height: 20px;
    text-decoration: none !important;
    background-image: url("../../../static/cs-130-60.gif");
  }
  .shopExtra .other-info .cs-rank-icon span{
    line-height: 20px;
  }
  .shopExtra .other-info .cs-rank-icon a span{
    display: none;
  }
  .shopExtra .other-info .cs-rank-icon .ww-inline{
    display: inline-block;
    vertical-align: text-bottom;
  }
  /*修饰*/
  .goods-detail-panel{
    margin-top: 165px;
    width: 1077px;
    height: 474px;
    position: relative;
    /*border: 1px solid red;*/
  }
  .leftView{
    width: 910px;
    height: 474px;
    float: left;
    position: relative;
  }
  .imgView{
    width: 460px;
    height: 474px;
    float: left;
    position: relative;
  }
  .imgView .goods-img{
    width: 418px;
    height: 361px;
    border: 1px solid rgba(0,0,0,.05);
    vertical-align: middle;
    text-align: center;
    padding-top: 10px;
  }
  .imgView .goods-img img{width: 399px;height: 347px;}
  .imgView .tm-action,.imgView .tm-action a{
    font-size: 14px;
    color: #999;
  }
  .contentView{
    width: 447px;
    height: 474px;
    float: left;
  }
  .contentView .tb-detail-hd h1{
    padding-bottom: .2em;
    line-height: 1;
    font-size: 16px;
    font-weight: 700;
    color: #000;
  }
  .contentView .tb-metatit{
    color: #999;
    font-size: 12px;
  }
  .contentView .tm-fcs-panel .tb-tm-price{
    font-size: 14px;
    color: #333;
    margin-left: 30px;
    font-family: Arial;
  }
  .contentView .tm-fcs-panel .tb-tm-group-price{
    font-size: 18px;
    color: #FF0036;
    margin-left: 18px;
    font-weight: bolder;
    font-family: Arial;
  }
  .contentView .tm-fcs-panel .tb-tm-group-price .tm-group-price{
    font-size: 28px;
  }
  .contentView .tm-delivery-panel{margin-top: 25px;}
  .contentView .tm-delivery-panel .tb-postAge{
    margin-left: 30px;
    font-size: 14px;
    color: #333;
  }
  /* 颜色分类 */
  .contentView .tm-type-panel{
    margin-top: 25px;
  }
  .contentView .tm-type-panel .tb-type{
    display: inline-block;
    margin: 0;
    padding: 0;
    width: 320px;
  }
  .tb-type li.tb-txt a {
    padding: 0 5px;
    width: auto!important;
  }
  .tb-type li{float: left;margin-bottom: 10px}
  .tb-type li a {
    width: 38px!important;
    height: 38px;
    padding: 0;
    line-height: 38px;
    background-repeat: no-repeat;
    outline: 0;
    background-position: center center;
  }
  .contentView .tm-type-panel .tb-type li a{
    float: left;
    background-color: #fff;
    border: 1px solid #b8b7bd;
    color: #000;
    min-width: 10px;
    padding: 0 9px;
    text-align: center;
    text-decoration: none;
    margin-left: 6px;
  }
  .contentView .tm-type-panel .tb-type li a:hover{
    border: 2px solid #FF0036;
    margin: -1px -1px -1px 5px;
  }
  .tb-type li .tb-txt-a i {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    overflow: hidden;
    text-indent: -99em;
    display: block;
    background-repeat: no-repeat;
    background-position: 0 0;
  }
  .tb-type li a.tb-txt-a.active i{
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUxpcf8AN////7f4NBoAAAABdFJOUwBA5thmAAAAMUlEQVQI103MAQ4AMAQEQev/j66i6YrEXIKIX9jY2NjYyDmhZnlCo5rdyWvebfYDVAcSmABbA7WD+QAAAABJRU5ErkJggg==);
  }
  .tb-type li .tb-txt-a {
    position: relative;
    border: 2px solid #ddd;
    padding: 2px 6px;
    border-radius: 2px;
    cursor: pointer
  }
  .tb-type li a.tb-txt-a.active, .tb-type li .tb-txt-a:hover{
    border: 2px solid #FF0036;
    margin: -1px -1px -1px 5px;
  }
  .tb-type li .tb-txt-a.active i {
    display: block
  }
  /* 数量 */
  .contentView .tb-amount{
    margin-top: 25px;
    color: #333;
  }
  .contentView .tb-action-btn{
    margin-top: 30px;
  }
  .contentView .tm-ser{margin-top: 45px;}
  .contentView .tm-ser .tm-laysku-dd span{
    font-size: 14px;padding-left: 35px;
  }
  .contentView .tm-ser .tm-laysku-dd a{color: #666;}
  .rightView{
    width: 165px;
    height: 474px;
    float: right;
    position: relative;
  }
  .rightView .recommend-label s{
    position: absolute;
    top: 10px;
    left: 14px;
    width: 140px;
    height: 0;
    border-top: 1px #c9c9c9 dotted;
    text-decoration: none;
  }
  .rightView .recommend-label span{
    position: absolute;
    color: #999;
    text-align: center;
    width: 6em;
    top: 0;
    left: 50%;
    margin-left: -3em;
    background-color: #fff;
  }
  .rightView .recommend-bd{
    position: absolute;
    top: 0;
    right: 11px;
  }
  .goods-recommend-panel{
    /*border: 1px solid red;*/
    min-height: 1054px;
    width: 1066px;
    margin-top: 15px;
    position: relative;
    margin-bottom: 15px;
  }
  .goods-recommend-panel .g-item{
    float: left;
    overflow: hidden;
    margin-left: 13px;
    margin-top: 12px;
  }
  /*没有数据*/
  .goods-nodate {
    height: 58px;
    background-color: #fcedec;
    margin-top: 10%;
    line-height: 58px;
    text-align: center;
    color: #ff4b33;
  }
</style>
