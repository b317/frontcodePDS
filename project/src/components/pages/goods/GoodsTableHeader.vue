<template>
  <div class="goods-table">
    <table class="g-table" style="padding-left: 20px;">
      <tbody>
      <tr>
        <th style="width: 294px;">宝贝</th>
        <th style="width: 87px;">单价</th>
        <th style="width: 44px;">数量</th>
        <th style="width: 106px;">商品操作</th>
        <th style="width: 104px;">实付款</th>
        <th style="width: 94px;">
          <span class="field-select-mod">
            <span class="transaction-status">交易状态</span>
            <span class="rc-select-icon">
              <i class="icon-arrow el-icon-caret-bottom"></i>
            </span>
          </span>
        </th>
        <th style="width: 75px;">交易操作</th>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
  .goods-table {
    /*margin-left: 225px;*/
    /*margin-top: -50px;*/
    height: 35px;
    background-color: #f5f5f5;
    border: 1px solid #e8e8e8;
    text-align: center;
    padding-top: 5px;
  }
  .g-table tr th, .rc-select-icon {
    color: #3c3c3c;
    font: 12px/180% Arial, Helvetica, sans-serif, "新宋体";
    /*border: 1px solid red;*/
  }
  .rc-select-icon .icon-arrow{
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    transition: transform .3s;
  }
  .field-select-mod:hover .icon-arrow{
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
  }
</style>
<script>
    export default {
        data() {
            return {
//              selected: '',
//              optList: ['交易状态','已经付款', '等待发货', '已经发货', '交易完成', '交易失败']，
              msg: 'hello world'
            }
        }
    }
</script>
