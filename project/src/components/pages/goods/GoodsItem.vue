<template>
  <div>
    <table class="goods-item-table">
      <tbody>
      <tr class="tr-detail-hd">
        <td style="width: 330px;">
          <div class="order-time-num">
            <span class="order-time"><label>{{goods.orderTime}}</label></span>
            <span class="order-num">订单号：<span>{{goods.orderNumber}}</span></span>
          </div>
        </td>
        <td style="width: 141px;" colspan="3" >
          <div class="shop-img-name">
            <span>
              <img class="g-shop-img" :src="goods.shopIcon" alt="" />
              <a class="g-shop-name" href="#" :title="goods.shopName">{{goods.shopName}}</a>
            </span>
          </div>
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="tr-center">
        <td style="width: 330px;">
          <div class="g-shop-img">
            <div><a href="#"><img :src="goods.img" alt=""/></a></div>
          </div>
          <div class="g-shop-cont">
            <p><a href="#"><span style="line-height:16px;">{{goods.content}}</span></a></p>
            <p class="p-clr"><span>颜色分类：{{goods.color}}</span></p>
          </div>
        </td>
        <td style="width: 87px;">
          <div>
            <!--<p class="p-sell-price" style="color: #9c9c9c;"><del><span>￥00.00</span></del></p>-->
            <p class="p-group-price" style="color: red;font-weight: bolder"><span>￥{{goods.price}}</span></p>
            <p class="p-clr"><span>(团购价)</span></p>
          </div>
        </td>
        <td style="width: 44px;">
          <div>
            <p><span>{{goods.number}}</span></p>
          </div>
        </td>
        <td style="width: 106px;">
          <div>
            <p>
              <span v-if="goods.orderStatus==1 || goods.orderStatus==2 || goods.orderStatus==3">
                <span class="span-a" @click="isRefund">申请退款</span>
              </span>
            </p>
            <p><span><span class="span-a">投诉商家</span></span></p>
          </div>
        </td>
        <td style="width: 104px;" rowspan="2">
          <div>
            <p style="font-weight: bolder;"><span>￥{{goods.price}}</span></p>
            <p class="p-clr"><span>(含运费￥{{goods.freight}})</span></p>
          </div>
        </td>
        <td style="width: 94px;" rowspan="2">
          <div>
            <p>
              <span v-if="goods.orderStatus==0">等待付款</span>
              <span v-if="goods.orderStatus==1">等待发货</span>
              <span v-if="goods.orderStatus==2">已经发货</span>
              <span v-if="goods.orderStatus==3">交易成功</span>
              <span v-if="goods.orderStatus==4">正退款中</span>
              <span v-if="goods.orderStatus==5">交易失败</span>
            </p>
            <p><span class="span-a" @click="showGoodsDetail">订单详情</span></p>
            <p>
              <span v-if="goods.orderStatus==2 || goods.orderStatus==3">
                <span class="span-a">物流跟踪</span>
              </span>
            </p>
          </div>
        </td>
        <td style="width: 75px;vertical-align: middle;" rowspan="2">
          <div style="padding-right: 10px">
            <p v-if="goods.orderStatus==1 || goods.orderStatus==2 || goods.orderStatus==3"><el-button
              size="mini" type="success" @click="isCancel">取消订单</el-button></p>
            <p><el-button size="mini" type="info" @click="isDelete">删除订单</el-button></p>
          </div>
        </td>
      </tr>
      <tr class="tr-center">
        <td>
          <div>拼团优惠</div>
        </td>
        <td>
          <div>
            <span>￥</span><span>0.00</span>
          </div>
        </td>
        <td></td>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button.vue";

  export default {
    components: {ElButton},
    props: ['goods','index'],
    data() {
      return {
        msg: 'hello world'
      }
    },
    methods: {
      showGoodsDetail (){
        console.log("店名："+this.goods.shopName)
        this.$router.push({
          name: "GoodsDetail",
          params: {
            orderTime: this.goods.orderTime,
            orderNumber: this.goods.orderNumber,
            shopIcon: this.goods.shopIcon,
            shopName: this.goods.shopName,
            goodsImg: this.goods.img,
            goodsContent: this.goods.content,
            originalPrice: this.goods.originalPrice,
            price: this.goods.price,
            number: this.goods.number,
            freight :this.goods.freight,
            orderStatus: this.goods.orderStatus
          }
        })
      },
      //删除
      isDelete () {
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
      isRefund () {
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
      isCancel (){
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
  table{border: 1px solid #e8e8e8;}
  table a {text-decoration: none;color: #3c3c3c;}
  table a:hover {text-decoration: none;color: #ff4200;}
  table tr.tr-center td{
    line-height: 1;
    text-align: center;
    vertical-align: top;}
  .goods-item-table,.goods-item-table tr,.goods-item-table td {
    border-collapse: collapse;
  }
  .goods-item-table {
    color: #3c3c3c;
    font: 12px/180% Arial, Helvetica, sans-serif, "新宋体";
    margin-top: 10px;
  }
  .tr-detail-hd {
    height: 42px;
    background-color: #f5f5f5;
    border: 1px solid #e8e8e8;
  }
  .tr-detail-hd .order-time-num {
    margin-left: 12px;
  }
  .tr-detail-hd .order-time-num label {
    margin-left: 5px;
  }
  .tr-detail-hd .order-time-num .order-num {
    margin-left: 10px;
  }
  .tr-detail-hd .shop-img-name .g-shop-img{
    width: 16px;
    height: 16px;
    margin-left: 12px;
    margin-right: 3px;
    vertical-align: middle;
    border-radius: 25px;
  }
  .tr-detail-hd .shop-img-name .g-shop-name{
    display: inline-block;
    width: 127px;
    line-height: 16px;
    vertical-align: middle;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    font-weight: bold;
    color: #F56C6C;
  }
  .tr-center .g-shop-img{
    float: left;
    margin: 12px;
  }
  .tr-center .g-shop-img img{
    width: 80px;
    height: 80px;
  }
  .tr-center .g-shop-cont{
    margin-left: 90px;
    text-align: left;
  }
  .tr-center .p-clr{color: #9c9c9c;}
  .span-a:hover{
    text-decoration: underline;
    color: #ff4200;
    cursor: pointer;
  }
  table tr:last-child{height: 42px;}
  table tr:last-child td{
    vertical-align: middle;
  }
  table tr:last-child td:first-child{
    text-align: left;
    padding-left: 25px;
  }
</style>
