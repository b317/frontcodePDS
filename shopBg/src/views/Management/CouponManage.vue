<template>
  <div class="coupons">
    <div class="bread_crumbs">
      <span>优惠券管理</span>
    </div>
    <div class="coupons_list">
      <div>
        <el-button size="small" @click="addLabel"><i class="el-icon-plus"></i>添加优惠券</el-button>
        <div style="clear: both"></div>
      </div>
      <div class="coupons_table">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部" name="first">
            <table>
              <thead>
              <tr>
                <th class="">编号</th>
                <th class="">优惠券名称</th>
                <th class="">优惠券类型</th>
                <th class="">使用门槛（元）</th>
                <th class="">面值（元）</th>
                <th>有效期</th>
                <th>是否过期</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>001</td>
                <td>店铺优惠券</td>
                <td>全店通用</td>
                <td>满99元使用</td>
                <td>10元</td>
                <td>2018-12-17~2018-12-19</td>
                <td>未过期</td>
                <td>
                  <div style="margin-bottom: 5px"><el-button type="primary" size="mini" plain>修改</el-button></div>
                  <div><el-button size="mini" plain>删除</el-button></div>
                </td>
              </tr>
              <tr>
                <td>002</td>
                <td>店铺优惠券</td>
                <td>全店通用</td>
                <td>满66元使用</td>
                <td>10元</td>
                <td>2018-12-14~2018-12-16</td>
                <td>已过期</td>
                <td>
                  <el-button type="primary" size="mini" plain>修改</el-button>
                </td>
              </tr>
              </tbody>
            </table>
          </el-tab-pane>
          <el-tab-pane label="未过期" name="second">
            <table>
              <thead>
              <tr>
                <th class="">编号</th>
                <th class="">优惠券名称</th>
                <th class="">优惠券类型</th>
                <th class="">使用门槛（元）</th>
                <th class="">面值（元）</th>
                <th>有效期</th>
                <th>是否过期</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>001</td>
                <td>店铺优惠券</td>
                <td>全店通用</td>
                <td>满99元使用</td>
                <td>10元</td>
                <td>2018-12-17~2018-12-19</td>
                <td>未过期</td>
                <td>
                  <div style="margin-bottom: 5px"><el-button type="primary" size="mini" plain>修改</el-button></div>
                  <div><el-button size="mini" plain>删除</el-button></div>
                </td>
              </tr>
              </tbody>
            </table>
          </el-tab-pane>
          <el-tab-pane label="已过期" name="third">
            <table>
              <thead>
              <tr>
                <th class="">编号</th>
                <th class="">优惠券名称</th>
                <th class="">优惠券类型</th>
                <th class="">使用门槛（元）</th>
                <th class="">面值（元）</th>
                <th>有效期</th>
                <th>是否过期</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>002</td>
                <td>店铺优惠券</td>
                <td>全店通用</td>
                <td>满66元使用</td>
                <td>10元</td>
                <td>2018-12-14~2018-12-16</td>
                <td>已过期</td>
                <td>
                  <el-button type="primary" size="mini" plain>修改</el-button>
                </td>
              </tr>
              </tbody>
            </table>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<style>
</style>
<script>
  export default {
    data() {
      return {
        msg: '优惠券管理',
        activeName:'first'
      }
    }
  }
</script>
