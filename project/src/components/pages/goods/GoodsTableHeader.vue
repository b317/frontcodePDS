<template>
  <table>
    <thead>
    <tr>
      <th width="39%">宝贝</th>
      <th width="8%">单价</th>
      <th width="8%">数量</th>
      <th width="14%">商品操作</th>
      <th width="8%">实付款</th>
      <th width="14%">
              <span class="field-select-mod">
              <span class="transaction-status">交易状态<i class="icon-arrow el-icon-caret-bottom"></i></span>
              </span>
      </th>
      <th width="10%">交易操作</th>
    </tr>
    </thead>
  </table>
</template>
<style scoped>
  .lists table{
    border:1px solid #e8e8e8;
    width: 100%;
    border-collapse: collapse;
  }
  .lists table thead{background-color: #f5f5f5;}
  .lists table thead tr th{
    border-bottom: 1px solid #ddd;
    vertical-align: middle;
    line-height: 40px;
    height: 38px;
  }
  .lists table thead tr th,.icon-arrow{
    color: #3c3c3c;
    font: 12px/180% Arial, Helvetica, sans-serif, "新宋体";
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
              msg: 'hello world'
            }
        }
    }
</script>
