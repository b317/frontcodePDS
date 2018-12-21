<template>
  <div class="product_list">
    <div class="bread_crumbs">
      <span>商品管理&nbsp;<i class="present">--&nbsp;商品列表</i></span>
    </div>
    <div class="add_new">
      <el-input v-model="input_productId" style="width:30%" placeholder="商品ID/商品关键字" class="input-with-select" size="mini">
        <el-button slot="append" icon="el-icon-search"  size="mini" @click="checkProductItem(input_productId)"></el-button>
      </el-input>
      <el-button size="small" @click="addNewProduct"><i class="el-icon-plus"></i>添加新商品</el-button>
    </div>
    <div class="lists">
      <div>
        <div>
          <table>
            <thead>
            <tr>
              <th class="">商品ID</th>
              <th class="">商品信息</th>
              <th class="">所属标签</th>
              <th>价格</th>
              <th>库存</th>
              <th>上架</th>
              <th>拼团人数</th>
              <th>拼团时效</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) of productList" :key="index">
              <td class="" width="8%">
                <p>{{item.id}}</p>
              </td>
              <td class=""  width="30%">
                <div class="publish_time">发布时间：{{item.createdAt}}</div>
                <span class="product_img"><img :src="item.goods_photo"/></span>
                <span class="title"><i>{{item.goods_name}}：{{item.goods_desc}}</i></span>
              </td>
              <td class=""  width="14%">{{item.levelOneLabel}}&nbsp;>&nbsp;{{item.levelTwoLabel}}</td>
              <td  width="6%">{{item.goods_price}}￥</td>
              <td  width="6%">{{item.goods_stock}}</td>
              <td  width="6%">
                <el-switch v-model="item.isPutaway" :width="value" >
                </el-switch>
              </td>
              <td  width="8%">{{item.goods_people}}</td>
              <td  width="6%">{{item.group_aging}}小时</td>
              <td >
                <div style="margin-bottom: 8px">
                  <el-button type="success" size="mini">修改<i class="el-icon-edit"></i></el-button>
                </div>
                <div>
                  <el-button size="mini">删除<i class="el-icon-delete"></i></el-button>
                </div>
              </td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <td colspan="24" v-if="totalProduct==0 || noneProduct">
                <el-alert
                  style="width: 100%"
                  title="当前没有数据"
                  type="info"
                  center
                  :closable="false"
                  show-icon>
                </el-alert>
              </td>
              <td colspan="3"></td>
              <td colspan="6" style="position: relative">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="totalProduct"
                  :page-size="limit"
                  @current-change="pageChange"
                  @prev-click="preClick"
                  @next-click="nextClick"
                  v-if="showPading"
                >
                </el-pagination>
              </td>
            </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  import {getCookie} from "@/common/auth";

  export default {
    components: {
      ElCol,
      ElRow},
    data() {
      return {
        msg: '商品列表',
        value:35,
        productList:[],
        input_productId:'',
        dataList:[
          {
            productId:10086,
            publishTime:'2017-03-22 17:54:41',
            productImg:'goods.jpg',
            productTitle:'食为先香辣鸡脖子湖南特产炸酱辣脖麻辣休闲肉类辣味零食小包装',
            levelOneLabel:'电子产品',
            levelTwoLabel:'电脑',
            price:'20',
            inventory:200,
            couponId:'',
            isPutaway:true,
            groupEffectTime:2
          },
          {
            productId:10087,
            publishTime:'2017-03-22 17:54:41',
            productImg:'Duckneck.jpg',
            productTitle:'食为先香辣鸡脖子湖南特产炸酱辣脖麻辣休闲肉类辣味零食小包装',
            levelOneLabel:'零食',
            levelTwoLabel:'鸭脖',
            price:'20',
            inventory:2300,
            couponId:'',
            isPutaway:true,
            groupEffectTime:2
          },
          {
            productId:10088,
            publishTime:'2017-03-22 17:54:41',
            productImg:'shopImage2.png',
            productTitle:'食为先香辣鸡脖子湖南特产炸酱辣脖麻辣休闲肉类辣味零食小包装',
            levelOneLabel:'零食',
            levelTwoLabel:'鸭脖',
            price:'20',
            inventory:340,
            couponId:'',
            isPutaway:true,
            groupEffectTime:2
          },
          {
            productId:10089,
            publishTime:'2017-03-22 17:54:41',
            productImg:'touxiang.jpg',
            productTitle:'食为先香辣鸡脖子湖南特产炸酱辣脖麻辣休闲肉类辣味零食小包装',
            levelOneLabel:'零食',
            levelTwoLabel:'鸭脖',
            price:'20',
            inventory:1100,
            couponId:'',
            isPutaway:true,
            groupEffectTime:2
          },
          {
            productId:10090,
            publishTime:'2017-03-22 17:54:41',
            productImg:'shopImage1.jpg',
            productTitle:'食为先香辣鸡脖子湖南特产炸酱辣脖麻辣休闲肉类辣味零食小包装',
            levelOneLabel:'零食',
            levelTwoLabel:'鸭脖',
            price:'20',
            inventory:500,
            couponId:'',
            isPutaway:true,
            groupEffectTime:2
          }
        ],
        page:1,
        limit:6,
        totalProduct:null,
        showPading:false,
        noneProduct:false
      }
    },
    mounted(){
      this.findProductList({'offset':this.page,'limit':this.limit})
    },
    methods:{
      findProductList(params){
        this.axios.get('/v1/merchant/goods/?offset='+params.offset+'&limit='+params.limit,{
          params:params,
          headers:{
            "Authorization":"Bearer "+ getCookie('token')
          }
        }).then((res)=>{
          let data = res.data.data;
          this.productList=data.goodsList;

          this.productList.forEach(function (item) {//格式化时间
            let time=item.createdAt;
            var date = new Date(time).toJSON();
            item.createdAt= new Date(+new Date(date)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
          });

          this.totalProduct=data.totalCount;//保存总条数
          if(data.totalCount<=this.limit){//分页栏是否显示
            this.showPading=false;
          }else{
            this.showPading=true;
          }
        }).catch((err)=>{
          console.log(err);
        })
      },
      pageChange(val){
//        console.log(`当前页: ${val}`);
        this.page=val;
        this.findProductList({'offset':this.page,'limit':this.limit});
      },
      preClick(val){
//        console.log(`上一页: ${val}`);
        this.page=val;
        this.findProductList({'offset':this.page,'limit':this.limit});
      },
      nextClick(val){
//        console.log(`下一页: ${val}`);
        this.page=val;
        this.findProductList({'offset':this.page,'limit':this.limit});
      },
      addNewProduct(){
        this.$store.dispatch("checkIndex2Action",'2-3');
        this.$router.push('/ProductUpdate')
      },
      checkProductItem(productId){
        this.axios.get('/v1/merchant/goods/'+productId,{
          headers:{
            "Authorization":"Bearer "+ getCookie('token')
          }
        }).then((res)=>{
          let list = res.data.data;
          console.log(res.data.message);
          console.log(res.data);
          if(!this.input_productId){
            this.productList=list.goodsList;
          }else if(res.data.code==20501){
            this.noneProduct=true;
            this.productList=[];
          }else{
            this.productList=[];
            this.productList.push(list);
          }
        }).catch((err)=>{
          let errorMes=err.data;
          console.log(err.data.message)
        })
      }
    }
  }
</script>
