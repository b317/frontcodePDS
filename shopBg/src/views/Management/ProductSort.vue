<template>
  <div class="product_sort">
    <div class="bread_crumbs">
      <span>商品管理&nbsp;--&nbsp;商品分类</span>
    </div>
    <div class="sort_list">
      <div><el-button size="small"><i class="el-icon-plus"></i>添加分类标签</el-button></div>
      <table>
        <thead>
        <tr>
          <th class="">所属级别</th>
          <th class="">分类标签名称</th>
          <th class="">商品数量</th>
          <th>设置</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Level one</td>
          <td>生活用品</td>
          <td>2000</td>
          <td>
            <el-button type="primary" size="mini">添加下一级</el-button>
          </td>
          <td>
            <div style="margin-bottom: 8px">
              <el-button type="success" size="mini">修改<i class="el-icon-edit"></i></el-button>
            </div>
            <div>
              <el-button size="mini">删除<i class="el-icon-delete"></i></el-button>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>
<style>
</style>
<script>
  export default {
    data() {
      return {
        msg: '商品分类'
      }
    }
  }
</script>
