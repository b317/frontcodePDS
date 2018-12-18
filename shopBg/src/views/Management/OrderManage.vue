<template>
    <div class="order_list">
      <div class="bread_crumbs">
        <span>订单管理&nbsp;--&nbsp;<i class="present">订单列表</i></span>
      </div>
      <div class="grid-content bg-purple">
        <template>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部订单" name="0">
              <template slot-scope="scope">
                <div>全部订单</div>
              </template>
            </el-tab-pane>
            <el-tab-pane label="待发货" name="1">
              <template slot-scope="scope">
                <div>待发货</div>
              </template>
            </el-tab-pane>
            <el-tab-pane label="已发货" name="2">
              <template slot-scope="scope">
                <div>已发货</div>
              </template>
            </el-tab-pane>
            <el-tab-pane label="已完成" name="3">
              <template slot-scope="scope">
                <div>已完成</div>
              </template>
            </el-tab-pane>
            <el-tab-pane label="审核退款" name="4">
              <template slot-scope="scope">
                <div>正退款</div>
              </template>
            </el-tab-pane>
            <el-tab-pane label="已退款" name="5">
              <template slot-scope="scope">
                <div>已退款</div>
              </template>
            </el-tab-pane>
          </el-tabs>
        </template>
        <div class="order-search" style="margin: 30px 0">
          <el-row>
            <el-col :span="24">
              <el-input placeholder="请输入订单号" class="input-with-select" size="mini">
                <el-button slot="append" icon="el-icon-search"  size="mini" style="color: #fff;background-color: #409eff"></el-button>
              </el-input>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="lists">
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
          <order-item v-for="(item,index) of orderList" :key="index" :orderList="item" :index="index"></order-item>
          </tbody>
          <tfoot>
          <tr>
            <td colspan="3"></td>
            <td colspan="6" style="position: relative">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="1000"
                @current-change="pageChange"
                @prev-click="preClick"
                @next-click="nextClick"
              >
              </el-pagination>
            </td>
          </tr>
          </tfoot>
        </table>
      </div>
    </div>
</template>
<style>
  .order_list{padding-right: 40px;margin-bottom: 50px}
  .order_list .bg-purple {
    position: relative;
  }

  .order_list .order-search {
    position: absolute;
    top: 25px;
    z-index: 1;
  }
  .order_list .el-input .el-button{
    color: #fff !important;
    border-radius: 0 3px 3px 0;
    background-color: #409eff !important;
    border:1px solid #409eff !important;
  }
  .order_list .lists table{border:1px solid #DDD;width: 100%;border-collapse: collapse;margin-top: 25px}
  .order_list .lists table thead{
    border-bottom: 1px solid #ddd;
    vertical-align: middle;font-size: 13px;line-height: 40px;
    background: #e5e5e5; font-weight: bold;;opacity: 0.7;
  }
  .order_list .lists table thead th:last-child{border-right: 1px solid #ddd !important;}
  .order_list .lists table tbody{
    font-size:13px ;color:gray;text-align: center;
  }
  .order_list .lists table tfoot tr td{padding: 10px 0 !important;height: 22px}
  .order_list .lists table tfoot .el-pagination{
    position: absolute;right: 0;
    top: 5px;
  }
</style>
<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  import OrderItem from "@/views/Management/OrderItem";

    export default {
      components: {ElCol,ElRow,OrderItem},
        data() {
          return {
            msg: '订单管理',
            value: 35,
            activeName: "0",  // 默认选卡
            orderList: [],
            dataList: [
              {
                orderID: 266477474728649150,
                orderTime: '2018-11-22 17:54:41',
                goodsImg: 'goods.jpg',
                goodsTitle: '羽博充电宝女迷你小巧10000毫安可爱大容量少女款卡通生型1万冲超萌移动电源',
                goodsClass: '灰白TY-45型号',
                price: '20.00',
                groupPrice: '18.00',
                goodsNumber: '1',
                payMoney: '20.00',
                freight: '0.00',
                tradingStatus: 0
              },
              {
                orderID: 266477474728649170,
                orderTime: '2018-11-22 17:54:41',
                goodsImg: 'Duckneck.jpg',
                goodsTitle: '羽博充电宝女迷你小巧10000毫安可爱大容量少女款卡通生型1万冲超萌移动电源',
                goodsClass: '灰白TY-45型号',
                price: '17.00',
                groupPrice: '14.00',
                goodsNumber: '2',
                payMoney: '34.00',
                freight: '0.00',
                tradingStatus: 1
              },
              {
                orderID: 266477474728649171,
                orderTime: '2018-11-22 17:54:41',
                goodsImg: 'shopImage1.jpg',
                goodsTitle: '羽博充电宝女迷你小巧10000毫安可爱大容量少女款卡通生型1万冲超萌移动电源',
                goodsClass: '灰白TY-45型号',
                price: '22.00',
                groupPrice: '19.00',
                goodsNumber: '1',
                payMoney: '19.00',
                freight: '0.00',
                tradingStatus: 2
              },
              {
                orderID: 266477474728649173,
                orderTime: '2018-11-22 17:54:41',
                goodsImg: 'touxiang.jpg',
                goodsTitle: '羽博充电宝女迷你小巧10000毫安可爱大容量少女款卡通生型1万冲超萌移动电源',
                goodsClass: '灰白TY-45型号',
                price: '19.00',
                groupPrice: '15.00',
                goodsNumber: '2',
                payMoney: '30.00',
                freight: '0.00',
                tradingStatus: 1
              },
              {
                orderID: 266477474728649177,
                orderTime: '2018-11-22 17:54:41',
                goodsImg: 'shopImage1.jpg',
                goodsTitle: '羽博充电宝女迷你小巧10000毫安可爱大容量少女款卡通生型1万冲超萌移动电源',
                goodsClass: '灰白TY-45型号',
                price: '19.00',
                groupPrice: '17.00',
                goodsNumber: '1',
                payMoney: '17.00',
                freight: '0.00',
                tradingStatus: 0
              },
              {
                orderID: 266477474728649177,
                orderTime: '2018-11-22 17:54:41',
                goodsImg: 'shopImage1.jpg',
                goodsTitle: '羽博充电宝女迷你小巧10000毫安可爱大容量少女款卡通生型1万冲超萌移动电源',
                goodsClass: '灰白TY-45型号',
                price: '19.00',
                groupPrice: '17.00',
                goodsNumber: '1',
                payMoney: '17.00',
                freight: '0.00',
                tradingStatus: 0
              },
              {
                orderID: 266477474728649177,
                orderTime: '2018-11-22 17:54:41',
                goodsImg: 'shopImage1.jpg',
                goodsTitle: '羽博充电宝女迷你小巧10000毫安可爱大容量少女款卡通生型1万冲超萌移动电源',
                goodsClass: '灰白TY-45型号',
                price: '19.00',
                groupPrice: '17.00',
                goodsNumber: '1',
                payMoney: '17.00',
                freight: '0.00',
                tradingStatus: 1
              },
              {
                orderID: 266477474728649177,
                orderTime: '2018-11-22 17:54:41',
                goodsImg: 'shopImage1.jpg',
                goodsTitle: '羽博充电宝女迷你小巧10000毫安可爱大容量少女款卡通生型1万冲超萌移动电源',
                goodsClass: '灰白TY-45型号',
                price: '19.00',
                groupPrice: '17.00',
                goodsNumber: '1',
                payMoney: '17.00',
                freight: '0.00',
                tradingStatus: 2
              },
              {
                orderID: 266477474728649177,
                orderTime: '2018-11-22 17:54:41',
                goodsImg: 'shopImage1.jpg',
                goodsTitle: '羽博充电宝女迷你小巧10000毫安可爱大容量少女款卡通生型1万冲超萌移动电源',
                goodsClass: '灰白TY-45型号',
                price: '19.00',
                groupPrice: '17.00',
                goodsNumber: '1',
                payMoney: '17.00',
                freight: '0.00',
                tradingStatus: 3
              },
              {
                orderID: 266477474728649177,
                orderTime: '2018-11-22 17:54:41',
                goodsImg: 'shopImage1.jpg',
                goodsTitle: '羽博充电宝女迷你小巧10000毫安可爱大容量少女款卡通生型1万冲超萌移动电源',
                goodsClass: '灰白TY-45型号',
                price: '19.00',
                groupPrice: '17.00',
                goodsNumber: '1',
                payMoney: '17.00',
                freight: '0.00',
                tradingStatus: 4
              },
              {
                orderID: 266477474728649177,
                orderTime: '2018-11-22 17:54:41',
                goodsImg: 'shopImage1.jpg',
                goodsTitle: '羽博充电宝女迷你小巧10000毫安可爱大容量少女款卡通生型1万冲超萌移动电源',
                goodsClass: '灰白TY-45型号',
                price: '19.00',
                groupPrice: '17.00',
                goodsNumber: '1',
                payMoney: '17.00',
                freight: '0.00',
                tradingStatus: 1
              }
            ]
          }
        },
      mounted(){
        this.orderList=this.dataList;
      },
      methods:{
        handleClick(tab, event,) { // 点击选项卡
//          console.log('点击' + tab.name);
          let urlStr = '/OrderManage?orderType=' + tab.name;
          this.$router.push(urlStr);
          if(tab.name==0){
            this.orderList=this.dataList;
          }else {
            this.orderList = [];
            this.dataList.forEach((item) => {
              if (item.tradingStatus == (tab.name-1)) {
                this.orderList.push(item);
//                console.log('状态' + item.tradingStatus);
              }
            })
          }
        },
        pageChange(val){
//        console.log(`当前页: ${val}`);
        },
        preClick(val){
//        console.log(`上一页: ${val}`);
        },
        nextClick(val){
//        console.log(`下一页: ${val}`);
        },
      }
    }
</script>
