<template>
    <div>
      <table>
        <thead>
        <tr>
          <th class="">订单号/时间</th>
          <th class="">商品信息</th>
          <th class="">单价</th>
          <th>团购价</th>
          <th>数量</th>
          <th>实付款</th>
          <th>交易状态</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td class="" width="14%">
            <p><span class="order_number">{{orderList.orderID}}</span></p>
            <p><span class="order_time">{{orderList.orderTime}}</span></p>
          </td>
          <td class="" width="34%">
            <span class="goods_img"><img :src="'../../../static/'+ orderList.goodsImg" style=""/></span>
            <div class="goods_title">
              <span><i>{{orderList.goodsTitle}}</i></span>
              <div><span class="goods_class" style="color: #999"><i>颜色分类：{{orderList.goodsClass}}</i></span></div>
            </div>
          </td>
          <td class="" width="6%">￥{{orderList.price}}</td>
          <td width="6%">￥{{orderList.groupPrice}}</td>
          <td width="6%">{{orderList.goodsNumber}}</td>
          <td width="14%">
            <p>￥{{orderList.payMoney}}</p>
            <p>(含运费)：￥{{orderList.freight}}</p>
          </td>
          <td width="10%">
            <p>
              <span v-if="orderList.tradingStatus==0">等待发货</span>
              <span v-if="orderList.tradingStatus==1">已经发货</span>
              <span v-if="orderList.tradingStatus==2">交易成功</span>
              <span v-if="orderList.tradingStatus==3">正退款中</span>
              <span v-if="orderList.tradingStatus==4">交易失败</span>
            </p>
            <p><a href="#">订单详情</a></p>
            <p v-if="orderList.tradingStatus==1||orderList.tradingStatus==2"><a href="#">物流跟踪</a></p>
          </td>
          <td>
            <div style="margin-bottom: 8px">
              <el-button type="success" size="mini">取消<i class="el-icon-remove-outline"></i></el-button>
            </div>
            <div>
              <el-button size="mini">删除<i class="el-icon-delete"></i></el-button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
    export default {
      props:['orderList','index'],
        data() {
            return {
                msg: 'hello world'
            }
        },
      methods: {

      }
    }
</script>
<style scoped>
  table{border:1px solid #DDD;width: 100%;border-collapse: collapse;margin-top: 25px}
  table thead{
    border-bottom: 1px solid #ddd;
    vertical-align: middle;font-size: 13px;line-height: 40px;
    background: #e5e5e5; font-weight: bold;;opacity: 0.7;
  }
  table thead th:last-child{border-right: 1px solid #ddd !important;}
  table tbody{
    font-size:13px ;color:gray;text-align: center;
  }
  table tbody tr{border-bottom: 1px solid #ddd}
  table tbody td{padding: 10px 10px;}
  table tbody td:last-child{border-right: 1px solid #ddd}
  table tbody td:nth-of-type(2){text-align: left}
  table tbody .goods_img{
    display: inline-block;border: 1px solid #ddd;
    padding: 6px;width: 60px;height: 60px;line-height: 45px;
  }
  table tbody img{
    width:100%;height:100%;vertical-align: middle}
  table tbody td .goods_title{
    font-size: 10px;display: inline-block;
    width: 70%;line-height: 20px;vertical-align: middle;
  }
  table tbody td .goods_title i{
    width:100%; display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  table tbody td p a{color: gray;text-decoration: none}
  table tbody td p a:hover{color: #67c23a;text-decoration: underline}
</style>
