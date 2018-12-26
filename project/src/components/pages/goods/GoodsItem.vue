<template>
  <div class="goodsitem">
    <table>
      <tbody>
      <tr class="tb-thead">
        <td width="52%" colspan="2">
          <div class="order-time-num">
            <span class="order-time"><label>{{goods.createdAt}}</label></span>
            <span class="order-num">订单号：<span>{{goods.order_num}}</span></span>
          </div>
        </td>
        <td width="27%" colspan="2" >
          <div class="shop-img-name">
            <span>
              <img class="g-shop-img" :src="'http://134.175.113.58/'+merchant_mes.shop_logo" alt="" />
              <a class="g-shop-name" href="#" :title="goods.shopName">{{merchant_mes.shop_name}}</a>
            </span>
          </div>
        </td>
        <td></td>
        <td></td>
      </tr>
      <tr class="tr-center" >
        <td width="41%">
          <div class="g-shop-img">
            <div>
              <a href="#"><img :src="'http://134.175.113.58/'+product_list.goods_photo" alt=""/></a>
            </div>
          </div>
          <div class="g-shop-cont">
            <p><a href="#"><span style="line-height:16px;">{{product_list.goods_desc}}</span></a></p>
            <p class="p-clr"><span>颜色分类：{{product_list.goods_name}}</span></p>
          </div>
        </td>
        <td width="11%">
          <div>
            <p class="p-group-price" style="color: red;font-weight: bolder"><span>￥{{product_list.goods_price}}</span></p>
          </div>
        </td>
        <td width="8%">
          <div>
            <p><span>{{goods.order_price/(product_list.goods_price-product_list.goods_discount)}}</span></p>
          </div>
        </td>
        <td width="19%" rowspan="2">
          <div>
            <p style="font-weight: bolder;"><span>￥{{goods.order_price}}</span></p>
            <p class="p-clr"><span>(含运费￥{{product_list.goods_fare}})</span></p>
          </div>
        </td>
        <td width="11%"rowspan="2">
          <div>
            <p style="color: rgb(64, 158, 255);"><span>{{goods.order_status}}</span></p>
            <p>
              <span v-if="goods.order_status=='已支付'||goods.order_status=='待发货'">
                <span class="span-a" @click="handleRefund">申请退款</span>
              </span>
            </p>
            <p><span class="span-a" @click="showGoodsDetail">订单详情</span></p>
          </div>
        </td>
        <td width="12%"rowspan="2">
          <div style="padding:0 2px">
            <p v-if="goods.order_status=='已支付'||goods.order_status=='待发货'">
              <el-button size="mini" type="warning" @click="handleCancel">取消订单</el-button>
            </p>
            <p v-if="goods.order_status=='已完成'">
              <el-button size="mini" type="info" @click="handleDelete">删除订单</el-button>
            </p>
          </div>
        </td>
      </tr>
      <tr class="tr-center">
        <td>
          <div>拼团优惠</div>
        </td>
        <td>
          <div>
            <span>￥</span><span>{{product_list.goods_discount}}</span>
          </div>
        </td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button.vue";
  import {getCookie} from "@/util/auth";
  import axios from 'axios'

  export default {
    components: {ElButton},
    props: ['goods','index','goods_id'],
    data() {
      return {
        msg: 'hello world',
        goods_item:'',
        product_list:'',
        merchant_mes:''
      }
    },
    computed: {
      actualPrice() {//计算总价格
        return (parseFloat(this.product_list.goods_price) - parseFloat(this.product_list.goods_discount)).toFixed(2);
      }
    },
    created(){
      console.log(this.goods.merchant_id+"hssrh");
      axios.get('/v1/merchant/detailbyself/'+this.goods.merchant_id,{ //根据店铺id查询商品信息
        headers:{
          'Authorization': 'Bearer '+getCookie("token")
        }
      }).then((res)=>{
        let result = res.data.data;
        this.merchant_mes=result;
      }).catch((err)=>{
        console.log(err);
      });

      axios.get('/v1/merchant/goods/'+this.goods_id,{ //根据商品id查询商品信息
        headers:{
          'Authorization': 'Bearer '+getCookie("token")
        }
      }).then((res)=>{
        let result = res.data.data;
        this.product_list=result;
        console.log("hahaha");
      }).catch((err)=>{
        console.log(err);
      })
    },
    methods: {
      showGoodsDetail (){
        console.log("店名："+this.goods.shopName);
        this.$router.push({
          path: "/GoodsDetail",
          query: {
            goods_id:this.product_list.id,
            order_id:this.goods.id
          }
        })
      },
      //删除
      handleDelete () {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功！',
          });
          this.$emit('delete',this.index)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除！'
          });
        });
      },
      //退款
      handleRefund () {
        this.$confirm('此操作将进行退款，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退款申请已发出，请等待...',
          });
          this.$emit('delete', this.index)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退款！'
          });
        });
      },
      //取消
      handleCancel (){
        this.$confirm('此操作将进行取消订单，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '取消订单成功！',
          });
          this.$emit('delete', this.index)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作！'
          });
        });
      }
    }
  }
</script>
<style scoped>
  @import "../../../css/goods.css";
</style>
