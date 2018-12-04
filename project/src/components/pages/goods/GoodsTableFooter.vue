<template>
  <div class="goods-table">
    <table class="g-table">
      <tbody>
      <tr>
        <th style="width: 55px;margin-right: 10px;">
          <span>
            <el-checkbox v-model="checked"></el-checkbox><label>全选</label>

          </span>
        </th>
       <th style="width: 56px;padding-left: 12px;">
         <div><a href="#" hidefocus="true" class="J_DeleteSelected">删除</a></div>
       </th>
        <th style="width: 48px;">
          <a href="#" hidefocus="true" class="J_BatchShare">分享</a>
        </th>
        <th style="width: 248px;"></th>
        <th style="width: 101px;">
          <div id="J_ShowSelectedItems" class="amount-sum">
            <span class="txt">已选商品</span>
            <em id="J_SelectedItemsCount">0</em><span class="txt">件</span>
          </div>
        </th>
        <th style="width: 184px;">
          <div class="price-sum" style="padding-left: 18px;padding-right: 5px;">
            <span class="txt">合计（不含运费）：</span>
            <strong class="price"><em id="J_Total"><span class="total-symbol">&nbsp;</span>0.00</em></strong>
          </div>
        </th>
        <th style="width: 109px;">
          <div class="btn-area">
            <a href="javascript:void(0)" id="J_Go" class="submit-btn submit-btn-disabled" aria-label="请注意如果没有选择宝贝，将无法结算">
              <span>结&nbsp;算</span>
            </a>
          </div>
        </th>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
  .goods-table {
    margin-top: 10px;
    height: 35px;
    background-color: #f5f5f5;
    border: 1px solid #e8e8e8;
    text-align: center;
    padding-top: 6px;
  }
  .g-table tr th label{
    margin-left: 4px;
  }
  .g-table tr th{
    color: #3c3c3c;
    font: 12px/180% Arial, Helvetica, sans-serif, "新宋体";
    /*border: 1px solid red;*/
  }
  .goods-table a{
    color: #3c3c3c;
  }
  .goods-table a:hover{
    color: #ff4200;
    text-decoration: underline;
  }
  .amount-sum #J_SelectedItemsCount{
    color: #f40;
    font-weight: 700;
    font-size: 18px;
    font-family: tohoma,arial;
    font-style: normal;
    padding: 0 5px;
  }
  .price-sum #J_Total{
    color: #f40;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
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
