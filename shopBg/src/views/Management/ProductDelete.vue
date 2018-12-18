<template>
  <div>
    <div class="bread_crumbs">
      <span>商品管理&nbsp;<i class="present">--&nbsp;商品删除</i></span>
    </div>
    <div class="product_delete">
      <el-input placeholder="商品ID/商品关键字" class="input-with-select" size="mini">
        <el-button slot="append" icon="el-icon-search"  size="mini"></el-button>
      </el-input>
      <el-tabs tab-position="left" style="height: 200px;"  v-model="activeName">
        <el-tab-pane label="一级删除" name="1">
          <table>
            <thead>
            <tr>
              <th><el-checkbox></el-checkbox></th>
              <th class="">所属级别</th>
              <th class="">分类标签名称</th>
              <th class="">下级标签数量</th>
              <th class="">商品总数量</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><el-checkbox></el-checkbox></td>
              <td>1级</td>
              <td>电子产品</td>
              <td>3</td>
              <td>300</td>
              <td><el-button type="warning" plain size="mini">点击删除</el-button></td>
            </tr>
            </tbody>
          </table>
        </el-tab-pane>
        <el-tab-pane label="二级删除" name="2">
          <table>
            <thead>
            <tr>
              <th><el-checkbox></el-checkbox></th>
              <th class="">所属级别</th>
              <th class="">分类标签名称</th>
              <th class="">所属上级标签</th>
              <th class="">商品总类别</th>
              <th class="">商品总数量</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><el-checkbox></el-checkbox></td>
              <td>2级</td>
              <td>电饭煲</td>
              <td>家具电器</td>
              <td>5</td>
              <td>300</td>
              <td><el-button type="warning" plain size="mini">点击删除</el-button></td>
            </tr>
            </tbody>
          </table>
        </el-tab-pane>
        <el-tab-pane label="单一商品删除" name="3">
          <table class="single_product">
            <thead>
            <tr>
              <th><el-checkbox></el-checkbox></th>
              <th class="">商品编号</th>
              <th class="">商品名称</th>
              <th class="">所属商品标签</th>
              <th class="">库存</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><el-checkbox></el-checkbox></td>
              <td>1001</td>
              <td>
                <a href="javascript:void(0)">食为先香辣鸡脖子湖南特产炸酱辣脖麻辣休闲肉类辣味零食小包装</a>
              </td>
              <td>零食>鸭脖</td>
              <td>300</td>
              <td><el-button type="warning" plain size="mini">点击删除</el-button></td>
            </tr>
            </tbody>
          </table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style>
</style>
<script>
  export default {
    data() {
      return {
        msg: '商品删除',
        activeName:'1'
      }
    }
  }
</script>
