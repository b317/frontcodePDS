<template>
  <div class="shop_home">
    <el-row>
      <el-col :span="14">
        <div class="shop_intro">
          <el-row>
            <el-col :span="5">
              <div><img src="/static/shopImage1.jpg"></div>
            </el-col>
            <el-col :span="19">
              <p style="font-size: 16px;color: #F56C6C;font-family: microsoft yahei">乐扣乐扣峻佳专卖店</p>
              <span>商家名：<span class="mes">admin</span></span>
              <span>开店时间：<span class="mes">2014-08-22</span></span><br/>
              <span>管理权限：<span class="mes">管理员</span></span>
            </el-col>
          </el-row>
          <ul class="ul_one">
            <li><a href="javascript:void(0)">待处理订单(0)</a></li>
            <li><a href="javascript:void(0)">退换货订单(0)</a></li>
            <li><a href="javascript:void(0)">待商品回复咨询(0)</a></li>
            <li><a href="javascript:void(0)">系统消息(0)</a></li>
          </ul>
        </div>
      </el-col>
      <el-col :span="10" class="shop_score">
        <div>店铺评分</div>
        <div>
          <span>描述相符：</span><el-rate
          v-model="value"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
        </div>
        <div>
          <span>服务态度：</span><el-rate
          v-model="value"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
        </div>
        <div>
          <span>物流速度：</span><el-rate
          v-model="value"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
        </div>
      </el-col>
    </el-row>
    <div style="display:inline-block;width: 100% ">
      <div class="product_tag">
        <div>
          <div>店铺商品标签类别</div>
          <ul>
            <li><a href="javascript:void(0)">生活用品类<em>(10)</em></a></li>
            <li><a href="javascript:void(0)">零食类<em>(10)</em></a></li>
            <li><a href="javascript:void(0)">家具电器类<em>(10)</em></a></li>
            <li><a href="javascript:void(0)">服装衣服类<em>(10)</em></a></li>
            <li><a href="javascript:void(0)">运动户外类<em>(10)</em></a></li>
            <li><a href="javascript:void(0)">学习提升类<em>(10)</em></a></li>
          </ul>
        </div>
        <div class="shop_deal">
          <div>交易提示</div>
          <ul class="deal_hint">
            <li><a href="javascript:void(0)">待确定<em>(10)</em></a></li>
            <li><a href="javascript:void(0)">待付款<em>(10)</em></a></li>
            <li><a href="javascript:void(0)">待发货<em>(10)</em></a></li>
            <li><a href="javascript:void(0)">已发货<em>(10)</em></a></li>
            <li><a href="javascript:void(0)">已完成<em>(10)</em></a></li>
            <li><a href="javascript:void(0)">待评价<em>(10)</em></a></li>
          </ul>
        </div>
        <div class="shop_deal_data">
          <div>店铺日交易数据<i></i></div>
          <ul class="deal_data">
            <li>今日成交金额<p>0</p></li>
            <li>今日订单数<p>0</p></li>
            <li>今日客单价<p>0</p></li>
            <li>昨日成交金额<p>0</p></li>
            <li>昨日订单数<p>0</p></li>
            <li>昨日客单价<p>0</p></li>
          </ul>
        </div>
      </div>
      <div class="shop_contact">
        <div>
          <div>联系方式</div>
          <ul>
            <li>电话：</li>
            <li>邮箱：</li>
            <li class="address">
              <span>地址：</span>
              <em>广东省湛江市麻章区海大路1号广东海洋大学湖光校区</em>
            </li>
          </ul>
        </div>
        <div class="shop_introduction">
          <div>店铺简介</div>
          <p>
            <em>乐扣乐扣峻佳专卖店</em>是一家噼里啪啦稀里哗啦噼里啪啦稀里哗啦噼里啪啦稀里哗啦噼里啪啦稀里哗啦
            噼里啪啦稀里哗啦噼里啪啦稀里哗啦噼里啪啦稀里哗啦噼里啪啦稀里哗啦噼里啪啦稀里哗啦
            噼里啪啦稀里哗啦噼里啪啦稀里哗啦噼里啪啦稀里哗啦噼里啪啦稀里哗啦噼里啪啦稀里哗啦。
          </p>
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
  import { getCookie } from '../common/auth';

  export default {
    components: {
      ElCol,
      ElRow},
    data() {
      return {
        msg: 'hello world',
        value: 3.7
      }
    },
    mounted(){
      this.axios.get('/v1/merchant/mainsort/subcount',
        {
          headers:{
//            "Authorization":"Bearer "+'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NDUxMDM4MTMsImlkIjo1LCJuYmYiOjE1NDUxMDM4MTMsInJvbGVpZCI6MiwidXNlcm5hbWUiOiIxMzQyMDEyMDc1MCJ9.jyqnBoIL7YMLAXcwZMvPaxUVYdM1cep6y3w4i99dQOY'
            "Authorization":"Bearer "+ getCookie("token")
          }
        }).then((response)=>{
        let data = response.data;
        console.log(data+"gg")
      }).catch((err)=>{
        console.log(err+"haha");
      })
    }
  }
</script>
