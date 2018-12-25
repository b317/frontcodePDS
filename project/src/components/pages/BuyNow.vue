<template>
  <div class="buyGoods">
    <div style="margin-bottom: 30px">
      <h3>确认收货地址</h3>
      <div>
        <div>填写收件人：<el-input style="width: 50%" size="" v-model="client_nick"></el-input></div>
        <v-distpicker @selected="select_address"></v-distpicker>
        <div>填写详细地址：<el-input style="width: 50%" size="" v-model="detail_address"></el-input></div>
      </div>
    </div>
    <div><h3>确认商品信息</h3></div>
    <el-row class="el-row-list">
      <el-col :span="8"><div class="grid-content bg-purple">店铺商品</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-light">单价</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple">优惠</div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple">实付款</div></el-col>
      <el-col :span="2"><div class="grid-content bg-purple-light">数量</div></el-col>
      <el-col :span="7"><div class="grid-content bg-purple">寄送地址</div></el-col>
    </el-row>
    <el-container>
      <el-header>
        <el-row class="">
          <el-col :span="4">
            <div class="grid-content bg-purple">
              <strong>{{getNowFormatDate}}</strong>
            </div>
          </el-col>
          <el-col :span="5">
            <div class="grid-content bg-purple-light">
              拼团号：1001
            </div>
          </el-col>
          <el-col :span="14">
            <div class="grid-content bg-purple">
              <span>店铺：</span>
              <span class="shop_image"><img :src="'http://134.175.113.58/'+shop_mes.shop_logo"/></span>
              <span class="shop_name">{{shop_mes.shop_name}}</span>
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
                        <img :src="'http://134.175.113.58/'+goods_mes.goods_photo"/>
                      </span>
              <span class="goods_content">
                          <span>
                            <router-link to="" href="javascript:void(0)">
                              <i style="font-weight: bold">{{goods_mes.goods_name}}:</i>{{goods_mes.goods_desc}}
                            </router-link>
                          </span>
                      </span>
            </div>
          </el-col>
          <el-col :span="2"><div class="grid-content bg-purple-light">￥{{goods_mes.goods_price}}</div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple">￥{{goods_mes.goods_discount}}</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple">￥{{totalPrice}}</div></el-col>
          <el-col :span="2">
            <div class="grid-content bg-purple-light">
              <el-input-number v-model="num1" @change="handleChange" :min="1" size="mini" style="width: 120%"></el-input-number>
            </div>
          </el-col>
          <el-col :span="7"><div class="grid-content bg-purple">寄送至：{{address}}</div></el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-row>
          <el-col :span="16">
            <span>买家留言</span>
            <el-input v-model="order_mark" size="mini" placeholder="卖家将会看到此信息" style="width: 60%"></el-input>
          </el-col>
          <el-col :span="5"><i style="color:gray;font-size: 14px;">实付款：</i>
            <i style="font-size:26px;color: #999 ">￥<i style="color: #f40;font: 700 26px tahoma">{{totalPrice}}</i></i>
          </el-col>
          <el-col :span="3"><a href="javascript:void(0)" @click="payConfirm">确认付款</a></el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>
<style>
</style>
<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  import VDistpicker from 'v-distpicker'
  import {getCookie} from "@/util/auth";
  import axios from 'axios'
  import Vue from 'vue'
  var vm =new Vue();
  export default {
    components: {
      ElCol,ElRow,VDistpicker
    },
    data() {
      return {
        msg: 'hello world',
        address:'',
        detail_address:'',
        num1: 1,
        goods_mes:'',
        user_mes:'',
        shop_mes:'',
        goods_id:'',
        shop_id:'',
        order_mark:'',
        client_nick:''
      }
    },
    computed:{
      totalPrice(){//计算总价格
        return parseFloat(this.num1).toFixed(2)*(this.goods_mes.goods_price-this.goods_mes.goods_discount);
      },
      getNowFormatDate() {//获取当前时间
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
          + " " + date.getHours() + seperator2 + date.getMinutes()
          + seperator2 + date.getSeconds();
        return currentdate;
      }
    },
    mounted(){
      this.goods_id = this.$route.query.id;  //商品id
      this.shop_id = this.$route.query.shop_id;  //店铺id
      this.findUserById();
      this.findGoodById();
      this.findShopById();
    },
    methods:{
      // 根据客户id查询客户信息
      findUserById(){
        console.log("jeaofjie");
        axios.get('/v1/user/detail/'+getCookie('id'),{
          headers:{
            'Authorization': 'Bearer '+getCookie("token")
          }
        }).then((res)=>{
          let result = res.data.data;
          this.user_mes = result;
        }).catch((err)=>{
          console.log(err);
        })
      },
      // 根据商品id查询商品信息
      findGoodById(){
        console.log("jeaofjie");
        axios.get('/v1/merchant/goods/'+this.goods_id,{
          headers:{
            'Authorization': 'Bearer '+getCookie("token")
          }
        }).then((res)=>{
          let result = res.data.data;
          this.goods_mes = result;
          this.goods_mes.goods_price=parseFloat(this.goods_mes.goods_price).toFixed(2);
          this.goods_mes.goods_discount=parseFloat(this.goods_mes.goods_discount).toFixed(2)
        }).catch((err)=>{
          console.log(err);
        })
      },
//      根据商店ID查询店铺信息
      findShopById(){
        console.log("jeaofjie");
        axios.get(' /v1/merchant/detailbyself/'+this.shop_id,{
          headers:{
            'Authorization': 'Bearer '+getCookie("token")
          }
        }).then((res)=>{
          let result = res.data.data;
          this.shop_mes = result;
        }).catch((err)=>{
          console.log(err);
        })
      },
      select_address(e){//选择收货地址
        this.address = `${e.province.value}/${e.city.value}/${e.area.value}`;
        console.log(this.address);
      },
      payConfirm(){//确认付款
        if(this.order_mark==''){
          this.$message.error("买家留言不能为空！！");
          return false;
        }else if(this.client_nick==''){
          this.$message.error("请填写收件人！！");
          return false;
        }
        if(this.address==''){
          this.$message.error("请先选择收货地址！！");
        }else{
          if(this.user_mes.nick_name==''){
            this.user_mes.nick_name = '无'
          }
          let params={
            'merchant_id':parseInt(this.shop_id),
            'goods_id':parseInt(this.goods_id),
            'client_id':parseInt(this.user_mes.id),
            'client_nick':this.client_nick,
            'client_phone':this.user_mes.username,
            'group_id':Math.floor(Math.random()*1000),
            'order_addr':this.address+this.detail_address,
            'order_price':this.totalPrice.toString(),
            'order_mark':this.order_mark,
            'pay_method':"支付宝"
          };
          console.log(params);
          axios.post('/v1/user/orders/',params,
            {
              headers:{
                'Authorization': 'Bearer '+getCookie("token")
              }
            }).then((res)=>{
            let result = res.data;
            if(result.message=='OK'){
              this.$message({
                message:'支付成功',
                type:'success',
                duration:1500
              });
              setTimeout( () =>{
                this.$router.back(-1);
                window.location.reload()
              },2500);
            }else{
              this.$message({
                message:'支付失败',
                type:'error'
              })
            }
          }).catch((err)=>{
            console.log(err);
          })
        }
      },
      handleChange(value) {//商品数量计数
        console.log(value);
      }
    }
  }
</script>
<style>
  .buyGoods{margin-bottom: 100px}
  .buyGoods i{font-style: normal}
  .buyGoods h3{
    border-bottom: 2px solid #f1f1f1;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 700;line-height: 30px;
  }
  .buyGoods .el-tabs__item{
    font-family: Microsoft YaHei;font-weight: 700;font-size: 16px;
  }
  .buyGoods .el-container{border:1px solid #e8e8e8;margin-bottom: 20px}
  .buyGoods .el-container:hover{border:1px solid #d0d0d0}
  .buyGoods .el-input{margin: 10px 0}
  .buyGoods .el-button--primary{
    color: #fff !important;
    background-color: #409eff !important;
    border-color: #409eff !important;border-radius: 0 !important;
  }
  .buyGoods .el-button--primary:hover{
    opacity: 0.7;
  }
  .buyGoods .el-row-list.el-row{
    margin: 20px 0;background: #f5f5f5; border: 1px solid #e8e8e8;
    text-align: center;
    /*font-size: 14px;*/
    font: 12px/1.5 tahoma,arial,Hiragino Sans GB,\\5B8B\4F53,sans-serif;
  }
  .buyGoods .el-row-list.el-row>div>div{
    padding:10px 0;
  }
  .buyGoods .el-header {
    background-color: #f5f5f5;border-bottom:1px solid #e8e8e8;
    color: gray;font: 12px/1.5 tahoma,arial,Hiragino Sans GB,\\5B8B\4F53,sans-serif;
    line-height: 45px;height:45px !important;
  }
  .buyGoods .el-header .shop_image img{
    width: 22px !important;vertical-align: middle;
    border-radius: 25px;cursor: pointer;
  }
  .buyGoods .el-header .shop_name{
    font-weight: bold;color: #F56C6C;cursor: pointer;
  }
  .buyGoods .el-header .el-icon-delete{
    font-size: 20px;vertical-align: middle;font-weight: bold;opacity: 0.8;cursor: pointer;
  }
  .buyGoods .el-header .el-icon-delete:hover{
    opacity: 1;
  }
  .buyGoods .el-main {
    color: #333;font-size: 13px;
    line-height: 70px;text-align: center;
  }
  .buyGoods .el-main .el-col:first-child{
    text-align: left;
  }
  .buyGoods .el-main .el-col:nth-of-type(2){
    font-weight: bold;
  }
  .buyGoods .el-main .el-col:nth-of-type(3){
    font-weight: bold;color: #F56C6C;
  }
  .buyGoods .el-main .el-col:nth-of-type(4){
    color:#409eff;font-weight: bolder;
  }
  .buyGoods .el-main .el-col:nth-of-type(8){
    text-align: right;vertical-align: middle;
  }
  .buyGoods .el-main .el-col:nth-of-type(8) .tip{
    line-height:35px;
  }

  .buyGoods .el-main .goods_image{display: inline-block;}
  .buyGoods .el-main .goods_image img{
    width:100px;vertical-align: middle;
  }
  .buyGoods .el-main .goods_content{
    font-size: 10px;display: inline-block;
    width: 170px;line-height: 20px;vertical-align: middle;
  }
  .buyGoods .el-main .goods_content span{
    width:100%; display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .buyGoods .el-main .goods_content span a {
    opacity: 0.8;color:gray;
  }
  .buyGoods .el-main .goods_content span a:hover{
    opacity: 1
  }
  .buyGoods .el-main .el-input-number__decrease, .el-input-number__increase{
    top:11px;
  }
  .buyGoods .el-footer {
    /*background-color: #B3C0D1;*/
    border-top: 1px solid #e8e8e8;
    color: #333;padding: 0;
    text-align: center;
    line-height: 60px;
  }
  .buyGoods .el-footer .el-col:first-child {
    vertical-align: middle;color:gray;font-size: 14px;text-align: left;padding-left: 20px;
    border-right: 1px solid #e8e8e8;
  }
  .buyGoods .el-footer .el-col:first-child .el-input{margin:0 !important;}
  .buyGoods .el-footer .el-col:last-child{
    vertical-align: middle;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    background: #f40;
    color: #fff;
  }
  .buyGoods .el-footer .el-col:last-child:hover{
    opacity:0.9;
  }
  .buyGoods .el-footer .el-col:last-child a {
    color: white;width: 100%;height: 100%;display: inline-block;
  }
</style>
