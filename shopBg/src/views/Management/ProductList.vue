<template>
  <div class="product_list">
    <div class="bread_crumbs">
      <span>商品管理&nbsp;--&nbsp;商品列表</span>
    </div>
    <div style="margin: 30px 0">
      <el-row>
        <el-col :span="6">
          <el-input placeholder="商品ID/商品关键字" class="input-with-select" size="mini">
            <el-button slot="append" icon="el-icon-search"  size="mini"></el-button>
          </el-input>
        </el-col>
      </el-row>
    </div>
    <div class="lists">
    <div>
      <table>
        <thead>
        <tr>
          <th class="">商品ID</th>
          <th class="">商品信息</th>
          <th class="">所属标签</th>
          <th>价格</th>
          <th>库存</th>
          <th>优惠券</th>
          <th>上架</th>
          <th>拼团时效</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) of productList" :key="index">
          <td class="" width="8%">
            <el-checkbox></el-checkbox>
            <p>{{item.productId}}</p>
          </td>
          <td class=""  width="30%">
            <div class="publish_time">发布时间：{{item.publishTime}}</div>
            <span class="product_img"><img :src="'/static/'+ item.productImg"/></span>
            <span class="title"><i>{{item.productTitle}}</i></span>
          </td>
          <td class=""  width="14%">{{item.levelOneLabel}}&nbsp;>&nbsp;{{item.levelTwoLabel}}</td>
          <td  width="6%">{{item.price}}￥</td>
          <td  width="6%">{{item.price}}</td>
          <td  width="8%"><a href="javascript:void(0)">查看</a></td>
          <td  width="6%">
            <el-switch v-model="item.isPutaway" :width="value" >
            </el-switch>
          </td>
          <td  width="6%">{{item.groupEffectTime}}小时</td>
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
  </div>
</template>
<style>
</style>
<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";

  export default {
    components: {
      ElCol,
      ElRow},
    data() {
      return {
        msg: '商品列表',
        value:35,
        productList:[],
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
        ]
      }
    },
    mounted(){
      this.productList=this.dataList;
    },
    methods:{
      pageChange(val){
//        console.log(`当前页: ${val}`);
      },
      preClick(val){
//        console.log(`上一页: ${val}`);
      },
      nextClick(val){
//        console.log(`下一页: ${val}`);
      }
    }
  }
</script>
