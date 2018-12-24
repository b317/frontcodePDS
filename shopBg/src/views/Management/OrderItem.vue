<template>
  <tr>
    <td class="" width="14%">
      <p><span class="order_number">{{orderList.order_num}}</span></p>
      <p><span class="order_time">{{orderList.createdAt}}</span></p>
    </td>
    <td class="" width="34%">
      <span class="goods_img"><img :src="goodsData.goods_photo" style=""/></span>
      <div class="goods_title">
        <span><i>{{goodsData.goods_desc}}</i></span>
        <div><span class="goods_class" style="color: #999"><i>颜色分类：{{goodsData.goods_name}}</i></span></div>
      </div>
    </td>
    <!--<td class="" width="6%">￥{{orderList.price}}</td>-->
    <td width="6%">￥{{goodsData.goods_price}}</td>
    <td width="6%">1</td>
    <td width="14%">
      <p>￥{{orderList.order_price}}</p>
      <p>(含运费)：￥0.00</p>
    </td>
    <td width="10%">
      <p>
        <span>{{orderList.order_status}}</span>
      </p>
      <p>
        <span class="span-a" @click="showDetail">订单详情</span>
      </p>
      <!--<p><span class="span-a">物流跟踪</span></p>-->
    </td>
    <td>
      <div style="margin-bottom: 8px">
        <span v-if="orderList.order_status=='待发货'">
          <el-button type="success" size="mini" @click="dialogFormVisible = true">发货<i
            class="el-icon-location-outline"></i>
          </el-button>
          <!-- 快递对话框 -->
          <el-dialog title="物流快递" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="快递名称" :label-width="formLabelWidth">
                <el-select
                  style="width: 100%"
                  v-model="form.trackingName"
                  filterable
                  allow-create
                  default-first-option
                  placeholder="请输入或选择快递">
                  <el-option
                    v-for="item in options5"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="快运单号" :label-width="formLabelWidth">
                <el-input v-model="form.trackingNumber" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确认</el-button>
            </div>
          </el-dialog>
        </span>
        <span v-if="orderList.order_status=='待发货'">
          <el-button type="success" size="mini">退款<i class="el-icon-remove-outline"></i>
          </el-button>
        </span>
      </div>
      <div style="margin-bottom: 8px">
        <span v-if="orderList.order_status=='待发货'||orderList.order_status=='待退款'">
          <el-button size="mini">取消<i class="el-icon-remove-outline"></i></el-button>
        </span>
        <span>
          <el-button size="mini" @click="isDelete">删除<i class="el-icon-delete"></i></el-button>
        </span>
        <!--<span v-if="orderList.order_status=='已发货'">已发货</span>-->
      </div>
    </td>
  </tr>
</template>
<script>
  import {getCookie} from "@/common/auth";
    export default {
      props:['orderList','index'],
        data() {
            return {
              sg: 'hello world',
              dialogFormVisible: false,
              totalOrder: 0,
              options5: [
                {
                value: '顺丰快递',
                label: '顺丰快递'
              }, {
                value: '韵达快递',
                label: '韵达快递'
              }, {
                value: '圆通快递',
                label: '圆通快递'
              }, {
                value: '申通快递',
                label: '申通快递'
              }, {
                value: '中通快递',
                label: '中通快递'
              }
              ], //快递
              select: [],
              goodsData:'',
              form: {
                trackingName: '',
                trackingNumber: '',
              },
              formLabelWidth: '120px',
            }
        },
      methods: {
        showDetail(){
          this.$router.push({
            path:'/OrderDetail',
            query:{
              id:this.orderList.id,
              order_num:this.orderList.order_num,
            }
          })
        },
        //根据id获取商品信息
        findGoods(item){
          this.axios.get('/v1/merchant/goods/'+item.id,{
            headers:{
              "Authorization":"Bearer "+ getCookie("token")
            }
          }).then((res)=>{
            let data = res.data.data;
            this.goodsData = '';
            this.goodsData=data;
            console.log(this.goodsData.goods_name);
          }).catch((err)=>{
            console.log(err);
          })
        },
        //删除
        isDelete(){
          
        }
      },
      mounted(){
        this.findGoods(this.orderList);
      }
    }
</script>
<style scoped>
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
  .span-a:hover{
    text-decoration: underline;
    color: #ff4200;
    cursor: pointer;
  }
</style>
