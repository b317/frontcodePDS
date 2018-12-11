<template>
    <div>
      <div class="appTop" style="min-width: 1079px;">
        <span>您的位置：</span><span class="">
        <a class="" title="首页" href="#" target="_blank">首页</a>&gt;</span><span class="">
        <router-link class="" title="我的订单" href="javascript:void(0);" to="/goods">我的订单</router-link>&gt;</span><span class="last">
        <a class="" title="订单详情" href="#" style="color: #f65d29;font-weight: bolder;">订单详情</a></span>
        <div class="trade-detail-hotline" style="float: right;">
          <span>服务热线：</span><em><span class="ui-trade-label ">0000 000 000</span></em>
        </div>
      </div>
      <div>
        <el-steps :space="200" :active="5" finish-status="success">
          <el-step title="已完成" description="拍下商品"></el-step>
          <el-step title="已完成" description="等待付款"></el-step>
          <el-step title="已完成" description="进行付款"></el-step>
          <el-step title="已完成" description="完成付款"></el-step>
          <el-step title="已完成" description="交易成功"></el-step>
        </el-steps>
      </div>
      <div class="appDetailPanel">
        <table class="bought-form-table" style="min-width: 1079px;">
          <tbody>
          <tr class="tr-center" style="height: 35px;">
            <td style="width: 437px;">商品</td>
            <td style="width: 127px;">单价</td>
            <td style="width: 107px;">数量</td>
            <td style="width: 10%;">优惠</td>
            <td style="width: 197px;">状态</td>
          </tr>
          <tr>
            <td style="height: 45px;">
              <div class="bought-form-hd">
                <span class="bg-span" style="padding-left: 15px;padding-right: 10px;">包裹</span>
                <span class="bg-span bought-express">韵达快递</span>
                <span class="bg-span bought-num">运单号：<span>3932154546635</span></span>
                <span class="bg-span bought-time" style="padding-left: 10px;">2018-11-17 22:47:21</span>
              </div>
            </td>
            <td colspan="3">
              <span class="bg-span bought-sign">快件已被签收,如有问题请电联业务员：文彦烟【18666******】。相逢是缘,如果您对我的服务感到满意,给个五星好不好?【请在评价小件员处给予五星好评】如有疑问请联系快递员</span>
              <span style="padding-left: 5px;">更多<i class="el-icon-arrow-down" style="font-size: 10px;"></i></span>
            </td>
            <td></td>
          </tr>
          <tr class="tr-center">
            <td>
              <div class="g-img-a" style="float: left;margin: 12px;">
                <div><a href="#"><img :src="this.$route.params.goodsImg" alt="" style="width: 80px;height: 80px;"/></a></div>
              </div>
              <div class="g-cont-p" style="text-align: left;">
                <p><span style="line-height:16px;">{{this.$route.params.goodsContent}}</span></p>
                <p style="color: #9e9e9e"><span><span>颜色分类</span><span>：</span><span>【幸运】翡翠青叶</span></span></p>
              </div>
            </td>
            <td><span>29.90</span></td>
            <td><span>1</span></td>
            <td><span></span></td>
            <td class="border-result">
              <!--<span>交易成功</span>-->
              <span v-if="this.$route.params.orderStatus==1">已经付款</span>
              <span v-if="this.$route.params.orderStatus==2">等待发货</span>
              <span v-if="this.$route.params.orderStatus==3">已经发货</span>
              <span v-if="this.$route.params.orderStatus==4">交易完成</span>
              <span v-if="this.$route.params.orderStatus==5">正退款中</span>
              <span v-if="this.$route.params.orderStatus==6">交易失败</span>
            </td>
          </tr>
          </tbody>
        </table>
        <table class="trade-status-table" style="min-width: 1079px;">
          <tbody>
          <tr>
            <td style="padding-left: 15px;width: 37%;"><h3>订单信息</h3></td>
            <td rowspan="2" style="width: 577px;">
              <div class="detailBlock">
                <div class="trade-detail-imfor">
                  <span class="imfor-icon"><img src="../../../static/T1e.aoXuXdXXa94Hfd-32-32.png"></span>
                  <span class="imfor-title"><span class=""><h3>订单状态: <span>交易成功</span></h3></span></span>
                </div>
                <div class="trade-detail-prompt">
                  <div class="dotted-node"><span>&nbsp;</span><span>物流：</span></div>
                  <div class="trade-detail-main">
                    <span class="package-detail">韵达快递</span>
                    <span class="package-detail">运单号:</span><span>3932154546635</span>
                    <div class="logistic-detail">
                      <span class="package-detail package-time-detail">2018-11-17 22:47:21</span>
                      <span class="package-detail package-explain-detail"> 快件已被签收,如有问题请电联业务员：文彦烟【18666******】。相逢是缘,如果您对我的服务感到满意,给个五星好不好?【请在评价小件员处给予五星好评】如有疑问请联系快递员</span>
                    </div>
                  </div>
                </div>
                <div class="trade-detail-operate">
                  <dl>
                    <dt>商品总价：</dt>
                    <dd>￥<span>29.00</span></dd>
                  </dl>
                  <dl>
                    <dt>运费(快递)：</dt>
                    <dd>￥<span>0.00</span></dd>
                  </dl>
                  <dl>
                    <dt>订单总价：</dt>
                    <dd>￥<span>29.00</span></dd>
                  </dl>
                  <dl>
                    <dt>实付款：</dt>
                    <dd>￥<span>29.00</span></dd>
                  </dl>
                </div>
              </div>
            </td>
          </tr>
          <tr class="detail-list-tr">
            <td style="">
              <ul>
                <li class="table-list" style="padding-top: 15px;">
                  <div class="trade-imfor-dt" style="vertical-align: top;"><span>收货地址</span><span>：</span></div>
                  <div class="trade-imfor-dd" style="width: 214px;">
                    <span class="ui-trade-label null">寞寞默,13659******,广东省 湛江市 麻章区 湖光镇 湖光岩东广东海洋大学主校区 ,524003</span>
                  </div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>买家留言</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label null">-</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>订单编号</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label middleText">266477474728649150</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>付款方式</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">支付宝</span>/<span class="ui-trade-label">2018111222001176951015908051</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>成交时间</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">2018-11-12 21:46:44</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>付款时间</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">2018-11-12 21:46:57</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>发货时间</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">2018-11-13 09:55:21</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>完结时间</span><span>：</span></div>
                  <div class="trade-imfor-dd"><span class="ui-trade-label">2018-11-17 16:06:32</span></div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>商家店名</span><span>：</span></div>
                  <div class="trade-imfor-dd">
                      <span><span class="middleText">
                        <span class="short-dd-nick" title="馨语富尚专卖店">{{this.$route.params.shopName}}-馨语富尚专卖店
                          <span class="ww-light ww-small">
                            <a href="#" class="ww-inline ww-online" title="点此可以直接和卖家交流选好的宝贝，或相互交流网购体验，还支持语音视频噢。">
                              <span>客服在线</span>
                            </a>
                          </span>
                        </span>
                      </span></span>
                  </div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>商家公司</span><span>：</span></div>
                  <div class="trade-imfor-dd">
                    <span class="ui-trade-label">上海伯众数码科技有限公司</span>
                  </div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>商家城市</span><span>：</span></div>
                  <div class="trade-imfor-dd">
                    <span class="ui-trade-label">上海市</span>
                  </div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>联系商家</span><span>：</span></div>
                  <div class="trade-imfor-dd">
                    <span class="ui-trade-label">15001782890</span>
                  </div>
                </li>
              </ul>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'hello world'
            }
        }
    }
</script>
<style scoped>
  ul, li{list-style: none;}
  .appTop,.appTop a,.appDetailPanel{font-size: 14px;color: #666;}
  .appTop a:hover{color: #f65d29;}
  .appTop{margin-bottom: 15px;padding-top: 10px;border-top: 1px solid #ccc;}
  table{border: 1px solid #e8e8e8;margin-bottom: 15px;}
  table tr.tr-center td{
    line-height: 1;
    text-align: center;
  }
  .tr-center .g-cont-p{color: #666}
  .bought-form-table tr,.trade-status-table tr td{
    border-width: 1px 1px 0 0;
    border-style: solid;
    border-color: #ececec;
  }
  table,table tr,table tr td{border-collapse:collapse;}
  table tr td .bought-sign{
    display: inline-block;
    width: 247px;
    line-height: 16px;
    vertical-align: middle;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }
  table tr td.border-result{border-left: 1px solid #ececec;}
  .detail-list-tr td ul{
    margin: 0;
    padding: 0;
  }
  .detail-list-tr td ul li div{
    display: inline-block;
    padding-bottom: 15px;
  }
  .detail-list-tr td ul li .trade-imfor-dt{padding-left: 15px;}
  .trade-imfor-dd .ww-online{
    background-position: -80px 0;
  }
  .trade-imfor-dd a{
    width: 20px;
    height: 20px;
    text-decoration: none !important;
    background-image: url("../../../static/cs-130-60.gif");
  }
  .trade-imfor-dd span{
    line-height: 20px;
  }
  .trade-imfor-dd a span{
    display: none;
  }
  .trade-imfor-dd .ww-inline{
    display: inline-block;
    vertical-align: text-bottom;
  }

  .trade-status-table tr td .detailBlock{padding-left: 25px;}
  .detailBlock dl dt,.detailBlock dl dd{display: inline-block;}
  .detailBlock .trade-detail-imfor{
    height: 36px;
  }
  .trade-detail-imfor .imfor-icon {
    display: inline-block;
    vertical-align: middle;
  }
  .trade-detail-imfor .imfor-title{
    display: inline-block;
    font-size: 14px;
    font-weight: bolder;
    vertical-align: middle;
    margin-left: 10px;
  }
  .trade-detail-prompt{margin:25px 0 0 25px;}
  .trade-detail-prompt .dotted-node{display: inline-block;vertical-align: top;}
  .trade-detail-prompt .trade-detail-main{display: inline-block;width: 577px;}
  .trade-detail-operate dl dt{
    width: 127px;
    text-align: center;
  }
</style>
