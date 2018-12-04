<template>
  <div>
    <table class="goods-item-table">
      <tbody>
      <tr style="height: 42px;background-color: #f5f5f5;border: 1px solid #e8e8e8;">
        <td style="width: 330px;">
          <div class="h-order-num">
            <span><el-checkbox v-model="checked"></el-checkbox><label>{{goods.orderTime}}</label></span>
            <span class="order-num">订单号：<span>{{goods.orderNumber}}</span></span>
          </div>
        </td>
        <td colspan="2" style="width: 131px;">
          <div>
            <span style="">
              <img :src="'./static/goods/' + goods.shopIcon" alt=""
                   style="width: 16px;height: 16px;margin-left: 12px;margin-right: 3px;vertical-align: middle;"/>
              <a class="g-shop-name" href="#" :title="goods.shopName">{{goods.shopName}}</a>
            </span>
          </div>
        </td>
        <td style="width: 104px;"></td>
        <td colspan="3"></td>
      </tr>
      <tr class="g-tr-center">
        <td style="width: 330px;border-right: none;">
          <div class="g-img-a">
            <div><a href="#"><img :src="'./static/goods/' + goods.img" alt=""/></a></div>
          </div>
          <div class="g-cont-a">
            <p>
              <a href="#" rel="noopener noreferrer"><span style="line-height:16px;">
                  {{goods.content}}</span></a>
              <a href="#" rel="noopener noreferrer"> [交易快照] </a>
            </p>
            <p style="color: #9e9e9e"><span><span>颜色分类</span><span>：</span><span>{{goods.color}}</span></span></p>
          </div>
        </td>
        <td style="width: 87px;border: none;">
          <div>
            <p style="color: #9c9c9c;">
              <del><span>￥</span><span>{{goods.originalPrice}}</span></del>
            </p>
            <p><span>￥</span><span>{{goods.price}}</span></p>
          </div>
        </td>
        <td style="width: 44px;border: none;">
          <div>
            <p><span>{{goods.number}}</span></p>
            <!--<template>-->
              <!--<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>-->
            <!--</template>-->
          </div>
        </td>
        <td style="width: 106px;border-left: none;">
          <div>
            <p><span><a href="#">申请退款</a></span></p>
            <p><span><a href="#">投诉商家</a></span></p>
          </div>
        </td>
        <td rowspan="2"style="width: 104px;">
          <div>
            <p style="font-weight: bolder;"><span>￥</span><span>{{goods.price}}</span></p>
            <p style="color: #6c6c6c;"><span>(</span><span>含运费</span><span>)：</span><span>￥</span><span>{{goods.freight}}</span></p>
          </div>
        </td>
        <td rowspan="2" style="width: 94px;">
          <div>
            <p>{{goods.orderResult}}</p>
            <p><a href="#">订单详情</a></p>
            <p><a href="#">{{goods.logistics}}</a></p>
          </div>
        </td>
        <td rowspan="2" style="width: 75px;vertical-align: middle;">
          <div>
            <el-button size="mini" type="primary" plain @click="YesNoDelete">删除</el-button>
          </div>
        </td>
      </tr>
      <tr class="g-tr-center" style="height: 42px;">
        <td style="text-align: left;padding-left: 25px;vertical-align: middle;border-right: none;color: blue;">
          <div>拼团优惠</div>
        </td>
        <td style="vertical-align: middle;border-left: none;border-right: none;">
          <div>
            <span>￥</span><span>0.00</span>
          </div>
        </td>
        <td style="border-left: none;border-right: none;"></td>
        <td style="border-left: none;"></td>
        <!--<td></td>-->
        <!--<td></td>-->
        <!--<td></td>-->
      </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
  table{border: 1px solid #e8e8e8;}
  table a {text-decoration: none;color: #3c3c3c;}
  table a:hover {text-decoration: none;color: #ff4200;}
  table tr.g-tr-center td{
    line-height: 1;
    text-align: center;
    vertical-align: top;}
  .goods-item-table,.goods-item-table tr,.goods-item-table td {
    border-collapse: collapse;
  }
  .g-tr-center td{
    border-width: 1px 1px 0 0;
    border-style: solid;
    border-color: #ececec;
  }
  .goods-item-table {
    color: #3c3c3c;
    font: 12px/180% Arial, Helvetica, sans-serif, "新宋体";
    /*margin-left: 225px;*/
    margin-top: 10px;
  }
  .h-order-num {
    margin-left: 12px;
  }
  .h-order-num label {
    margin-left: 5px;
  }
  .h-order-num .order-num {
    margin-left: 10px;
  }
  .g-shop-name{
    display: inline-block;
    width: 70px;
    line-height: 16px;
    vertical-align: middle;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
  }
  .g-img-a{
    float: left;
    margin: 12px;
  }
  .g-cont-a{
    margin-left: 90px;
    text-align: left;
  }
</style>
<script>
  import ElButton from "../../../../node_modules/element-ui/packages/button/src/button.vue";

  export default {
    components: {ElButton},
//    props: {
//      goods: {
//        type: Object
//      },
//    },
    props: ['goods','index'],
    data() {
      return {
        msg: 'hello world'
      }
    },
    methods: {
      YesNoDelete () {
//        alert(this.index)
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
          this.$emit('delete',this.index)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
    }
  }
</script>
