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
                  <a class="r-rank-icon" href="#/ProductDetail">
                    <img src="../../../static/icon-16-16.gif">
                  </a>
                </span>
                <span class="info-item cs-rank-icon" style="margin-left: 25px;">
                  <span class="title">客 服:</span>
                  <a class="ww-inline ww-online" href="#/ProductDetail"
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
              <img class="small" :src="'http://134.175.113.58/'+goods_mes.goods_photo">
            </div>
            <p class="tm-action">
              <span id="J_EditItem" style="float: right;padding-right: 40px;"><a href="#/ProductDetail"><i class="el-icon-phone-outline"></i>举报</a></span>
              <a id="J_IShare" class="iShare tm-event" href="#/ProductDetail"><i class="el-icon-share"></i>分享</a>
              <span style="padding-left: 15px;"><i class="el-icon-loading"></i>已销售<span id="J_CollectCount">0000</span></span>
            </p>
          </div>
          <div class="contentView">
            <div class="tb-detail-hd">
              <h1><span style="color:#F56C6C">{{goods_mes.goods_name}}</span>{{goods_mes.goods_desc}}</h1>
            </div>
            <div class="tm-fcs-panel">
              <p><span class="tb-metatit">原价</span>
                <span class="tb-tm-price"><em class="tm-yen">¥ </em>
                  <del><span class="tm-price">{{goods_mes.goods_cost}}</span></del></span>
              </p>
              <div><span class="tb-metatit">售价</span>
                <span class="tb-tm-group-price"><em class="tm-yen">¥ </em>
                  <span class="tm-group-price">{{goods_mes.goods_price}}</span></span>
              </div>
            </div>
            <div class="tm-delivery-panel">
              <span class="tb-metatit">运费</span>
              <div class="tb-postAge" style="display: inline-block;" v-if="!(goods_mes.goods_fare==0)">
                <span class="tb-deliveryAdd" id="J_deliveryAdd">¥{{goods_mes.goods_fare}}</span>
                <!--<span>快递：<span>0.00</span></span>-->
              </div>
              <div class="tb-postAge" style="display: inline-block;" v-if="goods_mes.goods_fare==0">
                <span class="tb-deliveryAdd">免费</span>
                <!--<span>快递：<span>0.00</span></span>-->
              </div>
            </div>
            <div class="tm-type-panel">
              <span class="tb-metatit" style="vertical-align: top">颜色分类</span>
              <ul class="tb-type">
                <li v-for="(item,index) in lilist" :key="index" @click="selectLi(item,index)"
                    :title="item.title" :alt="item.title" class="tb-txt">
                  <span role="button" :tabindex="item.tabindex" class="tb-txt-s "
                        :class="{'active':item.active,'':!item.active}"
                  ><span>{{item.title}}</span><i>已选中</i></span>
                </li>
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
              <button class="buy-btn" @click="buyNow">立即购买</button>
              <button class="group-btn">加入拼团</button>
            </div>
            <div class="tm-ser">
              <span class="tb-metatit">服务承诺</span>
              <div class="tm-laysku-dd" style="display: inline-block;">
                <span><a href="#/ProductDetail" title="该商品由中国人保承保正品保证险">正品保证</a></span>
                <span><a href="#/ProductDetail" title="极速退款是为诚信会员提供的退款退货流程的专享特权，额度是根据每个用户当前的信誉评级情况而定">极速退款</a></span>
                <span><a href="#/ProductDetail" title="卖家为您购买的商品温馨诚意服务">温馨服务</a></span>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="rightView">
          <div class="recommend-label "><s></s><span>看了又看</span></div>
          <div class="recommend-bd">
            <ul>
              <recommend-item v-for="(item,index) in recList" :key="index" :recList="item" :index="index"></recommend-item>
            </ul>
          </div>
        </div> -->
      </div>
      <!-- 没有数据 -->
      <!-- <div class="goods-recommend-panel">
        <goods-recommend-item class="g-item" v-for="(item,index) of datelist" :key="index"
        :pickgoods="item" :index="index" v-if="isShow"></goods-recommend-item>
        <div class="goods-nodate" v-if="!isShow">
          <span class="g-nodate">没有数据</span>
        </div>
      </div> -->
    </div>
</template>
<script>
    import Vue from 'vue'
    import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
    import RecommendItem from "./RecommendItem.vue";
    import GoodsRecommendItem from "./GoodsRecommendItem.vue";
    import {getCookie} from "@/util/auth";
    import axios from 'axios'
    export default {
      components: {ElButton, RecommendItem,GoodsRecommendItem},
      data() {
        return {
          msg: 'hello world',
          num8: 1,
          number: '1',
          isShow:true,  // 是否有数据
          datelist: [
            {
              icon: require("../../../static/goods/430x430q90.jpg"),
              name: "茉莉花盆栽",
              rate: 1.7,
              delprice: "24.00",
              price: "23.00",
              tipshow:[1,0,1]
            },
            {
              icon: require("../../../static/goods/400x400q90.jpg"),
              name: "金娃娃萱草",
              rate: 2.7,
              delprice: "27.00",
              price: "26.00",
              tipshow:[1,0,0]
            },
            {
              icon: require("../../../static/goods/400x400q91.jpg"),
              name: "转子莲艾丽塔",
              rate: 3.7,
              delprice: "26.00",
              price: "24.00",
              tipshow:[1,1,1]
            },
            {
              icon: require("../../../static/goods/400x400q92.jpg"),
              name: "紫丁香花---花语代表初恋",
              rate: 4.3,
              delprice: "23.00",
              price: "21.00",
              tipshow:[0,0,1]
            },
            {
              icon: require("../../../static/goods/400x400q93.jpg"),
              name: "古典玫瑰紫袍",
              rate: 4.7,
              delprice: "22.00",
              price: "22.00",
              tipshow:[1,1,0]
            },
            {
              icon: require("../../../static/goods/400x400q90.jpg"),
              name: "金娃娃萱草",
              rate: 4.3,
              delprice: "27.00",
              price: "24.00",
              tipshow:[0,1,1]
            },
            {
              icon: require("../../../static/goods/400x400q91.jpg"),
              name: "转子莲艾丽塔",
              rate: 4.3,
              delprice: "24.00",
              price: "23.00",
              tipshow:[1,0,1]
            },
            {
              icon: require("../../../static/goods/400x400q92.jpg"),
              name: "初恋紫丁香花",
              rate: 4.3,
              delprice: "24.00",
              price: "20.00",
              tipshow:[1,0,1]
            },
            {
              icon: require("../../../static/goods/400x400q93.jpg"),
              name: "古典玫瑰紫袍",
              rate: 4.3,
              delprice: "29.00",
              price: "27.00",
              tipshow:[1,0,1]
            },
            {
              icon: require("../../../static/goods/400x400q90.jpg"),
              name: "金娃娃萱草",
              rate: 4.3,
              delprice: "28.00",
              price: "24.00",
              tipshow:[1,0,1]
            },
            {
              icon: require("../../../static/goods/400x400q91.jpg"),
              name: "转子莲艾丽塔",
              rate: 4.3,
              delprice: "34.00",
              price: "32.00",
              tipshow:[1,0,1]
            },
          ], // 数据集
          address: '广东湛江',
          lilist:[
            {
              tabindex: 0,
              title: '白色铃兰5株+盆',
            },
            {
              tabindex: 1,
              title: '白色铃兰10株+盆',
            },
            {
              tabindex: 2,
              title: '白色铃兰15株+盆',
            },
            {
              tabindex: 3,
              title: '白色铃兰20株+盆',
            },
            {
              tabindex: 4,
              title: '白色铃兰25株+盆',
            },
            {
              tabindex: 5,
              title: '白色铃兰20株+盆',
            },
            {
              tabindex: 6,
              title: '白色铃兰25株+盆',
            },
          ],//分类
          active: false,
          goods_id:'',
          shop_id:'',
          goods_mes:'',
          recList: [
            {
              icon: require("../../../static/goods/rd1.jpg"),
              title:'免费领包活藤本皇后铁线莲皇家丝绒多颜色可选买2送一',
              name: "紫丁香花",
              tell: '花语初恋',
              price: "23.00"
            },
            {
              icon: require("../../../static/goods/pdm1.jpg"),
              title:'免费领包茉莉花盆栽莲皇家丝绒多颜色可选买4送一',
              name: "茉莉花",
              tell: '茉莉花',
              price: "27.00"
            },
            {
              icon: require("../../../static/goods/pdm2.jpg"),
              title:'免费领包金娃娃萱草莲皇家丝绒多颜色可选买1送一',
              name: "金娃娃萱草",
              tell: '金娃娃',
              price: "21.00"
            },
          ], //看了又看
        }
      },
      mounted(){
        this.ifShow(this.datelist);
        this.goods_id = this.$route.query.id;  //商品id
        this.shop_id = this.$route.query.shop_id;  //店铺id
        this.findGoodById();
      },
      methods:{
//        根据商品id查询商品信息
        findGoodById(){
          console.log("jeaofjie");
          axios.get('/v1/merchant/goods/'+this.goods_id,{
            headers:{
              'Authorization': 'Bearer '+getCookie("token")
          }
          }).then((res)=>{
            let result = res.data.data;
            this.goods_mes = result;
//            if(this.goods_mes.is)
          }).catch((err)=>{
            console.log(err);
          })
        },
        buyNow(){//立即购买操作
          this.$router.push({
            path:'/BuyNow',
            query:{
              src:'http://110.120.119.112/',
              id:this.goods_id,
              shop_id:this.shop_id,
            }
          })
        },
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
        //分类选择
        selectLi(item,index){
          this.$nextTick(function () {
            this.lilist.forEach(function (item) {
              Vue.set(item,'active',false);
            });
            Vue.set(item,'active',true);
          });
        },
      }
    }
</script>
<style scoped>
  @import "../../css/productDetail.css";
</style>
