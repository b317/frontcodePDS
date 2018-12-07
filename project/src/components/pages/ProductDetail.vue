<template>
    <div>
      <!--<div class="goods-shop-hd">-->
        <!--<div class="layout grid-m J_TLayout">-->
          <!--<div class="hd-head rela" style="height:120px;display: inline-block;">-->
            <!--<div class="hd-name" style="height:80px;text-align:left;padding:20px 16px;">-->
              <!--<span class="h1" style="line-height:80px;font-size:40px;font-family:宋体;">馨语给您一个温馨的家</span>-->
              <!--<span class="h2" style="padding-top:16px;line-height:64px;font-size:16px;font-family:宋体;">绿色家居生活</span>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="shopExtra" style="height: 120px;display: inline-block;">-->
            <!--<div class="slogo" style="">-->
              <!--<span><strong>馨语富尚专卖店</strong></span>-->
              <!--<div class="slogo-extraicon"></div>-->
            <!--</div>-->
            <!--<div class="other-info" style="margin-top: 15px;">-->
              <!--<span class="info-item">-->
                <!--<span class="title">信 誉:</span>-->
                <!--<a class="r-rank-icon" href="#">-->
                  <!--<img src="../../../static/icon-16-16.gif">-->
                <!--</a>-->
              <!--</span>-->
              <!--<span class="info-item cs-rank-icon" style="margin-left: 25px;">-->
                <!--<span class="title">客 服:</span>-->
                <!--<a class="ww-inline ww-online" href="#"-->
                   <!--title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验，还支持语音视频噢。">-->
                  <!--<span>客服在线</span>-->
                <!--</a>-->
              <!--</span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
      <div class="goods-detail-panel">
        <div class="leftView">
          <div class="imgView">
            <div class="goods-img">
              <img class="small" src="../../../static/goods/item_pic.jpg">
            </div>
            <p class="tm-action">
              <span id="J_EditItem" style="float: right;padding-right: 40px;"><a href=""><i class="el-icon-phone-outline"></i>举报</a></span>
              <a id="J_IShare" class="iShare tm-event" href="#"><i class="el-icon-share"></i>分享</a>
              <span style="padding-left: 15px;"><i class="el-icon-loading"></i>月销量<span id="J_CollectCount">3337</span></span>
            </p>
          </div>
          <div class="contentView">
            <div class="tb-detail-hd">
              <h1>带盆盆栽浓香小型种根铃兰花苗盆栽阳台室内芳香花卉当年开花铃</h1>
            </div>
            <div class="tm-fcs-panel">
              <p><span class="tb-metatit">价格</span>
                <span class="tb-tm-original-price"><em class="tm-yen">¥</em> <del><span class="tm-original-price">18.80-37.80</span></del></span></p>
              <p><span class="tb-metatit">促销价</span>
                <span class="tb-tm-price"><em class="tm-yen">¥ </em><span class="tm-price">16.42-33.00</span></span></p>
            </div>
            <div class="tm-delivery-panel">
              <span class="tb-metatit">配送</span>
              <div class="tb-postAge" style="display: inline-block;">
                <span class="tb-deliveryAdd" id="J_deliveryAdd">江苏宿迁</span> 至 <span>
              <span>广东湛江</span><i class="el-icon-arrow-down"></i></span>
                <span>快递：<span>0.00</span></span>
              </div>
            </div>
            <div></div>
            <div></div>
            <div class="tb-amount">
              <span class="tb-metatit">数量</span>
              <div class="mui-amount-btn" style="display: inline-block;">
            <span class="tb-amount-widget mui-amount-wrap">
              <input type="text" class="tb-text mui-amount-input" value="1" maxlength="8" title="请输入购买量">
              <span class="mui-amount-btn">
                <span class="mui-amount-increase"><i class="el-icon-arrow-up" style="line-height: 5px"></i></span>
                <span class="mui-amount-decrease"><i class="el-icon-arrow-down" style="line-height: 5px"></i></span>
              </span>
              <span class="mui-amount-unit">件</span>
            </span>
              </div>
              <em id="J_EmStock" class="tb-hidden" style="display: inline;">库存<span>902</span>件</em>
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
      <div class="goods-recommend-panel">
        <goods-recommend-item class="g-item" v-for="(item,index) of datelist" :key="index"
        :pickgoods="item" :index="index" v-if="isShow"></goods-recommend-item>
        <div class="goods-nodate" v-if="!isShow">
          <span class="g-nodate">没有数据</span>
        </div>
      </div>
    </div>
</template>
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
  /*修饰*/
  .goods-detail-panel{
    margin-top: 15px;
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
    height: 411px;
    border: 1px solid rgba(0,0,0,.05);
    vertical-align: middle;
    text-align: center;
    padding-top: 10px;
  }
  .imgView .goods-img img{width: 399px;height: 401px;}
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
  .contentView .tm-fcs-panel .tb-tm-original-price{
    font-size: 14px;
    color: #333;
    margin-left: 30px;
    font-family: Arial;
  }
  .contentView .tm-fcs-panel .tb-tm-price{
    font-size: 18px;
    color: #FF0036;
    margin-left: 18px;
    font-weight: bolder;
    font-family: Arial;
  }
  .contentView .tm-fcs-panel .tb-tm-price .tm-price{
    font-size: 28px;
  }
  .contentView .tm-delivery-panel{margin-top: 25px;}
  .contentView .tm-delivery-panel .tb-postAge{
    margin-left: 30px;
    font-size: 14px;
    color: #333;
  }
  .contentView .tb-amount{
    margin-top: 35px;
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
    min-height: 1044px;
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
  /*商铺页头*/
  .goods-shop-hd{
    /*border: 1px solid red;*/
    height: 120px;
    background-image: url("../../../static/yt_01.jpg");
    background-repeat: no-repeat;
    background-position: 0 0;
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
<script>
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
    import RecommendItem from "./RecommendItem.vue";
    import GoodsRecommendItem from "./GoodsRecommendItem.vue";

    export default {
      components: {ElButton, RecommendItem,GoodsRecommendItem},
      data() {
        return {
          msg: 'hello world',
          num8: 1,
          isShow:true,  // 是否有数据
          datelist: [
            {
              icon: "430x430q90.jpg",
              name: "茉莉花盆栽",
              count: "2.3",
              price: "22.00",
              tipshow:[1,0,1]
            },
            {
              icon: "400x400q90.jpg",
              name: "金娃娃萱草",
              count: "3.7",
              price: "21.00",
              tipshow:[1,0,0]
            },
            {
              icon: "400x400q91.jpg",
              name: "转子莲艾丽塔",
              count: "4.3",
              price: "23.00",
              tipshow:[1,1,1]
            },
            {
              icon: "400x400q92.jpg",
              name: "紫丁香花---花语代表初恋",
              count: "4.3",
              price: "25.00",
              tipshow:[0,0,1]
            },
            {
              icon: "400x400q93.jpg",
              name: "古典玫瑰紫袍",
              count: "4.3",
              price: "24.00",
              tipshow:[1,1,0]
            },
            {
              icon: "400x400q90.jpg",
              name: "金娃娃萱草",
              count: "4.3",
              price: "21.00",
              tipshow:[0,1,1]
            },
            {
              icon: "400x400q91.jpg",
              name: "转子莲艾丽塔",
              count: "4.3",
              price: "23.00",
              tipshow:[1,0,1]
            },
            {
              icon: "400x400q92.jpg",
              name: "初恋紫丁香花",
              count: "4.3",
              price: "25.00",
              tipshow:[1,0,1]
            },
            {
              icon: "400x400q93.jpg",
              name: "古典玫瑰紫袍",
              count: "4.3",
              price: "24.00",
              tipshow:[1,0,1]
            },
            {
              icon: "400x400q90.jpg",
              name: "金娃娃萱草",
              count: "4.3",
              price: "21.00",
              tipshow:[1,0,1]
            },
            {
              icon: "400x400q91.jpg",
              name: "转子莲艾丽塔",
              count: "4.3",
              price: "23.00",
              tipshow:[1,0,1]
            },
          ], // 数据集
        }
      },
      mounted(){
        if(this.datelist.length==0){
          this.isShow=false;
        }else{
          this.isShow=true;
        }
      }
    }
</script>
