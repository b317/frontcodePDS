<template>
  <div>
    <el-row style="min-width: 1104px !important;">
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <left-tab v-bind:routeArr="routeArr"></left-tab>
        </div>
      </el-col>
      <el-col :span="20"><div class="grid-content bg-purple">
        <el-tabs v-model="activeName"  style="">
          <el-tab-pane label="系统优惠券" name="first">
            <el-tabs v-model="activeName1">
              <el-tab-pane label="可用" name="first">
                <el-table :data="sysCouponData" stripe style="width: 100%;">
                  <el-table-column
                    type="selection"
                    width="40">
                  </el-table-column>
                  <el-table-column prop="coupon_name" label="优惠券" width="220">
                    <template  slot-scope="scope">
                      <discount-couponss>
                        <span slot="coupon_type">{{scope.row.coupon_name}}</span>
                        <span slot="discount">{{scope.row.coupon_price}}</span>
                        <span slot="decrease">满99元使用</span>
                        <span slot="getCoupon">已领取</span>
                      </discount-couponss>
                    </template>
                  </el-table-column>
                  <el-table-column prop="" label="来源/限用" width="180">
                    <template slot-scope="scope">
                      <span style="color:#409EFF;">{{scope.row.coupon_from}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="coupon_price" label="优惠金额" width="100">
                    <template slot-scope="scope">
                      <span style="font-weight: bold">{{scope.row.coupon_price}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="coupon_indate" label="有效期" width="180">
                  </el-table-column>
                  <el-table-column prop="operation" label="操作">
                    <template  slot-scope="scope">
                      <el-button size="mini" type="primary">去使用</el-button>
                      <el-button size="mini" type="danger">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="已失效" name="second">
                <el-table :data="sysCouponData" stripe style="width: 100%;background: #EBECF0 !important;">
                  <el-table-column type="selection" width="50">
                  </el-table-column>
                  <el-table-column prop="coupon_name" label="优惠券" width="230">
                    <template  slot-scope="scope">
                      <discount-coupons>
                        <span slot="coupon_type">{{scope.row.coupon_name}}</span>
                        <span slot="discount">{{scope.row.coupon_price}}</span>
                        <span slot="decrease">满99元使用</span>
                        <span slot="getCoupon">已失效</span>
                      </discount-coupons>
                    </template>
                  </el-table-column>
                  <el-table-column prop="" label="来源/限用" width="190">
                    <template slot-scope="scope">
                      <span style="color:gray;opacity: 0.8">{{scope.row.coupon_from}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="coupon_price" label="优惠金额" width="110">
                  </el-table-column>
                  <el-table-column prop="coupon_indate" label="有效期" width="200">
                  </el-table-column>
                  <el-table-column prop="operation" label="操作">
                    <template  slot-scope="scope">
                      <el-button size="mini" type="danger">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane label="商家优惠券" name="third">
            <el-tabs v-model="activeName2">
            <el-tab-pane label="可用" name="first">
              <el-table :data="couponData" stripe style="width: 100%;">
                <el-table-column type="selection" width="40">
                </el-table-column>
                <el-table-column prop="coupon_name" label="优惠券" width="220">
                  <template  slot-scope="scope">
                    <discount-coupon>
                      <span slot="coupon_type">{{scope.row.coupon_name}}</span>
                      <span slot="discount">{{scope.row.coupon_price}}</span>
                      <span slot="decrease">满99元使用</span>
                      <span slot="getCoupon">已领取</span>
                    </discount-coupon>
                  </template>
                </el-table-column>
                <el-table-column prop="" label="来源/限用" width="180">
                  <template slot-scope="scope">
                    <span style="color:#F56C6C;font-weight: bold;opacity: 0.8">{{scope.row.coupon_from}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="coupon_price" label="优惠金额" width="100">
                  <template slot-scope="scope">
                    <span style="font-weight: bold">{{scope.row.coupon_price}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="coupon_indate" label="有效期" width="180">
                </el-table-column>
                <el-table-column prop="operation" label="操作">
                  <template  slot-scope="scope">
                    <el-button size="mini" type="primary">去使用</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="已失效" name="second">
              <el-table :data="couponData" stripe style="width: 100%;background: #EBECF0 !important;">
                <el-table-column
                  type="selection"
                  width="50">
                </el-table-column>
                <el-table-column prop="coupon_name" label="优惠券" width="230">
                  <template  slot-scope="scope">
                    <discount-coupons>
                      <span slot="coupon_type">{{scope.row.coupon_name}}</span>
                      <span slot="discount">{{scope.row.coupon_price}}</span>
                      <span slot="decrease">满99元使用</span>
                      <span slot="getCoupon">已失效</span>
                    </discount-coupons>
                  </template>
                </el-table-column>
                <el-table-column prop="" label="来源/限用" width="190">
                  <template slot-scope="scope">
                    <span style="color:gray;opacity: 0.8">{{scope.row.coupon_from}}</span>
                  </template>
                </el-table-column>
                <el-table-column prop="coupon_price" label="优惠金额" width="110">
                </el-table-column>
                <el-table-column prop="coupon_indate" label="有效期" width="200">
                </el-table-column>
                <el-table-column prop="operation" label="操作">
                  <template  slot-scope="scope">
                    <el-button size="mini" type="danger">删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
          </el-tab-pane></el-tab-pane>
        </el-tabs>
      </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import leftTab from "@/components/module/leftTab"
  import DiscountCoupon from '@/components/module/DiscountCoupon'
  import DiscountCoupons from '@/components/module/DiscountCoupons'
  import DiscountCouponss from '@/components/module/DiscountCouponss'
  export default {
    components:{
      leftTab,DiscountCoupon,DiscountCoupons,DiscountCouponss
    },
    data () {
      return {
        activeName: 'first',
        activeName1:'first',
        activeName2:'first',
        msg:"coupon",
        routeArr:{
          userInfo:"我的主页",
          coupon:"我的红包",
          order:"我的团购",
          goods:"我的订单",
        },
        couponData:[
          {
            coupon_name:"商家优惠券",
            coupon_from:"乐扣乐扣峻佳专卖店",
            coupon_price:"￥10",
            coupon_indate:"2018-11-11到2018-11-13"
          },
          {
            coupon_name:"商家优惠券",
            coupon_from:"小瞎子745316",
            coupon_price:'￥10',
            coupon_indate:"2018-11-11到2018-11-13"
          },
          {
            coupon_name:"商家优惠券",
            coupon_from:"vwe旗舰店",
            coupon_price:'￥10',
            coupon_indate:"2018-11-11到2018-11-13"
          },
          {
            coupon_name:"商家优惠券",
            coupon_from:"vwe旗舰店",
            coupon_price:'￥10',
            coupon_indate:"2018-11-11到2018-11-13"
          }
        ],
        sysCouponData:[
          {
            coupon_name:"通用优惠券",
            coupon_from:"系统赠送/全场通用",
            coupon_price:"￥10",
            coupon_indate:"2018-11-11到2018-11-13"
          },
          {
            coupon_name:"通用优惠券",
            coupon_from:"系统赠送/全场通用",
            coupon_price:'￥10',
            coupon_indate:"2018-11-11到2018-11-13"
          },
          {
            coupon_name:"通用优惠券",
            coupon_from:"系统赠送/全场通用",
            coupon_price:'￥10',
            coupon_indate:"2018-11-11到2018-11-13"
          },
          {
            coupon_name:"通用优惠券",
            coupon_from:"系统赠送/全场通用",
            coupon_price:'￥10',
            coupon_indate:"2018-11-11到2018-11-13"
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
