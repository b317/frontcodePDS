<template>
  <div>
    <el-row>
      <el-col :span="5">
        <left-tab type="card" v-bind:routeArr="routeArr"></left-tab>
      </el-col>
      <el-col :span="19">
        <div class="grid-content bg-purple">
          <template>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="全部订单" name="0">
              <template slot-scope="scope">
                <goods-table-header></goods-table-header>
                <div class="goods-item-list">
                  <goods-item
                    v-for="(item,index) of goodslist"
                    :key="index"
                    :goods="item"
                    :index="index"
                    v-if="isdata"
                    ref="goods"
                    @delete="handleDelete"
                  ></goods-item>
                  <div class="goods-nodate" v-if="!isdata">
                    <div class="g-nodate">没有数据</div>
                  </div>
                </div>
                <!--<goods-table-footer></goods-table-footer>-->
              </template>
            </el-tab-pane>
            <el-tab-pane label="待付款" name="1">
              <template slot-scope="scope">
                <goods-table-header></goods-table-header>
                <div class="goods-item-list">
                  <goods-item
                    v-for="(item,index) of goodslist"
                    :key="index"
                    :goods="item"
                    :index="index"
                    v-if="isdata"
                    ref="goods"
                    @delete="handleDelete"
                  ></goods-item>
                  <div class="goods-nodate" v-if="!isdata">
                    <div class="g-nodate">没有数据</div>
                  </div>
                </div>
              </template>
            </el-tab-pane>
            <el-tab-pane label="已付款" name="2">
              <template slot-scope="scope">
                <goods-table-header></goods-table-header>
                <div class="goods-item-list">
                  <goods-item
                    v-for="(item,index) of goodslist"
                    :key="index"
                    :goods="item"
                    :index="index"
                    v-if="isdata"
                    ref="goods"
                    @delete="handleDelete"
                  ></goods-item>
                  <div class="goods-nodate" v-if="!isdata">
                    <div class="g-nodate">没有数据</div>
                  </div>
                </div>
              </template>
            </el-tab-pane>
            <el-tab-pane label="待发货" name="3">
              <template slot-scope="scope">
                <goods-table-header></goods-table-header>
                <div class="goods-item-list">
                  <goods-item
                    v-for="(item,index) of goodslist"
                    :key="index"
                    :goods="item"
                    :index="index"
                    v-if="isdata"
                    ref="goods"
                    @delete="handleDelete"
                  ></goods-item>
                  <div class="goods-nodate" v-if="!isdata">
                    <div class="g-nodate">没有数据</div>
                  </div>
                </div>
              </template>
            </el-tab-pane>
            <el-tab-pane label="已发货" name="4">
              <template slot-scope="scope">
                <goods-table-header></goods-table-header>
                <div class="goods-item-list">
                  <goods-item
                    v-for="(item,index) of goodslist"
                    :key="index"
                    :goods="item"
                    :index="index"
                    v-if="isdata"
                    ref="goods"
                    @delete="handleDelete"
                  ></goods-item>
                  <div class="goods-nodate" v-if="!isdata">
                    <div class="g-nodate">没有数据</div>
                  </div>
                </div>
              </template>
            </el-tab-pane>
            <el-tab-pane label="已完成" name="5">
              <template slot-scope="scope">
                <goods-table-header></goods-table-header>
                <div class="goods-item-list">
                  <goods-item
                    v-for="(item,index) of goodslist"
                    :key="index"
                    :goods="item"
                    :index="index"
                    v-if="isdata"
                    ref="goods"
                    @delete="handleDelete"
                  ></goods-item>
                  <div class="goods-nodate" v-if="!isdata">
                    <div class="g-nodate">没有数据</div>
                  </div>
                </div>
              </template>
            </el-tab-pane>
            <el-tab-pane label="退款" name="6">
              <template slot-scope="scope">
                <goods-table-header></goods-table-header>
                <div class="goods-item-list">
                  <goods-item
                    v-for="(item,index) of goodslist"
                    :key="index"
                    :goods="item"
                    :index="index"
                    v-if="isdata"
                    ref="goods"
                    @delete="handleDelete"
                  ></goods-item>
                  <div class="goods-nodate" v-if="!isdata">
                    <div class="g-nodate">没有数据</div>
                  </div>
                </div>
              </template>
            </el-tab-pane>
          </el-tabs>
          </template>
          <form class="container">
            <div class="search-div">
              <input value="" placeholder="请输入订单号" style="height: 21px;width: 175px;"/>
              <button id="search-btn">搜索</button>
            </div>
          </form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
  .bg-purple {
    position: relative;
  }

  .search-div {
    width: 275px;
    height: 35px;
    position: absolute;
    top: 5px;
    right: 5px;
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

  .goods-nodate{
    height: 148px;background-color: #f7f7f7;margin-top: 25px;
  }

  .goods-nodate .g-nodate{
    text-align: center;height: 25px;line-height: 25px;
    color: #ff4b33;font-size: 12px;background-color: #fcedec;
  }
</style>
<script>
  import leftTab from "@/components/module/leftTab"
  import ElTabPane from "../../../../node_modules/element-ui/packages/tabs/src/tab-pane.vue";
  import GoodsItem from "./GoodsItem.vue"
  import GoodsTableHeader from "./GoodsTableHeader.vue"
  import GoodsTableFooter from "./GoodsTableFooter.vue"

  export default {
    components: {
      ElTabPane,
      leftTab,
      GoodsItem,
      GoodsTableHeader,
      GoodsTableFooter
    },
    data() {
      return {
        isCheckAll: false,// 是否全选
        isdata:true,  // 是否有数据
        activeName: "0",  // 默认选卡
        msg: "goods",
        routeArr: {
          userInfo: "我的主页",
          coupon: "我的红包",
          order: "我的团购",
          goods: "我的订单",
        },
        goodslist:[], // 数据缓存
        datelist: [
          {
            orderTime: "2018-12-3",
            orderNumber: "266477474728649150",
            shopIcon: "g1s.png",
            shopName: "好来红东方商店",
            img: "g1.jpg",
            content: "Yoobao羽博充电宝女迷你便携小巧10000毫安可爱大容量少女女款" +
            "通用手机飞机可带上卡通生型1万冲超萌移动电源",
            color: "【幸运】定制版薄荷绿",
            originalPrice: "79.00",
            price: "39.00",
            number: "1",
            freight: "6.00",
            orderStatus: 0,
          },
          {
            orderTime: "2018-12-3",
            orderNumber: "266477474728649150",
            shopIcon: "g1s.png",
            shopName: "好来红东方商店",
            img: "g1.jpg",
            content: "Yoobao羽博充电宝女迷你便携小巧10000毫安可爱大容量少女女款" +
            "通用手机飞机可带上卡通生型1万冲超萌移动电源",
            color: "【幸运】定制版薄荷绿",
            originalPrice: "79.00",
            price: "39.00",
            number: "1",
            freight: "6.00",
            orderStatus: 0,
          },
          {
            orderTime: "2018-12-3",
            orderNumber: "266477474728649150",
            shopIcon: "g1s.png",
            shopName: "好来红东方商店",
            img: "g1.jpg",
            content: "Yoobao羽博充电宝女迷你便携小巧10000毫安可爱大容量少女女款" +
            "通用手机飞机可带上卡通生型1万冲超萌移动电源",
            color: "【幸运】定制版薄荷绿",
            originalPrice: "79.00",
            price: "39.00",
            number: "1",
            freight: "6.00",
            orderStatus: 1,
          },
          {
            orderTime: "2018-12-3",
            orderNumber: "266477474728649150",
            shopIcon: "g1s.png",
            shopName: "好来红东方商店",
            img: "g1.jpg",
            content: "Yoobao羽博充电宝女迷你便携小巧10000毫安可爱大容量少女女款" +
            "通用手机飞机可带上卡通生型1万冲超萌移动电源",
            color: "【幸运】定制版薄荷绿",
            originalPrice: "79.00",
            price: "39.00",
            number: "1",
            freight: "6.00",
            orderStatus: 2,
          },
          {
            orderTime: "2018-12-3",
            orderNumber: "266477474728649150",
            shopIcon: "g1s.png",
            shopName: "好来红东方商店",
            img: "g1.jpg",
            content: "Yoobao羽博充电宝女迷你便携小巧10000毫安可爱大容量少女女款" +
            "通用手机飞机可带上卡通生型1万冲超萌移动电源",
            color: "【幸运】定制版薄荷绿",
            originalPrice: "79.00",
            price: "39.00",
            number: "1",
            freight: "6.00",
            orderStatus: 3,
          },
          {
            orderTime: "2018-12-3",
            orderNumber: "266477474728649150",
            shopIcon: "g1s.png",
            shopName: "好来红东方商店",
            img: "g1.jpg",
            content: "Yoobao羽博充电宝女迷你便携小巧10000毫安可爱大容量少女女款" +
            "通用手机飞机可带上卡通生型1万冲超萌移动电源",
            color: "【幸运】定制版薄荷绿",
            originalPrice: "79.00",
            price: "39.00",
            number: "1",
            freight: "6.00",
            orderStatus: 4,
          },
          {
            orderTime: "2018-12-3",
            orderNumber: "266477474728649150",
            shopIcon: "g1s.png",
            shopName: "好来红东方商店",
            img: "g1.jpg",
            content: "Yoobao羽博充电宝女迷你便携小巧10000毫安可爱大容量少女女款" +
            "通用手机飞机可带上卡通生型1万冲超萌移动电源",
            color: "【幸运】定制版薄荷绿",
            originalPrice: "79.00",
            price: "39.00",
            number: "1",
            freight: "6.00",
            orderStatus: 5,
          },
        ]  // 数据集
      }
    },
    watch: {
      activeName: function (val) {
        let urlStr = '/goods?goodsType=' + val;
        this.$router.push(urlStr);
        if(this.activeName==0){
          this.goodslist=this.datelist;
        }else{
          this.goodslist=[];
          this.datelist.forEach((item)=>{
            if(item.orderStatus ==(this.activeName-1)){
              this.goodslist.push(item);
              console.log('red' + item.orderStatus);
            }
          })
        }
      }
    },
    created(){
      if(this.$route.query.goodsType){
        this.activeName=this.$route.query.goodsType;
        if(this.activeName==0){
          this.goodslist=this.datelist;
        }else{
          this.goodslist=[];
          this.datelist.forEach((item)=>{
            if(item.orderStatus ==(this.activeName-1)){
              this.goodslist.push(item);
              console.log(item.orderStatus);
            }
          })
        }
      }else{
        this.activeName==0;
        this.goodslist=this.datelist;
      }

    },
    methods: {
      handleClick(tab, event,) { // 点击选项卡
        console.log(tab, event.target.id);
        console.log('点击选项卡'+this.activeName);
//        if(event.target.id=="tab-second"){
//          axios.get('/...',
//            {
//              params:
//            })
//        }
      },
      handleDelete (index) {
        this.goodslist.splice(index, 1)
      }
    },
    mounted(){
      if(this.goodslist.length==0){
        this.isdata=false;
      }else{
        this.isdata=true;
      }
    }
  }
</script>
