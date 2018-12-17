<template>
    <div class="deliver-goods">
      <div class="bread_crumbs">
        <span>订单管理&nbsp;--&nbsp;<router-link href="javascript:void(0)" to="/OrderManage">订单列表</router-link>&nbsp;--&nbsp;发货信息</span>
      </div>
      <div>
        <table class="order-table">
          <thead>
          <tr>
            <th class="">商品信息</th>
            <th class="">单价</th>
            <th class="">团购价</th>
            <th class="">数量</th>
            <th class="">实付款</th>
            <th>状态</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td class="" width="34%">
              <div class="bought-form-hd" style="padding-bottom: 5px">
                <span class="bg-span bought-time">2018-11-17 22:47:21</span>
                <span class="bg-span bought-num" style="padding-left: 10px;">订单号：<span>266477474728649150</span></span>
              </div>
              <span class="goods_img"><img src="../../../static/shopImage1.jpg" style=""/></span>
              <div class="goods_title">
                <span><i>羽博充电宝女迷你小巧10000毫安可爱大容量少女款卡通生型1万冲超萌移动电源</i></span>
                <div><span class="goods_class" style="color: #999"><i>颜色分类：【幸运】翡翠青叶</i></span></div>
              </div>
            </td>
            <td class="" width="6%">￥29.90</td>
            <td width="6%">￥24.90</td>
            <td width="6%">2</td>
            <td width="14%">￥49.80</td>
            <td width="14%">待发货</td>
          </tr>
          </tbody>
        </table>
        <table class="infro-table">
          <tbody>
          <tr style="text-align: left;">
            <td style="padding-left: 15px;width: 37%;"><h3>订单信息</h3></td>
            <td rowspan="2" style="width: 577px;">
              <div class="detailBlock">
                <div class="trade-detail-imfor">
                  <span class="imfor-icon"><img src="../../../static/T1e.aoXuXdXXa94Hfd-32-32.png" style="width: 32px;height: 32px;"></span>
                  <span class="imfor-title">
                    <span class="">
                      <h3>订单状态：<span>等待发货</span></h3>
                    </span>
                  </span>
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
                  <span class="trade-imfor-aa" style="margin-left: 10px;" @click="dialogFormVisible = true">修改</span>
                  <!-- 修改地址对话框 -->
                  <el-dialog title="修改收货地址" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                      <el-form-item label="收货人姓名" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off" placeholder="请输入收货人姓名"></el-input>
                      </el-form-item>
                      <br/>
                      <el-form-item label="收货人电话" :label-width="formLabelWidth">
                        <el-input v-model="form.phone" autocomplete="off" placeholder="请输入收货人电话"></el-input>
                      </el-form-item>
                      <br/>
                      <el-form-item label="收货人地址" :label-width="formLabelWidth">
                        <el-input v-model="form.address" autocomplete="off" placeholder="请输入收货人地址"></el-input>
                        <!--<v-distpicker @selected="onSelected" style=""></v-distpicker>-->
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogFormVisible = false">确认</el-button>
                    </div>
                  </el-dialog>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>买家姓名</span><span>：</span></div>
                  <div class="trade-imfor-dd">
                      <span><span class="middleText">
                        <span class="short-dd-nick" title="寞寞默/13659763182">寞寞默
                          <span class="ww-light ww-small">
                            <a href="#" class="ww-inline ww-online" title="点此可以直接和买家交流">
                              <span>在线联系</span>
                            </a>
                          </span>
                        </span>
                      </span></span>
                  </div>
                </li>
                <li class="table-list">
                  <div class="trade-imfor-dt"><span>联系买家</span><span>：</span></div>
                  <div class="trade-imfor-dd">
                    <span class="ui-trade-label">13659******</span>
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
              msg: 'hello world',
              dialogFormVisible: false,
              form: {
                name: '',
                phone: '',
                address: '',
              },
              formLabelWidth: '120px',
            }
        },
      methods: {
        onSelected(e){
          this.form.address = e.province.value + e.city.value + e.area.value;
        }
      }
    }
</script>
<style scoped>
  /* 位置 */
  .bread_crumbs span a{
    color: #000 !important;
    text-decoration: none !important;
  }
  .bread_crumbs span a:hover{
    color: #67c23a !important;
    text-decoration: underline !important;
  }
  /* table1 */
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
  table tbody tr:last-child{border-bottom: 1px solid #ddd}
  table tbody td{padding: 10px 10px;}
  table tbody td:last-child{border: 1px solid #ddd}
  table tbody td:nth-of-type(1){text-align: left}
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
  /* table2 */
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
  .trade-imfor-aa{
    font-size: 16px;
    font-weight: bolder;
    color: #20a0ff;
    cursor: pointer;
    text-decoration: underline;
  }
  .trade-imfor-aa:hover{
    color: #f65d29;
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
