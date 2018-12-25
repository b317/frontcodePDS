<template>
  <div class="my-content">
    <el-row>
      <el-col :span="5">
        <left-tab type="card" v-bind:routeArr="routeArr"></left-tab>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple">
          <!--工具条-->
          <form class="container">
            <div class="search-div">
              <input value="" placeholder="请输入订单号" style="height: 21px;width: 175px;"/>
              <button id="search-btn">搜索</button>
            </div>
          </form>
          <!--选卡-->
          <template>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部订单" name="0">
              <template slot-scope="scope">
              </template>
            </el-tab-pane>
            <el-tab-pane label="已付款" name="1">
              <template slot-scope="scope">
              </template>
            </el-tab-pane>
            <el-tab-pane label="待发货" name="2">
              <template slot-scope="scope">
              </template>
            </el-tab-pane>
            <el-tab-pane label="已发货" name="3">
              <template slot-scope="scope">
              </template>
            </el-tab-pane>
            <el-tab-pane label="已完成" name="4">
              <template slot-scope="scope">
              </template>
            </el-tab-pane>
            <el-tab-pane label="正退款" name="5">
              <template slot-scope="scope">
              </template>
            </el-tab-pane>
            <el-tab-pane label="已退款" name="6">
              <template slot-scope="scope">
              </template>
            </el-tab-pane>
          </el-tabs>
          </template>
          <!--列表-->
          <div class="lists">
            <goods-table-header></goods-table-header>
            <div class="goods-item-list">
              <goods-item v-for="(item,index) of goodslist" :key="index" :goods="item"
                          :index="index" ref="goods" @delete="handleDelete"></goods-item>
              <div class="goods-nodate" v-if="goodslist.length==0">
                <div class="g-nodate">没有数据</div>
              </div>
            </div>
            <!--分页-->
            <div class="goods-page">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="totalOrder"
                :page-size="limit"
                :current-page="page"
                @current-change="pageChange"
                @prev-click="preClick"
                @next-click="nextClick"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import leftTab from "@/components/module/leftTab"
  import ElTabPane from "../../../../node_modules/element-ui/packages/tabs/src/tab-pane.vue";
  import GoodsItem from "./GoodsItem.vue"
  import GoodsTableHeader from "./GoodsTableHeader.vue"
  import {getCookie} from "@/util/auth";

  export default {
    components: {ElTabPane, leftTab, GoodsItem, GoodsTableHeader},
    data() {
      return {
        activeName: "0",  // 默认选卡
        msg: "goods",
        routeArr: {
          userInfo: "我的主页",
          coupon: "我的红包",
          order: "我的团购",
          goods: "我的订单",
        },
        goodslist:[], // 数据缓存
        dataList:[],
        datelist: [
          {
            orderTime: "2018-12-31",
            orderNumber: "266477474728649150",
            shopIcon: "../../../static/goods/item_pic.jpg",
            shopName: "百花仙居",
            img: "../../../static/goods/item_pic.jpg",
            content: "带盆盆栽浓香小型种根铃兰花苗盆栽阳台室内芳香花卉当年开花铃",
            color: "白色铃兰20株+盆",
            originalPrice: "18.42",
            price: "16.42",
            groupPrice:'14.42',
            number: "1",
            freight: "0.00",
            orderStatus: 0,
          },
          {
            orderTime: "2018-12-3",
            orderNumber: "266477474728649150",
            shopIcon: "../../../static/goods/g1s.png",
            shopName: "好来红东方商店",
            img: "../../../static/goods/g1.jpg",
            content: "Yoobao羽博充电宝女迷你便携小巧10000毫安可爱大容量少女女款" +
            "通用手机飞机可带上卡通生型1万冲超萌移动电源",
            color: "【幸运】定制版薄荷绿",
            originalPrice: "79.00",
            price: "39.00",
            groupPrice:'28.00',
            number: "1",
            freight: "6.00",
            orderStatus: 1,
          },
          {
            orderTime: "2018-12-3",
            orderNumber: "266477474728649150",
            shopIcon: "../../../static/goods/g1s.png",
            shopName: "好来红东方商店",
            img: "../../../static/goods/g1.jpg",
            content: "Yoobao羽博充电宝女迷你便携小巧10000毫安可爱大容量少女女款" +
            "通用手机飞机可带上卡通生型1万冲超萌移动电源",
            color: "【幸运】定制版薄荷绿",
            originalPrice: "79.00",
            price: "39.00",
            groupPrice:'28.00',
            number: "1",
            freight: "6.00",
            orderStatus: 2,
          },
          {
            orderTime: "2018-12-3",
            orderNumber: "266477474728649150",
            shopIcon: "../../../static/goods/g1s.png",
            shopName: "好来红东方商店",
            img: "../../../static/goods/g1.jpg",
            content: "Yoobao羽博充电宝女迷你便携小巧10000毫安可爱大容量少女女款" +
            "通用手机飞机可带上卡通生型1万冲超萌移动电源",
            color: "【幸运】定制版薄荷绿",
            originalPrice: "79.00",
            price: "39.00",
            groupPrice:'28.00',
            number: "1",
            freight: "6.00",
            orderStatus: 3,
          },
          {
            orderTime: "2018-12-3",
            orderNumber: "266477474728649150",
            shopIcon: "../../../static/goods/g1s.png",
            shopName: "好来红东方商店",
            img: "../../../static/goods/g1.jpg",
            content: "Yoobao羽博充电宝女迷你便携小巧10000毫安可爱大容量少女女款" +
            "通用手机飞机可带上卡通生型1万冲超萌移动电源",
            color: "【幸运】定制版薄荷绿",
            originalPrice: "79.00",
            price: "39.00",
            groupPrice:'28.00',
            number: "1",
            freight: "6.00",
            orderStatus: 4,
          },
          {
            orderTime: "2018-12-3",
            orderNumber: "266477474728649150",
            shopIcon: "../../../static/goods/g1s.png",
            shopName: "好来红东方商店",
            img: "../../../static/goods/g1.jpg",
            content: "Yoobao羽博充电宝女迷你便携小巧10000毫安可爱大容量少女女款" +
            "通用手机飞机可带上卡通生型1万冲超萌移动电源",
            color: "【幸运】定制版薄荷绿",
            originalPrice: "79.00",
            price: "39.00",
            groupPrice:'28.00',
            number: "1",
            freight: "6.00",
            orderStatus: 5,
          },
          {
            orderTime: "2018-12-3",
            orderNumber: "266477474728649150",
            shopIcon: "../../../static/goods/g1s.png",
            shopName: "好来红东方商店",
            img: "../../../static/goods/g1.jpg",
            content: "Yoobao羽博充电宝女迷你便携小巧10000毫安可爱大容量少女女款" +
            "通用手机飞机可带上卡通生型1万冲超萌移动电源",
            color: "【幸运】定制版薄荷绿",
            originalPrice: "79.00",
            price: "39.00",
            groupPrice:'28.00',
            number: "1",
            freight: "6.00",
            orderStatus: 4,
          },
          {
            orderTime: "2018-12-3",
            orderNumber: "266477474728649150",
            shopIcon: "../../../static/goods/g1s.png",
            shopName: "好来红东方商店",
            img: "../../../static/goods/g1.jpg",
            content: "Yoobao羽博充电宝女迷你便携小巧10000毫安可爱大容量少女女款" +
            "通用手机飞机可带上卡通生型1万冲超萌移动电源",
            color: "【幸运】定制版薄荷绿",
            originalPrice: "79.00",
            price: "39.00",
            groupPrice:'28.00',
            number: "1",
            freight: "6.00",
            orderStatus: 3,
          },
        ],  // 数据集
        page:1,
        limit:6,
        totalOrder:0,
        showPading:false,
      }
    },
    methods: {
      //点击选卡
      handleClick(tab, event,) { // 点击选项卡
        console.log('点击' + tab.name);
        let urlStr = '/goods?goodsType=' + tab.name;
        this.$router.push(urlStr);
        if(tab.name==0){
          this.goodslist=this.datelist;
        }
        else {
          this.goodslist = [];
          this.datelist.forEach((item) => {
            if (item.orderStatus == (tab.name-1)) {
              this.goodslist.push(item);
            }
          })
        }
      },
      //页3个事件
      pageChange(val){
//        console.log(`当前页: ${val}`);
      },
      preClick(val){
//        console.log(`上一页: ${val}`);
      },
      nextClick(val){
//        console.log(`下一页: ${val}`);
      },
      //删除订单
      handleDelete (index) {
        this.goodslist.splice(index, 1)
      },
      //获取数据
      getMyAllOrder(params){
        var urlStr='/v1/user/orderlistbyuser/?offset='+params.offset+'&limit='+params.limit+'&uid='
          +sessionStorage.getItem("clientId");
        console.log(urlStr);
        this.axios.get(urlStr,{
          headers:{
            "Authorization":"Bearer "+ getCookie('token')
          }
        }).then((res)=>{
          let data = res.data.data;
          console.log(data.client_nick);
//          this.goodslist=data.ordersList;
//          this.dataList=data.ordersList;
//          //格式化时间
//          this.goodslist.forEach(function (item) {
//            let time=item.createdAt;
//            var date = new Date(time).toJSON();
//            item.createdAt= new Date(+new Date(date)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
//            let time1=item.payedAt;
//            var date1 = new Date(time1).toJSON();
//            item.payedAt= new Date(+new Date(date1)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
//          });
//          this.totalOrder = data.totalCount;//保存总条数
//          if(data.totalCount<=this.limit){//分页栏是否显示
//            this.showPading=false;
//          }else{
//            this.showPading=true;
//          }
        }).catch((err)=>{
          console.log(err);
        })
      },
    },
    mounted(){
      this.goodslist = this.datelist;
//      this.getMyAllOrder({'offset':this.page,'limit':this.limit});
    }
  }
</script>
<style scoped>
  .my-content{min-height: 600px;}
  .bg-purple {position: relative;}
  .search-div {
    width: 275px;
    height: 35px;
    position: absolute;
    top: 5px;
    right: -37px;
    z-index: 1;
  }
  .search-div button {
    width: 51px;
    height: 28px;
    color: #666;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;
  }
  .search-div button:hover {
    background-color: #f65c29;
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .goods-nodate{height: 148px;background-color: #f7f7f7;margin-top: 25px;}
  .goods-nodate .g-nodate{
    text-align: center;height: 25px;line-height: 25px;
    color: #ff4b33;font-size: 12px;background-color: #fcedec;
  }
  /*分页*/
  .goods-page{
    position: relative;
    margin-top: 10px;
    height: 22px;
    border:1px solid #e8e8e8;
    padding: 10px 0 !important;
  }
  .goods-page .el-pagination{
    position: absolute;right: 0;
    top: 5px;
  }
</style>

