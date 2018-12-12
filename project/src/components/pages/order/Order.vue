<template>
  <div>
    <el-row style="min-width: 1104px !important;">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <left-tab v-bind:routeArr="routeArr"></left-tab>
        </div>
      </el-col>
      <el-col :span="20">
        <template>
          <el-tabs v-model="activeName" @tab-click="handleClick" class="order_list">
            <el-tab-pane label="所有团购" name="0">
              <el-row>
                <el-col :span="9">
                  <div class="grid-content bg-purple">
                    <el-input placeholder="请输入拼团团购号" v-model="order_number" size="mini">
                      <template slot="append">
                        <el-button type="primary" size="mini" @click="findByGroupNum">团购号查询</el-button>
                      </template>
                    </el-input>
                  </div>
                </el-col>
              </el-row>
              <order-list :orderlist="dataList"></order-list>
            </el-tab-pane>
            <el-tab-pane label="正在拼团" name="1">
              <order-list :orderlist="dataList"></order-list>
            </el-tab-pane>
            <el-tab-pane label="拼团完成" name="2">
              <order-list :orderlist="dataList"></order-list>
            </el-tab-pane>
            <!--<el-tab-pane label="已发货" name="3">-->
              <!--<order-list :orderlist="dataList"></order-list>-->
            <!--</el-tab-pane>-->
            <!--<el-tab-pane label="已签收" name="4">-->
              <!--<order-list :orderlist="dataList"></order-list>-->
            <!--</el-tab-pane>-->
          </el-tabs>
        </template>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import leftTab from "@/components/module/leftTab"
  import OrderList from "@/components/module/OrderList"

  export default {
    components:{
      leftTab,OrderList
    },
    data () {
      return {
        msg:"order",
        routeArr:{
          userInfo:"我的主页",
          coupon:"我的红包",
          order:"我的团购",
          goods:"我的订单",
        },
        activeName: 0,
        order_number:'',
        OrderList:[
          {
            productTitle:'食为先香辣鸡脖子湖南特产炸酱辣脖麻辣休闲肉类辣味零食小包装',
            productImg:'goods.jpg',
            groupNumber:'281777859449257250',
            groupTime:'2018-12-02',
            shopName:'乐扣乐扣峻佳专卖店',
            shopImg:'touxiang.jpg',
            productPrice:'74.00',
            couponPrice:'10.00',
            groupNeedPeople:'5',
            groupRealityPeople:'4',
            groupStatus:0
          },
          {
            productTitle:'食为先香辣鸡脖子湖南特产炸酱辣脖麻辣休闲肉类辣味零食小包装',
            productImg:'goods.jpg',
            groupNumber:'281777859449257250',
            groupTime:'2018-12-02',
            shopName:' vwe旗舰店',
            shopImg:'shopImage1.jpg',
            productPrice:'84.00',
            couponPrice:'10.00',
            groupNeedPeople:'5',
            groupRealityPeople:'4',
            groupStatus:0
          },
          {
            productTitle:'食为先香辣鸡脖子湖南特产炸酱辣脖麻辣休闲肉类辣味零食小包装',
            productImg:'goods.jpg',
            groupNumber:'281777859449257250',
            groupTime:'2018-12-02',
            shopName:' 小瞎子745316',
            shopImg:'shopImage2.png',
            productPrice:'64.00',
            couponPrice:'10.00',
            groupNeedPeople:'5',
            groupRealityPeople:'4',
            groupStatus:0
          },
          {
            productTitle:'食为先香辣鸡脖子湖南特产炸酱辣脖麻辣休闲肉类辣味零食小包装',
            productImg:'goods.jpg',
            groupNumber:'281777859449257250',
            groupTime:'2018-12-02',
            shopName:'乐扣乐扣峻佳专卖店',
            shopImg:'touxiang.jpg',
            productPrice:'84.00',
            couponPrice:'10.00',
            groupNeedPeople:'5',
            groupRealityPeople:'5',
            groupStatus:1
          },
          {
            productTitle:'食为先香辣鸡脖子湖南特产炸酱辣脖麻辣休闲肉类辣味零食小包装',
            productImg:'goods.jpg',
            groupNumber:'281777859449257250',
            groupTime:'2018-12-02',
            shopName:' vwe旗舰店',
            shopImg:'shopImage2.png',
            productPrice:'84.00',
            couponPrice:'10.00',
            groupNeedPeople:'5',
            groupRealityPeople:'5',
            groupStatus:1
          },
          {
            productTitle:'食为先香辣鸡脖子湖南特产炸酱辣脖麻辣休闲肉类辣味零食小包装',
            productImg:'goods.jpg',
            groupNumber:'281777859449257250',
            groupTime:'2018-12-02',
            shopName:'乐扣乐扣峻佳专卖店',
            shopImg:'shopImage1.jpg',
            productPrice:'84.00',
            couponPrice:'10.00',
            groupNeedPeople:'5',
            groupRealityPeople:'5',
            groupStatus:1
          },
        ],  // 数据集
        dataList:[]
      }
    },
    watch : {
      activeName:function(val) {
        let urlStr = '/Order?orderType=' + val;
        this.$router.push(urlStr);
        if(this.activeName==0){
          this.dataList=this.OrderList;
        }else{
          this.dataList=[];
          this.OrderList.forEach((item)=>{
//          console.log(this.activeName);
            if(item.groupStatus ==(this.activeName-1)){
              this.dataList.push(item);
              console.log(item.groupStatus);
            }
          })
        }
      },
    },
    created(){
      if(this.$route.query.orderType){
        this.activeName=this.$route.query.orderType;
        if(this.activeName==0){
          this.dataList=this.OrderList;
        }else{
          this.dataList=[];
          this.OrderList.forEach((item)=>{
//          console.log(this.activeName);
            if(item.groupStatus ==(this.activeName-1)){
              this.dataList.push(item);
              console.log(item.groupStatus);
            }
          })
        }
      }else{
        this.activeName=0;
      }

    },
    methods:{
      handleClick(tab, event) {
//        console.log(tab);
//        console.log(event);
//        console.log(event.target.id);
//        console.log(event.target);
      },
      findByGroupNum(){
//        this.$router.push('localhost:8081:/table');
        window.open('http://localhost:8081/#/table');
      }
    }
  }
</script>

<style >
  .order_list .el-tabs__item{
    font-family: Microsoft YaHei;font-weight: 700;font-size: 16px;
  }
  .order_list .el-container{border:1px solid #e8e8e8;margin-bottom: 20px}
  .order_list .el-container:hover{border:1px solid #d0d0d0}
  .order_list .el-input{margin: 10px 0}
  .order_list .el-button--primary{
    color: #fff !important;
    background-color: #409eff !important;
    border-color: #409eff !important;border-radius: 0 !important;
  }
  .order_list .el-button--primary:hover{
    opacity: 0.7;
  }
  .order_list .el-row-list.el-row{
    margin: 20px 0;background: #f5f5f5; border: 1px solid #e8e8e8;
    text-align: center;
    /*font-size: 14px;*/
    font: 12px/1.5 tahoma,arial,Hiragino Sans GB,\\5B8B\4F53,sans-serif;
  }
  .order_list .el-row-list.el-row>div>div{
    padding:10px 0;
  }
  .order_list .el-header {
    background-color: #f5f5f5;border-bottom:1px solid #e8e8e8;
    color: gray;font: 12px/1.5 tahoma,arial,Hiragino Sans GB,\\5B8B\4F53,sans-serif;
    line-height: 45px;height:45px !important;
  }
  .order_list .el-header .shop_image img{
    width: 22px !important;vertical-align: middle;
    border-radius: 25px;cursor: pointer;
  }
  .order_list .el-header .shop_name{
    font-weight: bold;color: #F56C6C;cursor: pointer;
  }
  .order_list .el-header .el-icon-delete{
    font-size: 20px;vertical-align: middle;font-weight: bold;opacity: 0.8;cursor: pointer;
  }
  .order_list .el-header .el-icon-delete:hover{
    opacity: 1;
  }
  .order_list .el-main {
    color: #333;font-size: 13px;
    line-height: 70px;text-align: center;
  }
  .order_list .el-main .el-col:first-child{
    text-align: left;
  }
  .order_list .el-main .el-col:nth-of-type(2){
    font-weight: bold;
  }
  .order_list .el-main .el-col:nth-of-type(3){
    font-weight: bold;color: #F56C6C;
  }
  .order_list .el-main .el-col:nth-of-type(4){
    color:#409eff;font-weight: bolder;
  }
  .order_list .el-main .el-col:nth-of-type(8){
    text-align: right;vertical-align: middle;
  }
  .order_list .el-main .el-col:nth-of-type(8) .tip{
    line-height:35px;
  }

  .order_list .el-main .goods_image{display: inline-block;}
  .order_list .el-main .goods_image img{
    width:100px;vertical-align: middle;
  }
  .order_list .el-main .goods_content{
    font-size: 10px;display: inline-block;
    width: 170px;line-height: 20px;vertical-align: middle;
  }
  .order_list .el-main .goods_content span{
    width:100%; display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .order_list .el-main .goods_content span a {
    opacity: 0.8;color:gray;
  }
  .order_list .el-main .goods_content span a:hover{
    opacity: 1
  }
</style>
